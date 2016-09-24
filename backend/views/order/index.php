<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 9:50
 */



use yii\helpers\Url;
use yii\helpers\Html;
use backend\assets\AppAsset;

AppAsset::addCss($this, 'css/plugins/footable/footable.core.css');
//AppAsset::addCss($this, "css/plugins/iCheck/custom.css");
?>


    <div class="wrapper wrapper-content animated fadeInRight ecommerce">


        <div class="ibox-content m-b-sm border-bottom">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="control-label" for="username">用户名</label>
                        <input type="text" id="product_name" name="username" value="" placeholder="用户名"
                               class="form-control">
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                        <label class="control-label" for="mobile">手机</label>
                        <input type="text" id="price" name="mobile" value="" placeholder="手机" class="form-control">
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                        <label class="control-label" for="mobile">邮箱</label>
                        <input type="email" id="quantity" name="email" value="" placeholder="邮箱" class="form-control">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="control-label" for="status">状态</label>
                        <select name="status" id="status" class="form-control">
                            <option value="1" selected>Enabled</option>
                            <option value="0">Disabled</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="ibox">


                    <div class="ibox-title">
                        <h5>订单列表</h5>
                        <div class="ibox-tools">
                            <?php //Html::a('添加', Url::toRoute('add'), ['class' => 'btn btn-primary']); ?>
                        </div>
                    </div>

                    <div class="ibox-content">

                        <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                            <thead>
                            <tr>
                                <!--                            <th class="check-mail">-->
                                <!--                                <input type="checkbox" class="i-checks">-->
                                <!--                            </th>-->
                                <th data-toggle="true">ID</th>
                                <th data-toggle="true">订单编号</th>
                                <th data-hide="phone">用户名</th>
                                <th data-hide="all">商品</th>
                                <th data-hide="phone">单品/套餐</th>
                                <th data-hide="phone">状态</th>
                                <th data-hide="phone">时间</th>
                                <th class="text-right" data-sort-ignore="true">操作</th>

                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($order as $key => $value): ?>
                                <tr>
                                    <!--                                <td class="check-mail">-->
                                    <!--                                    <input type="checkbox" class="i-checks">-->
                                    <!--                                </td>-->
                                    <td> <?= $value->id; ?> </td>
                                    <td> <?= $value->order_sn; ?> </td>
                                    <td> <?= $value->user->username; ?> </td>
                                    <td> 商品信息 </td>
                                    <td> 单品 </td>
                                    <td> <span class="label label-primary"><?= $value->order_status; ?></span> </td>
                                    <td> <?= date("Y-m-d H:i:s", $value->created_at); ?> </td>
                                    <td class="text-right">
                                        <div class="btn-group">
                                            <button class="btn-white btn btn-xs">预览</button>
                                            <?= Html::a('编辑', Url::toRoute(['edit', 'id' => $value->id]), ['class' => 'btn-white btn btn-xs']) ?>
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