<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">Example</h5>
            <p>
              <strong>ID</strong>: {{example.id}}</p>
            <p>
            <p>
              <strong>Text</strong>: {{example.text}}</p>
            <p>
              <strong>Description:</strong> {{example.description}}</p>
              <router-link :to="{name: 'home'}">← Back To Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getExample } from '@/services/api';

export default {
  name: 'example',

  data: function() {
    return {
      example: {
        id: '',
        text: '',
        description: ''
      }
    }
  },

  created: function() {
    getExample(this.$route.params.id).then(
      function(example) {
        this.example = example;
      }.bind(this)
    );
  }
}
</script>
