import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(users: User[]): Promise<User[]>;
    findAllUsers(): Promise<User[]>;
    findByUsername(startsWith: string): Promise<User[]>;
    findByOccupation(startsWith: string): Promise<User[]>;
    findByNationality(nationality: string): Promise<User[]>;
}
