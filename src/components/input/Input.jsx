import React, { useState, useRef } from 'react'
import './Input.css'
import ausFlag from '../../resources/australia-flag-square-icon-64.png'
import gbFlag from '../../resources/united-kingdom-flag-square-icon-64.png'

const Input = (props) => {
    const { changeBackground } = props

    const [flag, setFlag] = useState(gbFlag)
    const [flip, setFlip] = useState(true)
    const [placeholder, setPlaceholder] = useState('Type some English here!')
    const inputEl = useRef(null)
    const imgEl = useRef(null)

    const changeLanguage = () => {
        setFlip(!flip)
        inputEl.current.style.setProperty('--transform', `rotateX(${flip ? 180 : 0}deg)`)
        imgEl.current.style.setProperty('--transform', `rotateX(${flip ? 180 : 0}deg)`)
        setTimeout(() => {
            setPlaceholder(flip ? 'Type some Australian here!' : 'Type some English here!')
            setFlag(flip ? ausFlag : gbFlag)
        }, 200)
        changeBackground(flip)
    }

    return (<span>
        <input
            ref={inputEl}
            className='input'
            placeholder={placeholder}
        />
        <img
            ref={imgEl}
            className='button'
            src={flag}
            alt={'flag'}
            onClick={changeLanguage}
            title={'Translate!'}
        />
    </span>)
}

export default Input;
