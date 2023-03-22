import React from 'react'
import "./sidebar.css"
import {NavLink} from "react-router-dom";
import { BsPeopleFill,BsFillBookmarkFill,BsMortarboardFill,BsFillBookFill,BsFillCalendarCheckFill,
  BsFillFileEarmarkCheckFill,BsFillBriefcaseFill,BsFillKeyFill,BsFillLayersFill,BsFillMotherboardFill,
  BsFillPersonLinesFill,BsFillPersonFill,BsCheckSquareFill  } from 'react-icons/bs';
export default function Sidebar() {
  return (
    <div>

<div className="sidebar">
<br></br>
<NavLink to=" "><BsFillLayersFill/> Candidature</NavLink>
  <NavLink to="/home/stagiaires"><BsPeopleFill/> Stagiaires</NavLink>
  <NavLink to="/home/promotions"><BsMortarboardFill/> Promotions </NavLink>
  <NavLink to=" "><BsFillBookmarkFill/> Sections</NavLink>
  <NavLink to=" "><BsFillCalendarCheckFill/> Spécialité</NavLink>
  <NavLink to=" "><BsFillPersonLinesFill/> Groupe</NavLink>
  <NavLink to=" "><BsFillBriefcaseFill/> Modules</NavLink>
  <NavLink to=" "><BsFillBookFill/> Compétences</NavLink>
  <NavLink to=" "><BsFillPersonFill/> Formateurs</NavLink>
  <NavLink to=" "><BsFillFileEarmarkCheckFill/> Evaluation</NavLink>
  <NavLink to=" "><BsCheckSquareFill/> Resultat</NavLink>
  <NavLink to=" "><BsFillMotherboardFill/> Diplomés</NavLink>
  <NavLink to=" "><BsFillKeyFill/> Administrateur</NavLink>



</div>



    </div>
  )
}
