import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  findAll() {
    return this.courseModel.find().exec();
  }

  findOne(id: string) {
    return this.courseModel.findById(id).exec();
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, updateCourseDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  remove(id: string) {
    return this.courseModel.findByIdAndDelete(id, { useFindAndModify: false });
  }
}
