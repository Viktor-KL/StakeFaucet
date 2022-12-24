import "swiper/css";
import styles from './Reviews.module.css';
import { Swiper,  SwiperSlide, useSwiper } from "swiper/react";
import {Navigation} from 'swiper';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {MdArrowForwardIos} from 'react-icons/md';


const Reviews = () => {
    const swiper = useSwiper();


    const reviewsArr = [
        {
            name: 'Artur Kopcha',
            subtitle: '“I have been a user of Stake Faucet over 2 years. And during this time i earned over $730 and play with it on casino”',
            link: 'google.com'
        },
        {
            name: 'Maksym Ovchynnikov',
            subtitle: '“Stake Faucet is the real deal! It is very easy to earn cryptocurrency. I did my first payment a few days ago and it arrived in me BTC wallet within 24 hours”',
            link: 'google.com'
        },
        {
            name: 'Albert Dera',
            subtitle: '“Better payouts and more ways to earn than any other fauset site I’ve tried. Very fast payments. Would reccomend!”',
            link: 'google.com'
        },
        {
            name: 'Artur Kopcha 2',
            subtitle: '“I have been a user of Stake Faucet over 2 years. And during this time i earned over $730 and play with it on casino”',
            link: 'google.com'
        },
        {
            name: 'Maksym Ovchynnikov 2',
            subtitle: '“Stake Faucet is the real deal! It is very easy to earn cryptocurrency. I did my first payment a few days ago and it arrived in me BTC wallet within 24 hours”',
            link: 'google.com'
        },
        {
            name: 'Albert Dera 2',
            subtitle: '“I have been a user of Stake Faucet over 2 years. And during this time i earned over $730 and play with it on casino”“Better payouts and more ways to earn than any other fauset site I’ve tried. Very fast payments. Would reccomend!”',
            link: 'google.com'
        }
    ]


    

    return (
        <section className={`container ${styles.wrap}`}>
        
        <div className={styles.wrap__head}>
            <h2 className="title">Reviews</h2>
            <div>
                <button className={styles.slider__arrows} onClick={(e) => swiper.slidePrev(e.preventDefault)}><MdOutlineArrowBackIosNew /></button>
                <button className={styles.slider__arrows} onClick={(e) => swiper.slideNext(e.preventDefault)}><MdArrowForwardIos /></button>
            </div>
        </div>
                
        <Swiper
            modules={Navigation}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            
        >
        {reviewsArr.map((item, key) => (
            <SwiperSlide key={key} className={styles.slider__block}>
                <h3 className={styles.slider__name}>{item.name}</h3>
                <p className={styles.slider__subtitle}>{item.subtitle}</p>
                <a className={styles.slider__link} href={item.link}>View on Twitter</a>
            </SwiperSlide>
        ))}

        </Swiper>
        </section>
    );
}

export default Reviews;