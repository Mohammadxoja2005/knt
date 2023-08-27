import { FC } from 'react'
import styles from "./index.module.scss";

import ObjectProduct from '../../../../layouts/objectProduct/ObjectProduct';

import { Swiper, SwiperSlide } from 'swiper/react';

const SimilarPost: FC = () => {
    return (
        <section className={styles.post}>
            <div className={styles.container}>
                <h2 className={styles.post_title}>
                    Похожие объявления
                </h2>
                <Swiper
                    slidesPerView={3.4}
                    spaceBetween={16}
                >
                    {[1, 2, 3, 4, 5, 6, 7].map(() => {
                        return (
                            <SwiperSlide>
                                <ObjectProduct />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default SimilarPost