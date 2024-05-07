import detail.Circle;
import detail.Rectangle;
import detail.Shape;
import detail.Triangle;

public class ShapeFactory {
    // detail.Shape 객체를 생성하는 메소드
    public static Shape createShape(String type) {
        if (type.equalsIgnoreCase("circle")) {
            return new Circle();
        } else if (type.equalsIgnoreCase("rectangle")) {
            return new Rectangle();
        } else if (type.equalsIgnoreCase("triangle")) {
            return new Triangle();
        } else {
            throw new IllegalArgumentException("유효하지 않은 도형 타입입니다.");
        }
    }
}
