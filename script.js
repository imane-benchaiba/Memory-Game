const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];
  let j;
  let front_card = document.querySelectorAll(".card_front i");
  let card = document.getElementsByClassName("card");
  let selectedCard = "";
  let matchedCards = 0;
  for (let i = icons.length-1; i > 0 ; i--) {
    j = parseInt(Math.random()*(i+1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  for (let i = 0; i < card.length; i++){
      card[i].classList.add("visible");
  }
  
  setTimeout(function(){
    for (let i = 0; i < card.length; i++){
        card[i].classList.remove("visible");
    }
  },1000);

  for (let i = 0; i < front_card.length; i++) {
    front_card[i].classList.add(icons[i]);
  }
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      if (!card[i].classList.contains("visible")) {
        card[i].classList.add("visible");
        if(matchedCards == 8) {
          card[i].classList.add("matched");
        }
        setTimeout(() => {
          if (selectedCard == "") {
            selectedCard = card[i];
          } else {
            let icone1 = card[i].querySelector(".card_front i");
            let icone2 = selectedCard.querySelector(".card_front i");
            if (icone1.classList.value === icone2.classList.value) {
              card[i].classList.add("matched");
              selectedCard.classList.add("matched");
              selectedCard = "";
              matchedCards += 2;
            } else {
              card[i].classList.remove("visible");
              selectedCard.classList.remove("visible");
              selectedCard = "";
            }
          }
        }, 1000);
      }
    });
  }

  
  
};


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

