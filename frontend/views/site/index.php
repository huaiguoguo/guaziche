<?php
use yii\web\View;
use frontend\assets\AppAsset;
/* @var $this yii\web\View */

$this->title = '二手车网站';

AppAsset::addScript($this, '/js/index.copy.js');
?>

<div class="index-area">

    <!--banner显示 s-->
    <div class="sel-op clearfix">
        <div class="sel-area fl">
            <div class="buy-tit">免费卖车<span><em class="orgtext">平均7天卖出</em>已有<em class="clue_num">4126876</em>人提交了申请</span></div>
            <div class="sell-car-box" data-value-domain="www">
                <form action="http://ershouche.phpdx.com/www/" class="clearfix" data-role="sell_form">
                    <input type="text" class="sell-phone-input" data-role="sellPhone" placeholder="请输入手机号码">
                    <button class="sell-phone-submit" data-clue-entry="03" data-gzlog="tracking_type=click&amp;eventid=0210050000000013">我要卖车</button>
                    <input type="hidden" name="source_type" value="">
                </form>
                <p class="sell-phone-error"></p>
                <div class="submit-suc" style="display: none">
                    <i></i>
                    提交成功！
                    <a href="javascript:void(0)" data-role="go_back">返回</a>
                </div>
            </div>
            <div class="buy-tit">我要买车<span>1年2万公里质保</span></div>
            <div class="sx">
                <div class="sx-pinpai js_brands_index">
                    <div class="dt">品牌</div>
                    <div class="dd" id="baidu_alog">
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_dazhong_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=dazhong" href="http://ershouche.phpdx.com/www/dazhong/" class="i-dazhong" title="大众二手车">大众</a>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_toyota_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=toyota" href="http://ershouche.phpdx.com/www/toyota/" class="i-toyota" title="丰田二手车">丰田</a>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_honda_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=honda" href="http://ershouche.phpdx.com/www/honda/" class="i-honda" title="本田二手车">本田</a>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_benz_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=benz" href="http://ershouche.phpdx.com/www/benz/" class="i-benz" title="奔驰二手车">奔驰</a>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_bmw_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=bmw" href="http://ershouche.phpdx.com/www/bmw/" class="i-bmw" title="宝马二手车">宝马</a>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_audi_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_brand_c" data-gzlog="tracking_type=click&amp;eventid=0050080000000024&amp;brand=audi" href="http://ershouche.phpdx.com/www/audi/" class="i-audi" title="奥迪二手车">奥迪</a>
                        <span class="tip-right"></span>
                    </div>
                    <div class="ppmore">
                        <div class="leftline"></div>
                        <p>所有品牌abc</p>
                        <table class="tbl">
                            <tbody>
                               <?=$this->render('/layouts/brands');?>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="sx-price">
                    <div class="dt">价格</div>
                    <div class="dd">
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_5_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=5" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p3/" title="5万以下二手车">
                            5万以下                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_5_10_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=5_10" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p4/" title="10万以下二手车">
                            5-10万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_10_15_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=10_15" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p5/" title="15万以下二手车">
                            10-15万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_15_20_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=15_20" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p6/" title="20万以下二手车">
                            15-20万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_20_30_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=20_30" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p7/" title="30万以下二手车">
                            20-30万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_30_40_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=30_40" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p8/" title="40万以下二手车">
                            30-40万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_40_60_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=40_60" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p9/" title="60万以下二手车">
                            40-60万                            </a>
                        <a baidu_alog="pc_index_fastPick_price&amp;click&amp;pc_index_fastPick_price_60_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_price_c" data-gzlog="tracking_type=click&amp;eventid=0050100000000026&amp;price_index=60" target="_blank" gjalog="100000000049000100000010" href="http://ershouche.phpdx.com/www/buy/p10/" title="60万以上二手车">
                            60万以上                            </a>
                    </div>
                </div>
                <div class="sx-chexing">
                    <div class="dt">车型</div>
                    <div class="dd">
                        <a baidu_alog="pc_index_fastPick_chexing&amp;click&amp;pc_index_fastPick_type_suv_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_chexing_c" data-gzlog="tracking_type=click&amp;eventid=0050110000000027&amp;chexing_index=suv" href="http://ershouche.phpdx.com/www/buy/h2/" class="x-suv" title="二手SUV">
                            SUV                            </a>
                        <a baidu_alog="pc_index_fastPick_chexing&amp;click&amp;pc_index_fastPick_type_mpv_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_chexing_c" data-gzlog="tracking_type=click&amp;eventid=0050110000000027&amp;chexing_index=mpv" href="http://ershouche.phpdx.com/www/buy/h3/" class="x-mpv" title="二手MPV">
                            MPV                            </a>
                        <a baidu_alog="pc_index_fastPick_chexing&amp;click&amp;pc_index_fastPick_type_paoche_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_chexing_c" data-gzlog="tracking_type=click&amp;eventid=0050110000000027&amp;chexing_index=paoche" href="http://ershouche.phpdx.com/www/buy/h4/" class="x-paoche" title="二手跑车">
                            跑车                            </a>
                        <a baidu_alog="pc_index_fastPick_chexing&amp;click&amp;pc_index_fastPick_type_xiaojiaoche_c#pc_index_fastPick&amp;click&amp;pc_index_fastPick_chexing_c" data-gzlog="tracking_type=click&amp;eventid=0050110000000027&amp;chexing_index=xiaojiaoche" href="http://ershouche.phpdx.com/www/buy/h1/" class="x-sanxiang" title="二手轿车">
                            轿车                            </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="op-area fr">
            <!--banner -->
            <div class="op-slide index-3" data-widget="app/ms_v2/widget/slide.js" data-slide-fn="app/ms_v2/self_service/page/promotion_index.js#slideFn" data-interval="3000">
                <div data-role="list">
                    <div class="slide-li" data-role="item" style="background: url(&quot;http://image.ganjistatic1.com/gjfs22/M07/31/08/CgEHGFfXwLvanLekAAHfOVCvvWU713_860-305_8-0.png&quot;) center center no-repeat; display: none;" baidu_alog="banner&amp;&amp;click&amp;&amp;index_top_banner_0">
                        <a rel="nofollow" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banner_1_c" data-gzlog="" target="_blank" href="http://ershouche.phpdx.com/zq_article/4248/?&amp;clueS=02" class="ban_a"></a>
                    </div>
                    <div class="slide-li" data-role="item" style="background: url(&quot;http://image.ganjistatic1.com/gjfs22/M00/65/2D/CgEHGFfeNXGKIYndAAd95KT4rCw958_860-305_8-0.png&quot;) center center no-repeat; display: none;" baidu_alog="banner&amp;&amp;click&amp;&amp;index_top_banner_1">
                        <a rel="nofollow" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banner_2_c" data-gzlog="" target="_blank" href="http://ershouche.phpdx.com/zq_article/4246/?&amp;clueS=02" class="ban_a"></a>
                    </div>
                    <div class="slide-li" data-role="item" style="background: url(&quot;http://image.ganjistatic1.com/gjfs19/M00/91/72/CgEHZlfjooe1yNdtAAO2Ejwoxjw868_860-305_8-0.png&quot;) center center no-repeat; display: none;" baidu_alog="banner&amp;&amp;click&amp;&amp;index_top_banner_2">
                        <a rel="nofollow" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banner_3_c" data-gzlog="" target="_blank" href="http://ershouche.phpdx.com/zq_article/4243/?&amp;clueS=02" class="ban_a"></a>
                    </div>
                    <div class="slide-li" data-role="item" style="background: url(&quot;http://image.ganjistatic1.com/gjfs20/M03/57/51/CgEHFFfayA,G8JDHAAHDZmhk7,E375_860-305_8-0.jpg&quot;) center center no-repeat; display: block;" baidu_alog="banner&amp;&amp;click&amp;&amp;index_top_banner_3">
                        <a rel="nofollow" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banner_4_c" data-gzlog="" target="_blank" href="http://ershouche.phpdx.com/zq_app/?&amp;clueS=02" class="ban_a"></a>
                    </div>
                    <!--                <div class="slide-li" data-role="item" style="background: url('http://sta.guazi.com/static/c2c/web/index/index-default.jpg') center center no-repeat;">-->
                    <!--                    <a rel="nofollow" baidu_alog='pc_index_topYunying&click&pc_index_topYunying_banner_0_c' data-gzlog="tracking_type=click&eventid=0140120000000028&url=intro" target="_blank" href="/--><!--/intro/--><!--"></a>-->
                    <!--                </div>-->
                </div>

                <div class="slide-ctrl">
                    <span class="on" data-role="point" data-slide-to="0"></span>
                    <span class="on" data-role="point" data-slide-to="1"></span>
                    <span class="on" data-role="point" data-slide-to="2"></span>
                    <span class="on active" data-role="point" data-slide-to="3"></span>
                    <span class="on" data-role="point" data-slide-to="4"></span>
                </div>
            </div>
            <!--三个运营位 -->
            <div class="op-img">
                <ul class="clearfix">
                    <li>
                        <a data-gzlog="tracking_type=click&amp;eventid=0140130000000029&amp;url=jr" class="gz-finance" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banenr_sub1_fenqi_c" href="http://jr.guazi.com/www/">
                        </a>
                    </li>
                    <li>
                        <a baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banenr_sub2_c" data-gzlog="tracking_type=click&amp;eventid=0140130000000029&amp;url=t3" href="http://ershouche.phpdx.com/zq_article/t3/" target="_blank">
                            <img src="/img/guazi_story.jpg" alt="好车故事">
                        </a>
                    </li>
                    <li>
                        <a baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_topYunying_banenr_sub3_c" data-gzlog="tracking_type=click&amp;eventid=0140130000000029&amp;url=t1" href="http://ershouche.phpdx.com/zq_article/t1/" target="_blank">
                            <img src="/img/guazi_learn.jpg" alt="瓜子用车知识讲堂">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    <!--banner显示 e -->

    <!--服务介绍 s-->
    <ul class="ser-gua clearfix">
        <li><i class="ser-1"></i>100%个人二手车</li>
        <li><i class="ser-2"></i>259项全面检测</li>
        <li><i class="ser-3"></i>14天可退</li>
        <li><i class="ser-4"></i>1年2万公里质保</li>
    </ul>    <!--服务介绍 e -->

    <!--今日超值 s-->
    <!--今日超值 e -->

    <!--首页帖子列表 s-->
    <div class="w
     indexTab">
        <div class="title clearfix">
            <a rel="nofollow" baidu_alog="index_tabselect&amp;click&amp;pc_index_tabSelect_right_morecar_c" class="all-car" href="http://ershouche.phpdx.com/www/buy/" gjalog="100000000051000100000010">查看全部&gt;&gt;</a>
            <span class="ti-left">
            <span>热门好车</span>
                                              <a baidu_alog="pc_index_tabSelect_detailCar&amp;mouseenter&amp;pc_index_tabSelect_detailCar_new_sale_h " href="javascript:void(0)" data-role="tabSelect" gjalog="100000000967000100000010" eventid="0080140000000032" class="on">最新上架</a>
                                              <a baidu_alog="pc_index_tabSelect_detailCar&amp;mouseenter&amp;pc_index_tabSelect_detailCar_jishou_h" href="javascript:void(0)" data-role="tabSelect" gjalog="100000000968000100000010" eventid="0080150000000156">降价急售</a>
                                              <a baidu_alog="pc_index_tabSelect_detailCar&amp;mouseenter&amp;pc_index_tabSelect_detailCar_zhunxin_h" href="javascript:void(0)" data-role="tabSelect" gjalog="100000000970000100000010" eventid="0080320000000036">准新车</a>
                                              <a baidu_alog="pc_index_tabSelect_detailCar&amp;mouseenter&amp;pc_index_tabSelect_detailCar_lianshou_h" href="javascript:void(0)" data-role="tabSelect" gjalog="100000000969000100000010" eventid="0080330000000038">练手车</a>
                                              <a baidu_alog="pc_index_tabSelect_detailCar&amp;mouseenter&amp;pc_index_tabSelect_detailCar_suv_h" href="javascript:void(0)" data-role="tabSelect" gjalog="100000000971000100000010" eventid="0080340000000040">SUV</a>
                        </span>
        </div>

        <!--帖子列表 -->
        <div data-role="showList">
            <div class="list" style="display:block;">
                <ul class="list-bigimg clearfix">
                    <?php foreach($new_list as $key=>$value):?>
                    <li clue_id="5050337">
                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080140000000032&amp;carid=5050337@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_new_sale_post_c" title="<?=$value->title;?>" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cc/3000498729x.htm">
                                <img width="290" height="194" src="<?=$value->img_url;?>" alt="<?=$value->title;?>">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080140000000032&amp;carid=5050337@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_new_sale_post_c" title="<?=$value->title;?>" href="http://ershouche.phpdx.com/cc/3000498729x.htm" target="_blank" class="info-title"><?=$value->title;?></a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green"><?=$value->city;?></span>
                                <span class=""><?=$value->registration_date;?></span>
                                <em class="shuxian">|</em>行驶<?=$value->mileage;?>万公里</p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    <?=$value->present_price;?>万
                                </i>
                              </span>
                                <s><?=$value->original_price;?>万</s>
                            </p>
                        </div>
                    </li>
                    <?php endforeach;?>
                </ul>
                <div class="all-car-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0080140000000033" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_new_sale_more_c" href="http://ershouche.phpdx.com/www/buy">更多最新上架</a>
                </div>
            </div>
            <div class="list" style="display: none;">
                <ul class="list-bigimg clearfix">
                    <li clue_id="5092718">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5092718@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="雪佛兰科鲁兹 2013款 1.6 手动 SE" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sh/3000498454x.htm">
                                <img width="290" height="194" src="/img/7b2a14d7a67dcc546e31f3df13d917bc.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="雪佛兰科鲁兹 2013款 1.6 手动 SE">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5092718@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="雪佛兰科鲁兹 2013款 1.6 手动 SE" href="http://ershouche.phpdx.com/sh/3000498454x.htm" target="_blank" class="info-title">雪佛兰科鲁兹 2013款 1.6 手动 SE</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">上海</span>                                <span class="">2014年1月上牌</span>                                <em class="shuxian">|</em>                                行驶1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    7.20万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>4000元</span>
                                <s>13.00万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5052322">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5052322@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="夏利 骏雅 2006款 1.0 手动" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/daqing/3000497297x.htm">
                                <img width="290" height="194" src="/img/db0c46e9131882113fee5b7a9a198d1b.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="夏利 骏雅 2006款 1.0 手动">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5052322@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="夏利 骏雅 2006款 1.0 手动" href="http://ershouche.phpdx.com/daqing/3000497297x.htm" target="_blank" class="info-title">夏利 骏雅 2006款 1.0 手动</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">大庆</span>                                <span class="">2010年10月上牌</span>                                <em class="shuxian">|</em>                                行驶11万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    0.86万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>77400元</span>
                                <s>3.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5000850">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5000850@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="斯巴鲁傲虎 2010款 2.5i 无级 豪华版(进口)" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cq/3000497265x.htm">
                                <img width="290" height="194" src="/img/3d12837bb699423928a1e9ece8e7c4a0.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="斯巴鲁傲虎 2010款 2.5i 无级 豪华版(进口)">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5000850@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="斯巴鲁傲虎 2010款 2.5i 无级 豪华版(进口)" href="http://ershouche.phpdx.com/cq/3000497265x.htm" target="_blank" class="info-title">斯巴鲁傲虎 2010款 2.5i 无级 豪华版(进口)</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">重庆</span>                                <span class="">2010年4月上牌</span>                                <em class="shuxian">|</em>                                行驶12.4万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    15.00万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>50000元</span>
                                <s>32.50万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5041635">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5041635@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="丰田威驰 2014款 威驰 1.5 手动 智臻版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/mudanjiang/3000496667x.htm">
                                <img width="290" height="194" src="/img/cc8ffd5268ec56959aaee6d843834b5d.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="丰田威驰 2014款 威驰 1.5 手动 智臻版">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5041635@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="丰田威驰 2014款 威驰 1.5 手动 智臻版" href="http://ershouche.phpdx.com/mudanjiang/3000496667x.htm" target="_blank" class="info-title">丰田威驰 2014款 威驰 1.5 手动 智臻版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">牡丹江</span>                                <span class="">2015年8月上牌</span>                                <em class="shuxian">|</em>                                行驶1.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    6.80万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>2800元</span>
                                <s>8.70万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4975175">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=4975175@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="比亚迪F6 2010款 2.0 手动 黄金版 尊贵型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/mudanjiang/3000496627x.htm">
                                <img width="290" height="194" src="/img/881771195eec136b975f68e9d9075c97.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="比亚迪F6 2010款 2.0 手动 黄金版 尊贵型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=4975175@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="比亚迪F6 2010款 2.0 手动 黄金版 尊贵型" href="http://ershouche.phpdx.com/mudanjiang/3000496627x.htm" target="_blank" class="info-title">比亚迪F6 2010款 2.0 手动 黄金版 尊贵型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">牡丹江</span>                                <span class="">2010年4月上牌</span>                                <em class="shuxian">|</em>                                行驶10.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.10万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>2800元</span>
                                <s>11.90万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5074125">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5074125@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="福特福克斯 2011款 福克斯-两厢 1.8 自动 时尚型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/baoding/3000496565x.htm">
                                <img width="290" height="194" src="/img/b2703e36a2d4e0cb44b85d4726395383.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="福特福克斯 2011款 福克斯-两厢 1.8 自动 时尚型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5074125@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="福特福克斯 2011款 福克斯-两厢 1.8 自动 时尚型" href="http://ershouche.phpdx.com/baoding/3000496565x.htm" target="_blank" class="info-title">福特福克斯 2011款 福克斯-两厢 1.8 自动 时尚型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">保定</span>                                <span class="">2011年4月上牌</span>                                <em class="shuxian">|</em>                                行驶8万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    5.60万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>1000元</span>
                                <s>13.90万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5067290">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5067290@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="宝马3系 2012款 320i 2.0 自动 时尚型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/jian/3000496462x.htm">
                                <img width="290" height="194" src="/img/e62dfd11d272d7384225e33b52168669.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="宝马3系 2012款 320i 2.0 自动 时尚型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5067290@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="宝马3系 2012款 320i 2.0 自动 时尚型" href="http://ershouche.phpdx.com/jian/3000496462x.htm" target="_blank" class="info-title">宝马3系 2012款 320i 2.0 自动 时尚型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">吉安</span>                                <span class="">2012年3月上牌</span>                                <em class="shuxian">|</em>                                行驶4.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    15.90万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>3000元</span>
                                <s>38.10万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5030022">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5030022@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="观致3 都市SUV 2015款 1.6T 双离合 型动派" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cq/3000496430x.htm">
                                <img width="290" height="194" src="/img/b5dd78093ad0b5bbd2e374b7ec00638c.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="观致3 都市SUV 2015款 1.6T 双离合 型动派">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5030022@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="观致3 都市SUV 2015款 1.6T 双离合 型动派" href="http://ershouche.phpdx.com/cq/3000496430x.htm" target="_blank" class="info-title">观致3 都市SUV 2015款 1.6T 双离合 型动派</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">重庆</span>                                <span class="">2015年7月上牌</span>                                <em class="shuxian">|</em>                                行驶2.5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    10.58万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>3200元</span>
                                <s>17.40万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5082096">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5082096@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="福特翼搏 2013款 翼搏 1.5 手动 尊贵型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/gy/3000496075x.htm">
                                <img width="290" height="194" src="/img/6d854fe03f0e20e75bce4fb5bff50c39.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="福特翼搏 2013款 翼搏 1.5 手动 尊贵型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5082096@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="福特翼搏 2013款 翼搏 1.5 手动 尊贵型" href="http://ershouche.phpdx.com/gy/3000496075x.htm" target="_blank" class="info-title">福特翼搏 2013款 翼搏 1.5 手动 尊贵型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">贵阳</span>                                <span class="">2013年5月上牌</span>                                <em class="shuxian">|</em>                                行驶6.2万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    6.88万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>3000元</span>
                                <s>12.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5071844">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5071844@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="奥迪A6L 2012款 A6L 2.0TFSI 无级 标准型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/hz/3000495871x.htm">
                                <img width="290" height="194" src="/img/4759e8e03ff1dad1217b309283d5a404.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奥迪A6L 2012款 A6L 2.0TFSI 无级 标准型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5071844@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="奥迪A6L 2012款 A6L 2.0TFSI 无级 标准型" href="http://ershouche.phpdx.com/hz/3000495871x.htm" target="_blank" class="info-title">奥迪A6L 2012款 A6L 2.0TFSI 无级 标准型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">杭州</span>                                <span class="">2013年12月上牌</span>                                <em class="shuxian">|</em>                                行驶7.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    27.50万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>5000元</span>
                                <s>44.50万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5051704">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5051704@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="中华H330 2013款 1.5 手动 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/zz/3000495859x.htm">
                                <img width="290" height="194" src="/img/1450658a55953a38c9fc705c70195494.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="中华H330 2013款 1.5 手动 豪华型">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <span class="remote">新乡过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5051704@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="中华H330 2013款 1.5 手动 豪华型" href="http://ershouche.phpdx.com/zz/3000495859x.htm" target="_blank" class="info-title">中华H330 2013款 1.5 手动 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">郑州</span>                                <span class="">2014年4月上牌</span>                                <em class="shuxian">|</em>                                行驶3.5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.99万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>100元</span>
                                <s>7.80万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5058770">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5058770@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="丰田卡罗拉 2014款 卡罗拉 1.6 无级 GL" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/zz/3000495791x.htm">
                                <img width="290" height="194" src="/img/eb66fd2f98e8efb3263602d7db669bc9.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="丰田卡罗拉 2014款 卡罗拉 1.6 无级 GL">
                                <i class="sup-yellow">
                                    降价<br>急售                                        </i>
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080150000000156&amp;carid=5058770@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_post_c" title="丰田卡罗拉 2014款 卡罗拉 1.6 无级 GL" href="http://ershouche.phpdx.com/zz/3000495791x.htm" target="_blank" class="info-title">丰田卡罗拉 2014款 卡罗拉 1.6 无级 GL</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">郑州</span>                                <span class="">2015年2月上牌</span>                                <em class="shuxian">|</em>                                行驶2.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    9.42万
                                </i>
                              </span>
                                <span class="ctag-org"><i>已降价</i>800元</span>
                                <s>12.80万</s>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="all-car-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0080150000000035" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_jishou_more_c" href="http://ershouche.phpdx.com/www/buy/a3/">更多降价急售</a>
                </div>
            </div>
            <div class="list" style="
    display:none;        ">
                <ul class="list-bigimg clearfix">
                    <li clue_id="5058562">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5058562@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="江淮和悦 2014款 1.5 手动 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/hf/3000498726x.htm">
                                <img width="290" height="194" src="/img/e222512df84dc5a3e4993c90853a65c1.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="江淮和悦 2014款 1.5 手动 豪华型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5058562@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="江淮和悦 2014款 1.5 手动 豪华型" href="http://ershouche.phpdx.com/hf/3000498726x.htm" target="_blank" class="info-title">江淮和悦 2014款 1.5 手动 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">合肥</span>                                <span class="">2015年5月上牌</span>                                <em class="shuxian">|</em>                                行驶0.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    4.88万
                                </i>
                              </span>
                                <s>7.90万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5081200">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5081200@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="大众凌渡 2015款 凌渡 1.4TSI 双离合 280TSI 豪华版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sh/3000498715x.htm">
                                <img width="290" height="194" src="/img/ca99f0c7ac43856e835ca581bf805d95.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="大众凌渡 2015款 凌渡 1.4TSI 双离合 280TSI 豪华版">
                            </a>
                            <span class="remote">芜湖过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5081200@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="大众凌渡 2015款 凌渡 1.4TSI 双离合 280TSI 豪华版" href="http://ershouche.phpdx.com/sh/3000498715x.htm" target="_blank" class="info-title">大众凌渡 2015款 凌渡 1.4TSI 双离合 280TSI 豪华版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">上海</span>                                <span class="">2016年8月上牌</span>                                <em class="shuxian">|</em>                                行驶0.3万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    16.60万
                                </i>
                              </span>
                                <s>21.70万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5095918">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5095918@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="哈弗H8 2016款 2.0T 自动 四驱精英型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/jining/3000498688x.htm">
                                <img width="290" height="194" src="/img/3507b827013b57613311f8dbfa9cf876.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="哈弗H8 2016款 2.0T 自动 四驱精英型">
                            </a>
                            <span class="remote">保定过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5095918@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="哈弗H8 2016款 2.0T 自动 四驱精英型" href="http://ershouche.phpdx.com/jining/3000498688x.htm" target="_blank" class="info-title">哈弗H8 2016款 2.0T 自动 四驱精英型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">济宁</span>                                <span class="">2016年6月上牌</span>                                <em class="shuxian">|</em>                                行驶1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    17.80万
                                </i>
                              </span>
                                <s>24.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4968321">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=4968321@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/huizhou/3000498680x.htm">
                                <img width="290" height="194" src="/img/b7ec04956fe3bd0bba9d96292db9ca48.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=4968321@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型" href="http://ershouche.phpdx.com/huizhou/3000498680x.htm" target="_blank" class="info-title">奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">惠州</span>                                <span class="">2016年8月上牌</span>                                <em class="shuxian">|</em>                                行驶0.2万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    24.90万
                                </i>
                              </span>
                                <s>29.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5071560">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5071560@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="纳智捷优6 SUV 2015款 1.8T 自动 时尚升级型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/gz/3000498654x.htm">
                                <img width="290" height="194" src="/img/e8ffb24c02451fb7f8a29d6e0d7882d7.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="纳智捷优6 SUV 2015款 1.8T 自动 时尚升级型">
                            </a>
                            <span class="remote">佛山过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5071560@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="纳智捷优6 SUV 2015款 1.8T 自动 时尚升级型" href="http://ershouche.phpdx.com/gz/3000498654x.htm" target="_blank" class="info-title">纳智捷优6 SUV 2015款 1.8T 自动 时尚升级型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">广州</span>                                <span class="">2015年12月上牌</span>                                <em class="shuxian">|</em>                                行驶1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    13.00万
                                </i>
                              </span>
                                <s>16.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5098348">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5098348@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="日产蓝鸟 2016款 1.6 无级 炫酷版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/su/3000498643x.htm">
                                <img width="290" height="194" src="/img/a8424dcb33d8492cffe86685b90c608f.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="日产蓝鸟 2016款 1.6 无级 炫酷版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5098348@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="日产蓝鸟 2016款 1.6 无级 炫酷版" href="http://ershouche.phpdx.com/su/3000498643x.htm" target="_blank" class="info-title">日产蓝鸟 2016款 1.6 无级 炫酷版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">苏州</span>                                <span class="">2016年7月上牌</span>                                <em class="shuxian">|</em>                                行驶0.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    11.60万
                                </i>
                              </span>
                                <s>13.40万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4726628">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=4726628@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="奔腾B50 2013款 1.6 手动 舒适型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/dl/3000498642x.htm">
                                <img width="290" height="194" src="/img/9bc563c51d19049d17b1daf195ffc7c9.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奔腾B50 2013款 1.6 手动 舒适型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=4726628@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="奔腾B50 2013款 1.6 手动 舒适型" href="http://ershouche.phpdx.com/dl/3000498642x.htm" target="_blank" class="info-title">奔腾B50 2013款 1.6 手动 舒适型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">大连</span>                                <span class="">2015年3月上牌</span>                                <em class="shuxian">|</em>                                行驶0.8万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    6.60万
                                </i>
                              </span>
                                <s>10.10万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5014630">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5014630@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="标致408 2015款 1.2THP 自动 豪华版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cq/3000498638x.htm">
                                <img width="290" height="194" src="/img/03e8fd7b4883aa1cee95ee471ac31831.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="标致408 2015款 1.2THP 自动 豪华版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5014630@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="标致408 2015款 1.2THP 自动 豪华版" href="http://ershouche.phpdx.com/cq/3000498638x.htm" target="_blank" class="info-title">标致408 2015款 1.2THP 自动 豪华版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">重庆</span>                                <span class="">2016年1月上牌</span>                                <em class="shuxian">|</em>                                行驶0.8万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    11.20万
                                </i>
                              </span>
                                <s>16.50万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5088538">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5088538@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="比亚迪速锐 2015款 1.5 手动 豪华型(改款)" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/xa/3000498618x.htm">
                                <img width="290" height="194" src="/img/2ed49590d51f60a723c597231a170df5.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="比亚迪速锐 2015款 1.5 手动 豪华型(改款)">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5088538@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="比亚迪速锐 2015款 1.5 手动 豪华型(改款)" href="http://ershouche.phpdx.com/xa/3000498618x.htm" target="_blank" class="info-title">比亚迪速锐 2015款 1.5 手动 豪华型(改款)</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">西安</span>                                <span class="">2016年6月上牌</span>                                <em class="shuxian">|</em>                                行驶0.9万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    6.20万
                                </i>
                              </span>
                                <s>8.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5096745">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5096745@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="大众捷达 2015款 捷达 1.4 手动 时尚型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sy/3000498608x.htm">
                                <img width="290" height="194" src="/img/57edb3bbcf00dac4663a951961074c98.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="大众捷达 2015款 捷达 1.4 手动 时尚型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5096745@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="大众捷达 2015款 捷达 1.4 手动 时尚型" href="http://ershouche.phpdx.com/sy/3000498608x.htm" target="_blank" class="info-title">大众捷达 2015款 捷达 1.4 手动 时尚型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">沈阳</span>                                <span class="">2016年7月上牌</span>                                <em class="shuxian">|</em>                                行驶0.3万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    6.60万
                                </i>
                              </span>
                                <s>9.00万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5098660">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5098660@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="江淮瑞风S3 2016款 瑞风S3 1.5 无级 豪华智能尊享版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cc/3000498600x.htm">
                                <img width="290" height="194" src="/img/ed860b17f8d3c99c6608f95fc0318827.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="江淮瑞风S3 2016款 瑞风S3 1.5 无级 豪华智能尊享版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5098660@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="江淮瑞风S3 2016款 瑞风S3 1.5 无级 豪华智能尊享版" href="http://ershouche.phpdx.com/cc/3000498600x.htm" target="_blank" class="info-title">江淮瑞风S3 2016款 瑞风S3 1.5 无级 豪华智能尊享版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">长春</span>                                <span class="">2016年5月上牌</span>                                <em class="shuxian">|</em>                                行驶0.9万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    7.38万
                                </i>
                              </span>
                                <s>9.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5095408">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5095408@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="日产天籁 2016款 2.0 无级 XL 舒适版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/wh/3000498593x.htm">
                                <img width="290" height="194" src="/img/ad5c2c5d3a539d322a345f658558a893.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="日产天籁 2016款 2.0 无级 XL 舒适版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080320000000036&amp;carid=5095408@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_post_c" title="日产天籁 2016款 2.0 无级 XL 舒适版" href="http://ershouche.phpdx.com/wh/3000498593x.htm" target="_blank" class="info-title">日产天籁 2016款 2.0 无级 XL 舒适版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">武汉</span>                                <span class="">2016年9月上牌</span>                                                                行驶0万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    15.90万
                                </i>
                              </span>
                                <s>20.30万</s>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="all-car-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0080320000000037" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_zhunxin_more_c" href="http://ershouche.phpdx.com/www/buy/c4/">更多准新车</a>
                </div>
            </div>
            <div class="list" style="
    display:none;        ">
                <ul class="list-bigimg clearfix">
                    <li clue_id="5058562">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5058562@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="江淮和悦 2014款 1.5 手动 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/hf/3000498726x.htm">
                                <img width="290" height="194" src="/img/e222512df84dc5a3e4993c90853a65c1.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="江淮和悦 2014款 1.5 手动 豪华型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5058562@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="江淮和悦 2014款 1.5 手动 豪华型" href="http://ershouche.phpdx.com/hf/3000498726x.htm" target="_blank" class="info-title">江淮和悦 2014款 1.5 手动 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">合肥</span>                                <span class="">2015年5月上牌</span>                                <em class="shuxian">|</em>                                行驶0.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    4.88万
                                </i>
                              </span>
                                <s>7.90万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5010652">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5010652@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="本田飞度 2008款 飞度 1.3 自动 舒适版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/xuchang/3000498718x.htm">
                                <img width="290" height="194" src="/img/f26421558ca08cad64dfc6f33ed7d17d.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="本田飞度 2008款 飞度 1.3 自动 舒适版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5010652@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="本田飞度 2008款 飞度 1.3 自动 舒适版" href="http://ershouche.phpdx.com/xuchang/3000498718x.htm" target="_blank" class="info-title">本田飞度 2008款 飞度 1.3 自动 舒适版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">许昌</span>                                <span class="">2009年7月上牌</span>                                <em class="shuxian">|</em>                                行驶6.8万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    4.20万
                                </i>
                              </span>
                                <s>10.50万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5066495">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5066495@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="奇瑞旗云3 2010款 旗云3 1.5 手动 舒适版 惠民补贴" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/ty/3000498711x.htm">
                                <img width="290" height="194" src="/img/21aefd4862600c707fb3b8bee977256b.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奇瑞旗云3 2010款 旗云3 1.5 手动 舒适版 惠民补贴">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5066495@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="奇瑞旗云3 2010款 旗云3 1.5 手动 舒适版 惠民补贴" href="http://ershouche.phpdx.com/ty/3000498711x.htm" target="_blank" class="info-title">奇瑞旗云3 2010款 旗云3 1.5 手动 舒适版 惠民补贴</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">太原</span>                                <span class="">2010年12月上牌</span>                                <em class="shuxian">|</em>                                行驶5.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.10万
                                </i>
                              </span>
                                <s>6.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5083627">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5083627@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="吉利远景 2012款 1.5 手动 DVVT 舒适型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/nn/3000498705x.htm">
                                <img width="290" height="194" src="/img/a7d68163b89757b3bd63453e9588312b.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="吉利远景 2012款 1.5 手动 DVVT 舒适型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5083627@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="吉利远景 2012款 1.5 手动 DVVT 舒适型" href="http://ershouche.phpdx.com/nn/3000498705x.htm" target="_blank" class="info-title">吉利远景 2012款 1.5 手动 DVVT 舒适型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">南宁</span>                                <span class="">2012年2月上牌</span>                                <em class="shuxian">|</em>                                行驶4.4万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.98万
                                </i>
                              </span>
                                <s>6.80万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5084863">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5084863@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="东风风行景逸XL 2011款 1.5 序列变速 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sh/3000498703x.htm">
                                <img width="290" height="194" src="/img/ca5b1731b16743de82cc6d84c96bcb80.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="东风风行景逸XL 2011款 1.5 序列变速 豪华型">
                            </a>
                            <span class="remote">赣州过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5084863@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="东风风行景逸XL 2011款 1.5 序列变速 豪华型" href="http://ershouche.phpdx.com/sh/3000498703x.htm" target="_blank" class="info-title">东风风行景逸XL 2011款 1.5 序列变速 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">上海</span>                                <span class="">2011年7月上牌</span>                                <em class="shuxian">|</em>                                行驶5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.80万
                                </i>
                              </span>
                                <s>8.00万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5078118">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5078118@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="一汽威志V2 2009款 1.3 自动 旗舰型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/bj/3000498699x.htm">
                                <img width="290" height="194" src="/img/318614ed5a63e837d6ed0d4e3ca5e17f.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="一汽威志V2 2009款 1.3 自动 旗舰型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5078118@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="一汽威志V2 2009款 1.3 自动 旗舰型" href="http://ershouche.phpdx.com/bj/3000498699x.htm" target="_blank" class="info-title">一汽威志V2 2009款 1.3 自动 旗舰型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">北京</span>                                <span class="">2010年12月上牌</span>                                <em class="shuxian">|</em>                                行驶4.1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.10万
                                </i>
                              </span>
                                <s>6.10万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5043632">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5043632@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="奇瑞旗云3 2010款 1.5 手动 精英版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/wei/3000498697x.htm">
                                <img width="290" height="194" src="/img/432e191cf93dd4abe739002ec41ef38f.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奇瑞旗云3 2010款 1.5 手动 精英版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5043632@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="奇瑞旗云3 2010款 1.5 手动 精英版" href="http://ershouche.phpdx.com/wei/3000498697x.htm" target="_blank" class="info-title">奇瑞旗云3 2010款 1.5 手动 精英版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">威海</span>                                <span class="">2010年12月上牌</span>                                <em class="shuxian">|</em>                                行驶2.5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.25万
                                </i>
                              </span>
                                <s>6.70万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4981443">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=4981443@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="吉利自由舰 2012款 1.3 手动 时尚型III" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/heze/3000498692x.htm">
                                <img width="290" height="194" src="/img/ac624c6de66109db5c0c0c3b4bc08a29.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="吉利自由舰 2012款 1.3 手动 时尚型III">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=4981443@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="吉利自由舰 2012款 1.3 手动 时尚型III" href="http://ershouche.phpdx.com/heze/3000498692x.htm" target="_blank" class="info-title">吉利自由舰 2012款 1.3 手动 时尚型III</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">菏泽</span>                                <span class="">2013年12月上牌</span>                                <em class="shuxian">|</em>                                行驶5.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.26万
                                </i>
                              </span>
                                <s>4.70万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5098829">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5098829@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="宝骏乐驰 2012款 1.2 手动 运动版时尚型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/bj/3000498690x.htm">
                                <img width="290" height="194" src="/img/36990d7a44a8b40a7b220fe2477c05ec.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="宝骏乐驰 2012款 1.2 手动 运动版时尚型">
                            </a>
                            <span class="remote">廊坊过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5098829@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="宝骏乐驰 2012款 1.2 手动 运动版时尚型" href="http://ershouche.phpdx.com/bj/3000498690x.htm" target="_blank" class="info-title">宝骏乐驰 2012款 1.2 手动 运动版时尚型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">北京</span>                                <span class="">2014年5月上牌</span>                                <em class="shuxian">|</em>                                行驶3.5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.00万
                                </i>
                              </span>
                                <s>5.40万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5057527">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5057527@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="福特福克斯 2009款 福克斯-两厢 1.8 自动 时尚型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sh/3000498686x.htm">
                                <img width="290" height="194" src="/img/e62d0448f45072203295910af7221816.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="福特福克斯 2009款 福克斯-两厢 1.8 自动 时尚型">
                            </a>
                            <span class="remote">烟台过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5057527@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="福特福克斯 2009款 福克斯-两厢 1.8 自动 时尚型" href="http://ershouche.phpdx.com/sh/3000498686x.htm" target="_blank" class="info-title">福特福克斯 2009款 福克斯-两厢 1.8 自动 时尚型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">上海</span>                                <span class="">2008年10月上牌</span>                                <em class="shuxian">|</em>                                行驶7.2万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.60万
                                </i>
                              </span>
                                <s>14.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5098838">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5098838@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="五菱之光 2010款 1.0 手动 6376N 基本型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/yantai/3000498683x.htm">
                                <img width="290" height="194" src="/img/fe9db38d1a4f1c9435c18bdd6746b517.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="五菱之光 2010款 1.0 手动 6376N 基本型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=5098838@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="五菱之光 2010款 1.0 手动 6376N 基本型" href="http://ershouche.phpdx.com/yantai/3000498683x.htm" target="_blank" class="info-title">五菱之光 2010款 1.0 手动 6376N 基本型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">烟台</span>                                <span class="">2010年12月上牌</span>                                <em class="shuxian">|</em>                                行驶9.3万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    1.40万
                                </i>
                              </span>
                                <s>4.20万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4950327">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=4950327@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="瑞麒X1 2011款 1.3 手动 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/tj/3000498682x.htm">
                                <img width="290" height="194" src="/img/81d5b9225914ff2d8518ad39fca10a47.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="瑞麒X1 2011款 1.3 手动 豪华型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080330000000038&amp;carid=4950327@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_post_c" title="瑞麒X1 2011款 1.3 手动 豪华型" href="http://ershouche.phpdx.com/tj/3000498682x.htm" target="_blank" class="info-title">瑞麒X1 2011款 1.3 手动 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">天津</span>                                <span class="">2012年5月上牌</span>                                <em class="shuxian">|</em>                                行驶4.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.30万
                                </i>
                              </span>
                                <s>6.30万</s>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="all-car-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0080330000000039" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_lianshou_more_c" href="http://ershouche.phpdx.com/www/buy/p3/">更多练手车</a>
                </div>
            </div>
            <div class="list" style="
    display:none;        ">
                <ul class="list-bigimg clearfix">
                    <li clue_id="5096171">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5096171@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="传祺GS5 2014款 2.0 自动 两驱超享版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/wh/3000498756x.htm">
                                <img width="290" height="194" src="/img/3450869b9e9dd8c820fcd786171f044f.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="传祺GS5 2014款 2.0 自动 两驱超享版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5096171@0" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="传祺GS5 2014款 2.0 自动 两驱超享版" href="http://ershouche.phpdx.com/wh/3000498756x.htm" target="_blank" class="info-title">传祺GS5 2014款 2.0 自动 两驱超享版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">武汉</span>                                <span class="">2014年10月上牌</span>                                <em class="shuxian">|</em>                                行驶5.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    8.95万
                                </i>
                              </span>
                                <s>14.80万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5074380">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5074380@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="中兴C3 2014款 1.5 手动 启航版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/xa/3000498754x.htm">
                                <img width="290" height="194" src="/img/8bcbefc1d83adb5fa00987f3768dd9f1.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="中兴C3 2014款 1.5 手动 启航版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5074380@1" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="中兴C3 2014款 1.5 手动 启航版" href="http://ershouche.phpdx.com/xa/3000498754x.htm" target="_blank" class="info-title">中兴C3 2014款 1.5 手动 启航版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">西安</span>                                <span class="">2014年6月上牌</span>                                <em class="shuxian">|</em>                                行驶4.3万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    3.60万
                                </i>
                              </span>
                                <s>6.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5078648">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5078648@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H5 2011款 2.0T 自动 绿静两驱舒适版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cc/3000498748x.htm">
                                <img width="290" height="194" src="/img/dd38f5ff9e7cc13459ace8ae2f2b9a7c.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="哈弗H5 2011款 2.0T 自动 绿静两驱舒适版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5078648@2" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H5 2011款 2.0T 自动 绿静两驱舒适版" href="http://ershouche.phpdx.com/cc/3000498748x.htm" target="_blank" class="info-title">哈弗H5 2011款 2.0T 自动 绿静两驱舒适版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">长春</span>                                <span class="">2011年4月上牌</span>                                <em class="shuxian">|</em>                                行驶3.8万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    4.98万
                                </i>
                              </span>
                                <s>13.70万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5023395">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5023395@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="日产逍客 2012款 逍客 2.0 无级 XV 雷 两驱" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cd/3000498733x.htm">
                                <img width="290" height="194" src="/img/b4d6e3dc62fda5cde98320403214226d.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="日产逍客 2012款 逍客 2.0 无级 XV 雷 两驱">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5023395@3" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="日产逍客 2012款 逍客 2.0 无级 XV 雷 两驱" href="http://ershouche.phpdx.com/cd/3000498733x.htm" target="_blank" class="info-title">日产逍客 2012款 逍客 2.0 无级 XV 雷 两驱</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">成都</span>                                <span class="">2014年6月上牌</span>                                <em class="shuxian">|</em>                                行驶6.5万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    10.80万
                                </i>
                              </span>
                                <s>19.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5098751">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5098751@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H6 2013款 1.5T 手动 两驱升级版精英型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cangzhou/3000498698x.htm">
                                <img width="290" height="194" src="/img/2c9c65b820520e648af1efff43e186a9.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="哈弗H6 2013款 1.5T 手动 两驱升级版精英型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5098751@4" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H6 2013款 1.5T 手动 两驱升级版精英型" href="http://ershouche.phpdx.com/cangzhou/3000498698x.htm" target="_blank" class="info-title">哈弗H6 2013款 1.5T 手动 两驱升级版精英型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">沧州</span>                                <span class="">2013年7月上牌</span>                                <em class="shuxian">|</em>                                行驶4.1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    8.50万
                                </i>
                              </span>
                                <s>12.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5095918">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5095918@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H8 2016款 2.0T 自动 四驱精英型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/jining/3000498688x.htm">
                                <img width="290" height="194" src="/img/3507b827013b57613311f8dbfa9cf876.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="哈弗H8 2016款 2.0T 自动 四驱精英型">
                            </a>
                            <span class="remote">保定过户</span>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5095918@5" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H8 2016款 2.0T 自动 四驱精英型" href="http://ershouche.phpdx.com/jining/3000498688x.htm" target="_blank" class="info-title">哈弗H8 2016款 2.0T 自动 四驱精英型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">济宁</span>                                <span class="">2016年6月上牌</span>                                <em class="shuxian">|</em>                                行驶1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    17.80万
                                </i>
                              </span>
                                <s>24.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4950327">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=4950327@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="瑞麒X1 2011款 1.3 手动 豪华型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/tj/3000498682x.htm">
                                <img width="290" height="194" src="/img/81d5b9225914ff2d8518ad39fca10a47.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="瑞麒X1 2011款 1.3 手动 豪华型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=4950327@6" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="瑞麒X1 2011款 1.3 手动 豪华型" href="http://ershouche.phpdx.com/tj/3000498682x.htm" target="_blank" class="info-title">瑞麒X1 2011款 1.3 手动 豪华型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">天津</span>                                <span class="">2012年5月上牌</span>                                <em class="shuxian">|</em>                                行驶4.7万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    2.30万
                                </i>
                              </span>
                                <s>6.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="4968321">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=4968321@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/huizhou/3000498680x.htm">
                                <img width="290" height="194" src="/img/b7ec04956fe3bd0bba9d96292db9ca48.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=4968321@7" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型" href="http://ershouche.phpdx.com/huizhou/3000498680x.htm" target="_blank" class="info-title">奔驰GLA级 2015款 GLA 200 1.6T 双离合 动感型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">惠州</span>                                <span class="">2016年8月上牌</span>                                <em class="shuxian">|</em>                                行驶0.2万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    24.90万
                                </i>
                              </span>
                                <s>29.30万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5060184">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5060184@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="本田XR-V 2015款 1.5 手动 LXi 经典版" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/cc/3000498679x.htm">
                                <img width="290" height="194" src="/img/a4fb5f453ace686c9d940e4bfad0b5e3.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="本田XR-V 2015款 1.5 手动 LXi 经典版">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5060184@8" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="本田XR-V 2015款 1.5 手动 LXi 经典版" href="http://ershouche.phpdx.com/cc/3000498679x.htm" target="_blank" class="info-title">本田XR-V 2015款 1.5 手动 LXi 经典版</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">长春</span>                                <span class="">2015年12月上牌</span>                                <em class="shuxian">|</em>                                行驶1.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    11.30万
                                </i>
                              </span>
                                <s>13.90万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5081427">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5081427@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="日产逍客 2012款 逍客 1.6 手动 XE 风 两驱" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/sh/3000498678x.htm">
                                <img width="290" height="194" src="/img/b53c9248f5ff8f38b6c28f6f22deeb44.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="日产逍客 2012款 逍客 1.6 手动 XE 风 两驱">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5081427@9" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="日产逍客 2012款 逍客 1.6 手动 XE 风 两驱" href="http://ershouche.phpdx.com/sh/3000498678x.htm" target="_blank" class="info-title">日产逍客 2012款 逍客 1.6 手动 XE 风 两驱</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">上海</span>                                <span class="">2013年2月上牌</span>                                <em class="shuxian">|</em>                                行驶3.4万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    7.20万
                                </i>
                              </span>
                                <s>15.20万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5058774">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5058774@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H6 2013款 1.5T 手动 两驱升级版精英型" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/bj/3000498656x.htm">
                                <img width="290" height="194" src="/img/643a89e99ea519bf218ccab689f99ab0.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="哈弗H6 2013款 1.5T 手动 两驱升级版精英型">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5058774@10" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="哈弗H6 2013款 1.5T 手动 两驱升级版精英型" href="http://ershouche.phpdx.com/bj/3000498656x.htm" target="_blank" class="info-title">哈弗H6 2013款 1.5T 手动 两驱升级版精英型</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">北京</span>                                <span class="">2013年10月上牌</span>                                <em class="shuxian">|</em>                                行驶5.1万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    7.60万
                                </i>
                              </span>
                                <s>12.60万</s>
                            </p>
                        </div>
                    </li>
                    <li clue_id="5092490">

                        <div class="list-infoBox">
                            <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5092490@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="观致3 都市SUV 2015款 1.6T 双离合 炫动派" target="_blank" class="imgtype" href="http://ershouche.phpdx.com/xa/3000498655x.htm">
                                <img width="290" height="194" src="/img/5f1ff779ba0454d196c0c332c39b4c0d.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88" alt="观致3 都市SUV 2015款 1.6T 双离合 炫动派">
                            </a>
                            <p class="infoBox">
                                <a data-gzlog="tracking_type=click&amp;eventid=0080340000000040&amp;carid=5092490@11" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_post_c" title="观致3 都市SUV 2015款 1.6T 双离合 炫动派" href="http://ershouche.phpdx.com/xa/3000498655x.htm" target="_blank" class="info-title">观致3 都市SUV 2015款 1.6T 双离合 炫动派</a>
                            </p>
                            <p class="fc-gray">
                                <span class="ctag-green">西安</span>                                <span class="">2015年9月上牌</span>                                <em class="shuxian">|</em>                                行驶1.6万公里                            </p>
                            <p class="priType-s">
                              <span>
                                <i class="fc-org priType">
                                    14.98万
                                </i>
                              </span>
                                <s>19.50万</s>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="all-car-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0080340000000041" baidu_alog="pc_index_tabSelect_detailCar&amp;click&amp;pc_index_tabSelect_suv_more_c" href="http://ershouche.phpdx.com/www/buy/h2/">更多SUV</a>
                </div>
            </div>
        </div>
    </div>    <!--首页帖子列表 e -->

    <!--底部推广 s-->
    <div class="w gz-zq">
        <div class="value-tit clearfix">
            <p class="v-tit fl">瓜子精选<span>精选好车好文，给找车添点乐趣</span></p>
        </div>
        <div class="zq-crm clearfix">
            <div class="zq-area fl" data-widget="app/ms_v2/vehicle/c2c/right_c2c_slideshow.js">
                <ul class="zhuantui-ul" data-role="slide_container" style="margin-left: 0px;">










                    <li baidu_alog="pc_index_buttom_banner&amp;click&amp;index_yunying_bottom_tianlai">
                        <a rel="nofollow" data-gzlog="tracking_type=click&amp;eventid=0150160000000042&amp;url=tianlai" href="http://ershouche.phpdx.com/zq_tianlai/?domain=www" target="_blank">
                            <img src="/img/zq_tianlai.jpg" alt="tianlai">
                        </a>
                    </li><li baidu_alog="banner&amp;&amp;click&amp;&amp;index_yunying_bottom_banner_4">
                        <a rel="nofollow" data-gzlog="tracking_type=click&amp;eventid=0150160000000042&amp;url=Hyundai" href="http://ershouche.phpdx.com/zq_Hyundai/?domain=www" target="_blank">
                            <img src="/img/zq_hyundai_1.jpg" alt="Hyundai">
                        </a>
                    </li><li baidu_alog="banner&amp;&amp;click&amp;&amp;index_yunying_bottom_banner_5">
                        <a rel="nofollow" data-gzlog="tracking_type=click&amp;eventid=0150160000000042&amp;url=loan" href="http://ershouche.phpdx.com/zq_loan/?domain=www" target="_blank">
                            <img src="/img/zq_loan.jpg" alt="loan">
                        </a>
                    </li><li baidu_alog="banner&amp;&amp;click&amp;&amp;index_yunying_bottom_banner_2">
                        <a rel="nofollow" data-gzlog="tracking_type=click&amp;eventid=0150160000000042&amp;url=audi" href="http://ershouche.phpdx.com/zq_audi/?domain=www" target="_blank">
                            <img src="/img/zq_audi.jpg" alt="audi">
                        </a>
                    </li>
                </ul>
                <a href="javascript:void(0);" class="slider-prev" data-role="prev_btn" baidu_alog="slider&amp;&amp;click&amp;&amp;index_yunying_bottom_banner_lsilder">&lt;</a>
                <a href="javascript:void(0);" class="slider-next" data-role="next_btn" baidu_alog="slider&amp;&amp;click&amp;&amp;index_yunying_bottom_banner_rsilder">&gt;</a>
            </div>
            <ul class="crm-area fr">
                <li>
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000043&amp;article_id=4243" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_c" href="http://ershouche.phpdx.com/zq_article/4243/">提车作业：大白的圆梦藏记忆</a>
                </li>
                <li>
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000043&amp;article_id=4251" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_c" href="http://ershouche.phpdx.com/zq_article/4251/">中秋活动中奖名单公布啦，来看看有没有你？？</a>
                </li>
                <li>
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000043&amp;article_id=4249" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_c" href="http://ershouche.phpdx.com/zq_article/4249/">这个中秋有点暖，瓜子送礼不手软！</a>
                </li>
                <li>
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000043&amp;article_id=4248" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_c" href="http://ershouche.phpdx.com/zq_article/4248/">瓜子二手车直卖网  成交量遥遥领先！</a>
                </li>
                <li>
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000043&amp;article_id=4247" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_c" href="http://ershouche.phpdx.com/zq_article/4247/">《瓜子挺懂车》 第八期 牧马人不仅仅是一辆车</a>
                </li>
                <li class="crm-link">
                    <a data-gzlog="tracking_type=click&amp;eventid=0150170000000044" target="_blank" baidu_alog="pc_index_topYunying&amp;click&amp;pc_index_bottomYunying_wenzhang_checkAll_c" href="http://ershouche.phpdx.com/zq_article/">查看全部&gt;&gt;</a>
                </li>
            </ul>
        </div>
    </div>    <!--底部推广 e -->

</div>