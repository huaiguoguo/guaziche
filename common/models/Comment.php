<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%comment}}".
 *
 * @property integer $id
 * @property integer $user_id
 * @property string $content
 * @property integer $topic_id
 * @property integer $created_at
 * @property integer $updated_at
 */
class Comment extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%comment}}';
    }

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
            [['user_id', 'content', 'topic_id'], 'required'],
            [['user_id', 'topic_id', 'created_at', 'updated_at'], 'integer'],
            [['content'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'content' => 'Content',
            'topic_id' => 'Topic ID',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }


    public function getUser(){
        return self::hasOne(User::className(), ['id'=>'created_by']);
    }


    public function getTopic(){
        return self::hasOne(Topic::className(), ['id'=>'topic_id']);
    }


    public function getLook(){
        return self::hasOne(Looks::className(), ['topic_id'=>'id']);
    }


}
