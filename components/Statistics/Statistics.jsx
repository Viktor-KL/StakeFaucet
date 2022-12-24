import styles from './statistics.module.css';
import Image from 'next/image';
import Map from '../../public/img/map.png';

const Data = () => {

    const dataArr = [
        {
            title: '16 984+',
            subtitle: 'Faucet claims'
        },
        {
            title: '39 876 +',
            subtitle: 'Total users'
        },
        {
            title: '116.09326 +',
            subtitle: 'Bitcoin earned'
        }, 
    ]

    return (
        <section className={styles.data__wrap}>

            <h2 className="title text-center">Stake Faucet is a big family that gets bigger every day</h2>
            <div className={`${styles.data__content} container`}>
                <div className={styles.data__info}>
                    {dataArr.map((item, key) => (
                        <div key={key} className={styles.data__block}>
                            <h3 className={styles.data__infoTitle}>{item.title}</h3>
                            <p className={styles.data__subtitle}>{item.subtitle}</p>
                        </div>
                    ))}
                    
                </div>

                <Image 
                    src={Map}
                    alt='map'
                    className={styles.data__mapImg}
                />
            </div>
            

        </section>

    )
}

export default Data;