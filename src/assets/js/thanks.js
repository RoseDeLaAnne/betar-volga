var body = document.body;

var thanks = document.getElementById("pop-up-thanks");
var thanksClose = document.getElementById("pop-up-thanks-close");

thanksClose.addEventListener("click", () => {
    body.classList.remove("h-full");
    body.classList.remove("overflow-y-hidden");
    thanks.classList.toggle("hidden");
});

const thanksOpen = () => {
    console.log('thanks open')
    body.classList.add("h-full");
    body.classList.add("overflow-y-hidden");
    thanks.classList.remove("hidden");
};
