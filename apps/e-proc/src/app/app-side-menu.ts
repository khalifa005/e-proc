import { NbMenuItem } from '@nebular/theme';
// import { icon } from 'leaflet';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true, //do not affect base route
  },

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'lookups.lookups',
    icon: 'keypad-outline',
    children: [
      {
        title: 'lookups.categories',
        icon: 'list-outline',
        link: '/pages/categories',
      },
      {
        title: 'lookups.status',
        icon: 'list-outline',
        link: '/pages/status',
      },
      {
        title: 'lookups.cities',
        icon: 'list-outline',
        link: '/pages/cities',
      },
      {
        title: 'lookups.groups',
        icon: 'list-outline',
        link: '/pages/groups',
      },
      {
        title: 'lookups.roles',
        icon: 'list-outline',
        link: '/pages/roles',
      },
      {
        title: 'lookups.departments',
        icon: 'list-outline',
        link: '/pages/departments',
      },

    ],
  },
  {
    title: 'usermanagement.user-management',
    icon: 'keypad-outline',
    children:[
      {
        title: 'usermanagement.roles-management',
        icon: 'list-outline',
        link: '/pages/user-management/rolesmanagement',
      },
      {
        title: 'usermanagement.users',
        icon: 'list-outline',
        link: '/pages/user-management/users',
      },
      {
        title: 'usermanagement.calender',
        icon: 'calendar-outline',
        link: '/pages/user-management/calender',
      },

    ]
  },
  {
    title: 'customers',
    icon: 'people-outline',
    children: [
      {
        title: 'list-customers',
        icon: 'list-outline',
        link: '/pages/customer/list',
      },

    ],
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  }

];
