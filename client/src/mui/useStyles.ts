import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  'form-content': {
    marginBottom: 40,
  },
  input: {
    width: '100%',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
  },
}));

export default useStyles;
