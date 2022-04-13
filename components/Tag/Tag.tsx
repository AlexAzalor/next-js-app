import { Props } from './Tag.props';
import styles from './Tag.module.scss';
// import cn from 'classnames';
import clsx from 'clsx';

export const Tag: React.FC<Props> = ({
  size = 'm',
  color = 'ghost',
  href,
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.tag,
      size === 's' && styles.s,
      size === 'm' && styles.m,
      color === 'ghost' && styles.ghost,
      color === 'red' && styles.red,
      color === 'grey' && styles.grey,
      color === 'green' && styles.green,
      color === 'primary' && styles.primary,
    )}
      {...props}
    >
      {
        href
            ? <a href={href}>{children}</a>
            : <>{children}</>
      }
  </div>
  );
};
