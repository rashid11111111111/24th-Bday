const Title = document.querySelector('.title');
const msg = document.querySelector('.js-type');
const msg2 = document.querySelector('.msg-2');

// const bdayDisappear = setTimeout(Bdaydisappear, 5000);

// const timeout = setInterval(Bdaydisappear, 5000);
// const msg2Appear = setInterval(message2, 10000);

function StartSequence() {
    setTimeout(playAudio, 1000)
    setTimeout(Bdaydisappear, 5000);
    setTimeout(message2, 10000);
    setTimeout(loop, 20000);
}

function Bdaydisappear() {
    msg.classList.remove("hidden");
    msg.classList.add("typewriter");

    Title.classList.add("hidden");
}
function message2() {
    msg2.classList.remove("hidden");
    msg2.classList.add("typewriter");
}

function loop() {
    msg.classList.add("hidden");
    msg2.classList.add("hidden");

    msg.classList.remove("typewriter");
    msg2.classList.remove("typewriter");
    Title.classList.remove("hidden");

    StartSequence();
}

StartSequence();

//play music
function playAudio() {
    setTimeout(function () {
        var audio = document.getElementById("myAudio");
        audio.play();
    }, 1000);  // Convert seconds to milliseconds
}

// Play the audio after 2.5 seconds
// playAudioWithDelay();