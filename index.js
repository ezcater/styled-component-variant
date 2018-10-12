const getValue = (props, variant) => (typeof variant === 'function' ? variant(props) : variant);

module.exports = (prop, values) => props => {
  const variant = props[prop] && values[props[prop]];
  return variant && getValue(props, variant);
};
