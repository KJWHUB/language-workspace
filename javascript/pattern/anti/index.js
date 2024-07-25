// 1. 스파게티 코드 (jQuery 사용 예시):
// 안티패턴
$("#button").click(function () {
  if ($("#input").val() === "") {
    alert("입력해주세요!");
  } else {
    $.ajax({
      url: "/api/data",
      method: "POST",
      data: { value: $("#input").val() },
      success: function (response) {
        $("#result").html(response);
        if (response.status === "success") {
          $("#status").text("성공!").css("color", "green");
        } else {
          $("#status").text("실패!").css("color", "red");
        }
      },
      error: function () {
        alert("에러 발생!");
      },
    });
  }
});

// 개선된 버전
function validateInput(input) {
  return input.trim() !== "";
}

function updateStatus(status) {
  const statusElement = document.getElementById("status");
  statusElement.textContent = status === "success" ? "성공!" : "실패!";
  statusElement.style.color = status === "success" ? "green" : "red";
}

async function submitData(data) {
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    document.getElementById("result").textContent = result.message;
    updateStatus(result.status);
  } catch (error) {
    console.error("Error:", error);
    alert("에러 발생!");
  }
}

document.getElementById("button").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  if (validateInput(input)) {
    submitData({ value: input });
  } else {
    alert("입력해주세요!");
  }
});

// ==========================================================================================================
// 2. 과도한 전역 변수 사용:
// 안티패턴
var userInfo = {};
var isLoggedIn = false;
var cartItems = [];

function login() {
  // 로그인 로직
  isLoggedIn = true;
  userInfo = { name: "홍길동", email: "hong@example.com" };
}

function addToCart(item) {
  cartItems.push(item);
}

// 개선된 버전 (모듈 패턴 사용)
const AppState = (function () {
  let userInfo = {};
  let isLoggedIn = false;
  let cartItems = [];

  return {
    login(user) {
      isLoggedIn = true;
      userInfo = user;
    },
    addToCart(item) {
      cartItems.push(item);
    },
    getCartItems() {
      return [...cartItems];
    },
    isUserLoggedIn() {
      return isLoggedIn;
    },
  };
})();

// 사용 예
AppState.login({ name: "홍길동", email: "hong@example.com" });
AppState.addToCart({ id: 1, name: "상품1" });
console.log(AppState.isUserLoggedIn()); // true
console.log(AppState.getCartItems()); // [{ id: 1, name: "상품1" }]
// ==========================================================================================================
// 3. 부적절한 이벤트 핸들링:
// 안티패턴
function addEventListeners() {
  document.getElementById("button").addEventListener("click", handleClick);
  window.addEventListener("scroll", handleScroll);
}

function removeEventListeners() {
  // 이벤트 리스너 제거를 잊음
}

// 개선된 버전
class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  addListener(element, event, handler) {
    element.addEventListener(event, handler);
    if (!this.listeners.has(element)) {
      this.listeners.set(element, new Map());
    }
    this.listeners.get(element).set(event, handler);
  }

  removeAllListeners() {
    for (const [element, events] of this.listeners) {
      for (const [event, handler] of events) {
        element.removeEventListener(event, handler);
      }
    }
    this.listeners.clear();
  }
}

const eventManager = new EventManager();

function init() {
  eventManager.addListener(document.getElementById("button"), "click", handleClick);
  eventManager.addListener(window, "scroll", handleScroll);
}

function cleanup() {
  eventManager.removeAllListeners();
}
// ==========================================================================================================
