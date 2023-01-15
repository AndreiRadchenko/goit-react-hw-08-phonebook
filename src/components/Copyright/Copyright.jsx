import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Copyright = props => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © Created by '}
        <Link color="inherit" href="https://github.com/AndreiRadchenko">
          Andrii Radchenko
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
};
