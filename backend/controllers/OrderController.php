<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 9:51
 */

namespace backend\controllers;


use common\models\Order;
use yii\web\Controller;

class OrderController extends Controller
{
    public function actionIndex()
    {
        $data = [];

        $data['order'] = Order::find()->all();

        return $this->render('index', $data);
    }

}