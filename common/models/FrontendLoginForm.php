<?php
namespace common\models;

use Yii;
use yii\base\Model;
use common\core\HoComm;


/**
 * Login form
 */
class FrontendLoginForm extends Model
{
    public $username;
    public $password;
    public $rememberMe = true;
    public $flag;

    private $_user;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // username and password are both required
            [['username', 'password'], 'required', 'message' => '{attribute}不能为空'],
            // rememberMe must be a boolean value
            ['rememberMe', 'boolean'],
            // password is validated by validatePassword()
            ['password', 'validatePassword'],
        ];
    }

    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = $this->getUser();
            if (!$user || !$user->validatePassword($this->password)) {
                $this->addError($attribute, '用户名或密码错误');
            }
        }
    }

    /**
     * Logs in a user using the provided username and password.
     *
     * @return boolean whether the user is logged in successfully
     */
    public function login()
    {
        if ($this->validate()) {
            return Yii::$app->user->login($this->getUser(), $this->rememberMe ? 60*60: 600);
        } else {
            return false;
        }
    }

    /**
     * Finds user by [[username]]
     *
     * @return User|null
     */
    protected function getUser()
    {

        if ($this->_user === null) {
            switch (HoComm::CheckStr($this->username)) {
                case "strings":
                    $this->flag  = 1;
                    $this->_user = User::findByUsername($this->username);
                    break;
                case "mobile":
                    $this->flag  = 2;
                    $this->_user = User::findByMobile($this->username);
                    break;
                case "email":
                    $this->flag  = 3;
                    $this->_user = User::findByEmail($this->username);
                    break;
            }
        }

        return $this->_user;
    }


    public function attributeLabels()
    {
        return [
            'username'   => '用户名',
            'mobile'     => '手机',
            'email'      => '邮箱',
            'password'   => '密码',
            'rememberMe' => '记住登录状态（1个小时）',
        ];
    }


}
