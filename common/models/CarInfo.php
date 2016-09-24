<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%car_info}}".
 *
 * @property integer $id
 * @property integer $car_number
 * @property integer $brand_id
 * @property integer $cars_id
 * @property string $url
 * @property string $img_url
 * @property string $present_price
 * @property string $original_price
 * @property double $age
 * @property integer $models
 * @property double $mileage
 * @property integer $transmission_box
 * @property integer $displacement
 * @property integer $emission
 * @property integer $color
 * @property string $title
 * @property string $registration_date
 * @property string $city
 * @property string $chezhu
 * @property string $chezhu_type
 * @property string $car_address
 * @property string $inspection_experice
 * @property string $high_insurance_experice
 * @property string $commercial_insurance_expires
 * @property integer $Transfer times
 * @property string $chezhu_remark
 * @property string $check_report
 * @property string $config_parameters
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $create_uid
 * @property integer $update_uid
 * @property integer $check_uid
 */
class CarInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%car_info}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['car_number', 'brand_id', 'cars_id', 'models', 'transmission_box', 'displacement', 'emission', 'color', 'Transfer times', 'created_at', 'updated_at', 'create_uid', 'update_uid', 'check_uid'], 'integer'],
            [['age', 'mileage'], 'number'],
            [['check_report', 'config_parameters'], 'string'],
            [['url', 'img_url', 'title', 'chezhu', 'chezhu_type', 'car_address', 'inspection_experice', 'high_insurance_experice', 'commercial_insurance_expires', 'chezhu_remark'], 'string', 'max' => 255],
            [['present_price', 'original_price', 'registration_date'], 'string', 'max' => 15],
            [['city'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'car_number' => '车源编号',
            'brand_id' => 'Brand ID',
            'cars_id' => 'Cars ID',
            'url' => 'Url',
            'img_url' => 'Img Url',
            'present_price' => '价格',
            'original_price' => 'Original Price',
            'age' => '车龄',
            'models' => '车型',
            'mileage' => '行驶里程',
            'transmission_box' => '变速箱',
            'displacement' => '排量',
            'emission' => '排放标准',
            'color' => '颜色',
            'title' => 'Title',
            'registration_date' => '上牌时间',
            'city' => '上牌地',
            'chezhu' => '车主',
            'chezhu_type' => 'Chezhu Type',
            'car_address' => '车辆地址',
            'inspection_experice' => '年检到期时间',
            'high_insurance_experice' => '强交险到期日期',
            'commercial_insurance_expires' => '商业险到期',
            'Transfer times' => '转让次数',
            'chezhu_remark' => '车主标注',
            'check_report' => '车辆检测报告 json',
            'config_parameters' => '配置参数 json',
            'created_at' => '创建时间',
            'updated_at' => '更新时间',
            'create_uid' => '创建人',
            'update_uid' => '更新人',
            'check_uid' => '检测人的id',
        ];
    }
}
