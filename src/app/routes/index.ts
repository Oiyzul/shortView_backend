import { Router } from "express";
import { postRoutes } from "../modules/post/post.route";

const router = Router();

const routes = [
  {
    path: "/posts",
    route: postRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
