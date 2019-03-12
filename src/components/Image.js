import React from 'react'

function Image(props){
const individualImage = (props.imageArray).map((image) => {
    return <img src={image.urls.regular} key={image.id} alt={image.description}></img>
})

    return(<div className="col">{individualImage}</div>)
}

export default Image;