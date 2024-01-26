<header>
<div class="container header-content">
    <div class="row">
    <div class="col-3 col-xl-6 frame1">
        <div class="burger">
            <img src=".././images/menu.png" class="menu-burger-img" alt="menu-img"> 
       {{--  @include('frontend/burger_menu')--}}    
        </div>
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

    <div class="col-6 order-xl-0 col-md-12 order-2 frame2">
        <img src=".././images/emblem_img.png" class="emblem-img" alt="emblem">
        
        <div class="frame3">
            <p class="text1">
                Головне управління Держпродспоживслужби в Кіровоградській області
            </p>
            <p class="text2">
                Офіційний веб-сайт (веб-портал)
            </p>    
        </div>
    </div>

    <div class="col-3 col-xl-6 special">
            <div class="special-eye-block">
                <div class="eye-icon">
                    <img src=".././images/eye-icon.png" class="eye-img" alt="eye-img">
                </div>  
                <p class="special-text-block">  
                    Людям із порушенням зору
                </p> 
            </div>
            <div class="social-network-btns">
                <img src=".././images/android_header.png" class="social-img" alt="android-img">
                <img src=".././images/facebook_header.png" class="social-img" alt="social-img">
            </div>
            <div class="search-header-btn">
                <button type="button" class="open-search" onClick="openSearchBlock()">
                    <img src=".././images/search.png" class="search-img" alt="search img">
                    <span>Пошук</span>
                </button>
            </div>
            <div class="search-header-btn-adaptive">
                <button type="button" class="open-search" onClick="openSearchBlock()">
                    <img src=".././images/search.png" class="search-img" alt="search img">
                </button>
            </div>
    </div>
</div>
<div class="row main-menu">
     @include('frontend/main_menu')
    </div>
<!-- <div class="header-content-adaptive">
    <div class="header-content-adaptive-block-1">
        <div class="header-content-adaptive-block-1-1">
            <img src=".././images/menu.png" class="menu-burger-img" alt="menu-img"> 
            <div class="frame1-adapvive">
                <div class="rectangle-group">
                    <div class="rec1"></div>
                    <div class="rec2"></div>
                </div>
            <div class="gov-ua">
            <div class="link-gov-ua-1">
                <p class="gov.ua">
                gov.ua
                </p>  
            </div>
            <div class="link-gov-ua-2">
                <p class="title-gov-ua">
                Державні сайти України
                </p> 
            </div>   
        </div> 
        <div class="header-content-adaptive-block-1-2">
            <img src=".././images/search.png" class="search-header-img" alt="search img">
            <p class="search-header-text-field">
                Пошук
            </p> 
        </div>   
    </div>
    <div class="header-content-adaptive-block-2">
        <div class="frame2-adaptive">
            <img src=".././images/emblem_img.png" class="emblem-img" alt="emblem">
            <div class="frame3-adaptive">
                <p class="text1">
                Головне управління Держпродспоживслужби в Кіровоградській області
                </p>
                <p class="text2">
                Офіційний веб-сайт (веб-портал)
                </p>    
            </div>
        </div>
        
    </div>
    -->


</header>

