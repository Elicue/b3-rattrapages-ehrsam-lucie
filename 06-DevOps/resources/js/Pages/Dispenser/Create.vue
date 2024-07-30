<template>
  <form @submit.prevent="create">
    <div>
      <div>
        <label>name</label>
        <input v-model="form.name" type="text" placeholder="Dispenser name"/>
        <div v-if="form.errors.name">
          {{ form.errors.name }}
        </div>
      </div>
      <div>
        <label>location</label>
        <input v-model="form.location" type="text" placeholder="Dispenser location"/>
      </div>
      <div>
        <label for="status-select">status : {{ selected }}</label>
        <select name="status" v-model="form.status" id="status-select">
          <option disabled value="">--Please choose an option--</option>
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
  import {useForm} from '@inertiajs/inertia-vue3'

  const form = useForm({
    name: '' ,
    location: '',
    status: '',
  })

  const create = () => form.post('/dispenser')

</script>