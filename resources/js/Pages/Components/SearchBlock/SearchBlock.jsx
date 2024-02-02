import CloseBtn from '../Buttons/CloseBtn/CloseBtn';
// import SearchBtn from '../Buttons/SearchBtn/SearchBtn';
import './SearchBlock.scss';

function SearchBlock({closeSearchBlock}){

    return(
        <div class="search-block">
            <CloseBtn onClick={closeSearchBlock}/>
    
    <div class="content-search-block">
        <div class="search-title">
            <p class="menu-search-title">Пошук на порталі</p>
        </div>
        <div class="search-on-portal">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control" type="search" placeholder="Законодавство" aria-label="Search"/>
                {/* <SearchBtn/> */}
            </form>
        </div>
    </div>
</div>
    )

}

export default SearchBlock;   