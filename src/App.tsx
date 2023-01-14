import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

const ResetButton = (): JSX.Element => {
    return (<button>RESET</button>)
}

const StartPauseButton = (props: {running: boolean}): JSX.Element => {
    if (!props.running) {
        return (<button>START</button>)
    }

    return (<button>PAUSE</button>)
}

const elapse = (running: boolean, startTime: number): string => {
    if (!running) {
        return '--:--:--';
    }
    return '--:--:--';
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
                <ResetButton /><StartPauseButton running={running} />
                </div>
            </section>
        </div>
    );
}

export default App;
