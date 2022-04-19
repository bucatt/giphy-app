import React from 'react'
import PropTypes from 'prop-types'
import 'animate.css'

function GifGridItem({ title, id, url }) {
  console.log(title, id)

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem
