import { FontSize } from './P.props';
import styles from './P.module.scss';
import clsx from 'clsx';

export const P: React.FC<FontSize> = ({
  size = '14',
  children,
  ...props
}) => {
  return (
    <p className={clsx(styles.p,
      size === '14' && styles.paragraph14,
      size === '16' && styles.paragraph16,
      size === '18' && styles.paragraph18,
    )}
    {...props}
    >
    {children}
  </p>
  );
};
