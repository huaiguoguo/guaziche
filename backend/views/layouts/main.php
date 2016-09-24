<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;
use yii\widgets\Menu;
use common\models\AuthItem;
use common\core\HoComm;

AppAsset::register($this);

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body class="fixed-sidebar no-skin-config ">
<?php $this->beginBody() ?>

<?php

//
//$item = [
//    ['label' => '<i class="fa fa-dashboard"></i>仪盘表', 'url' => ['/site'], 'active' => in_array($route, ['site/index'])],
//    ['label' => '<i class="fa fa-check"></i>审核', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-tasks"></i>矿权管理', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-comment"></i>评论管理<span class="fa arrow"></span>', 'url' => '',
//     'items' => [
//         ['label' => '幻灯管理', 'url' => ['/ppt']],
//         ['label' => '用户管理', 'url' => ['/user']]
//     ],
//    ],
//    ['label' => '<i class="fa fa-paper-plane-o"></i>订单管理', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-user"></i>用户管理', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-building"></i>企业管理', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-users"></i>员工管理', 'url' => '', 'items' => []],
//    ['label' => '<i class="fa fa-user-md"></i>反馈信息', 'url' => '', 'items' => []],
//    ['label'  => '<i class="fa fa-cog"></i>系统设置<span class="fa arrow"></span>', 'url' => '',
//     'active' => in_array($route, ['rbac/permission', 'rbac/add-permission']),
//     'items'  => [
//         ['label' => '角色管理', 'url' => ['/rbac/role'], 'active' => in_array($route, ['rbac/role'])],
//         ['label' => '权限管理', 'url' => ['/rbac/permission'], 'active' => in_array($route, ['rbac/permission', 'rbac/add-permission'])]
//     ],
//    ]
//];

//dump(HoComm::getMenuCopy(true));
?>


<div id="wrapper">
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">

            <?php echo Menu::widget([
                                        'encodeLabels'    => false,
                                        'submenuTemplate' => "\n<ul class=\"nav nav-second-level collapse\">\n{items}\n</ul>\n",
                                        'options'         => [
                                            'id'    => 'side-menu',
                                            'class' => 'nav metismenu',
                                        ],
                                        'items'           => HoComm::getMenuCopy(true)
                                    ]);
            ?>
        </div>
    </nav>

    <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i
                            class="fa fa-bars"></i> </a>
                    <form role="search" class="navbar-form-custom" action="search_results.html">
                        <div class="form-group">
                            <input type="text" placeholder="搜索.." class="form-control"
                                   name="top-search" id="top-search">
                        </div>
                    </form>
                </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">同学,你好.</span>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle count-info" data-toggle="dropdown" href="full_height.html#">
                            <i class="fa fa-envelope"></i> <span class="label label-warning">16</span>
                        </a>
                        <ul class="dropdown-menu dropdown-messages">
                            <li>
                                <div class="dropdown-messages-box">
                                    <a href="profile.html" class="pull-left">
                                        <img alt="image" class="img-circle" src="/img/a7.jpg">
                                    </a>
                                    <div class="media-body">
                                        <small class="pull-right">46h ago</small>
                                        <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>.
                                        <br>
                                        <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                    </div>
                                </div>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div class="dropdown-messages-box">
                                    <a href="profile.html" class="pull-left">
                                        <img alt="image" class="img-circle" src="/img/a4.jpg">
                                    </a>
                                    <div class="media-body ">
                                        <small class="pull-right text-navy">5h ago</small>
                                        <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica
                                            Smith</strong>. <br>
                                        <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                    </div>
                                </div>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div class="dropdown-messages-box">
                                    <a href="profile.html" class="pull-left">
                                        <img alt="image" class="img-circle" src="/img/profile.jpg">
                                    </a>
                                    <div class="media-body ">
                                        <small class="pull-right">23h ago</small>
                                        <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>
                                        <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                    </div>
                                </div>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div class="text-center link-block">
                                    <a href="mailbox.html">
                                        <i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle count-info" data-toggle="dropdown" href="full_height.html#">
                            <i class="fa fa-bell"></i> <span class="label label-primary">8</span>
                        </a>
                        <ul class="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="mailbox.html">
                                    <div>
                                        <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                                        <span class="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="profile.html">
                                    <div>
                                        <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                        <span class="pull-right text-muted small">12 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="grid_options.html">
                                    <div>
                                        <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                        <span class="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div class="text-center link-block">
                                    <a href="notifications.html">
                                        <strong>See All Alerts</strong>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <a href="<?= \yii\helpers\Url::toRoute(['/site/logout']); ?>">
                            <i class="fa fa-sign-out"></i> 退出
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
        <?= $content; ?>
        <div class="footer">
            <div class="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company &copy; 2014-2015
            </div>
        </div>

    </div>
</div>


</body>

<?php $this->beginBlock('commParam'); ?>

var csrfParam = <?= Yii::$app->request->csrfParam; ?>;
var <?= Yii::$app->request->csrfParam; ?> = '<?= Yii::$app->request->csrfToken; ?>';

<?php
$this->endBlock();
$this->registerJs($this->blocks['commParam'], \yii\web\View::POS_HEAD);
?>


<?php $this->beginBlock('toastr'); ?>

var csrfParam = <?= Yii::$app->request->csrfParam; ?>;

var <?= Yii::$app->request->csrfParam; ?> = '<?= Yii::$app->request->csrfToken; ?>';

<!--<script>-->
var success = '<?= Yii::$app->session->getFlash('success'); ?>';
var info = '<?= Yii::$app->session->getFlash('info'); ?>';
var warning = '<?= Yii::$app->session->getFlash('warning'); ?>';
var error = '<?= Yii::$app->session->getFlash('error'); ?>';

if($.trim(success)){
toastr.success(success);
}else if($.trim(info)){
toastr.info(info);
}else if($.trim(warning)){
toastr.warning(warning);
}else if($.trim(error)){
toastr.error(error);
}

<?php
$this->endBlock();
$this->registerJs($this->blocks['toastr'], \yii\web\View::POS_END);
?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
