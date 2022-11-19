let popup = document.querySelector('dynamic-island');
popup.onclick = function () {
	popup.classList.toggle('active');
};

const s = document.createElement('script');
s.src = 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js';
document.body.appendChild(s);

