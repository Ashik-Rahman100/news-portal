import RootLayout from "@/components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const NewsDetails = ({ news }) => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={news?.image_url}
              width={600}
              height={400}
              responsiveue
              alt="news image"
            ></Image>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{news?.title}</h1>
            <div
              className="line"
              style={{
                height: "5px",
                width: "100%",
                margin: "20px 0px",
                background: "#000",
              }}
            ></div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
                fontSize: "12px",
              }}
            >
              <span>
                <CalendarOutlined />
                {news?.release_date}
              </span>
              <span>
                <CommentOutlined />
                {news?.comment_count}
              </span>
              <span>
                <ProfileOutlined />
                {news?.category}
              </span>
            </p>
            <p style={{ fontSize: "20px" }}>{news.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default NewsDetails;
NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: { newsId: news?.id },
//   }));
//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//   const data = await res.json();
//   return {
//     props: {
//       news: data,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};