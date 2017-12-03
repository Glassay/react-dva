/**
 * 2017-12-2 Jifeng Cheng
 */

import React from 'react';
import { Table, Popconfirm } from 'antd';
// import default from 'antd/lib/pagination';

// 采用stateless的写法
const UserList = ({
  total,
  current,
  loading,
  dataSource,
}) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="">{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: () => (
      <p>
        <a onClick={() => {}}>编辑</a>
        &nbsp;
        <Popconfirm title="你确定要删除吗?" onConfirm={() => {}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  // 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: () => {},
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loadng={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  );
};
// export default () => <div>user list</div>;
export default UserList;