<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%cars}}".
 *
 * @property integer $id
 * @property integer $brand_id
 * @property string $cars_name
 * @property string $url
 * @property string $title
 * @property string $data-gzlog
 * @property integer $created_at
 * @property integer $updated_at
 */
class Cars extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%cars}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['brand_id', 'created_at', 'updated_at'], 'integer'],
            [['cars_name'], 'string', 'max' => 50],
            [['url', 'title', 'data-gzlog'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'brand_id' => 'Brand ID',
            'cars_name' => 'Cars Name',
            'url' => 'Url',
            'title' => 'Title',
            'data-gzlog' => 'Data Gzlog',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
