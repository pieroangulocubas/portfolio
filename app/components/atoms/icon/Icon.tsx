import { classNames } from "@/utils/classNames"
import styles from '@/atoms/icon/Icon.module.scss'
interface IconProps{
    size?:'large' |'medium' | 'bigger' | 'normal',
    type:string,
    className?:string,
  }
  const Icon = ({size,type,className}:IconProps) => {
    return (
      <svg className={classNames(className,styles.icon,styles[`${size}`])}>
        <use href={`/icons.svg#${type}`} />
      </svg>
    )
  }
  export default Icon