async function getBackgroundGif(value) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=4exYy9FapyUCkZP3Mybt0De4pEWpEKPi&s=${value}`)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

// getBackgroundGif('sunny')