export const portfolioHover = () => {
  const dizme_tm_portfolio_animation_wrap =
      document.querySelectorAll(".grid__item a"),
    dizme_tm_portfolio_titles = document.querySelector(".item-title-hover");
  dizme_tm_portfolio_animation_wrap.forEach((element) => {
    element.addEventListener("mousemove", () => {
      let title = element.getAttribute("data-title"),
        category = element.getAttribute("data-category");
      if (title) {
        dizme_tm_portfolio_titles.classList.add("visible");
        dizme_tm_portfolio_titles.innerHTML =
          title + '<span class="item-category">' + category + "</span>";
      }
      document.addEventListener("mousemove", (e) => {
        dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
        dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
      });
    });
    element.addEventListener("mouseleave", () => {
      dizme_tm_portfolio_titles.classList.remove("visible");
    });
  });
};
