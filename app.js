//1.include all element and assigne count = 0  
let count = 0


const showNumber = document.querySelector('.show_number')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        let styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            count--
        }else if(styles.contains('increase')) {
            count++
        }else {
            count = 0
        }

        if(count < 0) {
            showNumber.style.color = 'red'
        }else if (count > 0) {
            showNumber.style.color = 'green'
        }else {
            showNumber.style.color = 'black'
        }
        showNumber.innerHTML = count
    })
})