const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1610085450380,
      author: "zhang",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1610085450380,
      author: "lisi",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1610085450380,
    author: "zhang",
  }
}

module.exports = {
  getList,
  getDetail
};
