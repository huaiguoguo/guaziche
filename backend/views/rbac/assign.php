<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/8
 * Time: 23:57
 */


use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;


//AppAsset::addCss($this, "/js/plugins/zTree-zTree_v3-2/css/demo.css");
AppAsset::addCss($this, "/js/plugins/zTree-zTree_v3-2/css/zTreeStyle/zTreeStyle.css");

AppAsset::addScript($this, "/js/plugins/zTree-zTree_v3-2/js/jquery.ztree.core-3.5.js");
AppAsset::addScript($this, "/js/plugins/zTree-zTree_v3-2/js/jquery.ztree.excheck-3.5.js");

?>


<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>分配权限
                        <small></small>
                    </h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="<?= Url::toRoute(['role']); ?>"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">
                    <div class="zTreeDemoBackground left">
                        <ul id="treeDemo" class="ztree"></ul>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <?= Html::resetButton('关闭', ['class' => 'btn btn-white']); ?>
                            <?= Html::submitButton('保存', ['class' => 'btn btn-primary']); ?>
                        </div>
                    </div>
                    <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>"
                           value="<?= Yii::$app->request->csrfToken; ?>"/>

                </div>
            </div>
        </div>
    </div>
</div>

<?php $this->beginBlock('ztree'); ?>

<!--<script>-->
getMenuData();

<!--    function count() {-->
<!--        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),-->
<!--            checkCount = zTree.getCheckedNodes(true).length,-->
<!--            nocheckCount = zTree.getCheckedNodes(false).length,-->
<!--            changeCount = zTree.getChangeCheckedNodes().length;-->
<!--        $("#checkCount").text(checkCount);-->
<!--        $("#nocheckCount").text(nocheckCount);-->
<!--        $("#changeCount").text(changeCount);-->
<!--    }-->
<!---->
<!--    function createTree() {-->
<!--        $.fn.zTree.init($("#treeDemo"), setting, ztreeNode);-->
<!--        count();-->
<!--        clearFlag = $("#last").attr("checked");-->
<!--    }-->
<!---->




    <?php
    $this->endBlock();
    $this->registerJs($this->blocks['ztree'], \yii\web\View::POS_BEGIN);
    ?>







