import React, {useContext } from 'react'
import ListItems from '../../components/ListItems/ListItems'
import ThemeContext from '../../context/ThemeContext'


export default function HomePage() {
    const {theme} = useContext(ThemeContext)

    return (
    <div className={ `container-home ${theme ? 'theme-dark': 'theme-ligth'}  `}>
        <ListItems /> 
    </div>
    )
}