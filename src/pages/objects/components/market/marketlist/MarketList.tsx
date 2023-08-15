import { FC } from 'react'
import styles from "./index.module.scss";
// layouts
import ObjectProduct from '../../../../../layouts/objectProduct/ObjectProduct';

const MarketList: FC = () => {
    return (
        <div className={styles.list}>
            <ObjectProduct />
        </div>
    )
}

export default MarketList