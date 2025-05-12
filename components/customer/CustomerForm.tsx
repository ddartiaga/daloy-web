"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";

import PhoneInput from "react-phone-number-input";

import { useMapStore } from "@/components/map/store";
import {
  CustomerDataType,
  customerSchema,
  CustomerWithGeoFeatureType,
} from "./schema";
import { upsertCustomerAndFeatureAction } from "./server-actions";

const PhoneNumberInput = (props: React.ComponentPropsWithoutRef<"input">) => (
  <input {...props} className={`form-control ${props.className || ""}`} />
);

type CustomerFormProps = {
  offCanvas?: boolean;
};

const CustomerForm = ({ offCanvas = false }: CustomerFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CustomerDataType>({
    resolver: zodResolver(customerSchema),
    defaultValues: {},
  });

  const selectedFeature = useMapStore((state) => state.selectedFeature);

  const geoCodeAddress = useMapStore((state) => state.drawnReverseGeoCode);
  const setDrawingMode = useMapStore((state) => state.setDrawingMode);

  // Update default value when drawnFeature changes:
  useEffect(() => {
    if (selectedFeature && selectedFeature.properties?.length > 0) {
      if ("entity" in selectedFeature.properties!) {
        if (selectedFeature.properties.entity) {
          console.log(
            "properies contains 'entity' with value:",
            selectedFeature.properties.entity
          );
          console.log("resetting data");
          reset(selectedFeature.properties!);
        } else {
          console.log("entity is not in the properties");

          // TODO: close off-canvas
        }
      }
    } else {
      console.log("Customer Form: selectedFeature changed");
    }
  }, [selectedFeature, reset]);

  useEffect(() => {
    setValue("geoCodeAddress", geoCodeAddress ?? "");
  }, [geoCodeAddress]);

  const formSubmit = async (data: CustomerDataType) => {
    try {
      if (selectedFeature) {
        const geo = {
          ...selectedFeature,
        };
        const payload: CustomerWithGeoFeatureType = {
          customer: data,
          feature: geo,
        };

        await upsertCustomerAndFeatureAction(payload);
        console.log("customer information saved");
      } else {
        console.log("Must select a drawing");
      }
    } catch (error) {
      // TypeScript infers error as `unknown`, so you often need to narrow the type
      if (error instanceof Error) {
        console.error("An error occurred:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label
                htmlFor="account-id"
                className="form-label fs-12 text-primary"
              >
                Account ID
              </label>
              <input
                id="account-id"
                {...register("customerId")}
                type="text"
                className="form-control"
                placeholder="Account ID"
                aria-describedby="account-id-desc"
              />
              {errors.customerId && (
                <div id="account-id-desc" className="form-text text-danger">
                  {errors.customerId.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-3 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="classification"
                className="form-label fs-12 text-primary"
              >
                Classification
              </label>
              <select
                id="classification"
                {...register("classification")}
                className="form-select"
                aria-label="Classification"
                aria-describedby="classification-desc"
              >
                <option value="commercial-industrial">
                  Commercial / Industrial
                </option>
                <option value="commercial-a">Commercial A</option>
                <option value="commercial-b">Commercial B</option>
                <option value="commercial-c">Commercial C</option>
                <option value="government">Government</option>
                <option value="residential">Residential</option>
              </select>
              {errors.classification && (
                <div id="classification-desc" className="form-text text-danger">
                  {errors.classification.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-3 col-sm-12")}>
            <div className="mb-3">
              <label htmlFor="status" className="form-label fs-12 text-primary">
                Status
              </label>
              <select
                id="status"
                {...register("status")}
                className="form-select"
                aria-label="Status"
                aria-describedby="status-desc"
              >
                <option value="active-connected">Active Connected</option>
                <option value="active-disconnected">Active Disconnected</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.status && (
                <div id="status-desc" className="form-text text-danger">
                  {errors.status.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-3 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="cistern"
                className="form-label fs-12 text-primary"
              >
                With Cistern
              </label>
              <select
                id="cistern"
                {...register("cistern")}
                className="form-select"
                aria-label="With Cistern"
                aria-describedby="cistern-desc"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              {errors.cistern && (
                <div id="cistern-desc" className="form-text text-danger">
                  {errors.cistern.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-3 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="connection-date"
                className="form-label fs-12 text-primary"
              >
                Connection Date
              </label>
              <input
                {...register("connectionDate")}
                type="date"
                className="form-control"
                id="connection-date"
                placeholder="Choose date"
              />
            </div>
            {errors.connectionDate && (
              <div id="connection-date-desc" className="form-text text-danger">
                {errors.connectionDate.message}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="meter-id"
                className="form-label fs-12 text-primary"
              >
                Meter ID
              </label>
              <input
                id="meter-id"
                {...register("meterId")}
                type="text"
                className="form-control"
                placeholder="Meter ID"
                aria-describedby="meter-id-desc"
              />
              {errors.meterId && (
                <div id="meter-id-desc" className="form-text text-danger">
                  {errors.meterId.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="meter-brand"
                className="form-label fs-12 text-primary"
              >
                Meter Brand
              </label>
              <input
                id="meter-brand"
                {...register("meterBrand")}
                type="text"
                className="form-control"
                placeholder="Meter Brand"
                aria-describedby="meter-brand-desc"
              />
              {errors.meterBrand && (
                <div id="meter-brand-desc" className="form-text text-danger">
                  {errors.meterBrand.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="meter-size"
                className="form-label fs-12 text-primary"
              >
                Meter Size
              </label>
              <input
                id="meter-size"
                {...register("meterSize")}
                type="text"
                className="form-control"
                placeholder="Meter Size"
                aria-describedby="meter-size-desc"
              />
              {errors.meterSize && (
                <div id="meter-size-desc" className="form-text text-danger">
                  {errors.meterSize.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="lastname"
                className="form-label fs-12 text-primary"
              >
                Last Name
              </label>
              <input
                id="lastname"
                {...register("lastName")}
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-describedby="lastname-desc"
              />
              {errors.lastName && (
                <div id="lastname-desc" className="form-text text-danger">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="firstname"
                className="form-label fs-12 text-primary"
              >
                First Name
              </label>
              <input
                id="firstname"
                {...register("firstName")}
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-describedby="firstname-desc"
              />
              {errors.firstName && (
                <div id="firstname-desc" className="form-text text-danger">
                  {errors.firstName.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-4 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="middlename"
                className="form-label fs-12 text-primary"
              >
                Middle Name
              </label>
              <input
                id="middlename"
                {...register("middleName")}
                type="text"
                className="form-control"
                placeholder="Middle Name"
                aria-describedby="middlename-desc"
              />
              {errors.middleName && (
                <div id="middlename-desc" className="form-text text-danger">
                  {errors.middleName.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="mb-1">
              <label
                htmlFor="address"
                className="form-label fs-12 text-primary"
              >
                Address
              </label>
              <input
                id="address"
                {...register("address")}
                type="text"
                className="form-control"
                placeholder="Block #, Street, Subdivision, Barangay, City"
                aria-describedby="address-desc"
              />
              {errors.address && (
                <div id="address-desc" className="form-text text-danger">
                  {errors.address.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-6 col-sm-12")}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Geo Code Address"
                aria-describedby="geo-code-address"
                readOnly
                {...(register ? register("geoCodeAddress") : {})}
              />
              <button
                className="btn btn-secondary btn-icon"
                type="button"
                id="geo-code-address"
                onClick={() => {
                  console.log("Drawing Mode:", "draw_point");
                  setDrawingMode("draw_point");
                }}
              >
                <i className="ri-map-pin-line"></i>
              </button>
            </div>
            <div>
              {errors.geoCodeAddress && (
                <div id="geocode-address" className="form-text text-danger">
                  {errors.geoCodeAddress.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-6 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="primary-contact"
                className="form-label fs-12 text-primary"
              >
                Primary Contact Number
              </label>
              <Controller
                control={control}
                name="primaryContact"
                defaultValue=""
                render={({ field }) => (
                  <PhoneInput
                    id="primary-contact"
                    {...field}
                    placeholder="Primary Cellphone Number"
                    inputComponent={PhoneNumberInput}
                    countries={["PH"]} // only PH
                    defaultCountry="PH"
                    international // displays the international dialing code (+63)
                    countryCallingCodeEditable={false} // prevents editing of the code
                    aria-describedby="primary-contact-desc"
                  />
                )}
              />
              {errors.primaryContact && (
                <div
                  id="primary-contact-desc"
                  className="form-text text-danger"
                >
                  {errors.primaryContact.message}
                </div>
              )}
            </div>
          </div>
          <div className={clsx(offCanvas ? "col-sm-12" : "col-md-6 col-sm-12")}>
            <div className="mb-3">
              <label
                htmlFor="alternative-contact"
                className="form-label fs-12 text-primary"
              >
                Alternative Contact Number
              </label>
              <Controller
                control={control}
                name="alternativeContact"
                defaultValue=""
                render={({ field }) => (
                  <PhoneInput
                    id="alternative-contact"
                    {...field}
                    placeholder="Alternative Cellphone Number"
                    inputComponent={PhoneNumberInput}
                    countries={["PH"]}
                    defaultCountry="PH"
                    international // displays the international dialing code (+63)
                    countryCallingCodeEditable={false} // prevents editing of the code
                    aria-describedby="alternative-contact-desc"
                  />
                )}
              />
              {errors.alternativeContact && (
                <div
                  id="alternative-contact-desc"
                  className="form-text text-danger"
                >
                  {errors.alternativeContact.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary btn-wave">
                Submit
              </button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-grid gap-2 mb-3">
              <button type="button" className="btn btn-danger btn-wave">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CustomerForm;
