import { DemandModel } from '../models/demand.model';

export class InvolvepdPartyModel {
    InvolvedPartyId: number;
    FirstName: string;
    LastName: string;
    CompanyName: string;
    FatherName: string;
    MotherName: string;
    Sizigou: string;
    WorkTelephone: string;
    Mobile: string;
    HomeTelephone: string;
    Fax: string;
    Email: string;
    website: string;
    AFM: string;
    IDNumber: string;
    InvolvedPartyType: InvolvedPartyType;
    Demands: Array<DemandModel>;   
    AgentDemands: Array<DemandModel>;   

    fullName() {
        return this.FirstName + ' ' + this.LastName;
    }
}

export enum InvolvedPartyType {
    'Agent' = 1,
    'Contact',
    'Collaborator',
    'Owner',
    'Customer'
}