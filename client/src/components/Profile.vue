<template>
     <v-layout column>
        <v-flex>
            <div v-if="profile" :key="profile.name">
                <Panel :title='profile.name'>
                 <img :src="profile.picture">
                 <p>{{ profile.email }}</p>
                </Panel>
                <br>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import Loadout from '@/components/Loadouts';
export default {
    name: "Profile",
    components: {
        Panel
    },
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
  }
};
</script>