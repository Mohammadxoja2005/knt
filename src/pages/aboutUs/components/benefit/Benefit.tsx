import { FC } from 'react'
import styles from "./index.module.scss"

import BEST1 from "../../../../assets/icons/best1.png"
import BEST2 from "../../../../assets/icons/best2.png"
import BEST3 from "../../../../assets/icons/best3.png"
import BEST4 from "../../../../assets/icons/best4.png"

const Benefit: FC = () => {
    return (
        <section className={styles.benefit}>
            <div className={styles.container}>
                <h2 className={styles.benefit_name}>
                    Почему с нами лучше?
                </h2>

                <div className={styles.benefit_list}>
                    <div className={styles.benefit_itself}>
                        <h3 className={styles.benefit_itself_name}>Выгодные условия</h3>
                        <div className={styles.benefit_img_con}>
                            <img className={styles.benefit_img} src={BEST1} alt="knt benefit" />
                        </div>
                        <h4 className={styles.benefit_itself_des}>Наша компания предлагает самые выгодные условия для Вас и Вашего бизнеса</h4>
                    </div>
                    <div className={styles.benefit_itself}>
                        <h3 className={styles.benefit_itself_name}>Более 10 лет на рынке</h3>
                        <div className={styles.benefit_img_con}>
                            <img className={styles.benefit_img} src={BEST2} alt="knt benefit" />
                        </div>
                        <h4 className={styles.benefit_itself_des}>За нашими плечами более 10 лет опыта работы и специалисты наивысшего класса</h4>
                    </div>
                    <div className={styles.benefit_itself}>
                        <h3 className={styles.benefit_itself_name}>Большой выбор объектов</h3>
                        <div className={styles.benefit_img_con}>
                            <img className={styles.benefit_img} src={BEST3} alt="knt benefit" />
                        </div>
                        <h4 className={styles.benefit_itself_des}>Мы предлагаем самый большой список объектов в городе Ташкент</h4>
                    </div>
                    <div className={styles.benefit_itself}>
                        <h3 className={styles.benefit_itself_name}>Прямое представительство</h3>
                        <div className={styles.benefit_img_con}>
                            <img className={styles.benefit_img} src={BEST4} alt="knt benefit" />
                        </div>
                        <h4 className={styles.benefit_itself_des}>Мы являемся прямыми представителями многих строительных компаний, благодоря чему у нас самые актуальные и приятные цены</h4>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Benefit