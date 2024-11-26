import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "src/posts");

export const getAllPosts = () => {
    // 使用 readdirSync 读取目录内容，获取文件列表
    const fileNames = fs.readdirSync(postDir);

    return fileNames.map((fileName) => {

        // 去除 .md 后缀作为路由参数
        const slug = fileName.replace(/\.md$/, "");

        // 组合文件根路径作为完整路径
        const filePath = path.join(postDir, fileName);

        const fileContents = fs.readFileSync(filePath, "utf8");

        const { content, data } = matter(fileContents);
        
        return {
            slug,
            content,
            data
        };
    })
};
