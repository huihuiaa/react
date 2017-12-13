import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import swiper from './mockData/swiper'
import nav from './mockData/nav'
import list1 from './mockData/list1'
import list2 from './mockData/list2'
import diary from './mockData/diary'
export default {
  bootstrap () {
    const mock = new MockAdapter(axios)
    mock.onGet('/swiper').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, swiper])
      })
    }) 

    mock.onGet('/navList').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, nav])
      })
    }) 

    mock.onGet('/list1').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, list1])
      })
    }) 
    mock.onGet('/list2').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, list2])
      })
    }) 

    mock.onGet('/diary').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, diary])
      })
    }) 
  }
}
