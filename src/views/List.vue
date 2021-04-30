

<template>
  <div class="list">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <!-- Filters -->
        <div class="col-lg-3">
          <h1 class="my-4">Smartbox</h1>
          <div class="list-group">
            <div class="list-group-item">
              <h5>Search</h5>
              <div class="form-check">
                <div class="input-group mb-3">
                  <input v-model="filteredText" type="text" class="form-control" 
                    placeholder="Search offers..." aria-label="search" aria-describedby="basic-addon2" >
                  <button @click=" () => filteredText = ''" class="btn btn-outline-secondary" type="button" id="button-addon2">X</button>
                </div>
              </div>
            </div>
            <div class="list-group-item filter-checkbox-container">
              <h5>Filter</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="priceSort"
                  :checked="sortMethod.type == 'price'" 
                  @click="sortMethod.type = 'price'">
                <label class="form-check-label" for="priceSort">
                Price
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="reviewSort"
                  :checked="sortMethod.type == 'reviews'" 
                  @click="sortMethod.type = 'reviews'">
                <label class="form-check-label" for="reviewSort">
                Reviews
                </label>
              </div>
            </div>
            <div class="list-group-item">
              <h5>Sort</h5>
              <button @click="sortMethod.asc = !sortMethod.asc" class="sort-button">
              <span v-if="sortMethod.asc" ><i class="bi bi-arrow-up"/>Low to High</span>
              <span v-else ><i class="bi bi-arrow-down" />High to Low</span>
              </button>
            </div>
          </div>
        </div>
        <!-- End Filters -->
        <!-- Cards -->       
        <div class="col-lg-9">
          <div class="spinner-container">
            <spinner v-if="loading" />
          </div>
          <div class="row" v-if="!loading && sortAndFilteredItems.length > 0">
            <div class="col-lg-4 col-md-6 mb-4"
              v-for="offer in sortAndFilteredItems" :key="offer.id">
              <offer-cards :offer="offer"/>
            </div>
          </div>
          <div class="filter-error__container" v-if="!loading && sortAndFilteredItems.length == 0">
            <h4 class="filter-error__text"> Sorry, there are no items matching that filter. Please <a href=# @click=" () => filteredText = ''">click here</a> to clear and try again.</h4
            >
          </div>
        </div>
        <!-- End Cards -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Spinner from '../components/Spinner'
import OfferCards from '../components/OfferCards'
import { accentsHelper } from '../utils/helper.js'

export default {
  name: 'List',
  components: {
    Spinner,
    OfferCards
  },
  mounted(){
  },
  data(){
    return {
      sortMethod: {
        type: 'reviews',
        asc: false,
      },
      filteredText:'',
    }
  },
  computed: {
    ...mapState({items: 'items', loading: 'loading'}),
    sortAndFilteredItems() {
      const { type, asc } = this.sortMethod;
      const filtered = this.filteredText.toLowerCase();
      const tmpArr = this.items;
      let sortAndFilteredItems = [...tmpArr];

      if (type == 'price') {
        sortAndFilteredItems = sortAndFilteredItems.sort((a,b) => {
          const fa = a.price, fb = b.price;
          return asc ? (fa-fb) : (fb-fa) ;
        })
      }
      if (type == 'reviews') {
        sortAndFilteredItems = sortAndFilteredItems.sort((a,b) => {
          const fa = a.reviewsCount, fb = b.reviewsCount;
          return asc ? (fa-fb) : (fb-fa) ;
        })
      }
      return sortAndFilteredItems.filter((item) => {
         const removeAcc = accentsHelper(item.name.toLowerCase());
         return removeAcc.match(filtered);
      });
    },
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

.filter-checkbox-container {
   .form-check {
      text-align: left;
      margin-left:45px
   } 
}

.filter-error {
   &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 100px;
   }
}

</style>