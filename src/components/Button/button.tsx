import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import classNames from 'classnames';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonType = 'warning' | 'dannger' | 'default' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
  size?: ButtonSize;
  btnType?: ButtonType;
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> 

export const Button: FC<ButtonProps>  = (props) => {
  const {className, disabled, children, href, size, btnType, ...restProps} = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link') {
    return <a
    className={classes}
    href={href}
    {...restProps}
    >
      {children}
    </a> 
  } else {
    return <button
    className={classes}
    disabled={disabled}
    {...restProps}
    >
      {children}
    </button>
  } 
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'medium',
}

export default Button;