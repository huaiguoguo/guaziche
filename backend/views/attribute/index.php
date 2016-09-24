<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/19
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 0:35
 */
use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;
?>


<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    adlfjkasdlfkjasdlkf
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>商品分类</h5>

                    <div class="ibox-tools">
                        <?=Html::a('添加',Url::toRoute('add'),['class'=>'btn btn-primary'])?>
                    </div>
                </div>
                <div class="ibox-content">
                    <div id="using_json"></div>
                </div>
            </div>
        </div>
    </div>


</div>

<?php AppAsset::addCss($this,'@web/css/plugins/jsTree/style.min.css'); ?>
<?php AppAsset::addScript($this, '@web/js/plugins/jsTree/jstree.min.js');?>
<?php AppAsset::addScript($this, '@web/js/plugins/jeditable/jquery.jeditable.js');?>


<?php $this->beginBlock('jsTree');?>
    $('#using_json').jstree({ 'core' : {
            'data' :<?=json_encode($list);?>
    }});
<?php $this->endBlock();?>

<?php $this->registerJs($this->blocks['jsTree'], \yii\web\View::POS_END); ?>

<!--按以下格式 组合json-->
<!--                [-->
<!--                    {-->
<!--                        'text': 'Resources',-->
<!--                        'state': {-->
<!--                            'opened': true-->
<!--                        },-->
<!--                        'children': [-->
<!--                            {-->
<!--                                'text': 'css',-->
<!--                                'children': [-->
<!--                                    {-->
<!--                                        'text': 'animate.css',-->
<!--                                    },-->
<!--                                ],-->
<!--                                'state': {-->
<!--                                    'opened': true-->
<!--                                }-->
<!--                            },-->
<!--                        ]-->
<!--                    },-->
<!--                    'Fonts',-->
<!--                ]-->

