'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useArticle } from "./context";
import { domain } from "@/lib/domain";

import { DialogDemo } from "./dailog";

const ArticleContent: React.FC = () => {
    const { refreshArticles, articles, deleteArticle } = useArticle();

    useEffect(() => {
        refreshArticles();
        console.log(articles); // Add this line
    }, []);

    return (
        <>
            <DialogDemo />
            <div className="flex justify-start">
            </div>
            <div className="flex flex-col gap-12 pt-6 space-y-10" dir="rtl">
                {articles.map((article) => {
                    const updatedAt = new Date(article.updatedAt);
                    const formattedDate = `${updatedAt.getDate()}/${updatedAt.getMonth() + 1}/${updatedAt.getFullYear()}`;

                    return (
                        <div key={article._id}>
                            <Link href={`/article/${article._id}`}>
                                <div className="flex gap-8">
                                    <Image
                                        src={article.image || '/hero/history.webp'}
                                        alt={article.title}
                                        width={180}
                                        height={150}
                                        className="object-cover object-center w-44 h-36"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <h4>{article.title}</h4>
                                        <p>{article.desc}</p>
                                        <div className="flex gap-4">
                                            <p>
                                                {article.author}
                                                <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
                                                {formattedDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={() => article._id && deleteArticle(article._id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ArticleContent;
