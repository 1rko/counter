import styles from './counterWithOnePanel.module.css'
import {useState} from "react";
import {CounterSettingsMini} from "./сounterSettings/CounterSettingsMini.tsx";
import {CounterDisplayMini} from "./сounterDisplay/CounterDisplayMini.tsx";

export const CounterWithOnePanel = () => {
    const [countValue, setCountValue] = useState(getMinFromLocalStorage())
    const [maxCount, setMaxCount] = useState(getMaxFromLocalStorage())
    const [minCount, setMinCount] = useState(getMinFromLocalStorage())
    const [isSetModeActivate, setIsSetModeActivate] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const onIncrement = () => {
        if (countValue < maxCount) {
            setCountValue(countValue + 1)
        }
    }

    const onReset = () => {
        setCountValue(minCount)
    }

    const onSetActivate = () => {
        setIsSetModeActivate(true)
    }

    const onSetDeactivate = () => {
        setIsSetModeActivate(false)
    }

    const onApplySettings = (maxCount: number, minCount: number) => {
        if (!error) {
            setError(null)
            setIsSetModeActivate(false)
            setLocalStorage(Number(maxCount), Number(minCount))
            setMaxCount(Number(maxCount))
            setMinCount(Number(minCount))
            setCountValue(minCount)
        }
    }

    const onError = (error: string | null) => {
        setError(error)
    }

    const setLocalStorage = (max: number, min: number) => {
        localStorage.setItem("maxCount", JSON.stringify(max))
        localStorage.setItem("minCount", JSON.stringify(min))
    }

    function getMaxFromLocalStorage() {
        return JSON.parse(localStorage.getItem("maxCount") as string)
    }

    function getMinFromLocalStorage() {
        return JSON.parse(localStorage.getItem("minCount") as string)
    }

    return (
        <div className={styles.counter}>
            счетчик с одной панелью
            {isSetModeActivate ? <CounterSettingsMini maxCount={maxCount}
                                                  minCount={minCount}
                                                  isActivate={isSetModeActivate}
                                                  onSetActivate={onSetActivate}
                                                  onSetDeactivate={onSetDeactivate}
                                                  onApplySettings={onApplySettings}
                                                  error={error}
                                                  onError={onError}
                                                  setLocalStorage={setLocalStorage}
            /> : <CounterDisplayMini countValue={countValue}
                                 maxCount={maxCount}
                                 minCount={minCount}
                                 onIncrement={onIncrement}
                                 onReset={onReset}
                                 onSetActivateMode={onSetActivate}
            />}

        </div>
    );
};
