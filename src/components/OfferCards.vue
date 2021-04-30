<template>
  <div class="card h-100 offer-card" :test-id="`offer-card-${offer.id}`" @click="() => viewDetail()">
      <img class="card-img-top" :src="offer.gallery.listing" alt="">
      <div class="card-body">
        <h4 class="card-title">
              {{ offer.name }}             
        </h4>
        <p class="card-text">{{ offer.universe.name }}</p>
        <p class="card-text card-desc">{{ offer.shortDescription }}</p>
        <div class="card-price">
          <h5>{{ currencyConverter(offer.currency)}} {{ offer.price }}</h5>
        </div>
      </div>
      <div class="card-footer">
        <small v-if="offer.showRating" class="text-muted">
        {{offer.reviewsCount}} reviews
        </small>
        <small v-else class="text-muted">
        Rating unavailable</small>
      </div>
  </div>
</template>


<script>

import currencyConverter from '../utils/helper'

export default {
  name: 'OfferCards',
  props: {
    offer: {},
  },
  data() {
    return {
      currencyConverter
    };
  },
  methods:{
    viewDetail() {
      return this.$router.push({ name : 'Detail', params: { id : '1180' }})
    }
  }
}
</script>

<style lang="scss" scoped>

$orange: #FE5816;

.offer-card {
  &:hover {
    cursor: pointer;
    border: 1px solid $orange {
    }
    h4 {
    color: $orange
    }
  }
  .card-title {
    min-height: 60px;
  }

  .card-desc {
    max-height: 120px
  }
}
</style>