<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">به پنل مدیریت خوش آمدید</v-card-title>
        <v-card-text>
          <p>یه قالب خفن برای مدیریت وبسایت</p>
          <p>
            از کتابخونه ویوتی فای استفاده شده
            <a
              href="https://vuetifyjs.com"
              target="_blank"
            >اینم داکیومنتش</a>
          </p>
          <p>
            سوالی داری جوین شو
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              title="chat"
            >دیسکورد</a>
          </p>
          <p>
            باگی پیش اومد و خواستی گزارش بدی
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >از این قسمت</a>
          </p>
          <p>با تشکر از شما برای پیشرفت با Vuetify و من مشتاقانه منتظرم تا ویژگی های هیجان انگیز تر در آینده به ارمغان بیاوریم.</p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; جان لیدر</small>
            </em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">دامیومنت خوده ناکتس</a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">اینم گیتهابه ناکتس</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">برو صفحه بعدی</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: "auth",
  components: {}
};
</script>
