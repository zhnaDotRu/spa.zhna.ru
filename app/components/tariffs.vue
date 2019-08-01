<template>
  <main class="main">
    <div class="tariffs">
      <div class="tariff" v-for="(tariff, i) in $store.state.data" v-bind:key="i">
        <router-link :to="'/tariff/' + i" class="tariff-link">
          <p class="tariff-headline">Тариф "{{tariff.title}}"</p>
          <div class="tariff-info mod-arrow ">
            <p :class="isColor(tariff.title)">{{tariff.speed}} Мбит/с</p>
            <p class="tariff-info-price">{{tariff.price}} Р/мес </p>
            <p class="tariff-info-description" v-for="(text, i) in tariff.free_options" v-bind:key="i">{{text}}</p>
          </div>
        </router-link>
        <a :href="tariff.link" class="tariff-sknt-link">узнать подробнее на сайте www.sknt.ru</a>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
    }
  },
  methods: {
    isColor(title) {
      title = title.split(' ');
      switch (title[0]) {
        case 'Вода':
          return 'tariff-info-speed mod-blue';
        case 'Земля':
          return 'tariff-info-speed mod-brown';
        case 'Огонь':
          return 'tariff-info-speed mod-orange';
        default:
          return 'tariff-info-speed';
      }
    }
  },
}
</script>
