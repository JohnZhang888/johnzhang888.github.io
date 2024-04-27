const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)') //为检测系统颜色模式赋值变量
const lightButton = document.querySelector('#lightButton')
const darkButton = document.querySelector('#darkButton')
const autoButton = document.querySelector('#autoButton') //赋值三个颜色切换按钮
const logo = document.querySelector('#logo')
const html = document.querySelector('html')
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
  changeClass(priBtn, 'btn-info', 'btn-primary')
  changeClass(priOutBtn, 'btn-outline-info', 'btn-outline-primary')
  changeClass(priText, 'text-info', 'text-primary')
  logo.src = 'https://pic.imgdb.cn/item/661d3f9e0ea9cb1403d29f29.png'
} //亮色样式
function darkStyle() {
  html.setAttribute('data-bs-theme', 'dark')
  changeClass(priBtn, 'btn-primary', 'btn-info')
  changeClass(priOutBtn, 'btn-outline-primary', 'btn-outline-info')
  changeClass(priText, 'text-primary', 'text-info')
  logo.src = 'https://pic.imgdb.cn/item/639695feb1fccdcd36b77c6e.png'
} //暗色样式

function lightTheme() {
  darkButton.className = "btn btn-outline-primary btn-sm"
  autoButton.className = "btn btn-outline-primary btn-sm"
  lightButton.className = "btn btn-primary btn-sm"
  lightStyle()
  Cookies.set('theme', 'light', { sameSite: false })
}
function darkTheme() {
  darkButton.className = "btn btn-primary btn-sm"
  autoButton.className = "btn btn-outline-primary btn-sm"
  lightButton.className = "btn btn-outline-primary btn-sm"
  darkStyle()
  Cookies.set('theme', 'dark')
}
function autoTheme() {
  darkButton.className = "btn btn-outline-primary btn-sm"
  autoButton.className = "btn btn-primary btn-sm"
  lightButton.className = "btn btn-outline-primary btn-sm"
  if (mediaQueryListDark.matches) {
    darkStyle()
  }
  else {
    lightStyle()
  }
  Cookies.set('theme', 'auto')
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

