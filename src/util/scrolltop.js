

const onScrollTopFn = () => {
    const scrollTopBtn = document.getElementById('arrow-up');

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })
}

export default onScrollTopFn;