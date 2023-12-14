// component
import SvgColor from '../../../components/svg-color';
// import Iconify from '../../../components/iconify';
// import Iconify from 'src/components/iconify/Iconify';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('user'),
  },
  {
    title: 'computers',
    path: '/dashboard/computers',
    icon: icon('computer1'),
  },
  {
    title: 'monitors',
    path: '/dashboard/monitors',
    icon: icon('monitor'),
  },
  {
    title: 'softwares',
    path: '/dashboard/softwares',
    icon: icon('software'),
  },
  {
    title: 'networkdevices',
    path: '/dashboard/networkdevices',
    icon: icon('networkdevices'),
  },
  {
    title: 'devices',
    path: '/dashboard/devices',
    icon: icon('devices'),
  },
  {
    title: 'printers',
    path: '/dashboard/printers',
    icon: icon('printer'),
  },
  {
    title: 'catridges',
    path: '/dashboard/catridges',
    icon: icon('catridge'),
  },
  {
    title: 'consumables',
    path: '/dashboard/consumables',
    icon: icon('consumable'),
  },
  {
    title: 'phones',
    path: '/dashboard/phones',
    icon: icon('phones'),
  },
  {
    title: 'racks',
    path: '/dashboard/racks',
    icon: icon('rack'),
  },
  {
    title: 'enclosures',
    path: '/dashboard/enclosures',
    icon: icon('ic_user'),
  },
  {
    title: 'pdus',
    path: '/dashboard/pdus',
    icon: icon('pdu'),
  },
  {
    title: 'passivedevices',
    path: '/dashboard/passivedevices',
    icon: icon('passivedevices'),
  },
  {
    title: 'unmanageddevices',
    path: '/dashboard/unmanageddevices',
    icon: icon('unmanaged'),
  },
  {
    title: 'cables',
    path: '/dashboard/cables',
    icon: icon('cable'),
  },
  {
    title: 'simcards',
    path: '/dashboard/simcards',
    icon: icon('simcard'),
  },
  {
    title: 'globals',
    path: '/dashboard/globals',
    icon: icon('globals'),
  },
  {
    title: 'assets',
    path: '/dashboard/assets',
    icon: icon('ic_user'),
    children:[
      {
        title: 'computers',
        path: '/dashboard/computers',
        icon: icon('laptop'),
      },
      {
        title: 'monitors',
        path: '/dashboard/monitors',
        icon: icon('monitor'),
      },
      {
        title: 'softwares',
        path: '/dashboard/softwares',
        icon: icon('ic_user'),
      },
      {
        title: 'networkdevices',
        path: '/dashboard/networkdevices',
        icon: icon('networkdevices'),
      },
      {
        title: 'devices',
        path: '/dashboard/devices',
        icon: icon('ic_user'),
      },
      {
        title: 'printers',
        path: '/dashboard/printers',
        icon: icon('printer'),
      },
      {
        title: 'catridges',
        path: '/dashboard/catridges',
        icon: icon('ic_user'),
      },
      {
        title: 'consumables',
        path: '/dashboard/consumables',
        icon: icon('ic_user'),
      },
      {
        title: 'phones',
        path: '/dashboard/phones',
        icon: icon('phone'),
      },
      {
        title: 'racks',
        path: '/dashboard/racks',
        icon: icon('ic_user'),
      },
      {
        title: 'enclosures',
        path: '/dashboard/enclosures',
        icon: icon('ic_user'),
      },
      {
        title: 'pdus',
        path: '/dashboard/pdus',
        icon: icon('pdu'),
      },
      {
        title: 'passivedevices',
        path: '/dashboard/passivedevices',
        icon: icon('ic_user'),
      },
      {
        title: 'unmanageddevices',
        path: '/dashboard/unmanageddevices',
        icon: icon('ic_user'),
      },
      {
        title: 'cables',
        path: '/dashboard/cables',
        icon: icon('ic_user'),
      },
      {
        title: 'simcards',
        path: '/dashboard/simcards',
        icon: icon('simcard'),
      },
      {
        title: 'globals',
        path: '/dashboard/globals',
        icon: icon('ic_user'),
      },
    ],
  },
  {
    title: 'tickets',
    path: '/dashboard/ticket',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
