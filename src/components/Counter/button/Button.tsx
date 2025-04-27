import styles from './Button.module.css'

type ButtonProps = {
    title:string
    disabled?: boolean
    onClick: () => void
}

export const Button = (props:ButtonProps) => {
    const {title,disabled, onClick} = props
    return (
        <button
            className={styles.controlButton +
                ' ' + (disabled ? styles.disabledButton : '')}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};
