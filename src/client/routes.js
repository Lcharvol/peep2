import { compose, find, prop, reduce, toPairs } from 'ramda';
import Login from './components/Login';
import Companies from './components/Companies';
import People from './components/People';
import Agenda from './components/Agenda';
import Notes from './components/Notes';
import AddCompany from './components/Companies/Add';
import AddAgenda from './components/Agenda/Add';
import PersonView from './components/People/View';
import CompanyView from './components/Companies/View';
import EditCompany from './components/Companies/Edit';
import EditPerson from './components/People/Edit';
import EditNote from './components/Notes/Edit';

const routes = {
  home: {
    path: '/',
    component: Companies,
    exact: true,
    auth: true,
  },
  companies: {
    path: '/companies',
    component: Companies,
    default: true,
    exact: true,
    auth: true,
  },
  addCompany: {
    path: '/companies/add',
    component: AddCompany,
    exact: true,
    auth: true,
  },
  company: {
    path: '/companies/:id',
    component: CompanyView,
    exact: false,
    auth: true,
  },
  people: {
    path: '/people',
    exact: true,
    auth: true,
    component: People,
  },
  person: {
    path: '/people/:id',
    component: PersonView,
    exact: false,
    auth: true,
  },
  editPerson: {
    path: '/person/edit/:id',
    component: EditPerson,
    exact: false,
    auth: true,
  },
  editCompany: {
    path: '/company/edit/:id',
    component: EditCompany,
    exact: false,
    auth: true,
  },
  agenda: {
    path: '/agenda',
    exact: true,
    auth: true,
    component: Agenda,
  },
  addAgendaEvent: {
    path: '/agenda/addevent',
    exact: true,
    auth: true,
    component: AddAgenda,
  },
  notes: {
    path: '/notes',
    exact: true,
    auth: true,
    component: Notes,
  },
  editNote: {
    path: '/note/edit/:id',
    exact: false,
    auth: true,
    component: EditNote,
  },
  login: {
    path: '/login',
    exact: true,
    component: Login,
  },
};

const exportedRoutes = compose(
  reduce((acc, [name, r]) => [...acc, { ...r, name }], []),
  toPairs,
)(routes);
export const defaultRoute = find(prop('default'), exportedRoutes);
export const getRouteByName = name => routes[name];
export const getRouteByPath = path =>
  find(r => r.path === path, exportedRoutes);
export const getPathByName = (name, param) => {
  const path = prop('path', getRouteByName(name));
  return param ? `${path.replace(':id', param)}` : path;
};
export default exportedRoutes;
