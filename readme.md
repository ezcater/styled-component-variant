# styled-component-variant

A tiny helper to enable you to vary your React components styles based on a prop value.

```sh
npm i styled-component-variant
```

## Usage:

```jsx
import variant from 'styled-component-variant';

const primary = css`
  background-color: 'blue';
`;

const secondary = css`
  background-color: 'orange';
`;

// you can use the theme property in your styles
const tertiary = ({theme}) => css`
  margin: ${theme.spacing.xs2};
`;

const use = variant('use', {
  primary,
  secondary,
  tertiary,
});

export default MyButton = styled('button')(use);

```