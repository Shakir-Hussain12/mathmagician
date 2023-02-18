import './Calculator.css';
import PropTypes from 'prop-types';

const CalculatorUi = () => (
  <div className="container">
    <input
      className="main"
      placeholder="0"
    />
    <div className="buttons">
      <Numeric nums={['AC', '+/-', '%', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']} />
      <div className="right">
        <Operations ops={['+', '-', '*', '/', '=']} />
      </div>
    </div>
  </div>
);

const Numeric = ({ nums }) => (
  <div className="left">
    {
        nums.map((number, ind) => {
          const myKey = ind;
          return (
            <button type="button" key={`Num${myKey}`} className={number === '.' ? 'Dec' : `Num${number}`}>{number}</button>
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

const Operations = ({ ops }) => (
  <div className="operations">
    {
        ops.map((op, ind) => {
          const myKey = ind;
          return (
            <button type="button" key={`Op${myKey}`} className={`Op${op}`}>{op}</button>
          );
        })
    }
  </div>
);

Operations.defaultProps = {
  ops: 'none',
};

Operations.propTypes = {
  ops: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

export default CalculatorUi;
