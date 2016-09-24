<?php

namespace common\models;

use Yii;

use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%topic}}".
 *
 * @property integer $id
 * @property string $title
 * @property string $content
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $status
 */
class Topic extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%topic}}';
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
            [['title', 'content'], 'required', 'message' => '{attribute}不能为空'],
            [['category_id'], 'required', 'message' => '请选择{attribute}'],
            [['content'], 'string'],
            [['category_id', 'created_by', 'created_at', 'updated_at', 'status'], 'integer'],
            [['title'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'          => 'ID',
            'title'       => '标题',
            'content'     => '内容',
            'category_id' => '分类',
            'created_by'  => 'Created By',
            'created_at'  => 'Created At',
            'updated_at'  => 'Updated At',
            'status'      => '状态',
        ];
    }


    public function getUser()
    {
        return self::hasOne(User::className(), ['id' => 'created_by']);
    }

    public function getCategory()
    {
        return self::hasOne(Category::className(), ['id' => 'category_id']);
    }

    public function getComments()
    {
        return self::hasMany(Comment::className(), ['topic_id' => 'id']);
    }

    public function getVotes()
    {
        return self::hasMany(Vote::className(), ['topic_id' => 'id']);
    }


    public function getLooks()
    {
        return self::hasMany(Looks::className(), ['topic_id' => 'id']);
    }


}
