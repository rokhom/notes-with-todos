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
          <input v-if="todo.edit" v-model="todo.name" @blur="todo.edit = false" />
          <span v-else>
            <span @click="todo.edit = true"> {{ todo.name }} </span>
          </span>
          <button v-if="todo.edit" @click="todo.edit = false"><span class="edit">&#10003;</span></button>
          <button v-if="!todo.edit" @click="todo.edit = true"><span class="edit">&#9998;</span></button>
          <button type="button" class="btn btn-outline-info" @click="deleteTodo(todo, index)"><span
              class="delete">&#10005;</span></button>
        </li>
      </ul>
      <form @submit.prevent="createToDoItem">
        <input type="text" v-model="name" />
        <button type="submit"><span class="add">&#43;</span></button>

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
    ...mapMutations(["createTodo", "deleteTodo"]),
    updateNote() { },
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
    deleteTodo(todo, index) {
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

  li {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;

    input {
      border: none;
      border-bottom: 1px solid lightgrey;

      &:focus {
        border: none;
        border-bottom: 1px solid grey;
        outline: none;
      }
    }

    button {
      margin-left: 5px;
      border: none;
      background-color: white;
      color: lightsteelblue;
    }
  }
}

form {
  display: flex;
  align-items: flex-start;

  button {
    margin-left: 5px;
    border: none;
    background-color: white;
    color: lightsteelblue;

    .add {
      font-size: 1rem;
    }
  }

  input {
    border: none;
    border-bottom: 1px solid lightgrey;

    &:focus {
      border: none;
      border-bottom: 1px solid grey;
      outline: none;
    }
  }
}
</style>