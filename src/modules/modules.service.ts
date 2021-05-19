import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Modules } from './entities/module.entity';

@Injectable()
export class ModulesService {
  constructor(@InjectModel(Modules.name) private moduleModel: Model<Modules>) {}

  create(createModuleDto: CreateModuleDto) {
    const newModule = new this.moduleModel(createModuleDto);
    return newModule.save();
  }

  findAll() {
    return this.moduleModel.find().populate('topics').exec();
  }

  findOne(id: string) {
    return this.moduleModel.findById(id).populate('topics').exec();
  }

  update(id: string, updateModuleDto: UpdateModuleDto) {
    return this.moduleModel.findByIdAndUpdate(id, updateModuleDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  remove(id: string) {
    return this.moduleModel.findByIdAndDelete(id, { useFindAndModify: false });
  }
}
