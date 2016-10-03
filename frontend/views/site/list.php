<?php

use yii\web\View;
use frontend\assets\AppAsset;
use yii\helpers\Url;

/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/24
 * Time: 16:06
 */


AppAsset::addScript($this, '/js/list.copy.js');

?>


<div class="crumbs">
    <a href="http://www.guazi.com/www/" rel="nofollow">首页</a>
    <em>></em>
    <span>全国个人二手车</span>
</div>

<!--买车页导流-->
<div data-gzlog="tracking_type=click&eventid=0130000000000016" class="sale-right"
     baidu_alog="pc_maicheliebiao_zhuanhua&click&pc_maicheliebiao_fuchuang_mianfeimaiche_c">
    <a href="/www/sell?clueS=03&st=231"></a>
</div>

<div class="w">
    <!--筛选-->
    <div class="comfilter-bd">
        <div class="filterBox">
            <dl class="fliter-bd clearfix">
                <dt>品牌：</dt>
                <dd class="clickBrandWidget">
                    <a class="on" href="/www/buy/" rel="nofollow">不限</a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dazhong' class=""
                       href="/www/dazhong/"
                       title="大众二手车"
                    >
                        大众 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=buick' class=""
                       href="/www/buick/"
                       title="别克二手车"
                    >
                        别克 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chevrolet' class=""
                       href="/www/chevrolet/"
                       title="雪佛兰二手车"
                    >
                        雪佛兰 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hyundai' class=""
                       href="/www/hyundai/"
                       title="现代二手车"
                    >
                        现代 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=ford' class=""
                       href="/www/ford/"
                       title="福特二手车"
                    >
                        福特 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=wuling' class=""
                       href="/www/wuling/"
                       title="五菱二手车"
                    >
                        五菱 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chery' class=""
                       href="/www/chery/"
                       title="奇瑞二手车"
                    >
                        奇瑞 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=richan' class=""
                       href="/www/richan/"
                       title="日产二手车"
                    >
                        日产 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=byd' class=""
                       href="/www/byd/"
                       title="比亚迪二手车"
                    >
                        比亚迪 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=honda' class=""
                       href="/www/honda/"
                       title="本田二手车"
                    >
                        本田 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=toyota' class=""
                       href="/www/toyota/"
                       title="丰田二手车"
                    >
                        丰田 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jili' class=""
                       href="/www/jili/"
                       title="吉利二手车"
                    >
                        吉利 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=bmw' class=""
                       href="/www/bmw/"
                       title="宝马二手车"
                    >
                        宝马 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=kia' class=""
                       href="/www/kia/"
                       title="起亚二手车"
                    >
                        起亚 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=audi' class=""
                       href="/www/audi/"
                       title="奥迪二手车"
                    >
                        奥迪 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=suzuki' class=""
                       href="/www/suzuki/"
                       title="铃木二手车"
                    >
                        铃木 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=biaozhi' class=""
                       href="/www/biaozhi/"
                       title="标致二手车"
                    >
                        标致 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=citroen' class=""
                       href="/www/citroen/"
                       title="雪铁龙二手车"
                    >
                        雪铁龙 </a>
                    <!--品牌全部-->
                    <span class="brand-all z30">
                    <em data-role="show">全部<i></i></em>
                    <div data-role="otherBrand" class="otherbrand" style="display: none;">
                        <div class="o-b-box"><span class="arrow"><s></s></span>
                            <ul data-role="letterNav" class="o-b-list">
                                                                <li class="clearfix">
                                    <span>A</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=anchi'
                                                                                       href="/www/anchi/"
                                                                                       title="安驰二手车"
                                                                                    >
                                                   安驰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=alpina'
                                                                                       href="/www/alpina/"
                                                                                       title="Alpina二手车"
                                                                                    >
                                                   Alpina                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=audi'
                                                                                       href="/www/audi/"
                                                                                       title="奥迪二手车"
                                                                                    >
                                                   奥迪                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=astonmartin'
                                                                                       href="/www/astonmartin/"
                                                                                       title="阿斯顿马丁二手车"
                                                                                    >
                                                   阿斯顿马丁                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>B</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=benz'
                                                                                       href="/www/benz/"
                                                                                       title="奔驰二手车"
                                                                                    >
                                                   奔驰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=babosi'
                                                                                       href="/www/babosi/"
                                                                                       title="巴博斯二手车"
                                                                                    >
                                                   巴博斯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=porsche'
                                                                                       href="/www/porsche/"
                                                                                       title="保时捷二手车"
                                                                                    >
                                                   保时捷                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=baojun'
                                                                                       href="/www/baojun/"
                                                                                       title="宝骏二手车"
                                                                                    >
                                                   宝骏                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=beijingqiche'
                                                                                       href="/www/beijingqiche/"
                                                                                       title="北京二手车"
                                                                                    >
                                                   北京                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=beiqi'
                                                                                       href="/www/beiqi/"
                                                                                       title="北汽二手车"
                                                                                    >
                                                   北汽                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=biaozhi'
                                                                                       href="/www/biaozhi/"
                                                                                       title="标致二手车"
                                                                                    >
                                                   标致                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=benteng'
                                                                                       href="/www/benteng/"
                                                                                       title="奔腾二手车"
                                                                                    >
                                                   奔腾                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=baolong'
                                                                                       href="/www/baolong/"
                                                                                       title="宝龙二手车"
                                                                                    >
                                                   宝龙                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=byd'
                                                                                       href="/www/byd/"
                                                                                       title="比亚迪二手车"
                                                                                    >
                                                   比亚迪                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=bentley'
                                                                                       href="/www/bentley/"
                                                                                       title="宾利二手车"
                                                                                    >
                                                   宾利                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=honda'
                                                                                       href="/www/honda/"
                                                                                       title="本田二手车"
                                                                                    >
                                                   本田                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=bmw'
                                                                                       href="/www/bmw/"
                                                                                       title="宝马二手车"
                                                                                    >
                                                   宝马                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=buick'
                                                                                       href="/www/buick/"
                                                                                       title="别克二手车"
                                                                                    >
                                                   别克                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>C</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=changanshangyong'
                                                                                       href="/www/changanshangyong/"
                                                                                       title="长安商用二手车"
                                                                                    >
                                                   长安商用                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chuanqi1'
                                                                                       href="/www/chuanqi1/"
                                                                                       title="传祺二手车"
                                                                                    >
                                                   传祺                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=changan'
                                                                                       href="/www/changan/"
                                                                                       title="长安二手车"
                                                                                    >
                                                   长安                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=changhe'
                                                                                       href="/www/changhe/"
                                                                                       title="昌河二手车"
                                                                                    >
                                                   昌河                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=changcheng'
                                                                                       href="/www/changcheng/"
                                                                                       title="长城二手车"
                                                                                    >
                                                   长城                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>D</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dazhong'
                                                                                       href="/www/dazhong/"
                                                                                       title="大众二手车"
                                                                                    >
                                                   大众                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=ds'
                                                                                       href="/www/ds/"
                                                                                       title="DS二手车"
                                                                                    >
                                                   DS                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongfengfengdu'
                                                                                       href="/www/dongfengfengdu/"
                                                                                       title="东风风度二手车"
                                                                                    >
                                                   东风风度                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=daoqi'
                                                                                       href="/www/daoqi/"
                                                                                       title="道奇二手车"
                                                                                    >
                                                   道奇                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongfengfengshen'
                                                                                       href="/www/dongfengfengshen/"
                                                                                       title="东风风神二手车"
                                                                                    >
                                                   东风风神                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongfeng'
                                                                                       href="/www/dongfeng/"
                                                                                       title="东风二手车"
                                                                                    >
                                                   东风                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=fengxing'
                                                                                       href="/www/fengxing/"
                                                                                       title="东风风行二手车"
                                                                                    >
                                                   东风风行                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=datong'
                                                                                       href="/www/datong/"
                                                                                       title="大通二手车"
                                                                                    >
                                                   大通                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongnan'
                                                                                       href="/www/dongnan/"
                                                                                       title="东南二手车"
                                                                                    >
                                                   东南                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dadi'
                                                                                       href="/www/dadi/"
                                                                                       title="大迪二手车"
                                                                                    >
                                                   大迪                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dayu'
                                                                                       href="/www/dayu/"
                                                                                       title="大宇二手车"
                                                                                    >
                                                   大宇                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongfengxiaokang'
                                                                                       href="/www/dongfengxiaokang/"
                                                                                       title="东风小康二手车"
                                                                                    >
                                                   东风小康                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jilindafa'
                                                                                       href="/www/jilindafa/"
                                                                                       title="大发二手车"
                                                                                    >
                                                   大发                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>F</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=ferrari'
                                                                                       href="/www/ferrari/"
                                                                                       title="法拉利二手车"
                                                                                    >
                                                   法拉利                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=futian'
                                                                                       href="/www/futian/"
                                                                                       title="福田二手车"
                                                                                    >
                                                   福田                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=toyota'
                                                                                       href="/www/toyota/"
                                                                                       title="丰田二手车"
                                                                                    >
                                                   丰田                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=ford'
                                                                                       href="/www/ford/"
                                                                                       title="福特二手车"
                                                                                    >
                                                   福特                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=fiat'
                                                                                       href="/www/fiat/"
                                                                                       title="菲亚特二手车"
                                                                                    >
                                                   菲亚特                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huaxiangfuqi'
                                                                                       href="/www/huaxiangfuqi/"
                                                                                       title="富奇二手车"
                                                                                    >
                                                   富奇                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=fudi'
                                                                                       href="/www/fudi/"
                                                                                       title="福迪二手车"
                                                                                    >
                                                   福迪                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>G</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=guanzhi'
                                                                                       href="/www/guanzhi/"
                                                                                       title="观致二手车"
                                                                                    >
                                                   观致                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=gmc'
                                                                                       href="/www/gmc/"
                                                                                       title="GMC二手车"
                                                                                    >
                                                   GMC                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>H</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huansu'
                                                                                       href="/www/huansu/"
                                                                                       title="幻速二手车"
                                                                                    >
                                                   幻速                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hanma'
                                                                                       href="/www/hanma/"
                                                                                       title="悍马二手车"
                                                                                    >
                                                   悍马                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hongqi'
                                                                                       href="/www/hongqi/"
                                                                                       title="红旗二手车"
                                                                                    >
                                                   红旗                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huanghai'
                                                                                       href="/www/huanghai/"
                                                                                       title="黄海二手车"
                                                                                    >
                                                   黄海                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huasong'
                                                                                       href="/www/huasong/"
                                                                                       title="华颂二手车"
                                                                                    >
                                                   华颂                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=sh-huizhong'
                                                                                       href="/www/sh-huizhong/"
                                                                                       title="汇众二手车"
                                                                                    >
                                                   汇众                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huapu'
                                                                                       href="/www/huapu/"
                                                                                       title="华普二手车"
                                                                                    >
                                                   华普                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=haige'
                                                                                       href="/www/haige/"
                                                                                       title="海格二手车"
                                                                                    >
                                                   海格                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hafei'
                                                                                       href="/www/hafei/"
                                                                                       title="哈飞二手车"
                                                                                    >
                                                   哈飞                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=haima'
                                                                                       href="/www/haima/"
                                                                                       title="海马二手车"
                                                                                    >
                                                   海马                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huayang'
                                                                                       href="/www/huayang/"
                                                                                       title="华阳二手车"
                                                                                    >
                                                   华阳                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huatai'
                                                                                       href="/www/huatai/"
                                                                                       title="华泰二手车"
                                                                                    >
                                                   华泰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=fusangheibao'
                                                                                       href="/www/fusangheibao/"
                                                                                       title="黑豹二手车"
                                                                                    >
                                                   黑豹                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hengtian'
                                                                                       href="/www/hengtian/"
                                                                                       title="恒天二手车"
                                                                                    >
                                                   恒天                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hafu'
                                                                                       href="/www/hafu/"
                                                                                       title="哈弗二手车"
                                                                                    >
                                                   哈弗                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>J</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jiangling'
                                                                                       href="/www/jiangling/"
                                                                                       title="江铃二手车"
                                                                                    >
                                                   江铃                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jiao'
                                                                                       href="/www/jiao/"
                                                                                       title="吉奥二手车"
                                                                                    >
                                                   吉奥                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jianghuai'
                                                                                       href="/www/jianghuai/"
                                                                                       title="江淮二手车"
                                                                                    >
                                                   江淮                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jlshwuche'
                                                                                       href="/www/jlshwuche/"
                                                                                       title="九龙二手车"
                                                                                    >
                                                   九龙                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jili'
                                                                                       href="/www/jili/"
                                                                                       title="吉利二手车"
                                                                                    >
                                                   吉利                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jiangnan'
                                                                                       href="/www/jiangnan/"
                                                                                       title="江南二手车"
                                                                                    >
                                                   江南                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huachen'
                                                                                       href="/www/huachen/"
                                                                                       title="金杯二手车"
                                                                                    >
                                                   金杯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jeep'
                                                                                       href="/www/jeep/"
                                                                                       title="Jeep二手车"
                                                                                    >
                                                   Jeep                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jincheng'
                                                                                       href="/www/jincheng/"
                                                                                       title="金程二手车"
                                                                                    >
                                                   金程                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=yiqijiefang'
                                                                                       href="/www/yiqijiefang/"
                                                                                       title="解放二手车"
                                                                                    >
                                                   解放                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jiaxing1'
                                                                                       href="/www/jiaxing1/"
                                                                                       title="佳星二手车"
                                                                                    >
                                                   佳星                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=jiebao'
                                                                                       href="/www/jiebao/"
                                                                                       title="捷豹二手车"
                                                                                    >
                                                   捷豹                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>K</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=kaersen'
                                                                                       href="/www/kaersen/"
                                                                                       title="卡尔森二手车"
                                                                                    >
                                                   卡尔森                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=cadillac'
                                                                                       href="/www/cadillac/"
                                                                                       title="凯迪拉克二手车"
                                                                                    >
                                                   凯迪拉克                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=kaiyi'
                                                                                       href="/www/kaiyi/"
                                                                                       title="凯翼二手车"
                                                                                    >
                                                   凯翼                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=kawei'
                                                                                       href="/www/kawei/"
                                                                                       title="卡威二手车"
                                                                                    >
                                                   卡威                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=krui'
                                                                                       href="/www/krui/"
                                                                                       title="开瑞二手车"
                                                                                    >
                                                   开瑞                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chrysler'
                                                                                       href="/www/chrysler/"
                                                                                       title="克莱斯勒二手车"
                                                                                    >
                                                   克莱斯勒                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>L</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=renault'
                                                                                       href="/www/renault/"
                                                                                       title="雷诺二手车"
                                                                                    >
                                                   雷诺                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lotuscars'
                                                                                       href="/www/lotuscars/"
                                                                                       title="路特斯二手车"
                                                                                    >
                                                   路特斯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=suzuki'
                                                                                       href="/www/suzuki/"
                                                                                       title="铃木二手车"
                                                                                    >
                                                   铃木                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=rolls-royce'
                                                                                       href="/www/rolls-royce/"
                                                                                       title="劳斯莱斯二手车"
                                                                                    >
                                                   劳斯莱斯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lamborghini'
                                                                                       href="/www/lamborghini/"
                                                                                       title="兰博基尼二手车"
                                                                                    >
                                                   兰博基尼                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lexus'
                                                                                       href="/www/lexus/"
                                                                                       title="雷克萨斯二手车"
                                                                                    >
                                                   雷克萨斯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lifan'
                                                                                       href="/www/lifan/"
                                                                                       title="力帆二手车"
                                                                                    >
                                                   力帆                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=landrover'
                                                                                       href="/www/landrover/"
                                                                                       title="路虎二手车"
                                                                                    >
                                                   路虎                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=liebao'
                                                                                       href="/www/liebao/"
                                                                                       title="猎豹二手车"
                                                                                    >
                                                   猎豹                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lufeng'
                                                                                       href="/www/lufeng/"
                                                                                       title="陆风二手车"
                                                                                    >
                                                   陆风                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lincoln'
                                                                                       href="/www/lincoln/"
                                                                                       title="林肯二手车"
                                                                                    >
                                                   林肯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=linian'
                                                                                       href="/www/linian/"
                                                                                       title="理念二手车"
                                                                                    >
                                                   理念                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>M</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=mazda'
                                                                                       href="/www/mazda/"
                                                                                       title="马自达二手车"
                                                                                    >
                                                   马自达                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=mini'
                                                                                       href="/www/mini/"
                                                                                       title="MINI二手车"
                                                                                    >
                                                   MINI                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=maserati'
                                                                                       href="/www/maserati/"
                                                                                       title="玛莎拉蒂二手车"
                                                                                    >
                                                   玛莎拉蒂                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=mg1'
                                                                                       href="/www/mg1/"
                                                                                       title="MG二手车"
                                                                                    >
                                                   MG                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=meiya'
                                                                                       href="/www/meiya/"
                                                                                       title="美亚二手车"
                                                                                    >
                                                   美亚                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>N</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=dongfengyulongnazhijie'
                                                                                       href="/www/dongfengyulongnazhijie/"
                                                                                       title="纳智捷二手车"
                                                                                    >
                                                   纳智捷                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>O</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=opel'
                                                                                       href="/www/opel/"
                                                                                       title="欧宝二手车"
                                                                                    >
                                                   欧宝                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=acura'
                                                                                       href="/www/acura/"
                                                                                       title="讴歌二手车"
                                                                                    >
                                                   讴歌                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=oulang'
                                                                                       href="/www/oulang/"
                                                                                       title="欧朗二手车"
                                                                                    >
                                                   欧朗                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>Q</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chery'
                                                                                       href="/www/chery/"
                                                                                       title="奇瑞二手车"
                                                                                    >
                                                   奇瑞                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=qingling'
                                                                                       href="/www/qingling/"
                                                                                       title="庆铃二手车"
                                                                                    >
                                                   庆铃                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=lotus'
                                                                                       href="/www/lotus/"
                                                                                       title="青年莲花二手车"
                                                                                    >
                                                   青年莲花                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=qichen'
                                                                                       href="/www/qichen/"
                                                                                       title="启辰二手车"
                                                                                    >
                                                   启辰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=fuqiqiteng'
                                                                                       href="/www/fuqiqiteng/"
                                                                                       title="启腾二手车"
                                                                                    >
                                                   启腾                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=kia'
                                                                                       href="/www/kia/"
                                                                                       title="起亚二手车"
                                                                                    >
                                                   起亚                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>R</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=rongwei'
                                                                                       href="/www/rongwei/"
                                                                                       title="荣威二手车"
                                                                                    >
                                                   荣威                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=ruilin'
                                                                                       href="/www/ruilin/"
                                                                                       title="瑞麒二手车"
                                                                                    >
                                                   瑞麒                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=richan'
                                                                                       href="/www/richan/"
                                                                                       title="日产二手车"
                                                                                    >
                                                   日产                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>S</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=saibao1'
                                                                                       href="/www/saibao1/"
                                                                                       title="赛宝二手车"
                                                                                    >
                                                   赛宝                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=saab'
                                                                                       href="/www/saab/"
                                                                                       title="萨博二手车"
                                                                                    >
                                                   萨博                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=shenbao'
                                                                                       href="/www/shenbao/"
                                                                                       title="绅宝二手车"
                                                                                    >
                                                   绅宝                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=mitsubishi'
                                                                                       href="/www/mitsubishi/"
                                                                                       title="三菱二手车"
                                                                                    >
                                                   三菱                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=shuanghuan'
                                                                                       href="/www/shuanghuan/"
                                                                                       title="双环二手车"
                                                                                    >
                                                   双环                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=siming'
                                                                                       href="/www/siming/"
                                                                                       title="思铭二手车"
                                                                                    >
                                                   思铭                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=shuanglong'
                                                                                       href="/www/shuanglong/"
                                                                                       title="双龙二手车"
                                                                                    >
                                                   双龙                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=subaru'
                                                                                       href="/www/subaru/"
                                                                                       title="斯巴鲁二手车"
                                                                                    >
                                                   斯巴鲁                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=xiaqitongjia'
                                                                                       href="/www/xiaqitongjia/"
                                                                                       title="陕汽通家二手车"
                                                                                    >
                                                   陕汽通家                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=smart'
                                                                                       href="/www/smart/"
                                                                                       title="Smart二手车"
                                                                                    >
                                                   Smart                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=skoda'
                                                                                       href="/www/skoda/"
                                                                                       title="斯柯达二手车"
                                                                                    >
                                                   斯柯达                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>T</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=tengshi'
                                                                                       href="/www/tengshi/"
                                                                                       title="腾势二手车"
                                                                                    >
                                                   腾势                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=tianma'
                                                                                       href="/www/tianma/"
                                                                                       title="天马二手车"
                                                                                    >
                                                   天马                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=tesila'
                                                                                       href="/www/tesila/"
                                                                                       title="特斯拉二手车"
                                                                                    >
                                                   特斯拉                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=yiqitongyong'
                                                                                       href="/www/yiqitongyong/"
                                                                                       title="通用二手车"
                                                                                    >
                                                   通用                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>W</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=wushiling'
                                                                                       href="/www/wushiling/"
                                                                                       title="五十铃二手车"
                                                                                    >
                                                   五十铃                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=weilin'
                                                                                       href="/www/weilin/"
                                                                                       title="威麟二手车"
                                                                                    >
                                                   威麟                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=weiwang'
                                                                                       href="/www/weiwang/"
                                                                                       title="威旺二手车"
                                                                                    >
                                                   威旺                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=wanfeng'
                                                                                       href="/www/wanfeng/"
                                                                                       title="万丰二手车"
                                                                                    >
                                                   万丰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=wuling'
                                                                                       href="/www/wuling/"
                                                                                       title="五菱二手车"
                                                                                    >
                                                   五菱                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=volvo'
                                                                                       href="/www/volvo/"
                                                                                       title="沃尔沃二手车"
                                                                                    >
                                                   沃尔沃                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>X</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=xiyate'
                                                                                       href="/www/xiyate/"
                                                                                       title="西雅特二手车"
                                                                                    >
                                                   西雅特                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=xinkai'
                                                                                       href="/www/xinkai/"
                                                                                       title="新凯二手车"
                                                                                    >
                                                   新凯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=hyundai'
                                                                                       href="/www/hyundai/"
                                                                                       title="现代二手车"
                                                                                    >
                                                   现代                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=citroen'
                                                                                       href="/www/citroen/"
                                                                                       title="雪铁龙二手车"
                                                                                    >
                                                   雪铁龙                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=nanqi'
                                                                                       href="/www/nanqi/"
                                                                                       title="新雅途二手车"
                                                                                    >
                                                   新雅途                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=brand-xiali'
                                                                                       href="/www/brand-xiali/"
                                                                                       title="夏利二手车"
                                                                                    >
                                                   夏利                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chevrolet'
                                                                                       href="/www/chevrolet/"
                                                                                       title="雪佛兰二手车"
                                                                                    >
                                                   雪佛兰                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>Y</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=yingzhi'
                                                                                       href="/www/yingzhi/"
                                                                                       title="英致二手车"
                                                                                    >
                                                   英致                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=cf-yangzi'
                                                                                       href="/www/cf-yangzi/"
                                                                                       title="扬子二手车"
                                                                                    >
                                                   扬子                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=nj-iveco'
                                                                                       href="/www/nj-iveco/"
                                                                                       title="依维柯二手车"
                                                                                    >
                                                   依维柯                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=tj-yiqi'
                                                                                       href="/www/tj-yiqi/"
                                                                                       title="一汽二手车"
                                                                                    >
                                                   一汽                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=infiniti'
                                                                                       href="/www/infiniti/"
                                                                                       title="英菲尼迪二手车"
                                                                                    >
                                                   英菲尼迪                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=chuanqiyema'
                                                                                       href="/www/chuanqiyema/"
                                                                                       title="野马二手车"
                                                                                    >
                                                   野马                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=yongyuanqiche'
                                                                                       href="/www/yongyuanqiche/"
                                                                                       title="永源二手车"
                                                                                    >
                                                   永源                                            </a>
                                                                            </div>
                                </li>
                                                                <li class="clearfix">
                                    <span>Z</span>
                                    <div>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=zhongshun'
                                                                                       href="/www/zhongshun/"
                                                                                       title="中顺二手车"
                                                                                    >
                                                   中顺                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=zhongou'
                                                                                       href="/www/zhongou/"
                                                                                       title="中欧二手车"
                                                                                    >
                                                   中欧                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=zhongxing'
                                                                                       href="/www/zhongxing/"
                                                                                       title="中兴二手车"
                                                                                    >
                                                   中兴                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=huachen-zhonghua'
                                                                                       href="/www/huachen-zhonghua/"
                                                                                       title="中华二手车"
                                                                                    >
                                                   中华                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=zhongtai'
                                                                                       href="/www/zhongtai/"
                                                                                       title="众泰二手车"
                                                                                    >
                                                   众泰                                            </a>
                                                                                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=brand&brand=zhidou'
                                                                                       href="/www/zhidou/"
                                                                                       title="知豆二手车"
                                                                                    >
                                                   知豆                                            </a>
                                                                            </div>
                                </li>
                                                            </ul>
                        </div>
                    </div>
                </span>
                    <!--品牌全部-->
                </dd>
            </dl>
            <dl class="fliter-bd clearfix">
                <dt>车系：</dt>
                <dd class="clickTagWidget">
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=0' class="on"
                       href="/www/buy/" rel="nofollow">不限</a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=fute-fukesi' class=""
                       href="/www/fute-fukesi/"
                       title="二手福克斯"
                    >
                        福克斯 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=jetta' class=""
                       href="/www/jetta/"
                       title="二手捷达"
                    >
                        捷达 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=chevrolet-keluzi'
                       class=""
                       href="/www/chevrolet-keluzi/"
                       title="二手科鲁兹"
                    >
                        科鲁兹 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=buick-kaiyue' class=""
                       href="/www/buick-kaiyue/"
                       title="二手凯越"
                    >
                        凯越 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=wulingzhiguang' class=""
                       href="/www/wulingzhiguang/"
                       title="二手五菱之光"
                    >
                        五菱之光 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=passat' class=""
                       href="/www/passat/"
                       title="二手帕萨特"
                    >
                        帕萨特 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=suteng' class=""
                       href="/www/suteng/"
                       title="二手速腾"
                    >
                        速腾 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=baolai' class=""
                       href="/www/baolai/"
                       title="二手宝来"
                    >
                        宝来 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=dazhong-polo' class=""
                       href="/www/dazhong-polo/"
                       title="二手Polo"
                    >
                        Polo </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=mondeo' class=""
                       href="/www/mondeo/"
                       title="二手蒙迪欧"
                    >
                        蒙迪欧 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=buick-junyue' class=""
                       href="/www/buick-junyue/"
                       title="二手君越"
                    >
                        君越 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=maiteng' class=""
                       href="/www/maiteng/"
                       title="二手迈腾"
                    >
                        迈腾 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=hongguang' class=""
                       href="/www/hongguang/"
                       title="二手宏光"
                    >
                        宏光 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=langyi' class=""
                       href="/www/langyi/"
                       title="二手朗逸"
                    >
                        朗逸 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=tag&tag=h6' class=""
                       href="/www/h6/"
                       title="二手H6"
                    >
                        H6 </a>

                </dd>
            </dl>
            <dl class="fliter-bd clearfix">
                <dt>价格：</dt>
                <dd>
                    <a data-gzlog="tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=0"
                       class="on" href="/www/buy/" rel="nofollow">不限</a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=3'
                       class=""
                       href="/www/buy/p3/"
                       title='5万以下二手车'>
                        5万以下 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=4'
                       class=""
                       href="/www/buy/p4/"
                       title='10万以下二手车'>
                        5-10万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=5'
                       class=""
                       href="/www/buy/p5/"
                       title='15万以下二手车'>
                        10-15万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=6'
                       class=""
                       href="/www/buy/p6/"
                       title='20万以下二手车'>
                        15-20万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=7'
                       class=""
                       href="/www/buy/p7/"
                       title='30万以下二手车'>
                        20-30万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=8'
                       class=""
                       href="/www/buy/p8/"
                       title='40万以下二手车'>
                        30-40万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=9'
                       class=""
                       href="/www/buy/p9/"
                       title='60万以下二手车'>
                        40-60万 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=price_index&price_index=10'
                       class=""
                       href="/www/buy/p10/"
                       title='60万以上二手车'>
                        60万以上 </a>
                    <span data-url-template="/www/buy/b{{begin}}e{{end}}/" class="input-box clearfix rangeFilter">
                <label>
                    <input type="text" value="" data-default-value="0" size="4" class="js-begin" maxlength="3"
                           id="my_price_b" name="b">
                </label>
                <label><i class="input-line">-</i></label>
                <label>
                    <input type="text" value="" data-default-value="999" size="4" class="js-end" maxlength="3"
                           id="my_price_e" name="e">
                </label>
                <label class="input-unit">万</label>
                <label><a gjalog="" href="#" class="input-btn js-btn">筛选</a></label>
                </span>
                </dd>
            </dl>
            <dl class="fliter-bd clearfix">
                <dt>车龄：</dt>
                <dd>
                    <a data-role="filterItemAge" data-value="" class="on" href="/www/buy/" rel="nofollow">不限</a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=cheling&cheling=4'
                       data-role="filterItemAge" data-value="4"
                       class=""
                       href="/www/buy/l4/"
                       rel="nofollow"
                       title="5年以上二手车"
                    >
                        5年以上 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=cheling&cheling=3'
                       data-role="filterItemAge" data-value="3"
                       class=""
                       href="/www/buy/l3/"
                       rel="nofollow"
                       title="5年内二手车"
                    >
                        5年内 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=cheling&cheling=2'
                       data-role="filterItemAge" data-value="2"
                       class=""
                       href="/www/buy/l2/"
                       rel="nofollow"
                       title="3年内二手车"
                    >
                        3年内 </a>
                    <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=cheling&cheling=1'
                       data-role="filterItemAge" data-value="1"
                       class=""
                       href="/www/buy/l1/"
                       rel="nofollow"
                       title="1年以内二手车"
                    >
                        1年以内 </a>
                </dd>
            </dl>
            <dl class="moreitem clearfix">
                <dt>更多：</dt>
                <dd class="hoverWidget" gjalog="100000000641000100000010">
                    <div class="moreitem-btn">
                        <a href="#">车型</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts">
                                <a class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=chexing&chexing=5'
                                   class=""
                                   href="/www/buy/h5/"
                                   title="二手两厢轿车"
                                >
                                    两厢轿车 </a>
                                <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=chexing&chexing=6'
                                   class=""
                                   href="/www/buy/h6/"
                                   title="二手三厢轿车"
                                >
                                    三厢轿车 </a>
                                <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=chexing&chexing=4'
                                   class=""
                                   href="/www/buy/h4/"
                                   title="二手跑车"
                                >
                                    跑车 </a>
                                <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=chexing&chexing=2'
                                   class=""
                                   href="/www/buy/h2/"
                                   title="二手SUV"
                                >
                                    SUV </a>
                                <a data-gzlog='tracking_type=click&eventid=0070000000000045&filter=chexing&chexing=3'
                                   class=""
                                   href="/www/buy/h3/"
                                   title="二手MPV"
                                >
                                    MPV </a>
                            </div>
                        </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000643000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">行驶里程</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts ">
                                <a rel="nofollow" data-role="filterItemRoadHaul" data-value=""
                                   class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=road_haul&road_haul=1'
                                   data-role="filterItemRoadHaul" data-value="1"
                                   class=""
                                   href="/www/buy/g1/"
                                   title="1万公里内二手车"
                                >
                                    1万公里内 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=road_haul&road_haul=2'
                                   data-role="filterItemRoadHaul" data-value="2"
                                   class=""
                                   href="/www/buy/g2/"
                                   title="3万公里内二手车"
                                >
                                    3万公里内 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=road_haul&road_haul=3'
                                   data-role="filterItemRoadHaul" data-value="3"
                                   class=""
                                   href="/www/buy/g3/"
                                   title="5万公里内二手车"
                                >
                                    5万公里内 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=road_haul&road_haul=4'
                                   data-role="filterItemRoadHaul" data-value="4"
                                   class=""
                                   href="/www/buy/g4/"
                                   title="5万公里以上二手车"
                                >
                                    5万公里以上 </a>
                            </div>
                        </div>
                    </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000644000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">变速箱</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts">
                                <a rel="nofollow" class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=gearbox&gearbox=1'
                                   class=""
                                   href="/www/buy/n1/"
                                   title="手动档二手车"
                                >
                                    手动 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=gearbox&gearbox=2'
                                   class=""
                                   href="/www/buy/n2/"
                                   title="自动档二手车"
                                >
                                    自动 </a>
                            </div>
                        </div>
                    </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000645000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">排量</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts">
                                <a rel="nofollow" class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=air_displacement&air_displacement=1'
                                   class=""
                                   href="/www/buy/j1/"
                                   title="1.0L以下二手车"
                                >
                                    1.0L以下 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=air_displacement&air_displacement=2'
                                   class=""
                                   href="/www/buy/j2/"
                                   title="1.0-1.6L二手车"
                                >
                                    1.0-1.6L </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=air_displacement&air_displacement=3'
                                   class=""
                                   href="/www/buy/j3/"
                                   title="1.6-2.0L二手车"
                                >
                                    1.6-2.0L </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=air_displacement&air_displacement=4'
                                   class=""
                                   href="/www/buy/j4/"
                                   title="2.0-3.0L二手车"
                                >
                                    2.0-3.0L </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=air_displacement&air_displacement=5'
                                   class=""
                                   href="/www/buy/j5/"
                                   title="3.0L以上二手车"
                                >
                                    3.0L以上 </a>
                            </div>
                        </div>
                    </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000646000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">排放标准</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts ">
                                <a rel="nofollow" data-role="filterItemConfig" data-value=""
                                   class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=vehicle_config&vehicle_config=1'
                                   data-role="filterItemConfig" data-value="1"
                                   class=""
                                   href="/www/buy/v1/"
                                   title="国二及以上二手车"
                                >
                                    国二及以上 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=vehicle_config&vehicle_config=2'
                                   data-role="filterItemConfig" data-value="2"
                                   class=""
                                   href="/www/buy/v2/"
                                   title="国三及以上二手车"
                                >
                                    国三及以上 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=vehicle_config&vehicle_config=3'
                                   data-role="filterItemConfig" data-value="3"
                                   class=""
                                   href="/www/buy/v3/"
                                   title="国四及以上二手车"
                                >
                                    国四及以上 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=vehicle_config&vehicle_config=4'
                                   data-role="filterItemConfig" data-value="4"
                                   class=""
                                   href="/www/buy/v4/"
                                   title="国五二手车"
                                >
                                    国五 </a>
                            </div>
                        </div>
                    </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000647000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">颜色</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1 moreitem-color">
                            <div class="moreitem-opts">
                                <a rel="nofollow" class="cur"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=1'
                                   class=""
                                   href="/www/buy/m1/"
                                   title="黑色二手车"
                                >
                                    <i class="c-lump03"></i>黑色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=2'
                                   class=""
                                   href="/www/buy/m2/"
                                   title="白色二手车"
                                >
                                    <i class="c-lump04"></i>白色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=3'
                                   class=""
                                   href="/www/buy/m3/"
                                   title="银灰色二手车"
                                >
                                    <i class="c-lump10"></i>银灰色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=4'
                                   class=""
                                   href="/www/buy/m4/"
                                   title="深灰色二手车"
                                >
                                    <i class="c-lump15"></i>深灰色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=6'
                                   class=""
                                   href="/www/buy/m6/"
                                   title="红色二手车"
                                >
                                    <i class="c-lump09"></i>红色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=10'
                                   class=""
                                   href="/www/buy/m10/"
                                   title="橙色二手车"
                                >
                                    <i class="c-lump11"></i>橙色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=8'
                                   class=""
                                   href="/www/buy/m8/"
                                   title="绿色二手车"
                                >
                                    <i class="c-lump02"></i>绿色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=7'
                                   class=""
                                   href="/www/buy/m7/"
                                   title="蓝色二手车"
                                >
                                    <i class="c-lump05"></i>蓝色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=5'
                                   class=""
                                   href="/www/buy/m5/"
                                   title="咖啡色二手车"
                                >
                                    <i class="c-lump06"></i>咖啡色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=12'
                                   class=""
                                   href="/www/buy/m12/"
                                   title="紫色二手车"
                                >
                                    <i class="c-lump07"></i>紫色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=11'
                                   class=""
                                   href="/www/buy/m11/"
                                   title="香槟色二手车"
                                >
                                    <i class="c-lump08"></i>香槟色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=13'
                                   class=""
                                   href="/www/buy/m13/"
                                   title="多彩色二手车"
                                >
                                    <i class="c-lump12"></i>多彩色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=9'
                                   class=""
                                   href="/www/buy/m9/"
                                   title="黄色二手车"
                                >
                                    <i class="c-lump13"></i>黄色 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=car_color&car_color=14'
                                   class=""
                                   href="/www/buy/m14/"
                                   title="其它二手车"
                                >
                                    <i class="c-lump14"></i>其它 </a>
                            </div>
                        </div>
                    </div>
                </dd>
                <dd class="hoverWidget" gjalog="100000000648000100000010">
                    <div class="moreitem-btn">
                        <a rel="nofollow" href="#">国别</a>
                    </div>
                    <div class="moreitem-box">
                        <div class="m-i-w1">
                            <div class="moreitem-opts">
                                <a rel="nofollow" class="one"
                                   href="/www/buy/"
                                   rel="nofollow"
                                >不限</a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=4'
                                   class=""
                                   href="/www/buy/u4/"
                                   title="德系二手车"
                                >
                                    德系 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=5'
                                   class=""
                                   href="/www/buy/u5/"
                                   title="日系二手车"
                                >
                                    日系 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=2'
                                   class=""
                                   href="/www/buy/u2/"
                                   title="美系二手车"
                                >
                                    美系 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=1'
                                   class=""
                                   href="/www/buy/u1/"
                                   title="法系二手车"
                                >
                                    法系 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=6'
                                   class=""
                                   href="/www/buy/u6/"
                                   title="韩系二手车"
                                >
                                    韩系 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=3'
                                   class=""
                                   href="/www/buy/u3/"
                                   title="国产二手车"
                                >
                                    国产 </a>
                                <a rel="nofollow"
                                   data-gzlog='tracking_type=click&eventid=0070000000000045&filter=guobie&guobie=7'
                                   class=""
                                   href="/www/buy/u7/"
                                   title="其他二手车"
                                >
                                    其他 </a>
                            </div>
                        </div>
                    </div>
                </dd>

            </dl>
        </div>

    </div>

    <!--排序-->
    <div class="seqBox clearfix">
        <p class="fr seqtype">共找到<b>126229</b>辆
        </p>
        <ul class="sequen">
            <li class="first"><a rel="nofollow" href="/www/buy/"
                                 data-gzlog="tracking_type=click&eventid=0070000000000056&sort=default">默认排序</a></li>
            <li>
                <a rel="nofollow" href="/www/buy/i1/" title=""
                   data-gzlog="tracking_type=click&eventid=0070000000000056&sort=price">价格<i class="up"></i>
                </a>
            </li>
            <li>
                <a rel="nofollow" href="/www/buy/i3/" title=""
                   data-gzlog="tracking_type=click&eventid=0070000000000056&sort=cheling">车龄<i class="up"></i>
                </a>
            </li>
            <li>
                <a rel="nofollow" href="/www/buy/i5/" title=""
                   data-gzlog="tracking_type=click&eventid=0070000000000056&sort=licheng">里程<i class="up"></i>
                </a>
            </li>
        </ul>
    </div>
    <!--列表-->
    <div class="list">
        <ul class="list-bigimg clearfix lazyLoadV2">
            
            <?php foreach($list as $key=>$value):?>
            <li>
                <!-- 车源售卖状态显示 -->
                <div class="list-infoBox">
                    <a rel="nofollow" data-gzlog="tracking_type=click&eventid=0120000000000057&carid=4983575@39"
                       baidu_alog='pc_list_xiangqingye&click&pc_list_xiangqingye_c' title="<?=$value['title'];?>"
                       target="_blank" class="imgtype" href="<?=Url::toRoute(['site/detail', 'id'=>$value['id']]);?>">
                        <img width="290" height="194"
                             src="<?=$value['img_url'];?>"
                             alt="<?=$value['title'];?>">
                    </a>
                    <p class="infoBox">
                        <a baidu_alog='pc_list_xiangqingye&click&pc_list_xiangqingye_c' title="<?=$value['title'];?>"
                           href="<?=Url::toRoute(['site/detail', 'id'=>$value['id']]);?>" target="_blank" class="info-title">
                            <?=$value['title'];?>
                        </a>
                    </p>
                    <p class="fc-gray">
                        <span class="ctag-green"><?=$value['city'];?></span>
                        <span class=""><?=$value['registration_date'];?></span>
                        <em class="shuxian">|</em>行驶<?=$value['mileage'];?>万公里
                    </p>
                    <p class="priType-s">
                  <span>
                      <i class="fc-org priType"> <?=$value['present_price'];?>万 </i>
                  </span>
                        <s><?=$value['original_price'];?>万</s>
                    </p>
                </div>
            </li>
            <?php endforeach;?>


            <input type="hidden" class="clue_ids" value=""/>
        </ul>
    </div>

    <!--page-->
    <div class="pageBox" data-widget="app/ms_v2/common/list_page.js#pagination">
        <ul class="pageLink clearfix">
            <li><a class="c linkOn"><span>1</span></a></li>
            <li><a href="/www/buy/o2/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=2'><span>2</span></a>
            </li>
            <li><a href="/www/buy/o3/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=3'><span>3</span></a>
            </li>
            <li><a href="/www/buy/o4/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=4'><span>4</span></a>
            </li>
            <li><a href="/www/buy/o5/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=5'><span>5</span></a>
            </li>
            <li><a href="/www/buy/o6/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=6'><span>6</span></a>
            </li>
            <li><a href="/www/buy/o7/" data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=7'><span>7</span></a>
            </li>
            <li>...</li>
            <li><a href="/www/buy/o50/"
                   data-gzlog='tracking_type=click&eventid=0060000000000060&pageno=50'><span>50</span></a></li>
            <li><a href="/www/buy/o2/" data-gzlog='tracking_type=click&eventid=0060000000000059'
                   class="next"><span>下一页</span></a></li>
        </ul>
    </div>
</div>

