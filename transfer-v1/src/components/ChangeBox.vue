<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <change-box-area :title="sourceTitle" :data="sourceList"></change-box-area>
      </div>
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
            :disabled="sourceList.length === 0 || sourceRefNum === 0"
            class="btn btn-primary"
            @click="allToTarget()"
          >&gt;&gt;</button>
        </p>
        <p>
          <button
            :disabled="targetList.length === 0 || targetRefNum === 0"
            class="btn btn-primary"
            @click="allToSource()"
          >&lt;&lt;</button>
        </p>
      </div>
      <div class="col-md-4">
        <change-box-area :title="targetTitle" :data="targetList"></change-box-area>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeBoxArea from "./ChangeBoxArea";

let dataList = [
  { id: 1, name: "tableName1", isSelected: false },
  { id: 2, name: "tableName2", isSelected: false },
  { id: 3, name: "tableName3", isSelected: false },
  { id: 4, name: "tableName4", isSelected: false },
  { id: 5, name: "tableName5", isSelected: false },
  { id: 6, name: "tableName6", isSelected: false },
  { id: 7, name: "tableName7", isSelected: false },
  { id: 8, name: "tableName8", isSelected: false },
  { id: 9, name: "tableName9", isSelected: false },
  { id: 10, name: "tableName10", isSelected: false },
  { id: 11, name: "tableName11", isSelected: false },
  { id: 12, name: "tableName12", isSelected: false },
  { id: 13, name: "tableName13", isSelected: false },
  { id: 14, name: "tableName14", isSelected: false },
  { id: 15, name: "tableName15", isSelected: false }
];
export default {
  components: {
    ChangeBoxArea
  },
  name: "ChangeBox",
  data() {
    return {
      sourceTitle: " 待选表",
      targetTitle: " 已选表",
      sourceList: dataList,
      targetList: []
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