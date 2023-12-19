class StubProductClient {
  async fetchItems() {
    return [
      { item: '🍞', available: true },
      { item: '🫐', available: false },
      { item: '🥨', available: true },
    ];
  }
}
module.exports = StubProductClient;
