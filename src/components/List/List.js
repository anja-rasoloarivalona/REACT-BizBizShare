import React from 'react'
import './List.css'

const List = props => {
    const list = props.list.length > 0 ?
       (props.list.map((name, index) => (
          <li className="list__item" key={index}>{name}</li>
        ))) 
        : 
        (<div className="list__empty">The list is empty.</div>)
    return (
            <ul className="list">
                {list}
            </ul>
    )
}

export default List
