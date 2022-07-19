export interface Drivers {
  id: string;
  carImage: string;
  name: {
    ruName: string;
    enName: string;
  };
  carName: string;
  language: {
    ruLanguage: string[];
    enLanguage: string[];
  };
  passengerSeats: number;
  luggageAmount: number;
  fuel: {
    ruFuel: "Бензин" | "Дизель";
    enFuel: "Gasoline" | "Diesel";
  };
  freeWiFi: boolean;
  animalsTransportation: boolean;
}
