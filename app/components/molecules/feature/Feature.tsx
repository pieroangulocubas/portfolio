import { classNames } from "@/utils/classNames"
import styles from '@/styles/molecules/Feature.module.scss'
import Icon from "@/atoms/icon/Icon"

interface FeatureProps{
  title:string
  description:string
  color:string
  icon:string
}
const Feature = ({title,description,color,icon}:FeatureProps) => {
  return (
    <article className={classNames(styles.feature)}>
      <div className={classNames(styles["feature__icon-container"],styles[color]) }>
        <Icon size="bigger" type={icon} className={classNames(styles["feature__icon"])} />
      </div>
      <h3 className={classNames(styles["feature__title"])}>{title}</h3>
      <p className={classNames(styles["feature__description"])}>{description}</p>
    </article>
  )
}
export default Feature