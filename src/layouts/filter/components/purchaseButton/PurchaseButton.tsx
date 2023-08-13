import { FC, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import styles from "./index.module.scss";

const PurchaseButton: FC = () => {
    const [plan, setPlan] = useState<string>('purchase');

    return (
        <RadioGroup className={styles.purchase} value={plan} onChange={setPlan}>
            <RadioGroup.Option className={({ checked }) => `${checked ?
                [styles.purchase_checked]
                : [styles.purchase_unchecked]
                } `} value="purchase">

                <p>Купить</p>

            </RadioGroup.Option>
            <RadioGroup.Option className={({ checked }) => `${checked ?
                [styles.purchase_checked]
                : [styles.purchase_unchecked]
                } `} value="rent">

                <p>Снять</p>

            </RadioGroup.Option>
        </RadioGroup>
    )
}

export default PurchaseButton