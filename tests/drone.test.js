const drone = require('../js/drone');
const testDrone = new Drone();
test('place drone at position (3,5) facing NORTH', () => {
    drone.place(6,5,'NORTH');
    expect(testDrone.get('x'), toBe(6));
    expect(testDrone.get('y'), toBe(5));
    expect(testDrone.get('f'), toBe('NORTH'));
})