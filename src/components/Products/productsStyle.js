import { styled } from '@mui/system';

const productsStyle = styled('div')(({theme}) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));


export default productsStyle;
