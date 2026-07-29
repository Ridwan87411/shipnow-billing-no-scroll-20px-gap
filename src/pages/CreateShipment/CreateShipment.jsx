import { useState } from "react";
import {
  FiArrowLeft,
  FiCalendar,
  FiChevronDown,
  FiTrash2,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUES = {
  senderCompany: "GreenHaven",
  senderEmail: "logistics@greenhaven.com",
  senderPhone: "408-555-7210",
  pickupAddress: "1120 Birch Street, Portland, OR 97205, USA",

  recipientCompany: "FreshNest",
  recipientEmail: "warehouse@freshnest.com",
  recipientPhone: "786-555-4432",
  deliveryAddress: "",

  itemDescription: "Premium Garden Tool Set",
  quantity: "40",
  declaredValue: "$3,200",
  weight: "125",
  units: "Kg",
  length: "80",
  width: "60",
  height: "",

  freightType: "Road Freight",
  carrier: "FedEx",
  shippingMethod: "",
  shipmentId: "#SH9583742",
  shipmentDate: "2035-03-21",
  notes: "",

  insurance: true,
  signature: true,
  temperature: true,
  fragile: false,
  trackingUpdates: true,
};

const FIELD_CLASS =
  "h-[42px] w-full rounded-[7px] border border-transparent bg-white px-3 text-[10px] text-[#444449] placeholder:text-[#a7a7ad] transition focus:border-brand-400";

function FieldLabel({ children }) {
  return (
    <span className="mb-1.5 block text-[9px] font-normal leading-none text-[#77777d]">
      {children}
    </span>
  );
}

function ErrorText({ children }) {
  return (
    <p className="mt-1.5 text-[8px] font-medium leading-none text-brand-600">
      {children}
    </p>
  );
}

function PhoneInput({ value, onChange }) {
  return (
    <div className="flex h-[42px] overflow-hidden rounded-[7px] bg-white">
      <button
        type="button"
        className="flex shrink-0 items-center gap-1 border-r border-[#ececef] px-2 text-[10px] text-[#55555a]"
        aria-label="Country code"
      >
        <span className="text-[15px] leading-none"><img src="/assets/Country.png" alt="United States" /></span>
        <span>+1</span>
        <FiChevronDown className="text-[10px] text-[#88888e]" />
      </button>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 bg-transparent px-3 text-[10px] text-[#444449]"
        aria-label="Phone number"
      />
    </div>
  );
}

function CheckOption({ checked, onChange, label, className = "" }) {
  return (
    <label className={`flex cursor-pointer items-center gap-1.5 text-[9px] text-[#57575c] ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-[13px] w-[13px] rounded accent-brand-600"
      />
      <span>{label}</span>
    </label>
  );
}

function FreightRadio({ value, selected, setSelected }) {
  return (
    <label className="flex cursor-pointer items-center gap-1.5 text-[9px] text-[#57575c]">
      <input
        type="radio"
        name="freightType"
        checked={selected === value}
        onChange={() => setSelected(value)}
        className="h-[12px] w-[12px] accent-brand-600"
      />
      <span>{value}</span>
    </label>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-[18px] w-[34px] rounded-full transition ${
        checked ? "bg-brand-600" : "bg-[#d9d9dd]"
      }`}
    >
      <span
        className={`absolute top-[3px] h-[12px] w-[12px] rounded-full bg-white transition ${
          checked ? "left-[19px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}

export default function CreateShipment() {
  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({
    deliveryAddress: "Address is required.",
    shippingMethod: "Shipping method is required.",
  });

  const update = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));

    if (key === "deliveryAddress" && value.trim()) {
      setErrors((current) => ({ ...current, deliveryAddress: undefined }));
    }

    if (key === "shippingMethod" && value) {
      setErrors((current) => ({ ...current, shippingMethod: undefined }));
    }
  };

  const validate = () => {
    const next = {};

    if (!values.deliveryAddress.trim()) {
      next.deliveryAddress = "Address is required.";
    }

    if (!values.shippingMethod) {
      next.shippingMethod = "Shipping method is required.";
    }

    if (!values.senderCompany.trim()) {
      next.senderCompany = "Company is required.";
    }

    if (!values.recipientCompany.trim()) {
      next.recipientCompany = "Company is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.senderEmail)) {
      next.senderEmail = "Enter a valid email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.recipientEmail)) {
      next.recipientEmail = "Enter a valid email address.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    navigate("/shipments");
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setErrors({
      deliveryAddress: "Address is required.",
      shippingMethod: "Shipping method is required.",
    });
  };

  return (
    <div>
      {/* Figma desktop/tablet page heading */}
      <div className="mb-5 hidden md:block">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2"
        >
          <FiArrowLeft className="text-[20px] text-[#55555a] transition group-hover:text-brand-600" />
          <h1 className="text-[24px] font-semibold leading-none tracking-[-0.035em] text-[#29292c]">
            Create New Shipment
          </h1>
        </button>

        <p className="ml-7 mt-1.5 text-[9px]">
          <span className="text-brand-600">Dashboard</span>
          <span className="mx-1 text-[#a4a4aa]">/</span>
          <span className="text-brand-600">Shipments</span>
          <span className="mx-1 text-[#a4a4aa]">/</span>
          <span className="text-[#69696f]">Create New Shipment</span>
        </p>
      </div>

      <form
        onSubmit={submit}
        className="overflow-hidden rounded-[12px] border border-[#e8e8eb] bg-white shadow-card"
      >
        <div className="px-5 pb-4 pt-5 sm:px-6 lg:px-7">
          <h2 className="text-[14px] font-medium text-[#36363a]">
            Shipment Form
          </h2>
        </div>

        <div className="px-4 pb-5 sm:px-5 lg:px-6">
          {/* Sender / Recipient */}
          <section className="rounded-[11px] bg-[#f5f5f6] p-4 sm:p-5">
            <div className="grid md:grid-cols-2">
              <div className="pb-5 md:border-r md:border-[#dedee2] md:pb-0 md:pr-5">
                <h3 className="mb-5 text-[11px] font-semibold text-[#36363b]">
                  Sender Info
                </h3>

                <div className="space-y-4">
                  <label className="block">
                    <FieldLabel>Company</FieldLabel>
                    <input
                      value={values.senderCompany}
                      onChange={(event) =>
                        update("senderCompany", event.target.value)
                      }
                      className={FIELD_CLASS}
                    />
                    {errors.senderCompany && (
                      <ErrorText>{errors.senderCompany}</ErrorText>
                    )}
                  </label>

                  <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
                    <label className="block">
                      <FieldLabel>Email</FieldLabel>
                      <input
                        value={values.senderEmail}
                        onChange={(event) =>
                          update("senderEmail", event.target.value)
                        }
                        className={FIELD_CLASS}
                      />
                      {errors.senderEmail && (
                        <ErrorText>{errors.senderEmail}</ErrorText>
                      )}
                    </label>

                    <label className="block">
                      <FieldLabel>Phone Number</FieldLabel>
                      <PhoneInput
                        value={values.senderPhone}
                        onChange={(value) => update("senderPhone", value)}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <FieldLabel>Pickup Address</FieldLabel>
                    <input
                      value={values.pickupAddress}
                      onChange={(event) =>
                        update("pickupAddress", event.target.value)
                      }
                      className={FIELD_CLASS}
                    />
                  </label>
                </div>
              </div>

              <div className="border-t border-[#dedee2] pt-5 md:border-t-0 md:pl-5 md:pt-0">
                <h3 className="mb-5 text-[11px] font-semibold text-[#36363b]">
                  Recipient Info
                </h3>

                <div className="space-y-4">
                  <label className="block">
                    <FieldLabel>Company</FieldLabel>
                    <input
                      value={values.recipientCompany}
                      onChange={(event) =>
                        update("recipientCompany", event.target.value)
                      }
                      className={FIELD_CLASS}
                    />
                    {errors.recipientCompany && (
                      <ErrorText>{errors.recipientCompany}</ErrorText>
                    )}
                  </label>

                  <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
                    <label className="block">
                      <FieldLabel>Email</FieldLabel>
                      <input
                        value={values.recipientEmail}
                        onChange={(event) =>
                          update("recipientEmail", event.target.value)
                        }
                        className={FIELD_CLASS}
                      />
                      {errors.recipientEmail && (
                        <ErrorText>{errors.recipientEmail}</ErrorText>
                      )}
                    </label>

                    <label className="block">
                      <FieldLabel>Phone Number</FieldLabel>
                      <PhoneInput
                        value={values.recipientPhone}
                        onChange={(value) => update("recipientPhone", value)}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <FieldLabel>Delivery Address</FieldLabel>
                    <input
                      value={values.deliveryAddress}
                      onChange={(event) =>
                        update("deliveryAddress", event.target.value)
                      }
                      placeholder="Street address, city, state/province, ZIP code"
                      className={`${FIELD_CLASS} ${
                        errors.deliveryAddress
                          ? "!border-brand-500 focus:!border-brand-600"
                          : ""
                      }`}
                    />
                    {errors.deliveryAddress && (
                      <ErrorText>{errors.deliveryAddress}</ErrorText>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Desktop: package + shipping side-by-side. Tablet/mobile: stack. */}
          <div className="mt-5 grid xl:grid-cols-[0.38fr_0.62fr]">
            <section className="border-b border-[#dedee2] pb-6 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-6">
              <h3 className="mb-5 text-[12px] font-semibold text-[#36363b]">
                Package Details
              </h3>

              <div className="space-y-4">
                <label className="block">
                  <FieldLabel>Item Description</FieldLabel>
                  <input
                    value={values.itemDescription}
                    onChange={(event) =>
                      update("itemDescription", event.target.value)
                    }
                    className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 text-[10px] text-[#45454a]"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label>
                    <FieldLabel>Quantity</FieldLabel>
                    <input
                      type="number"
                      value={values.quantity}
                      onChange={(event) => update("quantity", event.target.value)}
                      className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 text-[10px]"
                    />
                  </label>

                  <label>
                    <FieldLabel>Value</FieldLabel>
                    <input
                      value={values.declaredValue}
                      onChange={(event) =>
                        update("declaredValue", event.target.value)
                      }
                      className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 text-[10px]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-[1fr_0.55fr] gap-3 sm:max-w-[280px]">
                  <label>
                    <FieldLabel>Weight</FieldLabel>
                    <input
                      value={values.weight}
                      onChange={(event) => update("weight", event.target.value)}
                      className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 text-[10px]"
                    />
                  </label>

                  <label>
                    <FieldLabel>Units</FieldLabel>
                    <div className="relative">
                      <select
                        value={values.units}
                        onChange={(event) => update("units", event.target.value)}
                        className="h-[42px] w-full appearance-none rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 pr-8 text-[10px]"
                      >
                        <option>Kg</option>
                        <option>Lb</option>
                      </select>
                      <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#77777d]" />
                    </div>
                  </label>
                </div>

                <div>
                  <FieldLabel>Dimensions</FieldLabel>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["length", "Length", "80"],
                      ["width", "Width", "60"],
                      ["height", "Height", "ex. 20"],
                    ].map(([key, caption, placeholder]) => (
                      <label key={key} className="min-w-0">
                        <div className="relative">
                          <input
                            value={values[key]}
                            onChange={(event) => update(key, event.target.value)}
                            placeholder={placeholder}
                            className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 pr-8 text-[10px] placeholder:text-[#a4a4aa]"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] text-[#a4a4aa]">
                            cm
                          </span>
                        </div>
                        <span className="mt-1.5 block text-[8px] text-[#99999f]">
                          {caption}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-6 xl:pl-6 xl:pt-0">
              <h3 className="mb-5 text-[12px] font-semibold text-[#36363b]">
                Shipping Details
              </h3>

              <div>
                <FieldLabel>Freight Type</FieldLabel>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-8">
                  {["Road Freight", "Rail Freight", "Ocean Freight", "Air Freight"].map(
                    (item) => (
                      <FreightRadio
                        key={item}
                        value={item}
                        selected={values.freightType}
                        setSelected={(value) => update("freightType", value)}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr]">
                <label>
                  <FieldLabel>Carrier</FieldLabel>
                  <div className="relative">
                    <select
                      value={values.carrier}
                      onChange={(event) => update("carrier", event.target.value)}
                      className="h-[42px] w-full appearance-none rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 pr-8 text-[10px]"
                    >
                      <option>FedEx</option>
                      <option>DHL</option>
                      <option>UPS</option>
                      <option>USPS</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#77777d]" />
                  </div>
                </label>

                <label>
                  <FieldLabel>Shipping Method</FieldLabel>
                  <div className="relative">
                    <select
                      value={values.shippingMethod}
                      onChange={(event) =>
                        update("shippingMethod", event.target.value)
                      }
                      className={`h-[42px] w-full appearance-none rounded-[7px] border bg-[#f5f5f6] px-3 pr-8 text-[10px] ${
                        errors.shippingMethod
                          ? "border-brand-500 text-[#99999f]"
                          : "border-transparent"
                      }`}
                    >
                      <option value="">Select Method</option>
                      <option>Standard</option>
                      <option>Express</option>
                      <option>Priority</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#77777d]" />
                  </div>
                  {errors.shippingMethod && (
                    <ErrorText>{errors.shippingMethod}</ErrorText>
                  )}
                </label>

                <label>
                  <FieldLabel>Shipment ID</FieldLabel>
                  <input
                    value={values.shipmentId}
                    readOnly
                    className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#eeeeef] px-3 text-[10px] text-[#a2a2a8]"
                  />
                  <span className="mt-1.5 block text-[8px] text-[#99999f]">
                    Auto-generated
                  </span>
                </label>

                <label>
                  <FieldLabel>Shipment Date</FieldLabel>
                  <div className="relative">
                    <input
                      type="date"
                      value={values.shipmentDate}
                      onChange={(event) =>
                        update("shipmentDate", event.target.value)
                      }
                      className="h-[42px] w-full rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 pr-9 text-[10px]"
                    />
                    <FiCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#66666b]" />
                  </div>
                </label>
              </div>

              <label className="mt-4 block">
                <FieldLabel>Notes</FieldLabel>
                <textarea
                  value={values.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  placeholder="Add special delivery notes (optional)"
                  className="h-[61px] w-full resize-none rounded-[7px] border border-transparent bg-[#f5f5f6] px-3 py-3 text-[10px] placeholder:text-[#a0a0a6]"
                />
              </label>

              <div className="mt-5 border-t border-[#dedee2] pt-5">
                <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
                  <div>
                    <FieldLabel>Additional Services</FieldLabel>

                    <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      <CheckOption
                        checked={values.insurance}
                        onChange={(checked) => update("insurance", checked)}
                        label="Insurance Coverage"
                        className="sm:order-1"
                      />
                      <CheckOption
                        checked={values.signature}
                        onChange={(checked) => update("signature", checked)}
                        label="Signature on Delivery"
                        className="sm:order-3"
                      />
                      <CheckOption
                        checked={values.temperature}
                        onChange={(checked) => update("temperature", checked)}
                        label="Temperature Control"
                        className="sm:order-2"
                      />
                      <CheckOption
                        checked={values.fragile}
                        onChange={(checked) => update("fragile", checked)}
                        label="Fragile Item Handling"
                        className="sm:order-4"
                      />
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Tracking & Status Updates</FieldLabel>

                    <div className="flex items-center gap-2">
                      <Toggle
                        checked={values.trackingUpdates}
                        onChange={(checked) =>
                          update("trackingUpdates", checked)
                        }
                      />
                      <span className="text-[9px] text-[#57575c]">
                        Notify Recipient via Email/SMS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 border-t border-[#dedee2] pt-5">
            <div className="grid grid-cols-2 gap-3 md:flex md:justify-end">
              <button
                type="button"
                onClick={reset}
                className="h-[42px] w-full rounded-[7px] bg-[#f0f0f1] px-4 text-[10px] font-medium text-[#333338] transition hover:bg-[#e8e8ea] md:w-auto md:min-w-[106px]"
              >
                Delete Form
              </button>
              <button
                type="submit"
                className="h-[42px] w-full rounded-[7px] bg-[#29292b] px-4 text-[10px] font-medium text-white transition hover:bg-black md:w-auto md:min-w-[118px]"
              >
                Submit Shipment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
