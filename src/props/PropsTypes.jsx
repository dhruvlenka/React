import PropTypes from 'prop-types';

function Greeting({ name, age }) {
    return <h1>{name} is {age} years old.</h1>;
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default PropTypes;