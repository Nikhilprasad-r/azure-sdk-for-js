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
  GetGroupIdListForLdapUserRequest,
  NetAppManagementClient
} from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the list of group Ids for a specific LDAP User
 *
 * @summary Returns the list of group Ids for a specific LDAP User
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-11-01/examples/GroupIdListForLDAPUser.json
 */
async function getGroupIdListForUser() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const body: GetGroupIdListForLdapUserRequest = { username: "user1" };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginListGetGroupIdListForLdapUserAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    body
  );
  console.log(result);
}

async function main() {
  getGroupIdListForUser();
}

main().catch(console.error);