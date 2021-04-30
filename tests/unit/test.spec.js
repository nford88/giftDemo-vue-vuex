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
    })
  })

  it('List component and display offer cards', async () => {
    const wrapper = mount(List, { store, localVue, router })
    const a = wrapper.find('a'); //finds an `a` element        
    expect(a.attributes().href).toBe('#/1180')
  })

  it('Mount Detail view of offer', async () => {
    router.push({ name : 'Detail', params: { id : '1180' }})
    const wrapper = mount(Detail, { store, localVue, router })
    const universe = wrapper.find('.detail-body__universe');
    expect(universe.text()).toBe('Séjour')
  })
});