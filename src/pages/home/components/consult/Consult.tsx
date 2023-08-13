import { FC } from 'react'
import styles from "./index.module.scss";
// icons
import FREE from "../../../../assets/icons/free.png";
// layouts
import Form from '../../../../layouts/form/Form';

const Consult: FC = () => {
    return (
        <section className={styles.consult}>
            <div className={styles.container}>
                <div className={styles.consult_info}>
                    <div className={styles.consult_title_con}>
                        <h2 className={styles.consult_title}>Бесплатная консультация</h2>
                        <img src={FREE} alt="free consulting icon" />
                    </div>
                    <h3 className={styles.consult_des}>Оставьте заявку на консультацию или позвлоните по номеру +998 94 664 66 61</h3>
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Consult