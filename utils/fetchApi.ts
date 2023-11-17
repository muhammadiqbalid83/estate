import axios, { AxiosInstance } from 'axios'

interface ProductionUrl {
  url: string
  headers: {
    'X-RapidAPI-Key': string
    'X-RapidAPI-Host': string
  }
}

const productionUrl: ProductionUrl = {
  url: 'https://bayut.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'd0eddb6ac7msh4e57bdb2c26b1d9p1debeajsn90fa0346cad1',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
}

export const customFetch: AxiosInstance = axios.create({
  baseURL: productionUrl.url,
  headers: productionUrl.headers,
})
