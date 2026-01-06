function changeLabels() {
  document.querySelector("#r-hotel .label-tdate-hotel span").innerHTML = "خروج";
  document.querySelector("#r-hotel .label-fdate-hotel span").innerHTML = "ورود";
  document.querySelector("#r-hotel .label-passengers-hotel span").innerHTML =
    "مسافران";
}

// document.addEventListener("DOMContentLoaded", function () {
//   const requiredFiles = ["bookazkoja.ui.min.css"];

//   function checkAllResourcesLoaded() {
//     const resources = performance.getEntriesByType("resource");
//     const loadedFiles = resources
//       .map((res) => res.name.split("/").pop())
//       .filter((name) => requiredFiles.includes(name));
//     // console.log(resources);

//     return requiredFiles.every((file) => loadedFiles.includes(file));
//   }

//   if (document.getElementById("search-box")) {
//     function fetchEngine() {
//       try {
//         const xhrobj = new XMLHttpRequest();
//         xhrobj.open("GET", "search-engine.bc");
//         xhrobj.send();

//         xhrobj.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//             const container = document.getElementById("search-box");
//             container.innerHTML = xhrobj.responseText;

//             changeLabels();





//             const storedHotel = localStorage.getItem("selectedHotel");
//   console.log("Stored Hotel:", storedHotel);

//   if (storedHotel) {
//     try {
//       const { id, name } = JSON.parse(storedHotel);
//       console.log("Parsed Hotel:", id, name);

//       const depInput = document.querySelector("#r-hotel .departure-route .departure");
//       const idInput = document.querySelector("#r-hotel .departure-route .locationId");

//       if (depInput && idInput) {
//         depInput.value = name;
//         idInput.value = id;
//         console.log("Inputs set:", depInput.value, idInput.value);

//         depInput.dispatchEvent(new Event("input", { bubbles: true }));
//         idInput.dispatchEvent(new Event("input", { bubbles: true }));
//         depInput.dispatchEvent(new Event("change", { bubbles: true }));
//         idInput.dispatchEvent(new Event("change", { bubbles: true }));
//       } else {
//         console.error("Inputs not found in DOM");
//       }
//     } catch (e) {
//       console.error("Error parsing storedHotel:", e);
//     }
//   } else {
//     console.error("No data in localStorage for selectedHotel");
//   }


//             const scripts = container.getElementsByTagName("script");
//             for (let i = 0; i < scripts.length; i++) {
//               const scriptTag = document.createElement("script");
//               if (scripts[i].src) {
//                 scriptTag.src = scripts[i].src;
//                 scriptTag.async = false;
//               } else {
//                 scriptTag.text = scripts[i].textContent;
//               }
//               document.head
//                 .appendChild(scriptTag)
//                 .parentNode.removeChild(scriptTag);
//             }





//           }
//         };
//       } catch (error) {
//         console.error("مشکلی پیش آمده است. لطفا صبور باشید", error);
//       }
//     }

//     function waitForFiles() {
//       if (checkAllResourcesLoaded()) {
//         fetchEngine();
//       } else {
//         setTimeout(waitForFiles, 500);
//       }
//     }
//     waitForFiles();
//   }










// });




document.addEventListener("DOMContentLoaded", function () {
  const requiredFiles = ["bookazkoja.ui.min.css"];

  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const loadedFiles = resources
      .map((res) => res.name.split("/").pop())
      .filter((name) => requiredFiles.includes(name));
    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  if (document.getElementById("search-box")) {
    function fetchEngine() {
      try {
        const xhrobj = new XMLHttpRequest();
        xhrobj.open("GET", "search-engine.bc");
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            const container = document.getElementById("search-box");
            container.innerHTML = xhrobj.responseText;
            console.log("Container HTML set:", container.innerHTML);

            if (typeof changeLabels === "function") {
              changeLabels();
            } else {
              console.warn("changeLabels function not found");
            }

            const storedHotel = localStorage.getItem("selectedHotel");
            console.log("Stored Hotel:", storedHotel);

            if (storedHotel) {
              try {
                const { id, name } = JSON.parse(storedHotel);
                console.log("Parsed Hotel:", id, name);

                const observer = new MutationObserver((mutations, obs) => {
                  const depInput = document.querySelector("#r-hotel .departure-route .departure");
                  const idInput = document.querySelector("#r-hotel .departure-route .locationId");
                  console.log("Inputs checked:", depInput, idInput);

                  if (depInput && idInput) {
                    depInput.value = name;
                    idInput.value = id;
                    console.log("Inputs set:", depInput.value, idInput.value);

                    depInput.dispatchEvent(new Event("input", { bubbles: true }));
                    idInput.dispatchEvent(new Event("input", { bubbles: true }));
                    depInput.dispatchEvent(new Event("change", { bubbles: true }));
                    idInput.dispatchEvent(new Event("change", { bubbles: true }));

                    setTimeout(() => {
                      console.log("Inputs after delay:", depInput.value, idInput.value);
                    }, 1000);

                    obs.disconnect(); 
                  } else {
                    console.error("Inputs not found in DOM yet");
                  }
                });

                observer.observe(document.getElementById("search-box"), {
                  childList: true,
                  subtree: true,
                });

                const depInput = document.querySelector("#r-hotel .departure-route .departure");
                const idInput = document.querySelector("#r-hotel .departure-route .locationId");
                if (depInput && idInput) {
                  depInput.value = name;
                  idInput.value = id;
                  console.log("Inputs set immediately:", depInput.value, idInput.value);

                  depInput.dispatchEvent(new Event("input", { bubbles: true }));
                  idInput.dispatchEvent(new Event("input", { bubbles: true }));
                  depInput.dispatchEvent(new Event("change", { bubbles: true }));
                  idInput.dispatchEvent(new Event("change", { bubbles: true }));
                }
              } catch (e) {
                console.error("Error parsing storedHotel:", e);
              }
            } else {
              console.error("No data in localStorage for selectedHotel");
            }

            const scripts = container.getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
              const scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = false;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
            }
          }
        };
      } catch (error) {
        console.error("مشکلی پیش آمده است. لطفا صبور باشید", error);
      }
    }

    function waitForFiles() {
      if (checkAllResourcesLoaded()) {
        fetchEngine();
      } else {
        setTimeout(waitForFiles, 500);
      }
    }
    waitForFiles();
  }

  if (document.querySelector(".hotels-container")) {
    const hotels = document.querySelectorAll(".hotels-container p");

    hotels.forEach((hotel) => {
      const hotelId = hotel.getAttribute("data-id");
      const hotelName = hotel.innerText;
      const target = document.querySelector("main");

      hotel.addEventListener("click", () => {
        if (document.querySelector("#search-box")) {
          const depInput = document.querySelector("#r-hotel .departure-route .departure");
          const idInput = document.querySelector("#r-hotel .departure-route .locationId");

          if (depInput && idInput) {
            console.log("Setting input values directly:", hotelName, hotelId);
            depInput.value = hotelName;
            idInput.value = hotelId;

            depInput.dispatchEvent(new Event("input", { bubbles: true }));
            idInput.dispatchEvent(new Event("input", { bubbles: true }));
            depInput.dispatchEvent(new Event("change", { bubbles: true }));
            idInput.dispatchEvent(new Event("change", { bubbles: true }));

            target.scrollIntoView({ behavior: "smooth" });
          } else {
            console.log("Inputs not found, cannot set values yet.");
            const hotelData = { id: hotelId, name: hotelName };
            localStorage.setItem("selectedHotel", JSON.stringify(hotelData));
            window.location.href = "/";
          }
        } else {
          const hotelData = { id: hotelId, name: hotelName };
          localStorage.setItem("selectedHotel", JSON.stringify(hotelData));
          window.location.href = "/";
        }
      });
    });
  }
});



// ____________________________________
// ____________________________________
// ____________________________________
// ____________________________________
// ____________________________________
// ____________________________________
// _______________________________
// _______________________________
// _______________________________

// ---------------------------------
// ____________________________________
// ____________________________________
// ____________________________________
// ____________________________________
// ____________________________________
// const commonQS = document.querySelectorAll(".common-qs-r");

// commonQS.forEach((container) => {
//   const questions = container.querySelectorAll(".box");

//   questions.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       // جلوگیری از بسته شدن فوری با جلوگیری از انتشار
//       e.stopPropagation();
//       // فقط این سوال فعال شود، بقیه غیرفعال شوند
//       questions.forEach((q) => {
//         if (q !== item) q.classList.remove("active");
//       });
//       item.classList.toggle("active");
//     });
//   });
// });

// // فقط یک بار روی document کلیک‌گیر بگذار
// document.addEventListener("click", (e) => {
//   document.querySelectorAll(".common-qs-r .box.active").forEach((item) => {
//     if (!item.contains(e.target)) {
//       item.classList.remove("active");
//     }
//   });
// });

// _____________________________________________________________
if (document.querySelectorAll(".swiper-1").length > 0)
  swiper = new Swiper(".swiper-1", {
    direction: "vertical",
    touchReleaseOnEdges: true,
    slidesPerView: 5,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    // autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: 0,
    // pagination: { el: ".swiper-pagination", clickable: !0 },
    // navigation: {
    //   nextEl: ".swiper-button-next-ft",
    //   prevEl: ".swiper-button-prev-ft",
    // },
  });
if (document.querySelectorAll(".swiper-5").length > 0)
  swiper = new Swiper(".swiper-5", {
    slidesPerView: 5,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    // autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: 0,
    // pagination: { el: ".swiper-pagination", clickable: !0 },
    // navigation: {
    //   nextEl: ".swiper-button-next-ft",
    //   prevEl: ".swiper-button-prev-ft",
    // },
  });

const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose?.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
  });
  bars3?.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
  });
} else {
  headerMenuClose?.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
    document.querySelector("body").style.overflow = "";
  });
  bars3?.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
    document.querySelector("body").style.overflow = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle?.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 30 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

// ____________________
document.addEventListener("DOMContentLoaded", function () {
  const headerB = document.querySelector("header");

  if (!headerB) return;
  headerB.style.borderBottom = "1px solid var(--secondary-200)";
  window.addEventListener("scroll", function () {
    if (window.innerWidth < 1000) {
      if (window.scrollY >= 1000) {
        headerB.style.position = "fixed";
      } else {
        headerB.style.position = "";
      }
    }
  });
});
const scrollBtn = document.getElementById("scroll-to-top");

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// _________________________________________
// _________________________________________
const timerEl = document.getElementById("timer");
if (timerEl) {
  let totalSeconds = 9 * 60;

  function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerEl.textContent = `${hours}:${minutes}:${seconds}`;

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(countdown);
    }
  }

  updateTimer();
  const countdown = setInterval(updateTimer, 1000);
}
// _________________________________________
// _________________________________________
const clickerUl = document.querySelectorAll("ul.clicker-list");
clickerUl?.forEach((el) => {
  const liItem = el.querySelectorAll("li");
  liItem[0].classList.add("active");
  liItem.forEach((li) => {
    li.addEventListener("click", () => {
      liItem.forEach((element) => {
        element.classList.remove("active");
      });
      li.classList.add("active");
    });
  });
});
// _________________________________________
// _________________________________________
// _________________________________________
const hotelCards = document.querySelectorAll(".hotelCard");
hotelCards?.forEach((card) => {
  card.querySelector(".show-list").addEventListener("click", () => {
    card.querySelector(".popup").classList.remove("hidden");
    card.querySelector(".popup").classList.add("flex");
    document.querySelector("body").style.overflow = "hidden";
  });
  card.querySelector("#close-popup").addEventListener("click", () => {
    card.querySelector(".popup").classList.add("hidden");
    card.querySelector(".popup").classList.remove("flex");
    document.querySelector("body").style.overflow = "";
  });
});

// _________________________________________
// _________________________________________
// _________________________________________
document.querySelector("#filter-section")?.addEventListener("click", () => {
  const filterPopUp = document.querySelector(".filter-popup");
  filterPopUp.classList.remove("hidden");
  filterPopUp.classList.add("flex");
  document.querySelector("body").style.overflow = "hidden";
});
document.querySelector("#close-filterbox")?.addEventListener("click", () => {
  const filterPopUp = document.querySelector(".filter-popup");
  filterPopUp.classList.add("hidden");
  filterPopUp.classList.remove("flex");
  document.querySelector("body").style.overflow = "";
});
// _________________________________________
// _________________________________________
// _________________________________________
// if (document.querySelector(".hotels-container")) {
//   const hotels = document.querySelectorAll(".hotels-container p");

//   hotels.forEach((hotel) => {
//     const hotelId = hotel.getAttribute("data-id");
//     const hotelName = hotel.innerText;
//     const target = document.querySelector("main");

//     hotel.addEventListener("click", () => {
//       if (document.querySelector("#search-box")) {
//         const depInput = document.querySelector(
//           "#r-hotel .departure-route input.departure"
//         );
//         const idInput = document.querySelector(
//           "#r-hotel .departure-route input.locationId"
//         );

//         if (depInput && idInput) {
//           console.log("Setting input values directly:", hotelName, hotelId);
//           depInput.value = hotelName;
//           idInput.value = hotelId;
//           target.scrollIntoView({ behavior: "smooth" });
//         } else {
//           console.log("Inputs not found, cannot set values yet.");
//         }
//       } else {
//         const hotelData = { id: hotelId, name: hotelName };
//         localStorage.setItem("selectedHotel", JSON.stringify(hotelData));
//         window.location.href = "/";
//       }
//     });
//   });
// }

// _________________________________________
// _________________________________________
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    n = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    o = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: o,
    captcha: t,
    captchaid: n,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectFooter(e) {
  const nameInput = document
    .querySelector("#contact-form-resize .name-ans input")
    .value.trim();
  const emailInput = document
    .querySelector("#contact-form-resize .email-ans input")
    .value.trim();

  const currentTime = new Date().getTime();
  const currentData = JSON.stringify({
    name: nameInput,
    email: emailInput,
  });

  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormFooter() {
  document
    .querySelector("#contact-form-resize .email-ans input[data-bc-text-input]")
    .setAttribute("placeholder", "support@company.com"),
    document
      .querySelector("#contact-form-resize .name-ans input[data-bc-text-input]")
      .setAttribute("placeholder", "مثال: شهاب حسینی");
}
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".load-elements .swiper-slide");

  slides?.forEach((slide) => {
    const catid = slide.getAttribute("catid");

    if (catid) {
      fetch(`load-items.bc?catid=${catid}`)
        .then((res) => res.text())
        .then((data) => {
          // اگر data فقط یه لینک خالیه
          const link = data.trim();

          // اضافه کردن لینک به href
          slide.setAttribute("href", link);

          // console.log(`لینک برای catid=${catid} -> ${link}`);
        })
        .catch((err) => {
          console.error(`خطا در دریافت اطلاعات برای catid=${catid}`, err);
          slide.setAttribute("href", "#");
          slide.textContent = "خطا در لود لینک";
        });
    }
  });
});

// _________________________________________
// _________________________________________
// _________________________________________
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------

function uploadDocumensuggestion(e) {
  document.querySelector("#suggestion-form .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#suggestion-form")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#suggestion-form")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadSuggestion", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaSuggestion(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedSuggestion() {
  document.querySelector("#suggestion-form .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectSuggestion(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector("#suggestion-form .Loading_Form").style.display =
        "none"),
      (document.querySelector("#suggestion-form .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaSuggestion(),
      setTimeout(() => {
        (document.querySelector(
          "#suggestion-form .Loading_Form"
        ).style.display = "none"),
          (document.querySelector("#suggestion-form .message-api").innerHTML =
            "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormSuggestion() {
  var e = document.querySelector(
    "#suggestion-form .name-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "نام و نام خانوادگی");
  var e = document.querySelector(
    "#suggestion-form .phone-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "شماره تماس ");

  var e = document.querySelector(
    "#suggestion-form .text-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "پیام");
}
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________
// _________________________________________

