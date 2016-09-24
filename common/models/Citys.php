<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%citys}}".
 *
 * @property integer $id
 * @property string $pinyin
 * @property string $city_name
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $status
 */
class Citys extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%citys}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['created_at', 'updated_at', 'status'], 'integer'],
            [['pinyin'], 'string', 'max' => 5],
            [['city_name'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'pinyin' => 'Pinyin',
            'city_name' => 'City Name',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'status' => 'Status',
        ];
    }
}
