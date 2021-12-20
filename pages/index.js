import Layout from '../components/Layout';



const Index = () => (
    <Layout>
        <h1>
            안녕, Next.js
        </h1>
    </Layout>
    
);

const Search = props => (
    <div>
      <Link href={`/Search?keyword=${props.name}`}>
        <a>Go to {props.name}'s profile</a>
      </Link>
    </div>
  );


export default Index;