// Đảm bảo DOM đã load xong mới chạy code
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử DOM cần thiết
  const submitBtn = document.getElementById("submit-btn");
  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("error-message");
  const formContainer = document.getElementById("form-container");
  const infoContainer = document.getElementById("info-container");

  // Chuỗi Regex kiểm tra định dạng email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Bắt sự kiện khi click vào nút Submit
  submitBtn.addEventListener("click", function () {
    // Lấy giá trị người dùng nhập vào và xóa khoảng trắng 2 đầu bằng trim()
    const emailValue = emailInput.value.trim();

    // /*<--#''' What programming language is this''' --!>*/
    if (emailValue === "") {
      errorMessage.textContent = "Vui lòng nhập email của bạn.";
    }
    // 2. Kiểm tra nếu email không hợp lệ (không khớp regex)
    else if (!regex.test(emailValue)) {
      errorMessage.textContent = "Email không hợp lệ. Vui lòng nhập lại.";
    }
    // 3. Nếu email hợp lệ
    else {
      // Xóa dòng lỗi (nếu có)
      errorMessage.textContent = "";

      // Ẩn form đi bằng cách thêm class "hide"
      formContainer.classList.add("hide");

      // Hiện thông tin cá nhân bằng cách xóa class "hide"
      infoContainer.classList.remove("hide");
    }
  });
});
// Select all View More buttons
const viewMoreButtons = document.querySelectorAll(".view-more-btn");

viewMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Traverse up to the parent .career-card, then find its .section-content
    const card = this.closest(".career-card");
    const content = card.querySelector(".section-content");

    // Check if the content is currently hidden
    if (content.classList.contains("hide")) {
      content.classList.remove("hide");
      this.textContent = "▲ View Less";
    } else {
      content.classList.add("hide");
      this.textContent = "▼ View More";
    }
  });
});
