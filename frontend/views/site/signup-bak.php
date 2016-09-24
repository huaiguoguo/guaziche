<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;

$this->title                   = 'Signup';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="loginColumns middle-box text-center loginscreen   animated fadeInDown">
    <div>
        <h3>注册</h3>
        <form class="m-t" role="form" action="<?=Url::toRoute(['/site/signup']);?>">
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="用户名" required="">
            </div>
            <div class="form-group">
                <input type="number" minlength="11" maxlength="11" class="form-control" name="mobile" placeholder="手机" required="">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="邮箱" required="">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="密码" required="">
            </div>
            <div class="form-group">
                <div class="checkbox i-checks">
                    <label> <input type="checkbox"><i></i> 我同意相关条款 </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary block full-width m-b">注册</button>

            <p class="text-muted text-center">
                <small>已经有账号?</small>
            </p>
            <a class="btn btn-sm btn-white btn-block" href="<?= Url::toRoute(['/site/login']); ?>">登录</a>
        </form>
    </div>
</div>
