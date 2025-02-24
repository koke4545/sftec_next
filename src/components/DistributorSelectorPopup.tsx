import { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt, faEnvelope, faPhone, faHeart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";



interface DistributorSelectorPopupProps {
    distributors: any;
    currentDistributorId: string;
    onClose: () => void;
    onSelectDistributor: (id: string) => void;
}

const DistributorSelectorPopup: React.FC<DistributorSelectorPopupProps> = ({
    distributors,
    currentDistributorId,
    onClose,
    onSelectDistributor,
}) => {

    const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 });
    const [storeLocations, setStoreLocations] = useState<any>([]);
    const [storeLocationsSorted, setStoreLocationsSorted] = useState<any>([]);
    const [selectedStoreLocation, setSelectedStoreLocation] = useState<any>(null);
    const [userAddress, setUserAddress] = useState("");
    const [userLocation, setUserLocation] = useState<any>(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    }, []);

    useEffect(() => {
        const geocodeStores = async () => {
            const geocoder = new google.maps.Geocoder();
            const locations = await Promise.all(
                distributors.map(async (distributorObj: any) => {

                    const response = await geocoder.geocode({ address: distributorObj.address });
                    if (response.results.length > 0) {
                        return {
                            ...distributorObj,
                            lat: response.results[0].geometry.location.lat(),
                            lng: response.results[0].geometry.location.lng(),
                        };
                    }
                    return distributorObj;
                })
            );
            setStoreLocations(locations);
        };
        if (isLoaded) {
            geocodeStores();
        }
    }, [isLoaded]);

    useEffect(() => {
        if (selectedStoreLocation) {
            setMapCenter({ lat: selectedStoreLocation.lat, lng: selectedStoreLocation.lng });
        } else if (userLocation) {
            setMapCenter({ lat: userLocation.lat, lng: userLocation.lng });
        }
    }, [selectedStoreLocation, userLocation]);

    useEffect(() => {
        if (userLocation) {
            const sortedStores = [...storeLocations].sort((a, b) => {
                if (a.AppBusinessPartnerID == currentDistributorId) {
                    setSelectedStoreLocation(a);
                    return -1;
                }
                else {
                    const distA = Math.hypot(userLocation.lat - a.lat, userLocation.lng - a.lng);
                    const distB = Math.hypot(userLocation.lat - b.lat, userLocation.lng - b.lng);
                    return distA - distB;
                }

            });
            setStoreLocationsSorted(sortedStores);

        }
    }, [userLocation, storeLocations]);

    const geocodeUserAddress = async () => {
        const geocoder = new google.maps.Geocoder();
        const response = await geocoder.geocode({ address: userAddress });
        if (response.results.length > 0) {
            setUserLocation({
                lat: response.results[0].geometry.location.lat(),
                lng: response.results[0].geometry.location.lng(),
            });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-full h-full relative text-left">
                <div className="w-full flex h-full">
                    <div className="bg-[#f2f2f2] px-2 lg:px-10 h-full w-full max-w-full lg:w-[400px] 2xl:w-[600px] overflow-auto pb-20 lg:pb-10">
                        <div className="tmx-store-locator-page-aside px-0 d-none d-md-block">
                            <div className="w-full flex lg:block">
                                <div className="pt-2.5 lg:pt-4 px-1">
                                    <button onClick={() => onClose()} className="text-gray-400 hover:text-black flex">
                                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 lg:mt-1" /> <span className="hidden lg:block">Back</span>
                                    </button>
                                </div>
                                <h1 className="text-lg lg:text-3xl w-full pt-2 pb-4 px-1">
                                    Find your distributor
                                </h1>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <div className="w-full flex flex-wrap lg:block">
                                        <div className="flex-auto w-[200px] lg:w-full">
                                            <div className="w-full flex border border-gray-300">
                                                <div className="block lg:hidden px-2 py-3 w-10 h-12 border-r border-gray-200">
                                                    <button className="w-full h-full"
                                                        onClick={() => {
                                                            if (navigator.geolocation) {
                                                                navigator.geolocation.getCurrentPosition((position) => {
                                                                    setUserLocation({
                                                                        lat: position.coords.latitude,
                                                                        lng: position.coords.longitude,
                                                                    });
                                                                });
                                                            }
                                                        }}>
                                                        <svg stroke="currentColor" fill="#a6a6a6" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" className="">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <input type="text" className="flex-auto h-12 outline-none border-none px-2 py-3 lg:px-4"
                                                    value={userAddress}
                                                    onChange={(e) => setUserAddress(e.target.value)}
                                                    placeholder="Enter address or postal code or city, etc." />
                                                <div className="px-2 py-3 w-10 h-12 border-l border-gray-200">
                                                    <button className="w-full h-full" title="Search by address."
                                                        onClick={geocodeUserAddress}>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" className="svg-inline--fa fa-magnifying-glass w-5 text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" className="">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="hidden lg:block h-12 px-0 py-3 w-full">
                                            <button className="flex gap-1" type="button" title="Use my location."
                                                onClick={() => {
                                                    if (navigator.geolocation) {
                                                        navigator.geolocation.getCurrentPosition((position) => {
                                                            setUserLocation({
                                                                lat: position.coords.latitude,
                                                                lng: position.coords.longitude,
                                                            });
                                                        });
                                                    }
                                                }}>
                                                <div className="">
                                                    <svg stroke="currentColor" fill="#a6a6a6" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                        <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" className="">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="hidden lg:block">
                                                    Find me
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full">
                                <div className="w-full h-[200px] block lg:hidden">
                                    {isLoaded && (
                                        <GoogleMap
                                            mapContainerStyle={{ width: "100%", height: "100%" }}
                                            center={mapCenter}
                                            zoom={5}
                                            options={{
                                                mapTypeControl: false, // Hides the map/satellite toggle
                                                fullscreenControl: false, // Hides the Full Screen button
                                            }}
                                        >
                                            {storeLocationsSorted.map((store: any) => (
                                                <Marker
                                                    key={store.id}
                                                    position={{ lat: store.lat, lng: store.lng }}
                                                    onClick={() => setSelectedStoreLocation(store)}
                                                    icon={{
                                                        url: selectedStoreLocation?.AppBusinessPartnerID === store.AppBusinessPartnerID
                                                            ? "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                                            : "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
                                                    }}
                                                />
                                            ))}
                                        </GoogleMap>
                                    )}
                                </div>
                                <div className="px-2 pt-4 pb-3 text-gray-500 font-semibold">
                                    <span className="pr-2">
                                        {storeLocationsSorted?.length}
                                    </span>
                                    <span className="uppercase">
                                        Distributors
                                    </span>
                                </div>
                                <div className="w-full">
                                    {storeLocationsSorted.map((store: any) => {
                                        const isSelected = selectedStoreLocation?.AppBusinessPartnerID === store.AppBusinessPartnerID;

                                        return (
                                            <div
                                                key={store.AppBusinessPartnerID}
                                                className={`px-0 lg:px-2 py-2 cursor-pointer transition-all duration-500 ${isSelected ? "bg-gray-100" : ""
                                                    }`}
                                                onClick={() =>
                                                    setSelectedStoreLocation(store)
                                                }
                                            >
                                                <div
                                                    className="w-full bg-white pt-3 pb-6 transition-shadow duration-500"
                                                    style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,.05)" }}
                                                >
                                                    <div className="w-full p-1">
                                                        <div className="flex w-full">
                                                            <div className="w-10 pt-1 px-3">
                                                                <img
                                                                    width={24}
                                                                    height={24}
                                                                    alt=""
                                                                    className="w-4 h-4"
                                                                    src={
                                                                        isSelected
                                                                            ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                                                            : "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
                                                                    }
                                                                />
                                                            </div>


                                                            <div className="flex-auto text-sm text-gray-800 overflow-hidden">
                                                                <div className="w-full">{store.Code}</div>
                                                                <div className="w-full pt-1 text-black font-semibold uppercase">
                                                                    {store.City}, {store.State}, {store.Country}
                                                                </div>


                                                                <div
                                                                    className={`transition-all duration-500 overflow-hidden flex flex-col gap-5 ${isSelected ? "max-h-96 opacity-100" : "h-0 opacity-0"
                                                                        }`}
                                                                >

                                                                    {/* Address */}
                                                                    <div className="pt-5 flex items-top gap-2">
                                                                        <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-300" />
                                                                        </div>
                                                                        <div className="text-black text-left pl-5">
                                                                            <p className="font-semibold text-gray-700">Address</p>
                                                                            <p>{store.Adress1}, {store.City}, {store.State}, {store.Country}, {store.PostCode}</p>
                                                                        </div>
                                                                    </div>

                                                                    {/* Email */}
                                                                    <div className="flex items-top gap-2">
                                                                        <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                                                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" />
                                                                        </div>
                                                                        <div className="text-black text-left pl-5">
                                                                            <p className="font-semibold text-gray-700">Email</p>
                                                                            <p>{store.ContactFax}</p>
                                                                        </div>
                                                                    </div>

                                                                    {/* Phone */}
                                                                    <div className="flex items-top gap-2">
                                                                        <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                                                            <FontAwesomeIcon icon={faPhone} className="text-gray-300" />
                                                                        </div>
                                                                        <div className="text-black text-left pl-5">
                                                                            <p className="font-semibold text-gray-700">Phone</p>
                                                                            <p>{store.ContactPhone}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mt-2">
                                                                        {store.AppBusinessPartnerID === currentDistributorId ? (
                                                                            <div className="uppercase w-full text-sm text-gray-600 text-center px-4 py-2 border border-gray-300">
                                                                                <FontAwesomeIcon icon={faHeart} className="text-gray-400 mr-2" /> Favourite Distributor
                                                                            </div>
                                                                        ) : (
                                                                            <button
                                                                                className="uppercase w-full text-sm text-gray-600 text-center px-4 py-2 border border-gray-300 hover:text-black hover:underline transition"
                                                                                onClick={() => onSelectDistributor(store.AppBusinessPartnerID)}
                                                                            >
                                                                                Set As Favouite Distributor
                                                                            </button>
                                                                        )}
                                                                    </div>

                                                                </div>
                                                            </div>



                                                            <div className="w-8">
                                                                {store.AppBusinessPartnerID === currentDistributorId && (
                                                                    <span className="text-sm text-gray-600">
                                                                        <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto hidden lg:block">
                        <div className="w-full h-full">
                            {isLoaded && (
                                <GoogleMap
                                    mapContainerStyle={{ width: "100%", height: "100%" }}
                                    center={mapCenter}
                                    zoom={5}
                                    options={{
                                        mapTypeControl: false, // Hides the map/satellite toggle
                                        fullscreenControl: false, // Hides the Full Screen button
                                    }}
                                >
                                    {storeLocationsSorted.map((store: any) => (
                                        <Marker
                                            key={store.id}
                                            position={{ lat: store.lat, lng: store.lng }}
                                            onClick={() => setSelectedStoreLocation(store)}
                                            icon={{
                                                url: selectedStoreLocation?.AppBusinessPartnerID === store.AppBusinessPartnerID
                                                    ? "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                                    : "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
                                            }}
                                        />
                                    ))}
                                </GoogleMap>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <button
                aria-label="Close panel"
                onClick={onClose}
                title="Close"
                className="hidden lg:block absolute inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md top-4 right-4"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-xl m-auto"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                </svg>
            </button>
        </div>
    );
};

export default DistributorSelectorPopup;
