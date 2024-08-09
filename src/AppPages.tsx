import { lazy } from "react";

import { Loader } from "./shared/components/Loader";

export const NewsPage = Loader(lazy(() => import("./pages/NewsPage")));
