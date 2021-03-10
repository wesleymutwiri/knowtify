<template>
  <v-card class="mx-auto" width="max-content">
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.href"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn icon @click.stop="mini = !mini" v-if="mini">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn icon @click.stop="mini = !mini" v-else>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Editor", icon: "mdi-home-city", href: "/editor" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: true
    };
  }
};
</script>
