<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/8
 * Time: 17:36
 */

namespace common\models;

use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Follow model
 *
 * @property integer $id
 * @property integer $from_to
 * @property integer $follow
 * @property integer $created_at
 * @property integer $updated_at
 */
class Follow extends ActiveRecord
{

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%follow}}';
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
            [['from_to', 'follow'], 'required'],
            [['created_at', 'created_at'], 'integer']
        ];
    }


    public function attributeLabels()
    {
        return [
            'id'         => 'ID',
            'from_to'    => '被关注人',
            'follow'     => '关注人',
            'created_at' => '创建时间',
            'updated_at' => '更新时间',
        ];
    }



    public function getFromuser(){
        return $this->hasOne(User::className(), ['id'=>'from_to']);
    }

    public function getFollowuser(){
        return $this->hasOne(User::className(), ['id'=>'follow']);
    }



}