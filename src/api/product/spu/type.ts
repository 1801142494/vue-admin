// 服务器全部接口返回的数据
export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}

// spu数据ts类型
export interface SpuData{
    id?:number,
    spuName:string,
    tmId:number|string,
    description:string,
    category3Id:number|string,
    spuSaleAttrList:null|SaleAttr[],
    spuImageList:null|SpuImg[]
}
// 数组：元素都是spu数据类型
export type Records=SpuData[]
// 定义获取已有spu接口返回的ts类型
export interface HasSpuResponseData extends ResponseData{
    data:{
        records:Records,
        total:number,
        current:number,
        size:number,
        searchCount:boolean,
        pages:number,
    }
}
// 品牌数据ts类型
export interface Trademark{
    id:number,
    tmName:string,
    logoUrl:string
}
// 品牌接口返回的数据ts类型
export interface AllTrademark extends ResponseData{
    data:Trademark[]
}
// 商品图片ts类型
export interface SpuImg{
    id?:number,
    createTime?:string,
    updateTime?:string,
    spuId?:number,
    imgName?:string,
    imgUrl?:string,
    name?:string,
    url?:string,
}
// 已有spu返回的图片墙数据ts类型
export interface SpuHasImg extends ResponseData{
    data:SpuImg[]
}

// 已有销售属性对象ts类型
export interface SaleAttrValue{
    id?:number,
    createTime?:null,
    updateTime?:null,
    spuId?:number,
    baseSaleAttrId:number|string,
    saleAttrValueName:string,
    saleAttrName?:string,
    isChecked?:null
}
// 存储已有的销售属性值数据类型
export type spuSaleAttrValueList =SaleAttrValue[]
//销售属性对象ts类型
export interface SaleAttr{
    id?:number,
    createTime?:null,
    updateTime?:null,
    spuId?:number,
    baseSaleAttrId:number|string,
    saleAttrName:string,
    spuSaleAttrValueList:spuSaleAttrValueList,
    flag?:boolean,
    saleAttrValue?:string
}
//spu销售属性接口返回的ts数据类型
export interface SaleAttrResponseData extends ResponseData{
    data:SaleAttr[]
}

//已有的全部SPU的返回数据ts类型
export interface HasSaleAttr{
    id:number,
    name:string
}
// 已有的全部SPU接口返回数据的ts类型
export interface HasSaleAttrResponseData extends ResponseData{
    data:HasSaleAttr[]
}
