let number = Math.trunc(Math.random() * 3) + 1;
const btns = document.querySelectorAll('.btn');
const resetGame = document.querySelector('.again');

for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener('click', function () {
        if (number === i) {
            document.body.style.backgroundColor = '#60b347';
        } else {
            document.body.style.backgroundColor = '#222';
        }
    })

}

resetGame.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    number = Math.trunc(Math.random() * 3) + 1;
});
