<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 15:44
 */
use backend\assets\AppAsset;
use yii\web\View;
use yii\helpers\Url;
use yii\helpers\Html;
?>

<div class="wrapper wrapper-content animated fadeInRight ecommerce">


    <div class="ibox-content m-b-sm border-bottom">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="control-label" for="product_name">Product Name</label>
                    <input type="text" id="product_name" name="product_name" value="" placeholder="Product Name"
                           class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label class="control-label" for="price">Price</label>
                    <input type="text" id="price" name="price" value="" placeholder="Price" class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label class="control-label" for="quantity">Quantity</label>
                    <input type="text" id="quantity" name="quantity" value="" placeholder="Quantity"
                           class="form-control">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="control-label" for="status">Status</label>
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
                    <a href="<?= Url::toRoute("add-role") ?>" class="btn btn-primary"> 添加角色 </a>
                </div>

                <div class="ibox-content">

                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                        <tr>

                            <th data-toggle="true">角色名称</th>
                            <th data-hide="phone">角色</th>
                            <th data-hide="all">Description</th>
                            <th data-hide="phone">Price</th>
                            <th data-hide="phone,tablet">Quantity</th>
                            <th data-hide="phone">Status</th>
                            <th class="text-right" data-sort-ignore="true">Action</th>

                        </tr>
                        </thead>
                        <tbody>

                        <?php foreach ($rolelist as $key => $value): ?>
                            <tr>
                                <td><?=$value->name;?></td>
                                <td><?=$value->description;?></td>
                                <td> </td>
                                <td> $67.00 </td>
                                <td> 2300 </td>
                                <td> <span class="label label-primary">Enable</span> </td>
                                <td class="text-right">
                                    <div class="btn-group">
                                        <button class="btn-white btn btn-xs"><?=Html::a("配权限", Url::toRoute(['assign']));?></button>
                                        <button class="btn-white btn btn-xs">编辑</button>
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


<?php AppAsset::addScript($this, '/js/plugins/footable/footable.all.min.js'); ?>

<!-- Page-Level Scripts -->
<?php $this->beginBlock('footable'); ?>

$(document).ready(function() {

$('.footable').footable();

});

<?php
$this->endBlock();
$this->registerJs($this->blocks['footable'], View::POS_END, 0);
?>
