window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.lang = "en-US";
recognition.start();

let p = document.createElement("p");
const word = document.querySelector(".words");
word.appendChild(p);

recognition.addEventListener("result", function (e) {
  // *wes bos
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // *me
  // const transcript = e.results[0][0].transcript;

  const loveStory = document.querySelector(`.singer[data-item="0"]`);
  const girlfriend = document.querySelector(`.singer[data-item="1"]`);
  const sparksfly = document.querySelector(`.singer[data-item="2"]`);
  const haunted = document.querySelector(`.singer[data-item="3"]`);

  if (transcript.includes("Love Story")) {
    loveStory.style.backgroundColor = "red";
  }

  if (transcript.includes("hey hey you you")) {
    girlfriend.style.backgroundColor = "pink";
  }

  if (transcript.includes("drop everything now")) {
    sparksfly.style.backgroundColor = "blue";
  }

  if (transcript.includes("come on come on")) {
    haunted.style.backgroundColor = "brown";
  }

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    word.appendChild(p);
  }

  console.log(transcript);
  p.innerHTML = transcript;
});

recognition.addEventListener("end", recognition.start);
