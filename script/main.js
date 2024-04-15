//const changeTheme = document.querySelector('#changeTheme')
const html = document.querySelector('html')
const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)')
let theme
if (mediaQueryListDark.matches) {
    theme = 'dark'
    html.setAttribute('data-bs-theme', 'dark')
}
else {
    theme = 'light'
    html.setAttribute('data-bs-theme', 'light')
}
function changeTheme() {
    if (theme == 'light') {
        theme = 'dark'
        html.setAttribute('data-bs-theme', 'dark')
    }
    else if (theme == 'dark') {
        theme = 'light'
        html.setAttribute('data-bs-theme', 'light')   
    }
}
/*function lightTheme() {
    html.setAttribute('data-bs-theme', 'light')
}
function darkTheme() {
    html.setAttribute('data-bs-theme', 'dark')
}*/

/*changeTheme.addEventListener("change", (event) => {
    console.log(changeTheme.value)
    if (changeTheme.value == light){
        html.setAttribute('data-bs-theme', 'dark')}
    else{
        html.setAttribute('data-bs-theme', 'light')
    } 
    })
    */
