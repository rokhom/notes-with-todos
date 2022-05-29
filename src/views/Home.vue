<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NotesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotesList from '@/components/NotesList.vue'

export default {
  name: '',
  components: {
    NotesList
  }
}
</script>
