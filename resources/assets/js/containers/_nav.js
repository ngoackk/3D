export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Thông tin',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Hoạt động',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Tài chính',
      url: '/base',
      icon: 'icon-puzzle',
      
    },
    {
      name: 'Lịch biểu',
      url: '/buttons',
      icon: 'icon-cursor',
       
    }, 
    {
      title: true,
      name: 'Tải khoản',     
    },
    {
      name: 'Login',
      url: '/pages/login',
      icon: 'icon-star'
    },
    {
      name: 'Register',
      url: '/pages/register',
      icon: 'icon-star'
    },
    {
      name: 'Error 404',
      url: '/pages/404',
      icon: 'icon-star'
    },
    {
      name: 'Error 500',
      url: '/pages/500',
      icon: 'icon-star'
    }
    
  ]
}
