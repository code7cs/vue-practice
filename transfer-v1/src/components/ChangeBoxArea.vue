<template>
  <div class="card">
    <div class="card-header clearfix">
      <div>
        <div class="checkbox">
          <label>
            <input
              :disabled="data.length === 0"
              type="checkbox"
              @click="toggleAll()"
              :checked="selectedAllStatus"
            >
            <span>{{title}}</span>
          </label>
        </div>
      </div>
      <span>{{selectItemNumber}}/{{data.length}}</span>
    </div>

    <div class="card-body pre-scrollable">
      <ul>
        <li v-for="item in data" :key="item.id">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="item.isSelected">
              {{item.name}}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div>
      Filter:
      <input type="text" v-model="filterKey">
    </div>-->
  </div>
</template>
<script>
export default {
  name: "ChangeBox",
  props: ["title", "data"],
  computed: {
    // filterSourceList() {
    //   // `this` points to the vm instance
    //   var filterKey = this.filterKey;
    //   var data = this.data;
    //   console.log(this.data);
    //   //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
    //   return data.filter(
    //     item => item.name.toLowerCase().indexOf(filterKey.toLowerCase()) != -1
    //   );
    // },

    // 选择的数量
    selectItemNumber() {
      return this.data.filter(item => item.isSelected).length;
    },
    // 全选状态
    selectedAllStatus() {
      if (
        this.selectItemNumber === this.data.length &&
        this.selectItemNumber !== 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    // 全选及反选
    toggleAll() {
      let len = this.data.length;
      let slen = this.data.filter(item => item.isSelected).length;
      if (len !== slen) {
        this.data.map(item => (item.isSelected = true));
      } else {
        this.data.map(item => (item.isSelected = false));
      }
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