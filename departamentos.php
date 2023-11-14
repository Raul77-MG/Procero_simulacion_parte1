<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Departamento</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<body>
  <div class="container">
    <form name="formulario"> 
      <label>Numero de pisos del edificio</label>
      <div class="col">
        <select name=edificio id="edificio" onchange="seccionar_piso()"> 
          <option value="0" selected>Seleccione... </option>
          <?php
          for ($i = 1; $i <= 10; $i++) {
            echo "<option value='$i'>".$i."</option>";
          } 
          ?> 
        </select>
      </div>
      <br/>

      <div id="ocultable" style="display:none">
        <label>Diseño para el piso nro </label>
        <div class="col">
          <select name=piso id="piso"> 
            <option value="-">-</option>
          </select>
        </div>
        <br/>

        <label>Tipo de construccíon</label>
        <div class="col">
          <select name=tipo id="tipo"> 
            <option value="tipo_1" selected>Vivienda</option>
            <option value="tipo_2">Vivienda + Cochera</option>
            <option value="tipo_3">Vivienda + Tienda</option>
          </select>
        </div>
      </div>
      <br/>

      <!-- <input type="submit" value="Obtener plano" /> -->
      <button type="button" class="btn btn-info btn-lg" onclick="mostrar_plano()">Obtener plano</button>
      <br/><br/><br/>
    </form>

    <div id="mensaje" class="container"></div>

    <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> -->

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Pasarela de pagos</h4>
          </div>
          <div class="modal-body">
            <p>Implementar aqui la pasarela de pago</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>

  <script>
    function seccionar_piso(){ 
      //Mostrar los demas combobox
      var e = document.getElementById("edificio").value;
      if(e == "0"){
        document.getElementById("ocultable").style.display = "none";
      }
      else {
        document.getElementById("ocultable").style.display = "block";
      }

      //Optener numero de pisos del edificio
      var nroPisos = document.formulario.edificio[document.formulario.edificio.selectedIndex].value 
      //Nro de piso seleccionado
      if (nroPisos != 0) { 
          
          document.formulario.piso.length = nroPisos 
          for(i=0;i<=nroPisos;i++){
            var valor = i + 1
            document.formulario.piso.options[i].value=valor 
            document.formulario.piso.options[i].text= "Piso " + valor
          }	
      }else{ 
          //si no hay piso seleccionado
          document.formulario.piso.length = 1 
          document.formulario.piso.options[0].value = "-" 
          document.formulario.piso.options[0].text = "-" 
      } 
      //marco como seleccionada la primera opcion
      document.formulario.piso.options[0].selected = true
    }

    function mostrar_plano(){
      var edificio = document.getElementById("edificio").value;
      var piso = document.getElementById("piso").value;
      var tipo = document.getElementById("tipo").value;

      if(edificio == "0"){
        document.getElementById("mensaje").innerHTML = '<h3>Completar los datos porfavor</h3>';
      }
      else{
        //Tipo de construción
        if (piso == "1"){
          if (tipo == "tipo_1") {
            document.getElementById("mensaje").innerHTML = '<img src="https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg" width="300px" height="300px">';
          }
          if (tipo == "tipo_2") {
            document.getElementById("mensaje").innerHTML = '<img src="https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg" width="300px" height="300px">';
          }
            if (tipo == "tipo_3") {
            document.getElementById("mensaje").innerHTML = '<img src="https://padronel.files.wordpress.com/2021/03/imagen-de-la-caldera.jpg" width="300px" height="300px">';
          }
        }
        else{
          document.getElementById("mensaje").innerHTML = '';
          $('#myModal').modal('show');
        }
      }
    }
  </script>
</body>
</html>
