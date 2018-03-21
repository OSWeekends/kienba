import Vue from 'vue'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(App)
    vm = new cmp({
      data: {
        messages: ['Cat']
      }
    }).$mount()
  })

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  })
})
