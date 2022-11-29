class MapGenerator {
  canvas = document.querySelector("#map");
  ctx = this.canvas.getContext("2d");

  tileSize = 30;

  constructor() {
    this.generateMap();
  }

  async fetchMap() {
    const res = await fetch("./src/maps/maps.json");
    return await res.json();
  }

  async generateMap() {
    const map = (await this.fetchMap())[0];
    this.setCanvasSize(map.map[0].length * this.tileSize, map.map.length * this.tileSize);
  }

  drawMap() {
    this.ctx.fillRect(0, 0, 200, 200);
  }

  setCanvasSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = width;
    this.canvas.style.height = height;
  }

}

new MapGenerator();