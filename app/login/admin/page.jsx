import React from "react";
// components
import Container from "@/components/Layout/Container";
import AdminLogin from "./components/LoginForm";

const AdminPanel = async () => {
  const auth = true;

  // if (user.password && user.username !== password && username) not logined
  return (
    <div className="h-screen w-full bg-white dark:bg-black">
      <Container>
        <AdminLogin />
      </Container>
    </div>
  );
};

export default AdminPanel;
