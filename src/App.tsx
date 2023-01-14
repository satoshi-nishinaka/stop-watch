import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useStopwatch} from "react-timer-hook";

const ResetButton = (props: {clickEvent:() => void}): JSX.Element => {
    return (<button onClick={props.clickEvent}>RESET</button>)
}

const StartPauseButton = (props: {running: boolean, clickEvent: () => void}): JSX.Element => {
    if (!props.running) {
        return (<button onClick={props.clickEvent}>START</button>)
    }

    return (<button onClick={props.clickEvent}>PAUSE</button>)
}

const elapse = (running: boolean, hours: number, minutes: number, seconds:number): string => {

return hours.toString().padStart(2, '0')
    + ':' + minutes.toString().padStart(2, '0')
    + ':' + seconds.toString().padStart(2, '0');
}

function App() {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset
    } = useStopwatch({autoStart: false});

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/> Stop Watch
            </header>
            <section className='main'>
                <div>
                    <div className='timer'>
                        {elapse(isRunning, hours, minutes, seconds)}
                    </div>
                </div>
                <div className='buttons'>
                    <ResetButton clickEvent={() => {
                        // 2回ボタンを押すとちゃんとリセットされるんだけど…
                        reset();
                        pause();
                    }} />
                    <StartPauseButton running={isRunning} clickEvent={() => {
                        if (isRunning) {
                            pause();
                        } else {
                            start();
                        }
                    }} />
                </div>
            </section>
        </div>
    );
}

export default App;
