import { FC } from 'react'
import styles from "./index.module.scss";
// icons
import PAGPREV from "../../../../../assets/icons/pagprev.png"
import PAGNEXT from "../../../../../assets/icons/pagnext.png"

const Pagination: FC = () => {
    return (
        <div className={styles.pag}>
            <img src={PAGPREV} alt="" />

            <div className={styles.pag_numeration}>
                <p className={styles.pag_number_active}>1</p>
                <p className={styles.pag_number}>2</p>
                <p className={styles.pag_number}>3</p>
            </div>

            <img src={PAGNEXT} alt="" />
        </div>
    )
}

export default Pagination