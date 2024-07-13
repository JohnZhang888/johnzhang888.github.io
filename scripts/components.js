document.querySelector('#Navbar').innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container">
  <a href="index.html"><img src="" id="logo"
      class="navbar-brand"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link text-body -essays-title" aria-current="page" href="essays.html"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-body -composition-title" href="compositions.html"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-body -tag-title" href="tools-and-games.html"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-body -about-title" href="about.html"></a>
      </li>
    </ul>
    <form class="d-flex" style="list-style-type: none">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a href="mailto:zyk100859@163.com?subject=评价 / Rate johnzhang888.github.io" class="nav-link text-body"><i class="bi bi-chat-dots-fill"></i>&ensp;<span class="-rate"></span></a>
        </li>  
      <li class="nav-item">
          <a class="nav-link text-body -language-button" onclick="changeLanguage()" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-body dropdown-toggle" href="#" id="themeDropdown" role="button" data-bs-toggle="dropdown"aria-expanded="false"></a>
          <ul class="dropdown-menu" aria-labelledby="themeDropdown">
            <li><a id="autoDropdown" class="dropdown-item -auto" onclick="autoTheme()"><i
                  class="bi bi-circle-half"></i>&ensp;</a></li>
            <li><a id="lightDropdown" class="dropdown-item -light" href="#" onclick="lightTheme()"><i
                  class="bi bi-sun-fill"></i>&ensp;</a></li>
            <li><a id="darkDropdown" class="dropdown-item -dark" href="#" onclick="darkTheme()"><i
                  class="bi bi-moon-stars-fill"></i>&ensp;</a></li>
          </ul>
        </li>
        
      </ul>

    </form>
  </div>
</div>
</nav>`