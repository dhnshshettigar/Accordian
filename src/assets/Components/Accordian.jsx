import data from './data'

import React, { useState } from 'react'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const handleShow = (getCurrentId) => {
        setSelected(selected === getCurrentId ? null : getCurrentId)
    }
    return (
        <div className='Wrapper'>
            <button>Show All</button>
            <div className='accordian'>
                
                <div className='item'>
                    {data.map((dataitem,index) =>
                        <div className='item-container'>
                            <div  key={index} onClick={() => (handleShow(dataitem.id))} className='title'>
                                <h3 >{dataitem.question}</h3>
                                <span>+</span>
                            </div>
                            {dataitem.id === selected ? <div className='content'>{dataitem.answer}</div> : null}
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Accordian
