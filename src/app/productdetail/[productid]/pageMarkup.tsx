
import Link from "next/link";
import ImageViewer from "@/components/ImageViewer";
import AddToShoppingCartButton from "@/components/AddToShoppingCartButton";
import SendMesssageButton from "@/components/SendMesssageButton";
import DistributorCurrencyCode from "@/components/DistributorCurrencyCode";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
  const images = [];

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo2) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo2}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo3) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo3}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }


  const distributorCurrencyCode = '';
  return (
    /* Start of NextJs Page Layout */<>
      <div className="w-full">
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="relative w-full">
            <div id="ProductDetailContainer" className="w-full">

              <div className="w-full" style={{ minHeight: '100vh' }}>
                <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start" style={{ opacity: '1' }}>
                  <div className="col-span-5 grid grid-cols-2 gap-2.5" style={{}}>
                    <div className="px-0 py-0 w-full col-span-2" data-internal-code="Default Container">
                      <ImageViewer images={images} className="">
                      </ImageViewer>
                    </div>
                    <div className="px-0 py-0 w-full col-span-2">
                      <div className="shadow-sm">
                        <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6">
                          <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
                            Product Details
                          </h2>
                          <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4">
                          </div>
                        </header>
                        <div style={{ opacity: '1', height: 'auto' }} className="">
                          <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="pb-7 mb-7 border-b border-gray-300">
                      <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName} {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}
                      </h2>
                      <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory1?.find((o: any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog1)?.Display}
                      </p>
                      <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory2?.find((o: any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog2)?.Display}
                      </p>
                      <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory3?.find((o: any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog3)?.Display}
                      </p>
                      <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftProductType?.find((o: any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.ProductType)?.Display}
                      </p>
                      <div className="flex items-center mt-8">
                        <div className="flex items-center">
                          {dataModel.responseData_GetAppForm9787_SFTProduct.IsVisiblePrice_30951 == 1 && (
                            <div className="flex items-center">
                              <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-3xl pr-2 rtl:pl-2 md:pr-0 rtl:md:pl-0 lg:pr-2 rtl:lg:pl-2 2xl:pr-0 rtl:2xl:pl-0">
                                <DistributorCurrencyCode /> ${(dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 || 0).toFixed(2)}
                              </div>
                              <span ng-if="dataModel.currentFormData.DictOneToOneFields['PriceUnit']" className="font-segoe text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl pl-2 rtl:pr-2">
                                / {dataModel.responseData_GetAppForm9787_SFTProduct.PriceUnit || 'Unit'}
                              </span>
                            </div>
                          )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.IsVisiblePrice_30951 != 1 && (
                            <div className="font-segoe text-gray-600 text-sm md:text-base text-red-500">
                              Please contact distributor for unit price.
                            </div>
                          )}
                        </div>
                      </div>
                      {(dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null) && (
                        <div className="flex items-center mt-8 text-gray-600" style={{ columnGap: '20px' }}>
                          <div className="text-sm pr-2 md:pr-0 rtl:md:pl-0 lg:pr-2 rtl:lg:pl-2 2xl:pr-0 rtl:2xl:pl-0">
                            {dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 || 0} In Stock
                          </div>
                          <div className="text-sm pr-2 md:pr-0 rtl:md:pl-0 lg:pr-2 rtl:lg:pl-2 2xl:pr-0 rtl:2xl:pl-0">
                            <span className="pr-2">
                              Deliver Option:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 == 1 && (
                              <span className="">
                                Only pick up
                              </span>
                            )}
                            {dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 == 2 && (
                              <span className="">
                                Pick up or delivery
                              </span>
                            )}
                            {!dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 && (
                              <span className="">
                                Not available
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {(dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null)
                      && dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 > 0
                      && dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 > 0
                      && dataModel.responseData_GetAppForm9787_SFTProduct.IsPublished_30841 == 1
                      && dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 == 1 &&
                      (
                        <div className="flex items-center gap-x-4 md:pr-32 rtl:md:pl-32 lg:pr-12 rtl:lg:pl-12 2xl:pr-32 rtl:2xl:pl-32 3xl:pr-48 rtl:3xl:pl-48 border-b border-gray-300 py-8">
                          <div className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400" style={{ backgroundColor: '#54ac5b', borderRadius: '24px', maxWidth: '250px' }}>
                            <AddToShoppingCartButton cartitem={dataModel.cartItem} className="">
                            </AddToShoppingCartButton>
                          </div>
                        </div>
                      )}
                    {dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null
                      &&
                      !(dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 > 0
                        && dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 > 0
                        && dataModel.responseData_GetAppForm9787_SFTProduct.IsPublished_30841 == 1
                        && dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 == 1
                      ) &&
                      (
                        <div className="gap-x-4 pt-1 py-8 border-b border-gray-300">
                          {/* <div className="text-red-500 flex items-center pb-2">
                            This Product Is Currently Unavailable
                          </div> */}
                          <div className="relative submenu-wrapper cursor-pointer py-2">
                            <SendMesssageButton productid={dataModel.responseData_GetAppForm9787_SFTProduct.ProductId} productname={dataModel.responseData_GetAppForm9787_SFTProduct.ProductName}>
                              <button className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400" style={{ backgroundColor: '#54ac5b', borderRadius: '24px', maxWidth: '250px' }}>
                                <span className="py-2 3xl:px-8">
                                  <i className="fa fa-phone" style={{ marginRight: '5px' }}>
                                  </i>
                                  Get a Quote
                                </span>
                              </button>
                            </SendMesssageButton>
                          </div>
                        </div>
                      )}
                    <div className="py-6">
                      <ul className="text-sm space-y-5 pb-1">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              Product Code:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              Product Name:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Brand && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              Brand:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftBrand?.find((o: any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Brand)?.Display}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Width && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Width___30390 || 'Width'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Width}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Length && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Length___30391 || 'Length'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Length}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Diameter && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Diameter___30392 || 'Diameter'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Diameter}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.PlateDiameter && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.PlateDiameter___30393 || 'Plate Diameter'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.PlateDiameter}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Dimension && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Dimension___30394 || 'Dimension'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Dimension}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Space && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Space___30395 || 'Space'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Space}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Density && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Density___30396 || 'Density'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Density}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Color && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Color___30397 || 'Color'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Color}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.CrossSectionArea && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.CrossSectionArea___30399 || 'Cross Section Area'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.CrossSectionArea}
                          </li>
                        )}
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Weight && (
                          <li className="">
                            <span className="font-semibold text-heading inline-block pr-2">
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DynamicLabel?.Weight___30398 || 'Weight'}:
                            </span>
                            {dataModel.responseData_GetAppForm9787_SFTProduct.Weight}
                          </li>
                        )}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {
              dataModel.responseData_RelatedProducts?.length > 0 && (
                <>
                  <div className="w-full">
                    <div className="flex items-center mb-7" style={{ columnGap: '10px' }}>
                      <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
                        Related Products
                      </h2>
                      <div className="hidden lg:block" style={{ flex: '1 1 auto' }}>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                      {/* StatementBegin_StartLoop: uUbsdC9128 */}
                      {
                        dataModel.responseData_RelatedProducts?.filter && dataModel.responseData_RelatedProducts?.filter((loopItemObj: any, index: any) => loopItemObj.ProductId != dataModel.params?.productid_id)
                          .slice(0, 5)
                          .map((loopItemObj: any, index: any) => (
                            /* StatementEnd_StartLoop */
                            <Link key={index} href={`/productdetail/${(loopItemObj.ProductName || '').replaceAll('#', '').replaceAll('/', '')}-${loopItemObj.ProductId}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" data-internal-code="Loop Content Container">
                              <div className="flex mb-3 md:mb-3.5">
                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }} className="">
                                  <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }} className="">
                                    <Image width={800} height={600} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} className="object-cover" />
                                  </span>
                                  <Image width={800} height={600} alt="" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${loopItemObj.Photo}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                  <noscript className="">
                                  </noscript>
                                </span>
                                <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start">
                                </div>
                              </div>
                              <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                                <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                                  {loopItemObj.ProductName}
                                  {loopItemObj.ProductCode}
                                </h2>
                                <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate text-gray-500">
                                  <span className="">
                                    {loopItemObj.Brand}
                                  </span>
                                  <span className="">
                                    {loopItemObj.Catalog3}
                                  </span>
                                </p>
                                <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
                                  {loopItemObj.IsVisiblePrice == 'Yes' && (
                                    <span className="">
                                      {loopItemObj.CurrencyCode || ''} ${loopItemObj.UnitPriceOnDistributorCurrency} {
                                        loopItemObj.PriceUnit && (
                                          <span className="text-sm text-gray-400">
                                            / {loopItemObj.PriceUnit}
                                          </span>
                                        )
                                      }
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                            /* StatementBegin_EndLoop: uUbsdC9128 */
                          ))}
                      {/* StatementEnd_EndLoop */}
                    </div>
                    <div className="text-center pt-8 xl:pt-14">
                    </div>
                  </div>
                </>
              )
            }

          </div>
        </div>
      </div>
    </>
    /* End of NextJs Page Layout */
  );
};

