// const profilButton = document.getElementById('profil_button');
// const menuProfil = document.getElementById('menu_profil');
// const lineDiv = document.getElementById('center_line');
// const menuLine = document.querySelector(".line_menu_toggle");
const headerBar = document.getElementById('toggle_my_header'); 
// const header = document.querySelector('header');
// const body = document.body;
// const theInput = document.querySelector('.search_bar_input');

// let theBlur = false;

// const blurEffect = document.querySelector('.effect_blur')
// let myVar =  true;

// profilButton.addEventListener('click', ()=>{
//     menuProfil.classList.toggle('menu_toggle');
// });
// const profileButton = document.getElementById('profil_button');

// const headerProfile = document.getElementById('header_profile');

//  const menuProfile = document.getElementById('menu_profil')

// console.log(profileButton)

// profileButton.addEventListener('click', ()=>{
//     menuProfile.classList.toggle('menu_toggle');
// });


const displayProfiles = [
    {
      id: 1,
      userName: "Rafael",
      job : "Engineer mechanical",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "3j",
      text: "J'ai décidé de continuer ce projet en le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 2,
      userName: "Eric malin",
      job : "Engineer Electrical",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "10j",
      text: " rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 3,
      userName: "Cherifa",
      job : "Docteur Bio",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "4j",
      text: "J'ai décidé de continuer ce projet en le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 4,
      userName: "Joel makambi",
      job : "Petrolier",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "12j",
      text: " rendant réactif et  dolor sit amet consectetur en rajoutant certains effets.",
    },
    {
      id: 5,
      userName: "Luccin Idrisse",
      job : " PHP Developer",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "20j",
      text: "J'ai décidé de  Lorem ipsum dolor sit amet consectetur  continuer ce projet en le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 6,
      userName: "Hortone Paul",
      job : " Frontend Engineer",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "5j",
      text: " Lorem ipsum dolor sit amet consectetur  rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 7,
      userName: "Kevin Person",
      job : "Backend Developer",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "9j",
      text: " le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 8,
      userName: "Daniel Miakel",
      job : "Electrical Engineer ",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "3J",
      text: " Lorem ipsum dolor sit amet consectetur  rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 9,
      userName: "Jefthe Dupond",
      job : "Engineer bio tech",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "7j",
      text: " ce projet en le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 10,
      userName: "Matias Mervil",
      job : "International trade",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "1j",
      text: " Lorem ipsum dolor sit amet consectetur  rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 11,
      userName: "Abbis Assim",
      job : "React Developer",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "30j",
      text: "J'ai le projet en le rendant réactif et en rajoutant certains effets.",
    },
    {
      id: 12,
      userName: "Trophe Assim",
      job : "HR on Google",
      img: "https://picsum.photos/seed/picsum/200/300",
      day: "11j",
      text: "J'ai le projet ele rendant réactif et en rajoutant certains effets.",
    },
  ];

  
const searchBar = document.querySelector('.search_bar_input');
const body = document.body;
let homeContainer = document.querySelector('.center_container');

let blurEl = document.createElement('span');
   body.appendChild(blurEl);


// console.log(homeContainer)

searchBar.addEventListener('focus', ()=>{
   blurEl.classList.add('blur_element');
   searchBar.classList.add('input_on_focus');

})
searchBar.addEventListener('blur', ()=>{

   blurEl.classList.remove('blur_element');
   searchBar.classList.remove('input_on_focus');
})

window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
//   console.log(scrollTop, scrollHeight, clientHeight)
    // if ( scrollTop > 400){
    //     headerBar.classList.add('toggle_menu_come');
    // }
    // else{
       
    // headerBar.classList.remove('toggle_menu_come');
    // }

    if (scrollTop + clientHeight === scrollHeight){
        console.log('find');
        addBox(5);

    }

});

const addBox = idx =>{
    for(let i = 0; i < idx; i++){
        const item = document.createElement('div');
        // item.setAttribute('class', 'second_post');
        item.setAttribute('class', 'color');
        homeContainer.appendChild(item);

        displayMenuItems()
        // let displayMenu = item.map(items =>{

        //     return `<div class="post third_post">
        //     <div class="profil_name_job">
        //         <img class="post_photo_profil" src="./css/images/profil15.jpg" alt="#">
        //         <div class="name_and_job"> 
        //             <h5>Valerie Derlene</h4>
        //             <p>Software Engeneer</p>
        //             <span>5j &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
        //         </div>
        //     </div>
        //     <p class="post_text"> Si tu es une personne passionnée et créative et que tu veux rendre l'art accessible à tous, viens rejoindre notre partenaire. </p>
        //     <div class="publication">
        //         <img src="./css/images/photo6-min.jpg" alt="">
        //     </div>
        // </div>`
        // //     return `<article class="food_container">
        // //     <div class="image_box">
        // //       <img src="${items.img}" alt="#" id="food_img" />
        // //     </div>
        
        // //     <div class="text_container">
        // //       <div class="title_price">
        // //         <h2 id="food_title">${items.title}</h2>
        // //         <p>$<span id="price">${items.price}</span></p>
        // //       </div>
        
        // //       <div>
        // //         <p id="description">${items.text}</p>
        // //       </div>
        // //     </div>
        // //   </article>`
        
        // })
        // displayMenu = displayMenu.join('');
        // container.innerHTML = displayMenu;
    }
}



function displayMenuItems(){
    // let randomNumber = Math.floor(Math.random() * 11)
    //  let randomNumber = Math.floor(Math.random() * 6)
    
    let displayMenu = displayProfiles.map(items =>{
  
      return `<div class="post third_post">
        <div class="profil_name_job">
            <img class="post_photo_profil" src="./css/images/profil15.jpg" alt="#">
            <div class="name_and_job"> 
                <h5>${displayProfiles[getRandomNumber()].userName}</h4>
                <p>${displayProfiles[getRandomNumber()].job}</p>
                <span>${displayProfiles[getRandomNumber()].day} &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
            </div>
        </div>
        <p class="post_text"> ${displayProfiles[getRandomNumber()].text}</p>
        <div class="publication">
            <img src="${displayProfiles[getRandomNumber()].img}" alt="">
        </div>
        </div>`
  
    })
    displayMenu = displayMenu.join('');
    homeContainer.innerHTML = displayMenu;
    //    console.log(randomNumber);
}
  
function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

// console.log(getRandomNumber())






const dynamicSearch = () => {

    const valueSearch = document.getElementById("search_message").value.toUpperCase();
    const boxItems = document.querySelectorAll(".message_profil_item");
  
    const title = document.getElementsByClassName("name_pro");
  
    for (let i = 0; i < title.length; i++) {
      let match = boxItems[i].getElementsByClassName("name_pro")[0];
  
      if (match) {
        let textValue = match.textContent;
        if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
          boxItems[i].style.display = "";
        } else {
          boxItems[i].style.display = "none";
        }
      }
    }
  };
  















// console.log(window)
// window.addEventListener('scroll', () =>{

//     if( screenTop > 200){
//             headerBar.style.display = "block";
//             // myVar ==false;
//     }
//     else
//         headerBar.style.display = "none";
//         myVar =  true;
  
// });
// if( myVar){
//     headerBar.style.display ="none";
// }


// theInput.onfocus = function(){
//     blurEffect.classList.toggle('blur_appear')
//     theBlur == true;

//     if(theBlur == true){
//         header.addEventListener('click', () =>{
//             blurEffect.classList.toggle('blur_none')
//         })
//     }
// }

