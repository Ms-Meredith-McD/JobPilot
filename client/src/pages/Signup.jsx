
  export default function Signup(){
  
  return (
    <>
        <form className="signUpForm">
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
    </>
  );
}





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
  