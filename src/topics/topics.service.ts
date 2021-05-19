import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topics } from './entities/topic.entity';

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topics.name) private topicModel: Model<Topics>) {}
  create(createTopicDto: CreateTopicDto) {
    const newTopic = new this.topicModel(createTopicDto);
    return newTopic.save();
  }

  findAll() {
    return this.topicModel.find().exec();
  }

  findOne(id: number) {
    return this.topicModel.findById(id);
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return this.topicModel.findByIdAndUpdate(id, updateTopicDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  remove(id: number) {
    return this.topicModel.findByIdAndDelete(id, { useFindAndModify: false });
  }
}
