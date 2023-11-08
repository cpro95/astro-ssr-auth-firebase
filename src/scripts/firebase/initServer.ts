import * as admin from "firebase-admin";
import type { ServiceAccount } from "firebase-admin";
import serviceAccount from "../../../mycodings-76f3f-firebase-adminsdk-es5n6-3e5e954ba0.json";
import { initializeApp, cert } from "firebase-admin/app";

let app: ReturnType<typeof initializeApp>;

const getServerApp = () => {
  if (app || admin.apps.length) {
    return app;
  }

  app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });

  return app;
};

export const serverApp = getServerApp();
