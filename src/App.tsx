import './App.css'
import {CounterWithTwoPanels} from "./components/Counter/CounterWithTwoPanels.tsx";
import {CounterWithOnePanel} from "./components/CounterWithOnePanel/CounterWithOnePanel.tsx";

function App() {

    return (
        <>
            <CounterWithTwoPanels/>
            <CounterWithOnePanel/>
        </>
    )
}

export default App
