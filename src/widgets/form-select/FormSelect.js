// import node module libraries
import { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const FormSelect = ({
  placeholder = '',
  defaultselected = '',
  options,
  id = '',
  name = '',
  onChange,
  required = false,
}) => {
  return (
    <Fragment>
      <Form.Select
        defaultValue={defaultselected}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
      >
        {placeholder ? (
          <option value="" className="text-muted">
            {placeholder}
          </option>
        ) : (
          ''
        )}
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value} className="text-dark">
              {item.label}
            </option>
          );
        })}
      </Form.Select>
    </Fragment>
  );
};

/* FormSelect.propTypes = {
	placeholder: PropTypes.string.isRequired,
	defaultselected: PropTypes.string.isRequired,
	required : PropTypes.bool.isRequired,
	id: PropTypes.string,
	name: PropTypes.string
};

FormSelect.defaultProps = {
	placeholder: '',
	defaultselected: '',
	required:false,
	id: '',
	name: ''
}; */

export default FormSelect;
