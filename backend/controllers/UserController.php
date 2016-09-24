<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 9:53
 */

namespace backend\controllers;


use common\models\User;
use yii\web\Controller;

class UserController extends Controller
{

    public function actionIndex()
    {
        $data = [];

        $data['user'] = User::find()->all();

        return $this->render('index', $data);
    }

}