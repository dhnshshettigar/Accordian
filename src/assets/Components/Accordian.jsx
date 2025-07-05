import data from './data'

import React, { useState } from 'react'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [multiSelected, setMultiSelected] = useState(false)
    const handleShow = (getCurrentId) => {
        setSelected(selected === getCurrentId ? null : getCurrentId)
        setMultiSelected(null)
    }
    return (
        <div className='Wrapper'>
            <button onClick={
                ()=>{
                    setMultiSelected(!multiSelected)
                    setSelected(null)
                }
            } >Show All</button>
            <div className='accordian'>
                
                <div className='item'>
                    {data.map((dataitem) =>
                        <div className='item-container'  key={dataitem.id} >
                            <div onClick={() => (handleShow(dataitem.id))} className='title'>
                                <h3 >{dataitem.question}</h3>
                                <span>+</span>
                            </div>
                            {dataitem.id === selected ? <div className='content'>{dataitem.answer}</div> : null}
                            {multiSelected ? <div className='content'>{dataitem.answer}</div> : null}
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Accordian
