import { FC, useState } from 'react'
import styles from "./index.module.scss";
// images
import LOGO from "../../assets/images/logoheader.png";
import LANG2 from "../../assets/icons/lang2.png";
import LANG3 from "../../assets/icons/lang3.png";
import LANG1 from "../../assets/icons/lang1.png";
import DOWN from "../../assets/icons/down.png";

import { Listbox } from '@headlessui/react';
import { Link } from "react-router-dom";

const Header: FC = () => {
    const [lang, setLang] = useState<string>(LANG1);

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header_block}>
                    <img src={LOGO} alt="knt logo" />
                </div>
                <div className={styles.header_block}>
                    <Link className={styles.header_navigation} to={'/'}>Главная</Link>
                    <Link className={styles.header_navigation} to={'/objects'}>Объекты</Link>
                    <Link className={styles.header_navigation} to={'/'}>О нас</Link>
                    <Link className={styles.header_navigation} to={'/'}>Застройщикам</Link>
                </div>
                <div className={styles.header_block}>
                    <div className={styles.header_contact_btn}>
                        Связаться с нами
                    </div>
                    <Listbox as="div" className={styles.header_lang_con} value={lang} onChange={setLang}>
                        <Listbox.Button className={styles.header_lang_btn}>
                            <img src={lang} alt="russian" />
                            <img src={DOWN} alt="down arrow" />
                        </Listbox.Button>
                        <Listbox.Options className={styles.header_lang_dropdown}>
                            <Listbox.Option
                                value={LANG1}
                            >
                                <img src={LANG1} alt="russian" />
                            </Listbox.Option>
                            <Listbox.Option
                                value={LANG2}
                            >
                                <img src={LANG2} alt="uzbek" />
                            </Listbox.Option>
                            <Listbox.Option
                                value={LANG3}
                            >
                                <img src={LANG3} alt="english" />
                            </Listbox.Option>
                        </Listbox.Options>
                    </Listbox>
                </div>
            </div>
        </header>
    )
}

export default Header