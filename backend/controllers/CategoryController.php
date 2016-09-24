<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/19
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 23:12
 */

namespace backend\controllers;

use common\models\Category;
use yii;
use yii\helpers\Json;
use yii\base\Exception;
use common\helper\Dump;
use common\extend\EController;


class CategoryController extends EController
{
    public function actionIndex()
    {
        $data         = [];
        $list         = Category::find()->select('cat_id, cat_name as text, parent_id')->where(['is_show' => 1])->asArray()->all();
        $list         = $this->list_to_tree($list, 'cat_id', 'parent_id', 'children');
        $data['list'] = $list;
        return $this->render('index', $data);
    }

    public function actionAdd()
    {
        $data          = [];
        $CategoryModel = new Category();
        if (Yii::$app->request->post()) {
            $postData                          = Yii::$app->request->post();
            $postData['Category']['parent_id'] = 0;
            $postData['Category']['type']      = Yii::$app->request->get('type');
            if ($CategoryModel->load($postData) && $CategoryModel->validate()) {
                if ($CategoryModel->save()) {
                    return self::success('新增分类成功', 'index');
                } else {
                    return self::error('新增分类失败', 'add');
                }
            } else {
                dump($CategoryModel->getErrors());
            }
        }

        $data['Category'] = $CategoryModel;

        return $this->render('add', $data);
    }


    public function actionEdit()
    {
        $data          = [];
        $id            = Yii::$app->request->get('id');
        $CategoryModel = Category::findOne($id);
        if (!$CategoryModel) {
            return self::error('非法操作', 'index');
        }
        if (Yii::$app->request->post()) {
            if ($CategoryModel->load(Yii::$app->request->post()) && $CategoryModel->validate()) {
                if ($CategoryModel->save()) {
                    return self::success('更新成功', 'index');
                } else {
                    return self::error('更新失败', ['edit', 'id' => $id]);
                }
            }
        }
        $data['Category'] = $CategoryModel;

        return $this->render('edit', $data);
    }


    public function actionDel()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->post()) {
            $id  = Yii::$app->request->post('id');
            $res = Category::findOne($id);
            if (!$res) return Json::encode($this->makeinformation(505, '非法操作'));

            if (intval($res->parent_id) > 0) {
                return Json::encode($this->makeinformation(505, '请先删除子分类'));
            }

            if ($res->delete()) {
                $json = Json::encode($this->makeinformation(200, '删除成功'));
            } else {
                $json = Json::encode($this->makeinformation(505, '删除失败'));
            }

            return $json;
        }
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: ......
     * @return string
     */
    public function actionSpace()
    {
        $data         = [];
        $list         = Category::find()->select('')->where(['is_show' => 1, 'type' => 1])->all();
        $data['list'] = $list;

        return $this->render('space', $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: ......
     * @return string
     */
    public function actionFunc()
    {
        $data = [];
        $list = Category::find()->select('')->where(['is_show' => 1, 'type' => 2])->all();

        $data['list'] = $list;

        return $this->render('func', $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: ......
     * @return string
     */
    public function actionSpeci()
    {
        $data = [];
        $list = Category::find()->select('')->where(['is_show' => 1, 'type' => 3])->all();

        $data['list'] = $list;

        return $this->render('speci', $data);
    }


    function generateTree($items)
    {
        $tree = array();
        foreach ($items as $item) {
            if (isset($items[$item['parent_id']])) {
                $items[$item['parent_id']]['son'][] = &$items[$item['cat_id']];
            } else {
                $tree[] = &$items[$item['cat_id']];
            }
        }

        return $tree;
    }


}