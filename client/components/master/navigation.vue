<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :mini-variant-width="60"
      :width="200"
      three-line
      bottom
      fixed
      app
      right
    >
      <v-list style="padding:0px">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/user.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="name">{{$auth.user.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="title-font IRANSans" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click.stop="dialog = true">خروج</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" :elevation="24" dense fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon class="icon-bar">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title v-text="title" class="title-font IRANSans" />
      <v-spacer />
      <v-btn icon>
        <v-icon @click.stop="dialog = true">mdi-power-standby</v-icon>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text class="logout-text">برای خروج بله رو کلیک کن</v-card-text>
        <v-card-actions>
          <div class="logout-btn">
            <v-btn color="green darken-1" text @click="dialog = false">بیخیال!</v-btn>
            <v-btn class="logout-yes" color="green darken-1" text @click="logout">آره</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      title: "پنل مدیریت",
      items: [
        {
          icon: "mdi-apps",
          title: "داشبورد",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "دیگر",
          to: "/inspire"
        }
      ]
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.name {
  font-size: 13px !important;
}
.logout-text {
  text-align: center;
  padding-top: 12px !important;
}
.logout-btn {
  width: 100%;
  text-align: center;
}
.logout-yes {
  font-size: initial;
  font-weight: 600 !important;
}
</style>