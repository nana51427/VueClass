<template>
  <List border>
    <ListItem v-for="(todo, index) in todoList" :key="todo.id">
      <Checkbox v-model="todo.done">{{
        todo.isEdit ? "" : todo.item
      }}</Checkbox>
      <Input
        v-if="todo.isEdit"
        v-model="todoItem"
        @on-blur="onBlur(index)"
        style="width: auto"
        >{{ todo.item }}</Input
      >
      <template slot="action">
        <li>
          <Button type="success" @click="editTodo(todo)">編輯</Button>
        </li>
        <li>
          <Button type="error" @click="deleteTodo(todo.id)">刪除</Button>
        </li>
      </template>
    </ListItem>
  </List>
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
      active: false,
      todoItem: "",
    };
  },
  computed: {},
  methods: {
    editTodo: function (todo) {
      this.todoItem = todo.item;
      this.$emit("editTodo", todo);
    },
    onBlur: function (index) {
      this.$emit("changTodo", index, this.todoItem);
    },
    deleteTodo: function (id) {
      if (confirm("確認刪除?")) {
        this.$emit("deleteTodo", id);
      }
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

<style scoped>
/* .ivu-checkbox-wrapper {
  float: left;
  margin-right: 60%;
} */
</style>
