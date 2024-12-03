export interface work {
    workexp: workexp
    roles: roles
}

export interface workexp {
    LEAD_ENGINEER: workexpDetails;
    SENIOR_ENGINEER: workexpDetails;
    IT_ANALYST: workexpDetails;
}

export interface workexpDetails {
    designation: string;
    company: string;
    start: string;
    end: string;
}

export interface roles {
    LEAD_ENGINEER: rolesDetails;
    SENIOR_ENGINEER: rolesDetails;
    IT_ANALYST: rolesDetails;
}

export interface rolesDetails {
    designation: string;
    responsibilities: string;
    start: string;
    end: string;
}