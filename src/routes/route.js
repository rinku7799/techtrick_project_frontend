// routesData.js
import Home from "../pages/home";
import Login from "../pages/login/login";
import LoginOtp from "../pages/login/loginotp";
import RegisterUser from "../pages/registration/registerUser";
import RegisterVendors from "../pages/registration/registervendors";
import RegisterSuccess from "../pages/registration/registersuccess";
import NursingServiceSubcategory from "../pages/Nursingservice_subcategory/nursingSubcategory";
import Favorite from "../pages/favorite/favorite";
import Myprofile from "../pages/myprofile/myprofile";
import Appointments from "../pages/Appointments/Appointments";
import VendorList from "../pages/vendorslist/homeattend";
import NurseList from "../pages/NurseList/nurselist";
import Detail from "../pages/detailpage/detail";
import MedicalStaffList from "../pages/NurseList/medicalStaffList";
import RpoAndManpowerService from "../pages/RpoAndManpowerService";
import AcademicMedicalCenterRecruiting from "../pages/AcademicMedicalCenterRecruiting";
import MedicalStaffingService from "../pages/medicalStaffService/medicalStaff";
import RegisterNursefile from "../pages/registeredNursePage";
import LicensedVocationalNurse from "../pages/LicensedVocationalNurse";
import CertifiedNursingAssistant from "../pages/CertifiedNursingAssistant";
import ForEmployee from "../pages/foremployee/forEmployee";
import ForJobSeekers from "../pages/forjobSeekers/forjobseekers";
import ForemployeApplynow from "../pages/forjobSeekers/foremployeApplynow";
import CutYourTravelNurseCost from "../pages/CutYourTravelNurseCost";
import FacilityManagementServices from "../pages/FacilityManagementServices";
import HouseKeepingServices from "../pages/HouseKeepingServices";
import CorporateHouseKeeping from "../pages/CorporateHouseKeeping";
import HospitalHouseKeeping from "../pages/HospitalHouseKeeping";
import BusinessSupportServices from "../pages/BusinessSupportServices";
import NursingHelpDesk from "../pages/NursingHelpDesk";
import MedicalEquipment from "../pages/MedicalEquipment";
import DetailsEquipment from "../pages/DetailsEquipment";
import MagWheelChair from "../pages/MagWheelchair";
import CompanyPage from "../pages/companypage/company";
import PathLab from "../pages/PathLab/PathLab";
import LabPartners from "../pages/vendorslist/LabPartners";
import LabCenterDetailPage from "../pages/NurseList/Labcenterdetailpage";
import ElderCareServices from "../pages/ElderCareservices/ElderCareservices";
import HospitalDeatil from "../pages/hospitalDetail/hospitalDeatil";
import HospitalLocationPage from "../pages/hospitalDetail/hospitalLoaction";
import DocterOnCall from "../pages/ElderCareservices/docteroncall";
import SeniorCitizenCare from "../pages/ElderCareservices/SeniorCitizenCare";
import ElderCare from "../pages/ElderCareservices/ElderCare";
import ElderPhysiotherapy from "../pages/ElderCareservices/elderphysiotherapy";
import NursingCare from "../pages/ElderCareservices/NursingCare";
import DignosticCare from "../pages/ElderCareservices/DignosticCare";
import OtherServices from "../pages/ElderCareservices/OtherServices";
import BookSurgery from "../pages/bookSurgery/booksurgery";
import SurgeryDetail from "../pages/bookSurgery/surgeryDetail";
import MemberShipPage from "../pages/membership/membershippage";
import MedicineDelivery from "../pages/MedicineDelivery/MedicineDelivery";
import MedicalTransportationPage from "../pages/MedicalTransportation/MedicalTransportation";
import MedicalTranferDetail from "../pages/MedicalTransportation/MedicalTranferDetail";
import NursingServicePage from "../pages/nursingservicepage";
// import HomeAttendant from "../pages/HomeAttendant";
// import MedicalAttendant from "../pages/MedicalAttendant";
// import ICUCareAtHome from "../pages/ICUCareAtHome";
// import Physiotherapy from "../pages/Physiotherapy";
// import EmergencyNursingCare from "../pages/EmergencyNursingCare";
// import HospitalStaff from "../pages/hospitalStaffService/hospitalStaff";


const routesData = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/loginotp/:selectedType", component: LoginOtp },
  { path: "/registeruser", component: RegisterUser },
  { path: "/registervendors", component: RegisterVendors },
  { path: "/registersuccess", component: RegisterSuccess },
  { path: "/:serviceName", component: NursingServiceSubcategory },
  { path: "/favorite", component: Favorite },
  { path: "/myprofile", component: Myprofile },
  { path: "/appointments", component: Appointments },
  { path: "/homeattend", component: VendorList },
  // { path: "/homeattendant", component: HomeAttendant },
  // { path: "/medicalattendant", component: MedicalAttendant },
  // { path: "/icucareathome", component: ICUCareAtHome },
  // { path: "/physiotherapy", component: Physiotherapy },
  { path: "/nurselist", component: NurseList },
  { path: "/detailpage", component: Detail },
  // { path: "/emergencynursingcare", component: EmergencyNursingCare },
  { path: "/medicalstaff", component: MedicalStaffList },
  { path: "/rpo&manpowerservice", component: RpoAndManpowerService },
  { path: "/academic-medical-center-recruiting", component: AcademicMedicalCenterRecruiting },
  // { path: "/hospitalstaffservice", component: HospitalStaff },
  { path: "/medicalstaffingservices", component: MedicalStaffingService },
  { path: "/registerednursefile", component: RegisterNursefile },
  { path: "/licensedvocationalnurse", component: LicensedVocationalNurse },
  { path: "/certifiednursingassistant", component: CertifiedNursingAssistant },
  { path: "/foremployee", component: ForEmployee },
  { path: "/forjobseekers", component: ForJobSeekers },
  { path: "/forjobseekers/applynow", component: ForemployeApplynow },
  { path: "/cut-your-travel-nurse-cost", component: CutYourTravelNurseCost },
  { path: "/facilitymanagementservice", component: FacilityManagementServices },
  { path: "/house-keeping-services", component: HouseKeepingServices },
  { path: "/corporate-house-keeping", component:  CorporateHouseKeeping},
  { path: "/hospital-house-keeping", component: HospitalHouseKeeping },
  { path: "/business-support-services", component: BusinessSupportServices },
  { path: "/nursinghelpdesk", component: NursingHelpDesk },
  { path: "/medicalequipment", component: MedicalEquipment },
  { path: "/details-equipment", component: DetailsEquipment },
  { path: "/magwheel-chair", component: MagWheelChair },
  { path: "/companypage", component: CompanyPage },
  { path: "/path-lab-test", component: PathLab },
  { path: "/pathlab/labpartners", component: LabPartners },
  { path: "/pathlab/labpartners/labcenterdetail", component: LabCenterDetailPage },
  { path: "/elder-care-services", component: ElderCareServices },
  { path: "/hospital-detail", component: HospitalDeatil },
  { path: "/hospital-location", component: HospitalLocationPage },
  { path: "/eldercareservices/docter-on-call", component: DocterOnCall },
  { path: "/eldercareservices/senior-citizen-care", component: SeniorCitizenCare },
  { path: "/eldercareservices/elder-care", component: ElderCare },
  { path: "/eldercareservices/physiotherapy", component: ElderPhysiotherapy },
  { path: "/eldercareservices/nursing-care", component: NursingCare },
  { path: "/eldercareservices/dignostic-care", component: DignosticCare },
  { path: "/eldercareservices/other-services", component: OtherServices },
  { path: "/book-a-surgery", component: BookSurgery },
  { path: "/book-a-surgery/surgerydetail", component: SurgeryDetail },
  { path: "/membership", component: MemberShipPage },
  { path: "/medicine-delivery", component: MedicineDelivery },
  { path: "/medical-trantation", component: MedicalTransportationPage },
  { path: "/medical-transportation-detail", component: MedicalTranferDetail },
  { path: "/nursingservice/:name", component: NursingServicePage },
  
];

export default routesData;
