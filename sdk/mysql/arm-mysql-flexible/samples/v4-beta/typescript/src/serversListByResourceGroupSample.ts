/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MySQLManagementFlexibleServerClient } from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all the servers in a given resource group.
 *
 * @summary List all the servers in a given resource group.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/preview/2022-09-30-preview/examples/ServersListByResourceGroup.json
 */
async function listServersInAResourceGroup() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["MYSQL_RESOURCE_GROUP"] || "TestGroup";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.servers.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listServersInAResourceGroup();
}

main().catch(console.error);