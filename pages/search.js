import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();
        console.log(router);    
    return (
    <Layout>
      <p>Hello, my name is {router.query.keyword}. I use next.js</p>
    </Layout>
  );
}

export default Search;
