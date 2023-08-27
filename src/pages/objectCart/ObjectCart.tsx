import { FC } from 'react'
// components
import Header from '../../layouts/header/Header'
import Slider from './components/slider/Slider'
import Description from './components/description/Description'

const ObjectCart: FC = () => {
    return (
        <>
            <Header />
            <Slider />
            <Description />
        </>
    )
}

export default ObjectCart