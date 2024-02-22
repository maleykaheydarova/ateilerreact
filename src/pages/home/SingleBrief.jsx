import React from 'react'

const SingleBrief = ({item}) => {
    return (
        <div class="col-12 col-md-4 mb-5 mb-md-0">
            <div class="brief">
                <i class={item.icon}></i>
                <p class="brief-title">{item.title}</p>
                <p class="brief-little">
                    {item.little}
                </p>
            </div>
        </div>
    )
}

export default SingleBrief