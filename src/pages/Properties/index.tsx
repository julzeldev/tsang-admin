import Page from '../../components/Page';
import withPrivateRoute from '../../hocs/withPrivateRoute';

const PropertiesPage = () => {
  return <Page title='Properties'>Properties</Page>;
};

const Properties = withPrivateRoute(PropertiesPage);

export default Properties;
