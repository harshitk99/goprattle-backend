import { IsString, IsDateString, IsEnum, IsOptional, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export enum RoleType {
    Planner = 'Planner',
    Performer = 'Performer',
    Crew = 'Crew'
}

export class CreateRequirementDto {
    @IsString()
    @IsNotEmpty()
    eventName!: string;

    @IsString()
    @IsNotEmpty()
    eventType!: string;

    @IsDateString()
    eventDate!: string;

    @IsString()
    @IsNotEmpty()
    location!: string;

    @IsString()
    @IsOptional()
    venue?: string;

    @IsEnum(RoleType)
    requiredRole!: RoleType;

    @IsOptional()
    roleDetails?: any;
}
