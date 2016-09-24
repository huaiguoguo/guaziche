<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/19
 * Time: 10:28
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
                        <!--                    <a href="-->
                        <? //= Url::toRoute("edit-post") ?><!--" class="btn btn-primary"> 新增权限 </a>-->
                    </div>

                    <div class="ibox-content">

                        <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                            <thead>
                            <tr>

                                <th data-toggle="true">标题</th>
                                <th data-hide="phone">内容</th>
                                <th data-hide="phone">作者</th>
                                <th data-hide="phone, tablet">创建时间</th>
                                <th data-hide="phone, tablet">浏览次数</th>
                                <th data-hide="all">修改时间</th>
                                <th data-hide="phone">状态</th>
                                <th class="text-right" data-sort-ignore="true">操作</th>

                            </tr>
                            </thead>
                            <tbody>

                            <?php foreach ($post as $key => $value): ?>
                                <tr>
                                    <td>
                                        <?= mb_substr($value->title, 0, 20, 'utf-8'); ?>
                                    </td>
                                    <td>
                                        <?= mb_substr($value->content, 0, 20, 'utf-8'); ?>
                                    </td>
                                    <td>
                                        <?= $value->user->username; ?>
                                    </td>
                                    <td>
                                        <?= date("Y-m-d H:i:s", $value->created_at); ?>
                                    </td>
                                    <td>
                                        <?= count($value->looks); ?>
                                    </td>
                                    <td>
                                        <?= date("Y-m-d H:i:s", $value->updated_at); ?>
                                    </td>
                                    <td>
                                        <span class="label label-primary">Enable</span>
                                    </td>
                                    <td class="text-right">
                                        <div class="btn-group">
                                            <button class="btn-white btn btn-xs"><a
                                                    href="<?= Url::toRoute(['edit-post']); ?>">查看</a></button>
                                            <button class="btn-white btn btn-xs"><a
                                                    href="<?= Url::toRoute(['edit-post', 'id' => $value->id]); ?>">编辑</a>
                                            </button>
                                            <button class="btn-white btn btn-xs demo3" data-id="<?= $value->id; ?>">删除
                                            </button>
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

<!--    <script>-->
        $(document).ready(function () {
            $('.footable').footable();
        });

        $('.demo3').click(function () {
            var config = {};
            config.data = {
                id: $(this).data('id'),
                '<?=Yii::$app->request->csrfParam;?>': '<?=Yii::$app->request->csrfToken;?>'
            };
            config.type = "POST";
            config.url = "<?=Url::toRoute(['post/delete']);?>";
            config.success = function (data) {
                if(data.code == 200){
                    swal({
                        title: "成功!",
                        text: "删除成功!",
                        type: "success"
                    }, function () {
                        window.location.href = '<?=Url::toRoute(['post/index']);?>';
                    });
                }else{
                    swal({
                        title: "失败!",
                        text: "删除失败!",
                        type: "error"
                    });
                }

            };
            config.error = function (error) {
                swal({
                    title: "错误!",
                    text: "服务器链接错误!",
                    type: "error"
                });
            };

            swal({
                title: "确定删除?",
                text: "确定删除!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "确定!",
                closeOnConfirm: false
            }, function (isConfirm) {
                if (isConfirm) {
                    getAjaxResult(config);
                }
            });

        });

<?php
$this->endBlock();
$this->registerJs($this->blocks['footable'], View::POS_END, 0);
?>