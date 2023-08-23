import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  // console.log(allNews);
  const { Meta } = Card;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHT
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews?.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="news image"
                ></Image>
              }
            >
              <Meta title={news?.title} />
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
              <p style={{ fontSize: "15px" }}>
                {news?.description.length > 100
                  ? news?.description.slice(0, 70) + "..."
                  : news.description}
              </p>
              <Link href={`/news/${news?.id}`}>
                <button
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllNews;
