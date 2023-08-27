import { FC } from 'react'
import styles from "./index.module.scss";

const Description: FC = () => {
    return (
        <section className={styles.des}>
            <div className={styles.container}>
                Добро пожаловать в <span className={styles.highlight} >Коммерческую недвижимость Ташкента</span> - вашего надежного партнера по продаже и аренде коммерческой недвижимости в самом сердце столицы. Мы являемся ведущей компанией, специализирующейся на предоставлении высококачественных объектов для бизнеса, которые обеспечат вашему предприятию лучшие условия для успешного развития.
            </div>
        </section>
    )
}

export default Description