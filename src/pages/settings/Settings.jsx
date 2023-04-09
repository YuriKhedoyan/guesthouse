import { useParams } from 'react-router-dom';

function Settings() {
  const { id } = useParams();

  // use the `id` parameter in your component
  return <div>Product {id} detail page</div>;
}

export default Settings;