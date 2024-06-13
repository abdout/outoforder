const hamburger = [
  {
    title: "الدخول",
    path: "/login",
    icon: "ph:sign-in",
  },

  {
    title: "التسجيل",
    path: "/join",
    icon: "iconamoon:profile-light",
  },

  {
    title: "المنصة",
    path: "/home",
    icon: "radix-icons:commit",
    submenu: true,
    submenuItems: [
      {
        title: "Roadmap",
        path: "/",
      },

      {
        title: "Block",
        path: "/",
      },
    ],
  },

  {
    title: "الاتصال",
    path: "/",
    icon: "fluent:mail-16-regular",
  },
];

export default hamburger