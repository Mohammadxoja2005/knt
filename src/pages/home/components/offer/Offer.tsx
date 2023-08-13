import { FC } from 'react'
import styles from "./index.module.scss";
import FIRE from "../../../../assets/icons/fire.png"
import OfferProduct from '../../../../layouts/offerProduct/OfferProduct';

const Offer: FC = () => {
    return (
        <section className={styles.offer}>
            <div className={styles.container}>
                <div className={styles.offer_info}>
                    <div className={styles.offer_title_con}>
                        <h2 className={styles.offer_title}>Предложения дня</h2>
                        {[1, 2, 3].map(() => {
                            return (
                                <img src={FIRE} alt="hot offer of today" />
                            )
                        })}

                    </div>
                    <p className={styles.offer_des}>Мы подобрали для Вас самые актуальные и выгодные предложения</p>
                </div>

                <div className={styles.offer_list}>
                    {[1, 2, 3].map((idx) => {
                        return (
                            <OfferProduct keyIndex={idx} />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Offer