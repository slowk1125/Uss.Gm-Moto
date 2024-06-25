// Получение списка заказов из локального хранилища браузера
var orders = JSON.parse(localStorage.getItem('orders')) || [];

// Отображение списка заказов
var orderList = document.getElementById('order-list');

orders.forEach(function (order) {
  var orderCard = document.createElement('div');
  orderCard.classList.add('order-card');

  var orderNumber = document.createElement('h3');
  orderNumber.classList.add('order-number');
  orderNumber.textContent = 'Заказ №' + order.number;

  var orderDate = document.createElement('span');
  orderDate.classList.add('order-date');
  orderDate.textContent = order.date;

  var orderBody = document.createElement('div');
  orderBody.classList.add('order-body');

  var orderTitle = document.createElement('h4');
  orderTitle.classList.add('order-title');
  orderTitle.textContent = order.title;

  var orderDescription = document.createElement('p');
  orderDescription.classList.add('order-description');
  orderDescription.textContent = order.description;

  var orderPrice = document.createElement('div');
  orderPrice.classList.add('order-price');

  var orderPriceValue = document.createElement('span');
  orderPriceValue.classList.add('order-price-value');
  orderPriceValue.textContent = order.price + '$';

  var orderPriceCount = document.createElement('span');
  orderPriceCount.classList.add('order-price-count');
  orderPriceCount.textContent = 'x' + order.count;

  orderPrice.appendChild(orderPriceValue);
  orderPrice.appendChild(orderPriceCount);

  orderBody.appendChild(orderTitle);
  orderBody.appendChild(orderDescription);
  orderBody.appendChild(orderPrice);

  var orderFooter = document.createElement('div');
  orderFooter.classList.add('order-footer');

  var orderTotalPrice = document.createElement('span');
  orderTotalPrice.classList.add('order-total-price');
  orderTotalPrice.textContent = (order.price * order.count) + '$';

  var orderStatus = document.createElement('button');
  orderStatus.classList.add('order-status');
  orderStatus.textContent = order.status;

  if (order.status === 'Выполнен') {
    orderStatus.classList.add('completed');
  } else if (order.status === 'Отменен') {
    orderStatus.classList.add('canceled');
  }

  orderFooter.appendChild(orderTotalPrice);
  orderFooter.appendChild(orderStatus);

  orderCard.appendChild(orderNumber);
  orderCard.appendChild(orderDate);
  orderCard.appendChild(orderBody);
  orderCard.appendChild(orderFooter);

  orderList.appendChild(orderCard);
});

// Сохранение нового заказа в локальное хранилище браузера
function saveOrder(number, date, title, description, price, count, status) {
  var order = {
    number: number,
    date: date,
    title: title,
    description: description,
    price: price,
    count: count,
    status: status
  };

  orders.push(order);

  localStorage.setItem('orders', JSON.stringify(orders));

  location.reload();
}