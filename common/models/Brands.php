<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%brands}}".
 *
 * @property integer $id
 * @property string $brand_name
 * @property string $pinyin
 * @property integer $created_at
 * @property string $url
 * @property string $data-gzlog
 * @property string $title
 * @property integer $updated_at
 */
class Brands extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%brands}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['created_at', 'updated_at'], 'integer'],
            [['brand_name'], 'string', 'max' => 50],
            [['pinyin'], 'string', 'max' => 5],
            [['url', 'data-gzlog', 'title'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'brand_name' => 'Brand Name',
            'pinyin' => 'Pinyin',
            'created_at' => 'Created At',
            'url' => 'Url',
            'data-gzlog' => 'Data Gzlog',
            'title' => 'Title',
            'updated_at' => 'Updated At',
        ];
    }
}
