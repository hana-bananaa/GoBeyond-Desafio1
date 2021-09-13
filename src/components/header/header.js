import './header.css'
import logo from '../imgs/gobeyond_logo_white 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser as farFaUser} from '@fortawesome/free-regular-svg-icons'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
     return(
         <div className="header">
             <div className="logo">
                 <img src={logo} alt="logo"/>
             </div>
             <div className="categories">
                 <a href="/" className="list-header">Home</a>

                 <div className="dropdown">
                 <button className="dropbtn">Feminino   <FontAwesomeIcon icon={faCaretDown}/></button>
                    <div className="dropdown-content">
                        <a href="/" className="list-cat">Vestidos</a>
                        <a href="/" className="list-cat">Moletom</a>
                        <a href="/" className="list-cat">Casacos</a>
                    </div>
                </div>
            

                <div className="dropdown">
                 <button className="dropbtn">Masculino <FontAwesomeIcon icon={faCaretDown}/> </button>
                    <div className="dropdown-content">
                        <a href="/">Calças</a>
                        <a href="/">Moletom</a>
                        <a href="/">Casacos</a>
                    </div>
                </div>
            
                 <a href="/" className="list-header">Contato</a>
             </div>
             <>
             <div className="search">
                 
                 <div className="busca">
                    <form action="/action_page.php">
                    <input className="buscar-texto" type="text" placeholder="O que está procurando?" name="search"/>
                        <button type="submit"className="lupa-button"> <FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                 </div>

                 <div className="conta">
                    <a href="/" className="list-header">
                         <FontAwesomeIcon icon={farFaUser} />
                          <p className="conta-p"> Minha Conta </p>
                     </a>
                 </div>
                 
                 <div className="carrinho">
                    <a href="/" className="carrinho">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <button  className="cars">0</button>
                    </a>
                 </div>
             </div>
             </>
         </div>
     )
} 
export default Header;