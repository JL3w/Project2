<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <h1>Welcome!</h1>
        <h2>This is our Home Page!</h2>
        <form @submit.prevent="handleFormSubmit" class="clearfix mb-4" action="POST">
          <div class="form-group">
            <label for="example-text">Example Text</label>
            <input v-model="example.text" type="text" id="example-text" class="form-control" aria-describedby="example-text" placeholder="Enter Example Text">
          </div>
          <div class="form-group">
            <label for="example-description">Example Description</label>
            <textarea v-model="example.description" class="form-control" id="example-description" aria-describedby="example-description" placeholder="Enter Example Description"></textarea>
          </div>
          <button type="submit" class="btn btn-primary float-right">Submit</button>
        </form>
        <h3>Examples:</h3>
        <ul id="example-list" class="list-group">
          <li v-for="example in examples" :key="example.id" class="list-group-item">
            <router-link :to="{name: 'example', params: {id: example.id} }">{{example.text}}</router-link>
            <button @click="handleDeleteBtnClick(example.id)" class="btn btn-danger float-right delete">ｘ</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getExamples, saveExample, deleteExample } from '@/services/api';

export default {
  name: 'home',

  data: function() {
    return {
      example: {
        text: '',
        description: ''
      },
      examples: []
    }
  },

  created: function() {
    this.refreshExamples();
  },

  methods: {
    // refreshExamples gets new examples from the db and repopulates the list
    refreshExamples: function() {
      getExamples().then(
        function(data) {
          this.examples = data;
        }.bind(this)
      );
    },

    // handleFormSubmit is called whenever we submit a new example
    // Save the new example to the db and refresh the list
    handleFormSubmit: function() {
      if (!this.example.text || !this.example.description) {
        alert("You must enter an example text and description!");
        return;
      }

      saveExample(this.example).then(
        function() {
          this.example.text = "";
          this.example.description = "";
          this.refreshExamples();
        }.bind(this)
      );
    },

    // handleDeleteBtnClick is called when an example's delete button is clicked
    // Remove the example from the db and refresh the list
    handleDeleteBtnClick: function(idToDelete) {
      deleteExample(idToDelete).then(
        function() {
          this.refreshExamples();
        }.bind(this)
      );
    }
  }
}
</script>

<style>
.list-group-item {
  line-height: 2.5;
}
</style>
