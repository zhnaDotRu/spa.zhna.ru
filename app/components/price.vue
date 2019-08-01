<template>
  <main class="main" v-if="dataTariff">
    <header class="header" @click="$router.go(-1)">
      <h1 class="header-h1">Тариф "{{dataTariff.title}}"</h1>
      <div class="header-back"></div>
    </header>
    <div class="tariffs">
      <div class="tariff" v-for="(tariff, i) in dataTariff.tarifs" v-bind:key="i">
        <router-link :to="'/tariff/' + $route.params.tId + '/price/' + i" class="tariff-link">
          <p class="tariff-headline">{{tariff.pay_period}} {{declination(tariff.pay_period)}}</p>
          <div class="tariff-info mod-arrow">
            <p class="tariff-info-price">{{tariff.price / tariff.pay_period}} Р/мес </p>
            <p class="tariff-info-description">разовый платёж - {{tariff.price}} Р</p>
            <p class="tariff-info-description" v-if="dataTariff.priceMax * tariff.pay_period - tariff.price">скидка - {{dataTariff.priceMax * tariff.pay_period - tariff.price}} Р</p>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dataTariff: null
    }
  },
  methods: {
    declination(n) {
      if (n > 5) return 'Месяцев';
      if (n > 1) return 'Месяца';
      if (n == 1) return 'Месяц';
    }
  },
  beforeMount() {
    let is = this.$store.state.data[this.$route.params.tId];
    if(is){
      this.dataTariff = is;
    }else{
      this.$router.push('/404');
    }
  }
}
</script>
