import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import HomeIcon from '@material-ui/icons/HomeOutlined';
var iconsMap = {
    BarChartIcon: BarChartIcon,
    CalendarTodayIcon: CalendarTodayIcon,
    ChatIcon: ChatIcon,
    CodeIcon: CodeIcon,
    DashboardIcon: DashboardIcon,
    ErrorIcon: ErrorIcon,
    FolderIcon: FolderIcon,
    DashboardTwoToneIcon: DashboardTwoToneIcon,
    GradeTwoTone: GradeTwoTone,
    ListAltIcon: ListAltIcon,
    LockOpenIcon: LockOpenIcon,
    MailIcon: MailIcon,
    PresentToAllIcon: PresentToAllIcon,
    PeopleIcon: PeopleIcon,
    PersonIcon: PersonIcon,
    ReceiptIcon: ReceiptIcon,
    SettingsIcon: SettingsIcon,
    ViewModuleIcon: ViewModuleIcon,
    HomeIcon: HomeIcon,
};
let menus = [
        {
            label: "Home",
            icon: "HomeIcon",
            to: "/dashboard"
        },
        {
            label: "Company Management",
            content: [
                {
                    to: "/company",
                    label:"Company"
                },
            ]
        },
        {
            label: "User Management",
            content: [
                {
                    to: "/user",
                    label:"User"
                },
            ]
        },
        {
            label: "Roles Management",
            content: [
                {
                    label: "Roles",
                    description: "Roles Management",
                    to: "/role"
                },
            ]
        },
        {
            label: "Permission Management",
            content: [
                {
                    label: "Persmission",
                    to: "/permission/create"
                },
            ]
        },
        {
            label: "File",
            content: [
                {
                    label: "File",
                    to: "/file/create"
                },
            ]
        }
    ]
export default [
    {
        // label: 'Navigation menu',
        content: JSON.parse(JSON.stringify(menus),
            (key, value) => {
              if (key === 'icon') {
                  return iconsMap[value];
              } else {
                  return value;
              }
            }
        )
    }
];
