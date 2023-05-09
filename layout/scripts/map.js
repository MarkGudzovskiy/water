const tooltip = document.querySelector('.tooltip');
const districts = document.getElementsByClassName('district');
const popupBg = document.querySelector('.infobg');
const popup = document.querySelector('.info');
const close = document.querySelector('.close_info')


for (let district of districts) {
    district.addEventListener('mousemove', function (event){
        console.log(event)
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (event.pageY + 20) + 'px';
        tooltip.style.left = (event.pageX + 20) + 'px';
    });

    district.addEventListener('mouseenter', function (){
        tooltip.style.display = 'block';
    })

    district.addEventListener('mouseleave', function (){
        tooltip.style.display = 'none';
    })

    district.addEventListener('click', function (){
        popup.querySelector('.info_header').innerText = this.dataset.title;
        popupBg.classList.remove('infobg');
        popupBg.classList.add('infobgactive');
        let c = '#'+this.dataset.title.replace(/\s+/g, '');
        let info = document.querySelector(c);
        info.querySelector('.info_header').innerText = this.dataset.title;
        info.classList.remove('info_text_hidden');
        info.classList.add('info_text');
    })

}

close.addEventListener('click', function (){
    let info = document.querySelector('.info_text');
    info.classList.remove('info_text');
    info.classList.add('info_text_hidden');
    popupBg.classList.remove('infobgactive');
    popupBg.classList.add('infobg');
})

document.addEventListener('click', (event)=>{
    if(event.target === popupBg){
        let info = document.querySelector('.info_text');
        info.classList.remove('info_text');
        info.classList.add('info_text_hidden');
        popupBg.classList.remove('infobgactive');
        popupBg.classList.add('infobg');
    }
})