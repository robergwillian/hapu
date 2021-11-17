import React from 'react'

function NewsLetterForm() {
    return (
        <div>
            <input type="text" name="name" placeholder="Your name"/>
            <input type="email" name="email" placeholder="Your email"/>
            <input type="button" value="Send" />
        </div>
    )
}

export default NewsLetterForm
