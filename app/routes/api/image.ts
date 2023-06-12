import { imageLoader, DiskCache } from "remix-image/server";
import { wasmTransformer } from "remix-image-wasm";
import type { LoaderFunction } from "@remix-run/node";

const config = {
  selfUrl: "http://localhost:3000",
  cache: new DiskCache(),
  transformer: wasmTransformer,
};

export const loader: LoaderFunction = ({ request }: { request: any }) => {
  return imageLoader(config, request);
};
