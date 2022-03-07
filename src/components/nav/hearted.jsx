import { Bookmark} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './hearted.module.scss'
const Hearted=()=> {
  return (
    <div>
        <Link to="/liked"className={Styles.hearted_btn} type='button'>
            <Bookmark/>
        </Link>
    </div>
  )
}

export default Hearted