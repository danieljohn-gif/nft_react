import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
  },
  icon: {
    marginLeft: 16,
    '& svg': {
      fontSize: 17,
    },
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  error: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      background: theme.palette.error.dark,
    },
  },
  success: {
    background: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
}));

const FilledButton = ({
  className,
  label,
  icon,
  size,
  handleClick,
  color,
}) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.root, className, classes[color])}
      variant="contained"
      size={size}
      onClick={handleClick}
    >
      {label}
      {Boolean(icon) && (
        <span className={clsx(classes.icon, classes.root)}>{icon}</span>
      )}
    </Button>
  );
};

FilledButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'error', 'success']),
};

FilledButton.defaultProps = {
  className: '',
  icon: '',
  size: 'medium',
  handleClick: () => {},
  color: 'primary',
};

export default FilledButton;
