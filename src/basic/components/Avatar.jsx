import React from 'react'

export default function Avatar({image,isNew}) {
    return (
        <div className="avatar">
            {image && <img className="photo" src={image} alt="avatar" />}
            {isNew && <span className="new">New</span>}
        </div>
    )
}