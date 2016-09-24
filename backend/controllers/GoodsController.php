<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/18
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 23:00
 */

namespace backend\controllers;

use common\models\Category;
use yii;
use yii\helpers\Json;
use yii\base\Exception;
use common\helper\Dump;
use common\extend\EController;
use common\models\Goods;

use yii\web\UploadedFile;
use common\models\UploadForm;
use common\core\HoComm;


class GoodsController extends EController
{




    public function actionIndex()
    {
        $data          = [];
        $data['goods'] = Goods::find()->all();

        return $this->render('index', $data);
    }

    public function actionAdd()
    {
        $data       = [];
        $GoodsModel = new Goods();
        if (Yii::$app->request->isPost) {

            $postData = Yii::$app->request->post();

            $GoodsModel->scenario = 'create';
            $GoodsModel->goods_img    = UploadedFile::getInstance($GoodsModel, 'goods_img');
            if ($GoodsModel->goods_img && $GoodsModel->validate(['goods_img'])) {

                $ext       = $GoodsModel->goods_img->getExtension();
                $DirPath   = Yii::getAlias('@public');
                $goodsDir = $this->checkDir('/upload/goods/');
                $imageName = $goodsDir . date("YmdHis") . mt_rand(100, 99999) . '.' . $ext;
                $isSuccess = $GoodsModel->goods_img->saveAs($DirPath . $imageName);
                if ($isSuccess) {
                    $postData['Goods']['goods_img'] = $imageName;
                    if ($GoodsModel->load($postData) && $GoodsModel->validate()) {
                        if ($GoodsModel->save()) {
                            return $this->success('新增商品成功', '/goods/index');
                        } else {
                            HoComm::error('新增商品失败');
                        }
                    }
                } else {
                    HoComm::error('封面上传失败');
                }
            }

        }

        $data['Goods']                = $GoodsModel;
        $data['green_space']          = Category::findAll(['type'=>1]);
        $data['green_function']       = Category::findAll(['type'=>2]);
        $data['green_specifications'] = Category::findAll(['type'=>3]);

        return $this->render('add', $data);
    }


    public function actionEdit()
    {
        $data       = [];
        $id         = Yii::$app->request->get('id');
        $GoodsModel = Goods::findOne($id);
        if (!$GoodsModel) {
            return self::error('非法操作', 'index');
        }

        if (Yii::$app->request->isPost) {

            $postData = Yii::$app->request->post();
            $image    = UploadedFile::getInstance($GoodsModel, 'goods_img');

            if ($image && $GoodsModel->validate(['goods_img'])) {
                $ext       = $image->getExtension();
                $DirPath   = Yii::getAlias('@public');
                $goodsDir = $this->checkDir('/upload/goods/');
                $imageName = $goodsDir . date("YmdHis") . mt_rand(100, 99999) . '.' . $ext;
                $isSuccess = $image->saveAs($DirPath . $imageName);
                if ($isSuccess) {
                    $postData['Goods']['goods_img'] = $imageName;
                } else {
                    HoComm::success('上传文件失败');
                }
            } else {
                unset($postData['Goods']['goods_img']);
            }

            $GoodsModel->scenario = 'update';
            if ($GoodsModel->load($postData) && $GoodsModel->validate()) {

                if ($GoodsModel->update()) {
                    return $this->success('更新成功', '/goods/index');
                } else if (empty($GoodsModel->getErrors())) {
                    HoComm::info('没有变动');
                } else {
                    HoComm::error('更新失败');
                }
            }
        }


        $data['green_space']          = Category::findAll(['type'=>1]);
        $data['green_function']       = Category::findAll(['type'=>2]);
        $data['green_specifications'] = Category::findAll(['type'=>3]);

        $data['Goods'] = $GoodsModel;

        return $this->render('edit', $data);
    }


    public function actionDel()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->post()) {
            $id  = Yii::$app->request->post('id');
            $res = Goods::findOne($id);
            if (!$res) return Json::encode($this->makeinformation(505, '非法操作'));
            if ($res->delete()) {
                $json = Json::encode($this->makeinformation(200, '删除成功'));
            } else {
                $json = Json::encode($this->makeinformation(505, '删除失败'));
            }

            return $json;
        }
    }


    //上传文件
    public function actionUpload()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->post()) {
            $model       = new UploadForm();
            $model->file = UploadedFile::getInstanceByName('images');
            if ($model->file && $model->validate()) {
                $dir = $this->checkDir('./upload/');
                $model->file->saveAs($dir . $model->file->baseName . '.' . $model->file->extension);

                return $this->ajaxReturn($this->makeinformation(200, '', $model->file->name));
            } else {
                return $this->ajaxReturn($model->getErrors());
            }
        } else {
            return $this->ajaxReturn($this->makeinformation(505, '错误'));
        }
    }


}