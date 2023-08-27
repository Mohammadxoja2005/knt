import { FC } from 'react'
import styles from "./index.module.scss"

import LOCATION from "../../../../assets/icons/location.png"
import MAP from "../../../../assets/images/map.png"
import MAPLOCATION from "../../../../assets/icons/maplocation.svg"

const Location: FC = () => {
    return (
        <section className={styles.loc}>
            <div className={styles.container}>
                <div className={styles.loc_map}>
                    <h2 className={styles.loc_title}>
                        Расположение
                    </h2>
                    <div className={styles.loc_location}>
                        <img src={MAP} alt="" />
                    </div>
                    <div className={styles.loc_map_des} >
                        <img src={LOCATION} alt="knt location icon" />
                        <div className={styles.loc_map_name} >
                            <p>р-н Яшнобадский</p>
                            <p>ул. Пупоковская</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Location