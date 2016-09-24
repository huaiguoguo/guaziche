<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/23
 * Time: 18:42
 */
use yii\helpers\Url;
use yii\helpers\Html;
use backend\assets\AppAsset;

use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;

AppAsset::addCss($this, 'css/plugins/summernote/summernote.css');
AppAsset::addCss($this, 'css/plugins/summernote/summernote-bs3.css');
AppAsset::addCss($this, 'css/plugins/datapicker/datepicker3.css');
AppAsset::addCss($this, 'css/plugins/chosen/chosen.css');

?>


<div class="wrapper wrapper-content animated fadeInRight ecommerce">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>新增案例
                        <small></small>
                    </h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="<?= Url::toRoute(['index']); ?>"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">

                    <?php
                    $form = ActiveForm::begin([

                                                  'id'                     => 'add-user',
                                                  'options'                => ['class' => 'form-horizontal', 'enctype' => 'multipart/form-data'],
                                                  'enableClientValidation' => true,
                                                  'method'                 => 'post',
                                                  'fieldConfig'            => [
                                                      'template'     => "{label}\n<div class=\"col-sm-8\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                      'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                  ]
                                              ]);
                    echo $form->field($Casehall, 'title')
                        ->textInput(['placeholder' => '标题', 'style' => 'width:550px'])
                        ->label('标题');
                    echo $form->field($Casehall, 'content')
                        ->textInput(['placeholder' => '描述', 'style' => 'width:550px'])
                        ->label('描述');

                    echo $form->field($Casehall, 'image')
                        ->fileInput(['style' => 'width:550px'])
                        ->label('封面');
                    ?>


                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="casehall-image">预览</label>
                        <div class="col-sm-8" class="img">
                            <img id="priview" src="<?php if($Casehall->image){ echo Yii::$app->params['image.host'].$Casehall->image;}; ?>" onerror="javascript:this.src='/img/zuhe.jpg';" width="50%">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <?php
                            echo Html::resetButton('关闭', ['class' => 'btn btn-white']);
                            echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                            ?>
                        </div>
                    </div>
                    <?php ActiveForm::end(); ?>

                </div>
            </div>
        </div>
    </div>
</div>


<?php

AppAsset::addScript($this, 'js/plugins/summernote/summernote.min.js');
AppAsset::addScript($this, 'js/plugins/datapicker/bootstrap-datepicker.js');
AppAsset::addScript($this, 'js/plugins/chosen/chosen.jquery.js');
AppAsset::addScript($this, 'js/deve/goods.js');

?>


<!-- Select2 -->


<?php $this->beginBlock('summernote'); ?>
$(document).ready(function(){

$('.summernote').summernote();
$('.input-group.date').datepicker({
todayBtn: "linked",
keyboardNavigation: false,
forceParse: false,
calendarWeeks: true,
autoclose: true,

});
});


var config = {
'.chosen-select'           : {},
'.chosen-select-deselect'  : {allow_single_deselect:true},
'.chosen-select-no-single' : {disable_search_threshold:10},
'.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
'.chosen-select-width'     : {width:"95%"}
}
for (var selector in config) {
$(selector).chosen(config[selector]);
}


<!--<script>-->

    var privew = function (files){
        f = files[0];
        var t = f.type ? f.type : 'n/a';
        if (t=='image/gif' || t=='image/jpeg' || t=='image/jpg' || t=='image/png') {
            var reader = new FileReader();
            reader.onload = (function (f) {
                return function (e) {
                    $('#priview').attr('src',e.target.result);
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }


        $(document).on('change', '#casehall-image', function (e) {
             privew(this.files) ;
        });


    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['summernote'], \yii\web\View::POS_END); ?>


