import Page from '../../components/Page';
import withPrivateRoute from '../../hocs/withPrivateRoute';

const DashboardPage = () => {
  return <Page title='Dashboard'>dashboard</Page>;
};

const Dashboard = withPrivateRoute(DashboardPage);

export default Dashboard;
