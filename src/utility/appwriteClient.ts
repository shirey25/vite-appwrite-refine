import { Account, Appwrite, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = process.env.APPWRITE_URL ;
const APPWRITE_PROJECT = process.env.APPWRITE_PROJECT ;

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage };
