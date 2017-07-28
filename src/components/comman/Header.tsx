import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
const hImg = require('Images/img1.jpg');
var navAct:number = 0;
import Scrollchor from 'react-scrollchor';

class Header extends React.Component<any, any> {
	mobMenuClick = (event:React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		var getNav:any = document.querySelector('header nav ul');
		if(navAct!==0){
			getNav.className=''
			navAct=0
		}else{
			getNav.className='act'
			navAct=1
		}
	}//
  closeMenu = (event:React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		var getNav:any = document.querySelector('header nav ul');
			getNav.className=''
			navAct=0
	}
  render() {
    return (
      <header className="Header">
          <div className="container">
              <div className="row">
                  <div className="col-sm-3 col-xs-12">
                    <img src="" />
                  </div>
                  <div className="col-sm-9 col-xs-12">
                    <nav>
                    <a onClick={(e) => this.mobMenuClick(e)} className="mobMenu">
                      <i className="fa fa-bars"></i>
                    </a>
                    <Route path="/" exact={true} children={({match}) => 
                    match ?
                      <HomeNav closeMenu={()=> this.closeMenu} />:
                      <ul>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/" exact>Home</NavLink>
                        </li>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/#About-Us" exact>About Us</NavLink>
                        </li>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/#Features" exact>Features</NavLink>
                        </li>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/#Inception" exact>Inception</NavLink>
                        </li>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/#Contact" exact>Contact</NavLink>
                        </li>
                        <li onClick={(j:any) => this.closeMenu(j)}>
                          <NavLink activeClassName="act" to="/faqs">FAQS</NavLink>
                        </li>
                      </ul>
                    } />
                    </nav>
                  </div>
              </div>
          </div>
          <nav className="dotNav">
            <Route path="/" exact={true} children={({match}) => 
              match ?
                <HomeNav closeMenu={()=> this.closeMenu} /> : null
              } />
          </nav>
      </header>
    );
  }

}


class HomeNav extends React.Component<any,any>{
  scrollAct = () => {
		var Sections:any = document.querySelectorAll('section');
		var Nav:any = document.querySelectorAll('header nav ul li a');
		var NavH:number = 51;
		var Wscroll = window.pageYOffset;
		for(let i=0;i<Sections.length;i++ ){
			var top = Sections[i].offsetTop - NavH,
				bottom = top + Sections[i].clientHeight;
			if(Wscroll >= top && Wscroll <= bottom){
				for(let z=0;z<Nav.length;z++){
					var str:string= Nav[z].href
					var afterHas = str.substr(str.indexOf("#") + 1);
					if(afterHas==Sections[i].id){
						Nav[z].className = "act"
					}else{
						Nav[z].className = ""
					}
				}
			}
		} 
	}
	componentDidMount() {
		window.addEventListener('scroll', (e)=>this.scrollAct());
	}
	componentWillMount() {
		this.scrollAct()
  }
  render(){
    return(
      <ul>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} className="act" to="#Home"><span>Home</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} to="#About-Us"><span>About Us</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} to="#Features"><span>Features</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} to="#Inception"><span>Inception</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} to="#Screens"><span>Screens</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <Scrollchor animate={{offset: -50}} to="#Contact"><span>Contact</span></Scrollchor>
        </li>
        <li onClick={(j:any) => this.props.closeMenu(j)}>
          <NavLink activeClassName="act" to="/faqs">FAQS</NavLink>
        </li>
      </ul>
    )
  }
}

export default Header;
