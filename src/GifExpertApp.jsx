import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function GifExpertApp() {
  const [categories, setCategories] = useState(['One punch'])

  //   const handleAdd = () => {
  //     // setCategories(['aaa', ...categories])
  //     setCategories(cats => ['assd', ...cats])
  //   }

  return (
    <>
      <h2>gifexpertapp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp
