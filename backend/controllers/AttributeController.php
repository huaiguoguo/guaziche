<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/8/2
 * Time: 19:58
 */

namespace backend\controllers;


class AttributeController
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
            if ($CategoryModel->load(Yii::$app->request->post()) && $CategoryModel->validate()) {
                if ($CategoryModel->save()) {
                    return self::success('新增分类成功', 'index');
                } else {
                    return self::error('新增分类失败', 'add');
                }
            }
        }

        $data['Category'] = $CategoryModel;

        return $this->render('add', $data);
    }

    public function actionEdit()
    {
        $data          = [];
        $id            = Yii::$app->request->post('id');
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
        $list         = Category::find()->select('')->where(['is_show' => 1, 'type'=>1])->all();
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
        $list         = Category::find()->select('')->where(['is_show' => 1, 'type'=>2])->all();

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
        $list         = Category::find()->select('')->where(['is_show' => 1, 'type'=>3])->all();

        $data['list'] = $list;
        return $this->render('speci', $data);
    }


}