function Persona(_nombre, _apellido){
    let nombre = _nombre;
    let apellido = _apellido;
    let hobbie ="sin hobbie";
    
    this.setHobbie = function(_hobbie){
        hobbie = _hobbie;
    }

    this.getHobbie = function(){
        return hobbie;
    }

    this.nombrar = function(){
        return "Esta estudiante es : " + nombre  + " " +  apellido;
    }
    this.nombrarInv = function(){
        return apellido + " " +nombre ;
    }
}