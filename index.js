'use strict';
let times = 0;
const alarm = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const input = document.querySelector('.time-input');
const secondsEl = document.querySelector('.alarm__seconds');
const form = document.querySelector('.controls');

const changeSecunds = () => {
    if (secondsEl) {
        secondsEl.textContent = String(times).padStart(2, '0');
    }
}
if (input) {
    const onInput = () => {
        times = Number(input.value);
        changeSecunds();
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
        if (times === 0) {
            clearInterval(intervalId);
            if (alarm) {
                alarm.classList.add('alarm--ring');
            }
            if (audio) {
                audio.play();
            }
            return;
        }
        times -= 1;
        changeSecunds();
    }, 1000)
}
if (form) {
    form.addEventListener('submit', startTimer);
}