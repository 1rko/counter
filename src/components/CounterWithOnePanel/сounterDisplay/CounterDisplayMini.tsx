import styles from './CounterDisplayMini.module.css'
import {Display} from "./Tablo/Display.tsx";
import {Panel} from "../../CounterWithTwoPanels/panel/Panel.tsx";
import {Button} from "../../CounterWithTwoPanels/button/Button.tsx";

type Props = {
    countValue: number
    maxCount: number
    minCount: number
    onIncrement: () => void
    onReset: () => void
    onSetActivateMode: () => void
    error?: string | null
}

export const CounterDisplayMini = (props: Props) => {
    const {
        countValue,
        minCount,
        maxCount,
        onIncrement,
        onReset,
        onSetActivateMode,
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
    const onSetActivateModeHandler = () => {
        onSetActivateMode()
    }

    return (<div className={styles.counterWrapper}>
            <div className={styles.counter}>
                {!error && <Display
                    value={countValue.toString()}
                    isMax={isMax}/>
                }
                {error && <Display
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
                    <Button
                        title={'set'}
                        onClick={onSetActivateModeHandler}/>
                </Panel>
            </div>
        </div>
    );
};

