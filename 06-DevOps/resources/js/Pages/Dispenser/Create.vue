<template>
  <form>
    <div>
      <div>
        <label>name</label>
        <input type="text" />
      </div>
      <div>
        <label>location</label>
        <input type="text" />
      </div>
      <div>
        <label for="status-select">status</label>
        <select name="status" id="status-select">
          <option value="">--Please choose an option--</option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
          <option value="pending">pending</option>
        </select>
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
label {
  margin-right: 2em;
}

div {
  padding: 2px
}
</style>

<script setup>
  import {reactive} from 'vue'

  const form = reactive({
    name: '',
    location: '',
    status: ''
  })
  
</script>