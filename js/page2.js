// html加载完后加载
$(document).ready(function () {

  // 从本地存储获取数据
  function getDataFromLocal() {
    return JSON.parse(localStorage.getItem('catList')) || [];
  }
  // 调用函数获取数据
  const storedData = getDataFromLocal();
  // console.log(storedData);

  // 加载网站
  storedData.forEach((item, index) => {
    setTimeout(function () {//延迟1秒后加载图片
      var imgSrc = item.img ? item.img : 'img/暂无.png';
      $('.container_h').append(`
        <div class="card">
            <a href="${item.href}" target="_blank">
                <div class="card-image">
                    <img src="${imgSrc}" alt="${item.title}">
                </div>
                <div class="card-content">
                    <h2 class="card-title">${item.title}</h2>
                </div>
            </a>
        </div>
      `);
    }, 1000);
  });


  // 加载网站
  function loadWebsite(data) {
    $('.container_h').empty(); // 清空容器内容
    data.forEach((item, index) => {
      var imgSrc = item.img ? item.img : 'img/暂无.png';
      $('.container_h').append(`
        <div class="card">
            <a href="${item.href}" target="_blank">
                <div class="card-image">
                    <img src="${imgSrc}" alt="${item.title}">
                </div>
                <div class="card-content">
                    <h2 class="card-title">${item.title}</h2>
                </div>
            </a>
        </div>
      `);
    });
  }

  // 刷新按钮点击事件
  $('#refresh-btn').click(function () {
    const newData = getDataFromLocal();
    loadWebsite(newData);
    $("#success-alert").fadeIn(300).delay(1000).fadeOut(300);
  });
});