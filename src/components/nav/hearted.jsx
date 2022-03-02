import { Favorite, FavoriteBorderRounded } from '@material-ui/icons'
import React from 'react'
import Styles from './hearted.module.scss'
const Hearted=()=> {
  return (
    <div>
        <button className={Styles.hearted_btn} type='button'>
            <Favorite/>
        </button>
    </div>
  )
}

export default Hearted