<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/23
 * Time: 17:32
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
                    <label class="control-label" for="title">标题</label>
                    <input type="text" id="product_name" name="title" value="" placeholder="标题"
                           class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label class="control-label" for="content">描述</label>
                    <input type="text" id="price" name="content" value="" placeholder="描述" class="form-control">
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
                    <h5>案例列表</h5>
                    <div class="ibox-tools">
                        <?= Html::a('添加', Url::toRoute('add'), ['class' => 'btn btn-primary']) ?>
                    </div>
                </div>

                <div class="ibox-content">

                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                        <tr>
                            <!--                            <th class="check-mail">-->
                            <!--                                <input type="checkbox" class="i-checks">-->
                            <!--                            </th>-->
                            <th data-toggle="true">标题</th>
                            <th data-hide="phone">描述</th>
                            <th data-hide="phone">封面</th>
                            <th data-hide="phone">时间</th>
                            <th class="text-right" data-sort-ignore="true">操作</th>

                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($casehall as $key => $value): ?>
                            <tr>
                                <!--                                <td class="check-mail">-->
                                <!--                                    <input type="checkbox" class="i-checks">-->
                                <!--                                </td>-->
                                <td>
                                    <?= $value->title; ?>
                                </td>
                                <td>
                                    <?= mb_substr($value->content, 0, 30, 'utf-8'); ?>
                                </td>
                                <td>
                                    <?= $value->image; ?>
                                </td>
                                <td>
                                    <?= date("Y-m-d H:i:s", $value->created_at); ?>
                                </td>
                                <td class="text-right">
                                    <div class="btn-group">
                                        <?= Html::a('新增图片', Url::toRoute(['addimage', 'id'=>$value->id]), ['class' => 'btn-white btn btn-xs']) ?>
                                        <?= Html::a('编辑', Url::toRoute(['edit', 'id'=>$value->id]), ['class' => 'btn-white btn btn-xs']) ?>
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
<?php $this->endBlock(); ?>
<?php //$this->registerJs($this->blocks['icheckbox'], \yii\web\View::POS_END); ?>



<?php
AppAsset::addScript($this, 'js/plugins/footable/footable.all.min.js');
//AppAsset::addScript($this, 'js/plugins/iCheck/icheck.min.js');
?>
