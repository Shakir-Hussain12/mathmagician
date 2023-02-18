/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import './calculator.css';
import PropTypes from 'prop-types';

const Calculator = () => (
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
        nums.map((number, ind) => (
          <button type="button" key={`Num${ind}`} className={number === '.' ? 'Dec' : `Num${number}`}>{number}</button>
        ))
    }
  </div>
);

Numeric.defaultProps = {
  nums: 'none',
};

Numeric.propTypes = {
  nums: PropTypes.array,
};

const Operations = ({ ops }) => (
  <div className="operations">
    {
        ops.map((op, ind) => (
          <button type="button" key={`Op${ind}`} className={`Op${op}`}>{op}</button>
        ))
    }
  </div>
);

Operations.defaultProps = {
  ops: 'none',
};

Operations.propTypes = {
  ops: PropTypes.array,
};

export default Calculator;
