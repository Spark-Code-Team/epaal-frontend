import DashboardIcon from "../../public/icons/Admin/DashboardIcon"
import MannageIcon from "../../public/icons/Admin/MannageIcon"
import CateIcon from "../../public/icons/Admin/CateIcon"
import FroshandeIcon from "../../public/icons/Admin/FroshandeIcon"
import FieldIcon from "../../public/icons/Admin/FieldIcon"
import ChartIcon from "../../public/icons/Admin/ChartIcon"
import PeopleIcon from "../../public/icons/Admin/PeopleIcon"
import TransActionIcon from "../../public/icons/Admin/TransActionIcon"


export const mapInput = [
    {
        labelName: "نام",
        inputName: "name"
    },
    {
        labelName: "شماره تماس",
        inputName: "phone"
    },
    {
        labelName: "ایمیل",
        inputName: "email"
    },
    {
        labelName: "جنسیت",
        inputName: "sex"
    },
    {
        labelName: "رمزعبور",
        inputName: "password"
    },
    {
        labelName: "تکرار رمز عبور",
        inputName: "confirmPassword"
    },
]

export const mapInputpaz = [
    {
        labelName: "حوزه فعالیت",
        inputName: "faal"
    },
    {
        labelName: "اسم فروشگاه",
        inputName: "shop"
    },
    {
        labelName: "استان",
        inputName: "ostan"
    },
    {
        labelName: "شهر",
        inputName: "city"
    },
    {
        labelName: "آدرس",
        inputName: "address"
    },
    {
        labelName: "تلفن ثابت",
        inputName: "phone"
    },
]

export const sidebarOptions = [
        {
            title: "داشبورد",
            link: "#",
            icon: <DashboardIcon />,
            children: []
        },
        {
            title: "مدیریت دسته بندی ها",
            link: "#",
            icon: <CateIcon />,
            children: [
                "سطح یک",
                "سطح دو",
                "سطح سه",
                "سطح چهار"
            ]
        },
        {
            title: "مدیریت ارایه دهنده ها",
            link: "#",
            icon: <MannageIcon />,
            children: [
                "اتصال",
                "اطلاعات ارایه دهنده"
            ]
        },
        {
            title: "مدیریت فروشندگان",
            link: "#",
            icon: <FroshandeIcon />,
            children: [
                "فروشندگان",
                "تسویه"
            ]
        },
        {
            title: "تعریف فیلد",
            link: "#",
            icon: <FieldIcon />,
            children: [
                "سطح یک",
                "سطح دو",
                "سطح سه",
            ]
        },
        {
            title: "گزارش ها",
            link: "#",
            icon: <ChartIcon />,
            children: []
        },
        {
            title: "مدریت تراکنش ها",
            link: "#",
            icon: <TransActionIcon />,
            children: []
        },
        {
            title: "مدریت کاربران",
            link: "#",
            icon: <PeopleIcon />,
            children: []
        },
]

