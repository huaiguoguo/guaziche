<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/17
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 17:06
 */

namespace backend\controllers;

use yii;
use yii\helpers\Json;
use yii\base\Exception;
use common\helper\Dump;
use common\extend\EController;


class MenuController extends EController
{
    public function actionIndex(){
        $data = [];
        $data['modelName'] = 'menu';
        $data['where'] = '';
        return $this->render('index', $data);
    }

    public function actionAdd(){
        $data = [];
        return $this->render('add', $data);
    }

    public function actionEdit(){
        $data = [];
        return $this->render('edit', $data);
    }

}