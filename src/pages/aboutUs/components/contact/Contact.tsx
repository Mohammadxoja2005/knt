import { FC } from 'react'
import styles from "./index.module.scss";

import Form from '../../../../layouts/form/Form';

const Contact: FC = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.contact_info} >
                    <h2 className={styles.contact_name}>
                        Свяжитесь с нами сегодня
                    </h2>
                    <p className={styles.contact_des}>
                        Чтобы начать вместе строить ваш успешный будущий бизнес в Ташкенте
                    </p>
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Contact