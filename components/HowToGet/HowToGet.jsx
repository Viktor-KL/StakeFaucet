import styles from './howToget.module.css';

const HowToGet = () => {

    const steps = [
        {
            title: 'Step 1',
            subtitle: <>Provide us your Bitcoin address and we send you the <span className='c-white'>$5.00</span> and an email</>,
            footPart: <button className={styles.howToGet__stepLink}>Start now</button>
        },
        {
            title: 'Step 2',
            subtitle: <>Register and verify your Stake US account. During registration you must enter <span className='c-white'>FAUCET</span> as a <span className='c-white'>CODE</span></>,
            footPart: <p className={styles.howToGet__blockSubtitle}>Will open after 1-st step</p>
        },
        {
            title: <>Step 3 <span className={styles.howToGet__blockSubtitle}>(optional)</span></>,
            subtitle: 'You’ve completed the main steps and will recieve your BTC soon. You can share StakeFaucet.com below via Twitter/IG/FB',
            footPart: <p className={styles.howToGet__blockSubtitle}>Will open after 1-st step</p>
        }
    ]

    return (
        <section className={`${'container' } ${styles.howToGet__wrap}`}>

            <div className={`${'title'} ${styles.howToGet__title}`}>How to get bitcoin</div>

            <div className={styles.howToGet__blockWrap}>
                {steps.map((item, key) => (
                    <div key={key} className={styles.howToGet__block}>
                        <h3 className={styles.howToGet__blockTitle}>{item.title}</h3>
                        <p className={styles.howToGet__blockSubtitle}>{item.subtitle}</p>
                        {item.footPart}
                    </div>
                ))}
            </div>
             
        </section>  
            
        

    )
}

export default HowToGet;
//  <span class={styles.howToGet__subtitle}>(optional)</span>