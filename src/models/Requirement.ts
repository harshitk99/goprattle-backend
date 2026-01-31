import mongoose, { Schema, Document } from 'mongoose';

export interface IRequirement extends Document {
    eventName: string;
    eventType: string;
    eventDate: Date;
    location: string;
    venue?: string;
    requiredRole: 'Planner' | 'Performer' | 'Crew';
    roleDetails: any;
    createdAt: Date;
}

const RequirementSchema: Schema = new Schema({
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    venue: { type: String },
    requiredRole: {
        type: String,
        required: true,
        enum: ['Planner', 'Performer', 'Crew']
    },
    roleDetails: { type: Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IRequirement>('Requirement', RequirementSchema);
