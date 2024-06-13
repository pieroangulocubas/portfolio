import styles from '@/styles/molecules/CardRow.module.scss'
import recentsStyles from '@/styles/organisms/Recents.module.scss'
import { classNames } from "@/utils/classNames"
import Button from "@/atoms/button/Button"
import CardHeading from "@/molecules/card-heading/CardHeading"

const tecnologies=["react","node","sass","next"]


interface CardRowProps {
  inHero?:boolean
}
const CardRow = ({inHero}:CardRowProps) => {
  return (
    <div className={classNames(styles["horizontal-card"])}>
      <div className={classNames(styles["horizontal-card__content"])}>
        <div className={classNames(styles["horizontal-card__head"])}>
          <CardHeading title='Ecommerce' tecnologies={tecnologies} inHero={inHero} />
          <span className={classNames(styles['horizontal-card__category'],"semibold")}>Web</span>
        </div>
        <p className={classNames(styles["horizontal-card__description"])}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, tempora eos
          quae
          debitis delectus beatae modi. Quidem dicta iste eos id eveniet. Eius, soluta pariatur. Ducimus quae officiis
          consequuntur ipsa!</p>
        <div className={classNames(styles["horizontal-card__buttons"])}>
          <Button mode="ghost">Ver Repo</Button>
          <Button mode="solid">Cómo lo hice</Button>
        </div>
      </div>
      <div className={classNames(styles["horizontal-card__image"])}>
        <img
          src="https://images.pexels.com/photos/5356283/pexels-photo-5356283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen" />
      </div>
    </div>
  )
}
export default CardRow