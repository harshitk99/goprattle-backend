import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateRequirementDto } from '../dtos/CreateRequirement.dto';
import Requirement from '../models/Requirement';
import logger from '../config/logger';

export class RequirementController {

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const dto = plainToInstance(CreateRequirementDto, req.body);
            const errors = await validate(dto);

            if (errors.length > 0) {
                res.status(400).json({ errors });
                return;
            }

            const requirement = new Requirement({
                ...dto,
                eventDate: new Date(dto.eventDate)
            });

            await requirement.save();
            logger.info(`New requirement created: ${requirement._id}`);

            res.status(201).json(requirement);
        } catch (error: any) {
            logger.error('Error in create requirement', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const requirements = await Requirement.find().sort({ createdAt: -1 });
            res.status(200).json(requirements);
        } catch (error: any) {
            logger.error('Error in get requirements', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
