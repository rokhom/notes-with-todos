import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      notes: [
        {
          id: 1, title: 'First of notes ', child: [
            { id: 1, name: 'code', completed: false },
            { id: 2, name: 'let this project work', completed: false },
            { id: 3, name: 'go git', completed: false }
          ]
        },
        {
          id: 2, title: 'Second note with very long name long name long name', child: [
            { id: 1, name: 'make layout to be ok', completed: false },
            { id: 2, name: 'create some todo item', completed: false },
            { id: 3, name: 'something', completed: false },
            { id: 4, name: 'something else', completed: false },
            { id: 5, name: 'have fun', completed: false },
          ]
        },
        {
          id: 3, title: 'Third one', child: [
            { id: 1, name: 'find new cool job', completed: false },
            { id: 2, name: 'fun again', completed: false },
          ]
        },     
      ]
    }
  },
  mutations: {
    createNote(state, newNote) {
      state.notes.unshift(newNote)
    },
    createTodo(state, data) {
      const defineParent = state.notes.find(item => item.id == data.parentId)
      defineParent.child.push(data.child)
    },
    deleteTodo(state, data) {
      const defineParent = state.notes.find(item => item.id == data.parentIndex)
      let foundIndex = state.notes.findIndex((element) => element.id === defineParent.id)
      let todos = defineParent.child.filter((item) => {
        return item.id != data.todo.id
      })
      state.notes[foundIndex].child = todos
    }
  },
  modules: {
  }
})
