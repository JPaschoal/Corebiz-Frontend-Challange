import axios from 'axios'

const productApi = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1/'
})

export default productApi