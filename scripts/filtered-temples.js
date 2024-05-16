const navigation = document.querySelector('.mobile-navigation')
const navButton = document.getElementById('menu')

navButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    navButton.classList.toggle('show')
})