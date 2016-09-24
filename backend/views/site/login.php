<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'phpdx';
$this->params['breadcrumbs'][] = $this->title;
?>



<div class="loginColumns animated fadeInDown">
    <div class="row">

        <div class="col-md-6">
            <h2 class="font-bold">Welcome to IN+</h2>

            <p>
                Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <p>
                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <p>
                <small>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small>
            </p>

        </div>
        <div class="col-md-6">
            <div class="ibox-content">

                <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

                <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>

                <?= $form->field($model, 'password')->passwordInput() ?>

                <?= $form->field($model, 'rememberMe')->checkbox() ?>

                <div class="form-group">
                    <?= Html::submitButton('登录', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
                </div>

                <?php ActiveForm::end(); ?>
                <!--
                <form class="m-t" role="form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="">
                    </div>
                    <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

                    <a href="login_two_columns.html#">
                        <small>Forgot password?</small>
                    </a>

                    <p class="text-muted text-center">
                        <small>Do not have an account?</small>
                    </p>
                    <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                </form>
                -->
                <p class="m-t">
                    <small>phpdx &copy; 2014</small>
                </p>
            </div>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-md-6">
            Copyright Example Company
        </div>
        <div class="col-md-6 text-right">
            <small>© 2014-2015</small>
        </div>
    </div>
</div>

