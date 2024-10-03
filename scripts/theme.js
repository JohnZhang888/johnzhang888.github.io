const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)') //为检测系统颜色模式赋值变量
const themeDropdown = document.querySelector('#themeDropdown')
const logo = document.querySelector('#logo')
const html = document.querySelector('html')
const lightDropdown = document.querySelector('#lightDropdown')
const darkDropdown = document.querySelector('#darkDropdown')
const autoDropdown = document.querySelector('#autoDropdown')
let priBtn, priOutBtn, priText //声明三种要改变的class
function changeClass(a, b, c) {
  a = document.querySelectorAll('.' + b)
  for (let i = 0; i < a.length; i++) {
    toChange = a[i]
    toChange.classList.replace(b, c)
  }
} //封装改变class的函数

function lightStyle() {
  html.setAttribute('data-bs-theme', 'light')
  logo.src = 'images/logo-light.svg'
} //亮色样式
function darkStyle() {
  html.setAttribute('data-bs-theme', 'dark')
  logo.src = 'images/logo-dark.svg'
} //暗色样式

function lightTheme() {
  if (Cookies.get('language') === 'zh_cn') {
    themeDropdown.innerHTML = '<i class="bi bi-sun-fill"></i>&ensp;浅色'
  }
  else if (Cookies.get('language') === 'en_us') {
    themeDropdown.innerHTML = '<i class="bi bi-sun-fill"></i>&ensp;Light'
  }
  /*themeDropdown.classList.remove('-auto', '-dark')
  themeDropdown.classList.add('-light')*/
  lightDropdown.classList.add('d-none')
  autoDropdown.classList.remove('d-none')
  darkDropdown.classList.remove('d-none')
  lightStyle()
  Cookies.set('theme', 'light', { sameSite: false })
}
function darkTheme() {
  if (Cookies.get('language') === 'zh_cn') {
    themeDropdown.innerHTML = '<i class="bi bi-moon-stars-fill"></i>&ensp;深色'
  }
  else if (Cookies.get('language') === 'en_us') {
    themeDropdown.innerHTML = '<i class="bi bi-moon-stars-fill"></i>&ensp;Dark'
  }
  darkDropdown.classList.add('d-none')
  autoDropdown.classList.remove('d-none')
  lightDropdown.classList.remove('d-none')
  darkStyle()
  Cookies.set('theme', 'dark', { sameSite: false })
}
function autoTheme() {
  if (Cookies.get('language') === 'zh_cn') {
    themeDropdown.innerHTML = '<i class="bi bi-circle-half"></i>&ensp;自动'
  }
  else if (Cookies.get('language') === 'en_us') {
    themeDropdown.innerHTML = '<i class="bi bi-circle-half"></i>&ensp;Auto'
  }
  themeDropdown.classList.remove('-light', '-dark')
  themeDropdown.classList.add('-auto')
  autoDropdown.classList.add('d-none')
  lightDropdown.classList.remove('d-none')
  darkDropdown.classList.remove('d-none')
  if (mediaQueryListDark.matches) {
    darkStyle()
  }
  else {
    lightStyle()
  }
  Cookies.set('theme', 'auto', { sameSite: false })
}

if (Cookies.get('theme') == 'light') {
  lightTheme()
}
else if (Cookies.get('theme') == 'dark') {
  darkTheme()
}
else if (Cookies.get('theme') == 'auto') {
  autoTheme()
}
else {
  autoTheme()
}

