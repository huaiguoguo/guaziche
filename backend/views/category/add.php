<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/24
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 19:36
 */

use yii\helpers\Html;
use yii\helpers\Url;
use backend\assets\AppAsset;
use yii\widgets\ActiveForm;

?>


<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加分类</h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="index.html"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">
                    <?php
                    $form = ActiveForm::begin([
                                                  'options' => ['class' => 'form-horizontal'],
                                                  'enableClientScript' => '',
                                                  'method' => 'post',
                                                  'fieldConfig' => [
                                                      'template' => "{label}\n<div class=\"col-sm-7\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                      'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                  ]
                                              ]);

//                    echo $form->field($Category, 'parent_id')
//                        ->dropDownList(['1' => '分类1', '2' => '分类2', '3' => '分类3'])
//                        ->label('父分类名称');

                    echo $form->field($Category, 'cat_name')
                        ->textInput(['placeholder' => '请输入分类名称'])
                        ->label('分类名称');
                    ?>
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <?php
                            echo Html::resetButton('关闭', ['class' => 'btn btn-white']);
                            echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                            ?>
                        </div>
                    </div>


                    <?php $form->end();
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>


