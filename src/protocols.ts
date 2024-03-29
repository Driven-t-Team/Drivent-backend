export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

//Regra de Negócio
export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  error?: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type TicketTypeId = {
  ticketTypeId: number;
};

export type CreateTicketParams = TicketTypeId;

export type CreatePayment = {
  ticketId: number;
  cardData: {
    issuer: string;
    number: number;
    name: string;
    expirationDate: Date;
    cvv: number;
  };
};

export type CodeSchema = {
  code: string;
};

export type ActivityType = {
  id: number;
  name: string;
  schedules: string;
  capacity: number;
  activityDate: string;
  place: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Activity = {
  id: number;
  activityTypeId: number;
  enrollmentId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ActivityTypeId = {
  activityTypeId: number;
};
