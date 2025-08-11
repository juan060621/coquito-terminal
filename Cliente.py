import Persona

class Cliente(Persona):
    def __init__(self, id: int, nombre: str, documento_identidad: str, telefono: str, id_direccion: int):
        super().__init__(id, nombre, documento_identidad, telefono)
        self.id_direccion = id_direccion