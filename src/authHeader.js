export default function AuthHeader() {
    const authUser = JSON.parse(localStorage.getItem("token"));
    if (authUser) {
      return { Authorization: `Bearer ${authUser}` };
    } else {
      return {};
    }
  }