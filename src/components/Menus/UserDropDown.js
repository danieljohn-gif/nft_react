import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import UserChip from '../AvatarInfoItems/UserChip';
import PopoverMenu from '../PopoverMenu';
import SubTitle1 from '../Typography/Subtitle1';
import Body2 from '../Typography/Body2';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import TinyBold from '../Typography/TinyBold';
import ToggleSwitch from '../Forms/ToggleSwitch';
import { changeThemeAction } from '../../store/actions/theme';
import config from '../../utils/config';
import storageService from '../../services/storage.service';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(3.875),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    '& .MuiPopover-paper': {
      background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
      '&::before': {
        content: "''",
        width: 50,
        height: 50,
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
        position: 'absolute',
        top: -7,
        left: 'calc(50% - 25px)',
        transform: 'rotate(45deg)',
        zIndex: -1,
        boxShadow: theme.shadows[10],
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        top: -8,
        left: 'calc(50% - 20px)',
        // eslint-disable-next-line max-len
        borderBottom: `13px solid ${theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1]}`,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        height: 0,
        width: 10,
      },
      [theme.breakpoints.down('xs')]: {
        '&::before, &::after': {
          display: 'none',
        },
      },
    },
  },
  menuContent: {
    minWidth: 256,
    padding: '30px 15px 20px',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90vw',
    },
  },
  code: {
    fontWeight: 'bold',
    marginTop: theme.spacing(0.5),
  },
  label: {
    flex: 1,
    fontWeight: 700,
    color: 'inherit',
  },
  menus: {
    paddingTop: theme.spacing(0.75),
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.75, 0),
    color: theme.palette.surface[3],
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& svg': {
      fontSize: 20,
      color: 'inherit',
      marginRight: theme.spacing(1),
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.surface[4],
    },
  },
}));

const UserDropDown = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = storageService.getItem(config.themeKey);

  const [themeState, setThemeState] = useState(theme === 'dark');

  useEffect(() => {
    if (themeState) dispatch(changeThemeAction('dark'));
    else dispatch(changeThemeAction('light'));
  }, [themeState, dispatch]);

  return (
    <PopoverMenu
      className={classes.paper}
      anchor={(
        <UserChip />
      )}
      anchorOrigin={{
        vertical: 60,
        horizontal: 30,
      }}
      disableCloseAsSelfClick
    >
      <div className={classes.menuContent}>
        <SubTitle1 color="primary">
          Enrico Cole
        </SubTitle1>
        <Body2
          className={classes.code}
          color="secondary"
        >
          0xc4c16ab5ac7b...b21a
        </Body2>

        <ProfileInfoCard />

        <div className={classes.menus}>
          <div
            className={classes.menuItem}
            onClick={() => history.push('/profile')}
          >
            <PersonIcon />
            <TinyBold className={classes.label}>My Profile</TinyBold>
          </div>

          <div className={classes.menuItem}>
            <WallpaperIcon />
            <TinyBold className={classes.label}>My items</TinyBold>
          </div>

          <div className={classes.menuItem}>
            <EmojiObjectsIcon />
            <TinyBold className={classes.label}>Dark theme</TinyBold>
            <ToggleSwitch
              size="small"
              value={themeState}
              handleCheck={setThemeState}
            />
          </div>

          <div className={classes.menuItem}>
            <ExitToAppIcon />
            <TinyBold className={classes.label}>Disconnect</TinyBold>
          </div>
        </div>
      </div>
    </PopoverMenu>
  );
};

export default UserDropDown;
