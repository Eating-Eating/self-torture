

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import { createStyles,makeStyles } from "@material-ui/styles";
import { FC } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme:any) =>{
  return createStyles({
    bottom: {
      position: "fixed",
      bottom:0,
      left:0,
      right:0,
      top:'auto'
    },
  })
});
 const BottomNav:FC<{}> =  ({children})=>{
  const history = useHistory()
  const classes = useStyles();
  return (<>
  {children}
  <BottomNavigation
    onChange={(event, newValue) => {
      history.push(newValue)
    }}
    showLabels
    className={classes.bottom}
  >
  <BottomNavigationAction value="/react" label="知识的宝库" icon={<RestoreIcon />} />
  <BottomNavigationAction value="/selfTorture" label="自我拷打" icon={<RestoreIcon />} />
</BottomNavigation>
</>)
}

export default withRouter(BottomNav)