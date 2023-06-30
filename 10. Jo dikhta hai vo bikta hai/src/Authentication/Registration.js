import { Form } from "react-router-dom";
import { useFormik } from "formik";

const Registration = () => {
  return (
    <>
      <div className="shadow-2xl absolute top-1/4 left-1/3 right-1/3 p-5 rounded-lg border-blue-600 bg-pink-300">
        <h1 className="text-center text-3xl">Welcome !</h1>
        <p className="text-center text-lg"> To the food villa</p>

        <Form className="">
          {/* for the name in form  */}
          <div >
            <label htmlFor="name" className="block text-start">
              Name : 
            </label>
            <input
              className="block w-full p-1 mr-4 text-start border-sky-500 bg-white border rounded-md"
              type="name"
              autoCapitalize="off"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>

          {/* input field for email */}
          <div className="text-start">
            <label htmlFor="email" className="input-label">
              Email : 
            </label>
            <input
              className="block w-full p-1 mr-4 border-sky-500 bg-white border rounded-md"
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          {/* for password  */}
          <div className="text-start">
            <label htmlFor="email" className="input-label">
              Password : 
            </label>
            <input
              className="block w-full p-1 mr-4 border-sky-500 bg-white border rounded-md"
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          {/* for confirm password password  */}

          <div className="text-start">
            <label htmlFor="email" className="input-label">
              Confirm Password : 
            </label>
            <input
              className="block w-full p-1 mr-4 border-sky-500 bg-white border rounded-md"
              type="password"
              autoComplete="off"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="text-center">
            <button className="m-5 p-1 rounded-md border  bg-blue-400 border-red-400" type="submit">
              Registration
            </button>
          </div>
        </Form>
        <p className="">
          Already have an Account <a className="m-5 p-1 rounded-md border  bg-blue-400 border-red-400" href="#">Sign In now</a>
        </p>
      </div>
    </>
  );
};

export default Registration;
