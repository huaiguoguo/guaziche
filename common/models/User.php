<?php

namespace common\models;

use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * Admin model
 *
 * @property integer $id
 * @property string $username
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $email_public
 * @property string $mobile
 * @property string $auth_key
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $realname
 * @property integer $introduction
 * @property string $password write-only password
 */
class User extends ActiveRecord implements IdentityInterface
{
    const STATUS_DELETED = 0;
    const STATUS_ACTIVE = 10;


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            TimestampBehavior::className(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
//            [['github_name', 'email'], 'required'],
            ['email', 'email'],
            ['email_public', 'default', 'value' => 1],
            ['status', 'default', 'value' => self::STATUS_ACTIVE],
            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_DELETED]],
            [['introduction', 'realname', 'city', 'company', 'weibo_name', 'weibo_link', 'twitter_account'], 'string'],
            [['email_public'], 'integer']
        ];
    }


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
            'introduction'     => '个人简介',
            'email_public'     => '邮箱公开'
        ];
    }



    public function getTopics(){
        return $this->hasMany(Topic::className(), ['created_by'=>'id']);
    }


    public function getComments(){
        return self::hasMany(Comment::className(), ['created_by'=>'id']);
    }

    //关注本人的
    public function getFollowers()
    {
        return $this->hasMany(Follow::className(), ['from_to' => 'id']);
    }


    //本人关注的
    public function getFollowings()
    {
        return $this->hasMany(Follow::className(), ['follow' => 'id']);
    }


    public function getVotes()
    {
        return $this->hasMany(Vote::className(), ['created_by' => 'id']);
    }



    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne(['id' => $id, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * Finds user by password reset token
     *
     * @param string $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        if (!static::isPasswordResetTokenValid($token)) {
            return null;
        }

        return static::findOne([
                                   'password_reset_token' => $token,
                                   'status'               => self::STATUS_ACTIVE,
                               ]);
    }

    /**
     * Finds out if password reset token is valid
     *
     * @param string $token password reset token
     * @return boolean
     */
    public static function isPasswordResetTokenValid($token)
    {
        if (empty($token)) {
            return false;
        }

        $timestamp = (int)substr($token, strrpos($token, '_') + 1);
        $expire    = Yii::$app->params['user.passwordResetTokenExpire'];

        return $timestamp + $expire >= time();
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return Yii::$app->security->validatePassword($password, $this->password_hash);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password_hash = Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = Yii::$app->security->generateRandomString();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = Yii::$app->security->generateRandomString() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }
}
