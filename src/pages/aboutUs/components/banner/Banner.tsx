import { FC } from 'react'
import styles from "./index.module.scss";

const Banner: FC = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h1 className={styles.banner_title}>
                    “Коммерческая недвижимость Ташкента”
                </h1>
                <h2 className={styles.banner_slogan} >
                    Ваш надежный эксперт в мире недвижимости
                </h2>
            </div>
        </section >
    )
}

export default Banner