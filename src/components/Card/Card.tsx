import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/listCardsSlice';
import { selectCards } from '../../redux/selectors';
import { CardInterface } from '../../types/types';

const Card: React.FC<CardInterface> = ({ imageUrl, name, _id }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState<boolean>(false);
  const { items } = useSelector(selectCards);

  useEffect(() => {
    const updateItems = items.map((item: CardInterface) => {
      if (item._id === _id) {
        return {
          ...item,
          liked,
        };
      }

      return item;
    });

    dispatch(setItems(updateItems));
  }, [liked]);

  const deleteCard = items.filter((item: CardInterface) => item._id !== _id);

  return (
    <div className="content__item-card">
      <img className="content__item-card-img" src={imageUrl} alt={name} />
      <span className="content__item-card-name">{name}</span>
      <div className="content__item-card-elem">
        <svg className='like'
          onClick={() => setLiked(!liked)}
          width="30px"
          height="30px"
          fill={liked ? '#ff0000' : '#e28090'}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>

        
       <svg className='trash'
       onClick={() => dispatch(setItems(deleteCard))}
       fill="" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
      </div>
    </div>
  );
};

export default Card;
