import styles from "./CounterSettings.module.css";
import {Panel} from "../panel/Panel.tsx";
import {Input} from "../input/Input.tsx";
import {ChangeEvent, useState} from "react";
import {Button} from "../button/Button.tsx";

type Props = {
    maxCount: number
    minCount: number
    isActivate: boolean
    onSetActivate: () => void
    onSetDeactivate: () => void
    onApplySettings: (maxCount: number, minCount: number) => void
    setLocalStorage: (max: number, min: number) => void
    error: string | null
    onError: (error: string | null) => void
}

export const CounterSettings = (props: Props) => {
    const {
        maxCount,
        minCount,
        isActivate,
        onSetActivate,
        onSetDeactivate,
        onApplySettings,
        setLocalStorage,
        error,
        onError
    } = props

    const [maxTemp, setMaxTemp] = useState(maxCount)
    const [minTemp, setMinTemp] = useState(minCount)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onSetActivate()

        if (Number(e.currentTarget.value) <= minTemp) {
            onError('the maximum value should be greater than the minimum')
            onSetDeactivate()
        } else {
            onError(null)
            onSetActivate()
        }

        setMaxTemp(Number(e.currentTarget.value))
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onSetActivate()

        if (Number(e.currentTarget.value) >= maxTemp) {
            onError('the maximum value should be greater than the minimum')
            onSetDeactivate()
        } else if (Number(e.currentTarget.value) < 0) {
            onError('the value should be greater then 0')
            onSetDeactivate()
        } else {
            onError(null)
            onSetActivate()
        }

        setMinTemp(Number(e.currentTarget.value))
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
                <Panel className={styles.buttons_panel}>
                    <Button title={'set'} disabled={!isActivate} onClick={onApplySettingsHandler}/>
                </Panel>
            </div>
        </div>
    )
        ;
};
