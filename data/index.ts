import { IProduct } from "../shared/models/Product";
import babiesPacifiers from "./babiesPacifier";
import bibs from "./bibs";
import dressingCases from "./dressingCases";
import keyRings from "./keyRings";
import towels from "./towels";

const data: IProduct[] = [
  ...bibs,
  ...babiesPacifiers,
  ...dressingCases,
  ...towels,
  ...keyRings,
];

export default data;
