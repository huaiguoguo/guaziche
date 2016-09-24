<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/17
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 18:06
 */

namespace backend\components;

use yii;
use yii\helpers\Json;
use yii\helpers\Html;
use yii\base\Exception;
use yii\base\Widget;


use common\helper\Dump;
use common\models\Menu;


class NavWidget extends Widget
{
    public function run()
    {
        $data = [];
//        $nav = Menu::find()
//            ->orderBy('sort ASC')
//            ->all();
//        $navs = [];
//        foreach($nav as $_v){
//            $navs[] = $_v->id.'|'.$_v->nav_cn.'|'.$_v->nav_en;
//        }

//        $data['nav'] = $navs;


        return $this->render('menu', $data);
    }
}