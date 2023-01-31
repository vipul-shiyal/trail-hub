import Home from './pages/Home';
import Details from './pages/Details';
import AddWatchList from './pages/AddWatchList';
import NotFound from './pages/NotFound';

export const routersPath = [
    { path: '/', component: Home, exact: true },
    { path: '/details', component: Details, exact: true },
    { path: '/watch-list', component: AddWatchList, exact: true },
    { path: '/not-found', component: NotFound, exact: true }
];
