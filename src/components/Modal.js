import React from 'react'

const Modal = ({open, onClose, message}) => {
    if(!open){
        return null
    }
    return (
        <div onClick={onClose} className='modalBG'>
            <div className='pinkContainer modal'>
                <p onClick={onClose}>X</p>
                <h3>{message}</h3>
            </div>
        </div>
        
    )
}

export default Modal