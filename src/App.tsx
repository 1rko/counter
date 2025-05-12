import './App.css'
import {CounterWithTwoPanels} from "./components/CounterWithTwoPanels/CounterWithTwoPanels.tsx";
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
