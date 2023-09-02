import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getTicketStatusStyle' })

/**
 * used to set the decision label based on the decision id
 * so the component will send the id then it will set the label
*/
export class DecisionStatusStylePipe implements PipeTransform {
  constructor(){

  }
  transform(statusId: number) {

    if(statusId){

      if (statusId == 2) {
        return 'badge bg-success text-white font-weight-bold';
      }

      if (statusId == 1) {
        return 'badge bg-info text-white font-weight-bold';
      }

      if (statusId == 4) {
        return 'badge bg-danger text-white font-weight-bold';
      }


    //   if (statusId == DecisionStatus.ReturnToSurveyor) {
    //     return  'badge badge-info mx-1';
    //   }

    //   if (statusId == DecisionStatus.UnderProgress) {
    //     return  'badge badge-primary mx-1';
    //   }

      if (statusId == 3) {
        return  'badge badge-warning text-white font-weight-bold';
      }
    }

    return "";
  }
}
