/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnectionResource,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Approve or Reject Private Endpoint requests. This call is made by Backup Admin.
 *
 * @summary Approve or Reject Private Endpoint requests. This call is made by Backup Admin.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-04-01/examples/PrivateEndpointConnection/PutPrivateEndpointConnection.json
 */
async function updatePrivateEndpointConnection() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const vaultName = "gaallavaultbvtd2msi";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "gaallaRG";
  const privateEndpointConnectionName =
    "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b";
  const parameters: PrivateEndpointConnectionResource = {
    properties: {
      groupIds: ["AzureBackup_secondary"],
      privateEndpoint: {
        id:
          "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/gaallaRG/providers/Microsoft.Network/privateEndpoints/gaallatestpe3"
      },
      privateLinkServiceConnectionState: {
        description: "Approved by johndoe@company.com",
        status: "Approved"
      },
      provisioningState: "Succeeded"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.beginPutAndWait(
    vaultName,
    resourceGroupName,
    privateEndpointConnectionName,
    parameters
  );
  console.log(result);
}

async function main() {
  updatePrivateEndpointConnection();
}

main().catch(console.error);