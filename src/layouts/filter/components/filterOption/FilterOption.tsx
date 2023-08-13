import { FC, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import styles from "./index.module.scss";
import FILTERDOWN from "../../../../assets/icons/downfilter.png"

interface Props<T> {
    arrayList: T[],
}

const FilterOption: FC<Props<any>> = (props) => {
    const [selected, setSelected] = useState<string>('');
    const { arrayList } = props;

    return (
        <Listbox as="div" className={styles.filter_option} value={selected} onChange={setSelected}>
            <Listbox.Button className={styles.filter_option_btn}>
                <p className={styles.filter_option_name}>{selected.length == 0 ? 'Выберите' : selected}</p>
                <img src={FILTERDOWN} alt="" />
            </Listbox.Button>

            <Listbox.Options className={styles.filter_option_con} >
                {arrayList && arrayList.map((list) => {
                    return (
                        <Listbox.Option className={styles.filter_option_value} key={list.id} value={list.value}>
                            <p>{list.value}</p>
                        </Listbox.Option>
                    )
                })}
            </Listbox.Options>

        </Listbox>
    )
}

export default FilterOption;