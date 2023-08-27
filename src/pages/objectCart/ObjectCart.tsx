import { FC } from 'react'
// components
import Header from '../../layouts/header/Header'
import Slider from './components/slider/Slider'
import Description from './components/description/Description'
import ObjectPrt from './components/objectParameter/ObjectPrt'
import Location from './components/location/Location'
import SimilarPost from './components/similarPost/SimilarPost'
import Footer from '../../layouts/footer/Footer'

const ObjectCart: FC = () => {
    return (
        <>
            <Header />
            <Slider />
            <Description />
            <ObjectPrt />
            <Location />
            <SimilarPost />
            <Footer />
        </>
    )
}

export default ObjectCart