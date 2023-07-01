var body = document.body;

var leaveARequest = document.getElementById("pop-up-leave-a-request");
var leaveARequestClose = document.getElementById(
    "pop-up-leave-a-request-close"
);

leaveARequestClose.addEventListener("click", () => {
    body.classList.remove("h-full");
    body.classList.remove("overflow-y-hidden");
    leaveARequest.classList.toggle("hidden");
});

const leaveARequestOpen = () => {
    body.classList.add("h-full");
    body.classList.add("overflow-y-hidden");
    leaveARequest.classList.remove("hidden");

    headerLevel1.classList.remove("max-h-64");
    headerLevel1.classList.add("max-h-0");
    headerLevel3.classList.remove("max-h-64");
    headerLevel3.classList.add("max-h-0");

    if (window.innerWidth <= 1024) {
        cartSide.classList.remove(`top-[92px]`);
        cartSide.classList.remove(`h-[calc(100%-92px)]`);
        cartSideBlock.classList.remove(`h-[calc(100%-92px)]`);

        cartSide.classList.add(`top-[104px]`);
        cartSide.classList.add(`h-[calc(100%-104px)]`);
        cartSideBlock.classList.add(`h-[calc(100%-104px)]`);
    } else {
        cartSide.classList.remove("top-[104px]");
        cartSide.classList.remove("lg:top-[220px]");
        cartSideBlock.classList.remove("lg:top-[220px]");

        cartSide.classList.add(`top-[92px]`);
        cartSide.classList.add(`h-[calc(100%-92px)]`);
        cartSideBlock.classList.add(`lg:h-[calc(100%-92px)]`);
    }
};
