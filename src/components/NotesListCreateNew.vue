<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" placeholder="Type name for new note..."/>
    <button type="submit">Create note</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations(["createNote"]),
    submit() {
      this.createNote({
        title: this.title,
        id: Date.now(),
        child: []
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 50px;
}
input {
    width: 40%;
    height: 20px;
    border-bottom: 2px solid darkblue;
    border-left: none;
    border-top: none;
    border-right: none;
    &:active {
      height: 2730px;
      border: 3px solid lightseagreen;
      margin-right: -6px;
    }
    &:focus {
      height: 27px;
      border: 3px solid lightseagreen;
      margin-right: -6px;
    }
}
button {
    margin-left: 10px;
    height: 35px;
    border-radius: 15%;
    background-color: darkorange;
    color: white;
}
</style>