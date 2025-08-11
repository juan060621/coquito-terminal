class DetalleVenta:
    def __init__(self, id_orden: int, producto: str, cantidad: int, precio: float, costo: float, total: float):
        self.id_orden = id_orden
        self.producto = producto
        self.cantidad = cantidad
        self.precio = precio
        self.costo = costo
        self.total = total