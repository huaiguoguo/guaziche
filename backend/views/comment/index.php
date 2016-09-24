<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/10
 * Time: 8:35
 */

use backend\assets\AppAsset;
use yii\web\View;
use yii\helpers\Url;

?>

<div class="wrapper wrapper-content animated fadeInRight ecommerce">


    <div class="ibox-content m-b-sm border-bottom">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="control-label" for="product_name">帖子名称</label>
                    <input type="text" id="product_name" name="post_name" value="" placeholder="权限名称"
                           class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label class="control-label" for="price">权限标识</label>
                    <input type="text" id="price" name="price" value="" placeholder="权限标识" class="form-control">
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
<!--                    <a href="--><?//= Url::toRoute("edit-post") ?><!--" class="btn btn-primary"> 新增权限 </a>-->
                </div>

                <div class="ibox-content">

                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                        <tr>

                            <th data-toggle="true">评论内容</th>
                            <th data-hide="phone">贴子标题</th>
                            <th data-hide="phone">评论人</th>
                            <th data-hide="phone, tablet">评论时间</th>
                            <th data-hide="all">修改时间</th>
                            <th data-hide="phone">状态</th>
                            <th class="text-right" data-sort-ignore="true">操作</th>

                        </tr>
                        </thead>
                        <tbody>

                        <?php foreach ($comment as $key => $value): ?>
                            <tr>
                                <td>
                                    <?=mb_substr($value->content, 0, 20, 'utf-8');?>
                                </td>
                                <td>
                                    <?=mb_substr($value->topic->title, 0, 20, 'utf-8');?>
                                </td>
                                <td>
                                    <?=$value->user->username;?>
                                </td>
                                <td>
                                    <?=date("Y-m-d H:i:s", $value->created_at);?>
                                </td>
                                <td>
                                    <?=date("Y-m-d H:i:s", $value->updated_at);?>
                                </td>
                                <td>
                                    <span class="label label-primary">Enable</span>
                                </td>
                                <td class="text-right">
                                    <div class="btn-group">
                                        <button class="btn-white btn btn-xs"><a href="<?=Url::toRoute(['edit-post']);?>">查看</a></button>
                                        <button class="btn-white btn btn-xs"><a href="<?=Url::toRoute(['edit-post', 'id'=>$value->id]);?>">编辑</a></button>
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
