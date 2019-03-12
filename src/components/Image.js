import React from 'react'

function Image(props){
const individualImage = (props.imageArray).map((image) => {
    return <img  className="col-6 col-md-4" src={image.urls.regular} key={image.id} alt={image.description}></img>
})

    return(<div>{individualImage}</div>)
}

export default Image;