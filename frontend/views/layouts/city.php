<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/24
 * Time: 23:09
 */
//use com
$city = \common\models\Citys::find()->asArray()->all();
$result = $hot = [];
foreach ($city as $k => $v) {
    if ($v['pinyin'] == '热门') {
        $hot[] = $v;
    } else {
        $result[$v['pinyin']][] = $v;
    }
}
?>


<div class="all-city">
    <dl>
        <dt>热门</dt>
        <dd>
            <?php foreach ($hot as $key=>$value):?>
            <a baidu_alog="pc_index_city&click&pc_index_hot_city_c"
               data-gzlog="tracking_type=click&eventid=0020060000000019&select_city=wh" href="#"
               title="<?=trim($value['city_name']);?>二手车"><?=trim($value['city_name']);?> </a>
            <?php endforeach;?>
        </dd>
    </dl>
    <div class="city-line"></div>
    <?php foreach ($result as $key => $value): ?>
        <dl>
            <dt><?= $key; ?></dt>
            <dd>
                <?php foreach ($value as $k => $v): ?>
                    <a data-gzlog="tracking_type=click&eventid=0020060000000017&select_city=bj"
                       baidu_alog="pc_index_city&click&pc_index_all_city_c"
                       href="#"
                       title="<?= trim($v['city_name']); ?>二手车"> <?= trim($v['city_name']); ?> </a>
                <?php endforeach; ?>
            </dd>
        </dl>
    <?php endforeach; ?>
</div>
