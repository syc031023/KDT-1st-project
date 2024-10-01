    // 보낼 데이터
    const data = 'data';

    const aTag = document.querySelector('a');
    aTag.addEventListener('click', () => {
      location.href = `/calendar/detail.html?${data}`
});