import { Breadcrumb, Layout, Avatar, theme } from 'antd';
import type { MenuProps } from 'antd';
import "./topbar.css"
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Header, Content, Sider } = Layout;


const Topbar = () => {
    return <div className="header ">
        <Header >
            <span className="text">Notes</span>
            {/* <Avatar className='avatar' src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg" /> */}
        </Header>
    </div>
}
export default Topbar