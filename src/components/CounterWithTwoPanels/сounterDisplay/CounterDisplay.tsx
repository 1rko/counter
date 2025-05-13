import styles from './CounterDisplay.module.css'
import {Button} from "../button/Button.tsx";
import {Display} from "./Tablo/Display.tsx";
import {Panel} from "../panel/Panel.tsx";

type Props = {
    countValue: number
    maxCount: number
    minCount: number
    onIncrement: () => void
    onReset: () => void
    error?: string | null
}

export const CounterDisplay = (props: Props) => {
    const {
        countValue,
        minCount,
        maxCount,
        onIncrement,
        onReset,
        error
    } = props

    const isMax = countValue === maxCount
    const isMin = countValue === minCount

    const onIncrementHandler = () => {
        onIncrement()
    }

    const onResetHandler = () => {
        onReset()
    }

    return (<div className={styles.counterWrapper}>
            <div className={styles.counter}>
                {!error && <Display
                    value={countValue.toString()}
                    isMax={isMax}/>
                }
                {!!error && <Display
                    value={error}
                    isMax={isMax}/>
                }

                <Panel className={styles.buttons_panel}>
                    <Button
                        title={'inc'}
                        disabled={isMax || Boolean(error)}
                        onClick={onIncrementHandler}/>
                    <Button
                        title={'reset'}
                        disabled={isMin || Boolean(error)}
                        onClick={onResetHandler}/>
                </Panel>
            </div>
        </div>
    );
};

