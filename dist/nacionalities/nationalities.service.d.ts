import { Model } from 'mongoose';
import { Nationality, NationalityDocument } from './nacionalities.schema';
export declare class NationalityService {
    private readonly nationalityModel;
    constructor(nationalityModel: Model<NationalityDocument>);
    getAll(): Promise<Nationality[]>;
    create(name: string): Promise<Nationality>;
}
