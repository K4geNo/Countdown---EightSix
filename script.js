var countDownDate = new Date("Mar 13, 2022 14:30:00").getTime()

var x = setInterval(function() {
    var agora = new Date().getTime()

    var distance = countDownDate - agora

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('count').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

    if (distance < 0) {
        clearInterval(x)
        document.getElementById('counter').innerHTML = 'É HOJEEE!! 🎉'
    }
}, 1000)