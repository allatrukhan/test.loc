<div class=" burger-menu">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-btn" for="menu-toggle">
      <span></span>
    </label>
  
  <ul class="menubox">
      <div class="open-search-menu-burger">
        <button type="button" class="open-search-menu-burger" onClick="openSearchBlock()">
          <img src=".././images/search.png" class="search-img" alt="search-img">
            <span>Пошук</span>
        </button>
      
        <button type="button" class="open-search-menu-burger-adaptive" onClick="openSearchBlock()">
            <img src=".././images/search.png" class="search-img" alt="search-img">
        </button>
      </div>

  <li class="menu-item dropdown">
    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Про управління</a>
        <ul class="dropdown-menu">
            <li id="menu-item-1">
              <a class="dropdown-item" href=".././pdfs/Про_Головне_управління.pdf">Про Головне управління</a>
            </li>
            <li id="menu-item-2">
              <a class="dropdown-item" href="#">Профспілкова організація</a> 
            </li>
            <li id="menu-item-3">
              <!-- route  Профспілкова організація -->
              <a class="dropdown-item" href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
            </li>
            <li id="menu-item-4">
              <!-- ?? Державні установи (лабораторії, лікарні) ветеринарної медицини -->
              <a class="dropdown-item" href=".././pdfs/Структура.pdf">Структура</a>
            </li>
            <li id="menu-item-5">
              <a class="dropdown-item" href="#">Кадрова політика</a>
            </li>
            <li id="menu-item-6">
              <!-- ?? Кадрова політика -->
              <a class="dropdown-item" href="https://bf.in.ua/u-voiennyj-chas/">У воєнний час</a>
            </li>
            <li id="menu-item-7">
              <a class="dropdown-item" href="#">Розпорядок роботи</a>
            </li>
            <li id="menu-item-8">
              <!-- route  Розпорядок роботи -->
              <a class="dropdown-item" href="#">Очищення влади</a>
            </li>
            <li id="menu-item-9" class=>
              <!-- ?? -->
              <a class="dropdown-item" href="#">Кіровоградська регіональна державна лабораторія ветеринарної медицини</a>
              <!-- route Кіровоградська регіональна державна лабораторія ветеринарної медицини -->
             </li>
          </ul>
  </li>
  <li class="menu-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Діяльність</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Суб'єктам господарювання</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Закупівлі</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Планування діяльності</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Внутрішній аудит</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Плани та звіти про виконання</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Оцінювання службової діяльності посадових осіб</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Система енергетичного менеджменту</a></li>
                    <!-- ?? -->
      </ul>
  </li>
  <li class="menu-item dropdown">
            <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Напрямки</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Контроль за цінами</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Санітарно-епідеміологічний нагляд</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Фітосанітарна безпека, насінництво та розсадництво</a></li>
                    <!-- route fito-security-blade -->
                    <li><a class="dropdown-item" href="#">Захист прав споживачів</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Харчові продукти та ветеринарна медицина</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Реєстрація сільськогосподарської техніки</a></li>
                    <!-- ?? -->
                </ul>
  </li>
  <li class="menu-item dropdown">
            <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Публічна інформація</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Перелік відомостей, що містить службову інформацію</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Інформація про використання бюджетних коштів</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Про стан розгляду запитів на публічну інформацію</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Доступ до публічної інформації</a></li>
                    <!-- ?? -->
                </ul>
  </li>
  <li class="menu-item dropdown">
            <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Звʼязки з громадськістю</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"> Суб'єктам господарювання</a></li>
                    <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Залишити звернення </a></li>
                    <!-- request-form-blade -->
                    <li><a class="dropdown-item" href="#">Аналіз звернень громадян</a></li>
                    <!-- need to make blade from content on web site  -->
                </ul>
  </li>
  <li class="menu-item dropdown">
            <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Стоп корупція</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Запобігання проявам корупції</a></li>
                     <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Нормативно-правова база</a></li>
                     <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Планування діяльності</a></li>
                     <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Декларування</a></li>
                     <!-- ?? -->
                    <li><a class="dropdown-item" href="#">Повідом про корупцію</a></li>
                     <!-- ?? -->
                </ul>
  </li>
  <li class="menu-item">
            <a class="nav-link" href="#">У воєнний час</a>
            <!-- ?? -->
  </li>
  <div class="frame1-adaptive">
        <div class="social-network-btns-adaptive">
          <img src=".././images/android_header.png" class="social-img" alt="android-img">
          <img src=".././images/facebook_header.png" class="social-img" alt="social-img">
        </div>

        <div class="govua-group">
          <div class="rectangle-group">
            <div class="rec1"></div>
            <div class="rec2"></div>
          </div>
          <div class="gov-ua">
            <div class="link-gov-ua-1">
                <p class="gov">
                gov.ua
                </p>  
            </div>
            <div class="link-gov-ua-2">
                <p class="title-gov-ua">
                Державні сайти України
                </p> 
            </div>   
          </div> 
        </div>   
  </div>
  
</ul>
  
</div>