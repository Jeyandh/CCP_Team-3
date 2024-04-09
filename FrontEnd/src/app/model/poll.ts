import { Option } from "./Option";
import { Department } from "./Department";
import { Project } from "./Project";
import { Region } from "./Region";
import { User } from "./User";

export class Poll {
    pollId!: number;
    endDate!: Date;
    status!: boolean;
    pollQuestion!: string;
    timeStamp!: Date;
    region!: Region;
    options!: Option;
    optionId!: number;
    user!: string;
    userId!:string;
    project!: Project;
    department!: Department;
    voted?: boolean;
    constructor() {
        this.voted = false;
      }
}