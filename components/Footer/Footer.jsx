import Link from 'next/link';
import styles from './footer.module.css';
import {FiTwitter, FiInstagram, FiFacebook} from 'react-icons/fi'

const Footer = () => {

    const footerLinks = [
        {
            title: 'How to get Bitcoin',
            href: '#howtoget'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Statistics',
            href: '#data'
        },
        {
            title: 'Reviews',
            href: '#reviews'
        },
        {
            title: 'FAQ',
            href: '#faq'
        }
    ]

    return (
        <div className={styles.wrap}>
            <div className="container">
                <p className={styles.logo}>
                    Stake Faucet
                </p>
                <div className={styles.links__wrap}>
                    {footerLinks.map((item , key) => (
                        <a href={item.href} key={key} className='links'>{item.title}</a>
                    ))}
                </div>
                <div className={styles.socials__wrap}>
                    <a className={styles.socailIcons} href=""><FiTwitter /></a>
                    <a className={styles.socailIcons} href=""><FiInstagram /></a>
                    <a className={styles.socailIcons} href=""><FiFacebook /></a>
                </div>
                <div className="vertical-line"></div>
                
                <div className={styles.copyright__wrap}>
                    <p className={styles.copyright}>© 2022 Stake Faucet. All rights reserved</p>
                    <p className={styles.copyright}>Designed by Kapch0niy</p>
                </div>
            </div>

        </div>
    )

}

export default Footer;