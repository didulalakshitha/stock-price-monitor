import { Select } from 'antd';
import PropTypes from 'prop-types';
import styles from "./SourceSelector.css";

const { Option } = Select;

const SourceSelector = ({ title, source, value, onSelectChange }) => {
  return (
    <>
      <div>{title}</div>
      <Select onChange={onSelectChange} value={value} className={styles.selectWidth} style={{ width: 100 }}>
        {source?.map((res) => (
          <Option value={res}>{res}</Option>
        ))}
      </Select>
    </>
  )
};

SourceSelector.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func,
};

SourceSelector.defaultProps = {
  onSelectChange: () => {},
};

export default SourceSelector;
