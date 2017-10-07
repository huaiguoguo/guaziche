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
                <?=$this->render('city');?>
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
            <a class="fl active" baidu_alog="pc_index_top_tab&click&pc_index_top_tab_index_c"
               href="/" data-gzlog="tracking_type=click&eventid=0010000000000007" title="瓜子二手车">首页</a>
            <a class="fl" baidu_alog="pc_index_top_tab&click&pc_index_top_tab_buy_c"
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



