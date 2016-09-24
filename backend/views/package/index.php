<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/5/21
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 15:59
 */


use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;

AppAsset::addCss($this, 'css/plugins/footable/footable.core.css');
AppAsset::addCss($this, "css/plugins/iCheck/custom.css");


?>


    <div class="wrapper wrapper-content animated fadeInRight ecommerce">


        <div class="ibox-content m-b-sm border-bottom">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="control-label" for="product_name">套餐名称</label>
                        <input type="text" id="product_name" name="product_name" value="" placeholder="商品名称"
                               class="form-control">
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                        <label class="control-label" for="price">价格</label>
                        <input type="text" id="price" name="price" value="" placeholder="价格" class="form-control">
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
                        <h5>套餐列表</h5>
                        <div class="ibox-tools">
                            <?= Html::a('添加', Url::toRoute('add'), ['class' => 'btn btn-primary']) ?>
<!--                            <a class="collapse-link">-->
<!--                                <i class="fa fa-chevron-up"></i>-->
<!--                            </a>-->
                        </div>
                    </div>

                    <div class="ibox-content">

                        <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                            <thead>
                            <tr>
<!--                                <th class="check-mail">-->
<!--                                    <input type="checkbox" class="i-checks">-->
<!--                                </th>-->
                                <th data-toggle="true">套餐</th>
                                <th data-hide="phone">绿植</th>
                                <th data-hide="all">描述</th>
                                <th data-hide="phone">价格</th>
                                <th data-hide="phone">状态</th>
                                <th class="text-right" data-sort-ignore="true">操作</th>

                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($packagelist as $key => $value): ?>
                                <tr>
<!--                                    <td class="check-mail">-->
<!--                                        <input type="checkbox" class="i-checks">-->
<!--                                    </td>-->
                                    <td>
                                        <?= $value->package_name; ?>
                                    </td>
                                    <td>
                                        <?php
                                        $goods = $value->goods;
                                        $goodsName = [];
                                        foreach($goods as $kk=>$val){
                                            $goodsName[] = $val->goods->goods_name;
                                        }
                                        echo implode("," , $goodsName);
                                        ?>
                                    </td>
                                    <td>
                                        <?= $value->package_desc; ?>
                                    </td>
                                    <td>
                                        $<?= $value->package_price; ?>
                                    </td>
                                    <td>
                                        <span class="label label-primary">Enable</span>
                                    </td>
                                    <td class="text-right">
                                        <div class="btn-group">
                                            <?= Html::a('添加商品', Url::toRoute(['addgoods', 'id'=>$value->package_id]), ['class' => 'btn-white btn btn-xs']) ?>
                                            <button class="btn-white btn btn-xs">预览</button>
                                            <?= Html::a('编辑', Url::toRoute(['edit', 'id'=>$value->package_id]), ['class' => 'btn-white btn btn-xs']) ?>
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
<?php $this->registerJs($this->blocks['icheckbox'], \yii\web\View::POS_END); ?>






<?php
AppAsset::addScript($this, 'js/plugins/iCheck/icheck.min.js');
AppAsset::addScript($this, 'js/plugins/footable/footable.all.min.js');
?>