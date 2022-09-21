import React, { useState, useEffect } from 'react';
import { createClient } from 'urql';
import Table from '../../Molecules/Table';
import NoRecord from '../../Molecules/NoRecord';
import { Spinner } from '../../Atom/Spinner';
import { useSelector } from 'react-redux';
const RegisteredUser = () => {
  const chainData = useSelector((state) => state.ChainDataReducer);
  const [loading, setLoding] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { heading: 'S.no', value: 'sNo' },
    { heading: 'User Id', value: 'userId' },
    { heading: 'User Name', value: 'userName' },
    { heading: 'Name', value: 'name' },
  ];
  let rowsData = [];

  const userName = (uname) => (
    <span title={uname}>{uname.slice(0, 8) + '...'}</span>
  );

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

  useEffect(() => {
    fetchHodlData();
  }, []);
  const fetchHodlData = async () => {
    console.log(chainData.subgraphApiUrl);
    const client = createClient({
      url: chainData.subgraphApiUrl,
    });

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
      const data = await client.query(usersQuery).toPromise();

      if (data.data.users) {
        setData(data.data.users);
      }
    } catch (e) {}

    setLoding(false);
  };

  return (
    <div className="mx-5 my-10 flex justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data.length != 0 ? (
            <Table rows={rowsData} columns={columns} />
          ) : (
            <NoRecord />
          )}
        </>
      )}
    </div>
  );
};
export default RegisteredUser;
