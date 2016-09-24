<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/23
 * Time: 17:31
 */

namespace backend\controllers;

use common\core\HoComm;
use common\models\CasehallImg;
use yii;
use common\extend\EController;
use common\models\Casehall;
use yii\web\UploadedFile;

class CasehallController extends EController
{

    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 案例列表
     * @return string
     */
    public function actionIndex()
    {
        $data = [];

        $data['casehall'] = Casehall::find()->all();

        return $this->render('index', $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 新增案例
     * @return string
     */
    public function actionAdd()
    {
        $data      = [];
        $caseModel = new Casehall();
        if (Yii::$app->request->isPost) {
            $postData = Yii::$app->request->post();

            $caseModel->scenario = 'create';
            $caseModel->image    = UploadedFile::getInstance($caseModel, 'image');
            if ($caseModel->image && $caseModel->validate(['image'])) {

                $ext       = $caseModel->image->getExtension();
                $DirPath   = Yii::getAlias('@public');
                $imageName = '/upload/' . date("YmdHis") . mt_rand(100, 99999) . '.' . $ext;
                $isSuccess = $caseModel->image->saveAs($DirPath . $imageName);
                if ($isSuccess) {
                    $postData['Casehall']['image'] = $imageName;
                    if ($caseModel->load($postData) && $caseModel->validate()) {
                        if ($caseModel->save()) {
                            return $this->success('新增案例成功', '/casehall/index');
                        } else {
                            HoComm::success('新增案例失败');
                        }
                    }
                } else {
                    HoComm::success('上传文件失败');
                }
            }
        }

        $data['Casehall'] = $caseModel;

        return $this->render('add', $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 编辑案例
     * @return string
     */
    public function actionEdit()
    {
        $data      = [];
        $id        = Yii::$app->request->get('id');
        $caseModel = Casehall::findOne(intval($id));
        if (!$caseModel) {
            return $this->goBack(['/casehall/index']);
        }
        if (Yii::$app->request->isPost) {
            $postData = Yii::$app->request->post();
            $image    = UploadedFile::getInstance($caseModel, 'image');
            if ($image && $caseModel->validate(['image'])) {
                $ext       = $image->getExtension();
                $DirPath   = Yii::getAlias('@public');
                $imageName = '/upload/' . date("YmdHis") . mt_rand(100, 99999) . '.' . $ext;
                $isSuccess = $image->saveAs($DirPath . $imageName);
                if ($isSuccess) {
                    $postData['Casehall']['image'] = $imageName;
                } else {
                    HoComm::success('上传文件失败');
                }
            } else {
                unset($postData['Casehall']['image']);
            }

            $caseModel->scenario = 'update';
            if ($caseModel->load($postData) && $caseModel->validate()) {
                if ($caseModel->save()) {
                    return $this->success('新增案例成功', '/casehall/index');
                } else {
                    HoComm::error('新增案例失败');
                }
            }
        }

        $data['Casehall'] = $caseModel;

        return $this->render('add', $data);
    }


    public function actionAddimage()
    {
        $data     = [];
        $id       = Yii::$app->request->get('id');
        $casehall = Casehall::findOne($id);
        if (!$casehall) {
            return $this->error('非法操作', ['/casehall/index']);
        }

        $data['list'] = CasehallImg::findAll(['case_id' => $id]);

        $data['id'] = intval(trim($id));

        return $this->render('addimage', $data);
    }


    public function actionUploadImage()
    {
        $response         = Yii::$app->response;
        $response->format = yii\web\Response::FORMAT_JSON;

        $DirPath = Yii::getAlias('@public');
        $file    = UploadedFile::getInstanceByName('casehallimage');
        $newName = "/upload/" . date("YmdHis") . mt_rand(100, 99999) . '.' . $file->getExtension();
        if ($file->saveAs($DirPath . $newName)) {
            $CasehallImage          = new CasehallImg();
            $CasehallImage->case_id = Yii::$app->request->post('id');
            $CasehallImage->image   = $newName;

            if ($CasehallImage->save()) {
                $response->data = ['code' => 200, 'msg' => '上传成功', 'data' => '/' . $newName];
            } else {
                $response->setStatusCode(505);
                $response->data = ['code' => 505, 'msg' => '上传失败', 'data' => ''];
            }
        } else {
            $response->setStatusCode(417);
            $response->data = ['code' => 417, 'msg' => '上传文件失败', 'data' => ''];
        }
        $response->send();
    }

}