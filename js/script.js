    const text = '…with a suspicious amount of help from ChatGPT.';
    const span = document.getElementById('hidden-text');
    const btn = document.getElementById('toggle-btn');
    let revealed = false;
    let timer = null;

    function showNext(i = 0) {
        if (i < text.length) {
            span.textContent += text[i];
            timer = setTimeout(() => showNext(i + 1), 50);
        }
    }

    function revealText() {
        clearTimeout(timer);
        span.textContent = '';
        showNext();
        btn.textContent = 'Hide The Truth';
        revealed = true;
    }

    function hideText() {
        clearTimeout(timer);
        span.innerHTML = '&nbsp;';
        btn.textContent = 'Reveal The Truth';
        revealed = false;
    }

    function toggleText() {
        revealed ? hideText() : revealText();
    }

    btn.addEventListener('click', toggleText);

    document.getElementById('theme-toggle').addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('dark-theme');
    });
