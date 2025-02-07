export interface Pagination<T extends  Record<string, any>>{
  contents: Array<T>,
  hasNext:boolean,
  currentPage:number,
  total:number
  totalPages:number
}
export interface IProduct extends Pagination<IProductResponse>{}

export interface IProductResponse {
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number,
  orders:Array<string>
}
