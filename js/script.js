// const nightModeButton = document.getElementById("nightModeButton");
// const nightModeDiv = document.getElementById("nightModeDiv");

// // Dark Mode Handler => switch theme on button click.

// const darkModeHandler = () => {
//   if (localStorage.getItem("darkMode") == "1") {
//     nightModeDiv.classList.remove("dark-theme");
//     localStorage.setItem("darkMode", "0");
//   } else {
//     nightModeDiv.classList.add("dark-theme");
//     localStorage.setItem("darkMode", "1");
//   }
// };

// // Dark Moda State Handler => check if a 'darkMode' local store exist. 
// // If true, activate darkMode, else create a localStorage called 'darkMode'

// const darkModeState = () => {
//   if (localStorage.getItem("darkMode") == "1") {
//     nightModeDiv.classList.add("dark-theme");
//   } else {
//     localStorage.setItem("darkMode", "0");
//   }
// };

// nightModeButton.addEventListener("click", darkModeHandler);
// nightModeDiv.addEventListener("load", darkModeState());

// const audioElement = document.getElementById('player');
// let startPlayPromise = audioElement.play();

// if (startPlayPromise !== undefined) {
//   startPlayPromise
//     .then(() => {
//       // Start whatever you need to do only after playback
//       // has begun.
//     })
//     .catch((error) => {
//       if (error.name === "NotAllowedError") {
//         showPlayButton(audioElement);
//       } else {
//         // Handle a load or playback error
//       }
//     });
// }
