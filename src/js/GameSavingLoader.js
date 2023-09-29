import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const jsonData = await json(response);
    return new GameSaving(JSON.parse(jsonData));
  }
}
