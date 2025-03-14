import './MenuItem.scss';

function MenuItem({id, title, link, children}){

    console.log(children)

        return <li>
            <a className="main-menu-link" id={id} href={link}>{title}</a>    
            {children.length > 0 && 
                <ul className="menu-inner-block">{
                    children.map((_menu)=><MenuItem key={_menu.id} id={_menu.id} title={_menu.title} link={_menu.link} children={_menu.children} />)
                    }
                </ul>
            }
        </li>
}

export default MenuItem;   