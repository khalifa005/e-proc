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


];
