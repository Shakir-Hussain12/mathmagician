import './calculator.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorUi = () => {
  const [text, setText] = useState('');
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState('');

  const getText = (e) => {
    const value = e.target.textContent;

    if (first !== '') {
      if (value === '%' || value === '-' || value === '*' || value === '+' || value === '/') {
        setText('');
        setOperator(value);
        setText(`${text} ${value} `);
        return;
      }

      if (!Number.isNaN(value) && operator === '') {
        setFirst(`${first}${value}`);
        setText(`${text}${value}`);
      } else if (!Number.isNaN(value) && operator !== '') {
        if (second === '') {
          setText('');
          setSecond(`${value}`);
        }
        setSecond(`${second}${value}`);
        setText(`${text}${value}`);
      }

      if (value === '+/-') {
        if (first !== 0 && second === 0) {
          setFirst(first * -1);
          setText(text * -1);
        } else if (first !== 0 && second !== 0) {
          setSecond(second * -1);
          setText(`${first}${operator}${second}`);
        }
      }
    }
  };

  const startOperation = (e) => {
    const psuedoKey = e.target.textContent;
    const calcObj = {
      total: first,
      next: second,
      operation: operator,
    };
    getText(e, calcObj);
    const result = calculate(calcObj, psuedoKey);
    if (psuedoKey === '=') {
      setFirst(`${result.total}`);
      setSecond(0);
      setOperator('');
      setText(`${result.total}`);
    }
    if (psuedoKey === 'AC') {
      setFirst(0);
      setSecond(0);
      setOperator('');
      setText('');
    }
  };

  const Operations = ({ ops }) => (
    <div className="operations">
      {
      ops.map((op, ind) => {
        const myKey = ind;
        return (
          <button type="button" key={`Op${myKey}`} className={`Op${op}`} onClick={(e) => startOperation(e)}>{op}</button>
        );
      })
  }
    </div>
  );

  const Numeric = ({ nums }) => (
    <div className="left">
      {
      nums.map((number, ind) => {
        const myKey = ind;
        return (
          <button type="button" key={`Num${myKey}`} className={number === '.' ? 'Dec' : `Num${number}`} onClick={(e) => startOperation(e)}>{number}</button>
        );
      })
  }
    </div>
  );

  Numeric.defaultProps = {
    nums: 'none',
  };

  Numeric.propTypes = {
    nums: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  };

  Operations.defaultProps = {
    ops: 'none',
  };

  Operations.propTypes = {
    ops: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  };

  return (
    <div className="container">
      <input
        className="main"
        placeholder="0"
        type="text"
        value={text}
        onChange={() => setText(text)}
      />
      <div className="buttons">
        <Numeric nums={['AC', '+/-', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']} />
        <div className="right">
          <Operations ops={['+', '-', '*', '/', '=']} />
        </div>
      </div>
    </div>
  );
};
export default CalculatorUi;
