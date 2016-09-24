<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/8
 * Time: 17:53
 */

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%Category}}".
 *
 * @property integer $id
 * @property string $category_name
 * @property integer $created_at
 * @property integer $updated_at
 */
class Category extends ActiveRecord
{


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%category}}';
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
            [['category_name'], 'required', 'message' => '{attribute}不能为空'],
            [['created_by', 'created_at', 'updated_at'], 'integer'],
            [['category_name'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'          => 'ID',
            'category_name' => '分类名称',
            'created_at'  => 'Created At',
            'updated_at'  => 'Updated At',
        ];
    }


    public function getTopics()
    {
        return self::hasMany(Topic::className(), ['category_id' => 'id']);
    }

}