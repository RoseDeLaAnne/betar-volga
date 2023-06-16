var body = document.body;

var leaveARequest = document.getElementById("pop-up-leave-a-request");
var leaveARequestClose = document.getElementById("pop-up-leave-a-request-close");

leaveARequestClose.addEventListener("click", () => {
    body.classList.remove("h-full");
    body.classList.remove("overflow-y-hidden");
    leaveARequest.classList.toggle("hidden");
});

const leaveARequestOpen = () => {
    body.classList.add("h-full");
    body.classList.add("overflow-y-hidden");
    leaveARequest.classList.remove("hidden");
};
