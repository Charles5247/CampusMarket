import { styled } from '@mui/system';

const NewProstyle = styled('div')({
  maxWidth: '100%',
  '& .media': {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  '& .cardActions': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '& .cardContent': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default NewProstyle;
