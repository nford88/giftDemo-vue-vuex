<template>
  <div class="card h-100">
      <router-link :to="{ 'path' : '/' + offer.id }">
        <img class="card-img-top" :src="offer.gallery.listing" alt="">
      </router-link>
      <div class="card-body">
        <h4 class="card-title">
            <router-link :to="{ 'path' : '/' + offer.id }">
              {{ offer.name }}             
            </router-link>
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
}
</script>

<style lang="scss" scoped>
.card-title {
   min-height: 60px;
}

.card-desc {
  max-height: 120px
}
</style>