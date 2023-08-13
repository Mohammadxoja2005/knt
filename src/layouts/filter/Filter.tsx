import { FC } from 'react'
import styles from "./index.module.scss";
// components
import PurchaseButton from './components/purchaseButton/PurchaseButton';
import Input from './components/input/Input';
import FIlterInputName from './components/filterInputName/FIlterInputName';
import FilterOption from './components/filterOption/FilterOption';
// data
import { area } from '../../data/data';
// images
import FILTERIMG from "../../assets/icons/filter.png";


const Filter: FC = () => {

    return (
        <section className={styles.filter}>
            <div className={styles.container}>
                <PurchaseButton />
                <div className={styles.filter_inputs_con}>
                    <div className={styles.filter_input_con}>
                        <FIlterInputName name='Тип недвижимости' />
                        <div className={styles.filter_input_group} >
                            <FilterOption arrayList={area} />
                        </div>
                    </div>
                    <div className={styles.filter_input_con}>
                        <FIlterInputName name='Стоимость, сум' />
                        <div className={styles.filter_input_group} >
                            <Input placeholder='От' />
                            <Input placeholder='До' />
                        </div>
                    </div>
                    <div className={styles.filter_input_con}>
                        <FIlterInputName name='Площадь кв.м.' />
                        <div className={styles.filter_input_group} >
                            <Input placeholder='От' />
                            <Input placeholder='До' />
                        </div>
                    </div>
                    <div className={styles.filter_input_con}>
                        <FIlterInputName name='Район' />
                        <div className={styles.filter_input_group} >
                            <FilterOption arrayList={area} />
                        </div>
                    </div>
                    <div className={styles.filter_input_con}>
                        <FIlterInputName name='Метро' />
                        <div className={styles.filter_input_group} >
                            <FilterOption arrayList={area} />
                        </div>
                    </div>
                    <div className={styles.filter_input_con}> 
                    
                        <div className={styles.filter_icon_con} >
                            <img className={styles.filter_icon} src={FILTERIMG} alt="" />
                        </div>

                        <div className={styles.filter_btn}>
                            Найденно 100500 предложений
                        </div>
                        {/* <div className={styles.filter_input_group} >
                            <FilterOption arrayList={area} />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter