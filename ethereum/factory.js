import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x87Da72b753a562942d5C79A68f51BD1EF38856CA"
);

export default instance;
