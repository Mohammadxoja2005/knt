import { FC } from 'react'
import styles from "./index.module.scss";

interface Props {
    placeholder: string,
}

const Input: FC<Props> = (props: Props) => {
    const { placeholder, } = props;

    return (
        <input className={styles.filter_input} placeholder={placeholder} />
    )
}

export default Input;