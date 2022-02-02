import React, { useState, useEffect } from "react";
import User from "./User";
import { getUsers } from "./API";
import styled from "styled-components";


const Content = styled.div`
background: green;
height: 300px;
overflow: scroll;
`

function InfiniteScrollComponentTwo(props: IInfiniteScrollComponentProps) {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScroll = (event: any) => {
      const {scrollTop, clientHeight, scrollHeight} = event.target;
       console.log("Scrolltop", scrollTop);
        console.log("clientHeight", clientHeight);
        console.log("scrollHeight", scrollHeight); 
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            console.log('done scrolling');
            setPage(prevPage => prevPage + 1);
        }

  }
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      //@ts-ignore
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };
    loadUsers();
  }, [page]);

  return (
    <Content onScroll={handleScroll}>
      {users &&
        users.map((user: any) => {
          return <User key={user.cell} user={user} />;
        })}
      hello?
      {loading && <div>Loading...</div>}
    </Content>
  );
}

interface IInfiniteScrollComponentProps {
  handleExit: (page: string) => void;
}

export default InfiniteScrollComponentTwo;
