import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useHistory } from 'react-router';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AdjustIcon from '@material-ui/icons/Adjust';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


  
export default function CompanyMenu() {
    const classes = useStyles();
    const history = useHistory();
  function KategoriOpen(){
    history.push("/company/category")
}
function urunOpen(){
    history.push("/company/products")
}
function companyOpen(){
    history.push("/company/companyinfo")
}
function employeeOpen(){
    history.push("/company/employee")
}
  

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={KategoriOpen}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Kategoriler" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Ürünler" onClick={urunOpen} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText primary="Şirket" onClick={companyOpen} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessibilityIcon/>
          </ListItemIcon>
          <ListItemText primary="Personel" onClick={employeeOpen} />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}
