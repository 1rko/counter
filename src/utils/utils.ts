const DEFAULT_MIN_VALUE = 0
const DEFAULT_MAX_VALUE = 5

export function getMaxFromLocalStorage ()  {
    console.log('getMaxFromLocalStorage')
    if (localStorage.getItem("maxCount")) {
        return JSON.parse(localStorage.getItem("maxCount") as string)
    }
    else return DEFAULT_MAX_VALUE        //default значение? при первичной загрузке страницы(т.к. localStorage.getItem("maxCount")==null)
}

export function getMinFromLocalStorage ()  {
    console.log('getMinFromLocalStorage')
    if (localStorage.getItem("minCount")) {
        return JSON.parse(localStorage.getItem("minCount") as string)
    }
    else return DEFAULT_MIN_VALUE       //default значение? при первичной загрузке страницы(т.к. localStorage.getItem("maxCount")==null)
}