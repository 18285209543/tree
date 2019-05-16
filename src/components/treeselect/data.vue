<template>
  <div>
    <tree-select :treeList="treeData"></tree-select>
    
  </div>
</template>

<script>
import treeSelect from './index.vue'
export default {
  data() {
    return {
      treeData:  [
        {
          id: 1,
          fruits: "水果",
          children: [
            {
              pid: 1,
              apple: "苹果",
              children: []
            },
            {
              pid: 2,
              apple: "甘蔗",
              children: []
            },
            {
              pid: 3,
              apple: "草莓",
              children: []
            },
            {
              pid: 4,
              apple: "香蕉",
              children: []
            }
          ]
        },
        {
          id: 2,
          fruits: "麦当劳",
          children: [
            {
              pid: 1,
              apple: "炸薯条",
              children: []
            },
            {
              pid: 2,
              apple: "可口可乐",
              children: []
            },
            {
              pid: 3,
              apple: "巧克力奶昔",
              children: []
            },
            {
              pid: 4,
              apple: "乳酪汉堡",
              children: []
            }
          ]
        }
      ]
    }
  },
  components: {
    treeSelect
  }
}
</script>

<style lang="less" >

</style>
