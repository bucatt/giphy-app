const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=SC2ZXHpTc3k3sKK5V5jPnBpTwfm9pElY`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  return gifs
}

export default getGifs
