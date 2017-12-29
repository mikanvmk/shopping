import {Component, ViewChild} from "@angular/core";
import {SwiperComponent} from "angular2-useful-swiper";
import {Constant} from "../../common/constant";

@Component({
  selector :'home',
  templateUrl:'./home.html',
  styleUrls:['./home.scss']
})

export class Home {

  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  public Constant = Constant;

  images = [
    'http://www.thotayboutique.com/wp-content/uploads/2017/05/Slider-ThoTay-01-1200.jpg',
    'http://www.thotayboutique.com/wp-content/uploads/2017/05/Slider-ThoTay-01-1200.jpg',
    'http://www.thotayboutique.com/wp-content/uploads/2017/05/tho-tay-khai-truong.jpg',
    'http://www.thotayboutique.com/wp-content/uploads/2017/05/Slider-ThoTay-02.jpg',
    'http://www.thotayboutique.com/wp-content/uploads/2017/05/tho-tay-khai-truong.jpg'
  ];

  products :any[] = [
    {
      url : 'http://www.thotayboutique.com/wp-content/uploads/2017/05/Slider-ThoTay-01-1200.jpg',
      name : "aaaa",
      price:10000
    }
  ];

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    autoplay : 5000,
    loop : true,
    onClick : swiper => {
      swiper.startAutoplay()
    },
    onTouchEnd : swiper => {
      setTimeout(()=>{
        swiper.startAutoplay()
      })
    }
  };

  next() {
    this.usefulSwiper.swiper.slideNext();
  }
}
