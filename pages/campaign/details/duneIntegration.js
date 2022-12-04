import { QueryParameter, DuneClient } from "@cowprotocol/ts-dune-client";

const { DUNE_API_KEY } = process.env;
const client = new DuneClient(
  DUNE_API_KEY ?? "Fv2LqoOV0ZOSJjce1QQ45NdKLRmUthnQ"       
);
const queryID = 1700866;              
const parameters = [
  QueryParameter.text("query3", "select * from nft.trades limit 1"),
];

client
  .refresh(queryID, parameters)
  .then((executionResult) => console.log(executionResult.result?.rows));

//   .then((executionResult) => console.log(executionResult.result?.rows));
