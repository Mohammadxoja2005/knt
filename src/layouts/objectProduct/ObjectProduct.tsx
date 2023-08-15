import { FC } from 'react'
import styles from "./index.module.scss";
// icons 
import POSTICON1 from "../../assets/icons/posticon1.png"
import POSTICON2 from "../../assets/icons/posticon2.png"
import POSTICON3 from "../../assets/icons/posticon3.png"
import POSTICON4 from "../../assets/icons/posticon4.png"
import DOLLAR from "../../assets/icons/dollar.png"
import SLIDEREXAMPLE from "../../assets/images/slider_example.png"
import LIKE from "../../assets/icons/like.png"

const ObjectProduct: FC = () => {
    return (

        <div className={styles.offerPr}>
            <div className={styles.offerPr_watermark}>
                Свободного назначения
            </div>
            <div className={styles.offerPr_images_con}>
                <div className={styles.offerPr_like}>
                    <img src={LIKE} alt="like knt icon" />
                </div>
                <div className={styles.offerPr_img_self}>
                    <img src={SLIDEREXAMPLE} alt="" />
                </div>

            </div>
            <div className={styles.offerPr_title_con}>
                <h3 className={styles.offerPr_title}>10 000 $ за м²</h3>
                <div className={styles.offerPr_price_con}>
                    <h3 className={styles.offerPr_price} >440 000</h3>
                    <img src={DOLLAR} alt="currency" />
                </div>
            </div>
            <div className={styles.offerPr_detail_con}>
                <div className={styles.offerPr_detail}>
                    <img className={styles.offerPr_detail_img} src={POSTICON1} alt="icon detail floor" />
                    <p className={styles.offerPr_detail_name}>2 эт.</p>
                </div>
                <div className={styles.offerPr_detail}>
                    <img className={styles.offerPr_detail_img} src={POSTICON2} alt="icon detail room count" />
                    <p className={styles.offerPr_detail_name}>4 ком.</p>
                </div>
                <div className={styles.offerPr_detail}>
                    <img className={styles.offerPr_detail_img} src={POSTICON3} alt="icon detail flat size" />
                    <p className={styles.offerPr_detail_name}>150 м²</p>
                </div>
                <div className={styles.offerPr_detail}>
                    <img className={styles.offerPr_detail_img} src={POSTICON4} alt="icon detail location" />
                    <p className={styles.offerPr_detail_name}>ул. Пупоковская р-н Яшнобадский</p>
                </div>
            </div>
        </div>
    )
}

export default ObjectProduct