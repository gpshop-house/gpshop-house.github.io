function showPage(page) {
  const content = document.getElementById("content");
  if (page === "home") {
    content.innerHTML = "<h1>Trang chủ</h1><p>Nội dung trang chủ.</p>";
  } else if (page === "about") {
    content.innerHTML = "<h1>Giới thiệu</h1><p>Đây là trang giới thiệu.</p>";
  }
}
