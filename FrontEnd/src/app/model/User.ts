
import { Department } from "./Department";
import { Project } from "./Project";
import { Region } from "./Region";
export class User {
    userId!: string;
    userFirstName!: string;
    userLastName!: string;
    userEmailId!: string;
    userPassword!: string;
    userType!: string;
    userMobileNumber!: number;
    department!: bigint;
    departments!: Department;
    departmentName!:string;
    region!: Region;
    regionName!:string;
    project!: Project[];
}