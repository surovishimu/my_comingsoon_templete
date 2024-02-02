import React, { useState, useEffect } from 'react';
import left from '../../../public/asset/left.png';
import right from '../../../public/asset/right.png';

const CountdownTimer = () => {
    const [weeks, setWeeks] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const targetDate = new Date("2024-03-01T00:00:00"); // Set your target date here

            const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
            const remainingWeeks = Math.floor(totalSeconds / (7 * 24 * 3600));
            const remainingDays = Math.floor((totalSeconds % (7 * 24 * 3600)) / (24 * 3600));
            const remainingHours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
            const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
            const remainingSeconds = Math.floor(totalSeconds % 60);

            setWeeks(remainingWeeks);
            setDays(remainingDays);
            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center text-white font">
            <img className="h-12 sm:h-24" src={left} alt="" />
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                <div className="text-2xl sm:text-4xl hover:text-black transition-colors cursor-pointer transform hover:-translate-y-2">
                    <div className="flex items-center justify-center">{weeks}</div>
                    <div className="text-xs sm:text-base">Weeks</div>
                </div>
                <div className="text-2xl sm:text-4xl hover:text-black transition-colors cursor-pointer transform hover:-translate-y-2">
                    <div className="flex items-center justify-center">{days}</div>
                    <div className="text-xs sm:text-base">Days</div>
                </div>
                <div className="text-2xl sm:text-4xl hover:text-blacktransition-colors cursor-pointer transform hover:-translate-y-2">
                    <div className="flex items-center justify-center hover:text-black">{hours}</div>
                    <div className="text-xs sm:text-base">Hours</div>
                </div>
                <div className="text-2xl sm:text-4xl hover:text-black transition-colors cursor-pointer transform hover:-translate-y-2">
                    <div className="flex items-center justify-center">{minutes}</div>
                    <div className="text-xs sm:text-base">Minutes</div>
                </div>
                <div className="text-2xl sm:text-4xl transition-colors cursor-pointer transform hover:-translate-y-2 hover:text-black">
                    <div className="flex items-center justify-center">{seconds}</div>
                    <div className="text-xs sm:text-base">Seconds</div>
                </div>
            </div>
            <img className="h-12 sm:h-24" src={right} alt="" />
        </div>
    );
};

export default CountdownTimer;
