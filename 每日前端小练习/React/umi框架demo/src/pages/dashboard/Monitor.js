import React, { Component } from "react";
import { Tree, Input, Layout, Table, Tag, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const treeData = [
  {
    title: "研发一部",
    key: "y1",
    children: [
      {
        title: "数据中心",
        key: "sjzx",
        children: [
          {
            title: "一张表",
            key: "yzb",
          },
          {
            title: "个人数据中心",
            key: "grsjzx",
          },
        ],
      },
      {
        title: "数据治理",
        key: "sjzl",
      },
      {
        title: "一表通",
        key: "ybt",
      },
    ],
  },
  {
    title: "研发二部",
    key: "y2",
  },
  {
    title: "研发三部",
    key: "y3",
  },
  {
    title: "研发四部",
    key: "y4",
  },
];

// treeNode的数据包括key title以及children

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { title, key } = node;
    dataList.push({ key, title });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(treeData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

export default class Monitor extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: "",
    autoExpandParent: true,
  };

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onChange = (e) => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    console.log(expandedKeys);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  };

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = (data) =>
      data.map((item) => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span style={{ color: "#f50" }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{item.title}</span>
          );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key,
        };
      });
    const data = [
      {
        key: "1",
        fzr: "李振伟",
        xtmc: "一表通系统",
        fwmc: "一表通-前端",
        fwywmc: "ly-bg-dcp-abi",
        ylfws: "7",
        yldk: "15091",
      },
    ];
    const columns = [
      {
        title: "负责人",
        dataIndex: "fzr",
        key: "fzr",
      },
      {
        title: "系统名称",
        dataIndex: "xtmc",
        key: "xtmc",
      },
      {
        title: "服务名称",
        dataIndex: "fwmc",
        key: "fwmc",
      },
      {
        title: "服务英文名称",
        dataIndex: "fwywmc",
        key: "fwywmc",
      },
      {
        title: "依赖服务数",
        dataIndex: "ylfws",
        key: "ylfws",
      },
      {
        title: "依赖端口",
        dataIndex: "yldk",
        key: "yldk",
      },
    ];
    return (
      <div>
        <Layout>
          <Sider
            style={{
              backgroundColor: "#fff",
              height: document.body.clientHeight - 100,
              marginRight: 16,
            }}
          >
            {" "}
            <Search
              style={{ marginBottom: 8 }}
              placeholder="Search"
              onChange={this.onChange}
            />
            <Tree
              onExpand={this.onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              treeData={loop(treeData)}
            />
          </Sider>
          <Layout>
            <Content>
              <Header style={{ marginBottom: 16, backgroundColor: "#fff" }}>
                Header
              </Header>
              <div style={{ padding: 16 ,backgroundColor:"#fff"}}>
                <Table columns={columns} dataSource={data} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
