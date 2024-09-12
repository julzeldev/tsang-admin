import Page from '../../components/Page';
import withPrivateRoute from '../../hocs/withPrivateRoute';

const ClientsPage = () => {
  return <Page title='Clients'>Clients</Page>;
};

const Clients = withPrivateRoute(ClientsPage);

export default Clients;
