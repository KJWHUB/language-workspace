import detail.Shape;

public class Main {
    public static void main(String[] args) {
        // 팩토리를 사용하여 객체 생성
        Shape circle = ShapeFactory.createShape("circle");
        Shape rectangle = ShapeFactory.createShape("rectangle");
        Shape triangle = ShapeFactory.createShape("triangle");

        // 객체 사용
        circle.draw();     // 원을 그립니다.
        rectangle.draw();  // 사각형을 그립니다.
        triangle.draw();   // 삼각형을 그립니다.
    }
}
