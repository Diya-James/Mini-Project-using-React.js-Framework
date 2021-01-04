import React from 'react'
import "./pictures.css"

const card = ({image}) => {
    return (
        <div>
        <div className="content">
        <img className = "pictures" src = {image.webformatURL} alt = "random-pics"/>
        <div className="content-items">
        <p>Photo By :<strong>{image.user}</strong></p>
        <p>Downloads :<strong>{image.downloads}</strong></p>
        <p>Views :<strong>{image.views}</strong></p>
        </div>
        </div>
      </div>
    )
}

export default card

