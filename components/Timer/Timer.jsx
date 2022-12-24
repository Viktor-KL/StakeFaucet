import styles from './Timer.module.css';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import rightCoin from './../../public/img/rightCoin.png';
import leftCoin from './../../public/img/leftCoin.png';

const Timer = () => {
    const [minutes, setMinutes] = useState(9)
    const [seconds, setSeconds] = useState(59)
    const [isPaused, setIsPaused] = useState(false)
    let finalSeconds = String(seconds).length === 1 ? `0${seconds}` : String(seconds)

    const tick = () => {
        if(isPaused) return
        if(seconds <= 0 && minutes <= 0) {
            setIsPaused(true)
            return
        } 

        if(seconds <= 0) {
            setMinutes(minutes-1)
            setSeconds(59)
        } else {
            setSeconds(seconds - 1)
        }
       

    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000)

        return () => clearInterval(interval)
    })


    return (
        <div className={styles.timer__wrap}>

            <div className={styles.timer__clockWrap}>
                <div className={`${styles.timer__minutes} d-flex`}>
                    <div class={styles.timer__timeWrap}>0</div>
                    <div class={styles.timer__timeWrap}>{minutes}</div>
                </div>
                <div className={styles.timer__spliter}>
                    :
                </div>
                <div className={`${styles.timer__seconds} d-flex`}>
                    <div class={styles.timer__timeWrap}>{finalSeconds.split('')[0]}</div>
                    <div class={styles.timer__timeWrap}>{finalSeconds.split('')[1]}</div>
                </div>
            </div>

            <div className={styles.timer__infoWrap}>
                <p className={styles.timer__infoTitle}>Time remains until this faucet offer is closed</p>
                <p className={styles.timer__infoSubtitle}>$1, 085 worth of bitcoin remaining in the faucet</p>
            </div>

            <div className={`${styles.timer__blicks} ${styles.timer__leftBlick}`}></div>
            <div className={`${styles.timer__blicks} ${styles.timer__rightBlick}`}></div>

            <Image 
            src={rightCoin}
            alt='coin'
            className={styles.timer__rightCoin}
            />
            <Image 
            src={leftCoin}
            alt='coin'
            className={styles.timer__leftCoin}
            />

        </div>
    )
}

export default Timer;