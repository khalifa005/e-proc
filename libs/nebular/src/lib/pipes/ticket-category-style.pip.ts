import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getTicketCategoryStyle' })

/**
 * used to set the decision label based on the decision id
 * so the component will send the id then it will set the label
*/
export class DecisionCategoryStylePipe implements PipeTransform {
  constructor(){

  }
  transform(statusId: number) {

    if(statusId){

        return 'badge badge-primary mx-1';
        // return 'badge badge-info mx-1';

    //   if (statusId == 1) {
    //     return 'badge badge-info mx-1';
    //     // return 'badge bg-success text-white font-weight-bold';
    //   }

    //   if (statusId == 2) {
    //     return 'badge badge-success mx-1';
    //     return 'badge bg-info text-white font-weight-bold';
    //   }


    //   if (statusId == DecisionStatus.ReturnToSurveyor) {
    //     return  'badge badge-info mx-1';
    //   }

    //   if (statusId == DecisionStatus.UnderProgress) {
    //     return  'badge badge-primary mx-1';
    //   }

    //   if (statusId == DecisionStatus.ReturnToPainterModify) {
    //     return  'badge badge-warning mx-1';
    //   }
    }

    return "";
  }
}