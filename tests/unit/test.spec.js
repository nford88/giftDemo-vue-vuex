import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from '../../src/router/index'
import List from '../../src/views/List.vue';
import Detail from '../../src/views/Detail.vue';

import items from './items.json'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter({routes})

const flushPromises = () => new Promise(setImmediate);

describe('Mount the application and load offers', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state : {
        loading: false,
        items: [
          ...items
        ],
      }
    }, )
  })

  it('List component and display offer cards', async () => {
    const wrapper = mount(List, { store, localVue, router })
    const a = wrapper.find('[test-id="offer-card-1180"]');
    expect(a).toBeTruthy();
    a.trigger('click')
    await flushPromises()
  })

  it('Sort and filter the results', async () => {
    const wrapper = mount(List, { store, localVue, router })
    const oldSort = wrapper.findAll('.card-price > h5').at(0).text()
    expect(oldSort).toBe('€ 119.90')
    wrapper.find('#priceSort').trigger('click');
    await flushPromises()
    const newSort = wrapper.findAll('.card-price').at(0).text();
    expect(newSort).toBe('€ 299.90')
  })

  it('Mount Detail view of offer', async () => {
    router.push({ name : 'Detail', params: { id : '1180' }})
    const wrapper = mount(Detail, { store, localVue, router })
    const universe = wrapper.find('.detail-body__universe');
    expect(universe.text()).toBe('Séjour')
  })


});