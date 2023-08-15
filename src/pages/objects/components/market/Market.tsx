import { FC } from 'react'
import styles from "./index.module.scss";
// icons
import DEFAULT from "../../../../assets/icons/default.svg"
import DEFAULTDOWN from "../../../../assets/icons/defaultdown.png"
// components
import MarketList from './marketlist/MarketList';
import Pagination from './pagination/Pagination';

const Market: FC = () => {
    return (
        <section className={styles.market}>
            <div className={styles.container}>

                <div className={styles.market_info}>

                    <div className={styles.market_title_con}>
                        <h1 className={styles.market_title}>Продажа коммерческой недвижимости</h1>
                        <h3 className={styles.market_des}>Самые актуальные и выгодные предложения по коммерческой недвижимости</h3>
                    </div>

                    <div className={styles.market_sort_btn}>
                        <img src={DEFAULT} alt="" />
                        <p className={styles.market_sort_text}>По умолчанию</p>
                        <img src={DEFAULTDOWN} alt="" />
                    </div>
                </div>

                <MarketList />
                <Pagination />
            </div>
        </section>
    )
}

export default Market