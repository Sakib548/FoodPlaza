const Profile = ({ user }) => {
  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn  drawer-button
        btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user.photoURL ? (
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            ) : (
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            )}
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Order</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
