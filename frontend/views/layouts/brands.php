<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/9/24
 * Time: 23:34
 */

$brands_data = \common\models\Brands::find()->asArray()->all();

$brands = [];

foreach ($brands_data as $key => $value) {
    $brands[$value['pinyin']][] = $value;
}
ksort($brands);

$one = array_splice($brands, 0, 11);
$two = $brands;

$list[] = $one;
$list[] = $two;

?>




<?php foreach ($list as $key => $value): ?>
    <table class="tb<?=$key+1;?>">
        <tbody>
        <?php foreach ($value as $ke => $val): ?>
            <tr>
                <td class="zm"><?= $ke; ?></td>
                <td>
                    <?php foreach ($val as $k => $v): ?>
                        <a baidu_alog="pc_index_fastPick_brand&amp;click&amp;pc_index_fastPick_brand_all_c"
                           data-gzlog="tracking_type=click&amp;eventid=0050080000000025&amp;brand=<?= trim($v['brand_name']); ?>"
                           href="http://ershouche.phpdx.com/www/alpina/" title="<?= trim($v['brand_name']); ?>二手车">
                            <?= trim($v['brand_name']); ?>
                        </a>
                    <?php endforeach; ?>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endforeach; ?>



