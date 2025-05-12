"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  TextBoxWithValidation,
  TextBoxWithValidationProps,
} from "@/components/elements/TextInput";

import {
  DropdownWithValidation,
  DropdownWithValidationProps,
} from "@/components/elements/DropDownInput";

import { Checkbox } from "@/components/elements/CheckBoxInput";
import { upsertEmployee } from "./actions";
import {
  SALNEmployeeSchema,
  SALNEmployeeSchemaType,
} from "./schemas/saln-employee";

const CustomTextBox = (
  props: TextBoxWithValidationProps<SALNEmployeeSchemaType>
) => {
  return <TextBoxWithValidation<SALNEmployeeSchemaType> {...props} />;
};

const CustomDropDown = (
  props: DropdownWithValidationProps<SALNEmployeeSchemaType>
) => {
  return <DropdownWithValidation<SALNEmployeeSchemaType> {...props} />;
};

const SALNEmployeeForm = ({ id }: { id?: string }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SALNEmployeeSchemaType>({
    resolver: zodResolver(SALNEmployeeSchema),
  });

  const [filingType, setFilingType] = useState("");

  const onFilingTypeChange = (val: string) => {
    setValue("FilingType", val);
    setFilingType(val);
  };

  useEffect(() => {
    if (id) {
      setValue("Id", id);

      // If you need to fetch the existing data:
      // const fetchEmployee = async () => {
      //   const employee = await getEmployeeById(id);
      //   if (employee) {
      //     Object.entries(employee).forEach(([key, value]) => {
      //       setValue(key as any, value);
      //     });
      //   }
      // };
      // fetchEmployee();
    }
  }, [id, setValue]);

  const submitForm = async (data: SALNEmployeeSchemaType) => {
    const result = await upsertEmployee(data);

    if (result.error) {
      console.error("SALNEmployeeForm", result.error);
    } else {
      console.log("SALNEmployeeForm", result);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm, (formErrors) => {
        console.log("Validation errors:", formErrors);
      })}
    >
      <input type="hidden" {...register("Id")} />
      <div className="row">
        <div id="filing-type" className="col-sm-12 mb-3">
          <div className="mb-1">
            <label>
              <strong>NOTE: </strong> Husband and Wife are both public officials
              and employees may file the required statements jointly or
              separately
            </label>
          </div>

          <Checkbox
            id="joint-filing"
            checked={filingType == "Joint"}
            label="Joint Filing"
            onChange={() => onFilingTypeChange("Joint")}
          />

          <Checkbox
            id="separate-filing"
            checked={filingType == "Separate"}
            label="Separate Filing"
            onChange={() => onFilingTypeChange("Separate")}
          />

          <Checkbox
            id="not-applicable-filing"
            checked={filingType == "NotApplicable"}
            label="Not Applicable"
            onChange={() => onFilingTypeChange("NotApplicable")}
          />
          {errors.FilingType && (
            <div id={`filing-type-desc`} className="form-text text-danger">
              {errors.FilingType.message}
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="mb-2">
          <h6 className="text-uppercase">
            <mark>Declarant</mark>
          </h6>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="employee-family-name"
                schemaName="FamilyName"
                label="Family Name"
                placeholder="Dela Cruz"
                register={register}
                error={errors.FamilyName}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="employee-first-name"
                schemaName="FirstName"
                label="First Name"
                placeholder="Juan"
                register={register}
                error={errors.FirstName}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="employee-middle-name"
                schemaName="MiddleName"
                label="Middle Name"
                placeholder="Aguinaldo"
                register={register}
                error={errors.MiddleName}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="employee-address"
                label="Address"
                placeholder="#123 Example Ave, Brgy Matagumpay"
                schemaName="Address"
                register={register}
                error={errors.Address}
              />
            </div>
            <div className="col-sm-6">
              <CustomDropDown
                id="employee-city"
                label="City"
                options={[
                  { label: "Dasmarinas City", value: "Dasmarinas City" },
                ]}
                schemaName="City"
                register={register}
                error={errors.City}
              />
            </div>
            <div className="col-sm-6">
              <CustomDropDown
                id="employee-town"
                label="Town/Province"
                options={[{ label: "Cavite", value: "Cavite" }]}
                schemaName="Town"
                register={register}
                error={errors.Town}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="employee-position"
                label="Position"
                placeholder="Engineering Staff"
                schemaName="Position"
                register={register}
                error={errors.Position}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="agency-office"
                label="Agency/Office"
                placeholder="Dasmarinas Water District"
                schemaName="Agency"
                register={register}
                error={errors.Agency}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="office-address"
                label="Office Address"
                placeholder="Dasmarinas City, Cavite"
                schemaName="AgencyAddress"
                register={register}
                error={errors.AgencyAddress}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row"></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="mb-2">
          <h6 className="text-uppercase">
            <mark>Spouse</mark>
          </h6>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="Spouse-family-name"
                label="Family Name"
                placeholder="Dela Cruz"
                schemaName="SpouseFamilyName"
                register={register}
                error={errors.SpouseFamilyName}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="Spouse-first-name"
                label="First Name"
                placeholder="Maria"
                schemaName="SpouseFirstName"
                register={register}
                error={errors.SpouseFirstName}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <CustomTextBox
                id="Spouse-middle-name"
                label="Middle Name"
                placeholder="Makiling"
                schemaName="SpouseMiddleName"
                register={register}
                error={errors.SpouseMiddleName}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="Spouse-position"
                label="Position"
                placeholder="Accountant"
                schemaName="SpousePosition"
                register={register}
                error={errors.SpousePosition}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="Spouse-agency-office"
                label="Agency/Office"
                placeholder="Dasmarinas Water District"
                schemaName="SpouseAgency"
                register={register}
                error={errors.SpouseAgency}
              />
            </div>
            <div className="col-sm-12">
              <CustomTextBox
                id="Spouse-office-address"
                label="Office Address"
                placeholder="Dasmarinas City, Cavite"
                schemaName="SpouseAgencyAddress"
                register={register}
                error={errors.SpouseAgencyAddress}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-wave">
              SAVE
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-danger btn-wave">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { SALNEmployeeForm };
