import {CounterSettings} from "./сounterSettings/CounterSettings.tsx";
import {CounterDisplay} from "./сounterDisplay/CounterDisplay.tsx";
import styles from './сounterWithTwoPanels.module.css'
import {useState} from "react";
import {getMaxFromLocalStorage, getMinFromLocalStorage} from "../../utils/utils.ts";

export const CounterWithTwoPanels = () => {
    const [countValue, setCountValue] = useState(getMinFromLocalStorage)//Передаем просто как функцию, чтобы при
    const [maxCount, setMaxCount] = useState( getMaxFromLocalStorage)//каждом ререндере функция не вызывалась
    const [minCount, setMinCount] = useState( getMinFromLocalStorage)
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
            setLocalStorage(Number(maxCount),Number(minCount))
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

    return (
        <div className={styles.counter}>
            <CounterSettings maxCount={maxCount}
                             minCount={minCount}
                             isActivate={isSetModeActivate}
                             onSetActivate={onSetActivate}
                             onSetDeactivate={onSetDeactivate}
                             onApplySettings={onApplySettings}
                             error={error}
                             onError={onError}
                             setLocalStorage={setLocalStorage}
            />
            <CounterDisplay countValue={countValue}
                            maxCount={maxCount}
                            minCount={minCount}
                            onIncrement={onIncrement}
                            onReset={onReset}
                            error={error}
            />
        </div>
    );
};
