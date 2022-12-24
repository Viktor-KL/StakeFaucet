import styles from './header.module.css';
import actionStyles from './../ActionBlock/actionBlock.module.css';
import ActionBlock from '../ActionBlock/ActionBlock';
import Timer from './../Timer/Timer';

const Header = ({title, subtitle}) => {

    return (
            <div className={`${styles.header__wrap} ${'container'}`}>
                
                <ActionBlock maxWidth='600' fontSize='20'>
                    <h1 className={`title ${styles.header__title}`}>Claim your $5 in Bitcoin now!</h1>
                    <>Unlocking your $5.00 of BTC has never been easier. Completing our simple 3  step process to release $5.00 of Bitcoin to your wallet</>
                </ActionBlock>


                <Timer />
            </div>
    )
}







export default Header;