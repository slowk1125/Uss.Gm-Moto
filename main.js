const btn1 = document.querySelector(".my-clicked-btn1");
const btn2 = document.querySelector(".my-clicked-btn2");
const btn3 = document.querySelector(".my-clicked-btn3");

const modal_body = document.querySelector(".modal-body-cars");

const images_for_btn1 = [
  "static/images/1673726159_foni-club-p-kartinki-na-rabochii-stol-pitbaik-4.jpg",
];
const images_for_btn2 = [
  "static/images/1673726159_foni-club-p-kartinki-na-rabochii-stol-pitbaik-4.jpg",
];
const images_for_btn3 = [
  "static/images/1673726159_foni-club-p-kartinki-na-rabochii-stol-pitbaik-4.jpg",
  "static/images/Tomos-Youngstr-Racing-Youngstr-Racing-3.jpg",
];

btn1.addEventListener("click", (e) => {
  modal_body.innerHTML = "";
  let htmlImages = "";

  images_for_btn1.forEach((el) => {
    htmlImages += `<img src="${el}" alt="">`;
  });
  modal_body.innerHTML = htmlImages;
});

btn2.addEventListener("click", (e) => {
  modal_body.innerHTML = "";
  let htmlImages = "";

  images_for_btn2.forEach((el) => {
    htmlImages += `<img src="${el}" alt="">`;
  });
  modal_body.innerHTML = htmlImages;
});

btn3.addEventListener("click", (e) => {
  modal_body.innerHTML = "";
  let htmlImages = "";

  images_for_btn3.forEach((el) => {
    htmlImages += `<img src="${el}" alt="">`;
  });
  modal_body.innerHTML = htmlImages;
});



// При добавлении нового отзыва
// При добавлении нового отзыва// При добавлении нового отзыва
function addReviewToStorage(review) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  loadReviewsFromStorage(); // перезагружаем отзывы после добавления нового отзыва
}

// При загрузке страницы
function loadReviewsFromStorage() {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML = ''; // очищаем контейнер перед добавлением новых отзывов
  reviews.forEach((review, index) => {
    addReview(review.userName, review.reviewContent, index); // передаем индекс для удаления
  });
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
  
  var userName = document.getElementById('userName').value;
  var reviewContent = document.getElementById('reviewContent').value;
  
  addReview(userName, reviewContent);
  addReviewToStorage({ userName, reviewContent }); // Сохраняем отзыв в локальное хранилище
});

function addReview(userName, reviewContent, index) {
  var reviewContainer = document.getElementById('reviewContainer');
  var newReview = document.createElement('div');
  newReview.className = 'comment';
  newReview.innerHTML = `
    <h4>${userName}</h4>
    <p>${reviewContent}</p>
    <button onclick="deleteReview(${index})">Удалить</button> <!-- Добавляем кнопку "Удалить" -->
  `;
  reviewContainer.appendChild(newReview);
}

function deleteReview(index) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.splice(index, 1); // удаляем отзыв с указанным индексом
  localStorage.setItem('reviews', JSON.stringify(reviews));
  loadReviewsFromStorage(); // перезагружаем отзывы после удаления
}

// При загрузке страницы
window.addEventListener('load', function() {
  loadReviewsFromStorage(); // Загружаем отзывы из локального хранилища при загрузке страницы
});


$(window).ready(function(){
  $(".boton").wrapInner('<div class=botontext></div>');
      
      $(".botontext").clone().appendTo( $(".boton") );
      
      $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
      
      $(".twist").css("width", "25%").css("width", "+=3px");
  });