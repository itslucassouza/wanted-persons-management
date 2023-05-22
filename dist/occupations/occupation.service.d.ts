import { Model } from 'mongoose';
import { Occupation, OccupationDocument } from './occupations.schema';
export declare class OccupationService {
    private readonly nationalityModel;
    constructor(nationalityModel: Model<OccupationDocument>);
    getAll(): Promise<Occupation[]>;
    create(name: string): Promise<Occupation>;
}
