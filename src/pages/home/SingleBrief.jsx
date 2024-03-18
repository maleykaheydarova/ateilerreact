import React from 'react'

const SingleBrief = ({item}) => {
    return (
        <div className="col-12 col-md-4 mb-5 mb-md-0">
            <div className="brief">
                <i className={item.icon}></i>
                <p className="brief-title">{item.title}</p>
                <p className="brief-little">
                    {item.little}
                </p>
            </div>
        </div>
    )
}

export default SingleBrief