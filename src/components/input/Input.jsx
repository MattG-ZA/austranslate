import React, { useState, useRef } from 'react'
import './Input.css'
import ausFlag from '../../resources/australia-flag-square-icon-64.png'
import gbFlag from '../../resources/united-kingdom-flag-square-icon-64.png'

const Input = () => {
    const [flag, setFlag] = useState(ausFlag);
    const inputEl = useRef(null);
    const imgEl = useRef(null);

    const changeLanguage = () => {
        inputEl.current.style.setProperty('--transform', `rotateX(${flag === ausFlag ? 180 : 0}deg)`)
        imgEl.current.style.setProperty('--transform', `rotateX(${flag === ausFlag ? 180 : 0}deg)`)
        setTimeout(() => {
            flag === ausFlag ? setFlag(gbFlag) : setFlag(ausFlag)
        }, 200)
    }

    return (<span>
        <input
            ref={inputEl}
            className='input'
            placeholder='Type some English here...'
        />
        <img
            ref={imgEl}
            className='button'
            src={flag}
            alt={'flag'}
            onClick={changeLanguage}
        />
    </span>)
}

export default Input;
