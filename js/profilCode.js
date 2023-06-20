
const profileMain = document.querySelector('#profileAcc')
const header = document.querySelector('.header')

const modalProfile = document.createElement('div')
modalProfile.classList.add('header__cart-info')


profileMain.append(modalProfile)



profileMain.addEventListener('click', (event) => {

    console.log(event.target.className)

    if (event.target.classList.contains('header__cart') || event.target.classList.contains('cart-img')) {
        if (localStorage.getItem('user') !== null) {
            if (modalProfile.classList.contains('hide')) {
                modalProfile.classList.remove('hide')
                modalProfile.innerHTML = ''
            } else {
                modalProfile.classList.add('hide')

                const dataJSON = localStorage.getItem('user')
                const data = JSON.parse(dataJSON)
                console.log(data)
                console.log(data.login)
           
                const user = document.createElement('div')
                user.textContent = `user: ${data.login}`

                const phone = document.createElement('div')
                phone.textContent = `phone: ${data.phone}`

                modalProfile.append(user)
                modalProfile.append(phone)

            }
        } else {
            window.location.href = 'logIn.html';
        }
    }

})

// const hamburger = document.querySelector('.header__hamburger'),
//       btnClose = document.querySelector('.menu__close'),
//       menuu = document.querySelector('.menu');

// hamburger.addEventListener('click', () => {
//     menuu.classList.add('show')
//     menuu.classList.remove('hidee')
// })

// btnClose.addEventListener('click', () => {
//     menuu.classList.add('hidee')
//     menuu.classList.remove('show')
// })