<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/9
 * Time: 16:51
 */

namespace common\core;

use yii;
use yii\helpers\Url;
use common\models\AuthItem;
use yii\validators\EmailValidator;


class HoComm
{


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 函数描述
     * @param $route
     * @param $items
     */
    public static function getMenu($route, &$items)
    {

        $menu = Yii::$app->cache->get("menu");
        if (!$menu) {
            $menu = AuthItem::find()->where(['type' => 2, 'level' => 1])->all();
            Yii::$app->cache->set('menu', $menu, 0);
        }

        $newMenu = [];
        foreach ($menu as $key => $value) {
            $activeUrl = [];
            $TempMenu  = ['name' => $value->name, 'description' => $value->description];

            if (!empty($value->children)) {
                $tempChild = [];

                foreach ($value->children as $ke => $val) {
                    $activeUrl[]      = $val->name;
                    $tempChildStr     = ['name' => $val->name, 'description' => $val->description];
                    $activeUrlChild   = [];
                    $activeUrlChild[] = $val->name;
                    if (!empty($val->children)) {
                        foreach ($val->children as $k => $v) {
                            $activeUrl[]      = $v->name;
                            $activeUrlChild[] = $v->name;
                        }
                    }
                    $tempChildStr['active'] = $activeUrlChild;
                    $tempChild[]            = $tempChildStr;
                }
                $TempMenu['children'] = $tempChild;
            }
            $TempMenu['active'] = $activeUrl;
            $newMenu[]          = $TempMenu;
        }

        foreach ($newMenu as $key => $value) {
            $tempItem = ['label' => '<i class="fa fa-cog"></i>' . $value['description'] . '<span class="fa arrow"></span>', 'url' => ''];
            if (!empty($value['children'])) {
                $tempItemChild = [];
                foreach ($value['children'] as $ke => $val) {
                    $tempItemChild[] = ['label' => $val['description'], 'url' => [$val['name']], 'active' => in_array($route, $val['active'])];
                }
                $tempItem['items'] = $tempItemChild;
            }
            $tempItem['active'] = in_array($route, $value['active']);

            $items[] = $tempItem;
        }

    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 此函数比上一个效率更高一些
     * @param $route
     * @param bool $isFind 如果true  就执行查询
     * @return array|mixed
     */
    public static function getMenuCopy($isFind=false)
    {
        $route = "/" . Yii::$app->requestedAction->uniqueId;
        $menu = Yii::$app->cache->get("menu");
        if ("" == $menu || null == $menu || $isFind==true) {
            $menu = [];
            $menu[] = self::getMenuHead();
            $menuData = AuthItem::find()->where(['type' => 2, 'level' => 1])->orderBy('sort desc')->all();
            foreach ($menuData as $key => $value) {
                $activeUrl = [];
                $activeUrl[]  = $value->name;
                $faarrow = '';
                if(!empty($value->children)){ $faarrow = '<span class="fa arrow"></span>';};
                $TempMenu  = ['label' => '<i class="fa fa-cog"></i>' . $value['description'] . $faarrow, 'url' => Url::toRoute($value['name']) ];
                if (!empty($value->children)) {
                    $tempChild = [];
                    foreach ($value->children as $ke => $val) {

                        $tempChildStr = ['label' => $val['description'], 'url' => [$val['name']]];
                        $activeUrl[]  = $val->name;

                        $activeUrlChild   = [];
                        $activeUrlChild[] = $val->name;
                        if (!empty($val->children)) {
                            foreach ($val->children as $k => $v) {
                                $activeUrl[]      = $v->name;
                                $activeUrlChild[] = $v->name;
                            }
                        }
                        $tempChildStr['active'] = in_array($route, $activeUrlChild);
                        $tempChild[]            = $tempChildStr;
                    }
                    $TempMenu['items'] = $tempChild;
                }
                $TempMenu['active'] = in_array($route, $activeUrl);
                $menu[]             = $TempMenu;
            }
            Yii::$app->cache->delete('menu');
            Yii::$app->cache->set('menu', $menu);
        }
        return $menu;
    }



    /**
     * @description 获得菜单上方的头部
     * @author: 火柴<290559038@qq.com>
     * @return array
     */
    public static function getMenuHead()
    {

        $items = [
            'options' => ['class' => 'nav-header'],
            'label'   => '
                                                                <div class="dropdown profile-element"> 
                                                                                        <span> <img alt="image" class="img-circle" src="/img/profile_small.jpg"/> </span>
                                                                                        <a data-toggle="dropdown" class="dropdown-toggle" href="full_height.html#">
                                                                                             <span class="clear"> 
                                                                                               <span class="block m-t-xs"><strong class="font-bold">火柴</strong></span> 
                                                                                               <span class="text-muted text-xs block">艺术总监 <b class="caret"></b></span> 
                                                                                             </span> 
                                                                                        </a>
                                                                                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                                                                            <li><a href="profile.html">Profile</a></li>
                                                                                            <li><a href="contacts.html">Contacts</a></li>
                                                                                            <li><a href="mailbox.html">Mailbox</a></li>
                                                                                            <li class="divider"></li>
                                                                                            <li><a href="login.html">Logout</a></li>
                                                                                        </ul>
                                                                </div>
                                                                <div class="logo-element"> IN+</div>'
        ];

        return $items;
    }



    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 检测字符串是 手机或者邮箱
     * @param $Str
     * @return bool
     */
    public static function CheckStr($Str)
    {
        $emailValidate = new EmailValidator();
        if (preg_match("/^1[34578]{1}\d{9}$/", $Str)) {
            return "mobile";
        } else if (preg_match($emailValidate->pattern, $Str)) {
            return "email";
        } else {
            return "strings";
        }
    }



    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 成功提示信息
     * @param $msg
     */
    public static function success($msg)
    {
        Yii::$app->session->setFlash('success', $msg);
    }



    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 错误提示信息
     * @param $msg
     */
    public static function info($msg)
    {
        Yii::$app->session->setFlash('info', $msg);
    }

    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 警告提示信息
     * @param $msg
     */
    public static function warning($msg)
    {
        Yii::$app->session->setFlash('warning', $msg);
    }

    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 错误提示信息
     * @param $msg
     */
    public static function error($msg)
    {
        Yii::$app->session->setFlash('error', $msg);
    }


}