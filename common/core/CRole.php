<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/8
 * Time: 2:01
 */

namespace common\core;


use yii\rbac\Role;

class CRole extends Role
{
    public $level;
    public $sort;
}