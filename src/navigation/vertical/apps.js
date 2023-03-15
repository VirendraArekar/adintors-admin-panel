// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'email',
    title: 'All Influencer',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  {
    id: 'chat',
    title: 'All Companies',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
    title: 'Post',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Add Zone',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'kanban',
    title: 'Banner',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/kanban'
  },
  {
    id: 'invoiceApp',
    title: 'All Oder',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'Pending',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Complete',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Ongoing',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Cancel',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }

{
        id: 'invoiceAdd',
        title: 'Disputed',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },

  {
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Shield size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Roles',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Permissions',
        icon: <Circle size={12} />,
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    id: 'eCommerce',
    title: 'Wallet',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'shop',
        title: 'Transaction',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/shop'
      },
      
    ]
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      }
    ]
  }
]
