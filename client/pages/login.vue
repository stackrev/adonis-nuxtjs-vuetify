<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-icon medium color="light darken-2" class="mrg">mdi-account-key-outline</v-icon>
        <v-toolbar-title style="font-size:16px">ورود به داشبورد مدیریتی</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form @keydown.enter="login">
          <v-row align="center" justify="center">
            <v-icon medium color="blue darken-2" class="mrg">mdi-account-card-details-outline</v-icon>
            <v-text-field
              label="نام کاربری"
              name="login"
              type="text"
              class="mrg"
              v-model="username"
            ></v-text-field>
          </v-row>
          <v-row align="center" justify="center">
            <v-icon medium color="blue darken-2" class="mrg">mdi-lock-outline</v-icon>
            <v-text-field
              id="password"
              label="گذرواژه"
              name="password"
              class="mrg"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn @click="login" color="primary">ورود</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "authenticate",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      );
    }
  },
  methods: {
    async login() {
      return this.$auth
        .loginWith("local", {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push("/");
    } else {
      this.$toast.show("برای ورود اطلاعات احراز هویت خود را وارد کنید");
    }
  }
};
</script>

<style lang="scss" scoped>
.mrg {
  margin-left: 5px !important;
  margin-right: 5px !important;
  direction: ltr !important;
}
</style>