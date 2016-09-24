<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/4
 * Time: 8:02
 */

namespace frontend\controllers;

use common\models\Category;
use common\models\Looks;
use yii;
use yii\web\Response;
use common\models\Comment;
use common\models\Topic;
use yii\web\Controller;

class TopicsController extends Controller
{
    public function actionIndex($id = 0)
    {

        $data = [];

        if (intval($id) > 0) {
            return $this->render('index');
        }

        $data['list'] = Topic::find()->where(['<', 'status', 5])->with('user')->with('looks')->all();

        return $this->render('index', $data);
    }


    public function actionCreate()
    {
        if (Yii::$app->user->isGuest) {
            return $this->redirect('/');
        }

        $data       = [];
        $TopicModel = new Topic;
        if ($TopicModel->load(Yii::$app->request->post()) && $TopicModel->validate()) {
            $TopicModel->created_by = Yii::$app->user->identity->getId();
            if ($TopicModel->save()) {
                Yii::$app->session->setFlash('success', '添加成功');

                return $this->redirect('/');
            }
        }

        $data['CateList'] = Category::find()->select(['id', 'category_name'])->asArray()->all();
        $data['Topic']    = $TopicModel;

        return $this->render('create', $data);
    }


    public function actionEdit()
    {
        if (Yii::$app->user->isGuest) {
            return $this->redirect('/');
        }

        $data       = [];
        $TopicModel = Topic::findOne(Yii::$app->request->get('id'));
        if (!$TopicModel) {
            return $this->redirect('/');
        }
        if ($TopicModel && $TopicModel->load(Yii::$app->request->post()) && $TopicModel->validate()) {
            $TopicModel->created_by = Yii::$app->user->identity->getId();
            if ($TopicModel->save()) {
                Yii::$app->session->setFlash('success', '更新成功');

                return $this->redirect('/');
            }
        }

        $data['CateList'] = Category::find()->select(['id', 'category_name'])->asArray()->all();
        $data['Topic']    = $TopicModel;

        return $this->render('create', $data);
    }


    public function actionDetail()
    {
//            ->with('category')->with('comments')->with('user')
        $data           = [];
        $data['error']  = '';
        $data['detail'] = Topic::findOne(Yii::$app->request->get('id'));

        if (!$data['detail']) {
            return $this->redirect('/');
        }

        $comment                         = new Comment();
        $postData                        = Yii::$app->request->post();
        $postData['Comment']['user_id']  = Yii::$app->user->getId();
        $postData['Comment']['topic_id'] = Yii::$app->request->get('id');
        if (Yii::$app->request->post()) {
            if ($comment->load($postData) && $comment->validate()) {
                if (!$comment->save()) {
                    $data['error'] = $comment->getFirstError();
                }
            }
        }

        $looks             = new Looks();
        $looks->topic_id   = Yii::$app->request->get('id');
        $looks->created_by = Yii::$app->user->isGuest ? 0 : Yii::$app->user->identity->getId();
        $looks->save();

        $data['comment'] = $comment;

        return $this->render('detail', $data);
    }


    public function actionReplies()
    {

        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $response         = Yii::$app->response;
            $response->format = Response::FORMAT_JSON;
            $response->setStatusCode(200);
            $info           = [
                'status'        => 200,
                'message'       => 200,
                'reply'         => [
                    "body"          => "<p>你希望多少钱</p>",
                    "topic_id"      => "2762",
                    "user_id"       => 1427,
                    "body_original" => "恭喜发财, 红包拿来",
                    "source"        => null,
                    "updated_at"    => "2016-09-09 18=>10=>07",
                    "created_at"    => "2016-09-09 18=>10=>07",
                    "id"            => 13298,
                    "user"          => [
                        "id"                 => 1427,
                        "github_id"          => 1888094,
                        "github_url"         => "https://github.com/huaiguoguo",
                        "email"              => "290559038@qq.com",
                        "name"               => "huaiguoguo",
                        "remember_token"     => "uv1X9Seg5VKTs0DJMvvbNUtMLAL00jQIvZEJO2XcE6LIH5qlRcmT82NeKhDP",
                        "is_banned"          => "no",
                        "image_url"          => "https=>//dn-phphub.qbox.me/uploads/avatars/1427_1436517055.jpeg?imageView2/1/w/100/h/100",
                        "topic_count"        => 0,
                        "reply_count"        => 3,
                        "city"               => null,
                        "company"            => null,
                        "twitter_account"    => null,
                        "personal_website"   => "",
                        "signature"          => null,
                        "introduction"       => null,
                        "last_actived_at"    => "2016-09-09 18=>09=>44",
                        "deleted_at"         => null,
                        "created_at"         => "2015-04-27 10=>20=>29",
                        "updated_at"         => "2016-09-09 18=>10=>08",
                        "notification_count" => 0,
                        "github_name"        => "huaiguoguo",
                        "real_name"          => null,
                        "avatar"             => "1427_1436517055.jpeg",
                        "login_token"        => "Pl1N5jlH1m6BeKmBB0mk29V46iqg"
                    ]
                ],
                'manage_topics' => 'no',
            ];
            $response->data = $info;
            $response->send();
        }
    }


    public function actionUpvote()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $response         = Yii::$app->response;
            $response->format = Response::FORMAT_JSON;
            $response->setStatusCode(200);
            $response->data = array('tes' => 'ttt');
            $response->send();
        }
    }


}