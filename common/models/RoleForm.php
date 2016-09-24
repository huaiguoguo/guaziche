<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 19:55
 */

namespace common\models;

use yii;
use yii\base\Model;
use common\core\HoComm;

class RoleForm extends Model
{

    public $name;
    public $description;
    public $children;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required', 'message' => '请填写{attribute}'],
            [['name'], 'unique', 'targetClass' => '\common\models\Authitem', 'message' => '此角色已经添加过了'],
        ];
    }


    public function attributeLabels()
    {
        return [
            'name'        => '角色名称',
            'description' => '角色描述',
        ];
    }


    public function add()
    {
        $auth = Yii::$app->authManager;
        $createObj              = $auth->createRole($this->name);
        $createObj->description = $this->description;
        $createObj->level       = 1;
        if($auth->add($createObj)){
            HoComm::getMenuCopy(true);
            return true;
        }else{
            false;
        }
    }


}