const $lastName = document.querySelector(".lastname");
const $firstName = document.querySelector(".firstname");
const $button = document.querySelector(".btn")

$button.addEventListener("click", function(event) {
    event.preventDefault();
    alert(`Фамилия: ${$lastName.value}, Имя: ${$firstName.value}`);
})