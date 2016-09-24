<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/5/26
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 19:42
 */


use yii\helpers\Html;
use backend\assets\AppAsset;
use yii\helpers\Url;
//use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;

AppAsset::addCss($this, 'css/plugins/footable/footable.core.css');
AppAsset::addCss($this, "css/plugins/iCheck/custom.css");

?>


<div class="wrapper wrapper-content animated fadeInRight ecommerce">
    <div class="row">
        <div class="col-lg-12">
            <div class="tabs-container">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#tab-1"> 套餐信息</a></li>
                </ul>
                <form method="POST" onsubmit="return check(this);">
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane active">
                            <div class="panel-body">

                                <fieldset class="form-horizontal">
                                    <?php

                                    echo $form->field($Packages, 'package_name')
                                        ->textInput(['placeholder' => '套餐名称'])
                                        ->label('套餐名称');

                                    echo $form->field($Packages, 'package_price')
                                        ->textInput(['placeholder' => '0.00'])
                                        ->label('套餐价格');


                                    echo $form->field($Packages, 'package_desc')
                                        ->textarea(['placeholder' => '套餐介绍',])
                                        ->label('套餐介绍');

                                    ?>
                                    <div class="form-group field-packages-goods_id required">
                                        <label class="col-sm-2 control-label" for="packages-goods_id">商品</label>
                                        <div class="col-sm-10">
                                            <input type="hidden" name="Packages[goods_id]" value="">
                                            <div id="packages-goods_id">
                                                <?php foreach($Packages->goods as $ke=>$val):?>
                                                    <input type="checkbox" class="i-checks"  checked name="Packages[goods_id][]" value="<?=$val->goods_id;?>">
                                                    <?=$val->goods->goods_name;?>
                                                <?php endforeach;?>
                                            </div>
                                        </div>
                                        <span class="has-error"><div class="help-block"></div></span>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div class="panel-body">
                            <div class="form-group">


                                <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog"
                                     aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">
                                                    <span aria-hidden="true">&times;</span>
                                                    <span class="sr-only">Close</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="ibox-content">
                                                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="8">
                                                        <thead>
                                                        <tr>
                                                            <th class=""></th>
                                                            <th data-toggle="true">名称</th>
                                                            <th data-hide="phone">价格</th>
                                                            <th data-hide="phone,tablet">库存</th>
                                                            <th data-hide="phone">状态</th>
                                                            <th class="text-right" data-sort-ignore="true">操作</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <?php foreach ($goods as $key => $value): ?>
                                                            <tr>
                                                                <td class="">
                                                                    <input type="checkbox" class="i-checks" data-id="<?=$value->goods_id;?>" data-goods_name="<?=$value->goods_name;?>">
                                                                </td>
                                                                <td>
                                                                    <?= $value->goods_name; ?>
                                                                </td>
                                                                <td>
                                                                    $<?= $value->market_price; ?>
                                                                </td>
                                                                <td> 1000 </td>
                                                                <td>
                                                                    <span class="label label-primary">Enable</span>
                                                                </td>
                                                                <td class="text-right">
                                                                    <div class="btn-group">
                                                                        <button class="btn-white btn btn-xs">预览</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        <?php endforeach; ?>
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                            <td colspan="6">
                                                                <ul class="pagination pull-right"></ul>
                                                            </td>
                                                        </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>

                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                                                <button type="button" class="btn btn-primary" id='wancheng'>完成</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                        data-target="#myModal5">
                                    选择商品
                                </button>

                                <div class="col-sm-4 col-sm-offset-2">
                                    <?php
                                    echo Html::resetButton('关闭', ['class' => 'btn btn-white']);
                                    echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="hidden" name="_csrf" value="<?= Yii::$app->request->csrfToken ?>">
                </form>
            </div>
        </div>
    </div>

</div>






<?php
AppAsset::addScript($this, '@web/js/plugins/iCheck/icheck.min.js');
AppAsset::addScript($this, '@web/js/plugins/footable/footable.all.min.js');


?>


<?php $this->beginBlock('footable'); ?>

$('.footable').footable();

<?php $this->endBlock(); ?>
<?php $this->registerJs($this->blocks['footable'], \yii\web\View::POS_END); ?>



<?php $this->beginBlock('icheckbox'); ?>

<!--$('.ibox-content .i-checks').iCheck({-->
$('.i-checks').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
});



<!--<script>-->

<!--<script>-->



<?php $this->endBlock(); ?>
<?php $this->registerJs($this->blocks['icheckbox'], \yii\web\View::POS_END); ?>

<?php
AppAsset::addScript($this, '@web/js/deve/package.js');
?>




