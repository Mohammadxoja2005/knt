import { FC } from 'react'
// components
import Header from '../../layouts/header/Header'
import Slider from './components/slider/Slider'
import Description from './components/description/Description'
import ObjectPrt from './components/objectParameter/ObjectPrt'
import Location from './components/location/Location'

const ObjectCart: FC = () => {
    return (
        <>
            <Header />
            <Slider />
            <Description />
            <ObjectPrt />
            <Location />
        </>
    )
}

export default ObjectCart