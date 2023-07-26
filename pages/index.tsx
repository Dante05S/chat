import PageProvider from 'context/PageContext/PageProvider';
import HomeView from 'views/HomeView';

export default function Home(): React.JSX.Element {
  return (
    <PageProvider description="Pagina principal registro">
      <HomeView />
    </PageProvider>
  );
}
