<template>
  <Input
    v-model="value"
    @on-keyup.enter="addTodo"
    placeholder="請輸入待辦事項"
  ></Input>
</template>

<script>
function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default {
  components: {},
  props: {},
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  methods: {
    addTodo: function () {
      if (this.value.trim()) {
        this.$emit("add-todo", {
          id: uuid(),
          item: this.value,
          done: false,
          isEdit: false,
        });

        this.value = "";
        return;
      }
      this.$Message.warning('請輸入待辦事項');
    },
  },
  watch: {},
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

<style scoped></style>
