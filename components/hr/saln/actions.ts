"use server";

import db from "@/lib/db";
import { SALNEmployeeSchema } from "./schemas/saln-employee";

const upsertEmployee = async (data: unknown) => {
  console.log("upsertEmployee", data);
  const result = SALNEmployeeSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  const parsedData = result.data;

  const isUpdate = Boolean(parsedData.Id);

  try {
    if (isUpdate) {
      // Update existing record
      const updated = await db.sALNEmployees.update({
        where: { Id: parsedData.Id },
        data: parsedData,
      });

      return { success: true, data: updated };
    } else {
      // Create new record with auto-generated ID
      const created = await db.sALNEmployees.create({
        data: { ...parsedData, Id: undefined },
      });

      return { success: true, data: created };
    }
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      error: "Failed to save employee data",
    };
  }
};

export { upsertEmployee };
