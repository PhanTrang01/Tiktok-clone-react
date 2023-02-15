import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/upload", component: Upload, layout: null },
];

export const privateRoutes = [];
