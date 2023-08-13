import { FC } from 'react'
import styles from "./index.module.scss"
// icons
import POSTICON1 from "../../assets/icons/posticon1.png"
import POSTICON2 from "../../assets/icons/posticon2.png"
import POSTICON3 from "../../assets/icons/posticon3.png"
import DOLLAR from "../../assets/icons/dollar.png"
import PREV from "../../assets/icons/prev.png"
import NEXT from "../../assets/icons/next.png"
import SLIDEREXAMPLE from "../../assets/images/slider_example.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Navigation]);

interface Props {
    keyIndex: number | string,
}

const OfferProduct: FC<Props> = (props: Props) => {
    const { keyIndex } = props;

    const prevButtonClass = `offerPr_btn_prev_${keyIndex}`;
    const nextButtonClass = `offerPr_btn_next_${keyIndex}`;

    const buttonStylesPrev: any = {
        position: "absolute",
        borderRadius: "20px  0 0 20px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999",
        width: "34px",
        cursor: "pointer",
        backdropFilter: "blur(5px)"
    }

    const buttonStylesNext: any = { ...buttonStylesPrev };
    buttonStylesNext.borderRadius = "0  20px 20px 0"
    buttonStylesNext.right = "0";
    buttonStylesNext.top = "0";


    return (
        <div className={styles.offerPr}>
            <div className={styles.offerPr_images_con}>
                <div className={styles.offerPr_watermark}>
                    Аренда
                </div>
                <div className={prevButtonClass} style={buttonStylesPrev}>
                    <img src={PREV} alt="" />
                </div>

                <Swiper
                    className={styles.offerPr_img_list}
                    slidesPerView={1}
                    navigation={{
                        prevEl: `.${prevButtonClass}`,
                        nextEl: `.${nextButtonClass}`,
                    }}
                >
                    {[1, 2, 3].map((idx) => {
                        return (
                            <SwiperSlide key={idx} className={styles.offerPr_img_self}>
                                <img src={SLIDEREXAMPLE} alt="" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <div className={nextButtonClass} style={buttonStylesNext}>
                    <img src={NEXT} alt="" />
                </div>
            </div>
            <div className={styles.offerPr_title_con}>
                <h3 className={styles.offerPr_title}>Краткое описание помещения</h3>
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
            </div>
        </div>
    )
}

export default OfferProduct