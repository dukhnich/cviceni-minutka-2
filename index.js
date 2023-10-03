'use strict';
let secunds = 0;
let minutes = 0;

const alarm = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const input = document.querySelector('.time-input');
const secondsEl = document.querySelector('.alarm__seconds');
const minutesEl = document.querySelector('.alarm__minutes');
const form = document.querySelector('.controls');

const changeTime = () => {
    if (secondsEl) {
        secondsEl.textContent = String(secunds).padStart(2, '0');
    }
    if (minutesEl) {
        minutesEl.textContent = String(minutes).padStart(2, '0');
    }

}
if (input) {
    const onInput = () => {
        if (Number(input.value) > 0) {
            minutes = Number(input.value);
            changeTime();
        }
    };
    input.addEventListener('change', onInput)
}
const startTimer = (e) => {
    e.preventDefault();
    if (input) {
        input.value = '';
    }
    if (alarm) {
        alarm.classList.remove('alarm--ring');
    }
    const intervalId = setInterval(() => {
        if (minutes <= 0 && secunds <= 0) {
            clearInterval(intervalId);
            if (alarm) {
                alarm.classList.add('alarm--ring');
            }
            if (audio) {
                audio.play();
            }
            return;
        }
        if (secunds === 0) {
            minutes -= 1;
            secunds = 60;
        }
        secunds -= 1;
        changeTime();
    }, 1000)
}
if (form) {
    form.addEventListener('submit', startTimer);
}