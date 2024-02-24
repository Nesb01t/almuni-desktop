import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { UserItem } from "@/views/user-list/components/user-item";
import { User } from "@/types/user";
import { Error } from "@/components/error";
import { exportUser } from "@/utils/user/export";

const fetchDataUsers = async () => {
  try {
    const res = await axios.get<User[]>("http://localhost:8080/user/");
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const UserList = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = async () => {
    setLoading(true);
    fetchDataUsers().then(data => {
        setUsers(data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="user-list">
      {/* 加载中 */}
      {loading && (
        <div className="loading loading-bars loading-lg m-auto w-12 h-12"></div>
      )}
      {/* 加载失败 */}
      {(!loading && !users?.length) && (
        <Error refresh={fetch} />
      )}

      {(!loading && users?.length && users.length > 0) &&
        (
          <>
            <div className="user-list__page">
              {users?.map((user, index) => {
                if (index % 2 == 0)
                  return (
                    <div className="user-list__item">
                      <UserItem user={user} key={user.id} />
                    </div>
                  );
              })}
            </div>
            <div className="user-list__page">
              {users?.map((user, index) => {
                if (index % 2 == 1)
                  return (
                    <div className="user-list__item">
                      <UserItem user={user} key={user.id} />
                    </div>
                  );
              })}
            </div>
          </>
        )
      }
    </div>
  );
};