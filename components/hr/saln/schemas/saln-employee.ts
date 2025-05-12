import { z } from "zod";

const SALNEmployeeSchema = z.object({
  Id: z.string().optional(),
  FilingType: z.string().min(1, "Filing Type is required"),
  FamilyName: z.string().min(1, "Family Name is required"),
  FirstName: z.string().min(1, "First Name is required"),
  MiddleName: z.string().min(1, "Middle Name is required"),
  Address: z.string().min(1, "Address is required"),
  City: z.string().min(1, "City is required"),
  Town: z.string().min(1, "Town/Province is required"),
  Position: z.string().min(1, "Position is required"),
  Agency: z.string().min(1, "Agency/Office is required"),
  AgencyAddress: z.string().min(1, "Office Address is required"),
  SpouseFamilyName: z.string().optional(),
  SpouseFirstName: z.string().optional(),
  SpouseMiddleName: z.string().optional(),
  SpousePosition: z.string().optional(),
  SpouseAgency: z.string().optional(),
  SpouseAgencyAddress: z.string().optional(),
});

type SALNEmployeeSchemaType = z.infer<typeof SALNEmployeeSchema>;

export { SALNEmployeeSchema };
export type { SALNEmployeeSchemaType };
