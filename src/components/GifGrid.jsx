import React from 'react'
import PropTypes from 'prop-types'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

function GifGrid({ category }) {
  const { data: imgs, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && <h3>Loading...</h3>}
      <div className="card-grid">
        {imgs.map(img => (
          <GifGridItem key={img.id} title={img.title} id={img.id} url={img.url} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
