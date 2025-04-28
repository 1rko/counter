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
        if (localStorage.getItem("maxCount")) {
            return JSON.parse(localStorage.getItem("maxCount") as string)
        } else return 5       //default значение? при первичной загрузке страницы(т.к. localStorage.getItem("maxCount")==null)
    }

    function getMinFromLocalStorage() {
        if (localStorage.getItem("minCount")) {
            return JSON.parse(localStorage.getItem("minCount") as string)
        } else return 0       //default значение? при первичной загрузке страницы(т.к. localStorage.getItem("maxCount")==null)
    }

    return (
        <div className={styles.counter}>
            <div className={!isSetModeActivate ? styles.oneSide : styles.hiddenSide}>
                <CounterDisplayMini countValue={countValue}
                                    maxCount={maxCount}
                                    minCount={minCount}
                                    onIncrement={onIncrement}
                                    onReset={onReset}
                                    onSetActivateMode={onSetActivate}
                />
            </div>
            <div className={isSetModeActivate ? styles.oneSide : styles.hiddenSide}>
                <CounterSettingsMini maxCount={maxCount}
                                     minCount={minCount}
                                     onSetActivate={onSetActivate}
                                     onApplySettings={onApplySettings}
                                     error={error}
                                     onError={onError}
                                     setLocalStorage={setLocalStorage}
                />
            </div>
        </div>
    );
};
