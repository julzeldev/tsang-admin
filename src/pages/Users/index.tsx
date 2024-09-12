import Page from '../../components/Page';
import withPrivateRoute from '../../hocs/withPrivateRoute';

const UsersPage = () => {
  return <Page title='Users'>Users</Page>;
};

const Users = withPrivateRoute(UsersPage);

export default Users;
