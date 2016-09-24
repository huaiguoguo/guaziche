<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/8
 * Time: 18:00
 */

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%topic}}".
 *
 * @property integer $id
 * @property string $category_name
 * @property integer $created_at
 * @property integer $updated_at
 */
class Vote extends ActiveRecord
{


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%vote}}';
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
            [['topic_id', 'type', 'created_by', 'created_at', 'updated_at'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'         => 'ID',
            'topic_id'   => '贴子id',
            'created_by' => '创建人',
            'created_at' => '创建时间',
            'updated_at' => '更新时间',
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