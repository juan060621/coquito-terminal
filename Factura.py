class Factura:
    def __init__(self, id: int, subtotal: float, iva: float, total: float):
        self.id = id
        self.subtotal = subtotal
        self.iva = iva
        self.total = total