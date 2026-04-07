function saveScore(name, score) {
  db.ref("leaderboard").push({
    name: name,
    score: score
  });
}
db.ref("leaderboard").on("value", (snapshot) => {
  const data = snapshot.val();
  let html = "";

  const sorted = Object.values(data).sort((a, b) => b.score - a.score);

  sorted.forEach((item, index) => {
    html += `<li>${index+1}. ${item.name} - ${item.score}</li>`;
  });

  document.getElementById("leaderboard").innerHTML = html;
});