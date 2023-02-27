import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Dashboard: React.FC = (props) => {
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

function editNote() {
    navigate('/edit');

}
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<EditOutlined onClick={editNote}/>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name?.last}</a>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default Dashboard;