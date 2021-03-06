import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  unit: {
    marginLeft: 5,
    color: theme.palette.success.main,
    fontWeight: 'bold',
  },
}));

const CustomChip = withStyles((theme) => ({
  root: {
    height: theme.spacing(5),
    marginLeft: 11,
    '& .MuiChip-avatar': {
      width: 32,
      height: 32,
      marginLeft: 2,
      marginRight: 3,
    },
  },
  outlined: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: theme.palette.surface[2],
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}))(Chip);

const UserChip = () => {
  const classes = useStyles();

  return (
    <CustomChip
      avatar={(
        <Avatar src={`${resourcePath.user}2.jpg`} />
      )}
      label={(
        <span>
          7.00698
          <span className={classes.unit}>ETH</span>
        </span>
      )}
      variant="outlined"
      clickable
    />
  );
};

UserChip.propTypes = {
};

UserChip.defaultProps = {
};

export default UserChip;
