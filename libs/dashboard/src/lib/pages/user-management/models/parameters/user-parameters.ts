import { PagingParameters } from "@e-proc/core";

export class UserParameters extends PagingParameters {
    UserName?: string | null ;
    Email?: string | null ;
    GroupId?: number | null;
    DepartmentId?: number | null;
}

