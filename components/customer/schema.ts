import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Feature } from "geojson";

const customerSchema = z.object({
  customerId: z.string().min(1, "Customer ID is required"),
  classification: z.string(),
  status: z.string(),
  cistern: z.string(),
  connectionDate: z.string().refine((value) => {
    return value ? !isNaN(Date.parse(value)) : true;
  }, "Invalid Date"),
  meterId: z.string(),
  meterBrand: z.string(),
  meterSize: z.string(),
  lastName: z.string().min(1, "Last Name is required"),
  firstName: z.string().min(1, "First Name is required"),
  middleName: z.string(),
  address: z.string().min(1, "Address is required"),
  geoCodeAddress: z.string().min(1, "Geo Code Address is required"),
  primaryContact: z
    .string()
    .min(1, "Primary Contact is required")
    .refine((value) => isValidPhoneNumber(value, "PH"), {
      message: "Invalid phone number",
    }),
  alternativeContact: z.string().refine(
    (value) => {
      return value ? isValidPhoneNumber(value, "PH") : true;
    },
    {
      message: "Invalid phone number",
    }
  ),
});

type CustomerDataType = z.infer<typeof customerSchema>;

type CustomerWithGeoFeatureType = {
  customer: CustomerDataType;
  feature: Feature;
};

export { customerSchema };
export type { CustomerDataType, CustomerWithGeoFeatureType };
