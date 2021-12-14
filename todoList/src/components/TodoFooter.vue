<template>
  <Row v-show="total">
    <Col span="6"
      ><Checkbox v-model="checked"
        >已完成{{ doneToatal }} / 全部{{ total }}</Checkbox
      ></Col
    >
    <Col span="4" offset="14"
      ><Button type="primary" @click="clearDone">清除已完成</Button></Col
    >
  </Row>
</template>

<script>
export default {
  components: {},
  props: {
    todoList: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    total: function () {
      return this.todoList.length;
    },
    doneToatal: function () {
      return this.todoList.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
  },
  methods: {
    clearDone: function () {
      if (confirm("確認清除?")) {
        this.$emit("clear-done");
      }
    },
  },
  watch: {
    checked: function () {
      this.$emit("change-all", this.checked);
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped>
.ivu-btn {
  float: right;
  margin-right: 25px;
}
.ivu-checkbox-wrapper {
  float: left;
  margin-left: 25px;
}
</style>
