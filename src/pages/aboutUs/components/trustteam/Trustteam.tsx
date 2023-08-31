import { FC } from 'react'
import styles from "./index.module.scss";

import HANDS from "../../../../assets/images/hands.png";

const Trustteam: FC = () => {
    return (
        <section className={styles.trust}>
            <div className={styles.container}>
                <div className={styles.trust_img_con}>
                    <img src={HANDS} alt="knt trust" />
                </div>
                <div className={styles.trust_des}>
                    <p className={styles.trust_des_text}>
                        Наша команда гордится своим богатым опытом и экспертизой в сфере коммерческой недвижимости, что позволяет нам эффективно сопровождать наших клиентов на каждом этапе сделки. Мы тщательно отбираем каждый объект недвижимости в соответствии с самыми строгими стандартами качества, чтобы гарантировать вам только самое лучшее.
                    </p>
                    <p className={styles.trust_des_text}>
                        При выборе <span className={styles.highlight}>Коммерческой недвижимости Ташкента</span>, вы получаете надежного партнера, готового сопровождать вас на каждом шагу в реализации ваших бизнес-целей. Мы гарантируем качество, надежность и профессионализм во всех наших действиях.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Trustteam