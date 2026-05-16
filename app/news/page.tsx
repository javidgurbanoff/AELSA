"use client";

import React from "react";
import Navbar from "@/components/navbar";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorImage?: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "This Openclaw agent manages my Google Ads",
    description:
      "15 skills. One intent map. The Google Ads operator I built with OpenClaw. Free.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,fit=scale-down,onerror=redirect/uploads/asset/file/85dc5cfc-bc0c-4742-b4b5-4918e82ef083/beat-google-ai.jpg",
    date: "Mar 17, 2026",
    readTime: "14 min read",
    author: "Matthew Berman",
    authorImage:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=256,fit=scale-down,onerror=redirect/uploads/user/profile_picture/bea3b290-3028-4c34-89a0-1e9b708651dd/matthew-berman-880.jpg",
  },
  {
    id: 2,
    title: "This Openclaw agent manages my Google Ads",
    description:
      "15 skills. One intent map. The Google Ads operator I built with OpenClaw. Free.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,fit=scale-down,onerror=redirect/uploads/asset/file/7263643d-6fcc-4d61-ac36-866f81083d38/100x-views.jpg",
    date: "Mar 17, 2026",
    readTime: "14 min read",
    author: "Matthew Berman",
    authorImage:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=256,fit=scale-down,onerror=redirect/uploads/user/profile_picture/bea3b290-3028-4c34-89a0-1e9b708651dd/matthew-berman-880.jpg",
  },
  {
    id: 3,
    title: "This Openclaw agent manages my Google Ads",
    description:
      "15 skills. One intent map. The Google Ads operator I built with OpenClaw. Free.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,fit=scale-down,onerror=redirect/uploads/asset/file/b241817c-86d1-4df6-82d1-c51203aa673d/cancel-seo-tools.jpg",
    date: "Mar 17, 2026",
    readTime: "14 min read",
    author: "Matthew Berman",
    authorImage:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=256,fit=scale-down,onerror=redirect/uploads/user/profile_picture/bea3b290-3028-4c34-89a0-1e9b708651dd/matthew-berman-880.jpg",
  },
  {
    id: 4,
    title: "This Openclaw agent manages my Google Ads",
    description:
      "15 skills. One intent map. The Google Ads operator I built with OpenClaw. Free.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,fit=scale-down,onerror=redirect/uploads/asset/file/e646122a-191f-4cc6-abbe-e28ce06c7407/rip-ads.jpg",
    date: "Mar 17, 2026",
    readTime: "14 min read",
    author: "Matthew Berman",
    authorImage:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=256,fit=scale-down,onerror=redirect/uploads/user/profile_picture/bea3b290-3028-4c34-89a0-1e9b708651dd/matthew-berman-880.jpg",
  },
  {
    id: 5,
    title: "This Openclaw agent manages my Google Ads",
    description:
      "15 skills. One intent map. The Google Ads operator I built with OpenClaw. Free.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,fit=scale-down,onerror=redirect/uploads/asset/file/e646122a-191f-4cc6-abbe-e28ce06c7407/rip-ads.jpg",
    date: "Mar 17, 2026",
    readTime: "14 min read",
    author: "Matthew Berman",
    authorImage:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=256,fit=scale-down,onerror=redirect/uploads/user/profile_picture/bea3b290-3028-4c34-89a0-1e9b708651dd/matthew-berman-880.jpg",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-[#0A2540]">
      <Navbar />

      <div className="pt-24 my-6 mx-6">
        <h2 className="text-[#fff] text-[40px]  pl-3 my-2">Articles</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#0A2540] rounded-xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img src={article.image} className="w-full object-cover" />

              <div className="p-4">
                <p className="text-sm text-gray-400">
                  {article.date} • {article.readTime}
                </p>

                <h2 className="text-[19px] font-bold text-white mt-2">
                  {article.title}
                </h2>

                <p className="text-gray-300 mt-2">{article.description}</p>

                <div className="flex items-center mt-4 gap-2">
                  <img
                    src={article.authorImage}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-400">
                    {article.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center">
          <button className="px-8 py-3 mt-4 rounded-full border cursor-pointer border-white/25 hover:bg-white/10 text-white transition">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
