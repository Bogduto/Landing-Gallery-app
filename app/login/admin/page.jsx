import React from "react";
import AdminLogin from "@/components/Login/Admin/Form";
import Container from "@/components/Layout/Container/Container";
import Carts from "@/components/Login/Admin/Carts/Carts";

const getAll = async () => {
  try {
    const carts = await fetch(`http://localhost:3000/api/approval/getAll`, {
      method: "GET",
      cache: "no-cache",
    });
    const cartsJson = await carts.json();
    return cartsJson;
  } catch (error) {
    throw new Error(error);
  }
};

const AdminPanel = async () => {
  const auth = false;

  // if (user.password && user.username !== password && username) not logined
  if (auth) {
    const data = await getAll();
    return (
      <div className="py-[40px] w-full minH-screen bg-white dark:bg-black">
        <Carts data={data.carts} />
      </div>
    );
  } else {
    return (
      <div className="h-screen w-full bg-white dark:bg-black">
        <Container>
          <AdminLogin />
        </Container>
      </div>
    );
  }

  // else fast refresh and show panel
};

export default AdminPanel;
