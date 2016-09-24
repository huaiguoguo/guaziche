<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 15:45
 */

use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;


?>


<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加角色
                        <small> </small>
                    </h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="<?=Url::toRoute(['role']);?>"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">

                    <?php
                    $form = ActiveForm::begin([

                                                  'id'                     => 'add-user',
                                                  'options'                => ['class' => 'form-horizontal'],
                                                  'enableClientValidation' => true,
                                                  'method'                 => 'post',
                                                  'fieldConfig'            => [
                                                      'template'     => "{label}\n<div class=\"col-sm-8\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                      'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                  ]
                                              ]);

                    echo $form->field($RoleForm, 'name', ['options' => ['class' => 'name form-group']])
                        ->textInput(['placeholder' => '角色名称'])
                        ->label('角色名称');

                    echo $form->field($RoleForm, 'description', ['options' => ['class' => 'description form-group ']])
                        ->textarea(['placeholder' => '角色描述'])
                        ->label('角色描述');
                    ?>


                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <?php
                            echo Html::resetButton('关闭', ['class' => 'btn btn-white']);
                            echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                            ?>
                        </div>
                    </div>


                    <?php $form->end(); ?>

                </div>
            </div>
        </div>
    </div>
</div>


