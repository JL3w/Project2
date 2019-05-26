<template>
  <div class="container" id="profile">
    <Header />
    <LoadoutCard />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadoutCard from '@/components/LoadoutCard';


export default {
  name: 'profile',

}
</script>

<style>
.list-group-item {
  line-height: 2.5;
}
</style>