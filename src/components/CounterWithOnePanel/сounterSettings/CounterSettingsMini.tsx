import styles from "./CounterSettingsMini.module.css";
import {ChangeEvent, useState} from "react";
import {Panel} from "../../CounterWithTwoPanels/panel/Panel.tsx";
import {Input} from "../../CounterWithTwoPanels/input/Input.tsx";
import {Button} from "../../CounterWithTwoPanels/button/Button.tsx";

type Props = {
    maxCount: number
    minCount: number
    onSetActivate: () => void
    onApplySettings: (maxCount: number, minCount: number) => void
    setLocalStorage: (max: number, min: number) => void
    error: string | null
    onError: (error: string | null) => void
}

export const CounterSettingsMini = (props: Props) => {
    const {
        maxCount,
        minCount,
        onSetActivate,
        onApplySettings,
        setLocalStorage,
        error,
        onError
    } = props

    const [maxTemp, setMaxTemp] = useState(maxCount)
    const [minTemp, setMinTemp] = useState(minCount)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onSetActivate()
        if (+e.currentTarget.value <= minTemp) {
            onError('the maximum value should be greater than the minimum')
        } else {
            onError(null)
            onSetActivate()
        }
        setMaxTemp(+e.currentTarget.value)
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onSetActivate()
        if (+e.currentTarget.value >= maxTemp) {
            onError('the maximum value should be greater than the minimum')

        } else if (+e.currentTarget.value < 0) {
            onError('the value should be greater then 0')

        } else {
            onError(null)
            onSetActivate()
        }
        setMinTemp(+e.currentTarget.value)
    }

    const onApplySettingsHandler = () => {
        onApplySettings(maxTemp, minTemp)
        setLocalStorage(maxTemp, minTemp)
    }

    return (
        <div>
            <div className={styles.counter}>
                <Panel className={styles.buttons_panel}>
                    <div className={styles.inputFlexWrapper}>
                        <span className={styles.inputTitle}>Max value</span>
                        <Input
                            value={maxTemp.toString()}
                            onChange={onChangeMaxHandler}
                            error={error}
                        />
                    </div>
                    <div className={styles.inputFlexWrapper}>
                        <span className={styles.inputTitle}>Start value</span>
                        <Input
                            value={minTemp.toString()}
                            onChange={onChangeMinHandler}
                            error={error}
                        />
                    </div>
                </Panel>
                {error && <span className={styles.error}>{error}</span>}
                <Panel className={styles.buttons_panel}>
                    <Button
                        title={'apply settings'}
                        disabled={!!error}
                        onClick={onApplySettingsHandler}
                    />
                </Panel>
            </div>
        </div>
    )
        ;
};
