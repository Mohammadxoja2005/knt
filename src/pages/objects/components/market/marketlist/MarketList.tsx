import { FC } from 'react'
import styles from "./index.module.scss";
// layouts
import ObjectProduct from '../../../../../layouts/objectProduct/ObjectProduct';

const MarketList: FC = () => {
    return (
        <div className={styles.list}>
            {[1, 2, 3,4,5,6].map(() => {
                return (
                    <ObjectProduct />
                )
            })}
        </div>
    )
}

export default MarketList