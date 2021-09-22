import Icon from "@mui/icons-material/AccessAlarms";

//All orders when clicked on Orders from Dashboard
export const allOrders = [
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "new",
  },
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "active",
  },
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "late",
  },
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "delivered",
  },
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "completed",
  },
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    dueOn: "August 12, 2021",
    postedOn: "August 7,2021",
    status: "cancelled",
  },
];

export const availableBalance = 40;

export const purchaseHistory = [
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 8,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 9,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 10,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 11,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
];

//---------------------------------------

//Userdashboard->settings->notifications

export let mobileNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:false,
    },
    {
        content:"Order Updates",
        permission:false,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]
 
export let desktopNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:true,
    },
    {
        content:"Order Updates",
        permission:true,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]

export let emailNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:true,
    },
    {
        content:"Order Updates",
        permission:true,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]

//---------------------------------------

export const dashboardNotificationsData = [
  {
    notificationId: "P455558S",
    content: "Payment method added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
  },
  {
    notificationId: "P455548S",
    content: "Mobile number added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
    },
  {
    notificationId: "P455548S",
    content: "Mobile number added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
    },
];
