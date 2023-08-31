import { FC } from 'react'
import styles from "./index.module.scss";

import { caraousel } from '../../../../data/data';

const Partner: FC = () => {
    return (
        <section className={styles.partner}>
            <div className={styles.container}>
                <div className={styles.partner_info}>
                    <h2 className={styles.partner_title}>
                        Наши успешные друзья
                    </h2>
                    <p className={styles.partnet_des}>
                        Компании которым мы успешно помогаем реализовывать свой бизнесс на територии Ташкента
                    </p>
                </div>
            </div>
            <div className={styles.carousel}>
                <div className={styles.carousel_track_first}>
                    {caraousel.map((slider) => {
                        return (
                            <div key={slider.id} className={styles.carousel_slider} >
                                <img src={slider.image} alt="knt partner img" />
                            </div>
                        )
                    })}
                </div>
            </div> 

            <div className={styles.carousel}>
                <div className={styles.carousel_track_last}>
                    {caraousel.map((slider) => {
                        return (
                            <div key={slider.id} className={styles.carousel_slider} >
                                <img src={slider.image} alt="knt partner img" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Partner