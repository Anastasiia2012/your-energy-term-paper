export function rating() {
  const ratingEl = document.getElementById("rating");
  const buttons = ratingEl.querySelectorAll("button");

  let rating = 0;
  let hoverRating = 0;

  function updateStars(value) {
    buttons.forEach((btn, index) => {
      const svg = btn.querySelector("svg");
      const isActive = index < value;

      svg.classList.toggle("fill-amber-400", isActive);
      svg.classList.toggle("text-amber-400", isActive);
      svg.classList.toggle("text-muted-foreground/50", !isActive);

      const rating = document.getElementById("rating-amount");
      rating.innerText = value;
    });
  }

  buttons.forEach((btn, index) => {
    const starValue = index + 1;

    btn.addEventListener("click", () => {
      rating = starValue;
      updateStars(rating);
      console.log("Rating:", rating);
    });

    btn.addEventListener("mouseenter", () => {
      hoverRating = starValue;
      updateStars(hoverRating);
    });

    btn.addEventListener("mouseleave", () => {
      hoverRating = 0;
      updateStars(rating);
    });
  });
}