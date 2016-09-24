<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/24
 * Time: 15:11
 */
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);

?>


<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="renderer" content="webkit">
    <meta name="description" content="最新个人二手车报价/出售信息,个人直接卖给个人,没有中间商赚差价!瓜子二手车均经过259项严苛检测,标准无事故100%个人二手车,14天可退1年质保."/>
    <meta http-equiv="P3P" content='CP="CAO PSA OUR"'/>
    <meta name="baidu-site-verification" content="BPGd9vyB6h"/>
    <meta name="360-site-verification" content="7d8c840a2150d71d2f1c5004b80e91fc"/>
    <meta name="google-site-verification" content="FQph3WEY6ZqNqVXCB5PT4_u8f-WjfF14l2OOdFiOEmg"/>
    <meta http-equiv="Cache-Control" content="no-transform "/>
    <meta name="sogou_site_verification" content="hJqKUw5CFE"/>
    <meta name="shenma-site-verification" content="47174ef55ff6318bd3c48a846b608ee8_1446541131">
    <link rel="shortcut icon" type="image/x-icon" href="http://www.guazi.com/favicon.ico" media="screen"/>
    <link rel="canonical" href="http://www.guazi.com/www/buy/"/>

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

</head>

<body class="sc-list">
<?php $this->beginBody() ?>

<!-- 顶栏 -->
<div class="header">
    <div class="hd-top clearfix">

        <a href="/www/" class="logo" title="瓜子二手车直卖网">
            全国二手车
        </a>

        <div class="c2city">

            <a href="javascript:;" class="choose-city" baidu_alog="pc_index_city&mouseenter&pc_index_city_change_h">
                <span>全国                    <i>&nbsp;</i>
                </span>
            </a>

            <i class="maskline"></i>

            <div class="city-box">

                <div class="all-city">
                    <dl>
                        <dt>热门</dt>
                        <dd>
                            <a baidu_alog="pc_index_city&click&pc_index_quanguo_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000021" class="on" href="/www/buy/"
                               title="全国二手车">全国 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=bj" href="/bj/buy/"
                               title="北京二手车">北京 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=sh" href="/sh/buy/"
                               title="上海二手车">上海 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=gz" href="/gz/buy/"
                               title="广州二手车">广州 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=sz" href="/sz/buy/"
                               title="深圳二手车">深圳 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=cd" href="/cd/buy/"
                               title="成都二手车">成都 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=cq" href="/cq/buy/"
                               title="重庆二手车">重庆 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=hz" href="/hz/buy/"
                               title="杭州二手车">杭州 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=su" href="/su/buy/"
                               title="苏州二手车">苏州 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=sy" href="/sy/buy/"
                               title="沈阳二手车">沈阳 </a>
                            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
                               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=wh" href="/wh/buy/"
                               title="武汉二手车">武汉 </a>
                        </dd>
                    </dl>
                    <div class="city-line"></div>
                    <dl>
                        <dt>A</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=anshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/anshan/buy/"
                               title="鞍山二手车">鞍山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=anyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/anyang/buy/"
                               title="安阳二手车">安阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=anqing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/anqing/buy/"
                               title="安庆二手车">安庆 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>B</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=bj"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/bj/buy/"
                               title="北京二手车">北京 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=baoding"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/baoding/buy/"
                               title="保定二手车">保定 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=baotou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/baotou/buy/"
                               title="包头二手车">包头 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=bengbu"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/bengbu/buy/"
                               title="蚌埠二手车">蚌埠 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>C</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=cq"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/cq/buy/"
                               title="重庆二手车">重庆 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=cd"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/cd/buy/"
                               title="成都二手车">成都 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=cc"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/cc/buy/"
                               title="长春二手车">长春 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=cs"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/cs/buy/"
                               title="长沙二手车">长沙 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=changzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/changzhou/buy/"
                               title="常州二手车">常州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=cangzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/cangzhou/buy/"
                               title="沧州二手车">沧州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=changzhi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/changzhi/buy/"
                               title="长治二手车">长治 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=chengde"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/chengde/buy/"
                               title="承德二手车">承德 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=changde"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/changde/buy/"
                               title="常德二手车">常德 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=changshugz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/changshugz/buy/"
                               title="常熟二手车">常熟 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>D</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dl"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dl/buy/"
                               title="大连二手车">大连 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dazhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dazhou/buy/"
                               title="达州二手车">达州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dg"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dg/buy/"
                               title="东莞二手车">东莞 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=daqing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/daqing/buy/"
                               title="大庆二手车">大庆 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=datong"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/datong/buy/"
                               title="大同二手车">大同 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dezhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dezhou/buy/"
                               title="德州二手车">德州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=deyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/deyang/buy/"
                               title="德阳二手车">德阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dongying"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dongying/buy/"
                               title="东营二手车">东营 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=dandong"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/dandong/buy/"
                               title="丹东二手车">丹东 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=danyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/danyang/buy/"
                               title="丹阳二手车">丹阳 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>E</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=eerduosi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/eerduosi/buy/"
                               title="鄂尔多斯二手车">鄂尔多斯 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=ezhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/ezhou/buy/"
                               title="鄂州二手车">鄂州 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>F</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=fushun"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/fushun/buy/"
                               title="抚顺二手车">抚顺 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=fz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/fz/buy/"
                               title="福州二手车">福州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=foshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/foshan/buy/"
                               title="佛山二手车">佛山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=fuyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/fuyang/buy/"
                               title="阜阳二手车">阜阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jxfuzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jxfuzhou/buy/"
                               title="抚州二手车">抚州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=fuling"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/fuling/buy/"
                               title="涪陵二手车">涪陵 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>G</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=gz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/gz/buy/"
                               title="广州二手车">广州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=gy"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/gy/buy/"
                               title="贵阳二手车">贵阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=ganzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/ganzhou/buy/"
                               title="赣州二手车">赣州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=guangan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/guangan/buy/"
                               title="广安二手车">广安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=gl"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/gl/buy/"
                               title="桂林二手车">桂林 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=gaomi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/gaomi/buy/"
                               title="高密二手车">高密 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>H</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=hz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/hz/buy/"
                               title="杭州二手车">杭州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=hf"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/hf/buy/"
                               title="合肥二手车">合肥 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=hrb"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/hrb/buy/"
                               title="哈尔滨二手车">哈尔滨 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nmg"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nmg/buy/"
                               title="呼和浩特二手车">呼和浩特 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=huizhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/huizhou/buy/"
                               title="惠州二手车">惠州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=handan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/handan/buy/"
                               title="邯郸二手车">邯郸 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=huaian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/huaian/buy/"
                               title="淮安二手车">淮安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=huangshi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/huangshi/buy/"
                               title="黄石二手车">黄石 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=hengshui"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/hengshui/buy/"
                               title="衡水二手车">衡水 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=heze"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/heze/buy/"
                               title="菏泽二手车">菏泽 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=huzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/huzhou/buy/"
                               title="湖州二手车">湖州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=huanggang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/huanggang/buy/"
                               title="黄冈二手车">黄冈 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=hechuan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/hechuan/buy/"
                               title="合川二手车">合川 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>J</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jn"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jn/buy/"
                               title="济南二手车">济南 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jining"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jining/buy/"
                               title="济宁二手车">济宁 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jilin"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jilin/buy/"
                               title="吉林二手车">吉林 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiaxing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiaxing/buy/"
                               title="嘉兴二手车">嘉兴 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiamusi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiamusi/buy/"
                               title="佳木斯二手车">佳木斯 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiujiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiujiang/buy/"
                               title="九江二手车">九江 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jinhua"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jinhua/buy/"
                               title="金华二手车">金华 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiangmen"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiangmen/buy/"
                               title="江门二手车">江门 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jian/buy/"
                               title="吉安二手车">吉安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jingzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jingzhou/buy/"
                               title="荆州二手车">荆州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiaozuo"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiaozuo/buy/"
                               title="焦作二手车">焦作 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jinzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jinzhou/buy/"
                               title="锦州二手车">锦州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jiangyin"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jiangyin/buy/"
                               title="江阴二手车">江阴 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>K</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=km"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/km/buy/"
                               title="昆明二手车">昆明 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=kaifeng"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/kaifeng/buy/"
                               title="开封二手车">开封 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=kunshangz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/kunshangz/buy/"
                               title="昆山二手车">昆山 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>L</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=luoyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/luoyang/buy/"
                               title="洛阳二手车">洛阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=linyi"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/linyi/buy/"
                               title="临沂二手车">临沂 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=liuzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/liuzhou/buy/"
                               title="柳州二手车">柳州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=luan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/luan/buy/"
                               title="六安二手车">六安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=liaoyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/liaoyang/buy/"
                               title="辽阳二手车">辽阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=luzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/luzhou/buy/"
                               title="泸州二手车">泸州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=lianyungang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/lianyungang/buy/"
                               title="连云港二手车">连云港 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=linfen"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/linfen/buy/"
                               title="临汾二手车">临汾 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=lz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/lz/buy/"
                               title="兰州二手车">兰州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=longyan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/longyan/buy/"
                               title="龙岩二手车">龙岩 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=langfang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/langfang/buy/"
                               title="廊坊二手车">廊坊 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=leshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/leshan/buy/"
                               title="乐山二手车">乐山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=luohe"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/luohe/buy/"
                               title="漯河二手车">漯河 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=liaocheng"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/liaocheng/buy/"
                               title="聊城二手车">聊城 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>M</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=mianyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/mianyang/buy/"
                               title="绵阳二手车">绵阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=maanshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/maanshan/buy/"
                               title="马鞍山二手车">马鞍山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=meishan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/meishan/buy/"
                               title="眉山二手车">眉山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=mudanjiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/mudanjiang/buy/"
                               title="牡丹江二手车">牡丹江 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>N</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nj"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nj/buy/"
                               title="南京二手车">南京 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nc"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nc/buy/"
                               title="南昌二手车">南昌 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nn"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nn/buy/"
                               title="南宁二手车">南宁 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nantong"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nantong/buy/"
                               title="南通二手车">南通 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nanyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nanyang/buy/"
                               title="南阳二手车">南阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nanchong"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nanchong/buy/"
                               title="南充二手车">南充 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=nb"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/nb/buy/"
                               title="宁波二手车">宁波 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=neijiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/neijiang/buy/"
                               title="内江二手车">内江 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>P</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=panzhihua"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/panzhihua/buy/"
                               title="攀枝花二手车">攀枝花 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=putian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/putian/buy/"
                               title="莆田二手车">莆田 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=pingxiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/pingxiang/buy/"
                               title="萍乡二手车">萍乡 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=puyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/puyang/buy/"
                               title="濮阳二手车">濮阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=pingdu"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/pingdu/buy/"
                               title="平度二手车">平度 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Q</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=qd"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/qd/buy/"
                               title="青岛二手车">青岛 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=quanzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/quanzhou/buy/"
                               title="泉州二手车">泉州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=qujing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/qujing/buy/"
                               title="曲靖二手车">曲靖 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=qinhuangdao"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/qinhuangdao/buy/"
                               title="秦皇岛二手车">秦皇岛 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=qiqihaer"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/qiqihaer/buy/"
                               title="齐齐哈尔二手车">齐齐哈尔 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=qingzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/qingzhou/buy/"
                               title="青州二手车">青州 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>S</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=sh"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/sh/buy/"
                               title="上海二手车">上海 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=su"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/su/buy/"
                               title="苏州二手车">苏州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=sy"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/sy/buy/"
                               title="沈阳二手车">沈阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=sjz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/sjz/buy/"
                               title="石家庄二手车">石家庄 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=sz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/sz/buy/"
                               title="深圳二手车">深圳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=shaoxing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/shaoxing/buy/"
                               title="绍兴二手车">绍兴 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=suqian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/suqian/buy/"
                               title="宿迁二手车">宿迁 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=songyuan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/songyuan/buy/"
                               title="松原二手车">松原 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=suining"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/suining/buy/"
                               title="遂宁二手车">遂宁 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=shiyan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/shiyan/buy/"
                               title="十堰二手车">十堰 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=sanming"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/sanming/buy/"
                               title="三明二手车">三明 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=shantou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/shantou/buy/"
                               title="汕头二手车">汕头 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=shouguang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/shouguang/buy/"
                               title="寿光二手车">寿光 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=shuyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/shuyang/buy/"
                               title="沭阳二手车">沭阳 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>T</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=tj"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/tj/buy/"
                               title="天津二手车">天津 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=tangshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/tangshan/buy/"
                               title="唐山二手车">唐山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=ty"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/ty/buy/"
                               title="太原二手车">太原 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=tieling"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/tieling/buy/"
                               title="铁岭二手车">铁岭 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jstaizhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jstaizhou/buy/"
                               title="泰州二手车">泰州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=taian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/taian/buy/"
                               title="泰安二手车">泰安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=tongliao"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/tongliao/buy/"
                               title="通辽二手车">通辽 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zjtaizhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zjtaizhou/buy/"
                               title="台州二手车">台州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=tongling"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/tongling/buy/"
                               title="铜陵二手车">铜陵 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=taicang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/taicang/buy/"
                               title="太仓二手车">太仓 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>W</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wh"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wh/buy/"
                               title="武汉二手车">武汉 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=weifang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/weifang/buy/"
                               title="潍坊二手车">潍坊 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wx"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wx/buy/"
                               title="无锡二手车">无锡 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wei"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wei/buy/"
                               title="威海二手车">威海 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wuhu"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wuhu/buy/"
                               title="芜湖二手车">芜湖 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wenzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wenzhou/buy/"
                               title="温州二手车">温州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xj"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xj/buy/"
                               title="乌鲁木齐二手车">乌鲁木齐 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wanzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wanzhou/buy/"
                               title="万州二手车">万州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wujiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wujiang/buy/"
                               title="吴江二手车">吴江 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=wafangdian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/wafangdian/buy/"
                               title="瓦房店二手车">瓦房店 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>X</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xa"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xa/buy/"
                               title="西安二手车">西安 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xm"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xm/buy/"
                               title="厦门二手车">厦门 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xuzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xuzhou/buy/"
                               title="徐州二手车">徐州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xiangyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xiangyang/buy/"
                               title="襄阳二手车">襄阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xinxiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xinxiang/buy/"
                               title="新乡二手车">新乡 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xiangtan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xiangtan/buy/"
                               title="湘潭二手车">湘潭 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xuchang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xuchang/buy/"
                               title="许昌二手车">许昌 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xinyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xinyang/buy/"
                               title="信阳二手车">信阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xingtai"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xingtai/buy/"
                               title="邢台二手车">邢台 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xiaogan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xiaogan/buy/"
                               title="孝感二手车">孝感 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=xianning"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/xianning/buy/"
                               title="咸宁二手车">咸宁 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Y</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yantai"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yantai/buy/"
                               title="烟台二手车">烟台 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yangzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yangzhou/buy/"
                               title="扬州二手车">扬州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yichang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yichang/buy/"
                               title="宜昌二手车">宜昌 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yiwu"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yiwu/buy/"
                               title="义乌二手车">义乌 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yuncheng"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yuncheng/buy/"
                               title="运城二手车">运城 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yibin"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yibin/buy/"
                               title="宜宾二手车">宜宾 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yancheng"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yancheng/buy/"
                               title="盐城二手车">盐城 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yingkou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yingkou/buy/"
                               title="营口二手车">营口 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=jxyichun"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/jxyichun/buy/"
                               title="宜春二手车">宜春 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yangquan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yangquan/buy/"
                               title="阳泉二手车">阳泉 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yongchuan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yongchuan/buy/"
                               title="永川二手车">永川 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=yixing"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/yixing/buy/"
                               title="宜兴二手车">宜兴 </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Z</dt>
                        <dd>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zz"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zz/buy/"
                               title="郑州二手车">郑州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhongshan"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhongshan/buy/"
                               title="中山二手车">中山 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhangzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhangzhou/buy/"
                               title="漳州二手车">漳州 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhuzhou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhuzhou/buy/"
                               title="株洲二手车">株洲 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhenjiang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhenjiang/buy/"
                               title="镇江二手车">镇江 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zibo"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zibo/buy/"
                               title="淄博二手车">淄博 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=ziyang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/ziyang/buy/"
                               title="资阳二手车">资阳 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhuhai"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhuhai/buy/"
                               title="珠海二手车">珠海 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zigong"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zigong/buy/"
                               title="自贡二手车">自贡 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhumadian"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhumadian/buy/"
                               title="驻马店二手车">驻马店 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhangjiakou"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhangjiakou/buy/"
                               title="张家口二手车">张家口 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhangjiagang"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhangjiagang/buy/"
                               title="张家港二手车">张家港 </a>
                            <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=zhucheng"
                               baidu_alog="pc_index_city&click&pc_index_all_city_c"
                               href="/zhucheng/buy/"
                               title="诸城二手车">诸城 </a>
                        </dd>
                    </dl>
                </div>
                <p class="more-city">更多城市正在加紧筹备，敬请期待。</p>
            </div>
        </div>

        <div class="hot-phone">
            <i></i>
            <!--电话判断，当页面处于汽车金融则显示汽车金融电话  -->
            <span class="js-change-phone">
400-733-6622                </span>
        </div>

        <!--头部搜索框 -->
        <div class="search-box">
            <div class="suggestion_widget" data-default-count="0">
                <input type="text" class="search-input js_search_input_index" placeholder="搜索您想要的车"
                       baidu_alog='pc_index_search&&input&&index_fastpick_input_search' data-role="keywordInput"
                       name="keyword" autocomplete="off" data-domain="www">
                <button class="search-btn" data-gzlog="tracking_type=click&eventid=0020070000000022"
                        baidu_alog='pc_index_search&click&pc_index_search_rementuijian_c'>搜索
                </button>
                <input type="hidden" value="www" name="hiddenCity">
            </div>
        </div>
    </div>

    <!-- menu s-->
    <div class="nav">
        <div class="w">
            <a class="fr " baidu_alog="pc_index_top_tab&click&pc_index_top_tab_appdownload_c"
               target="_blank" href="#" data-gzlog="tracking_type=click&eventid=0010190000000012"
               title="瓜子二手车直卖网APP">APP下载</a>
            <a class="fr " baidu_alog="pc_index_top_tab&click&pc_index_top_tab_carfina_c"
               href="#" data-gzlog="tracking_type=click&eventid=0010000000000011"
               title="二手车分期付款">分期购车</a>
            <a class="fl " baidu_alog="pc_index_top_tab&click&pc_index_top_tab_index_c"
               href="/" data-gzlog="tracking_type=click&eventid=0010000000000007" title="瓜子二手车">首页</a>
            <a class="fl active" baidu_alog="pc_index_top_tab&click&pc_index_top_tab_buy_c"
               href="<?=\yii\helpers\Url::toRoute(['/site/list']);?>" data-gzlog="tracking_type=click&eventid=0010000000000008"
               title="全国个人二手车">我要买车</a>
            <a class="fl " baidu_alog="pc_index_top_tab&click&pc_index_top_tab_sell_c"
               href="#" data-gzlog="tracking_type=click&eventid=0010050000000009"
               title="全国二手车出售">我要卖车</a>
            <a class="fl " baidu_alog="pc_index_top_tab&click&pc_index_top_tab_intro_c"
               href="#" data-gzlog="tracking_type=click&eventid=0010000000000010" title="瓜子二手车服务保障">服务保障</a>

            <a class="fl " href="/ask/" title="瓜子二手车问答系统">二手车问答</a>
        </div>
    </div>
    <!-- menu e-->
</div>
<?= $content; ?>
<!-- 尾部 -->
<div class="footer">
    <!--加载footer 信息部分 -->
    <div class="company-info clearfix">
        <div class="footer-logo"></div>
        <div class="phone-email">
            <p>
                咨询电话：<i class="js-change-phone">400-733-6622</i> <br>
                <span>（周一至周日 8:00-21:00）</span>
            </p>
            <p>售后服务专线：400-733-1100 </p>
        </div>
        <img src="http://sta.guazi.com/static/c2c/web/common/ewm-wx-2.png" alt="" class="gz-ewm">
        <p class="ewm-tit">关注微信</p>
        <img src="http://sta.guazi.com/static/c2c/web/common/ewm-app-2.png" alt="" class="gz-ewm">
        <p class="ewm-tit">下载APP</p>
        <div class="basic-info">
            <div class="info-link">
                <a rel="nofollow" href="/www/aboutus/" target="_blank">关于瓜子</a>
                <a rel="nofollow" href="/www/join/" target="_blank">加入我们</a>
                <a rel="nofollow" href="/www/contact" target="_blank">联系我们</a>
                <a rel="nofollow" href="/www/intro/" target="_blank">服务保障</a>
            </div>
            <p class="arc-info">Copyright 2016 www.guazi.com All Rights Reserved</p>
            <p class="arc-info">京ICP备15053955号 ICP证151071号 </p>
            <div style="width:300px;margin:0 auto; padding:20px 0;">
                <a rel="nofollow" target="_blank"
                   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020161"
                   style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img
                        src="http://sta.guazi.com/static/c2c/web/common/ghs.png" style="float:left;"/>
                    <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备
                        11010802020161号</p></a>
            </div>
        </div>
    </div>    <!--seo 链接 -->
    <div class="friendly-link">
        <p class="link-tit">热门城市:</p>
        <span class="open-box"></span>
        <span class="close-box" data-role="is_show_box"></span>
        <a href="/www/" target="_blank">全国二手车</a>
        <a href="/zz/" target="_blank">郑州二手车</a>
        <a href="/sh/" target="_blank">上海二手车</a>
        <a href="/sy/" target="_blank">沈阳二手车</a>
        <a href="/km/" target="_blank">昆明二手车</a>
        <a href="/bj/" target="_blank">北京二手车</a>
        <a href="/nn/" target="_blank">南宁二手车</a>
        <a href="/cc/" target="_blank">长春二手车</a>
        <a href="/cd/" target="_blank">成都二手车</a>
        <a href="/tj/" target="_blank">天津二手车</a>
        <a href="/gz/" target="_blank">广州二手车</a>
        <a href="/cq/" target="_blank">重庆二手车</a>
        <a href="/dg/" target="_blank">东莞二手车</a>
        <a href="/dl/" target="_blank">大连二手车</a>
        <a href="/sjz/" target="_blank">石家庄二手车</a>
        <a href="/hz/" target="_blank">杭州二手车</a>
        <a href="/lz/" target="_blank">兰州二手车</a>
        <a href="/qd/" target="_blank">青岛二手车</a>
        <a href="/xa/" target="_blank">西安二手车</a>
        <a href="/nb/" target="_blank">宁波二手车</a>
        <a href="/jn/" target="_blank">济南二手车</a>
        <a href="/sz/" target="_blank">深圳二手车</a>
        <a href="/gy/" target="_blank">贵阳二手车</a>
        <a href="/tangshan/" target="_blank">唐山二手车</a>
        <a href="/hrb/" target="_blank">哈尔滨二手车</a>
        <a href="/su/" target="_blank">苏州二手车</a>
        <a href="/wh/" target="_blank">武汉二手车</a>
        <a href="/foshan/" target="_blank">佛山二手车</a>
        <a href="/fz/" target="_blank">福州二手车</a>
        <a href="/nj/" target="_blank">南京二手车</a>
        <a href="/cs/" target="_blank">长沙二手车</a>
    </div>


    <div class="friendly-link">
        <p class="link-tit">移动版：</p>
        <!--    <span class="open-box"></span>-->
        <!--    <span class="close-box" data-role="is_show_box"></span>-->
        <a href="http://m.guazi.com/www/">瓜子二手车全国移动页</a>
    </div>

    <!--公司信息-->
    <p style="text-align:center;line-height:20px;font-size:12px;color:#666; padding-top:20px;">
        车好多旧机动车经纪（北京）有限公司&emsp;&emsp;&emsp;
        北京市丰台区南四环中路260号北京新发地汽车交易市场旧车经营区B区178号&emsp;&emsp;&emsp;
        010-57317000
    </p></div>


<input type="hidden" class="hide_gich"
       value="& &pagetype=list&city=www&currentUrl=http%3A%2F%2Fwww.guazi.com%2Fwww%2Fbuy%2F&puid=&line=c2c&tag=">
<input type="hidden" data-role="dataSource" class="dataSourceButton" data-source='[]'>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>



