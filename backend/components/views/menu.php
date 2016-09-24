<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/17
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 18:08
 */


/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Menu;


$route = Yii::$app->requestedAction->uniqueId;

echo Menu::widget([
                      'encodeLabels'    => false,
                      'submenuTemplate' => "\n<ul class=\"nav nav-second-level collapse\">\n{items}\n</ul>\n",
                      'options'         => [
                          'class' => 'nav metismenu',
                          'id'    => 'side-menu',
                      ],

                      'items' => [
                          [
                              'options' => ['class' => 'nav-header'],
                              'label'   => '
                                <div class="dropdown profile-element" style="margin-left: ;"> <span>
                                    <img alt="image" class="img-circle" src="/img/profile_small.jpg" />
                                     </span>
                                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                    <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">卖火柴的男孩</strong>
                                     </span> <span class="text-muted text-xs block">360研发<b class="caret"></b></span> </span> </a>
                                <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="mailbox.html">Mailbox</a></li>
                                    <li class="divider"></li>
                                    <li><a href="login.html">Logout</a></li>
                                </ul>
                            </div>
                            <div class="logo-element">
                                IN+
                            </div>',
                          ],

                          [
                              'label' => '<i class="fa fa-dashboard fa-fw"></i> <span class="nav-label">仪表盘</span><span class="fa arrow"></span> ',
                              'url'   => ['/site/index']
                          ],

                          [
                              'label'  => '<i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span>',
                              'active' => in_array($route, ['menu/index', 'menu/add']),
                              'url'    => '#',
                              'items'  => [
                                  ['label' => '菜单管理', 'url' => ['/menu'], 'active' => in_array($route, ['menu/index', 'menu/add'])],
                                  ['label' => '采购管理', 'url' => ['/apply'], 'active' => in_array($route, ['apply/index', 'apply/view'])]
                              ]
                          ],

                          [
                              'label'  => '<i class="fa fa-home fa-fw"></i><span class="nav-label">商品管理</span>  <span class="fa arrow"></span>',
                              'active' => in_array($route, ['goods/index', 'goods/add', 'goods/edit', 'category/index', 'package/index']),
                              'url'    => '#',
                              'items'  => [
                                  ['label' => '商品管理', 'url' => ['goods/index'], 'active' => in_array($route, ['goods/index', 'goods/add'])],
                                  ['label' => '套餐管理', 'url' => ['package/index'], 'active' => in_array($route, ['package/index'])],
                                  ['label' => '商品分类', 'url' => ['category/index'], 'active' => in_array($route, ['category/index', 'category/index'])]
                              ]
                          ],
                          [
                              'label' => '<i class="fa fa-shopping-cart fa-fw"></i> <span class="nav-label">促销管理</span> <span class="fa arrow"></span>',
                              'url'   => '#',
                              'items' => [
                                  ['label' => '商品列表', 'url' => ['/goods'], 'active' => in_array($route, ['goods/index', 'goods/add', 'goods/update', 'goods/img', 'goods/surplus'])],
                                  ['label' => '商品分类', 'url' => ['/category'], 'active' => in_array($route, ['category/index', 'category/add', 'category/update'])]
                              ]
                          ],
                          [
                              'label' => '<i class="fa fa-university fa-fw"></i> <span class="nav-label">订单管理</span><span class="fa arrow"></span>',
                              'url'   => '#',
                              'items' => [
                                  ['label' => '学校列表', 'url' => ['/school'], 'active' => in_array($route, ['school/index', 'school/add', 'school/update'])],
                                  ['label' => '建筑列表', 'url' => ['/building'], 'active' => in_array($route, ['building/index', 'building/add', 'building/update'])],
                              ]
                          ],
                          [
                              'label' => '<i class="fa fa-map-marker fa-fw"></i> <span class="nav-label">广告管理</span> <span class="fa arrow"></span>',
                              'url'   => '#',
                              'items' => [
                                  ['label' => '营业点列表', 'url' => ['/store'], 'active' => in_array($route, ['store/index', 'store/add', 'store/update', 'store/view'])],
                                  ['label' => '标签列表', 'url' => ['/tag'], 'active' => in_array($route, ['tag/index', 'tag/add', 'tag/update'])],
                                  ['label' => '用户列表', 'url' => ['/member'], 'active' => in_array($route, ['member/index', 'member/add', 'member/update'])]
                              ]
                          ],
                          [
                              'label' => '<i class="fa fa-user fa-fw"></i> <span class="nav-label">报表统计</span> <span class="fa arrow"></span>',
                              'url'   => '#',
                              'items' => [
                                  ['label' => '用户列表', 'url' => ['/admin'], 'active' => in_array($route, ['admin/index', 'admin/add', 'admin/update'])],
                                  ['label' => '我的资料', 'url' => ['/admin/profile'], 'active' => in_array($route, ['admin/profile'])],
                              ]
                          ],

                      ]
                  ]);


?>






