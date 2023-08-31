import { FC } from 'react'
import styles from "./index.module.scss";

import TEAM1 from "../../../../assets/icons/team1.png"
import TEAM2 from "../../../../assets/icons/team2.png"
import TEAM3 from "../../../../assets/icons/team3.png"
import TEAM4 from "../../../../assets/icons/team4.png"

const Help: FC = () => {
    return (
        <section className={styles.help}>
            <div className={styles.container} >
                <h2 className={styles.help_name}>
                    Наша команда всегда поможет Вам
                </h2>
                <div className={styles.help_list}>
                    <div className={styles.help_itself}>
                        <img src={TEAM1} alt="knt team help" />
                        <p className={styles.help_itself_name}>Тщательно подобрать базу объектов</p>
                    </div> 
                    <div className={styles.help_itself}>
                        <img src={TEAM2} alt="knt team help" />
                        <p className={styles.help_itself_name}>Юридическим сопровождением во время сделки</p>
                    </div> 
                    <div className={styles.help_itself}>
                        <img src={TEAM3} alt="knt team help" />
                        <p className={styles.help_itself_name}>Бесплатной консультацией</p>
                    </div> 
                    <div className={styles.help_itself}>
                        <img src={TEAM4} alt="knt team help" />
                        <p className={styles.help_itself_name}>Сэкономить ваше время</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help