window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();

let p = document.createElement("p");
const word = document.querySelector(".words");
word.appendChild(p);

recognition.addEventListener("end", recognition.start);
recognition.addEventListener("result", voiceHandler);

function voiceHandler(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // *me
  // const transcript = e.results[0][0].transcript;

  if (transcript.includes("Love Story")) {
    matchHandler(0);
  }

  if (transcript.includes("girlfriend")) {
    matchHandler(1);
  }

  if (transcript.includes("sparks fly")) {
    matchHandler(2);
  }

  if (transcript.includes("haunted")) {
    matchHandler(3);
  }

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    word.appendChild(p);
  }

  console.log(transcript);
  p.innerHTML = transcript;
}

function matchHandler(index) {
  const audio = document.querySelector(`audio[data-item="${index}"]`);
  const singer = document.querySelector(`.singer[data-item="${index}"]`);
  const pause = document.querySelector(".pause");

  singer.classList.add("playing");
  audio.play();

  pause.addEventListener("click", function (e) {
    singer.classList.remove("playing");
    audio.pause();
  });
}
