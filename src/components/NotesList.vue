<template>
  <notes-list-create-new></notes-list-create-new>
  <div class="notes-list">
    <div v-for="item of notes" :key="item.id">
      <div class="note">
        <router-link :to="'/edit/' + item.id">
          <span class="edit">&#9998;</span>
        </router-link>
        <span class="delete">&#10006;</span>
        <div class="note__title">{{ item.title }}</div>
        <div class="todo">
          <div class="todo__item" v-for="child of item.child" :key="child.id">
            <span>{{ child.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotesListCreateNew from "./NotesListCreateNew.vue";

export default {
  components: {
    NotesListCreateNew,
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
    list() {
      return this.$store.state.notes.filter((item) => item);
    },
  },
};
</script>

<style lang="scss" scoped>
.notes-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.note {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 195px;
  margin: 15px;
  background-color: navy;
  color: white;
  padding: 20px;
  border-radius: 14px;
  position: relative;
  &__title {
    font-size: large;
    border-bottom: 1px solid white;
    margin-top: 35px;
  }
  .delete {
    position: absolute;
    right: 20px;
    top: 15px;
    color: steelblue;
    cursor: pointer;
  }
  .edit {
    position: absolute;
    right: 40px;
    top: 15px;
    color: steelblue;
  }
}
.todo {
  display: flex;
  flex-direction: column;
  &__item {
    font-size: smaller;
    margin-top: 25px;
  }
}
</style>