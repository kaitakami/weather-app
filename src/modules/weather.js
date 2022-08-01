// Weather API
// da410984cfdefc7c828acace9913c932
// 'http://api.openweathermap.org/data/2.5/forecast?id=[location]&appid=da410984cfdefc7c828acace9913c932'

const unit = 'metric' // This should change, create addEventListener

export default async function getWeather(location, unit) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da410984cfdefc7c828acace9913c932&units=${unit}`)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}