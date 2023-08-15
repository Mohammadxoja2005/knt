import { FC, useEffect } from 'react'
import styles from "./index.module.scss";
// icons
import SLIDERPREV from "../../../../assets/icons/sliderprev.png"
import SLIDERNEXT from "../../../../assets/icons/slidernext.png"
// images
import SLIDEREXAMPLE from "../../../../assets/images/slider_example1.png"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const Slider: FC = () => {
    const prevButtonClass = `offerPr_btn_prev`;
    const nextButtonClass = `offerPr_btn_next`;

    useEffect(() => {
        const activeSlide: any = document.getElementsByClassName('swiper-slide-active');

        function getActiveSlideIndex() {
            const activeSlideIndex = activeSlide[0].getAttribute('data-index');

            return activeSlideIndex;
        }

        const navigations: any = document.querySelectorAll('[data-btn="btn"]');

        const slideIndex = getActiveSlideIndex()
        console.log('only once', slideIndex)

        for (let i = 0; i < navigations.length; ++i) {
            navigations[i].addEventListener('click', () => {
                const slideIndex = getActiveSlideIndex()
                console.log(slideIndex)
            })
        }
    }, [])

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <img data-btn="btn" className={prevButtonClass} src={SLIDERPREV} alt="knt slider prev" style={{ cursor: "pointer" }} />

                <div className={styles.slider_images_con}>
                    <Swiper
                        className={styles.slider_count}
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={{
                            prevEl: `.${prevButtonClass}`,
                            nextEl: `.${nextButtonClass}`,
                        }}
                    >
                        {[1, 2, 3].map((idx) => {
                            return (
                                <SwiperSlide data-index={idx} key={idx}>
                                    <img className={styles.slider_img} src={SLIDEREXAMPLE} alt="" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className={styles.slider_count}>
                        <img className={styles.slider_img} src={SLIDEREXAMPLE} alt="" />
                    </div>
                    <div className={styles.slider_count}>
                        <img className={styles.slider_img} src={SLIDEREXAMPLE} alt="" />
                    </div>

                    <div className={styles.slider_count}>
                        <img className={styles.slider_img} src={SLIDEREXAMPLE} alt="" />
                    </div>

                    <div className={styles.slider_count}>
                        <div className={styles.slider_count_shadow}>
                        </div>
                        <p className={styles.slider_count_text}>+ 100 фотографий</p>
                        <img className={styles.slider_img} src={SLIDEREXAMPLE} alt="" />
                    </div>

                </div>

                <img data-btn="btn" className={nextButtonClass} src={SLIDERNEXT} alt="knt slider next" style={{ cursor: "pointer" }} />
            </div>
        </div>
    )
}

export default Slider