<template>
  <div class="main">
    <div @click="openMask">Open the window</div>
    <dialog-bar
      v-model="sendVal"
      type="danger"
      title="I am title"
      content="I am content"
      v-on:cancel="clickCancel()"
      @danger="clickDanger()"
      @confirm="clickConfirm()"
      dangerText="Delete"
    ></dialog-bar>
  </div>
</template>

<script>
import dialogBar from "./dialog.vue";
export default {
  name: "Main",
  components: {
    "dialog-bar": dialogBar
  },
  data() {
    return {
      sendVal: false
    };
  },
  methods: {
    openMask(index) {
      this.sendVal = true;
    },
    clickCancel() {
      console.log("点击了取消");
    },
    clickDanger() {
      console.log("这里是danger回调");
    },
    clickConfirm() {
      console.log("点击了confirm");
    }
  }
};
</script>
<style lang="less" scoped>
</style>