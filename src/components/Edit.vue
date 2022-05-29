<template>
  <div class="edit-container">
    <div class="left-aside">
      <span class="back">
        <router-link :to="'/'">
          <span class="back">&#8592;</span>
        </router-link>
      </span>
      <div class="note-title">{{ list.title }}</div>
    </div>
    <div class="todo">
    <ul class="todo__item">
      <li v-for="(todo, index) in list.child" :key="todo.id">
        <input
          v-if="todo.edit"
          v-model="todo.name"
          @blur="todo.edit = false"          
        />
        <span v-else>
          <span @click="todo.edit = true"> {{ todo.name }} </span>
        </span>
        <button v-if="todo.edit" @click="todo.edit = false">Ok</button>
        <button v-if="!todo.edit" @click="todo.edit = true">Edit</button>
        <button 
          type="button" 
          class="btn btn-outline-info" 
          @click="deleteTodo(todo, index)">Remove this row</button>
      </li>
    </ul>
    <form @submit.prevent="createToDoItem">
      
      <button type="submit">Add todo</button>
      <input type="text" v-model="name" />
    </form>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  computed: {
    list() {
      return this.$store.state.notes.find(
        (item) => item.id === parseInt(this.$route.params.id)
      );
    },
  },
  methods: {
    ...mapMutations(["createTodo","deleteTodo"]),
    updateNote() {},
    createToDoItem() {
      const data = {
        parentId: this.$route.params.id,
        child: {
          name: this.name,
          id: Date.now(),
        },
      };
      this.createTodo(data);
    },
    deleteTodo (todo, index) {
      const data = {
        parentIndex: this.$route.params.id, 
        index: index,
        todo: todo
        }
      this.$store.commit('deleteTodo', data)
    }
  },
};
</script>

<style lang="scss" scoped>
.edit-container {
  display: flex;
  flex-direction: row;
  .left-aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: navy;
    color: white;
    height: 100vh;
    width: 250px;
    padding: 0 30px;
    .back {
      margin-top: 100px;
      color: white;
      font-size: xxx-large;
    }
    .note-title {
      font-size: xx-large;
      margin-top: 50px;
    }
  }
  .todo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 100px;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
ul {
    list-style-type: none;
}
</style>