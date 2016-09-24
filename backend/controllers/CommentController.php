<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 8:35
 */

namespace backend\controllers;

use yii;
use yii\web\Controller;
use common\models\Comment;

class CommentController extends Controller
{
    public function actionIndex()
    {
        $data = [];

        $data['comment'] = Comment::find()->with('user')->with('user')->with('topic')->with('look')->all();

        return $this->render('index', $data);
    }

}