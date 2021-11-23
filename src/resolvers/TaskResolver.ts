import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Task, TaskInput} from "../models/Task";
import { getRepository } from "typeorm";


@Resolver()
export class TaskResolver {

  private taskRepository = getRepository(Task);

  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  @Query(() => Task)
  async getTask(@Arg("data") id: number): Promise<Task> {
    return await this.taskRepository.findOne(id);
  }

  @Mutation(() => Task)
  async createTask(@Arg("data") newTaskData: TaskInput): Promise<Task> {
    const task = this.taskRepository.create(newTaskData);
    return await task.save();
  }
}