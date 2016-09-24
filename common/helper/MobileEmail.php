<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/5/30
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 22:10
 */

namespace common\helper;

use yii;
use yii\helpers\Json;
use yii\base\Exception;
use common\helper\Dump;
use yii\validators\Validator;


class MobileEmail extends Validator
{
    public function validateAttribute($model, $attribute)
    {
        if (!is_array($model->$attribute)) {
            $this->addError($model, $attribute, $attribute . '测试');
        }
    }


    
}