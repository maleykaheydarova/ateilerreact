import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
    return (
        <li>
            {typeof item === 'string' ? (
                <a href='#'>{item}</a>
            ) : (
                <Link to={item.anchor} >{item.label}</Link>
            )}
        </li>
    )
}

export default ListItem