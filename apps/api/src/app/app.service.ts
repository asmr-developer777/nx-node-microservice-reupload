import { Todo } from '@my-org/todos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): Todo[] {
    return [
      { message: 'Take out trash', done: false },
      { message: 'Continue using Nx', done: true },
    ];
  }
}
