import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const MenuBar = ({ isOpen, setIsOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };
    return (
        <>
            {
                isOpen && <StyledMenuBar>
                    <StyledMenuList>
                        <li
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{ position: "relative" }}
                        >
                            <p>
                                Services <i className="fa-solid fa-arrow-right"></i>
                            </p>
                            <Dropdown style={{ opacity: isDropdownOpen ? 1 : 0, transform: isDropdownOpen ? "translateY(0)" : "translateY(-10px)" }}>
                                <li><Link to="/service-detail/CRM" onClick={closeMenu}>Business Automation</Link></li>
                                <li><Link to="/service-detail/Branding" onClick={closeMenu}>Branding</Link></li>
                                <li><Link to="/service-detail/Web-Design" onClick={closeMenu}>Web Design</Link></li>
                                <li><Link to="/service-detail/App-design" onClick={closeMenu}>App Design</Link></li>
                                <li><Link to="/service-detail/ui-ux" onClick={closeMenu}>UI/UX Design</Link></li>
                            </Dropdown>
                        </li>
                        <li><Link to="/portfolio" onClick={closeMenu}>Projects</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    </StyledMenuList>
                    <StyledMenuClose>
                        <button onClick={() => {
                            setIsOpen(false)
                            setIsDropdownOpen(false)
                        }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </StyledMenuClose>
                </StyledMenuBar>
            }
        </>
    )
}

const StyledMenuBar = styled.div`
cursor: pointer;
display: none;
@media only screen and (max-width: 650px){
background: #fff;
height:  300px;
width: 250px;
position: fixed;
top: 50%;
right: 50%;
z-index: 1000;
transform: translate(50%, -50%);
display: flex;
align-items: center;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
const StyledMenuList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding-left: 60px;
gap: 20px;
z-index: 1001;
li{

a{
    text-decoration: none;
    color: #000;
    font-size: 1.7rem;
    text-align: center;
    i{
    font-size: 1.5rem;
    }
}
    p{
        text-decoration: none;
    color: #000;
    font-size: 1.7rem;
    text-align: center;
    i{
    font-size: 1.5rem;
    }
    }
}
`
const StyledMenuClose = styled.div`
position: absolute;
width: 40px;
height: 40px;
top : 20px;
right: 20px;
button{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: none;
    font-size: 1.2rem;
}
`
const Dropdown = styled.ul`
    position: absolute;
    background: white;
    list-style: none;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    li {
        padding: 10px 14px;
        &:hover {
            background: #f0f0f0;
        }
            a{
        font-size: 1.5rem;
            
            }
    }
`;
export default MenuBar