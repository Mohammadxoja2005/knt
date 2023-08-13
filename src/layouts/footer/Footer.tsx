import { FC } from 'react'
import styles from "./index.module.scss";
// icons
import TELEGRAM from "../../assets/icons/telegram.png"
import FACEBOOK from "../../assets/icons/facebook.png"
import INSTAGRAM from "../../assets/icons/instagram.png"
import LOGO from "../../assets/icons/minilogo.png"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_nav_con}>
                    <div className={styles.footer_nav}>
                        <div className={styles.footer_social}>
                            <img src={TELEGRAM} alt="knt telegram" />
                            <img src={FACEBOOK} alt="knt facebook" />
                            <img src={INSTAGRAM} alt="knt instagram" />
                        </div>
                        <p className={styles.footer_phone}>+998 94 664 66 61</p>
                        <p className={styles.footer_mail}>knt@gmail.com</p>
                    </div>
                    <div className={styles.footer_nav}>
                        <h3 className={styles.footer_name}>
                            Главная
                        </h3>
                        <div className={styles.footer_nav_links}>
                            <a className={styles.footer_nav_link} href="#">Объекты</a>
                            <a className={styles.footer_nav_link} href="#">О нас</a>
                            <a className={styles.footer_nav_link} href="#">Застройщикам</a>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_confidential} >
                    <div className={styles.footer_logo} >
                        A product of
                        <img src={LOGO} alt="knt logo" />
                    </div>
                    <div className={styles.footer_mail}>
                        © 2023 All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer