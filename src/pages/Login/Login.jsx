import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const purple = "#856df2";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const next = {};

    if (!values.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }

    if (!values.password) {
      next.password = "Password is required.";
    } else if (values.password.length < 4) {
      next.password = "Password must be at least 4 characters.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const ok = login(values);

    if (!ok) {
      setErrors({
        form: "Invalid credentials. Use sadib@shipnow.com and password 1234.",
      });

      return;
    }

    navigate("/dashboard", { replace: true });
  };

  return (
    /*
      Mobile + Tablet = normal block / one column
      Large = two-column grid
    */
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* ================= LEFT PANEL ================= */}

      <section
        className="
          flex min-h-[844px] flex-col items-center
          overflow-hidden px-6 pb-[70px] pt-[68px]
          text-white

          md:min-h-[1024px]
          md:px-10
          md:pb-[78px]
          md:pt-[74px]

          lg:min-h-screen
        "
        style={{ backgroundColor: purple }}
      >
        {/* Mobile logo = small
            Medium + Large logo = same exact size */}
        <img
  src="/assets/shipnow-logo.png"
  alt="ShipNow"
  className="
    relative top-[100px]
    h-auto w-[112px] object-contain

    md:top-[60px]
    md:w-[264.52px]
  "
/>

        {/* Image area */}
        <div
          className="
            flex flex-1 items-center justify-center

            md:mt-[30px]
          "
        >
          {/* Mobile image: 243.24 × 229.05
              Medium + Large: 410 × 386 */}
          <div
            className="
              relative
              w-[243.24px]

              md:w-[410px]
            "
          >
            <img
              src="/assets/delivery-truck.png"
              alt="Delivery truck loaded with shipment boxes"
              className="
                block
                aspect-[243.24/229.05]
                w-full
                rounded-[9px]
                object-cover

                md:aspect-[410/386]
              "
            />

            <img
              src="/assets/phone-user.png"
              alt="Customer ordering from a phone"
              className="
                absolute
                -right-[12%]
                -top-[14%]
                w-[43.5%]
                rounded-[8px]
                object-cover
              "
            />
          </div>
        </div>

        {/* Welcome text */}
        <div
          className=" 
            relative bottom-[100px]
            w-full max-w-[326px]
            text-center

            
            md:bottom-[60px]
            md:h-[96px]
            md:max-w-[487px]
          "
        >
          <h1
            className="
              mx-auto
              max-w-[250px]
              text-[40px]
              font-bold
              leading-[1.05]
              tracking-[-0.03em]

              md:max-w-none
              md:text-[40px]
              
            "
          >
            Welcome to ShipNow
          </h1>

          <p
            className="
              mx-auto mt-3
              max-w-[300px]
              text-[16px]
              leading-[1.45]
              text-white/95

              md:max-w-[430px]
              md:text-[16px]
            "
          >
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </section>

      {/* ================= RIGHT PANEL ================= */}

      <section
        className="
          flex min-h-[844px]
          items-center justify-center
          bg-white
          px-8 py-16

          md:min-h-[1024px]
          md:px-12

          lg:min-h-screen
        "
      >
        {/* Mobile form: 326px
            Medium + Large form: 400px */}
        <form
          onSubmit={submit}
          className="
            w-full max-w-[326px]

            md:max-w-[400px]
          "
        >
          {/* Purple symbol
              Medium + Large: 40 × 40 */}
          <div className="mb-5 flex justify-center">
            <span
              className="
                relative block
                h-[34px] w-[28px]

                md:h-[40px]
                md:w-[40px]
              "
            >
              <span
                className="
                  absolute
                  left-[6px] top-[2px]
                  h-[18px] w-[9px]
                  -skew-x-[18deg]
                  rounded-sm
                  bg-brand-600

                  md:left-[11px]
                  md:top-[1px]
                  md:h-[20px]
                  md:w-[10px]
                "
              />

              <span
                className="
                  absolute
                  bottom-[2px] right-[5px]
                  h-[18px] w-[9px]
                  -skew-x-[18deg]
                  rounded-sm
                  bg-brand-600

                  md:bottom-[1px]
                  md:right-[11px]
                  md:h-[20px]
                  md:w-[10px]
                "
              />
            </span>
          </div>

          {/* Heading section */}
          <div
            className="
              mx-auto
              w-full
              text-center

              md:w-[400px]
            "
          >
            <h2
              className="
                text-[18px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-ink
              "
            >
              Welcome Back
            </h2>

            <p
              className="
                mx-auto mt-2
                text-[9px]
                leading-[1.5]
                text-[#8e8e95]

                md:text-[10px]
              "
            >
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Email */}
          <div className="mt-7">
            <label
              htmlFor="login-email"
              className="block text-[13px] font-medium text-[#4f4f54]"
            >
              Email Address
            </label>

            <input
              id="login-email"
              type="email"
              value={values.email}
              onChange={(event) => {
                setValues((previous) => ({
                  ...previous,
                  email: event.target.value,
                }));

                setErrors((previous) => ({
                  ...previous,
                  email: undefined,
                  form: undefined,
                }));
              }}
              placeholder="Demo Email : sadib@shipnow.com"
              className={`
                mt-2 h-[39px] w-full
                rounded-[7px]
                border
                bg-[#f6f6f7]
                px-3.5
                text-[13px]
                placeholder:text-[#b3b3b8]

                ${
                  errors.email
                    ? "border-danger"
                    : "border-[#eeeeef]"
                }
              `}
            />

            {errors.email && (
              <p className="mt-1 text-[11px] text-danger">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              htmlFor="login-password"
              className="block text-[13px] font-medium text-[#4f4f54]"
            >
              Password
            </label>

            <div className="relative mt-2">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={(event) => {
                  setValues((previous) => ({
                    ...previous,
                    password: event.target.value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    password: undefined,
                    form: undefined,
                  }));
                }}
                placeholder="Demo Password :1234"
                className={`
                  h-[39px] w-full
                  rounded-[7px]
                  border
                  bg-[#f6f6f7]
                  px-3.5
                  pr-10
                  text-[13px]
                  placeholder:text-[#b3b3b8]

                  ${
                    errors.password
                      ? "border-danger"
                      : "border-[#eeeeef]"
                  }
                `}
              />

              <button
                type="button"
                onClick={() => {
                  setShowPassword((previous) => !previous);
                }}
                className="
                  absolute right-2 top-1/2
                  flex h-7 w-7
                  -translate-y-1/2
                  items-center justify-center
                  text-[#9d9da3]
                "
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-[11px] text-danger">
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember / forgot */}
          <div className="mt-3 flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-[12px] text-[#77777d]">
              <input
                type="checkbox"
                checked={values.remember}
                onChange={(event) => {
                  setValues((previous) => ({
                    ...previous,
                    remember: event.target.checked,
                  }));
                }}
                className="h-[11px] w-[11px] accent-brand-600"
              />

              Remember Me
            </label>

            <a
              href="#"
              className="text-[12px] font-medium text-brand-600"
            >
              Forgot Password?
            </a>
          </div>

          {/* Credential error */}
          {errors.form && (
            <p
              className="
                mt-3 rounded-md
                bg-[#fff2f3]
                px-3 py-2
                text-center
                text-[11px]
                text-danger
              "
            >
              {errors.form}
            </p>
          )}

          {/* Login button */}
          <button
            type="submit"
            className="
              mt-5 h-[40px] w-full
              rounded-[7px]
              bg-[#272729]
              text-[14px]
              font-medium
              text-white
              transition
              hover:bg-black
            "
          >
            Login
          </button>

          <p className="mt-4 text-center text-[12px] text-[#98989e]">
            Don&apos;t have an account?{" "}

            <a
              href="#"
              className="font-medium text-brand-600"
            >
              Register
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
