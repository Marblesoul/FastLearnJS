const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function showStatistics(stats) {
  pollAnswers.innerHTML = '';

  stats.forEach(item => {
    const total = stats.reduce((sum, stat) => sum + stat.votes, 0);
    const percentage = ((item.votes / total) * 100).toFixed(2);

    const statDiv = document.createElement('div');
    statDiv.className = 'poll__answer';
    statDiv.textContent = `${item.answer}: ${percentage}% (${item.votes} голосов)`;

    pollAnswers.appendChild(statDiv);
  });
}

function sendVote(pollId, answerIndex) {
  const voteXhr = new XMLHttpRequest();
  voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  voteXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  voteXhr.addEventListener('load', () => {
    if (voteXhr.status === 200 || voteXhr.status === 201) {
      const response = JSON.parse(voteXhr.responseText);
      alert('Спасибо, ваш голос засчитан!');
      showStatistics(response.stat);
    }
  });

  voteXhr.send(`vote=${pollId}&answer=${answerIndex}`);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const pollId = response.id;
    const pollData = response.data;

    pollTitle.textContent = pollData.title;

    pollAnswers.innerHTML = '';

    pollData.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answer;

      button.addEventListener('click', () => {
        sendVote(pollId, index);
      });

      pollAnswers.appendChild(button);
    });
  }
});

xhr.send();
