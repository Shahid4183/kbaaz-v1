import React from 'react';
import Home from 'material-ui/svg-icons/action/home'
import Transaction from 'material-ui/svg-icons/action/payment'
import Schedule from 'material-ui/svg-icons/action/schedule'
import Contact from 'material-ui/svg-icons/communication/contacts'
import Account from 'material-ui/svg-icons/action/account-box'
import Settings from 'material-ui/svg-icons/action/settings'
import Help from 'material-ui/svg-icons/action/help-outline'
import Logout from 'material-ui/svg-icons/action/exit-to-app'

const data = {
    menu:[
        {title:'Kids',value:1,icon:<Home/>,link:'/kids'},
        {title:'Events',value:2,icon:<Schedule/>,link:'/events'},
        {title:'Transactions',value:3,icon:<Transaction/>,link:'transactions'},
        {title:'Contacts',value:4,icon:<Contact/>,link:'contacts'},
        {title:'Account',value:5,icon:<Account/>,link:'account'},
        {title:'Settings',value:6,icon:<Settings/>,link:'settings'},
    ],
    bottomMenu:[
        {title:'Help',value:1,icon:<Help/>,link:'help'},
        {title:'Logout',value:2,icon:<Logout/>,link:'logout'},
    ],
    login:{
        username:'user1@kbaaz.com',
        password:'kbaaz123'
    },
    kids:[
        {
            firstname:'First',
            lastname:'Kid',
            dob:new Date(1995,10,17),
            gender:'male',
            accountno:'ACCOUNT_1',
            balance:'XXX.XX',
            created_at:'05/22/2018',
            locationname:'Administrator Mailing Address',
            state:'Michighan',
            city:'DEARBORN',
            street:'123 Main street',           
            zipcode:'14330',
        },
        {
            firstname:'Second',
            lastname:'Kid',
            dob:new Date(1995,10,1),
            gender:'female',
            accountno:'ACCOUNT_2',
            balance:'XXX.XX',
            created_at:'05/22/2018',
            locationname:'Administrator Mailing Address',
            state:'Michighan',
            city:'DEARBORN',
            street:'123 Main street',           
            zipcode:'14330',
        }
    ]
}

export default data