<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/9
 * Time: 21:30
 */

namespace common\models;

use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%looks}}".
 *
 * @property integer  $id
 * @property integer $topic_id
 * @property integer $created_by
 * @property integer $created_at
 * @property integer $updated_at
 */
class Looks extends ActiveRecord
{


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%looks}}';
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
            [['topic_id', 'created_by'], 'required', 'message' => '{attribute}不能为空'],
            [['topic_id', 'created_by', 'created_at', 'updated_at'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'         => 'ID',
            'topic_id'   => '标题',
            'created_by' => '观看人',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }


    public function getUser()
    {
        return self::hasOne(User::className(), ['id' => 'created_by']);
    }

    public function getTopic()
    {
        return self::hasOne(Topic::className(), ['id' => 'topic_id']);
    }


}