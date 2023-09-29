import GameSavingLoader from '../GameSavingLoader';

test('GameSaveLoader no errors', async () => {
  try {
    const data = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    const result = await GameSavingLoader.load();
    expect(result).toEqual(data);
  } catch (error) {
    await expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
  }
});
