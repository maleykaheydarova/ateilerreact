import React from 'react'
import { Link } from 'react-router-dom';

const List = ({ classname, heading, items }) => {
    
    return (
        <ul className={classname}>
            {heading ? <a href="#" className="hover-list-heading">{heading}</a> : null}
            {items.map((item, index) => (
                <li key={index}>
                    {typeof item === 'string' ? (
                        <a href='#'>{item}</a>
                    ) : (
                        <Link to={item.anchor} >{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default List
