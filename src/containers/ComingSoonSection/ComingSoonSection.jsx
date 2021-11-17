import React from 'react'
import {ComingSoonWrapper} from './styles'
import Divider from '../../components/Divider/Divider'
import ImageSection5 from '../../assets/ImageSection5.png'

function ComingSoonSection() {
    return (
        <>
        <ComingSoonWrapper>
            <figure>
                <img src={ImageSection5} alt="app icon for Coming soon: Nanny Share Daily Diary!" />
            </figure>
            <h2>Coming soon: Nanny Share Daily Diary!</h2>
            <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
        </ComingSoonWrapper>
        <Divider />
        </>
    )
}

export default ComingSoonSection
