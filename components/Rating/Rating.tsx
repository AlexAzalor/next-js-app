import { Props } from './Rating.props';
import styles from './Rating.module.scss';
import clsx from 'clsx';
import StarIcon from './star.svg';
import { useEffect, useState } from 'react';

export const Rating: React.FC<Props> = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r, i) => {
      return (
        <span
          className={clsx(styles.star,
            i < currentRating && styles.filled,
            isEditable && styles.editable)}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          // onKeyDown={(e: Key)}
        >
          <StarIcon />
        </span>
      );
    });

    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};
