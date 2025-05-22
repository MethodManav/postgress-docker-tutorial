import { Model } from 'mongoose';
import { ServiceType } from './../Types/ServiceType';

export class BaseService<T extends Document> implements ServiceType<T> {
    protected model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    // You should define the correct type for resource, e.g. T or Document
    async create(resource: T): Promise<T> {
        return this.model.create(resource);
    }
    async update(resource: Partial<T>): Promise<T | null> {
        return this.model.findByIdAndUpdate(resource);
    }
    async delete(id: string): Promise<T | null> {
        return this.model.findByIdAndDelete(id);
    }
    async getAll(): Promise<T[]> {
        return this.model.find();
    }
    async getById(id: string): Promise<T | null> {
        return this.model.findById(id);
    }
    async getByEmail(email: string): Promise<T | null> {
        return this.model.findOne({ email });
    }
}