import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// material ui
import Drawer from 'material-ui/Drawer';
import { List,ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// data
import data from '../data'
class LeftBar extends Component {
  render() {
    return (
      <Drawer docked={true} containerStyle={{ backgroundColor: "#edf2f4" }}>
        <div style={{fontSize:'30px',textAlign:'center',color:'#424040',padding:'14px 0 20px 0'}}>KBAAZ</div>
        <List style={{backgroundColor:'#f9fbfc',padding:0}}>
          <Divider/>
            {
              data.menu.map((menuItem,index)=>{
                  return(                    
                    <Link to={menuItem.link} style={{textDecoration:'none'}} key={index}>
                      <ListItem primaryText={menuItem.title} leftIcon={menuItem.icon} value={menuItem.value} innerDivStyle={{fontSize:12}}/>
                      <Divider/>
                    </Link>
                  )
              })
            }
        </List>
        <div style={{position:'fixed',bottom:0,width:'100%',backgroundColor:'#f9fbfc'}}>
          <List style={{padding:0}}>
          <Divider/>
          {
            data.bottomMenu.map((item,index)=>{
              return(
                <Link to={item.link} style={{textDecoration:'none'}} key={index}>
                  <ListItem primaryText={item.title} leftIcon={item.icon} value={item.value} innerDivStyle={{fontSize:12}}/>
                  <Divider/>
                </Link>
              )
            })
          }
          </List>
        </div>
      </Drawer>
    );
  }
}

export default LeftBar;
