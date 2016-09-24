<?php
/**
 * Created by PhpStorm.
 * User: guofeng
 * Date: 2016/3/22 0022
 * Time: 下午 5:18
 */

namespace common\helper;


use yii\helpers\BaseVarDumper;
use yii\helpers\VarDumper;

class Dump extends VarDumper{
    public static function p($var, $echo = true, $label = null, $strict = true){
            $label = ($label === null) ? '' : rtrim($label) . ' ';
            if (!$strict) {
                if (ini_get('html_errors')) {
                    $output = print_r($var, true);
                    $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
                } else {
                    $output = $label . print_r($var, true);
                }
            } else {
                ob_start();
                var_dump($var);
                $output = ob_get_clean();
                if (!extension_loaded('xdebug')) {
                    $output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
                    $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
                }
            }
            if ($echo) {
                echo($output);
                return null;
            } else
                return $output;
    }
}





