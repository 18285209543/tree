<template>
  <div>
    <div class="dtree-box">
      <div class="dtree-search">
        <input type="text" placeholder="请输入要查询的关键字">
        <div class="dtree-icon" @click="handleIcon()">
          <div class="dtree-plv">
            <div :class="{'dtree-open': treeIcon}" class="dtree-close"></div>
          </div>
        </div>
      </div>
      <div v-show="treeContent" class="dtree-content">
        <ul class="dtree-items">
          <li
            class="dtree-item"
            v-for="(item, index) in treeList"
            :key="index"
          >
            <div class="dtree-item-icon">
              <span @click="dtreeItem(item)" :class="{'dtree-close-bottom':!item.expanded}" class="dtree-close-right"></span>
            </div>
            <span>{{item.fruits}}</span>
            <div>
              <li v-for="(child)  in item.children" :key="child.index"  v-show="item.expanded">{{child.apple}}</li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    treeList: Array
  },

  data() {
    return {
      treeIcon: false,
      treeContent: false,
      treeDataList: []
    };
  },

   watch: {
    treeList: {
      handler() {
        this.initTreeData();
      }
    },
  },

  methods: {
    // icon动画和内容的显示与隐藏
    handleIcon() {
      this.treeIcon = !this.treeIcon;
      this.treeContent = !this.treeContent;
    },

    dtreeItem(item) {
      item.expanded = !item.expanded;
    },

    initTreeData() {
      let tempData = JSON.parse(JSON.stringify(this.treeList));
      let reduceDataFunc = (data, level) => {
        data.map((m, i) => {
					console.log(m)
					// 添加显示还是隐藏的功能
          m.expanded = false;
          m.children = m.children || [];
					m.level = level;
          if (m.children.length > 0) {
            reduceDataFunc(m.children, level + 1);
          }
        });
      };
      reduceDataFunc(tempData, 1);
      this.treeDataList = tempData;
    }
  },

  mounted () {
    let vm = this;
    vm.$nextTick(() => {
      vm.initTreeData();
    })
  }

};
</script>

<style lang="less">
ol,
ul {
  list-style: none;
}

.dtree-box {
  width: 301px;
  height: auto;
  margin: 20px auto;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
}

.dtree-search {
  width: 100%;
  height: 35px;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  input {
    padding: 0 10px;
    width: 80%;
    height: 100%;
    border: none;
  }
  .dtree-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
  }
}

// 搜索框的icon
.dtree-plv {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

// icon
.dtree-close,
.dtree-open,
.dtree-close-right,
.dtree-close-bottom {
  position: absolute;
  width: 0;
  height: 0;
  border-color: #999;
  border-style: solid;
  border-width: 6px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-color: #aaaaaa transparent transparent;
  transition: all 0.3s;
  z-index: 2;
}
.dtree-close {
  transform: rotate(0deg);
  top: 15px;
}
.dtree-open {
  top: 8px;
  transform: rotate(180deg);
}

.dtree-items {
  height: auto;
  li {
    height: 25px;
    width: 100%;
    padding: 0px 10px;
    line-height: 25px;
    color: #616161;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
    }
    .dtree-item-icon {
      position: relative;
      width: 20px;
      height: 100%;
      padding-right: 10px;
      float: left;
      .dtree-close-right {
        transform: rotate(270deg);
        top: 6.5px;
      }
      .dtree-close-bottom {
        top: 11px;
        transform: rotate(0deg);
      }
    }
  }
}

html,
body,
div,
span,
p,
a,
em,
font,
img,
ul,
li,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
h1,
h2,
h3,
h4,
h5,
h6,
section {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
