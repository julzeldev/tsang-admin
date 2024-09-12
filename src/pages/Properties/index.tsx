import Page from '../../components/Page';
import withPrivateRoute from '../../hocs/withPrivateRoute';
import PropertiesTabs from './PropertiesTabs';

const PropertiesPage = () => {
  return (
    <Page title='Properties'>
      <PropertiesTabs />
    </Page>
  );
};

const Properties = withPrivateRoute(PropertiesPage);

export default Properties;
