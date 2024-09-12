import withPrivateRoute from '../../hocs/withPrivateRoute';

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

const Users = withPrivateRoute(UsersPage);

export default Users;
