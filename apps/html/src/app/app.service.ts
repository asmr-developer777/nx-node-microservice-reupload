import { Todo } from '@my-org/todos';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getData() {
    try {
      const { data } = await axios.get<Todo[]>('http://localhost:3333');
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
