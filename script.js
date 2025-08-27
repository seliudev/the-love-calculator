document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculate");

  calculateBtn.addEventListener("click", () => {
    // Generates a random number between 1 and 100
    const loveScore = Math.floor(Math.random() * 100) + 1;

    // This part shows result of love score calculation. If the score is higher than 70 then a special message will be shown as well.
    if (loveScore > 70) {
      alert(
        `Your love score is ${loveScore}%. You love each other like Kanye loves Kanye!`
      );
    } else {
      alert(`Your love score is ${loveScore}%`);
    }
  });
});
