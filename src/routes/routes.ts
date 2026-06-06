import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => React.JSX.Element


interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout */ "../01-lazyload/layout/LazyLayout"))

export const routes:Route[] = [
    {
        to: '/lazyLayout/',
        path: '/lazyLayout/*',
        Component: LazyLayout,
        name: 'LazyLayout - DashBoard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]