import { Collapse, Text } from "@nextui-org/react";
import styles from './faq.module.css';



const Faq = () => {

    const accordion = [
        {
            title: <h3 className={styles.faq__accordionTitle}>1 Questions</h3>,
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus at habitant condimentum ac lectus ornare lacus etiam interdum. Aliquam lobortis sagittis aenean sit non gravida id accumsan'
        },
        {
            title: <h3 className={styles.faq__accordionTitle}>2 Questions</h3>,
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus at habitant condimentum ac lectus ornare lacus etiam interdum. Aliquam lobortis sagittis aenean sit non gravida id accumsan'
        },
        {
            title: <h3 className={styles.faq__accordionTitle}>3 Questions</h3>,
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus at habitant condimentum ac lectus ornare lacus etiam interdum. Aliquam lobortis sagittis aenean sit non gravida id accumsan'
        },
        {
            title: <h3 className={styles.faq__accordionTitle}>4 Questions</h3>,
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus at habitant condimentum ac lectus ornare lacus etiam interdum. Aliquam lobortis sagittis aenean sit non gravida id accumsan'
        }
    ]

    return (
        <div className={`${styles.faq__wrap} container`}>

            <div className={styles.faq__info}>
                <h2 className="title">Frequently <br /> asked <span className='c-purple'>questions</span> </h2>

                <p className={styles.faq__subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus at habitant condimentum ac lectus ornare lacus etiam interdum
                </p>
            </div>

            <div className={styles.faq__accordion}>
                
                <Collapse.Group accordion={false}>
                    {accordion.map((item, key) => (
                        <Collapse className={styles.accordion__collapse} key={key} title={item.title}>
                            <Text className={styles.faq__accordionSubtitle}>
                                {item.subtitle}
                            </Text>
                        </Collapse>
                    ))}
                </Collapse.Group>
            </div>
        </div>   
    )
}

export default Faq;