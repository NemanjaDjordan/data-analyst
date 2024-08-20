// // Data for the first donut chart
// const data1 = {
//     labels: ['Canada', 'England', 'France', 'Germany', 'India', 'Italy', 'Japan', 'USA'],
//     datasets: [{
//         data: [9.02, 14.30, 14.93, 12.07, 10.50, 12.16, 15.54, 11.48],
//         backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#4BC0C0',
//             '#9966FF',
//             '#FF9F40',
//             '#FFCD56',
//             '#4D5360'
//         ],
//         hoverOffset: 4
//     }]
// };

// // Data for the second donut chart (random data)
// const data2 = {
//     labels: ['Brazil', 'China', 'Russia', 'South Africa', 'Australia'],
//     datasets: [{
//         data: [20, 25, 15, 10, 30],
//         backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#4BC0C0',
//             '#9966FF'
//         ],
//         hoverOffset: 4
//     }]
// };

// // Chart options
// const options = {
//     cutout: '70%',
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false
//         },
//         tooltip: {
//             callbacks: {
//                 label: function(tooltipItem) {
//                     return tooltipItem.label + ': ' + tooltipItem.raw + '%';
//                 }
//             }
//         }
//     }
// };

// // Create the first donut chart
// const ctx1 = document.getElementById('donutChart1').getContext('2d');
// const donutChart1 = new Chart(ctx1, {
//     type: 'doughnut',
//     data: data1,
//     options: options
// });

// // Create the second donut chart
// const ctx2 = document.getElementById('donutChart2').getContext('2d');
// const donutChart2 = new Chart(ctx2, {
//     type: 'doughnut',
//     data: data2,
//     options: options
// });

// // Generate legend for the first donut chart
// const legendContainer1 = document.getElementById('legend1');
// data1.labels.forEach((label, index) => {
//     const color = data1.datasets[0].backgroundColor[index];
//     const value = data1.datasets[0].data[index];
//     const legendItem = document.createElement('div');
//     legendItem.innerHTML = `<span style="background-color:${color}"></span>${label} (${value}%)`;
//     legendContainer1.appendChild(legendItem);
// });

// // Generate legend for the second donut chart
// const legendContainer2 = document.getElementById('legend2');
// data2.labels.forEach((label, index) => {
//     const color = data2.datasets[0].backgroundColor[index];
//     const value = data2.datasets[0].data[index];
//     const legendItem = document.createElement('div');
//     legendItem.innerHTML = `<span style="background-color:${color}"></span>${label} (${value}%)`;
//     legendContainer2.appendChild(legendItem);
// });




const navigationMenu = document.querySelector('.navigation-menu');
const body = document.querySelector('body');
const burgerWrap = document.querySelector('.burgerwrap');
const jsNavigation = document.querySelectorAll('.js-navigation');

// Reusable functions to avoid code repetition
function toggleScrollLock() {
    body.classList.toggle('no-scroll');
}

function removeScrollLock() {
    body.classList.remove('no-scroll', 'body-blur');
}

//Burger event handler
burgerWrap.addEventListener("click", function () {
    burgerWrap.classList.toggle('burger-animation');
    navigationMenu.classList.toggle('navigation-menu-animation');
    toggleScrollLock();
});

// Escape key event handler for closing the menu
document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 27) {  // 27 is the keyCode for the Escape key
        if (burgerWrap.classList.contains('burger-animation')) {
            burgerWrap.classList.remove('burger-animation');
            navigationMenu.classList.remove('navigation-menu-animation');
        }
        removeScrollLock();
    }
});

// Smooth scroll navigation
jsNavigation.forEach(element => {
    element.addEventListener("click", handleNavigation);
    element.addEventListener("touchstart", handleNavigation);
});

function handleNavigation(evt) {
    evt.preventDefault();
    const dataId = this.getAttribute('data-id');
    const windowsHeight = window.innerHeight * 0.02;
    const targetElement = document.querySelector(`[data-name="${dataId}"]`);
    window.scrollTo({
        top: targetElement.offsetTop - windowsHeight,
        behavior: 'smooth'
    });
}


// Section hero animation
document.addEventListener('DOMContentLoaded', function() {
    const heroAnimationElements = document.querySelectorAll('.section-hero .wrapper .top, .section-hero .wrapper .middle, .section-hero .wrapper .bottom');
    
    heroAnimationElements.forEach(element => {
        element.classList.add('section-hero-animate');
    });
});

