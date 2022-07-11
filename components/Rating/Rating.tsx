import { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating-props";
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

const { filled, star, editable } = styles;

const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(star, {
                        [filled]: i < currentRating,
                        [editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => {changeDisplay(rating)}}
                    onClick={() => onClick(i + 1)}

                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
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

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }

        setRating(i);
    };



    return <div {...props}>
        {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
    </div>;
};

export default Rating;