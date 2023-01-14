import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

const ResetButton = (): JSX.Element => {
    return (<button>RESET</button>)
}

const StartPauseButton = (props: {running: boolean, clickEvent: () => void}): JSX.Element => {
    if (!props.running) {
        return (<button onClick={props.clickEvent}>START</button>)
    }

    return (<button onClick={props.clickEvent}>PAUSE</button>)
}

const elapse = (running: boolean, startTime: number): string => {
    if (!running) {
        return '--:--:--';
    }
    const diff = Date.now() - startTime;
    const hours = diff / 1000 / 60 / 60;
    const minutes = (diff - hours * 3600000) / 1000 / 60;
    const seconds = (diff - hours * 3600000 - minutes * 60000) / 1000;

    return hours.toString().padStart(2, '0')
        + ':' + minutes.toString().padStart(2, '0')
        + ':' + seconds.toString().padStart(2, '0');
}

function App() {
    const [startTime, setStartTime] = useState<number>(0)
    const [running, setRunning] = useState(false)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/> Stop Watch
            </header>
            <section className='main'>
                <div>
                    <div className='timer'>
                        {elapse(running, startTime)}
                    </div>
                </div>
                <div className='buttons'>
                <ResetButton /><StartPauseButton running={running} clickEvent={() => {
                    if (!running) {
                        setStartTime(Date.now())
                    }
                    setRunning(!running);
                }} />
                </div>
            </section>
        </div>
    );
}

export default App;
