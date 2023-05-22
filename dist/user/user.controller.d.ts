import { UserService } from './user.service.ts';
import { User } from './user.schema';
import { NationalityService } from '../nacionalities/nationalities.service';
import { OccupationService } from '../occupations/occupation.service';
export interface UserProps {
    title: string;
    remarks: string;
    occupations: string;
    images: string;
}
export declare class UserController {
    private readonly userService;
    private readonly nationalityService;
    private readonly occupationService;
    constructor(userService: UserService, nationalityService: NationalityService, occupationService: OccupationService);
    create(): Promise<User[]>;
    findByNationality(nationality: string): Promise<User[]>;
    findAllUsers(): Promise<User[]>;
    findByUsername(username: string): Promise<User[]>;
    findByOccupation(occupations: string): Promise<User[]>;
}
