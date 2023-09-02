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
        title: 'lookups.ticket-categories',
        icon: 'list-outline',
        link: '/pages/ticket-categories',
      },
      {
        title: 'lookups.ticket-status',
        icon: 'list-outline',
        link: '/pages/ticket-status',
      },
      {
        title: 'lookups.insurance-types',
        icon: 'list-outline',
        link: '/pages/insurance-types',
      },
      {
        title: 'lookups.case-titles',
        icon: 'list-outline',
        link: '/pages/case-titles',
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
        title: 'lookups.case-origins',
        icon: 'list-outline',
        link: '/pages/case-origins',
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
      {
        title: 'lookups.areas',
        icon: 'list-outline',
        link: '/pages/areas',
      },
      {
        title: 'lookups.policy-source',
        icon: 'list-outline',
        link: '/pages/policy-sources',
      },
      {
        title: 'lookups.final-decision',
        icon: 'list-outline',
        link: '/pages/final-decision',
      },
      {
        title: 'lookups.case-type',
        icon: 'list-outline',
        link: '/pages/case-type',
      },
      {
        title: 'lookups.sama-close-status',
        icon: 'list-outline',
        link: '/pages/sama-close-status',
      },
      {
        title: 'lookups.validity',
        icon: 'list-outline',
        link: '/pages/validity',
      },
      {
        title: 'lookups.caused-by-reason',
        icon: 'list-outline',
        link: '/pages/caused-by-reason',
      },
      {
        title: 'lookups.close-ticket-reason',
        icon: 'list-outline',
        link: '/pages/close-ticket-reason',
      }


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
    title: 'tickets',
    icon: 'file-text-outline',
    children: [
      {
        title: 'list-tickets',
        icon: 'list-outline',
        // icon: 'grid-outline',
        link: '/pages/ticket/list',
      },
      {
        title: 'add-ticket',
        icon: 'file-add-outline',
        link: '/pages/ticket/add',
      },
    ],
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
