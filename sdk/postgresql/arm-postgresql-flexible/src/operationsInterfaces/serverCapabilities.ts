/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FlexibleServerCapability,
  ServerCapabilitiesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerCapabilities. */
export interface ServerCapabilities {
  /**
   * Get capabilities for a flexible server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serverName: string,
    options?: ServerCapabilitiesListOptionalParams
  ): PagedAsyncIterableIterator<FlexibleServerCapability>;
}