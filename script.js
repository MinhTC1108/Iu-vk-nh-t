const wrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

function openEnvelope() {
    wrapper.classList.add("open");
    wrapper.classList.add("deactivate-envelope");

    if (!letter.classList.contains("open")) {
        setTimeout(() => {
            letter.classList.add("show-letter");

            setTimeout(() => {
                letter.classList.remove("show-letter");
                letter.classList.add("open");
            }, 500);
        }, 300);
    }
}

function closeEnvelope() {
    wrapper.classList.remove("open");
    wrapper.classList.remove("deactivate-envelope");

    if (letter.classList.contains("open")) {
        letter.classList.add("closing-envelope");

        setTimeout(() => {
            letter.classList.remove("closing-letter");
            letter.classList.remove("open");
        }, 500);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.closest("#musicToggle")) return;

    const clickedInsideEnvelope = e.target.closest(".envelope-wrapper");
    if (!clickedInsideEnvelope) return;

    const clickedEnvelopePart = e.target.closest(".sticker, .right-flap, .left-flap, .wrapper");
    if (!clickedEnvelopePart) return;

    if (wrapper.classList.contains("open")) {
        closeEnvelope();
    } else {
        openEnvelope();
    }
});
