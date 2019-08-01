<template>
  <main class="main">
    <header class="header" @click="$router.go(-1)">
      <h1 class="header-h1">Выбор тарифа</h1>
      <div class="header-back"></div>
    </header>
    <div class="tariffs mod-center" v-if="priceDate">
      <div class="tariff">
        <p class="tariff-headline">Тариф "{{priceDate.title.split(' ')[0]}}"</p>
        <div class="tariff-info">
          <p class="tariff-info-price">Период оплаты - {{text(priceDate.title)}} <br> {{priceDate.price / priceDate.pay_period}} Р/мес</p>
          <p class="tariff-info-description">разовый платёж - {{priceDate.price}} Р</p>
          <p class="tariff-info-description">со счёта спишется - {{priceDate.price}} Р</p>
          <p class="tariff-info-description mod-gray">вступит в силу - сегодня</p>
          <p class="tariff-info-description mod-gray">активно до - {{priceDate.new_payday}}</p>
        </div>
        <div class="tariff-button">Выбрать</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      priceDate: null
    }
  },
  methods: {
    text(str) {
      let pos1 = str.indexOf('(') + 1;
      let pos2 = str.indexOf(')', pos1);
      let res = str.substring(pos1, pos2);
      if(res == '') res = '1 месяц';
      return res; 
    },
  },
  beforeMount() {
    let is = this.$store.state.data[this.$route.params.tId] && this.$store.state.data[this.$route.params.tId].tarifs[this.$route.params.id];
    if(is){
      this.priceDate = this.$store.state.data[this.$route.params.tId].tarifs[this.$route.params.id];
    }else{
      this.$router.push('/404');
    }
  }
}
</script>
