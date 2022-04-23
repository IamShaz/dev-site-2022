const aboutContent = document.getElementById('aboutContent');
const aboutBtn = document.getElementById('about');
const content = document.getElementsByClassName('content')[0];
const closeAbout = aboutContent.getElementsByClassName('closeBtn')[0];
const portfolioContent = document.getElementById('portfolioContent');
const portfolioBtn = document.getElementById('portfolio');
const closePortfolio = document.getElementsByClassName("closeBtn")[1];
let isOpened = false;

const toggleClasses = (obj, addClass, removeClass) => {
    obj.classList.add(addClass);
    obj.classList.remove(removeClass);
}

const openAboutModal = () => {
    toggleClasses(aboutContent, 'modalOpen', 'hidden');
    setTimeout(() => toggleClasses(content, 'show', 'hidden'), 1400);    
};

const closeAboutModal = () => {
    toggleClasses(aboutContent, 'modalClose', 'modalOpen');
    toggleClasses(content, 'hidden', 'show');
    setTimeout(() => toggleClasses(aboutContent, 'hidden', 'modalClose'), 1600);
};

const openPortfolioModal = () => {
    portfolioContent.classList.add("is-open");
    document.body.style.overflow = "hidden";
};

const closePortfolioModal = () => {
    portfolioContent.classList.remove("is-open");
    document.body.style.overflow = "initial";
};

aboutBtn.addEventListener('click', openAboutModal);
closeAbout.addEventListener('click', closeAboutModal);
portfolioBtn.addEventListener('click', openPortfolioModal);
closePortfolio.addEventListener('click', closePortfolioModal);

(function() {
    const teaMug = document.getElementById('teaMug');
    const loading = document.getElementById('loading');

    const showContainer = () => {
        let container = document.getElementsByClassName('container')[0];
        toggleClasses(container, 'show', 'hidden');
    }

    setTimeout(() => {
        toggleClasses(teaMug, 'hidden', 'show');
        toggleClasses(loading, 'hidden', 'show');        
    }, 3500);

    setTimeout(() => showContainer(), 3800);
})();
