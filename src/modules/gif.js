import { changeBackgroundImage } from './UI';

export default async function getBackgroundGif(value) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=4exYy9FapyUCkZP3Mybt0De4pEWpEKPi&s=${value}`,
    );
    const data = await response.json();
    changeBackgroundImage(data.data.images.original.url);
  } catch (err) {
    console.log(err);
  }
}
