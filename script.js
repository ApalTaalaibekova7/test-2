const modalopener = document.querySelector(".modalopener");

modalopener.addEventListener("mouseover", () => {
  modalopener.classList.add("buttondecor");
});

modalopener.addEventListener("mouseout", () => {
  modalopener.classList.remove("buttondecor");
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

const mugiwarapictures = [
    {
        img: 'https://sputnik.kg/img/104667/05/1046670596_71:-1:1217:720_1920x0_80_0_0_d5c7797e82bf96b94b25209d55c4a1c1.jpg',
        name: 'Kel-suu',
        location: 'Kyrgyzstan',
        category: 'Озера'
    },
    { 
        img: 'https://triptokyrgyzstan.com/sites/default/files/media/image/c_jonas_vandermeersch.jpg',
        name: 'Ala-kul',
        location: 'Kyrgyzstan',
        category: 'Озера'
    },
    
    {
        img: 'https://triptokyrgyzstan.com/sites/default/files/styles/modal/public/media/image/2015-02-27_1122_kopiya.jpg?itok=ZjcyAov0',
        name: 'Sary-Chelek',
        location: 'Kyrgyzstan',
        category: 'Озера'
    },
    {
        img: 'https://triptokyrgyzstan.com/sites/default/files/styles/blog_full/public/media/image/c_alexander_zalesskiy_1.jpg?itok=C9j64YmY',
        name: 'Yssyk-Köl',
        location: 'Kyrgyzstan',
        category: 'Озера'
    },
    {
        img: 'https://data.kaktus.media/image/big/2016-06-14_22-01-27_616722.jpg',
        name: 'Девичьи слезы',
        location: 'Kyrgyzstan',
        category: 'Водопады'
    },
    {
        img: 'https://data.kaktus.media/image/big/2016-06-14_22-03-03_496517.jpg',
        name: 'Arslanbop',
        location: 'Kyrgyzstan',
        category: 'Водопады'
    },
    {
        img: 'https://www.advantour.com/img/kyrgyzstan/nature/kyrgyzstan-nature-gorges-canyons-valleys-kegeti.jpg',
        name: 'Kegeti',
        location: 'Kyrgyzstan',
        category: 'ущелья'
    },
    {
        img: 'https://needguide.ru/uploads/Tour_pic_3/37950.jpg',
        name: 'Chunkurchak',
        location: 'Kyrgyzstan',
        category: 'ущелья'
    },
    {
        img: 'https://st-1.akipress.org/st_runews/8/1438908.1.1522053958.jpg',
        name: 'Sulaiman-too',
        location: 'Kyrgyzstan',
        category: 'Гора'
    },
    {
        img: 'https://needguide.ru/uploads/Tour_pic_3/37950.jpg',
        name: 'Chunkurchak',
        location: 'Kyrgyzstan',
        category: 'ущелья'
    },
    {
        img: 'https://st-1.akipress.org/st_runews/8/1438908.1.1522053958.jpg',
        name: 'Sulaiman-too',
        location: 'Kyrgyzstan',
        category: 'Гора'
    },
    {
        img: 'https://st-1.akipress.org/st_limon/8/1629873572_0.jpg',
        name: 'Too',
        location: 'Kyrgyzstan',
        category: 'Гора'
    },
];
const swipwrap = document.querySelector(".swiper-wrapper");

mugiwarapictures.forEach((el) => {
  const swipslide = document.createElement("div");
  swipslide.className = "swiper-slide";

  swipslide.textContent = el.name;
  swipslide.style.backgroundImage = `url(${el.img})`;

  swipwrap.append(swipslide);

  swipslide.addEventListener("click", () => {
    window.open(el.wiki);
  });
  swipslide.addEventListener("mouseover", () => {
    swipslide.style.boxShadow = "0px 1px 0px 500px rgba(0, 0, 0, 0.8) inset";
    swipslide.style.color = "white";
  });
  swipslide.addEventListener("mouseout", () => {
    swipslide.style.boxShadow = "";
    swipslide.style.color = "";
  });
});

const mugiwaravideo = [
  {
    link: "./nature.jpg",
  },
  {
    link: "./opvids/zorovid.mp4",
  },
  {
    link: "./opvids/sanjivid.mp4",
  },
  {
    link: "./opvids/op2.mp4",
  },
  {
    link: "./opvids/op1.mp4",
  },
  {
    link: "./opvids/op3.mp4",
  },
];
const moments__row = document.querySelector(".moments__row");

mugiwaravideo.forEach((el) => {
  const col = document.createElement("div");
  const box = document.createElement("div");
  const vid = document.createElement("video");
  col.className = "col-4";
  box.className = "box";
  vid.className = "vid";

  vid.src = el.link;

  box.append(vid);
  col.append(box);
  moments__row.append(col);


  vid.addEventListener("mouseover", () => {
    vid.play();
    vid.muted = true;
    vid.style.transform = "scale(1.4)";
    vid.style.transition = "0.5s";
    vid.style.borderRadius = "1px";
  });

  vid.addEventListener("mouseout", () => {
    vid.pause();
    vid.style.transform = "";
    vid.style.borderRadius = "10px";
  });
});

const devilfruits = [

  {
    image: 'https://sputnik.kg/img/104667/05/1046670596_71:-1:1217:720_1920x0_80_0_0_d5c7797e82bf96b94b25209d55c4a1c1.jpg',
    name: 'Kel-suu',
    location: 'Kyrgyzstan',
    category: 'Озера'
},
{ 
    image: 'https://triptokyrgyzstan.com/sites/default/files/media/image/c_jonas_vandermeersch.jpg',
    name: 'Ala-kul',
    location: 'Kyrgyzstan',
    category: 'Озера'
},

{
    image: 'https://triptokyrgyzstan.com/sites/default/files/styles/modal/public/media/image/2015-02-27_1122_kopiya.jpg?itok=ZjcyAov0',
    name: 'Sary-Chelek',
    location: 'Kyrgyzstan',
    category: 'Озера'
},
{
    image: 'https://triptokyrgyzstan.com/sites/default/files/styles/blog_full/public/media/image/c_alexander_zalesskiy_1.jpg?itok=C9j64YmY',
    name: 'Yssyk-Köl',
    location: 'Kyrgyzstan',
    category: 'Озера'
},
{
    image: 'https://data.kaktus.media/image/big/2016-06-14_22-01-27_616722.jpg',
    name: 'Девичьи слезы',
    location: 'Kyrgyzstan',
    category: 'Водопады'
},
{
    image: 'https://data.kaktus.media/image/big/2016-06-14_22-03-03_496517.jpg',
    name: 'Arslanbop',
    location: 'Kyrgyzstan',
    category: 'Водопады'
},
{
    image: 'https://www.advantour.com/img/kyrgyzstan/nature/kyrgyzstan-nature-gorges-canyons-valleys-kegeti.jpg',
    name: 'Kegeti',
    location: 'Kyrgyzstan',
    category: 'ущелья'
},
{
    image: 'https://needguide.ru/uploads/Tour_pic_3/37950.jpg',
    name: 'Chunkurchak',
    location: 'Kyrgyzstan',
    category: 'ущелья'
},
{
    image: 'https://st-1.akipress.org/st_runews/8/1438908.1.1522053958.jpg',
    name: 'Sulaiman-too',
    location: 'Kyrgyzstan',
    category: 'Гора'
},
{
    image: 'https://needguide.ru/uploads/Tour_pic_3/37950.jpg',
    name: 'Chunkurchak',
    location: 'Kyrgyzstan',
    category: 'ущелья'
},
{
    image: 'https://st-1.akipress.org/st_runews/8/1438908.1.1522053958.jpg',
    name: 'Sulaiman-too',
    location: 'Kyrgyzstan',
    category: 'Гора'
},
{
    image: 'https://st-1.akipress.org/st_limon/8/1629873572_0.jpg',
    name: 'Too',
    location: 'Kyrgyzstan',
    category: 'Гора'
},
];
const dftypes = ["all", "Гора", "ущелья","Озера", "Водопады"];

const dfrow = document.querySelector(".df__row");

const categoriesRender = (data) => {
  dfrow.innerHTML = "";
  data.forEach((el) => {
    const col = document.createElement("div");
    const category = document.createElement("div");
    const location = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h4");
    const type = document.createElement("p");

    location.className = "dfinnertext";
    category.className = "dfbox";
    col.className = "col-3";

    image.src = el.image;
    name.textContent = el.name;
    type.textContent = el.category;


    category.append(image, location);
    location.append(type, name);
    col.append(category);
    dfrow.append(col);
  });
};

categoriesRender(devilfruits);

const inputsearchbar = document.querySelector(".searchbarinput");

inputsearchbar.addEventListener("input", (e) => {
  const result = devilfruits.filter((el) => {
    return el.name.toLowerCase().includes(inputsearchbar.value.toLowerCase());
  });

  if (result.length > 0) {
    categoriesRender(result);
  } else {
    dfrow.textContent = "No items like this";
  }
});

// dftypes.forEach((el) => {
//   const dftypebtn = document.createElement("button");

//   dftypebtn.textContent = el;

//   dftypebtn.className = "dftypebtn";

//   dftypeswrap.append(dftypebtn);
// });

const onButtonClickRenderItems = () => {
  const dftypeswrap = document.querySelector(".dftypeswrap");
  dftypes.forEach((el) => {
    const dftypebtn = document.createElement("button");

    dftypebtn.textContent = el;
    dftypebtn.className = "dftypebtn";

    dftypebtn.addEventListener("click", () => {
      if (el === "all") {
        categoriesRender(devilfruits);
      } else {
        const result = devilfruits.filter((item) => {
          return item.type === el;
        });
        categoriesRender(result);
      }
    });

    dftypeswrap.append(dftypebtn);
  });
};
onButtonClickRenderItems();

const activeButton1 = () => {
  const categoryBtns = document.querySelectorAll(".dftypebtn");
  categoryBtns.forEach((el, parentIndex) => {
    el.addEventListener("click", () => {
      categoryBtns.forEach((item, childIndex) => {
        if (parentIndex === childIndex) {
          item.classList.add("activebtn");
        } else if (parentIndex !== childIndex) {
          item.classList.remove("activebtn");
        }
      });
    });
  });
};
activeButton1();






// // Получаем ссылки на элементы
// const products = document.querySelectorAll(".product");
// const selectedProductName = document.getElementById("selectedProductName");

// // Обработчик нажатия на товар
// function handleProductClick() {
//   const productId = this.getAttribute("id");
//   selectedProductName.textContent = `Товар ${productId}`;
// }

// // Привязываем обработчик нажатия к каждому товару
// products.forEach((product) => {
//   product.addEventListener("click", handleProductClick);
// });

// const fouremperors = [
//   {
//     name: "Shanks",
//     img: "https://gamerwall.pro/uploads/posts/2022-10/1666010653_3-gamerwall-pro-p-gori-kirgizii-pinterest-3.jpg",
//     bounty: "4,048,900,000B",
//     crew: "Red Hair Pirates",
//   },
//   {
//     name: "Marshall D. Teach",
//     img: "https://www.animesenpai.net/wp-content/uploads/2022/09/ecf05f1ddd74440443031269c66d58d0-1024x576.jpg.webp",
//     bounty: "3,996,000,000B",
//     crew: "Black Beard Pirates",
//   },
//   {
//     name: "Clown Buggy",
//     img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Buggy-One-Piece.jpg",
//     bounty: "3,189,000,000B",
//     crew: "Cross-Guild",
//   },
//   {
//     name: "Monkey D. Luffy",
//     img: "https://staticg.sportskeeda.com/editor/2022/07/519fa-16586727111936-1920.jpg?w=840",
//     bounty: "3,000,000,000B",
//     crew: "Mugiwara Pirates",
//   },
// ];

// fouremperors.forEach((el,index)=>{
//   const parentparentbox = document.createElement('div')
//   const parentbox =document.createElement('div')
//   const box = document.createElement('div')
//   const name = document.createElement('p')
//   const bounty = document.createElement('p')
//   const crew = document.createElement('p')
//   const img = document.createElement('img')

//   parentparentbox.className = 'product'
//   parentbox.classname = 'box__first'
//   box.classname = 'box__second'
//   name.classname = 'fouremperorsname'
//   bounty.classname = 'fouremperorsbounty'
//   crew.className = 'fouremperorscrew'

//   img.src = el.img
//   name.textContent = el.name
//   bounty.textContent = el.bounty
//   crew.textContent = el.crew
//   parentparentbox.id = index + 1

//   box.append(img,name,bounty,crew)
//   parentbox.append(box)
//   parentparentbox.append(parentbox)
//   fouremperorswrap.append(parentparentbox)

// })






