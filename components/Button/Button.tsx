import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
// import cn from 'classnames';
// import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Button: React.FC<ButtonProps> = ({
  appearance,
  arrow = 'none',
  children,
  ...props
}): JSX.Element => {
	return (
		<button
			// whileHover={{ scale: 1.05 }}
			className={clsx(styles.button,
				appearance === 'primary' && styles.primary,
				appearance === 'ghost' && styles.ghost,
        )}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={clsx(styles.arrow,
        arrow === 'down' && styles.down)}>
				<ArrowIcon />
      </span>}
		</button>
	);
};

// export const Button: React.FC<ButtonProps> = ({
//   appearance,
//   arrow = 'none',
//   children,
//   className,
//   ...props
// }): JSX.Element => {
// 	return (
// 		<button
// 			// whileHover={{ scale: 1.05 }}
// 			className={cn(styles.button, className, {
// 				[styles.primary]: appearance === 'primary',
// 				[styles.ghost]: appearance === 'ghost',
// 			})}
// 			{...props}
// 		>
// 			{children}
// 			{arrow !== 'none' && <span className={cn(
//         styles.arrow, {[styles.down]: arrow === 'down'})}>
// 				<ArrowIcon />
//       </span>}
// 		</button>
// 	);
// };