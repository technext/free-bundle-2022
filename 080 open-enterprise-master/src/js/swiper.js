const swipers = document.querySelectorAll('.swiper-container');
/* eslint-disable */
function deepMerge(...sources) {
  let acc = {}
  for (const source of sources) {
    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = []
      }
      acc = [...acc, ...source]
    } else if (source instanceof Object) {
      for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
          value = deepMerge(acc[key], value)
        }
        acc = { ...acc, [key]: value }
      }
    }
  }
  return acc
}

function swiperInit(){
  swipers.forEach(swiper => {
    // console.log(swiper.dataset.option ? JSON.parse(swiper.dataset.option) : {});
    return new window.Swiper(swiper, deepMerge(
      {
        slidesPerView: 1,
    
        spaceBetween: 30,
        pagination: {
            el: document.getElementById(swiper.dataset.paginationTarget),
            type: 'bullets',
            clickable: true,
    
        },
        breakpoints: {
          670: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }
      },
      swiper.dataset.option ? JSON.parse(swiper.dataset.option) : {}
    ));
  })
  
}

export default swiperInit;