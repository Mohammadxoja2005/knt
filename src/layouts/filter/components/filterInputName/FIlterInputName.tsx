import { FC } from 'react'
import styles from "./index.module.scss";

const FIlterInputName: FC<{ name: string }> = ({ name }) => {
    return <p className={styles.filter_input_name}>{name}</p>
}

export default FIlterInputName