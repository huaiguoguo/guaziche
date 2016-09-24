<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 21:59
 */
namespace common\core;


use yii\rbac\DbManager;
use yii\rbac\Item;
use yii\db\Query;
use yii\db\Expression;

class CDBManager extends DbManager{

    /**
     * 重写原有方法
     */
    public function createPermission($name)
    {
        $permission = new CPermission();
        $permission->name = $name;
        return $permission;
    }

    /**
     * 重写原有方法
     */
    public function createRole($name)
    {
        $permission = new CRole();
        $permission->name = $name;
        return $permission;
    }


    /**
     * 重写原有方法
     */
    protected function addItem($item)
    {
        $time = time();
        if ($item->createdAt === null) {
            $item->createdAt = $time;
        }
        if ($item->updatedAt === null) {
            $item->updatedAt = $time;
        }
        $this->db->createCommand()
            ->insert($this->itemTable, [
                'name' => $item->name,
                'type' => $item->type,
                'description' => $item->description,
                'rule_name' => $item->ruleName,
                'data' => $item->data === null ? null : serialize($item->data),
                'created_at' => $item->createdAt,
                'updated_at' => $item->updatedAt,
                'level' => $item->level,
                'sort' => $item->sort,
            ])->execute();

        $this->invalidateCache();

        return true;
    }




    /**
     * @inheritdoc
     */
    protected function updateItem($name, $item)
    {
        if ($item->name !== $name && !$this->supportsCascadeUpdate()) {
            $this->db->createCommand()
                ->update($this->itemChildTable, ['parent' => $item->name], ['parent' => $name])
                ->execute();
            $this->db->createCommand()
                ->update($this->itemChildTable, ['child' => $item->name], ['child' => $name])
                ->execute();
            $this->db->createCommand()
                ->update($this->assignmentTable, ['item_name' => $item->name], ['item_name' => $name])
                ->execute();
        }

        $item->updatedAt = time();

        $this->db->createCommand()
            ->update($this->itemTable, [
                'name' => $item->name,
                'description' => $item->description,
                'rule_name' => $item->ruleName,
                'data' => $item->data === null ? null : serialize($item->data),
                'updated_at' => $item->updatedAt,
                'sort' => $item->sort
            ], [
                         'name' => $name,
                     ])->execute();

        $this->invalidateCache();

        return true;
    }



    /**
     * @inheritdoc
     */
    public function getChildren($name)
    {
        $query = (new Query)
            ->select(['name', 'type', 'description', 'rule_name', 'data', 'level', 'sort', 'created_at', 'updated_at'])
            ->from([$this->itemTable, $this->itemChildTable])
            ->where(['parent' => $name, 'name' => new Expression('[[child]]')]);

        $children = [];
        foreach ($query->all($this->db) as $row) {
            $children[$row['name']] = $this->populateItem($row);
        }

        return $children;
    }


    /**
     * 重写原有方法
     */
    protected function populateItem($row)
    {
        $class = $row['type'] == Item::TYPE_PERMISSION ? CPermission::className() : CRole::className();

        if (!isset($row['data']) || ($data = @unserialize($row['data'])) === false) {
            $data = null;
        }

        return new $class([
                              'name' => $row['name'],
                              'type' => $row['type'],
                              'description' => $row['description'],
                              'ruleName' => $row['rule_name'],
                              'data' => $data,
                              'createdAt' => $row['created_at'],
                              'updatedAt' => $row['updated_at'],
                              'level' => $row['level'],
                              'sort' => $row['sort'],
                          ]);
    }




}