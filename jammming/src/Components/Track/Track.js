import React from 'react'
import './Track.css'

const renderAction = () => {
    return (
        <button className="Track-action">{ isRemoval ? '-' : '+' }</button>
    )
}

const Track = () => {
    return (
        <div class="Track">
            <div class="Track-information">
                {/* <h3><!-- track name will go here --></h3> */}
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            </div>
            {/* <button class="Track-action"><!-- + or - will go here --></button> */}
            {renderAction}
        </div>
    )
}

export default Track
