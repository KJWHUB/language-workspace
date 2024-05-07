package order;

import java.time.LocalDateTime;

public class Order {
    private int orderId;
    private OrderStatusType orderStatus;
    private LocalDateTime shippedAt;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public OrderStatusType getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatusType orderStatus) {
        this.orderStatus = orderStatus;
    }

    public LocalDateTime getShippedAt() {
        return shippedAt;
    }

    public void setShippedAt(LocalDateTime shippedAt) {
        this.shippedAt = shippedAt;
    }
}
