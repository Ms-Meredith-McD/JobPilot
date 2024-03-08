import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Create Account</button>
      <div className={isModalOpen ? "modal-position" : ""}>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form>
           <div className='form-center'>
           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Name</label>
             <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
          </div>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
          </div>
        </form>
        </Modal>
      </div>
    </>
  );
}

export default Signup;




// function Signup() {
//     return (
//       <>
//         <form>
//           <div className='form-center'>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               aria-describedby="emailHelp"
//               placeholder="Enter Name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <div className="form-group form-check">
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Create Account
//           </button>
//           </div>
//         </form>
//       </>
//     );
//   }
  
//   export default Signup;
  