<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/7
 * Time: 22:38
 */

namespace frontend\models;

use common\models\User;
use Yii;
use yii\base\Model;

class UserForm extends Model
{
    public $_user;

    public $github_name;
    public $email;
    public $realname;
    public $city;
    public $company;
    public $weibo_name;
    public $weibo_link;
    public $twitter_account;
    public $linkedin;
    public $personal_website;
    public $wechat_qrcode;
    public $payment_qrcode;
    public $introduction;

    public function __construct(array $config = [])
    {
        parent::__construct($config);
        $this->getUser();
    }


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['github_name', 'email'], 'required'],
            ['email', 'email'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'github_name'      => 'Github Name',
            'email'            => '邮箱',
            'realname'         => '真实姓名',
            'city'             => '城市',
            'company'          => '公司',
            'weibo_name'       => '微博用户名',
            'weibo_link'       => '微博个人页面',
            'twitter_account'  => 'Twitter 账号',
            'linkedin'         => 'LinkedIn',
            'personal_website' => '个人网站',
            'wechat_qrcode'    => '微信账号二维码',
            'payment_qrcode'   => '支付二维码',
            'introduction'     => '个人简介'
        ];
    }

    /**
     * Sends an email to the specified email address using the information collected by this model.
     *
     * @param string $email the target email address
     * @return boolean whether the email was sent
     */
    public function app($email)
    {
        return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom([$this->email => $this->name])
            ->setSubject($this->subject)
            ->setTextBody($this->body)
            ->send();
    }


    public function getUser()
    {
        $user = User::findOne(Yii::$app->user->identity->getId());
        return $user;
    }


}
