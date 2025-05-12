"use server";

import db from "@/lib/db";
import { customerSchema, CustomerWithGeoFeatureType } from "./schema";
import { GeoFeature } from "@prisma/client";


export async function getGeoFeaturesByEntity(entityType: string): Promise<GeoFeature[]> {
  const features = await db.geoFeature.findMany({
    where: { entity: entityType },
  });
  
  return features;
}

export async function upsertCustomerAndFeatureAction(
  data: CustomerWithGeoFeatureType
) {
  // Validate incoming customer data
  const parsedData = customerSchema.parse(data.customer);

  if (parsedData) {
    // Upsert the customer record
    const customer = await db.customer.upsert({
      where: { customerId: parsedData.customerId },
      update: {
        classification: parsedData.classification,
        status: parsedData.status,
        cistern: parsedData.cistern,
        connectionDate: parsedData.connectionDate
          ? new Date(parsedData.connectionDate)
          : null,
        meterId: parsedData.meterId,
        meterBrand: parsedData.meterBrand,
        meterSize: parsedData.meterSize,
        lastName: parsedData.lastName,
        firstName: parsedData.firstName,
        middleName: parsedData.middleName,
        address: parsedData.address,
        primaryContact: parsedData.primaryContact,
        alternativeContact: parsedData.alternativeContact,
      },
      create: {
        customerId: parsedData.customerId,
        classification: parsedData.classification,
        status: parsedData.status,
        cistern: parsedData.cistern,
        connectionDate: parsedData.connectionDate
          ? new Date(parsedData.connectionDate)
          : null,
        meterId: parsedData.meterId,
        meterBrand: parsedData.meterBrand,
        meterSize: parsedData.meterSize,
        lastName: parsedData.lastName,
        firstName: parsedData.firstName,
        middleName: parsedData.middleName,
        address: parsedData.address,
        primaryContact: parsedData.primaryContact,
        alternativeContact: parsedData.alternativeContact,
      },
    });

    // Upsert the GeoFeature if provided in the payload
    if (data.feature) {
      await db.geoFeature.upsert({
        where: { customerId: customer.customerId },
        update: {
          properties: JSON.stringify({...data.customer, entity: "customer"}),
          feature: JSON.stringify(data.feature),
        },
        create: {
          id: data.feature.id!.toString(),
          entity: "customer",
          properties: JSON.stringify({...data.customer, entity: "customer"}),
          feature: JSON.stringify(data.feature),
          customerId: customer.customerId,
        },
      });
    }

    return customer;
  }
}
