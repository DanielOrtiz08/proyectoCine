class Persona {
    public idPersona: number;
    public numeroDocumento: number;
    public nombresPersona: string;
    public apellidosPersona: string;              // apellidos_persona
    public fechaNacimientoPersona: Date;          // fecha_nacimiento_persona
    public idCargo: number;                       // id_cargo
    public idUbicacion: number;                   // id_ubicacion
    public idPlan: number;                        // id_plan
    public celular: string;                       // celular
    public emailPersona: string;                  // email_persona
    public contraseniaPersona: string;  

    constructor(
        idPersona: number,
        numeroDocumento: number,
        nombresPersona: string,
        apellidosPersona: string,
        fechaNacimientoPersona: Date,
        idCargo: number,
        idUbicacion: number,
        idPlan: number,
        celular: string,
        emailPersona: string,
        contraseniaPersona: string
    ) {
        this.idPersona = idPersona;
        this.numeroDocumento=numeroDocumento;
        this.nombresPersona = nombresPersona;
        this.apellidosPersona = apellidosPersona;
        this.fechaNacimientoPersona = fechaNacimientoPersona;
        this.idCargo = idCargo;
        this.idUbicacion = idUbicacion;
        this.idPlan = idPlan;
        this.celular = celular;
        this.emailPersona = emailPersona;
        this.contraseniaPersona = contraseniaPersona;
    }
}
export default Persona;