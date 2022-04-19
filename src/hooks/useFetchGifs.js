import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then(imgs => {
      setState({ data: imgs, loading: false })
      console.log(imgs)
    })
  }, [category])

  return state
}

export default useFetchGifs
