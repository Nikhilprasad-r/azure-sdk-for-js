// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Azure client library for Mixed Reality authentication.
 *
 * @remarks
 * The {@link MixedRealityStsClient} class is used to request access tokens used
 * to access Mixed Reality services.
 *
 * @packageDocumentation
 */

export { AccessToken, AzureKeyCredential } from "@azure/core-auth";
export { GetTokenOptions, MixedRealityStsClientOptions } from "./models/options.js";
export { MixedRealityStsClient } from "./mixedRealityStsClient.js";
