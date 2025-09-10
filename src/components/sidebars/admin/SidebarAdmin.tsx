import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

interface SidebarAdminProps {
  collapsed: boolean;
}

export const SidebarAdmin = ({ collapsed }: SidebarAdminProps) => {
  return (
    <div style={{ height: '100%', background: '#001529', color: '#fff' }}>
      <div
        style={{
          padding: '16px',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 20,
          color: '#fff',
        }}
      >
        {collapsed ? 'A' : 'Admin'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={[
          {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: 'users',
            icon: <UserOutlined />,
            label: 'Users',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
          },
        ]}
        style={{ border: 'none', background: '#001529' }}
      />
    </div>
  );
};
