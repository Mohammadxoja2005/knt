import { FC, useState } from 'react'
import styles from "./index.module.scss";
import Input from '../filter/components/input/Input';
import { Listbox } from '@headlessui/react'
import FILTERDOWN from "../../assets/icons/contactdown.png";
import { phoneCodes } from '../../data/data';
import PHONE from "../../assets/images/phone.png";

const Form: FC = () => {
    const [selected, setSelected] = useState<string>('+998');
    return (
        <div className={styles.form}>

            <form className={styles.form_form}>
                <div className={styles.form_input_group} >
                    <label htmlFor="">Ваше имя</label>
                    <Input placeholder='Введите имя' />
                </div>
                <div className={styles.form_input_group} >
                    <label htmlFor="">Номер телефона</label>
                    <div className={styles.form_input_contact}>

                        <Listbox as="div" className={styles.form_option} value={selected} onChange={setSelected}>
                            <Listbox.Button className={styles.form_option_btn}>
                                <p className={styles.form_option_name}>{selected}</p>
                                <img src={FILTERDOWN} alt="" />
                            </Listbox.Button>

                            <Listbox.Options className={styles.form_option_con} >
                                {phoneCodes && phoneCodes.map((list) => {
                                    return (
                                        <Listbox.Option className={styles.form_option_value} key={list.id} value={list.value}>
                                            <p>{list.value}</p>
                                        </Listbox.Option>
                                    )
                                })}
                            </Listbox.Options>

                        </Listbox>

                        <Input placeholder='Введите телефон' />
                    </div>
                </div>
                <div className={styles.form_btn}>
                    Получить консультацию
                </div>
                <p className={styles.form_secret}>Отправляя заявку Вы соглашаетесь на обработку <span style={{ color: "#165082" }} >персональных данных</span></p>
            </form>

            <div className={styles.form_banner}>
                <div className={styles.form_banner_info}>
                    <h2 className={styles.form_banner_name}>Или воспользуйтесь <span className={styles.banner_highlight}>удобным телеграм ботом</span> для <span className={styles.banner_highlight}>легкого поиска</span> нужной недвижимости</h2>
                    <div className={styles.form_banner_des}>
                        <div className={styles.form_banner_point}>
                            <div className={styles.form_banner_bullet}></div>
                            <p className={styles.form_banner_text}>Короткая информация о преимуществах телеграм бота</p>
                        </div>
                        <div className={styles.form_banner_point}>
                            <div className={styles.form_banner_bullet}></div>
                            <p className={styles.form_banner_text}>Короткая информация о преимуществах телеграм бота</p>
                        </div>
                        <div className={styles.form_banner_point}>
                            <div className={styles.form_banner_bullet}></div>
                            <p className={styles.form_banner_text}>Короткая информация о преимуществах телеграм бота</p>
                        </div>
                    </div>
                </div>

                <div className={styles.form_banner_img}>
                    <img src={PHONE} alt="banner phone example" />
                </div>
            </div>

        </div>
    )
}

export default Form