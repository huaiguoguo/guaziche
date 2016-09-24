<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/11
 * Time: 18:44
 */

use yii\helpers\Html;
use yii\helpers\Url;
use frontend\assets\AppAsset;

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
    <body class="top-navigation">
    <?php $this->beginBody() ?>


    <div id="wrapper">
        <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom white-bg">
                <nav class="navbar navbar-static-top" role="navigation">
                    <div class="navbar-header">
                        <button aria-controls="navbar" aria-expanded="false" data-target="#navbar"
                                data-toggle="collapse" class="navbar-toggle collapsed" type="button">
                            <i class="fa fa-reorder"></i>
                        </button>
                        <a href="/" class="navbar-brand">phpdx</a>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar">
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <a aria-expanded="false" role="button" href="#"> 模块 </a>
                            </li>
                            <li class="dropdown">
                                <a aria-expanded="false" role="button" href="##" class="dropdown-toggle"
                                   data-toggle="dropdown"> 教程 <span class="caret"></span></a>
                                <ul role="menu" class="dropdown-menu">
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a aria-expanded="false" role="button" href="##" class="dropdown-toggle"
                                   data-toggle="dropdown"> 手册 <span class="caret"></span></a>
                                <ul role="menu" class="dropdown-menu">
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a aria-expanded="false" role="button" href="##" class="dropdown-toggle"
                                   data-toggle="dropdown"> Top <span class="caret"></span></a>
                                <ul role="menu" class="dropdown-menu">
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                </ul>
                            </li>

                        </ul>
                        <ul class="nav navbar-top-links navbar-right">

                            <?php if (!Yii::$app->user->isGuest):?>
                            <li class="dropdown">
                                <a aria-expanded="false" role="button" href="##" class="dropdown-toggle"
                                   data-toggle="dropdown"> <?=Yii::$app->user->identity->username;?> <span class="caret"></span></a>
                                <ul role="menu" class="dropdown-menu">
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                    <li><a href="#">Menu item</a></li>
                                </ul>
                            </li>
                            <li>
                                <li> <?=Html::a("退出 <i class=\"fa fa-sign-out\"></i>", Url::toRoute(['site/logout']));?> </li>
                            </li>
                            <?php else:?>
                                <li> <?=Html::a("登录", Url::toRoute(['site/login']));?> </li>|
                                <li> <?=Html::a("注册", Url::toRoute(['site/signup']));?> </li>
                            <?php endif;?>
                        </ul>
                    </div>
                </nav>
            </div>
            <!--
            <div class="wrapper wrapper-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <span class="label label-success pull-right">Monthly</span>
                                    <h5>Views</h5>
                                </div>
                                <div class="ibox-content">
                                    <h1 class="no-margins">386,200</h1>
                                    <div class="stat-percent font-bold text-success">98% <i class="fa fa-bolt"></i></div>
                                    <small>Total views</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <span class="label label-info pull-right">Annual</span>
                                    <h5>Orders</h5>
                                </div>
                                <div class="ibox-content">
                                    <h1 class="no-margins">80,800</h1>
                                    <div class="stat-percent font-bold text-info">20% <i class="fa fa-level-up"></i></div>
                                    <small>New orders</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <span class="label label-primary pull-right">Today</span>
                                    <h5>Vistits</h5>
                                </div>
                                <div class="ibox-content">

                                    <div class="row">
                                        <div class="col-md-6">
                                            <h1 class="no-margins">$ 406,420</h1>
                                            <div class="font-bold text-navy">44% <i class="fa fa-level-up"></i> <small>Rapid pace</small></div>
                                        </div>
                                        <div class="col-md-6">
                                            <h1 class="no-margins">206,120</h1>
                                            <div class="font-bold text-navy">22% <i class="fa fa-level-up"></i> <small>Slow pace</small></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>Monthly income</h5>
                                    <div class="ibox-tools">
                                        <span class="label label-primary">Updated 12.2015</span>
                                    </div>
                                </div>
                                <div class="ibox-content no-padding">
                                    <div class="flot-chart m-t-lg" style="height: 55px;">
                                        <div class="flot-chart-content" id="flot-chart1"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="ibox float-e-margins">
                                <div class="ibox-content">
                                    <div>
                                        <span class="pull-right text-right">
                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>
                                            <br/>
                                            All sales: 162,862
                                        </span>
                                        <h3 class="font-bold no-margins">
                                            Half-year revenue margin
                                        </h3>
                                        <small>Sales marketing.</small>
                                    </div>

                                    <div class="m-t-sm">

                                        <div class="row">
                                            <div class="col-md-8">
                                                <div>
                                                    <canvas id="lineChart" height="114"></canvas>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <ul class="stat-list m-t-lg">
                                                    <li>
                                                        <h2 class="no-margins">2,346</h2>
                                                        <small>Total orders in period</small>
                                                        <div class="progress progress-mini">
                                                            <div class="progress-bar" style="width: 48%;"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h2 class="no-margins ">4,422</h2>
                                                        <small>Orders in last month</small>
                                                        <div class="progress progress-mini">
                                                            <div class="progress-bar" style="width: 60%;"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="m-t-md">
                                        <small class="pull-right">
                                            <i class="fa fa-clock-o"> </i>
                                            Update on 16.07.2015
                                        </small>
                                        <small>
                                            <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <span class="label label-warning pull-right">Data has changed</span>
                                    <h5>User activity</h5>
                                </div>
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <small class="stats-label">Pages / Visit</small>
                                            <h4>236 321.80</h4>
                                        </div>

                                        <div class="col-xs-4">
                                            <small class="stats-label">% New Visits</small>
                                            <h4>46.11%</h4>
                                        </div>
                                        <div class="col-xs-4">
                                            <small class="stats-label">Last week</small>
                                            <h4>432.021</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <small class="stats-label">Pages / Visit</small>
                                            <h4>643 321.10</h4>
                                        </div>

                                        <div class="col-xs-4">
                                            <small class="stats-label">% New Visits</small>
                                            <h4>92.43%</h4>
                                        </div>
                                        <div class="col-xs-4">
                                            <small class="stats-label">Last week</small>
                                            <h4>564.554</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <small class="stats-label">Pages / Visit</small>
                                            <h4>436 547.20</h4>
                                        </div>

                                        <div class="col-xs-4">
                                            <small class="stats-label">% New Visits</small>
                                            <h4>150.23%</h4>
                                        </div>
                                        <div class="col-xs-4">
                                            <small class="stats-label">Last week</small>
                                            <h4>124.990</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-lg-12">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>Custom responsive table </h5>
                                    <div class="ibox-tools">
                                        <a class="collapse-link">
                                            <i class="fa fa-chevron-up"></i>
                                        </a>
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="##">
                                            <i class="fa fa-wrench"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-user">
                                            <li><a href="##">Config option 1</a>
                                            </li>
                                            <li><a href="##">Config option 2</a>
                                            </li>
                                        </ul>
                                        <a class="close-link">
                                            <i class="fa fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-sm-9 m-b-xs">
                                            <div data-toggle="buttons" class="btn-group">
                                                <label class="btn btn-sm btn-white"> <input type="radio" id="option1" name="options"> Day </label>
                                                <label class="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options"> Week </label>
                                                <label class="btn btn-sm btn-white"> <input type="radio" id="option3" name="options"> Month </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="input-group"><input type="text" placeholder="Search" class="input-sm form-control"> <span class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-primary"> Go!</button> </span></div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>

                                                <th>#</th>
                                                <th>Project </th>
                                                <th>Name </th>
                                                <th>Phone </th>
                                                <th>Company </th>
                                                <th>Completed </th>
                                                <th>Task</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>0800 051213</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><span class="pie">0.52/1.561</span></td>
                                                <td>20%</td>
                                                <td>Jul 14, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>0500 780909</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><span class="pie">6,9</span></td>
                                                <td>40%</td>
                                                <td>Jul 16, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Betha project</td>
                                                <td>John Smith</td>
                                                <td>0800 1111</td>
                                                <td>Erat Volutpat</td>
                                                <td><span class="pie">3,1</span></td>
                                                <td>75%</td>
                                                <td>Jul 18, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>(016977) 0648</td>
                                                <td>Tellus Ltd</td>
                                                <td><span class="pie">4,9</span></td>
                                                <td>18%</td>
                                                <td>Jul 22, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>0500 780909</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><span class="pie">6,9</span></td>
                                                <td>40%</td>
                                                <td>Jul 16, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>0800 051213</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><span class="pie">0.52/1.561</span></td>
                                                <td>20%</td>
                                                <td>Jul 14, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>(016977) 0648</td>
                                                <td>Tellus Ltd</td>
                                                <td><span class="pie">4,9</span></td>
                                                <td>18%</td>
                                                <td>Jul 22, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>0800 051213</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><span class="pie">0.52/1.561</span></td>
                                                <td>20%</td>
                                                <td>Jul 14, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>0500 780909</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><span class="pie">6,9</span></td>
                                                <td>40%</td>
                                                <td>Jul 16, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Betha project</td>
                                                <td>John Smith</td>
                                                <td>0800 1111</td>
                                                <td>Erat Volutpat</td>
                                                <td><span class="pie">3,1</span></td>
                                                <td>75%</td>
                                                <td>Jul 18, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>(016977) 0648</td>
                                                <td>Tellus Ltd</td>
                                                <td><span class="pie">4,9</span></td>
                                                <td>18%</td>
                                                <td>Jul 22, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>0500 780909</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><span class="pie">6,9</span></td>
                                                <td>40%</td>
                                                <td>Jul 16, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>0800 051213</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><span class="pie">0.52/1.561</span></td>
                                                <td>20%</td>
                                                <td>Jul 14, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>(016977) 0648</td>
                                                <td>Tellus Ltd</td>
                                                <td><span class="pie">4,9</span></td>
                                                <td>18%</td>
                                                <td>Jul 22, 2013</td>
                                                <td><a href="##"><i class="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            -->


            <?=$content;?>


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

    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage() ?>