/** Chequetor 
 * 
 * Crear y asignar cheques a clientes registrados y clientes eventatuales
 * Llevar el control de cheques por estados
 *      - Por emitir
 *      - Emitido
 *      - Anulado
 *      - Cobrado
 */

// import { modCliente }  from './modelos.js';
// import './modelos.js';
import {dataMotor} from './dataMotor.js';
import {cargarVista} from './vista.js';

const motor = new dataMotor( {base:'chk', driver:'dbLocal'} );
global.motor = motor;

motor.autoContenedor = false;

cargarVista('inicio', ".publi");
