import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import React from 'react';
import '@/style/home.css';
import { Card, Col, Row } from "antd";

export default function Home() {
  // 获取文件
  const posts = getAllPosts();

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-[80px] font-semibold gradient-text ">
          Hello Simon!
        </h1>
        <div className="text-[30px] font-medium text-blue-300 mt-4 gradient-text">
          这是快速了解我的小站点哦
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-1/3">
        <h2 className="text-[50px] font-semibold text-blue-500 mb-6">
          我的作品集
        </h2>
        <div className="">
          <Row gutter={60}>
            <Col span={30}>
              <Card title="校园智能平台" bordered={false} hoverable
                style={{
                  width: 240,
                }}>
                Card content
              </Card>
            </Col>
            <Col span={30}>
              <Card title="星语桥——多功能儿童绘本app" bordered={false} hoverable
                style={{
                  width: 240,
                }}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-[50px] font-semibold text-blue-500">
          我的博客集
        </h2>
        <div className="">
          {posts.map((post) => {
            return (
              // <li key={post.slug}>
              //   <Link href={`posts/${post.slug}`}>{post.data.title}</Link>
              //   <p>{post.data.date}</p>
              // </li>
              <Card key={post.slug} title={post.data.title} hoverable
                onTabChange
                style={{
                  width: 1000,
                  marginTop: 50,
                }}>
                {post.data.date ? post.data.date : 'No content available'}
              </Card>
            );
          })}
        </div>
      </div>

    </div>
  );
}
