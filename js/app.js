// Select elements
const navigationMenu = document.querySelector('.navigation-menu');
const body = document.body;
const burgerWrap = document.querySelector('.burgerwrap');
const jsNavigation = document.querySelectorAll('.js-navigation');
const portfolioItem = document.querySelectorAll('.raw-files .item');
const heroAnimationElements = document.querySelectorAll('.section-hero .wrapper .top, .section-hero .wrapper .middle, .section-hero .wrapper .bottom');
const blobCodeLines = document.querySelectorAll('.blob-code-inner');
const portfolioButtons = document.querySelectorAll('.button');
const tableCells = document.querySelectorAll('td');

// Utility functions
function toggleScrollLock() {
    body.classList.toggle('no-scroll');
}

function removeScrollLock() {
    body.classList.remove('no-scroll', 'body-blur');
}

function highlightTextContent(element, regex, color) {
    const html = element.innerHTML;
    element.innerHTML = html.replace(regex, `<span style="color: ${color}; display:inline-block">$&</span>`);
}

function handleNavigation(evt) {
    evt.preventDefault();
    const dataId = this.getAttribute('data-id');
    const targetElement = document.querySelector(`[data-name="${dataId}"]`);
    if (targetElement) {
        const offset = window.innerHeight * 0.02;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Burger menu event handler
burgerWrap.addEventListener("click", () => {
    burgerWrap.classList.toggle('burger-animation');
    navigationMenu.classList.toggle('navigation-menu-animation');
    toggleScrollLock();
});

// Escape key event handler
document.addEventListener('keyup', evt => {
    if (evt.key === 'Escape') {
        burgerWrap.classList.remove('burger-animation');
        navigationMenu.classList.remove('navigation-menu-animation');
        portfolioItem.forEach(item => item.classList.remove('portfolio-active'));

        const isActive = Array.from(portfolioItem).some(item => item.classList.contains('portfolio-active'));
        burgerWrap.style.display = isActive ? 'none' : 'inline-block';

        // Add scroll
        body.style.overflow = 'auto';

        removeScrollLock();
    }
});

// Smooth scroll navigation
jsNavigation.forEach(element => {
    element.addEventListener("click", handleNavigation);
    element.addEventListener("touchstart", handleNavigation);
});

// Section hero animation
document.addEventListener('DOMContentLoaded', () => {
    heroAnimationElements.forEach(element => {
        element.classList.add('section-hero-animate');
    });
});

// Portfolio beautification
const keywords = ['sns', 'plt', 'pandas', 'matplotlib', 'pyplot', 'seaborn', 'pd'];
const words = ['file_path', 'df', 'figsize', 'segment_sales', 'data', 'palette', 'rotation', 'country_sales', 'customer_sales', 'monthly_profit', 'marker', 'units_sold_split', 'top_product'];

blobCodeLines.forEach(line => {
    const containsHash = line.textContent.includes('#');
    const parenColor = containsHash ? '#6a993e' : '#f9c923';
    const keywordColor = containsHash ? '#6a993e' : '#3ac9a2';
    const wordColor = containsHash ? '#6a993e' : '#9cdcfe';
    const quoteColor = containsHash ? '#6a993e' : '#ce9178';
    const bracketColor = containsHash ? '#6a993e' : '#d572d5';
    const ifColor = containsHash ? '#6a993e' : '#c287bf';

    let html = line.innerHTML;

    // Highlight parentheses
    html = html
        .replace(/\(/g, `<span style="color: ${parenColor}; display:inline-block">(</span>`)
        .replace(/\)/g, `<span style="color: ${parenColor}; display:inline-block">)</span>`);

    // Highlight square brackets
    html = html
    .replace(/\[/g, `<span style="color: ${bracketColor}; display:inline-block">[</span>`)
    .replace(/\]/g, `<span style="color: ${bracketColor}; display:inline-block">]</span>`);


    // Highlight 'import' keyword
    html = html.replace(/\bimport\b/g, '<span style="color: #c586c0; display:inline-block">import</span>');

    // Highlight 'if' keyword
    html = html.replace(/\bif\b/g, `<span style="color: ${ifColor}; display:inline-block">if</span>`);

    // Highlight keywords
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        html = html.replace(regex, `<span style="color: ${keywordColor}; display:inline-block">${keyword}</span>`);
    });

    // Highlight specific words
    words.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        html = html.replace(regex, `<span style="color: ${wordColor}; display:inline-block">${word}</span>`);
    });

    // Highlight text between single quotes
    html = html.replace(/'([^']*)'/g, match => `<span style="color: ${quoteColor}; display:inline-block">${match}</span>`);

    line.innerHTML = html;
});

// Highlight '#' in table cells
tableCells.forEach(td => {
    if (td.textContent.includes('#')) {
        td.style.color = '#6a993e';
    }
});

// Portfolio buttons
portfolioButtons.forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const correspondingItem = document.querySelector(`.item[data-id="${id}"]`);
        if (correspondingItem) {
            correspondingItem.classList.toggle('portfolio-active');
        }
        // Remove scroll
        body.style.overflow = 'hidden';

        // Check if any item has the 'portfolio-active' class
        const isActive = Array.from(portfolioItem).some(item => item.classList.contains('portfolio-active'));
        burgerWrap.style.display = isActive ? 'none' : 'inline-block';
    });
});

// Add event listener to close buttons
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent element with the 'item' class
        const correspondingItem = this.closest('.item');
        if (correspondingItem) {
            correspondingItem.classList.toggle('portfolio-active');
        }
        // Add scroll
        body.style.overflow = 'auto';

        // Check if any item has the 'portfolio-active' class
        const isActive = Array.from(portfolioItem).some(item => item.classList.contains('portfolio-active'));
        burgerWrap.style.display = isActive ? 'none' : 'inline-block';
    });
});


