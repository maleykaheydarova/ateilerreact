import React from 'react'
import ListItem from './ListItem';


const List = ({ classname, heading, items }) => {

    return (
        <ul className={classname}>
            {heading ? <a href="#" className="hover-list-heading">{heading}</a> : null}
            {items?.map((elem, number) => (
                <ListItem item={elem} index={number} />
            ))}
        </ul>
    );
};


export default List
