export class CalendarDateHelper {
    /**
     * Función que retorna un rango de fechas para usar en los calendarios
     * @returns
     */
    static getCurrenDateMouth(): any {
      const fechaIni = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
      )
        .toISOString()
        .slice(0, 10);
      const fechaFin = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      )
        .toISOString()
        .slice(0, 10);
      return {
        fechaIni,
        fechaFin,
      };
    }
  
    /**
     * Función que retorma el tiempo de milisegundos a horas o minutos
     * @param mil
     * @returns
     */
    static convertMilToHours(mil: number): number {
      if (mil < 3600000) {
        const milisegundosEnUnMinuto = 60000;
        const minutes = mil / milisegundosEnUnMinuto;
        return minutes;
      }
      const milisegundosEnUnaHora = 3600000;
      const hours = mil / milisegundosEnUnaHora;
      return hours;
    }
  
    /**
     * Funcion que retorna el día actual
     * @returns
     */
    static getCurrenDay() {
      const fechaActual = new Date().toISOString().slice(0, 10);
      return {
        fechaActual,
      };
    }
  
    /**
     * Funcion que retorna la fecha actual complete
     * @returns
     */
    static getFullTimeCurrent(): string {
      const fechaActual = new Date();
      const año = fechaActual.getFullYear();
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const horas = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
      return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    }
  
    /**
     * Función que devuelve el tiempo transcurrido entre dos fechas (Hace 34min)
     * @param date
     * @returns
     */
    static getTimeAgo(date: number | string): string {
      const fromDate = new Date(date);
      const currenDate = new Date();
      const diferencia = currenDate.getTime() - fromDate.getTime();
  
      const segundos = Math.floor(diferencia / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);
      const dias = Math.floor(horas / 24);
  
      if (dias > 0) {
        return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
      } else if (horas > 0) {
        return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
      } else if (minutos > 0) {
        return `Hace ${minutos} min${minutos > 1 ? 's' : ''}`;
      } else {
        return `Hace ${segundos} seg${segundos !== 1 ? 's' : ''}`;
      }
    }
  }
  