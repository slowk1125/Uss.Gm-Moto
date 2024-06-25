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