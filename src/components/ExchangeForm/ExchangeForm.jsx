import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/currency/operation';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const hendelSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.currency.value;
    const [amount, from, , to] = value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
    // console.log(amaunt, from, to);
  };
  return (
    <form className={styles.form} onSubmit={hendelSubmit}>
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
  );
};
