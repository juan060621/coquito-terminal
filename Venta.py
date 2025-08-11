class Venta:
    def __init__(self, id: int, cantidades: int, pagado: bool, monto: float):
        self.id = id
        self.cantidades = cantidades
        self.pagado = pagado
        self.monto = monto