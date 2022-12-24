import styles from './ActionSection.module.css';
import ActionBlock from '../ActionBlock/ActionBlock';
import Image from 'next/image';
import EarnImg from './../../public/img/ph.png';

const ActionSection = () => {

    return (
        <section className={`${styles.actionSection__wrap} ${'container'}`}>
            <ActionBlock maxWidth='500'>
                <h2 className={`${'title'}`}>Change your life with Stake Faucet</h2>
                <>
                    Complete a simple easy 3 steps now to recieve your $5.00 in BTC <br /><br />
                    Let cryptocurrency change your life
                </>
            </ActionBlock>

            <Image 
            src={EarnImg}
            alt='EarnImg'
            // placeholder='blur'
            className={styles.actionSection__img}
            />
        </section>
        
    )

}

export default ActionSection; 