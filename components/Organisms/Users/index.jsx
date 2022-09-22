import React, { useState, useEffect } from 'react';
import { createClient } from 'urql';
import Table from '../../Molecules/Table';
import NoRecord from '../../Molecules/NoRecord';
import { Spinner } from '../../Atom/Spinner';
import { useSelector } from 'react-redux';

const userName = (uname) => (
  <span title={uname}>{uname.slice(0, 8) + '...'}</span>
);
const columns = [
  { heading: 'S.no', value: 'sNo' },
  { heading: 'User Id', value: 'userId' },
  { heading: 'User Name', value: 'userName' },
  { heading: 'Name', value: 'name' },
];

const RegisteredUser = () => {
  const chainData = useSelector((state) => state.ChainDataReducer);
  const [loading, setLoding] = useState(false);
  const [data, setData] = useState([]);
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, [chainData.subgraphApiUrl]);

  useEffect(() => {
    calculateRowData();
  }, [data]);

  const fetchUsersData = async () => {
    const usersQuery = `
      query {
      users{
      id
      userId
      name
      username
      }
      }
      `;

    setLoding(true);
    try {
      const client = createClient({
        url: chainData.subgraphApiUrl,
      });
      const data = await client.query(usersQuery).toPromise();

      if (data.data.users) {
        setData(data.data.users);
      }
    } catch (e) {}

    setLoding(false);
  };
  function calculateRowData() {
    let rowsData = [];
    for (let i = 0; i < data.length; i++) {
      const userData = data[i];
      const row = {
        sNo: i + 1,
        userId: userData.userId,
        userName: userName(userData.username),
        name: userData.name,
      };

      rowsData.push(row);
    }
    setRowsData(rowsData);
  }

  return (
    <div className="mx-5 my-10 flex justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data.length != 0 ? (
            <Table rows={rowsData} columns={columns} tableHeight={322} />
          ) : (
            <NoRecord />
          )}
        </>
      )}
    </div>
  );
};
export default RegisteredUser;
