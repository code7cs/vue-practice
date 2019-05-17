<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header clearfix">
            <div>
              <div class="checkbox">
                <label>
                  <input
                    :disabled="sourceList.length === 0"
                    type="checkbox"
                    @click="toggleSourceAll()"
                    :checked="selectedSourceAllStatus"
                  >
                  <span>{{sourceTitle}}</span>
                </label>
              </div>
            </div>
            <span>{{selectSourceItemNumber}}/{{sourceList.length}}</span>
          </div>

          <div class="card-body pre-scrollable">
            <ul>
              <li v-for="item in filterSourceList" :key="item.id">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="item.isSelected">
                    {{item.name}}
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <br>
          <div>
            Filter:
            <input type="text" v-model="filterSourceKey">
          </div>
          <br>
        </div>
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
        <div class="card">
          <div class="card-header clearfix">
            <div>
              <div class="checkbox">
                <label>
                  <input
                    :disabled="targetList.length === 0"
                    type="checkbox"
                    @click="toggleTargetAll()"
                    :checked="selectedTargetAllStatus"
                  >
                  <span>{{targetTitle}}</span>
                </label>
              </div>
            </div>
            <span>{{selectTargetItemNumber}}/{{targetList.length}}</span>
          </div>

          <div class="card-body pre-scrollable">
            <ul>
              <li v-for="item in filterTargetList" :key="item.id">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="item.isSelected">
                    {{item.name}}
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <br>
          <div>
            Filter:
            <input type="text" v-model="filterTargetKey">
          </div>
          <br>
        </div>
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
      filterSourceKey: "",
      filterTargetKey: "",
      sourceTitle: " 待选表",
      targetTitle: " 已选表",
      sourceList: dataList,
      targetList: []
    };
  },
  methods: {
    toggleSourceAll() {
      let len = this.sourceList.length;
      let slen = this.sourceList.filter(item => item.isSelected).length;
      if (len !== slen) {
        this.sourceList.map(item => (item.isSelected = true));
      } else {
        this.sourceList.map(item => (item.isSelected = false));
      }
    },

    toggleTargetAll() {
      let len = this.targetList.length;
      let slen = this.targetList.filter(item => item.isSelected).length;
      if (len !== slen) {
        this.targetList.map(item => (item.isSelected = true));
      } else {
        this.targetList.map(item => (item.isSelected = false));
      }
    },

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
    filterSourceList() {
      // `this` points to the vm instance
      var filterKey = this.filterSourceKey;
      //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
      return this.sourceList.filter(
        item => item.name.toLowerCase().indexOf(filterKey.toLowerCase()) != -1
      );
    },
    filterTargetList() {
      // `this` points to the vm instance
      var filterKey = this.filterTargetKey;
      //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
      return this.targetList.filter(
        item => item.name.toLowerCase().indexOf(filterKey.toLowerCase()) != -1
      );
    },

    selectSourceItemNumber() {
      return this.sourceList.filter(item => item.isSelected).length;
    },
    selectTargetItemNumber() {
      return this.targetList.filter(item => item.isSelected).length;
    },
    // 全选状态
    selectedSourceAllStatus() {
      if (
        this.selectItemNumber === this.sourceList.length &&
        this.selectItemNumber !== 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    selectedTargetAllStatus() {
      if (
        this.selectItemNumber === this.targetList.length &&
        this.selectItemNumber !== 0
      ) {
        return true;
      } else {
        return false;
      }
    },

    sourceRefNum() {
      return this.sourceList.filter(item => item.isSelected).length;
    },
    targetRefNum() {
      return this.targetList.filter(item => item.isSelected).length;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.checkbox {
  margin: 0;
}
</style>