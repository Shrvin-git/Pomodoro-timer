let minutes = 1500
let restMinute = 0
let minuteSpan = document.querySelector('#minutes')
let secondSpan = document.querySelector('#seconds')
let startPomodoroButton = document.querySelector('#start-btn')
let pauseTimerElem = document.querySelector('#pause-btn')
let statusElem = document.querySelector('#status')
let pomodoroCountElem = document.querySelector('#pomodoro-count')
let resetPomodoro = document.querySelector('#reset-btn')
let statusFlag = false
let startPomodoroTimer;
let startRestTimer;
let pomodoroCount = 0

function startPomodoro() {
    startPomodoroTimer = setInterval(function () {

        minutes--
        let spanMinute = Math.floor(minutes / 60)
        let spanSecond = minutes % 60

        minuteSpan.innerHTML = (spanMinute < 10 ? '0' : '') + spanMinute
        secondSpan.innerHTML = (spanSecond < 10 ? '0' : '') + spanSecond

        if (spanMinute == 0 && spanSecond == 0) {
            clearInterval(startPomodoroTimer)
            statusElem.innerHTML = 'حالت: استراحت'
            statusFlag = true

            startRestTimer = setInterval(function () {

                restMinute++

                let spanMinute = Math.floor(restMinute / 60)
                let spanSecond = restMinute % 60

                minuteSpan.innerHTML = (spanMinute < 10 ? '0' : '') + spanMinute
                secondSpan.innerHTML = (spanSecond < 10 ? '0' : '') + spanSecond



                if (spanMinute == '5' && spanSecond == '00') {
                    clearInterval(startRestTimer)
                    clearInterval(startPomodoroTimer)
                    statusElem.innerHTML = 'حالت: کار'
                    statusFlag = false
                    pomodoroCount++
                    pomodoroCountElem.innerHTML = pomodoroCount
                    minutes = 5
                    restMinute = 0
                    minuteSpan.innerHTML = '25'
                    secondSpan.innerHTML = '00'
                }
            }, 1000)

        }

    }, 1000)
}

function pauseTimer() {
    clearInterval(startPomodoroTimer)
    clearInterval(startRestTimer)
}

function resetPomodoroTimer() {
    minutes = 1500
    restMinute = 0

    clearInterval(startPomodoroTimer)
    clearInterval(startRestTimer)

    minuteSpan.innerHTML = '25'
    secondSpan.innerHTML = '00'

}

startPomodoroButton.addEventListener('click', startPomodoro)
pauseTimerElem.addEventListener('click', pauseTimer)
resetPomodoro.addEventListener('click', resetPomodoroTimer)