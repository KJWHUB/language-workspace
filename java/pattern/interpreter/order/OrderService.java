package order;

import javax.management.Notification;
import java.time.LocalDateTime;

public class OrderService() {

    private Notification notification;

    void ShipOrder(Order order) {
        order.setOrderStatus(OrderStatusType.ship);
        order.setShippedAt(LocalDateTime.now());
        notification.OrderNotification(order);
    }

}
