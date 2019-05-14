<template>
  <div class="contains">
    <tree-table
      ref="recTree"
      :list.sync="treeDataSource"
      @actionFunc="actionFunc"
      @deleteFunc="deleteFunc"
      @handlerExpand="handlerExpand"
      @orderByFunc="orderByFunc"
    ></tree-table>
  </div>
</template>
<script>
import dataJson from "./data.json";
import treeTable from "../components/tree/tree-table";
export default {
  data() {
    return {
      treeDataSource: dataJson
    };
  },
  components: {
    treeTable
  },
  methods: {
    // 排序
    orderByFunc(val) {
      alert("排序");
      alert(val);
    },
    // 编辑元素
    actionFunc(m) {
      alert("编辑");
    },
    // 删除元素
    deleteFunc(m) {
      alert("删除");
      console.log(this.treeDataSource.splice( m.Id))
    },
    // 展开/收缩
    handlerExpand(m) {
      m.isExpand = !m.isExpand;
    }
  }
};
</script>

<style lang="less">
// tr {
//   transition: all 2s;
// }
.contains {
  width: 960px;
  margin: 30px auto;
}
</style>
