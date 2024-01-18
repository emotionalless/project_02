let slideNum = 1;

function changeSlide(num) {
    if (num == 2) {
        document.getElementsByClassName('slider-img_img')[0].style = 'background: url(img/slide-2.jpg), lightgray 50% / cover no-repeat;';
        document.getElementsByClassName('slider-link-nav_name1')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_name3')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_name2')[0].style = 'color: #E3B873; opacity: 1;';
        document.getElementsByClassName('slider-link-nav_rectangle')[0].style = 'width: 108px; right: 260px;';
        document.getElementsByClassName('nav-round-1')[0].style = 'fill-opacity: 0.3;';
        document.getElementsByClassName('nav-round-2')[0].style = 'fill-opacity: 1;';
        document.getElementsByClassName('nav-round-3')[0].style = 'fill-opacity: 0.3;';
        
        slideNum = 2;
    }

    if (num == 3) {
        document.getElementsByClassName('slider-img_img')[0].style = 'background: url(img/slide-3.jpg), lightgray 50% / cover no-repeat;';
        document.getElementsByClassName('slider-link-nav_name1')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_name3')[0].style = 'color: #E3B873; opacity: 1;';
        document.getElementsByClassName('slider-link-nav_name2')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_rectangle')[0].style = 'width: 193.936px; right: 3px;';
        document.getElementsByClassName('nav-round-1')[0].style = 'fill-opacity: 0.3;';
        document.getElementsByClassName('nav-round-2')[0].style = 'fill-opacity: 0.3;'; 
        document.getElementsByClassName('nav-round-3')[0].style = 'fill-opacity: 1;';

        slideNum = 3;
    }

    if (num == 1) {
        document.getElementsByClassName('slider-img_img')[0].style = 'background: url(img/slider_two\ chairs.jpg), lightgray 50% / cover no-repeat;';
        document.getElementsByClassName('slider-link-nav_name1')[0].style = 'color: #E3B873; opacity: 1;';
        document.getElementsByClassName('slider-link-nav_name3')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_name2')[0].style = 'color: white; opacity: 0.3;';
        document.getElementsByClassName('slider-link-nav_rectangle')[0].style = 'width: 193.936px; right: 429px;';
        document.getElementsByClassName('nav-round-1')[0].style = 'fill-opacity: 1;';
        document.getElementsByClassName('nav-round-2')[0].style = 'fill-opacity: 0.3;'; 
        document.getElementsByClassName('nav-round-3')[0].style = 'fill-opacity: 0.3;';

        slideNum = 1;
    }
}

function prevSlide() {
    if (slideNum == 1) {
        changeSlide(3)
        return;
    }
    if (slideNum == 2) {
        changeSlide(1)
        return;
    }
    if (slideNum == 3) {
        changeSlide(2)
        return;
    }
}

function nextSlide() {
    if (slideNum == 1) {
        changeSlide(2)
        return;
    }
    if (slideNum == 2) {
        changeSlide(3)
        return;
    }
    if (slideNum == 3) {
        changeSlide(1)
        return;
    }
}