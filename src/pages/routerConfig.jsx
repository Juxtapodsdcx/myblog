import {Router} from "react-router";
import Mainpage from "./mainpage/mainpage"
import React from "react";
const routeConfig = [
    { path: '/',
      component: Mainpage,
      indexRoute: { component:  Mainpage},
    //   childRoutes: [
    //     { path: 'about', component: About },
    //     { path: 'inbox',
    //       component: Inbox,
    //       childRoutes: [
    //         { path: '/messages/:id', component: Message },
    //         { path: 'messages/:id',
    //           onEnter: function (nextState, replaceState) {
    //             replaceState(null, '/messages/' + nextState.params.id)
    //           }
    //         }
    //       ]
    //     }
    //   ]
    }
  ]

  const Routers=()=>{
      return(
<Router routes={routeConfig} />
      )
  }
  
  export default Routers;