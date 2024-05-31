function countUp(target, element, duration) {
    let start = 0;
    let increment = 50;

    
    if (target >= 10000) {
        increment = 500;
    } else if (target >= 32000) {
        increment = 100;
    } else if (target >= 1332) {
        increment = 50;
    } else if (target >= 236) {
        increment = 10;
    } else {
        increment = 1; 
    }

    const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
            clearInterval(interval);
            start = target;
        }
        element.innerText = Math.min(Math.floor(start), target).toLocaleString() + '+';
    }, 50); 
}


const counts = document.querySelectorAll('.co h1');
countUp(10000, counts[0], 1);
countUp(32000, counts[1], 1); 
countUp(236, counts[2], 1);   
countUp(1332, counts[3], 1);  
countUp(40, counts[4], 1);     
