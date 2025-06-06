export interface Root {
  cars: Cars;
  days_calculation: any; // Ajustar según tu lógica si es necesario
}

export interface Cars {
  Avis: Avi[];
  Budget: Budget[];
  Payless: Payless[];
}

// Reutilizamos la misma estructura para las tres compañías
export type Avi = Car;
export type Budget = Car;
export type Payless = Car;

export interface Car {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type?: string | null;
  drive_type?: any | null;
  door_count?: string | null;
  picture_url: PictureUrl;
  stars: number;
  features: Features;
  tags: Tag[];
  rates: Rates;
}

export interface PictureUrl {
  normal: string | null;
  featured: string | null;
}

export interface Features {
  doors: string;
  seats: string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number;
  small_suitcase: number;
  thumb: string | null;
  fleet_group_id: number;
  fleet_category_id: number;
  fleet_original_category_id: number;
  category: string;
}

export interface Tag {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: string;
  color: string;
  remote_url: string | null;
  placeholder: string;
  priority: number;
}

export interface Rates {
  [rateCode: string]: RateData;
}

export interface RateData {
  rate_data: {
    name: string;
    net_rate: boolean;
    rate_type: string;
    inclusions: {
      name: string[];
      description: string[];
    };
    step_one: boolean;
  };
  inclusions_meta: {
    [key: string]: {
      name: string;
      description: string;
      visible_voucher: boolean;
    };
  };
  discount_numbers: any | null;
  pricing: {
    [currency: string]: {
      total_charge: {
        base: AmountDetails;
        discounts: any | null;
        total: AmountDetails;
      };
    };
  };
  tags: Tag[];
  id: number;
}

export interface AmountDetails {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: {
    prepaid_amount: string;
    paid_on_destination_amount: string;
  };
  pd: {
    prepaid_amount: string;
    paid_on_destination_amount: string;
  };
}
