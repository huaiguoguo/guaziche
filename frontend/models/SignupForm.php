<?php
namespace frontend\models;

use yii\base\Model;
use common\models\User;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $username;
    public $email;
    public $password;
    public $password_confirmation;
    public $email_public;
    public $rememberMe;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['username', 'email', 'password', 'password_confirmation', 'email_public'], 'required', 'message' => '{attribute}不能为空'],
            ['username', 'unique', 'targetClass' => '\common\models\User', 'message' => '此用户名已被占用'],
            ['username', 'string', 'min' => 2, 'max' => 255],

            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            ['email', 'unique', 'targetClass' => '\common\models\User', 'message' => '此邮箱已被占用'],

            [['username', 'email'], 'trim'],
            [['password', 'password_confirmation'], 'string', 'min' => 6],
            ['email_public', 'in', 'range' => [0, 1]],
        ];
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if (!$this->validate()) {
            return null;
        }

        $user               = new User();
        $user->username     = $this->username;
        $user->email        = $this->email;
        $user->email_public = $this->email_public;
        $user->setPassword($this->password);
        $user->generateAuthKey();
        return $user->save() ? $user : null;
    }


    public function attributeLabels()
    {
        return [
            'username'              => '用户名',
            'email'                 => '邮箱',
            'email_public'          => '邮箱公开',
            'password'              => '密码',
            'password_confirmation' => '确认密码',
        ];
    }


}
