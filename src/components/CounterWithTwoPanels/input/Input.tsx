import {ChangeEvent} from "react";
import styles from './Input.module.css'

type InputProps = {
    type?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string | null
}

export const Input = (props: InputProps) => {
    const {type = 'number', value,onChange, error} = props
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={styles.input+' '+(error ? styles.error : '')}
        />
    );
};
