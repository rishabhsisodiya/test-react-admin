import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Admin/Component/Users";
import { PostCreate, PostEdit, PostList } from "./Admin/Component/Posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from "./Admin/Component/authProvider";
import Dashboard from "./Admin/Component/Dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin  dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    {/* Fetch users from api ~ https://jsonplaceholder.typicode.com/users */}
    {/* ListGuesser dumps data in console. You can check custom methods here*/}
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource name="users" list={UserList} icon={UserIcon}/> 
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  </Admin>
);

export default App;
