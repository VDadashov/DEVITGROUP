// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const MenuBar = ({ isOpen, setIsOpen }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     if (isOpen || isDropdownOpen) {
//       setIsDropdownOpen(false);
//       setIsOpen(false);
//     }
//   }, [location]);
//   return (
//     <>
//       {isOpen && (
//         <StyledMenuBar>
         
//           {/* <StyledMenuClose>
//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 setIsDropdownOpen(false);
//               }}
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>
//           </StyledMenuClose> */}
//         </StyledMenuBar>
//       )}
//     </>
//   );
// };

// const StyledMenuBar = styled.div`
//   cursor: pointer;
//   display: none;
//   position: absolute;
//   z-index: 1000;
//   @media only screen and (max-width: 650px) {
//     background: #fff;
//     width: 250px;
//     height: 300px;
//     right: 50%;
//     top: 10vh;
//     transform: translateX(50%);
//     display: flex;
//     align-items: center;
//     border-radius: 10px;
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
//       rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
//       rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//   }
// `;

// export default MenuBar;
//  <StyledMenuList>
//             <li
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               style={{ position: "relative" }}
//             >
//               <p>
//                 Services <i className="fa-solid fa-arrow-right"></i>
//               </p>
//               <Dropdown
//                 style={{
//                   display: isDropdownOpen ? "flex" : "none",
//                   opacity: isDropdownOpen ? 1 : 0,
//                   transform: isDropdownOpen
//                     ? "translateY(0)"
//                     : "translateY(-10px)",
//                 }}
//               >
//                 <li>
//                   <Link to="/service-detail/CRM">Business Automation</Link>
//                 </li>
//                 <li>
//                   <Link to="/service-detail/Branding">Branding</Link>
//                 </li>
//                 <li>
//                   <Link to="/service-detail/Web-Design">Web Design</Link>
//                 </li>
//                 <li>
//                   <Link to="/service-detail/App-design">App Design</Link>
//                 </li>
//                 <li>
//                   <Link to="/service-detail/ui-ux">UI/UX Design</Link>
//                 </li>
//               </Dropdown>
//             </li>
//             <li>
//               <Link to="/portfolio">Projects</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </StyledMenuList>