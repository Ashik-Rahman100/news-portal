import RootLayout from "@/components/Layouts/RootLayout";
import AllNews from "@/components/UI/AllNews";
// import Banner from "@/components/UI/Banner";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from 'next/dynamic';
import Head from "next/head";

const HomePage = ({ allNews }) => {
  // console.log("All News",allNews);
  const {data} = useGetNewsesQuery();
  // console.log(data);

  const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
    loading: () => <h1>Loading...</h1>,
  })
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Components */}
      <DynamicBanner />
      <AllNews allNews={data} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      allNews: data,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();
//   // console.log(data)
//   return {
//     props: {
//       allNews: data,
//     },
//     revalidate: 10,
//   };
// };
