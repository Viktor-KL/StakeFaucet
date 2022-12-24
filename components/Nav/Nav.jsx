import styles from './nav.module.css';
import Link from 'next/link';


const Nav = () => {
    
    const navLinks = [
        {
            title: 'How to get',
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
        <nav className={styles.nav}>
            <div className={`${styles.nav__linkWrap} ${'container'}`}>
                <div>
                    <Link href='/' className={styles.nav__logo}>Stake Faucet</Link>
                </div>
                <div>
                    {navLinks.map((item , key) => (
                        <a href={item.href} key={key} className='links'>{item.title}</a>
                    ))}

                    <Link href='/claim'><button className={`${'btn'} ${styles.nav__btn}`}>Claim $5.00</button></Link>
                </div>

                
                 
                    

            </div>
        </nav>
    );

    
};

export default Nav;
