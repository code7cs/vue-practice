<template>
  <div class="container">
    <div class="row">
      <!-- 字段列表弹窗 -->
      <!-- <div class="mask" v-show="maskShow" @click="setMaskShow"></div>
      <div class="card child" id="child" v-show="maskShow">-->
      <!-- <change-list :title="fieldTitle" :data="fieldList"></change-list> -->
      <!-- <button class="btn btn-danger" @click="setMaskShow">Close</button> -->
      <!-- </div> -->

      <!-- 待选表 -->
      <div class="col-md-4">
        <change-list :title="sourceTitle" :data="sourceList"></change-list>
      </div>
      <!-- 穿梭按钮 -->
      <div class="col-md-4 text-center">
        <br>
        <p>
          <button
            :disabled="sourceList.length === 0 || sourceRefNum === 0"
            class="btn btn-primary"
            @click="toTarget()"
          >&gt;</button>
        </p>
        <p>
          <button
            :disabled="targetList.length === 0 || targetRefNum === 0"
            class="btn btn-primary"
            @click="toSource()"
          >&lt;</button>
        </p>
        <br>
        <br>
        <p>
          <button
            :disabled="sourceList.length === 0"
            class="btn btn-primary"
            @click="allToTarget()"
          >&gt;&gt;</button>
        </p>
        <p>
          <button
            :disabled="targetList.length === 0"
            class="btn btn-primary"
            @click="allToSource()"
          >&lt;&lt;</button>
        </p>
      </div>
      <!-- 已选表 -->
      <div class="col-md-4">
        <change-list :title="targetTitle" :data="targetList"></change-list>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeList from "./ChangeList";

let dataList = Array.from({ length: 100 }, (v, index) => ({
  id: index,
  isSelected: false,
  name: ` tableName${index + 1}`
}));

// let fieldList = Array.from({ length: 5 }, (v, index) => ({
//   id: index,
//   isSelected: false,
//   name: ` columnName${index + 1}`
// }));

// console.log(dataList);

export default {
  components: {
    ChangeList
  },

  data() {
    return {
      sourceTitle: " 待选表 ",
      targetTitle: " 已选表 ",
      sourceList: dataList,
      targetList: []
      // maskShow: false,
      // 字段列表
      // fieldTitle: " 字段 ",
      // fieldList: fieldList
    };
  },
  methods: {
    exchange(fd, td) {
      let selectedItem = fd
        .filter(item => item.isSelected)
        .map(item => {
          return {
            ...item,
            isSelected: false
          };
        });
      td.push(...selectedItem);
      return fd.filter(item => !item.isSelected);
    },
    exchangeAll(fd, td) {
      let selectedItem = fd.map(item => {
        return {
          ...item,
          isSelected: false
        };
      });
      td.push(...selectedItem);
      return fd.filter(item => null);
    },
    toTarget() {
      this.sourceList = this.exchange(this.sourceList, this.targetList);
    },
    toSource() {
      this.targetList = this.exchange(this.targetList, this.sourceList);
    },
    allToTarget() {
      this.sourceList = this.exchangeAll(this.sourceList, this.targetList);
    },
    allToSource() {
      this.targetList = this.exchangeAll(this.targetList, this.sourceList);
    }
    // setMaskShow(maskShow) {
    //   this.maskShow = maskShow;
    // }
  },

  computed: {
    sourceRefNum() {
      return this.sourceList.filter(item => item.isSelected).length;
    },
    targetRefNum() {
      return this.targetList.filter(item => item.isSelected).length;
    }
  }
};
</script>
