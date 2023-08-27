import { FC } from 'react'
import styles from "./index.module.scss";

import { object_characteristics } from '../../../../data/data';

const ObjectPrt: FC = () => {
    return (
        <section className={styles.objectPrt}>
            <div className={styles.container}>
                <h2 className={styles.objectPrt_title}>
                    Параметры объекта
                </h2>
                <div className={styles.objectPrt_grid}>
                    <div className={styles.objectPrt_list}>
                        {object_characteristics.map((chrctr) => {
                            return (
                                <div className={styles.objectPrt_chrctr} key={chrctr.id}>
                                    <div className={styles.objectPtr_name}>
                                        <img className={styles.objectPrt_chrctr_img} src={chrctr.icon} alt="knt parameter measure icon" />
                                        <p className={styles.objectPrt_chrctr_name}>{chrctr.iconName}</p>
                                    </div>
                                    <div className={styles.objectPrt_line}>

                                    </div>
                                    <div>
                                        <p className={styles.objectPrt_number}>
                                            {chrctr.object_number}{chrctr.object_measure}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ObjectPrt