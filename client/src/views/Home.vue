<template>
  <div class="container" id="home">
    <Header />
    <NewLoadout />
    <Footer />
  </div>
</template>

<script>
import { getExamples, saveExample, deleteExample } from '@/services/api';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadoutCard from '@/components/LoadoutCard';
import NewLoadout from '@/views/NewLoadout';

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    LoadoutCard,
    NewLoadout

  },
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
