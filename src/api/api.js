import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
    "API-KEY": "1892e245ac9d72bd2babaffbf3d60ef1"
  }
})

const nameInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
  headers: {
    "API-KEY": "1892e245ac9d72bd2babaffbf3d60ef1"
  }
})

export const getCurrentLocationWeather = async (lat, lon) => {
  try {
    return await instance.get(`weather?lat=${lat}&lon=${lon}&appid=1892e245ac9d72bd2babaffbf3d60ef1`)
      .then(res => res.data)
  } catch (e) {
    console.log(e)
  }
}

export const getDiapasonLocationWeather = async (lat, lon) => {
  try {
    return await instance.get(`forecast/?lat=${lat}&lon=${lon}&appid=1892e245ac9d72bd2babaffbf3d60ef1`)
      .then(res => {
        return res.data.list.filter(el => el.dt <= (Date.now() / 1000 + 180*360))
      })
  } catch (e) {
    console.log(e)
  }
}

export const getLocationByName = async country => {
  try {
    return await nameInstance.get(`direct?q=${country}&limit=5&appid=1892e245ac9d72bd2babaffbf3d60ef1`)
      .then(res => res.data[4])
  } catch (e) {
    console.log(e)
  }
}
