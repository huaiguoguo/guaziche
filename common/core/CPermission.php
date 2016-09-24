<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/8
 * Time: 1:26
 */
namespace common\core;


use yii\rbac\Permission;

class CPermission extends Permission{
    public $level;
    public $sort;
}