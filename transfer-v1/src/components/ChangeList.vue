<template>
  <div class="card">
    <div class="card-header">
      <span>{{ title }}</span>
      <span>{{ selectItemNumber }}/{{ data.length }}</span>
    </div>
    <div class="card-body pre-scrollable">
      <ul>
        <li v-for="item in filterList" :key="item.id">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="item.isSelected">
              <!-- <a @dblclick="setMaskShow"> -->
              {{item.name}}
              <!-- </a> -->
            </label>
          </div>
        </li>
      </ul>
    </div>
    <br>
    <div>
      Filter:
      <input type="text" v-model="filterKey">
    </div>
    <br>
  </div>
</template>
<script>
export default {
  name: "ChangeBox",
  props: ["title", "data"],
  data() {
    return {
      filterKey: ""
      //   maskShow: false
    };
  },
  computed: {
    filterList() {
      var filterKey = this.filterKey;
      var data = this.data;
      // console.log(this.data);
      return data.filter(
        item => item.name.toLowerCase().indexOf(filterKey.toLowerCase()) != -1
      );
    },

    selectItemNumber() {
      return this.data.filter(item => item.isSelected).length;
    }
  },
  methods: {
    // open() {
    //   //   this.maskShow = !this.maskShow;
    //   this.$emit("showbox", true);
    // },
    // setMaskShow() {
    //   this.maskShow = !maskShow;
    // }
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

/* .mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
} */

/* .child button {
  width: 100px;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
/* .child {
  position: fixed;
  width: 300px; */
/* height: 470px; */
/* line-height: 470px; */
/* top: calc(50% - 150px); */
/* left: calc(50% - 150px);
  z-index: 9999;
} */
</style>