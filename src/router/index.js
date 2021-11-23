import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Skill from "../components/Skill.vue";
import Service from "../components/Service.vue";
import Project from "../components/Project.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/header",
    name: "Header",
    component: Header,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
