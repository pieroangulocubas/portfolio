import styles from '@/atoms/button/Button.module.scss';
import { classNames } from '@/utils/classNames';


export interface ButtonProps{
  mode?:'solid' | 'ghost' | 'white' | 'link' | 'strong',
  className?:string
  children:React.ReactNode | React.ReactNode[],
  isSlide?:Boolean,
  onAction?:()=>void
}
const Button = ({isSlide=false,mode="solid",children,className,onAction}:ButtonProps) => {
  return (
    <>
      {
        isSlide ? (
              <button className={classNames(className,styles['btn__slide'])}>
                {children}
              </button>
          )
          :
          (
            <button onClick={onAction} className={classNames(className,styles.btn,styles[`btn-${mode}`])}>
              {children}
            </button>
          )
      }
    </>
  )
}
export default Button
