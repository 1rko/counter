import styles from "../CounterDisplayMini.module.css";

type TabloProps = {
    value: string
    isMax: boolean
}

export const Display = (props: TabloProps) => {
    const {isMax, value} = props
    return (
        <div className={styles.tablo+
            ' ' + (isMax ? styles.red : '')}>
            {value}
        </div>
    );
};

