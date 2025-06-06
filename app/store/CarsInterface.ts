export interface Root {
  cars: Cars
  days_calculation: DaysCalculation
}

export interface Cars {
  Avis: Avi[]
  Budget: Budget[]
  Payless: Payless[]
}

export interface Avi {
  brand: number
  name: string
  name_details: string
  code: string
  vehicle_group: string
  air_conditioner: boolean
  transmission_type: string
  vehicle_type: string
  vehicle_class: string
  fuel_type?: string
  drive_type: any
  door_count?: string
  picture_url: PictureUrl
  stars: number
  features: Features
  tags: Tag[]
  rates: Rates
}

export interface PictureUrl {
  normal?: string
  featured: string
}

export interface Features {
  doors: string
  seats: string
  air_conditioner: boolean
  transmition: string
  fuel_type: string
  large_suitcase: number
  small_suitcase: number
  thumb: string
  fleet_group_id?: number
  fleet_category_id: number
  fleet_original_category_id: number
  category: string
}

export interface Tag {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon?: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Rates {
  H8: H8
  F2?: F2
  CL?: Cl
}

export interface H8 {
  rate_data: RateData
  inclusions_meta: InclusionsMeta
  discount_numbers: any
  pricing: Pricing
  tags: Tag2[]
  id: number
}

export interface RateData {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions
  step_one: boolean
}

export interface Inclusions {
  name: any[]
  description: any[]
}

export interface InclusionsMeta {
  um: Um
  ldwc: Ldwc
  tplc: Tplc
  as: As
  lstax: Lstax
  fad: Fad
  safetysecure: Safetysecure
  "basic-rsn": BasicRsn
  mod: Mod
}

export interface Um {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tplc {
  name: string
  description: string
  visible_voucher: boolean
}

export interface As {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing {
  USD: Usd
  COP: Cop
}

export interface Usd {
  total_charge: TotalCharge
}

export interface TotalCharge {
  base: Base
  discounts: any
  total: Total
}

export interface Base {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp
  pd: Pd
}

export interface Pp {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp2
  pd: Pd2
}

export interface Pp2 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd2 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop {
  total_charge: TotalCharge2
}

export interface TotalCharge2 {
  base: Base2
  discounts: any
  total: Total2
}

export interface Base2 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp3
  pd: Pd3
}

export interface Pp3 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd3 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total2 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp4
  pd: Pd4
}

export interface Pp4 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd4 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag2 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface F2 {
  rate_data: RateData2
  inclusions_meta: InclusionsMeta2
  discount_numbers: any
  pricing: Pricing2
  tags: Tag3[]
  id: number
}

export interface RateData2 {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions2
  step_one: boolean
}

export interface Inclusions2 {
  name: any[]
  description: any[]
}

export interface InclusionsMeta2 {
  um: Um2
  ldwc: Ldwc2
  tplc: Tplc2
  as: As2
  lstax: Lstax2
  tog: Tog
  fad: Fad2
  safetysecure: Safetysecure2
  "basic-rsn": BasicRsn2
  mod: Mod2
}

export interface Um2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tplc2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface As2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tog {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing2 {
  USD: Usd2
  COP: Cop2
}

export interface Usd2 {
  total_charge: TotalCharge3
}

export interface TotalCharge3 {
  base: Base3
  discounts: any
  total: Total3
}

export interface Base3 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp5
  pd: Pd5
}

export interface Pp5 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd5 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total3 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp6
  pd: Pd6
}

export interface Pp6 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd6 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop2 {
  total_charge: TotalCharge4
}

export interface TotalCharge4 {
  base: Base4
  discounts: any
  total: Total4
}

export interface Base4 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp7
  pd: Pd7
}

export interface Pp7 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd7 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total4 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp8
  pd: Pd8
}

export interface Pp8 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd8 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag3 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Cl {
  rate_data: RateData3
  inclusions_meta: InclusionsMeta3
  discount_numbers: any
  pricing: Pricing3
  tags: Tag4[]
  id: number
}

export interface RateData3 {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions3
  step_one: boolean
}

export interface Inclusions3 {
  name: any[]
  description: any[]
}

export interface InclusionsMeta3 {
  um: Um3
  ldwc: Ldwc3
  lstax: Lstax3
  fad: Fad3
  safetysecure: Safetysecure3
  "basic-rsn": BasicRsn3
  mod: Mod3
}

export interface Um3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing3 {
  USD: Usd3
  COP: Cop3
}

export interface Usd3 {
  total_charge: TotalCharge5
}

export interface TotalCharge5 {
  base: Base5
  discounts: any
  total: Total5
}

export interface Base5 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp9
  pd: Pd9
}

export interface Pp9 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd9 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total5 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp10
  pd: Pd10
}

export interface Pp10 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd10 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop3 {
  total_charge: TotalCharge6
}

export interface TotalCharge6 {
  base: Base6
  discounts: any
  total: Total6
}

export interface Base6 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp11
  pd: Pd11
}

export interface Pp11 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd11 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total6 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp12
  pd: Pd12
}

export interface Pp12 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd12 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag4 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Budget {
  brand: number
  name: string
  name_details: string
  code: string
  vehicle_group: string
  air_conditioner: boolean
  transmission_type: string
  vehicle_type: string
  vehicle_class: string
  fuel_type?: string
  drive_type: any
  door_count?: string
  picture_url: PictureUrl2
  stars: number
  features: Features2
  tags?: Tag5[]
  rates: Rates2
}

export interface PictureUrl2 {
  normal?: string
  featured?: string
}

export interface Features2 {
  doors: any
  seats: any
  air_conditioner: boolean
  transmition: string
  fuel_type: string
  large_suitcase?: number
  small_suitcase?: number
  thumb: string
  fleet_group_id?: number
  fleet_category_id?: number
  fleet_original_category_id?: number
  category: string
}

export interface Tag5 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon?: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Rates2 {
  LQ: Lq
  BZ?: Bz
}

export interface Lq {
  rate_data: RateData4
  inclusions_meta: InclusionsMeta4
  discount_numbers: any
  pricing: Pricing4
  tags: Tag6[]
  id: number
}

export interface RateData4 {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions4
  step_one: boolean
}

export interface Inclusions4 {
  name: any[]
  description: any[]
}

export interface InclusionsMeta4 {
  um: Um4
  ldwc: Ldwc4
  tplc: Tplc3
  as: As3
  lstax: Lstax4
  fad: Fad4
  safetysecure: Safetysecure4
  "basic-rsn": BasicRsn4
  mod: Mod4
}

export interface Um4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tplc3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface As3 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing4 {
  USD: Usd4
  COP: Cop4
}

export interface Usd4 {
  total_charge: TotalCharge7
}

export interface TotalCharge7 {
  base: Base7
  discounts: any
  total: Total7
}

export interface Base7 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp13
  pd: Pd13
}

export interface Pp13 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd13 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total7 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp14
  pd: Pd14
}

export interface Pp14 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd14 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop4 {
  total_charge: TotalCharge8
}

export interface TotalCharge8 {
  base: Base8
  discounts: any
  total: Total8
}

export interface Base8 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp15
  pd: Pd15
}

export interface Pp15 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd15 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total8 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp16
  pd: Pd16
}

export interface Pp16 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd16 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag6 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Bz {
  rate_data: RateData5
  inclusions_meta: InclusionsMeta5
  discount_numbers: any
  pricing: Pricing5
  tags: Tag7[]
  id: number
}

export interface RateData5 {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions5
  step_one: boolean
}

export interface Inclusions5 {
  name: any[]
  description: any[]
}

export interface InclusionsMeta5 {
  um: Um5
  ldwc: Ldwc5
  tplc: Tplc4
  as: As4
  lstax: Lstax5
  tog: Tog2
  fad: Fad5
  safetysecure: Safetysecure5
  "basic-rsn": BasicRsn5
  mod: Mod5
}

export interface Um5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tplc4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface As4 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tog2 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing5 {
  USD: Usd5
  COP: Cop5
}

export interface Usd5 {
  total_charge: TotalCharge9
}

export interface TotalCharge9 {
  base: Base9
  discounts: any
  total: Total9
}

export interface Base9 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp17
  pd: Pd17
}

export interface Pp17 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd17 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total9 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp18
  pd: Pd18
}

export interface Pp18 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd18 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop5 {
  total_charge: TotalCharge10
}

export interface TotalCharge10 {
  base: Base10
  discounts: any
  total: Total10
}

export interface Base10 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp19
  pd: Pd19
}

export interface Pp19 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd19 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total10 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp20
  pd: Pd20
}

export interface Pp20 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd20 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag7 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface Payless {
  brand: number
  name: string
  name_details: string
  code: string
  vehicle_group: string
  air_conditioner: boolean
  transmission_type: string
  vehicle_type: string
  vehicle_class: string
  fuel_type: any
  drive_type: any
  door_count: any
  picture_url: PictureUrl3
  stars: number
  features: Features3
  tags: any[]
  rates: Rates3
}

export interface PictureUrl3 {
  normal?: string
  featured: string
}

export interface Features3 {
  doors: string
  seats: string
  air_conditioner: boolean
  transmition: string
  fuel_type: string
  large_suitcase: number
  small_suitcase: number
  thumb: string
  fleet_group_id: number
  fleet_category_id: number
  fleet_original_category_id: number
  category: string
}

export interface Rates3 {
  "01": N01
}

export interface N01 {
  rate_data: RateData6
  inclusions_meta: InclusionsMeta6
  discount_numbers: any
  pricing: Pricing6
  tags: Tag8[]
  id: number
}

export interface RateData6 {
  name: string
  net_rate: boolean
  rate_type: string
  inclusions: Inclusions6
  step_one: boolean
}

export interface Inclusions6 {
  name: any[]
  description: any[]
}

export interface InclusionsMeta6 {
  um: Um6
  ldwc: Ldwc6
  tplc: Tplc5
  as: As5
  lstax: Lstax6
  fad: Fad6
  safetysecure: Safetysecure6
  "basic-rsn": BasicRsn6
  mod: Mod6
}

export interface Um6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Ldwc6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Tplc5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface As5 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Lstax6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Fad6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Safetysecure6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface BasicRsn6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Mod6 {
  name: string
  description: string
  visible_voucher: boolean
}

export interface Pricing6 {
  USD: Usd6
  COP: Cop6
}

export interface Usd6 {
  total_charge: TotalCharge11
}

export interface TotalCharge11 {
  base: Base11
  discounts: any
  total: Total11
}

export interface Base11 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp21
  pd: Pd21
}

export interface Pp21 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd21 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total11 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp22
  pd: Pd22
}

export interface Pp22 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd22 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Cop6 {
  total_charge: TotalCharge12
}

export interface TotalCharge12 {
  base: Base12
  discounts: any
  total: Total12
}

export interface Base12 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp23
  pd: Pd23
}

export interface Pp23 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd23 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Total12 {
  total_amount: string
  estimated_total_amount: string
  estimated_total_amount_without_equipment_amount: string
  pp: Pp24
  pd: Pd24
}

export interface Pp24 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Pd24 {
  prepaid_amount: string
  paid_on_destination_amount: string
}

export interface Tag8 {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: any
  placeholder: string
  priority: number
}

export interface DaysCalculation {
  days: number
  calculation: Calculation
}

export interface Calculation {
  hours: number
  minutes: number
}
