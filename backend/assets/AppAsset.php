<?php

namespace backend\assets;

use yii\web\AssetBundle;
use yii\web\View;

/**
 * Main backend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $cssOptions = [
        'position' => View::POS_HEAD
    ];

    public $css = [
        "css/bootstrap.min.css",
        "font-awesome/css/font-awesome.css",
        "css/animate.css",
        "css/plugins/toastr/toastr.min.css",
        "css/plugins/codemirror/codemirror.css",
        "css/plugins/codemirror/ambiance.css",

        "css/plugins/dropzone/basic.css",
        "css/plugins/dropzone/dropzone.css",
        "css/plugins/sweetalert/sweetalert.css",

        "css/style.css"
        //        "/js/plugins/zTree-zTree_v3-2/css/zTreeStyle/zTreeStyle.css"
    ];
    

    public $jsOptions = [
        'position' => View::POS_HEAD
    ];

    public $js = [
        //Mainly scripts -->
        "/js/jquery-2.1.1.js",
        "/js/bootstrap.min.js",
        "/js/plugins/metisMenu/jquery.metisMenu.js",
        "/js/plugins/slimscroll/jquery.slimscroll.min.js",
        //Custom and plugin javascript -->
        "/js/inspinia.js",
        "/js/plugins/pace/pace.min.js",
        "/js/plugins/toastr/toastr.min.js",
        "js/plugins/dropzone/dropzone.js",
        "js/plugins/sweetalert/sweetalert.min.js",
        "/js/common.js"
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset'
    ];

    //定义按需加载JS方法，注意加载顺序在最后
    public static function addScript(View $view, $jsfile)
    {
        $view->registerJsFile($jsfile, [AppAsset::className(), 'depends' => 'backend\assets\AppAsset', 'position' => View::POS_HEAD]);
    }

    //定义按需加载css方法，注意加载顺序在最后
    public static function addCss(View $view, $cssfile)
    {
        $view->registerCssFile($cssfile, [AppAsset::className(), 'depends' => 'backend\assets\AppAsset', 'position' => View::POS_HEAD]);
    }


}
