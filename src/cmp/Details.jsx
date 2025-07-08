
import { useEffect, useState } from "react";
import Nav from '../cmp/Nav'
export default function Details() {
    const [rand , setRand]=useState(0);

    useEffect(() => {
    const newRand = Math.floor((Math.random()+1)*10000 );
    setRand(newRand);
    
}, [])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    postal: "",
    frequency: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.postal.trim()) {
      newErrors.postal = "Postal code is required";
    }
    if (!formData.frequency) {
      newErrors.frequency = "Please select a frequency";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      alert("Form submitted: You will get your quote through email ",+{rand} + formData);
    }
  };

  return (
    <div className="bg-[url(bggg.jpg)] bg-cover bg-center bg-no-repeat">
      <Nav/>
      <div className="bg-gray-200 opacity-50 md:w-200 md:mx-auto rounded-md transition-fade flex flex-col text-[#759455] space-y-5 items-center justify-center h-200">
        <p className="text-black font-semibold">Session id:{rand}</p>
        <h1 className="text-3xl font-bold md:text-5xl">Your details</h1>
        <p>we will contact you to give you quote</p>
        <form onSubmit={handleSubmit} className="space-y-3 flex flex-col text-black">
          <div>
            <input
              className={`w-100 py-4 px-3 shadow-xl/30 ${errors.firstName ? 'border-red-500 border' : ''}`}
              placeholder="First Name*"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div>
            <input
              className={`w-100 py-4 px-3 shadow-xl/30 ${errors.lastName ? 'border-red-500 border' : ''}`}
              placeholder="Last Name*"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div>
            <input
              className={`w-100 py-4 px-3 shadow-xl/30 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${errors.phone ? 'border-red-500 border' : ''}`}
              placeholder="Phone*"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <input
              className={`w-100 py-4 px-3 shadow-xl/30 ${errors.email ? 'border-red-500 border' : ''}`}
              placeholder="Email*"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              className={`w-100 py-4 px-3 shadow-xl/30 ${errors.postal ? 'border-red-500 border' : ''}`}
              placeholder="Postal*"
              type="text"
              name="postal"
              value={formData.postal}
              onChange={handleChange}
            />
            {errors.postal && <p className="text-red-500 text-sm">{errors.postal}</p>}
          </div>

          <div className="py-3">
            <p>How often do you want us*</p>
            <div className="space-x-4 flex md:text-xl">
             <div> <input
                type="radio"
                className="w-5 h-4"
                name="frequency"
                value="oneoff"
                onChange={handleChange}
              /> One off</div>
              <div><input
                type="radio"
                className="w-5 h-4"
                name="frequency"
                value="weekly"
                onChange={handleChange}
              /> Weekly</div>
              <div><input
                type="radio"
                className="w-5 h-4"
                name="frequency"
                value="monthly"
                onChange={handleChange}
              /> Monthly</div>
              <div><input
                type="radio"
                className="w-5 h-4"
                name="frequency"
                value="flexible"
                onChange={handleChange}
              /> Flexible</div>
            </div>
            {errors.frequency && <p className="text-red-500 text-sm">{errors.frequency}</p>}
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="rounded-md px-2 py-1.5 bg-[#93C461] text-white text-md transition-all hover:scale-110"
        >
          Get a quote
        </button>
      </div>
    </div>
  );
}

// export default function Details() {
//   return (
//     <div>
//         <div className=" my-8 transition-fade flex flex-col text-[#759455] space-y-5 items-center justify-center h-115">
//              <h1 className="text-3xl font-bold">Your details</h1>
//              <p>we will contact you to give you quote</p>
//              <form className="space-y-3 flex flex-col text-black">
//                 <input className="w-100 py-4 px-3 shadow-xl/30" placeholder="First Name*" type="text" />
//                  <input className="w-100 py-4 px-3 shadow-xl/30" placeholder="Last Name*" type="text" />
//                   <input className="w-100 py-4 px-3 shadow-xl/30 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" placeholder="Phone" type="number" />
//                    <input className="w-100 py-4 px-3 shadow-xl/30" placeholder="Email*" type="email" />
//                     <input className="w-100 py-4 px-3 shadow-xl/30" placeholder="Postal" type="text" />
//                    <div className="py-3 ">
//                     <p>How often do you want us</p>
//                     <input type="radio" name="want" id="" />One off
//                     <input type="radio" name="want" id="" />Weekly
//                     <input type="radio" name="want" id="" />Monthly
//                     <input type="radio" name="want" id="" />Flexible
//                     </div>
//              </form>
//              <button className="rounded-md px-2 py-1.5 bg-[#93C461] text-white text-md transition-all hover:scale-110" > Get a quote</button>
//         </div>
//     </div>
//   )
// }