<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/23
 * Time: 22:20
 */

use yii\helpers\Url;
use backend\assets\AppAsset;


AppAsset::addCss($this, "css/plugins/blueimp/css/blueimp-gallery.min.css");
AppAsset::addScript($this, "js/plugins/blueimp/jquery.blueimp-gallery.min.js");

?>

<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>新增案例图片<small></small>
                    </h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="<?= Url::toRoute(['index']); ?>"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">

                    <div class="lightBoxGallery">
                        <?php foreach($list as $key=>$value):?>
                        <a href="<?=Yii::$app->params['image.host'].$value->image;?>" title="Image from Unsplash" data-gallery=""><img src="<?=Yii::$app->params['image.host'].$value->image;?>" width="100" height="100"></a>
                        <?php endforeach;?>

                        <!-- The Gallery as lightbox dialog, should be a child element of the document body -->
                        <div id="blueimp-gallery" class="blueimp-gallery">
                            <div class="slides"></div>
                            <h3 class="title"></h3>
                            <a class="prev">‹</a>
                            <a class="next">›</a>
                            <a class="close">×</a>
                            <a class="play-pause"></a>
                            <ol class="indicator"></ol>
                        </div>
                    </div>

                    <form id="my-awesome-dropzone" class="dropzone" action="<?= Url::toRoute(['/casehall/upload-image']); ?>">
                        <div class="dropzone-previews"></div>
                        <input type="hidden" name="id" value="<?= $id; ?>"/>
                        <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->csrfToken; ?>"/>
                        <button type="button" class="btn btn-primary pull-right">上传图片</button>
                    </form>

                </div>
            </div>
        </div>

    </div>
</div>


<?php $this->beginBlock('Dropzone'); ?>
<!--<script>-->
    $(document).ready(function () {

        var imageHost = '<?=Yii::$app->params['image.host'];?>';
        var GenerateTemplate = function (data) {
            template = "<a href='"+imageHost+'/'+data+"' title='Image from Unsplash' data-gallery=''> <img src='"+imageHost+data+"' width='100' height='100'></a>";
            $('.lightBoxGallery').append(template);
        }


        Dropzone.options.myAwesomeDropzone = {

            autoProcessQueue: false,
            uploadMultiple: false,
            parallelUploads: 10,
            maxFiles: 100,
            addRemoveLinks: true,
            dictRemoveFile: '移除',
            paramName: 'casehallimage',

// Dropzone settings
            init: function () {
                var myDropzone = this;

                this.element.querySelector("button[type=button]").addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    myDropzone.processQueue();
                });
                this.on("success", function (file, data) {
                    GenerateTemplate(data.data);
                });
                this.on("sendingmultiple", function () {
                });
                this.on("successmultiple", function (files, response) {
                });
                this.on("errormultiple", function (files, response) {
                });
            }

        }

    });
    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['Dropzone'], \yii\web\View::POS_END); ?>
