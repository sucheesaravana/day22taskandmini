function Ternary() {
  const isLoggedOut = true;

  return (
    <button>
      {isLoggedOut ? "Sign Up" : "Profile"}
    </button>
  );
}
export default Ternary