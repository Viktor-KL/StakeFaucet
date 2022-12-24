import styles from './About.module.css';
import Image from 'next/image';
import AboutImg from './../../public/img/aboutImg.png';
import DollarIcon from './../../public/img/dollarIcon.svg'
import WindIcon from './../../public/img/windIcon.svg'

const About = () => {

    return (
        <section className={`${styles.about__wrap} container `}>
            
            <Image 
            src={AboutImg}
            alt='bitcoinImage'
            className={styles.about__img}
            />

            <div className={styles.about__info}>
                <h2 className="title">What is a Bitcoin Faucet</h2>
                <p className={styles.about__subtitle}>
                    This is a simple easy way to get a small amount of Bitcoin for free! Our faucet takes 2-3 minutes to process and you'll have $5.00 of BTC in your wallet
                </p>

                <div className={styles.about__infoSection}>
                    <div className={styles.about__infoSectionBlock}>
                        <Image 
                        src={DollarIcon}
                        alt='dollar'
                        className={styles.about__infoIcons}
                        />

                        <p className={styles.about__infoSectionSubtitle}>Our partner program will additionally give $1.00 free bitcoin every 24 hours</p>
                    </div>
                    <div className={styles.about__infoSectionBlock}>
                        <Image 
                        src={WindIcon}
                        alt='wind'
                        className={styles.about__infoIcons}
                        />

                        <p className={styles.about__infoSectionSubtitle}>Fast payment</p>

                    </div>
                </div>


            </div>



        </section>   
    )
} 

export default About; 