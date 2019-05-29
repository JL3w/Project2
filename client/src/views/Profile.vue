<template>
  <div class="container" id="profile">
    <Header />
    <div id="profile-info" class="container">
      <h1>Name</h1>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-sm-4 sidenav">
            <div class="card-body">
              <img src="https://image.shutterstock.com/image-illustration/boy-default-placeholder-children-avatar-450w-582509290.jpg" width="200px" height="200px">
            </div>
          </div>
          <div class="col-md-8">
            <h5 class="card-title">Bio</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

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