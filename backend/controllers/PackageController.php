<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/5/21
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 18:13
 */

namespace backend\controllers;

use yii;
use yii\helpers\Json;
use yii\base\ErrorException;
use yii\base\Exception;

use common\extend\EController;
use common\models\Packages;
use common\models\Goods;
use common\models\PackageGoods;
use common\helper\Dump;

class PackageController extends EController
{
    public function actionIndex()
    {
        $data                = [];
        $data['packagelist'] = Packages::find()->all();

        return $this->render("index", $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 新增套餐
     * @return string|yii\web\Response
     */
    public function actionAdd()
    {

        $data = [];
        if (Yii::$app->request->post()) {

            $PackagesData = Yii::$app->request->post();

            //先写入主库表里面
            $PackagesModel = new Packages();
            //判断是不是已经存在
            $isHave = $PackagesModel->find()->where(['package_name' => $PackagesData['Packages']['package_name']])->one();
            if ($isHave) {
                return self::error("套餐{$PackagesData['Packages']['package_name']}已经存在", 'index');
            }

            $ArrGoodsId = $PackagesData['Packages']['goods_id'];
            unset($PackagesData['Packages']['goods_id']);

            $transaction = Yii::$app->db->beginTransaction();
            try {
                if ($PackagesModel->load($PackagesData) && $PackagesModel->validate()) {
                    if (!$PackagesModel->save()) {
                        $errors = $PackagesModel->getErrors();
                    }
                } else {
                    $errors = $PackagesModel->getErrors();
                }

                if (isset($errors)) {
                    throw new Exception(json_encode($errors));
                }

                //再循环把商品写入套餐商品表里面
                foreach ($ArrGoodsId as $value) {
                    $PackageGoodsModel                              = new PackageGoods();
                    $PackageGoodsData['PackageGoods']['package_id'] = $PackagesModel->package_id;
                    $PackageGoodsData['PackageGoods']['goods_id']   = intval($value);
                    if ($PackageGoodsModel->load($PackageGoodsData) && $PackageGoodsModel->validate()) {
                        if (!$PackageGoodsModel->save()) {
                            $goods_errors[$value] = $PackageGoodsModel->getErrors();
                        }
                    } else {
                        $goods_errors[$value] = $PackageGoodsModel->getErrors();
                    }
                }
                if (isset($goods_errors)) {
                    throw new Exception(json_encode($goods_errors));
                }

                $transaction->commit();

                return self::success('新增套餐成功', 'index');
            } catch (Exception $e) {
                $transaction->rollBack();
                if ($e->getMessage()) {
                    return self::error("{$e->getMessage()}", "add");
                }
            }
        }


        $data['goods']   = Goods::find()->all();
        $data['Package'] = new Packages();
        $data['form']    = yii\widgets\ActiveForm::begin([
                                                             'options'            => ['class' => 'form-horizontal'],
                                                             'enableClientScript' => '',
                                                             'method'             => 'post',
                                                             'fieldConfig'        => [
                                                                 'template'     => "{label}\n<div class=\"col-sm-10\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                                 'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                             ]
                                                         ]);

        return $this->render('add', $data);
    }


    public function actionEdit()
    {
        $data          = [];
        $id            = Yii::$app->request->get('id');
        $PackagesModel = Packages::findOne($id);
        if (!$PackagesModel) {
            return self::error('非法操作', 'index');
        }
        if (Yii::$app->request->post()) {

            $PackagesData = Yii::$app->request->post();

            //先更新主库表
            $ArrGoodsId = $PackagesData['Packages']['goods_id'];
            unset($PackagesData['Packages']['goods_id']);

            $transaction = Yii::$app->db->beginTransaction();
            try {
                if ($PackagesModel->load($PackagesData) && $PackagesModel->validate()) {
                    if (!$PackagesModel->save()) {
                        $errors = $PackagesModel->getErrors();
                    }
                } else {
                    $errors = $PackagesModel->getErrors();
                }

                if (isset($errors)) {
                    throw new Exception(json_encode($errors));
                }

                $isDelete = PackageGoods::deleteAll(['package_id' => $id]);
                if (!$isDelete) {
                    throw new Exception("清除{$PackagesModel->package_name}所属的商品失败");
                }

                //再循环把商品写入套餐商品表里面
                foreach ($ArrGoodsId as $value) {
                    $PackageGoodsModel                              = new PackageGoods();
                    $PackageGoodsData['PackageGoods']['package_id'] = $PackagesModel->package_id;
                    $PackageGoodsData['PackageGoods']['goods_id']   = intval($value);
                    if ($PackageGoodsModel->load($PackageGoodsData) && $PackageGoodsModel->validate()) {
                        if (!$PackageGoodsModel->save()) {
                            $goods_errors[$value] = $PackageGoodsModel->getErrors();
                        }
                    } else {
                        $goods_errors[$value] = $PackageGoodsModel->getErrors();
                    }
                }
                if (isset($goods_errors)) {
                    throw new Exception(json_encode($goods_errors));
                }

                $transaction->commit();

                return self::success('更新套餐成功', 'index');
            } catch (Exception $e) {
                $transaction->rollBack();
                if ($e->getMessage()) {
                    return self::error("{$e->getMessage()}", "add");
                }
            }

        }
        $data['goods']    = Goods::find()->all();
        $data['Packages'] = $PackagesModel;
        $data['form']     = yii\widgets\ActiveForm::begin([
                                                              'options'            => ['class' => 'form-horizontal'],
                                                              'enableClientScript' => '',
                                                              'method'             => 'post',
                                                              'fieldConfig'        => [
                                                                  'template'     => "{label}\n<div class=\"col-sm-10\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                                  'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                              ]
                                                          ]);

        return $this->render('edit', $data);
    }


    public function actionAddgoods()
    {
        $data = [];
        $data['goods']   = Goods::find()->all();
        return $this->render('add-goods', $data);
    }


}