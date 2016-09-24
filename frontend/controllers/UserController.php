<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/4
 * Time: 7:30
 */
namespace frontend\controllers;

use yii;
use common\models\User;
use yii\web\Controller;

class UserController extends Controller
{


    public function actionIndex()
    {
        $data = [];

        if(Yii::$app->request->get('id') == 0){
            return $this->redirect('/');
        }
        $data['userinfo'] = Yii::$app->user->identity;

        if(Yii::$app->user->isGuest  || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $data['userinfo'] = User::findOne($id);
        }

        return $this->render('index', $data);
    }


    public function actionEdit()
    {
        $data = [];

        $User = User::findOne(Yii::$app->user->identity->getId());

        if (Yii::$app->request->isPost) {
            if ($User->load(Yii::$app->request->post()) && $User->validate()) {
                if ($User->save()) {
                    Yii::$app->session->setFlash('success', 'this is success message');
                } else {
                    Yii::$app->session->setFlash('error', 'this is error message');
                }
            }
        }


        $data['User'] = $User;

        return $this->render('edit', $data);
    }


    public function actionTopics()
    {

        $data = [];

        $data['list'] = Yii::$app->user->identity->topics;
        $data['userinfo'] = Yii::$app->user->identity;
        if(Yii::$app->user->isGuest  || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $userinfo = User::findOne($id);
            $data['userinfo'] = $userinfo;
            $data['list'] = $userinfo->topics;
        }

        return $this->render('topics', $data);
    }

    public function actionReplies()
    {
        $data = [];
        $data['list'] = Yii::$app->user->identity->comments;
        $data['userinfo'] = Yii::$app->user->identity;
        if(Yii::$app->user->isGuest || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $userinfo = User::findOne($id);
            $data['userinfo'] = $userinfo;
            $data['list'] = $userinfo->comments;
        }
        return $this->render('replies', $data);
    }


    public function actionFollower()
    {
        $data = [];
        $data['list'] = Yii::$app->user->identity->followers;
        $data['userinfo'] = Yii::$app->user->identity;
        if(Yii::$app->user->isGuest  || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $userinfo = User::findOne($id);
            $data['userinfo'] = $userinfo;
            $data['list'] = $userinfo->followers;
        }
        return $this->render('followers', $data);
    }


    public function actionFollowing()
    {
        $data = [];
        $data['list'] = Yii::$app->user->identity->followings;
        $data['userinfo'] = Yii::$app->user->identity;
        if(Yii::$app->user->isGuest  || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $userinfo = User::findOne($id);
            $data['userinfo'] = $userinfo;
            $data['list'] = $userinfo->followings;
        }
        return $this->render('following', $data);
    }

    public function actionVotes()
    {
        $data = [];

        $data['list'] = Yii::$app->user->identity->votes;
        $data['userinfo'] = Yii::$app->user->identity;
        if(Yii::$app->user->isGuest  || Yii::$app->request->get('id')){
            $id = Yii::$app->request->get('id');
            $userinfo = User::findOne($id);
            $data['userinfo'] = $userinfo;
            $data['list'] = $userinfo->votes;
        }
        return $this->render('votes', $data);
    }


}
