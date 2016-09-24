<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/24
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 21:57
 */



use yii\helpers\Html;
use yii\helpers\Url;
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
            <div class="tabs-container">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#tab-1"> 商品信息</a></li>
<!--                    <li class=""><a data-toggle="tab" href="#tab-2"> 图片</a></li>-->
                </ul>
<!--                <form method="POST" onsubmit="return check(this);">-->
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane active">
                            <div class="panel-body">

                                <fieldset class="form-horizontal">
                                    <?php
                                    $form = yii\widgets\ActiveForm::begin([
                                                                              'options'            => ['class' => 'form-horizontal'],
                                                                              'enableClientScript' => '',
                                                                              'method'             => 'post',
                                                                              'fieldConfig'        => [
                                                                                  'template'     => "{label}\n<div class=\"col-sm-10\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                                                  'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                                              ]
                                                                          ]);

                                    echo $form->field($Goods, 'goods_name')
                                        ->textInput(['placeholder' => '绿植名称', 'style' => 'width:550px'])
                                        ->label('绿植名称');

                                    echo $form->field($Goods, 'shop_price')
                                        ->textInput(['placeholder' => '绿植价格', 'style' => 'width:550px'])
                                        ->label('绿值价格');

                                    echo $form->field($Goods, 'green_space')
                                        ->dropDownList(ArrayHelper::map($green_space,'cat_id', 'cat_name'), ['prompt'=>'请选择适用空间', 'style' => 'width:550px'])
                                        ->label('适用空间');

                                    echo $form->field($Goods, 'green_function')
                                        ->dropDownList(ArrayHelper::map($green_function,'cat_id', 'cat_name'), ['prompt'=>'请选择绿植功能', 'style' => 'width:550px'])
                                        ->label('绿植功能');

                                    echo $form->field($Goods, 'green_specifications')
                                        ->dropDownList(ArrayHelper::map($green_specifications,'cat_id', 'cat_name'), ['prompt'=>'请选择绿植规格','style' => 'width:550px'])
                                        ->label('绿植规格');

                                    echo $form->field($Goods, 'goods_img')
                                        ->fileInput(['style' => 'width:550px'])
                                        ->label('绿植封面');
                                    ?>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label" for="casehall-image">封面预览</label>
                                        <div class="col-sm-8" class="img">
                                            <img id="priview" src="<?php if ($Goods->goods_img) {
                                                echo Yii::$app->params['image.host'] . $Goods->goods_img;
                                            }; ?>" onerror="javascript:this.src='/img/zuhe.jpg';" width="50%">
                                        </div>
                                    </div>


                                    <?php


                                    echo $form->field($Goods, 'goods_desc')
                                        ->textarea(['placeholder' => '绿植介绍', 'class' => 'summernote'])
                                        ->label('绿植介绍');

                                    echo $form->field($Goods, 'goods_page_title')
                                        ->textInput(['placeholder' => '页面标题'])
                                        ->label('SEO标题');

                                    echo $form->field($Goods, 'goods_page_desc')
                                        ->textInput(['placeholder' => '页面描述'])
                                        ->label('SEO描述');

                                    echo $form->field($Goods, 'goods_page_keywords')
                                        ->textInput(['placeholder' => '页面关键词'])
                                        ->label('SEO关键词');

                                    ?>

                                </fieldset>
                            </div>
                        </div>
                        <!--
                        <div id="tab-2" class="tab-pane">
                            <div class="panel-body">
                                <div class="form-group">
                                    <input class="form-controller" type="file" id="image" name="images"
                                           data-upload="<?= Url::toRoute('upload'); ?>">
                                </div>
                                <span></span>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-stripped">
                                        <thead>
                                        <tr>
                                            <th> 预览</th>
                                            <th> 地址</th>
                                            <th> 排序</th>
                                            <th> 操作</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody"> </tbody>
                                    </table>
                                    <?php //$form->field($Goods, 'goods_img')->hiddenInput(['id' => 'goods_img'])->label(''); ?>
                                </div>

                            </div>
                        </div>
                        -->
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-2">
                                    <?php
                                    echo Html::resetButton('关闭', ['class' => 'btn btn-white']);
                                    echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php \yii\widgets\ActiveForm::end();?>
<!--                </form>-->
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



var privew = function (files) {
f = files[0];
var t = f.type ? f.type : 'n/a';
if (t == 'image/gif' || t == 'image/jpeg' || t == 'image/jpg' || t == 'image/png') {
var reader = new FileReader();
reader.onload = (function (f) {
return function (e) {
$('#priview').attr('src', e.target.result);
};
})(f);
reader.readAsDataURL(f);
}
}


$(document).on('change', '#goods-goods_img', function (e) {
privew(this.files);
});

<?php $this->endBlock(); ?>
<?php $this->registerJs($this->blocks['summernote'], \yii\web\View::POS_END); ?>
