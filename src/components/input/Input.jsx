import React, { useState, useRef, useEffect } from 'react'
import './Input.css'
import ausFlag from '../../resources/ausFlag.png'
import gbFlag from '../../resources/ukFlag.png'
import ausAnthem from '../../resources/ausAnthem.mp3'

const Input = (props) => {
    const { changeBackground } = props

    const [flag, setFlag] = useState(gbFlag)
    const [flip, setFlip] = useState(true)
    const [placeholder, setPlaceholder] = useState('Type some English here!')
    const [audioEl, setAudioEl] = useState(new Audio(ausAnthem))
    const inputEl = useRef(null)
    const imgEl = useRef(null)

    useEffect(() => {
        audioEl.loop = true
        setAudioEl(audioEl)
    }, [audioEl])

    const changeLanguage = () => {
        setFlip(!flip)
        changeBackground(flip)

        inputEl.current.style.setProperty('--transform', `rotateX(${flip ? 180 : 0}deg)`)
        imgEl.current.style.setProperty('--transform', `rotateX(${flip ? 180 : 0}deg)`)

        setTimeout(() => {
            setPlaceholder(flip ? 'Type some Australian here!' : 'Type some English here!')
            setFlag(flip ? ausFlag : gbFlag)
        }, 200)

        flip ? audioEl.play() : audioEl.pause()
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
