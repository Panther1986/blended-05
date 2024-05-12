import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/currency/operation';
import { ExchangeInfo } from '../ExchangeInfo/ExchangeInfo';
import { selectExchangeInfo } from 'reduxState/selectors';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const hendelSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.currency.value;
    const [amount, from, , to] = value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
    // console.log(amaunt, from, to);
  };
  const exchangeInfo = useSelector(selectExchangeInfo);
  return (
    <div>
      {isError && (
        <Heading
          error
          title="Something went wrong...😐 Check the data validity and try again!"
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <RiExchangeDollarFill className={styles.icon} />
        </button>
        <input
          name="currency"
          title="Request format 15 USD in UAH"
          className={styles.input}
          pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        />
      </form>
      {exchangeInfo && <ExchangeInfo exchangeInfo={exchangeInfo} />}
    </div>
  );
};
