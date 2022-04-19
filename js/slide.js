'use strict';

{
    const images = [
        'images/slideshow/slideshow1.jpg',
        'images/slideshow/slideshow2.jpg',
        'images/slideshow/slideshow3.jpg',
        'images/slideshow/slideshow4.jpg',
        'images/slideshow/slideshow5.jpg',
        'images/slideshow/slideshow6.jpg',
        'images/slideshow/slideshow7.jpg',
        'images/slideshow/slideshow8.jpg',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main_photo');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if(index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            //  各li要素を作るときに、同じタイミングでそれぞれにクリックイベントを作っている
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

        const next = document.getElementById('next');
        next.addEventListener('click', () => {
            let target = currentIndex + 1;
            if (target === images.length) {
                target = 0;
            }
            document.querySelectorAll('.thumbnails > li')[target].click();
        });

        const prev = document.getElementById('prev');
        prev.addEventListener('click', () => {
            let target = currentIndex - 1;
            if (target < 0) {
                target = images.length - 1;
            }
            document.querySelectorAll('.thumbnails > li')[target].click();
        });

        let timeoutId;

        function playSlideshow() {
            timeoutId = setTimeout(() => {
                next.click();
                playSlideshow();
            }, 1000);
        }

        let isPlaying = false;

        const play = document.getElementById('play');
        play.addEventListener('click', () => {
            if(isPlaying === false) {
            playSlideshow();
                play.textContent = 'Pause';
            } else {
                clearTimeout(timeoutId);
                play.textContent = 'play';
            }
            isPlaying = !isPlaying;
        });
}