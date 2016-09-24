<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/19
 * Time: 10:27
 */

namespace backend\controllers;

use Yii;
use common\extend\EController;
use common\models\Topic;
use yii\db\Exception;
use yii\web\Response;

class PostController extends EController
{


    public function actionIndex()
    {
        $data = [];

        $data['post'] = Topic::find()->where(['<', 'status', 5])->with('user')->with('looks')->all();

        return $this->render('index', $data);
    }


    public function actionDelete(){
        $response = Yii::$app->response;
        if(Yii::$app->request->isAjax && Yii::$app->request->isPost){
            $id = Yii::$app->request->post('id');
            try{
                $post = Topic::findOne($id);
                $post->status = 5;
                $post->update();
                $response->statusCode = 200;
                $response->format = Response::FORMAT_JSON;
                $response->data = ['code'=>200, 'msg'=>'删除成功', 'error'=>''];
                $response->send();
            }catch (Exception $e){
                $response->statusCode = 500;
                $response->format = Response::FORMAT_JSON;
                $response->data = ['code'=>500, 'msg'=>'删除失败', 'error'=>$e->getMessage()];
                $response->send();
            }
        }

    }

}