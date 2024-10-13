import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import useCart from "../../hooks/useCart";
const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);

  ///handleDelete btn

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      Swal.fire({
        title: "Deleting...",
        text: "Please wait while we process your request.",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
      });

      fetch(`http://localhost:6001/carts/${item._id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          const pollInterval = 1000;
          let attempts = 0;

          const checkDeletion = () => {
            refetch().then(({ data }) => {
              const itemStillExists = data.some(
                (cartItem) => cartItem._id === item._id
              );
              attempts++;

              if (!itemStillExists) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success",
                  confirmButtonColor: "#3085d6", // Set button color for the OK button
                });
              } else if (attempts < 10) {
                setTimeout(checkDeletion, pollInterval);
              } else {
                Swal.fire(
                  "Operation Timeout",
                  "Could not confirm deletion. Please try again.",
                  "warning"
                );
              }
            });
          };

          checkDeletion();
        })
        .catch(() =>
          Swal.fire(
            "Error",
            "An error occurred while sending the delete request.",
            "error"
          )
        );
    });
  };

  console.log("From cartPage", cart);
  return (
    <div className="section-container">
      <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-36 flex flex-col  items-center justify-between gap-8">
          {/* texts */}
          <div className="px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to the <span className="text-green">Food</span>
            </h2>
          </div>
        </div>
      </div>

      <div>
        {/* table for the cart */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      className="btn btn-ghost text-red btn-xs"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* customer details */}
      <div className="my-12">
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium">Customer Details</h3>

          <p>Name:{user.displayName}</p>
          <p>Email:{user.email}</p>
          <p>User_id:{user.displayName}</p>
        </div>
        <div className="md:w-1/2 space-y-3"></div>
      </div>
    </div>
  );
};

export default CartPage;
