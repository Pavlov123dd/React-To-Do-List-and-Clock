import React, {useState, useEffect} from 'react';
import './style.sass';


export default function Clock(props) {

    const [secondsValue, setSeconds] = useState('');
    const [minutesValue, setMinutes] = useState('');
    const [hoursValue, setHours] = useState('');
    const [secondTitleValue, setSecondTitle] = useState('');
    const [minuteTitleValue, setMinuteTitle] = useState('');
    const [hourTitleValue, setHourTitle] = useState('');



    useEffect(() => {
        setInterval(() => {
            let second = new Date().getSeconds();
            let minute = new Date().getMinutes();
            let hour = new Date().getHours();

            setSeconds(second < 10 ? '0' + second : second);
            setMinutes(minute < 10 ? '0' + minute : minute);
            setHours(hour < 10 ? '0' + hour : hour);
            setSecondTitle((second === 0) || (second === 1) ? 'second' : 'seconds');
            setMinuteTitle((minute === 0) || (minute === 1) ? 'minute' : 'minutes');
            setHourTitle((hour === 0) || (hour === 1) ? 'hour' : 'hours');
        }, 1000)

    }, []);


    return (

        (hoursValue) ? (<div className="clock-container">
            <div className="clock-container__hours hours-container numbers-container" >
                <span className="hours-container__numbers">{hoursValue}</span>
                <span className="numbers-title">{hourTitleValue}</span>
            </div>

            <div className="clock-container__minutes minutes-container numbers-container">
                <span className="minutes-container__numbers">{minutesValue}</span>
                <span className="numbers-title">{minuteTitleValue}</span>
            </div>

            <div className="clock-container__seconds seconds-container numbers-container">
                <span className="seconds-container__numbers">{secondsValue}</span>
                <span className="numbers-title">{secondTitleValue}</span>
            </div>
        </div>) : null


    );
};
