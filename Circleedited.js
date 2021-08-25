import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    getRadius(){
      return radius;
    },
    getX(){
      return center[0];
    },
    getY(){
      return center[1];
    },
    includes(Point) {
      if ((Point.getX-Circle.getX) * (Point.getX-Circle.getX) + (Point.getY-Circle.getY) * (Point.getY-Circle.getY) <= Circle.getRadius * Circle.getRadius){
        return true;
      }
      else {

        return false;
      }
  }
}