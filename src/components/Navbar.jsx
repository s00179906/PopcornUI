import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   NavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBContainer
// } from 'mdbreact';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        {
          // <MDBNavbar color='indigo' dark expand='md'>
          //   <MDBNavbarBrand>
          //     <strong className='white-text'>lul</strong>
          //   </MDBNavbarBrand>
          //   <MDBNavbarToggler onClick={this.toggleCollapse} />
          //   <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          //     <MDBNavbarNav left>
          //       {/* <MDBNavItem active>
          //         <Link to='#!'>Home</Link>
          //       </MDBNavItem>
          //       <MDBNavItem>
          //         <Link to='/tvshows' />
          //       </MDBNavItem>
          //       <MDBNavItem>
          //         <Link to='#!'>Pricing</Link>
          //       </MDBNavItem> */}
          //       <MDBNavItem>
          //         <MDBDropdown>
          //           <MDBDropdownToggle nav caret>
          //             <span className='mr-2'>More</span>
          //           </MDBDropdownToggle>
          //           <MDBDropdownMenu>
          //             <MDBDropdownItem>
          //               <Link to='/'>Movies</Link>
          //             </MDBDropdownItem>
          //             <MDBDropdownItem>
          //               <Link to='/tvshows'>TV Shows</Link>
          //             </MDBDropdownItem>
          //             <MDBDropdownItem>
          //               <Link to='/search'>Search</Link>
          //             </MDBDropdownItem>
          //           </MDBDropdownMenu>
          //         </MDBDropdown>
          //       </MDBNavItem>
          //     </MDBNavbarNav>
          //   </MDBCollapse>
          // </MDBNavbar>
          <MDBNavbar color='default-color' dark expand='md'>
            <MDBNavbarBrand>
              <strong className='white-text'>lul</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to='/'>Movies</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/tvshows'>TV Shows</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/search'>Search</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className='waves-effect waves-light' to='#!'>
                    <MDBIcon fab icon='twitter' />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon='user' />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        }
      </React.Fragment>
    );
  }
}

export default Navbar;
