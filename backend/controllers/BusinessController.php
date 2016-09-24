<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 8:25
 */

namespace backend\controllers;

use yii;


class BusinessController extends yii\web\Controller
{


    public function actionIndex()
    {
        $data = [];

        return $this->render('index', $data);
    }


}