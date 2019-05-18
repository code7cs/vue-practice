<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <span>{{ sourceTitle }}</span>
            <span>{{selectSourceItemNumber}}/{{sourceList.length}}</span>
          </div>

          <div class="card-body pre-scrollable">
            <ul>
              <li v-for="item in filterSourceList" :key="item.id">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="item.isSelected">
                    <a ondblclick="location='//www.jb51.net'">{{item.name}}</a>
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

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <span>{{targetTitle}}</span>
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
let dataList = Array.from({ length: 100 }, (v, index) => ({
  id: index,
  isSelected: false,
  name: ` tableName ${index + 1}`
}));
// console.log(dataList);

export default {
  data() {
    return {
      filterSourceKey: "",
      filterTargetKey: "",
      sourceTitle: " 待选表 ",
      targetTitle: " 已选表 ",
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
    filterSourceList() {
      var filterKey = this.filterSourceKey;
      return this.sourceList.filter(
        item => item.name.toLowerCase().indexOf(filterKey.toLowerCase()) != -1
      );
    },
    filterTargetList() {
      var filterKey = this.filterTargetKey;
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