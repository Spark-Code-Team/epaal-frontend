import DashboardIcon from "../../public/icons/Admin/DashboardIcon";
import MannageIcon from "../../public/icons/Admin/MannageIcon";
import CateIcon from "../../public/icons/Admin/CateIcon";
import FroshandeIcon from "../../public/icons/Admin/FroshandeIcon";
import FieldIcon from "../../public/icons/Admin/FieldIcon";
import ChartIcon from "../../public/icons/Admin/ChartIcon";
import PeopleIcon from "../../public/icons/Admin/PeopleIcon";
import TransActionIcon from "../../public/icons/Admin/TransActionIcon";

export const mapInput = [
  {
    labelName: "نام",
    inputName: "name",
  },
  {
    labelName: "شماره تماس",
    inputName: "phone",
  },
  {
    labelName: "ایمیل",
    inputName: "email",
  },
  {
    labelName: "جنسیت",
    inputName: "sex",
  },
  {
    labelName: "رمزعبور",
    inputName: "password",
  },
  {
    labelName: "تکرار رمز عبور",
    inputName: "confirmPassword",
  },
];

export const mapInputpaz = [
  {
    labelName: "حوزه فعالیت",
    inputName: "faal",
  },
  {
    labelName: "اسم فروشگاه",
    inputName: "shop",
  },
  {
    labelName: "استان",
    inputName: "ostan",
  },
  {
    labelName: "شهر",
    inputName: "city",
  },
  {
    labelName: "آدرس",
    inputName: "address",
  },
  {
    labelName: "تلفن ثابت",
    inputName: "phone",
  },
];

export const sidebarOptions = [
  // {
  //   title: "داشبورد",
  //   link: "#",
  //   icon: <DashboardIcon />,
  //   children: [],
  // },
  {
    title: "تایید مدارک",
    link: "/admin/confirm-users-clues",
    icon: "",
    children: [],
  },
  {
    title: "مدیریت دسته بندی ها",
    link: "",
    icon: <CateIcon />,
    children: [
      {
        title: "سطح یک",
        link: "/admin/categories/level-one",
      },
      {
        title: "سطح دو",
        link: "/admin/categories/create-level-tow",
      },
      {
        title: "سطح سه",
        link: "/admin/categories/create-level-three",
      },
      {
        title: "سطح چهار",
        link: "/admin/categories/create-level-four",
      },
    ],
  },
  // {
  //   title: "مدیریت ارایه دهنده ها",
  //   link: "#",
  //   icon: <MannageIcon />,
  //   children: [
  //     {
  //       title: "اتصال",
  //       link: "/admin/providers",
  //     },
  //     {
  //       title: "اطلاعات ارایه دهنده",
  //       link: "/admin/sellers",
  //     },
  //   ],
  // },
  {
    title: "مدیریت فروشندگان",
    link: "#",
    icon: <FroshandeIcon />,
    children: [
      {
        title: "فروشندگان",
        link: "/admin/sellers",
      },
      {
        title: "تسویه",
        link: "/admin/settlement-seller",
      },
    ],
  },
  {
    title: "تعریف فیلد",
    link: "#",
    icon: <FieldIcon />,
    children: [
      {
        title: "سطح دو",
        link: "/admin/field-management/level-tow",
      },
      {
        title: "سطح سه",
        link: "/admin/field-management/level-three",
      },
      {
        title: "سطح چهار",
        link: "/admin/field-management/level-four",
      },
    ],
  },
  {
    title: "گزارش ها",
    link: "#",
    icon: <ChartIcon />,
    children: [],
  },
  {
    title: "مدریت تراکنش ها",
    link: "#",
    icon: <TransActionIcon />,
    children: [],
  },

  {
    title: "مدریت کاربران",
    link: "#",
    icon: <PeopleIcon />,
    children: [],
  },
];

export const userPanelSidebarOptions = [
  {
    title: "داشبورد",
    link: "#",
    icon: <DashboardIcon />,
    children: [],
  },
  {
    title: "مدیریت دسته بندی ها",
    link: "",
    icon: <CateIcon />,
    children: [
      {
        title: "سطح یک",
        link: "/admin/categories/level-one",
      },
      {
        title: "سطح دو",
        link: "/admin/categories/create-level-tow",
      },
      {
        title: "سطح سه",
        link: "/admin/categories/create-level-three",
      },
      {
        title: "سطح چهار",
        link: "/admin/categories/create-level-four",
      },
    ],
  },
  {
    title: "مدیریت ارایه دهنده ها",
    link: "#",
    icon: <MannageIcon />,
    children: [
      {
        title: "اتصال",
        link: "/admin/providers",
      },
      {
        title: "اطلاعات ارایه دهنده",
        link: "/admin/sellers",
      },
    ],
  },
  {
    title: "مدیریت فروشندگان",
    link: "#",
    icon: <FroshandeIcon />,
    children: [
      {
        title: "فروشندگان",
        link: "/admin/sellers",
      },
      {
        title: "تسویه",
        link: "/admin/settlement-seller",
      },
    ],
  },
  {
    title: "تعریف فیلد",
    link: "#",
    icon: <FieldIcon />,
    children: [
      {
        title: "سطح دو",
        link: "/admin/field-management/level-tow",
      },
      {
        title: "سطح سه",
        link: "/admin/field-management/level-three",
      },
      {
        title: "سطح چهار",
        link: "/admin/field-management/level-four",
      },
    ],
  },
  {
    title: "گزارش ها",
    link: "#",
    icon: <ChartIcon />,
    children: [],
  },
  {
    title: "مدریت تراکنش ها",
    link: "#",
    icon: <TransActionIcon />,
    children: [],
  },
  {
    title: "مدریت کاربران",
    link: "#",
    icon: <PeopleIcon />,
    children: [],
  },
];

export const ShopSidebar = [
  {
    title: "داشبورد",
    link: "#",
    icon: <DashboardIcon />,
    children: [],
  },
  {
    title: "مدیریت سفارشات ها",
    link: "",
    icon: <CateIcon />,
    children: [
      {
        title: "سطح یک",
        link: "/admin/categories/level-one",
      },
      {
        title: "سطح دو",
        link: "/admin/categories/create-level-tow",
      },
      {
        title: "سطح سه",
        link: "/admin/categories/create-level-three",
      },
      {
        title: "سطح چهار",
        link: "/admin/categories/create-level-four",
      },
    ],
  },

  {
    title: "مدیریت سفارشات ها",
    link: "#",
    icon: <MannageIcon />,
    children: [
      {
        title: "اتصال",
        link: "/admin/providers",
      },
      {
        title: "اطلاعات ارایه دهنده",
        link: "/admin/sellers",
      },
    ],
  },

  {
    title: "مدیریت فروشندگان",
    link: "#",
    icon: <FroshandeIcon />,
    children: [
      {
        title: "فروشندگان",
        link: "/admin/sellers",
      },
      {
        title: "تسویه",
        link: "/admin/settlement-seller",
      },
    ],
  },

  {
    title: "گزارش ها",
    link: "#",
    icon: <ChartIcon />,
    children: [],
  },
  {
    title: "مدریت تخفیف ها",
    link: "#",
    icon: <TransActionIcon />,
    children: [],
  },
  {
    title: "مدریت کاربران",
    link: "#",
    icon: <PeopleIcon />,
    children: [],
  },
];
