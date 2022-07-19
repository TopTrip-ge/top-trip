type EnFuel = "Gasoline" | "Diesel";
type RuFuel = "Бензин" | "Дизель";

export interface Driver {
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
    ruFuel: RuFuel;
    enFuel: EnFuel;
  };
  freeWiFi: boolean;
  animalsTransportation: boolean;
}
