import Link from "next/link"
import Icon from "@/atoms/icon/Icon"
import styles from '@/organisms/nav/Nav.module.scss'

type NavLink={id:string,name:string,icon:string,pathName:string}
interface NavProps{
    navLinks:NavLink[]
}

const Nav = ({navLinks}:NavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className="ui-list ui-list--horizontal">
        {
          navLinks.map(l=>(
            <li key={l.name} className="item">
              <Link href={l.pathName} className="link">
                <Icon type={l.icon} size="large" className={styles["nav__icon"]} />
                {l.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Nav