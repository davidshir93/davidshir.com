import React from 'react'
import './SavingAnimation.css'
import { useSpring, animated } from 'react-spring'

const SavingAnimation = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return (
        <animated.div style={props}>
                <div className="savingAnimation">
                    <h1>I'm Saving Now!!!"</h1>
                </div>    
        </animated.div>
    )
}

export default SavingAnimation
