import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCards } from '../../redux/listCardsSlice';
import { selectCards } from '../../redux/selectors';
import { useAppDispatch } from '../../redux/store';
import { CardInterface } from '../../types/types';
import Card from '../Card/Card';

const ListCards: React.FC = () => {
  const { items, status } = useSelector(selectCards);
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  let list = items.map((item: any) => <Card key={item._id} {...item} />);

  if (checked) {
    list = items
      .filter((item: CardInterface) => item.liked)
      .map((item: any) => <Card key={item._id} {...item} />);
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="title">disney pictures</h1>
          <div className="header__checkbox-wrap">
            <h2 className="checkbox__text">Понравившиеся картинки</h2>
            <input onClick={() => setChecked(!checked)} className="switch" type="checkbox"></input>
          </div>
        </div>
      </header>

      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить картинки. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="container">
          <div className="content__main">
            <div className="content__items">{status === 'loading' ? 'загрузка' : list}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCards;
