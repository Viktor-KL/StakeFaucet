import styles from './actionBlock.module.css';

const ActionBlock = ({children, maxWidth='100', fontSize='24'}) => {

console.log(children);
    return (
        <div>
            {children[0]}
            <p className={styles.subtitle} style={{maxWidth: `${maxWidth}px`, fontSize: `${fontSize}px`}}>
                {children[1]}
            </p>
            <button className="btn">Claim $5.00 in BTC now</button>
        </div>
        
    )
}

export default ActionBlock;

    
