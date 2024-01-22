
import Drone from '../js/drone.mjs';
const testDrone = new Drone();
console.log(testDrone);
test('place drone at position (3,5) facing NORTH', () => {
    drone.place(6,5,'NORTH');
    expect(testDrone.get('x'), toBe(6));
    expect(testDrone.get('y'), toBe(5));
    expect(testDrone.get('f'), toBe('NORTH'));
})