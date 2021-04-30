<template>
  <div class="detail">
    <div class="back-to-list">
      <router-link to="/">Back to list</router-link>
    </div>
    <div class="container">
      <div v-if="Object.entries(selectedItem).length == 0"
        class="detail-error">
        <h4>Sorry there seems to be an error, click back and try again</h4>
      </div>
      <div v-else
        class="detail-body">
        <div class="row">
          <div class="col-md-5 order-md-2">
            <h2 class="featurette-heading">{{ selectedItem.name}}</h2>
            <p class="lead">{{selectedItem.shortDescription}}</p>
            <p class="lead">{{selectedItem.subtitle}}</p>
            <h5>{{currencyConverter(selectedItem.currency)}} {{ selectedItem.price }}</h5>
            <li class="detail-body__universe">{{ selectedItem.universe.name }} </li>
          </div>
          <div class="col-md-7 order-md-1">
    <transition name="fade">
            <img class="featurette-image img-fluid mx-auto" :alt="selectedItem.name" style="width: 500px; height: 500px;" :src="selectedItem.gallery.items[0]">
    </transition>
          </div>
        </div>
        <div class="row">
          <div class="detail-body__lower">
            <p>{{ selectedItem.description }}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import currencyConverter from '../utils/helper'
export default {
  name: 'Detail',
  data(){
    return {
    currencyConverter
    }
  },
  computed: {
    ...mapState({items: 'items'}),
    selectedItem(){
      return Object.assign({}, ...this.items.filter(item => this.$route.params.id == item.id));
    }
  },
}
</script>

<style lang="scss" scoped>
/* write SCSS here */


.about{
  pre {
    text-align: left;
  }
}

.detail-body {
  &__universe {
    list-style-type:none
  }
  &__category-list {
    list-style-type:none
  }
}

.back-to-list {
  margin-bottom: 25px;
  a {
    border: 1px solid blue;
    padding: 5px;
  }
}
</style>
