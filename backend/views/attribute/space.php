<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/28
 * Time: 16:29
 */

use yii\helpers\Url;
use yii\helpers\Html;
use backend\assets\AppAsset;

AppAsset::addCss($this, 'css/plugins/footable/footable.core.css');
//AppAsset::addCss($this, "css/plugins/iCheck/custom.css");
?>


<div class="wrapper wrapper-content animated fadeInRight ecommerce">


    <div class="row">
        <div class="col-lg-12">
            <div class="ibox">


                <div class="ibox-title">
                    <h5>空间分类列表</h5>
                    <div class="ibox-tools">
                        <?= Html::a('添加', Url::toRoute(['add', 'type'=>1]), ['class' => 'btn btn-primary']) ?>
                    </div>
                </div>

                <div class="ibox-content">

                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                        <tr>
                            <!--                            <th class="check-mail">-->
                            <!--                                <input type="checkbox" class="i-checks">-->
                            <!--                            </th>-->
                            <th data-toggle="true">分类名称</th>
                            <th data-hide="phone">状态</th>
                            <th class="text-right" data-sort-ignore="true">操作</th>

                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($list as $key => $value): ?>
                            <tr>
                                <!--                                <td class="check-mail">-->
                                <!--                                    <input type="checkbox" class="i-checks">-->
                                <!--                                </td>-->
                                <td>
                                    <?= $value->cat_name; ?>
                                </td>
                                <td>
                                    <span class="label label-primary">Enable</span>
                                </td>
                                <td class="text-right">
                                    <div class="btn-group">
                                        <button class="btn-white btn btn-xs">预览</button>
                                        <?= Html::a('编辑', Url::toRoute(['edit', 'id' => $value->cat_id]), ['class' => 'btn-white btn btn-xs']) ?>
                                        <button class="btn-white btn btn-xs">删除</button>
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
        </div>
    </div>

</div>


<?php $this->beginBlock('footable'); ?>
$('.footable').footable();
<?php $this->endBlock(); ?>
<?php $this->registerJs($this->blocks['footable'], \yii\web\View::POS_END); ?>



<?php $this->beginBlock('icheckbox'); ?>
$('.i-checks').iCheck({
checkboxClass: 'icheckbox_square-green',
radioClass: 'iradio_square-green',
});
<?php

$this->endBlock();
//$this->registerJs($this->blocks['icheckbox'], \yii\web\View::POS_END);

AppAsset::addScript($this, 'js/plugins/footable/footable.all.min.js');
//AppAsset::addScript($this, 'js/plugins/iCheck/icheck.min.js');
?>
