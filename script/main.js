//const changeTheme = document.querySelector('#changeTheme')
const html = document.querySelector('html')
function lightTheme() {
    html.setAttribute('data-bs-theme', 'light')
}
function darkTheme() {
    html.setAttribute('data-bs-theme', 'dark')
}

/*changeTheme.addEventListener("change", (event) => {
    console.log(changeTheme.value)
    if (changeTheme.value == light){
        html.setAttribute('data-bs-theme', 'dark')}
    else{
        html.setAttribute('data-bs-theme', 'light')
    } 
    })
    */
