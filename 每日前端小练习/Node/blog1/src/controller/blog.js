const { exec } = require("../db/mysql");
const getList = (author, keyword) => {
  // // 先返回假数据
  // return [
  //   {
  //     id: 1,
  //     title: "标题A",
  //     content: "内容A",
  //     createTime: 1610085450380,
  //     author: "zhang",
  //   },
  //   {
  //     id: 2,
  //     title: "标题B",
  //     content: "内容B",
  //     createTime: 1610085450380,
  //     author: "lisi",
  //   },
  // ];
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}'`;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }
  sql += `order by createtime desc`;

  // 返回promise
  return exec(sql);
};

const getDetail = (id) => {
  let sql = `select * from blogs where id='${id}'`;
  return exec(sql).then(rows=> {
    return rows[0]
  })
};

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含title content属性
  return {
    id: 3,
  };
};

const updateBlog = (id, blogData = {}) => {
  console.log("update blog", id, blogData);
  return true;
};

const deleteBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
};
