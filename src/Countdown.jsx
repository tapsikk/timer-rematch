import React, { useState, useEffect } from 'react';
import './Countdown.css';

// КОНФИГУРАЦИЯ ТАЙМЕРА
// Установите здесь дату и время, до которого будет идти отсчет
const COUNTDOWN_TO_DATE = '2025-06-16T13:00:00';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const countdownDate = new Date(COUNTDOWN_TO_DATE).getTime();
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="creator">
        <p>Создано: </p>
        <img
         src='/image/discord-logo.png'cd
          alt="BallCloseup_16_9.png"
          className="discord-logo"
        />
      </div>

      <main className="main-content">
        <div className="logo-placeholder">
          <p>До выхода игры</p>
        </div>

        <div className="timer">
          <div className="time-block">
            <span className="time-value">{formatTime(timeLeft.days)}</span>
            <span className="time-label">Дней</span>
          </div>
          <div className="time-block">
            <span className="time-value">{formatTime(timeLeft.hours)}</span>
            <span className="time-label">Часов</span>
          </div>
          <div className="time-block">
            <span className="time-value">{formatTime(timeLeft.minutes)}</span>
            <span className="time-label">Минут</span>
          </div>
          <div className="time-block">
            <span className="time-value">{formatTime(timeLeft.seconds)}</span>
            <span className="time-label">Секунд</span>
          </div>
        </div>
      </main>

      <div className="ad">
        <p>Здесь могла быть ваша реклама</p>
      </div>
    </div>
  );
};

export default Countdown;
