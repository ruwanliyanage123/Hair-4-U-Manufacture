import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Sheduler',
    icon: 'nb-home',
    link: '/pages/scheduler'
  },
  {
    title: 'Patients',
    icon: 'nb-home',
    //link: '/pages/patients'
    children: [
      {
        title: 'Patients Details',
        link: '/pages/patients/finished'
      },
      {
        title: 'List',
        link: '/pages/patients/order'
      },
      {
        title: 'Measurement',
        link: '/pages/patients/measures'
      }
    ]
  },

  // {
  //   title: 'Manufacture',
  //   icon: 'nb-home',
  //   link: '/pages/manufacture'
  // },

  {
    title: 'Design',
    icon: 'nb-home',
    link: '/pages/design'
  },

  // {
  //   title: 'Designs',
  //   icon: 'nb-star',
  //   //link: '/pages/patients'
  //   children: [
  //     {
  //       title: 'Create',
  //       link: '/pages/design/create'
  //     },
  //     {
  //       title: 'View',
  //       link: '/pages/design/view'
  //     }
  //   ]
  // },

  {
    title: 'Saloon',
    icon: 'nb-home',
    link: '/pages/saloon'
  },
  {
    title: 'Emails',
    icon: 'nb-home',
    link: '/pages/emails'
  }

  // {
  //   title: 'Chats',
  //   icon: 'nb-star',
  //   link: '/pages/extra-components/chat',
  // },

  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps'
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet'
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble'
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap'
  //     }
  //   ]
  // },

  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   link: '/pages/charts/echarts'
  // },

  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   link: '/pages/editors/ckeditor'
  // }
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   link: '/pages/tables/smart-table',
  // },

  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
