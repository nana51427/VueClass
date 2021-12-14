<template>
  <div>
    <h1>當前求和為: {{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">當前求和為奇數再加</button>
    <button @click="incrementWait">等一會再加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
      // sum: 0,
      n: 1
    };
  },
  computed: {
    ...mapState(['sum']),
    // sum: function() {
    //   return this.$store.state.sum;
    // }
  },
  methods: {
    increment: function () {
      this.$store.commit('increment', this.n);
    },
    decrement: function () {
      this.$store.commit('decrement', this.n);
    },
    incrementOdd: function () {
      this.$store.dispatch('incrementOdd', this.n);
    },
    incrementWait: function () {
      this.$store.dispatch('incrementWait', this.n);
    }
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
  destroyed() {}
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
