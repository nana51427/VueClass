<template>
  <div id="app">
    <Row type="flex" justify="center" class="row">
      <Col span="12"><TodoInput @add-todo="addTodo"></TodoInput></Col>
    </Row>
    <Row type="flex" justify="center" class="row">
      <Col span="12"
        ><TodoList
          :todoList="todoList"
          @editTodo="editTodo"
          @changTodo="changeTodo"
          @deleteTodo="deleteTodo"
        ></TodoList
      ></Col>
    </Row>
    <Row type="flex" justify="center" class="row">
      <Col span="12"
        ><TodoFooter
          :todoList="todoList"
          @change-all="changeAll"
          @clear-done="clearDone"
        ></TodoFooter
      ></Col>
    </Row>
  </div>
</template>

<script>
import "view-design/dist/styles/iview.css";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    TodoFooter,
  },
  props: {},
  data() {
    return {
      todoList: [],
    };
  },
  computed: {},
  methods: {
    addTodo: function (todoItem) {
      this.todoList.push(todoItem);
    },
    editTodo: function (todo) {
      this.todoList[this.todoList.indexOf(todo)].isEdit = true;
    },
    changeTodo: function(index, todoItem) {
      this.todoList[index].item = todoItem;
      this.todoList[index].isEdit = false;
    },
    deleteTodo: function (id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    changeAll: function (checked) {
      this.todoList.forEach((todo) => (todo.done = checked));
    },
    clearDone: function () {
      this.todoList = this.todoList.filter((todo) => !todo.done);
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

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
.row {
  margin-top: 10px;
}
</style>
