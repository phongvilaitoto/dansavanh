import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './HeaderTitle2-CJaBb_j-.mjs';
import { l as lib } from './index-D9Y5kwcV.mjs';
import { useSSRContext, defineComponent, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, reactive, createTextVNode, withModifiers, withDirectives, vModelText } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './decoration-1-KlcFkPXq.mjs';
import { a as apiKey, b as useLocalePath, u as useHead, c as api } from './server.mjs';
import { GoogleMap, MarkerCluster, CustomMarker, InfoWindow } from 'vue3-google-map';
import { L as LayoutContent } from './index-CKfP-yp2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-mrjKPo2m.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@ant-design/icons-svg/lib/asn/AccountBookFilled.js';
import '@ant-design/colors';
import '@ant-design/icons-svg/lib/asn/AccountBookOutlined.js';
import '@ant-design/icons-svg/lib/asn/AccountBookTwoTone.js';
import '@ant-design/icons-svg/lib/asn/AimOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlertFilled.js';
import '@ant-design/icons-svg/lib/asn/AlertOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlertTwoTone.js';
import '@ant-design/icons-svg/lib/asn/AlibabaOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlignCenterOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlignLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlignRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlipayCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlipayOutlined.js';
import '@ant-design/icons-svg/lib/asn/AlipaySquareFilled.js';
import '@ant-design/icons-svg/lib/asn/AliwangwangFilled.js';
import '@ant-design/icons-svg/lib/asn/AliwangwangOutlined.js';
import '@ant-design/icons-svg/lib/asn/AliyunOutlined.js';
import '@ant-design/icons-svg/lib/asn/AmazonCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/AmazonOutlined.js';
import '@ant-design/icons-svg/lib/asn/AmazonSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/AndroidFilled.js';
import '@ant-design/icons-svg/lib/asn/AndroidOutlined.js';
import '@ant-design/icons-svg/lib/asn/AntCloudOutlined.js';
import '@ant-design/icons-svg/lib/asn/AntDesignOutlined.js';
import '@ant-design/icons-svg/lib/asn/ApartmentOutlined.js';
import '@ant-design/icons-svg/lib/asn/ApiFilled.js';
import '@ant-design/icons-svg/lib/asn/ApiOutlined.js';
import '@ant-design/icons-svg/lib/asn/ApiTwoTone.js';
import '@ant-design/icons-svg/lib/asn/AppleFilled.js';
import '@ant-design/icons-svg/lib/asn/AppleOutlined.js';
import '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/AppstoreFilled.js';
import '@ant-design/icons-svg/lib/asn/AppstoreOutlined.js';
import '@ant-design/icons-svg/lib/asn/AppstoreTwoTone.js';
import '@ant-design/icons-svg/lib/asn/AreaChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/ArrowDownOutlined.js';
import '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/ArrowRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/ArrowUpOutlined.js';
import '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined.js';
import '@ant-design/icons-svg/lib/asn/AudioFilled.js';
import '@ant-design/icons-svg/lib/asn/AudioMutedOutlined.js';
import '@ant-design/icons-svg/lib/asn/AudioOutlined.js';
import '@ant-design/icons-svg/lib/asn/AudioTwoTone.js';
import '@ant-design/icons-svg/lib/asn/AuditOutlined.js';
import '@ant-design/icons-svg/lib/asn/BackwardFilled.js';
import '@ant-design/icons-svg/lib/asn/BackwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/BankFilled.js';
import '@ant-design/icons-svg/lib/asn/BankOutlined.js';
import '@ant-design/icons-svg/lib/asn/BankTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BarChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/BarcodeOutlined.js';
import '@ant-design/icons-svg/lib/asn/BarsOutlined.js';
import '@ant-design/icons-svg/lib/asn/BehanceCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/BehanceOutlined.js';
import '@ant-design/icons-svg/lib/asn/BehanceSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/BellFilled.js';
import '@ant-design/icons-svg/lib/asn/BellOutlined.js';
import '@ant-design/icons-svg/lib/asn/BellTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BgColorsOutlined.js';
import '@ant-design/icons-svg/lib/asn/BlockOutlined.js';
import '@ant-design/icons-svg/lib/asn/BoldOutlined.js';
import '@ant-design/icons-svg/lib/asn/BookFilled.js';
import '@ant-design/icons-svg/lib/asn/BookOutlined.js';
import '@ant-design/icons-svg/lib/asn/BookTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BorderBottomOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderInnerOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderOuterOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderTopOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderVerticleOutlined.js';
import '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined.js';
import '@ant-design/icons-svg/lib/asn/BoxPlotFilled.js';
import '@ant-design/icons-svg/lib/asn/BoxPlotOutlined.js';
import '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BranchesOutlined.js';
import '@ant-design/icons-svg/lib/asn/BugFilled.js';
import '@ant-design/icons-svg/lib/asn/BugOutlined.js';
import '@ant-design/icons-svg/lib/asn/BugTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BuildFilled.js';
import '@ant-design/icons-svg/lib/asn/BuildOutlined.js';
import '@ant-design/icons-svg/lib/asn/BuildTwoTone.js';
import '@ant-design/icons-svg/lib/asn/BulbFilled.js';
import '@ant-design/icons-svg/lib/asn/BulbOutlined.js';
import '@ant-design/icons-svg/lib/asn/BulbTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CalculatorFilled.js';
import '@ant-design/icons-svg/lib/asn/CalculatorOutlined.js';
import '@ant-design/icons-svg/lib/asn/CalculatorTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CalendarFilled.js';
import '@ant-design/icons-svg/lib/asn/CalendarOutlined.js';
import '@ant-design/icons-svg/lib/asn/CalendarTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CameraFilled.js';
import '@ant-design/icons-svg/lib/asn/CameraOutlined.js';
import '@ant-design/icons-svg/lib/asn/CameraTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CarFilled.js';
import '@ant-design/icons-svg/lib/asn/CarOutlined.js';
import '@ant-design/icons-svg/lib/asn/CarTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CaretDownFilled.js';
import '@ant-design/icons-svg/lib/asn/CaretDownOutlined.js';
import '@ant-design/icons-svg/lib/asn/CaretLeftFilled.js';
import '@ant-design/icons-svg/lib/asn/CaretLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/CaretRightFilled.js';
import '@ant-design/icons-svg/lib/asn/CaretRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/CaretUpFilled.js';
import '@ant-design/icons-svg/lib/asn/CaretUpOutlined.js';
import '@ant-design/icons-svg/lib/asn/CarryOutFilled.js';
import '@ant-design/icons-svg/lib/asn/CarryOutOutlined.js';
import '@ant-design/icons-svg/lib/asn/CarryOutTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CheckCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CheckOutlined.js';
import '@ant-design/icons-svg/lib/asn/CheckSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/CheckSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ChromeFilled.js';
import '@ant-design/icons-svg/lib/asn/ChromeOutlined.js';
import '@ant-design/icons-svg/lib/asn/CiCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CiCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/CiCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CiOutlined.js';
import '@ant-design/icons-svg/lib/asn/CiTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ClearOutlined.js';
import '@ant-design/icons-svg/lib/asn/ClockCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/ClockCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CloseCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CloseOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloseSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/CloseSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloudFilled.js';
import '@ant-design/icons-svg/lib/asn/CloudOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloudServerOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloudSyncOutlined.js';
import '@ant-design/icons-svg/lib/asn/CloudTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CloudUploadOutlined.js';
import '@ant-design/icons-svg/lib/asn/ClusterOutlined.js';
import '@ant-design/icons-svg/lib/asn/CodeFilled.js';
import '@ant-design/icons-svg/lib/asn/CodeOutlined.js';
import '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined.js';
import '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/CodeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CodepenCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/CodepenOutlined.js';
import '@ant-design/icons-svg/lib/asn/CodepenSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/CoffeeOutlined.js';
import '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined.js';
import '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined.js';
import '@ant-design/icons-svg/lib/asn/CommentOutlined.js';
import '@ant-design/icons-svg/lib/asn/CompassFilled.js';
import '@ant-design/icons-svg/lib/asn/CompassOutlined.js';
import '@ant-design/icons-svg/lib/asn/CompassTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CompressOutlined.js';
import '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined.js';
import '@ant-design/icons-svg/lib/asn/ContactsFilled.js';
import '@ant-design/icons-svg/lib/asn/ContactsOutlined.js';
import '@ant-design/icons-svg/lib/asn/ContactsTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ContainerFilled.js';
import '@ant-design/icons-svg/lib/asn/ContainerOutlined.js';
import '@ant-design/icons-svg/lib/asn/ContainerTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ControlFilled.js';
import '@ant-design/icons-svg/lib/asn/ControlOutlined.js';
import '@ant-design/icons-svg/lib/asn/ControlTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CopyFilled.js';
import '@ant-design/icons-svg/lib/asn/CopyOutlined.js';
import '@ant-design/icons-svg/lib/asn/CopyTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CopyrightOutlined.js';
import '@ant-design/icons-svg/lib/asn/CopyrightTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CreditCardFilled.js';
import '@ant-design/icons-svg/lib/asn/CreditCardOutlined.js';
import '@ant-design/icons-svg/lib/asn/CreditCardTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CrownFilled.js';
import '@ant-design/icons-svg/lib/asn/CrownOutlined.js';
import '@ant-design/icons-svg/lib/asn/CrownTwoTone.js';
import '@ant-design/icons-svg/lib/asn/CustomerServiceFilled.js';
import '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined.js';
import '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DashOutlined.js';
import '@ant-design/icons-svg/lib/asn/DashboardFilled.js';
import '@ant-design/icons-svg/lib/asn/DashboardOutlined.js';
import '@ant-design/icons-svg/lib/asn/DashboardTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DatabaseFilled.js';
import '@ant-design/icons-svg/lib/asn/DatabaseOutlined.js';
import '@ant-design/icons-svg/lib/asn/DatabaseTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined.js';
import '@ant-design/icons-svg/lib/asn/DeleteFilled.js';
import '@ant-design/icons-svg/lib/asn/DeleteOutlined.js';
import '@ant-design/icons-svg/lib/asn/DeleteRowOutlined.js';
import '@ant-design/icons-svg/lib/asn/DeleteTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined.js';
import '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined.js';
import '@ant-design/icons-svg/lib/asn/DesktopOutlined.js';
import '@ant-design/icons-svg/lib/asn/DiffFilled.js';
import '@ant-design/icons-svg/lib/asn/DiffOutlined.js';
import '@ant-design/icons-svg/lib/asn/DiffTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DingdingOutlined.js';
import '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/DingtalkOutlined.js';
import '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/DisconnectOutlined.js';
import '@ant-design/icons-svg/lib/asn/DislikeFilled.js';
import '@ant-design/icons-svg/lib/asn/DislikeOutlined.js';
import '@ant-design/icons-svg/lib/asn/DislikeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DollarCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/DollarCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/DollarCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DollarOutlined.js';
import '@ant-design/icons-svg/lib/asn/DollarTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DotChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/DoubleRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/DownCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/DownCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/DownCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DownOutlined.js';
import '@ant-design/icons-svg/lib/asn/DownSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/DownSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/DownSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/DownloadOutlined.js';
import '@ant-design/icons-svg/lib/asn/DragOutlined.js';
import '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/DribbbleOutlined.js';
import '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/DropboxCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/DropboxOutlined.js';
import '@ant-design/icons-svg/lib/asn/DropboxSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/EditFilled.js';
import '@ant-design/icons-svg/lib/asn/EditOutlined.js';
import '@ant-design/icons-svg/lib/asn/EditTwoTone.js';
import '@ant-design/icons-svg/lib/asn/EllipsisOutlined.js';
import '@ant-design/icons-svg/lib/asn/EnterOutlined.js';
import '@ant-design/icons-svg/lib/asn/EnvironmentFilled.js';
import '@ant-design/icons-svg/lib/asn/EnvironmentOutlined.js';
import '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone.js';
import '@ant-design/icons-svg/lib/asn/EuroCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/EuroCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/EuroOutlined.js';
import '@ant-design/icons-svg/lib/asn/EuroTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ExceptionOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ExclamationOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExpandAltOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExpandOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExperimentFilled.js';
import '@ant-design/icons-svg/lib/asn/ExperimentOutlined.js';
import '@ant-design/icons-svg/lib/asn/ExperimentTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ExportOutlined.js';
import '@ant-design/icons-svg/lib/asn/EyeFilled.js';
import '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled.js';
import '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js';
import '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/EyeOutlined.js';
import '@ant-design/icons-svg/lib/asn/EyeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FacebookFilled.js';
import '@ant-design/icons-svg/lib/asn/FacebookOutlined.js';
import '@ant-design/icons-svg/lib/asn/FallOutlined.js';
import '@ant-design/icons-svg/lib/asn/FastBackwardFilled.js';
import '@ant-design/icons-svg/lib/asn/FastBackwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/FastForwardFilled.js';
import '@ant-design/icons-svg/lib/asn/FastForwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/FieldBinaryOutlined.js';
import '@ant-design/icons-svg/lib/asn/FieldNumberOutlined.js';
import '@ant-design/icons-svg/lib/asn/FieldStringOutlined.js';
import '@ant-design/icons-svg/lib/asn/FieldTimeOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileAddFilled.js';
import '@ant-design/icons-svg/lib/asn/FileAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileAddTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileDoneOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileExcelFilled.js';
import '@ant-design/icons-svg/lib/asn/FileExcelOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileExcelTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileExclamationFilled.js';
import '@ant-design/icons-svg/lib/asn/FileExclamationOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileFilled.js';
import '@ant-design/icons-svg/lib/asn/FileGifOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileImageFilled.js';
import '@ant-design/icons-svg/lib/asn/FileImageOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileImageTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileJpgOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileMarkdownFilled.js';
import '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileOutlined.js';
import '@ant-design/icons-svg/lib/asn/FilePdfFilled.js';
import '@ant-design/icons-svg/lib/asn/FilePdfOutlined.js';
import '@ant-design/icons-svg/lib/asn/FilePdfTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FilePptFilled.js';
import '@ant-design/icons-svg/lib/asn/FilePptOutlined.js';
import '@ant-design/icons-svg/lib/asn/FilePptTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileProtectOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileSearchOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileSyncOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileTextFilled.js';
import '@ant-design/icons-svg/lib/asn/FileTextOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileTextTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileUnknownFilled.js';
import '@ant-design/icons-svg/lib/asn/FileUnknownOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileWordFilled.js';
import '@ant-design/icons-svg/lib/asn/FileWordOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileWordTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FileZipFilled.js';
import '@ant-design/icons-svg/lib/asn/FileZipOutlined.js';
import '@ant-design/icons-svg/lib/asn/FileZipTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FilterFilled.js';
import '@ant-design/icons-svg/lib/asn/FilterOutlined.js';
import '@ant-design/icons-svg/lib/asn/FilterTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FireFilled.js';
import '@ant-design/icons-svg/lib/asn/FireOutlined.js';
import '@ant-design/icons-svg/lib/asn/FireTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FlagFilled.js';
import '@ant-design/icons-svg/lib/asn/FlagOutlined.js';
import '@ant-design/icons-svg/lib/asn/FlagTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FolderAddFilled.js';
import '@ant-design/icons-svg/lib/asn/FolderAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/FolderAddTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FolderFilled.js';
import '@ant-design/icons-svg/lib/asn/FolderOpenFilled.js';
import '@ant-design/icons-svg/lib/asn/FolderOpenOutlined.js';
import '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FolderOutlined.js';
import '@ant-design/icons-svg/lib/asn/FolderTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FolderViewOutlined.js';
import '@ant-design/icons-svg/lib/asn/FontColorsOutlined.js';
import '@ant-design/icons-svg/lib/asn/FontSizeOutlined.js';
import '@ant-design/icons-svg/lib/asn/ForkOutlined.js';
import '@ant-design/icons-svg/lib/asn/FormOutlined.js';
import '@ant-design/icons-svg/lib/asn/FormatPainterFilled.js';
import '@ant-design/icons-svg/lib/asn/FormatPainterOutlined.js';
import '@ant-design/icons-svg/lib/asn/ForwardFilled.js';
import '@ant-design/icons-svg/lib/asn/ForwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/FrownFilled.js';
import '@ant-design/icons-svg/lib/asn/FrownOutlined.js';
import '@ant-design/icons-svg/lib/asn/FrownTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined.js';
import '@ant-design/icons-svg/lib/asn/FullscreenOutlined.js';
import '@ant-design/icons-svg/lib/asn/FunctionOutlined.js';
import '@ant-design/icons-svg/lib/asn/FundFilled.js';
import '@ant-design/icons-svg/lib/asn/FundOutlined.js';
import '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined.js';
import '@ant-design/icons-svg/lib/asn/FundTwoTone.js';
import '@ant-design/icons-svg/lib/asn/FundViewOutlined.js';
import '@ant-design/icons-svg/lib/asn/FunnelPlotFilled.js';
import '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined.js';
import '@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone.js';
import '@ant-design/icons-svg/lib/asn/GatewayOutlined.js';
import '@ant-design/icons-svg/lib/asn/GifOutlined.js';
import '@ant-design/icons-svg/lib/asn/GiftFilled.js';
import '@ant-design/icons-svg/lib/asn/GiftOutlined.js';
import '@ant-design/icons-svg/lib/asn/GiftTwoTone.js';
import '@ant-design/icons-svg/lib/asn/GithubFilled.js';
import '@ant-design/icons-svg/lib/asn/GithubOutlined.js';
import '@ant-design/icons-svg/lib/asn/GitlabFilled.js';
import '@ant-design/icons-svg/lib/asn/GitlabOutlined.js';
import '@ant-design/icons-svg/lib/asn/GlobalOutlined.js';
import '@ant-design/icons-svg/lib/asn/GoldFilled.js';
import '@ant-design/icons-svg/lib/asn/GoldOutlined.js';
import '@ant-design/icons-svg/lib/asn/GoldTwoTone.js';
import '@ant-design/icons-svg/lib/asn/GoldenFilled.js';
import '@ant-design/icons-svg/lib/asn/GoogleCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/GoogleOutlined.js';
import '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/GooglePlusOutlined.js';
import '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/GoogleSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/GroupOutlined.js';
import '@ant-design/icons-svg/lib/asn/HddFilled.js';
import '@ant-design/icons-svg/lib/asn/HddOutlined.js';
import '@ant-design/icons-svg/lib/asn/HddTwoTone.js';
import '@ant-design/icons-svg/lib/asn/HeartFilled.js';
import '@ant-design/icons-svg/lib/asn/HeartOutlined.js';
import '@ant-design/icons-svg/lib/asn/HeartTwoTone.js';
import '@ant-design/icons-svg/lib/asn/HeatMapOutlined.js';
import '@ant-design/icons-svg/lib/asn/HighlightFilled.js';
import '@ant-design/icons-svg/lib/asn/HighlightOutlined.js';
import '@ant-design/icons-svg/lib/asn/HighlightTwoTone.js';
import '@ant-design/icons-svg/lib/asn/HistoryOutlined.js';
import '@ant-design/icons-svg/lib/asn/HolderOutlined.js';
import '@ant-design/icons-svg/lib/asn/HomeFilled.js';
import '@ant-design/icons-svg/lib/asn/HomeOutlined.js';
import '@ant-design/icons-svg/lib/asn/HomeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/HourglassFilled.js';
import '@ant-design/icons-svg/lib/asn/HourglassOutlined.js';
import '@ant-design/icons-svg/lib/asn/HourglassTwoTone.js';
import '@ant-design/icons-svg/lib/asn/Html5Filled.js';
import '@ant-design/icons-svg/lib/asn/Html5Outlined.js';
import '@ant-design/icons-svg/lib/asn/Html5TwoTone.js';
import '@ant-design/icons-svg/lib/asn/IdcardFilled.js';
import '@ant-design/icons-svg/lib/asn/IdcardOutlined.js';
import '@ant-design/icons-svg/lib/asn/IdcardTwoTone.js';
import '@ant-design/icons-svg/lib/asn/IeCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/IeOutlined.js';
import '@ant-design/icons-svg/lib/asn/IeSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/ImportOutlined.js';
import '@ant-design/icons-svg/lib/asn/InboxOutlined.js';
import '@ant-design/icons-svg/lib/asn/InfoCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/InfoOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/InstagramFilled.js';
import '@ant-design/icons-svg/lib/asn/InstagramOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsuranceFilled.js';
import '@ant-design/icons-svg/lib/asn/InsuranceOutlined.js';
import '@ant-design/icons-svg/lib/asn/InsuranceTwoTone.js';
import '@ant-design/icons-svg/lib/asn/InteractionFilled.js';
import '@ant-design/icons-svg/lib/asn/InteractionOutlined.js';
import '@ant-design/icons-svg/lib/asn/InteractionTwoTone.js';
import '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined.js';
import '@ant-design/icons-svg/lib/asn/ItalicOutlined.js';
import '@ant-design/icons-svg/lib/asn/KeyOutlined.js';
import '@ant-design/icons-svg/lib/asn/LaptopOutlined.js';
import '@ant-design/icons-svg/lib/asn/LayoutFilled.js';
import '@ant-design/icons-svg/lib/asn/LayoutOutlined.js';
import '@ant-design/icons-svg/lib/asn/LayoutTwoTone.js';
import '@ant-design/icons-svg/lib/asn/LeftCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/LeftCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/LeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/LeftSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/LeftSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/LikeFilled.js';
import '@ant-design/icons-svg/lib/asn/LikeOutlined.js';
import '@ant-design/icons-svg/lib/asn/LikeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/LineChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/LineHeightOutlined.js';
import '@ant-design/icons-svg/lib/asn/LineOutlined.js';
import '@ant-design/icons-svg/lib/asn/LinkOutlined.js';
import '@ant-design/icons-svg/lib/asn/LinkedinFilled.js';
import '@ant-design/icons-svg/lib/asn/LinkedinOutlined.js';
import '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined.js';
import '@ant-design/icons-svg/lib/asn/LoadingOutlined.js';
import '@ant-design/icons-svg/lib/asn/LockFilled.js';
import '@ant-design/icons-svg/lib/asn/LockOutlined.js';
import '@ant-design/icons-svg/lib/asn/LockTwoTone.js';
import '@ant-design/icons-svg/lib/asn/LoginOutlined.js';
import '@ant-design/icons-svg/lib/asn/LogoutOutlined.js';
import '@ant-design/icons-svg/lib/asn/MacCommandFilled.js';
import '@ant-design/icons-svg/lib/asn/MacCommandOutlined.js';
import '@ant-design/icons-svg/lib/asn/MailFilled.js';
import '@ant-design/icons-svg/lib/asn/MailOutlined.js';
import '@ant-design/icons-svg/lib/asn/MailTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ManOutlined.js';
import '@ant-design/icons-svg/lib/asn/MedicineBoxFilled.js';
import '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined.js';
import '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MediumCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/MediumOutlined.js';
import '@ant-design/icons-svg/lib/asn/MediumSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined.js';
import '@ant-design/icons-svg/lib/asn/MehFilled.js';
import '@ant-design/icons-svg/lib/asn/MehOutlined.js';
import '@ant-design/icons-svg/lib/asn/MehTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MenuFoldOutlined.js';
import '@ant-design/icons-svg/lib/asn/MenuOutlined.js';
import '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined.js';
import '@ant-design/icons-svg/lib/asn/MergeCellsOutlined.js';
import '@ant-design/icons-svg/lib/asn/MessageFilled.js';
import '@ant-design/icons-svg/lib/asn/MessageOutlined.js';
import '@ant-design/icons-svg/lib/asn/MessageTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MinusCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/MinusCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MinusOutlined.js';
import '@ant-design/icons-svg/lib/asn/MinusSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/MinusSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MobileFilled.js';
import '@ant-design/icons-svg/lib/asn/MobileOutlined.js';
import '@ant-design/icons-svg/lib/asn/MobileTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MoneyCollectFilled.js';
import '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined.js';
import '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone.js';
import '@ant-design/icons-svg/lib/asn/MonitorOutlined.js';
import '@ant-design/icons-svg/lib/asn/MoreOutlined.js';
import '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined.js';
import '@ant-design/icons-svg/lib/asn/NodeExpandOutlined.js';
import '@ant-design/icons-svg/lib/asn/NodeIndexOutlined.js';
import '@ant-design/icons-svg/lib/asn/NotificationFilled.js';
import '@ant-design/icons-svg/lib/asn/NotificationOutlined.js';
import '@ant-design/icons-svg/lib/asn/NotificationTwoTone.js';
import '@ant-design/icons-svg/lib/asn/NumberOutlined.js';
import '@ant-design/icons-svg/lib/asn/OneToOneOutlined.js';
import '@ant-design/icons-svg/lib/asn/OrderedListOutlined.js';
import '@ant-design/icons-svg/lib/asn/PaperClipOutlined.js';
import '@ant-design/icons-svg/lib/asn/PartitionOutlined.js';
import '@ant-design/icons-svg/lib/asn/PauseCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/PauseCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PauseOutlined.js';
import '@ant-design/icons-svg/lib/asn/PayCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/PayCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/PercentageOutlined.js';
import '@ant-design/icons-svg/lib/asn/PhoneFilled.js';
import '@ant-design/icons-svg/lib/asn/PhoneOutlined.js';
import '@ant-design/icons-svg/lib/asn/PhoneTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PicCenterOutlined.js';
import '@ant-design/icons-svg/lib/asn/PicLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/PicRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/PictureFilled.js';
import '@ant-design/icons-svg/lib/asn/PictureOutlined.js';
import '@ant-design/icons-svg/lib/asn/PictureTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PieChartFilled.js';
import '@ant-design/icons-svg/lib/asn/PieChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/PieChartTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PlayCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/PlayCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PlaySquareFilled.js';
import '@ant-design/icons-svg/lib/asn/PlaySquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PlusCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/PlusCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PlusOutlined.js';
import '@ant-design/icons-svg/lib/asn/PlusSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/PlusSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PoundCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/PoundCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PoundOutlined.js';
import '@ant-design/icons-svg/lib/asn/PoweroffOutlined.js';
import '@ant-design/icons-svg/lib/asn/PrinterFilled.js';
import '@ant-design/icons-svg/lib/asn/PrinterOutlined.js';
import '@ant-design/icons-svg/lib/asn/PrinterTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ProfileFilled.js';
import '@ant-design/icons-svg/lib/asn/ProfileOutlined.js';
import '@ant-design/icons-svg/lib/asn/ProfileTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ProjectFilled.js';
import '@ant-design/icons-svg/lib/asn/ProjectOutlined.js';
import '@ant-design/icons-svg/lib/asn/ProjectTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PropertySafetyFilled.js';
import '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined.js';
import '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone.js';
import '@ant-design/icons-svg/lib/asn/PullRequestOutlined.js';
import '@ant-design/icons-svg/lib/asn/PushpinFilled.js';
import '@ant-design/icons-svg/lib/asn/PushpinOutlined.js';
import '@ant-design/icons-svg/lib/asn/PushpinTwoTone.js';
import '@ant-design/icons-svg/lib/asn/QqCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/QqOutlined.js';
import '@ant-design/icons-svg/lib/asn/QqSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/QrcodeOutlined.js';
import '@ant-design/icons-svg/lib/asn/QuestionCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/QuestionOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadarChartOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined.js';
import '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined.js';
import '@ant-design/icons-svg/lib/asn/ReadFilled.js';
import '@ant-design/icons-svg/lib/asn/ReadOutlined.js';
import '@ant-design/icons-svg/lib/asn/ReconciliationFilled.js';
import '@ant-design/icons-svg/lib/asn/ReconciliationOutlined.js';
import '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled.js';
import '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined.js';
import '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RedditCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/RedditOutlined.js';
import '@ant-design/icons-svg/lib/asn/RedditSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/RedoOutlined.js';
import '@ant-design/icons-svg/lib/asn/ReloadOutlined.js';
import '@ant-design/icons-svg/lib/asn/RestFilled.js';
import '@ant-design/icons-svg/lib/asn/RestOutlined.js';
import '@ant-design/icons-svg/lib/asn/RestTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RetweetOutlined.js';
import '@ant-design/icons-svg/lib/asn/RightCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/RightCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/RightCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RightOutlined.js';
import '@ant-design/icons-svg/lib/asn/RightSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/RightSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/RightSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RiseOutlined.js';
import '@ant-design/icons-svg/lib/asn/RobotFilled.js';
import '@ant-design/icons-svg/lib/asn/RobotOutlined.js';
import '@ant-design/icons-svg/lib/asn/RocketFilled.js';
import '@ant-design/icons-svg/lib/asn/RocketOutlined.js';
import '@ant-design/icons-svg/lib/asn/RocketTwoTone.js';
import '@ant-design/icons-svg/lib/asn/RollbackOutlined.js';
import '@ant-design/icons-svg/lib/asn/RotateLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/RotateRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/SafetyCertificateFilled.js';
import '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined.js';
import '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SafetyOutlined.js';
import '@ant-design/icons-svg/lib/asn/SaveFilled.js';
import '@ant-design/icons-svg/lib/asn/SaveOutlined.js';
import '@ant-design/icons-svg/lib/asn/SaveTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ScanOutlined.js';
import '@ant-design/icons-svg/lib/asn/ScheduleFilled.js';
import '@ant-design/icons-svg/lib/asn/ScheduleOutlined.js';
import '@ant-design/icons-svg/lib/asn/ScheduleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ScissorOutlined.js';
import '@ant-design/icons-svg/lib/asn/SearchOutlined.js';
import '@ant-design/icons-svg/lib/asn/SecurityScanFilled.js';
import '@ant-design/icons-svg/lib/asn/SecurityScanOutlined.js';
import '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SelectOutlined.js';
import '@ant-design/icons-svg/lib/asn/SendOutlined.js';
import '@ant-design/icons-svg/lib/asn/SettingFilled.js';
import '@ant-design/icons-svg/lib/asn/SettingOutlined.js';
import '@ant-design/icons-svg/lib/asn/SettingTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ShakeOutlined.js';
import '@ant-design/icons-svg/lib/asn/ShareAltOutlined.js';
import '@ant-design/icons-svg/lib/asn/ShopFilled.js';
import '@ant-design/icons-svg/lib/asn/ShopOutlined.js';
import '@ant-design/icons-svg/lib/asn/ShopTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined.js';
import '@ant-design/icons-svg/lib/asn/ShoppingFilled.js';
import '@ant-design/icons-svg/lib/asn/ShoppingOutlined.js';
import '@ant-design/icons-svg/lib/asn/ShoppingTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ShrinkOutlined.js';
import '@ant-design/icons-svg/lib/asn/SignalFilled.js';
import '@ant-design/icons-svg/lib/asn/SisternodeOutlined.js';
import '@ant-design/icons-svg/lib/asn/SketchCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/SketchOutlined.js';
import '@ant-design/icons-svg/lib/asn/SketchSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/SkinFilled.js';
import '@ant-design/icons-svg/lib/asn/SkinOutlined.js';
import '@ant-design/icons-svg/lib/asn/SkinTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SkypeFilled.js';
import '@ant-design/icons-svg/lib/asn/SkypeOutlined.js';
import '@ant-design/icons-svg/lib/asn/SlackCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/SlackOutlined.js';
import '@ant-design/icons-svg/lib/asn/SlackSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/SlackSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/SlidersFilled.js';
import '@ant-design/icons-svg/lib/asn/SlidersOutlined.js';
import '@ant-design/icons-svg/lib/asn/SlidersTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SmallDashOutlined.js';
import '@ant-design/icons-svg/lib/asn/SmileFilled.js';
import '@ant-design/icons-svg/lib/asn/SmileOutlined.js';
import '@ant-design/icons-svg/lib/asn/SmileTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SnippetsFilled.js';
import '@ant-design/icons-svg/lib/asn/SnippetsOutlined.js';
import '@ant-design/icons-svg/lib/asn/SnippetsTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SolutionOutlined.js';
import '@ant-design/icons-svg/lib/asn/SortAscendingOutlined.js';
import '@ant-design/icons-svg/lib/asn/SortDescendingOutlined.js';
import '@ant-design/icons-svg/lib/asn/SoundFilled.js';
import '@ant-design/icons-svg/lib/asn/SoundOutlined.js';
import '@ant-design/icons-svg/lib/asn/SoundTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SplitCellsOutlined.js';
import '@ant-design/icons-svg/lib/asn/StarFilled.js';
import '@ant-design/icons-svg/lib/asn/StarOutlined.js';
import '@ant-design/icons-svg/lib/asn/StarTwoTone.js';
import '@ant-design/icons-svg/lib/asn/StepBackwardFilled.js';
import '@ant-design/icons-svg/lib/asn/StepBackwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/StepForwardFilled.js';
import '@ant-design/icons-svg/lib/asn/StepForwardOutlined.js';
import '@ant-design/icons-svg/lib/asn/StockOutlined.js';
import '@ant-design/icons-svg/lib/asn/StopFilled.js';
import '@ant-design/icons-svg/lib/asn/StopOutlined.js';
import '@ant-design/icons-svg/lib/asn/StopTwoTone.js';
import '@ant-design/icons-svg/lib/asn/StrikethroughOutlined.js';
import '@ant-design/icons-svg/lib/asn/SubnodeOutlined.js';
import '@ant-design/icons-svg/lib/asn/SwapLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/SwapOutlined.js';
import '@ant-design/icons-svg/lib/asn/SwapRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/SwitcherFilled.js';
import '@ant-design/icons-svg/lib/asn/SwitcherOutlined.js';
import '@ant-design/icons-svg/lib/asn/SwitcherTwoTone.js';
import '@ant-design/icons-svg/lib/asn/SyncOutlined.js';
import '@ant-design/icons-svg/lib/asn/TableOutlined.js';
import '@ant-design/icons-svg/lib/asn/TabletFilled.js';
import '@ant-design/icons-svg/lib/asn/TabletOutlined.js';
import '@ant-design/icons-svg/lib/asn/TabletTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TagFilled.js';
import '@ant-design/icons-svg/lib/asn/TagOutlined.js';
import '@ant-design/icons-svg/lib/asn/TagTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TagsFilled.js';
import '@ant-design/icons-svg/lib/asn/TagsOutlined.js';
import '@ant-design/icons-svg/lib/asn/TagsTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/TaobaoOutlined.js';
import '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/TeamOutlined.js';
import '@ant-design/icons-svg/lib/asn/ThunderboltFilled.js';
import '@ant-design/icons-svg/lib/asn/ThunderboltOutlined.js';
import '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone.js';
import '@ant-design/icons-svg/lib/asn/ToTopOutlined.js';
import '@ant-design/icons-svg/lib/asn/ToolFilled.js';
import '@ant-design/icons-svg/lib/asn/ToolOutlined.js';
import '@ant-design/icons-svg/lib/asn/ToolTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TrademarkOutlined.js';
import '@ant-design/icons-svg/lib/asn/TransactionOutlined.js';
import '@ant-design/icons-svg/lib/asn/TranslationOutlined.js';
import '@ant-design/icons-svg/lib/asn/TrophyFilled.js';
import '@ant-design/icons-svg/lib/asn/TrophyOutlined.js';
import '@ant-design/icons-svg/lib/asn/TrophyTwoTone.js';
import '@ant-design/icons-svg/lib/asn/TwitterCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/TwitterOutlined.js';
import '@ant-design/icons-svg/lib/asn/TwitterSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/UnderlineOutlined.js';
import '@ant-design/icons-svg/lib/asn/UndoOutlined.js';
import '@ant-design/icons-svg/lib/asn/UngroupOutlined.js';
import '@ant-design/icons-svg/lib/asn/UnlockFilled.js';
import '@ant-design/icons-svg/lib/asn/UnlockOutlined.js';
import '@ant-design/icons-svg/lib/asn/UnlockTwoTone.js';
import '@ant-design/icons-svg/lib/asn/UnorderedListOutlined.js';
import '@ant-design/icons-svg/lib/asn/UpCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/UpCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/UpCircleTwoTone.js';
import '@ant-design/icons-svg/lib/asn/UpOutlined.js';
import '@ant-design/icons-svg/lib/asn/UpSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/UpSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/UpSquareTwoTone.js';
import '@ant-design/icons-svg/lib/asn/UploadOutlined.js';
import '@ant-design/icons-svg/lib/asn/UsbFilled.js';
import '@ant-design/icons-svg/lib/asn/UsbOutlined.js';
import '@ant-design/icons-svg/lib/asn/UsbTwoTone.js';
import '@ant-design/icons-svg/lib/asn/UserAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/UserDeleteOutlined.js';
import '@ant-design/icons-svg/lib/asn/UserOutlined.js';
import '@ant-design/icons-svg/lib/asn/UserSwitchOutlined.js';
import '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerifiedOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined.js';
import '@ant-design/icons-svg/lib/asn/VerticalRightOutlined.js';
import '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined.js';
import '@ant-design/icons-svg/lib/asn/VideoCameraFilled.js';
import '@ant-design/icons-svg/lib/asn/VideoCameraOutlined.js';
import '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone.js';
import '@ant-design/icons-svg/lib/asn/WalletFilled.js';
import '@ant-design/icons-svg/lib/asn/WalletOutlined.js';
import '@ant-design/icons-svg/lib/asn/WalletTwoTone.js';
import '@ant-design/icons-svg/lib/asn/WarningFilled.js';
import '@ant-design/icons-svg/lib/asn/WarningOutlined.js';
import '@ant-design/icons-svg/lib/asn/WarningTwoTone.js';
import '@ant-design/icons-svg/lib/asn/WechatFilled.js';
import '@ant-design/icons-svg/lib/asn/WechatOutlined.js';
import '@ant-design/icons-svg/lib/asn/WeiboCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined.js';
import '@ant-design/icons-svg/lib/asn/WeiboOutlined.js';
import '@ant-design/icons-svg/lib/asn/WeiboSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined.js';
import '@ant-design/icons-svg/lib/asn/WhatsAppOutlined.js';
import '@ant-design/icons-svg/lib/asn/WifiOutlined.js';
import '@ant-design/icons-svg/lib/asn/WindowsFilled.js';
import '@ant-design/icons-svg/lib/asn/WindowsOutlined.js';
import '@ant-design/icons-svg/lib/asn/WomanOutlined.js';
import '@ant-design/icons-svg/lib/asn/YahooFilled.js';
import '@ant-design/icons-svg/lib/asn/YahooOutlined.js';
import '@ant-design/icons-svg/lib/asn/YoutubeFilled.js';
import '@ant-design/icons-svg/lib/asn/YoutubeOutlined.js';
import '@ant-design/icons-svg/lib/asn/YuqueFilled.js';
import '@ant-design/icons-svg/lib/asn/YuqueOutlined.js';
import '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled.js';
import '@ant-design/icons-svg/lib/asn/ZhihuOutlined.js';
import '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled.js';
import '@ant-design/icons-svg/lib/asn/ZoomInOutlined.js';
import '@ant-design/icons-svg/lib/asn/ZoomOutOutlined.js';
import 'vue-router';
import '@babel/runtime/helpers/esm/extends';
import 'stylis';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ctrl/tinycolor';
import 'vue-types';

const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAbCAYAAACTMQajAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4M0NDMTM4MEMyQTVFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOTZDQTM5RjI5NEExMUU1QkZBNEM3NDM1NkRERjkxNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOTZDQTM5RTI5NEExMUU1QkZBNEM3NDM1NkRERjkxNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTM2RDhBRDI0QTIxNjgxMTgyMkFCOERGMzNCQTEzOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODNDQzEzODBDMkE1RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZRfDhAAAGv0lEQVR42uxbC1BVVRQ9FJCBGiLy1cHAT5hUpGU5fRStCBt1Ks0sHWqyIRqzprJxYEiDaqbGGSlFo59ODiX9zGrGyqwMzdSUsoBELCFAMK34igKvtWVfPO96733vwfvx5u6ZNefe8z/7rHv2PvuBnzDFp2Ty/HWhSHYAl7t4qC5g7QWmyn1ObnMDeUiIOxkmgXxPLnLjWH79ikA4ngNNfniX+PdyIxcieQTYuKswfY0biPM4kqeAw8AUc9tcK3HDQ8U9qYniqsuiRMigi8/mtbadFqWVDSIz7ytrAmFz0uzs9zDIUszPeUAIMBHtC5B/xsVrGgnEMIFMcaEkT4oT2RnTRIC/tXEaGBQoGlvaNU+gt+3sewOgEKiWCfS3G8hjiptkaEiQyEyfeh557DVh1cBJg7pV0nMq42tT7b4jM24eKwYEnu/VtJ06Izq7LDBjZwwJlI3TZL09A6HeUYoBmCr3LUmIC7d6bzjRLDJytoi6403OdaLZsY0gMwYy/S7lBSAZTSYO+f/inc7CBCAM+AN5VXb2HYckGiDK/+nmm94AJOPJ7POJfAjzPtWLfkYgGSX5j9UGdSn4F406v/J7COuN5Gfkt7pj7YOCrSMAu3+pNiRPX25hryN5CPgEmM15lyA5AVxIvhjexyDNAoZL7bYjuR8KqdPo0w/JIuAZugioitsdmNt7SK4D3sI4z2mUZyN5kPSD8nlSPs07B1jM5FHkNMq20S0Q9cvsGH86khfpgqHK34dkKfr4RpWfiSSXiILn25G+BMwFlJBFC/JXoN3L7j6RTrV32KzT2zhQgFZQiclD8gqwjskjG85k4AMNpVO7IuA1Jg998bRZNVzFkeBYJBALhOqUh3J5pCqf5rxMOnmOEHl4I1N11qxeRwaSL5k8pP3fgAouprxtqLNAR5c0n/30gXFeJ+cHE6nQbr43mj1XBRJjeTPoWA5k5byv6BnKmKCqvwK4W3oehnbjACLgOFasK80WmeN0fn2YTC7GjmcyUdxpNXDQRh8TmYR+/JFEoY/xwBg2R/tY3wWoG6/RBc2BfMsZAAVfyJTeSDddLl/s7HXHjwgVSxZM7sHwyMFW5UkJ0Vbl068fZWjCHsPCZuuMlaXYZzvlPtT/VHK669E3KWAOZ9FvNT+x4olcT3L+StRdrnLYy1Dnezxe7eI4k/IxFWFMC49Np+d3DFvyLJ/Ae4B5aNspraEca0jBYykQzuvNULWvBG5AXdluFKNdPl1wgCucveiYiMFibkqibvno2KFnocj6zfsNT6AkYJYOwhycW5PGza0eSatkRhSZxV9bB/sOnhD68i38/CY2bWQvHO9b+HWVTB5p/eQfFkhhELU0q8ijiBI8DfK0uapraDI8gcghLtFp66ybkFbQMYnTg6xktwvGPQYSkPlZAtwF3In3vUg/Bt7lsIWRXCr5absN6u1UTDyRzs7bXZO3+Ds1DY2GBNpsbxzIyTKE00YP6+cJgEISTzMhrmXkYrOXQze5Bm1l5+E/g3ryBxLMlwXPEaK+URRtPefaTZ0UJ4YNCe55rzh6Qhwoqz13itT847w4kBNFUXi4JyfBfs9akIVuj9cAM4EHOB6Vg/wK1Nmk01zWbIzQj+hHcGqxQTS3SGX1SZH3zi7J5wmzIhCRRy535y3MEVGc87HYpGgn9GdRbZbDRAL2ABTDohvUAS6aY7QX0gmaYlAvmdMSHX+n34k3EOgz3nSay/M6dYId6E8xE4kcnJSdXX8mhZYjPFCDTC18/RZSYE+LdOQ0f8SvS7U+BI6uL+LXTcJHxOMmDMo/AuUW0tUfSMMzOaOrgL/YF6G4zEIHuvyBHWEKFeSjv43svE/gWEqCxuZSvIkiwRTI3AKUs25m8bxIdtgYN5djWXRj3Ym+6Kr+LX8YdENbyXGlCo4rCfMEcp48yvETknuBH0V3FLqYyVPrQF/05ynKTyXp3Af1R/EUijlpGfVbObSwjAlIPs1x4A2+PtPc1tj4ECrZzLVwXOlDPg2pH/pAovg2ewefbD5DoA0MR/5Yq5jbbJfyTkt9HdNpV8jlpSrlk0M5hYNxSui/kzczhW9G1G6rHScaObA3AZ9LYQMi46uiO6q9lwkmR5bplKLf9ug3r2Ypn07BF4Bp6LfNjrFpfokc76mTfLJyXtuVqHNI1ayE17ZFp9sqSa9eJ37eOCn+Vb9LKyDnYD/0gQTK8Rbyg2w5sKgziMdv6eP4ZI47+roOB8dME/b/kaCVrM6aKZISonre6Ypv6xbmlQQypf8QyPy3Ht+TdjeOZTEJ5Hvyhej+MxJXC/1nav7/AgwA/C1EFr3d9coAAAAASUVORK5CYII=";
const _imports_1 = "" + buildAssetsURL("bus2.CD1k8kJ3.png");
const _imports_0 = "" + buildAssetsURL("map.Rg7XGIgM.jpeg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Gmap",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultCenter = {
      lat: 18.265426666666666,
      lng: 102.62241633333333
    };
    const locations = ref([
      {
        title: "Dansavanh Casino Resort",
        // Image: Image1,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 18.431522,
          lng: 102.648778
        }
      },
      {
        title: "Dansavanh Golf & Resort",
        //   Image: Image2,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 18.394955,
          lng: 102.649904
        }
      },
      {
        title: "Dansavanh Vientiane Hotel",
        //   Image: Image3,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 17.970802,
          lng: 102.568567
        }
      }
    ]);
    const selectedLocation = ref(null);
    const ShowInfo = (location) => {
      selectedLocation.value = location === selectedLocation.value ? null : location;
    };
    const MapLink = (lat, lng) => {
      const googleMapsUrl = `https://www.google.com/maps/place/${lat},${lng}`;
      (void 0).open(googleMapsUrl, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(GoogleMap), mergeProps({
        "api-key": unref(apiKey),
        style: { "width": "100%", "height": "550px" },
        center: defaultCenter,
        zoom: 10
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MarkerCluster), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locations), (location) => {
                    _push3(ssrRenderComponent(unref(CustomMarker), {
                      key: location,
                      options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} width="50" height="50" style="${ssrRenderStyle({ "margin-top": "8px", "cursor": "pointer" })}"${_scopeId3}></div>`);
                          if (unref(selectedLocation) === location) {
                            _push4(ssrRenderComponent(unref(InfoWindow), {
                              options: { position: location.position }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div id="content"${_scopeId4}><div id="siteNotice"${_scopeId4}></div><h1 id="firstHeading" class="firstHeading"${_scopeId4}>${ssrInterpolate(location.title)}</h1><div id="bodyContent"${_scopeId4}><img${ssrRenderAttr("src", location.image)} style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId4}><p${_scopeId4}><a${_scopeId4}> - Navigate to here</a></p></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { id: "content" }, [
                                      createVNode("div", { id: "siteNotice" }),
                                      createVNode("h1", {
                                        id: "firstHeading",
                                        class: "firstHeading"
                                      }, toDisplayString(location.title), 1),
                                      createVNode("div", { id: "bodyContent" }, [
                                        createVNode("img", {
                                          src: location.image,
                                          style: { "width": "200px" }
                                        }, null, 8, ["src"]),
                                        createVNode("p", null, [
                                          createVNode("a", {
                                            onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                          }, " - Navigate to here", 8, ["onClick"])
                                        ])
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { style: { "text-align": "center" } }, [
                              createVNode("img", {
                                onClick: ($event) => ShowInfo(location),
                                src: _imports_0,
                                width: "50",
                                height: "50",
                                style: { "margin-top": "8px", "cursor": "pointer" }
                              }, null, 8, ["onClick"])
                            ]),
                            unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                              key: 0,
                              options: { position: location.position }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { id: "content" }, [
                                  createVNode("div", { id: "siteNotice" }),
                                  createVNode("h1", {
                                    id: "firstHeading",
                                    class: "firstHeading"
                                  }, toDisplayString(location.title), 1),
                                  createVNode("div", { id: "bodyContent" }, [
                                    createVNode("img", {
                                      src: location.image,
                                      style: { "width": "200px" }
                                    }, null, 8, ["src"]),
                                    createVNode("p", null, [
                                      createVNode("a", {
                                        onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                      }, " - Navigate to here", 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["options"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locations), (location) => {
                      return openBlock(), createBlock(unref(CustomMarker), {
                        key: location,
                        options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "text-align": "center" } }, [
                            createVNode("img", {
                              onClick: ($event) => ShowInfo(location),
                              src: _imports_0,
                              width: "50",
                              height: "50",
                              style: { "margin-top": "8px", "cursor": "pointer" }
                            }, null, 8, ["onClick"])
                          ]),
                          unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                            key: 0,
                            options: { position: location.position }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { id: "content" }, [
                                createVNode("div", { id: "siteNotice" }),
                                createVNode("h1", {
                                  id: "firstHeading",
                                  class: "firstHeading"
                                }, toDisplayString(location.title), 1),
                                createVNode("div", { id: "bodyContent" }, [
                                  createVNode("img", {
                                    src: location.image,
                                    style: { "width": "200px" }
                                  }, null, 8, ["src"]),
                                  createVNode("p", null, [
                                    createVNode("a", {
                                      onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                    }, " - Navigate to here", 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["options"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["options"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MarkerCluster), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(locations), (location) => {
                    return openBlock(), createBlock(unref(CustomMarker), {
                      key: location,
                      options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "text-align": "center" } }, [
                          createVNode("img", {
                            onClick: ($event) => ShowInfo(location),
                            src: _imports_0,
                            width: "50",
                            height: "50",
                            style: { "margin-top": "8px", "cursor": "pointer" }
                          }, null, 8, ["onClick"])
                        ]),
                        unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                          key: 0,
                          options: { position: location.position }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { id: "content" }, [
                              createVNode("div", { id: "siteNotice" }),
                              createVNode("h1", {
                                id: "firstHeading",
                                class: "firstHeading"
                              }, toDisplayString(location.title), 1),
                              createVNode("div", { id: "bodyContent" }, [
                                createVNode("img", {
                                  src: location.image,
                                  style: { "width": "200px" }
                                }, null, 8, ["src"]),
                                createVNode("p", null, [
                                  createVNode("a", {
                                    onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                  }, " - Navigate to here", 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["options"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["options"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/Gmap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const openNotificationWithIcon = (type) => {
      const noti = api;
      noti[type]({
        message: "Thank you! Your email is sent.",
        description: "Thank you! Your email is sent."
      });
    };
    const submit = () => {
      formState.user = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
      formState.subscriber = {
        email: ""
      };
      openNotificationWithIcon("success");
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    const formState = reactive({
      user: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      subscriber: {
        email: ""
      }
    });
    useHead({
      title: "Contact",
      meta: [{ name: "description", content: "Contact" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderTitle2 = __nuxt_component_0;
      const _component_a_layout_content = LayoutContent;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_CarOutlined = lib.CarOutlined;
      const _component_PhoneOutlined = lib.PhoneOutlined;
      const _component_RedEnvelopeOutlined = lib.RedEnvelopeOutlined;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderTitle2, {
        img: "https://storage.googleapis.com/dsv-bucket/imgs/imgs/8d8c4bf8-8796-481c-ab80-adc67f98c6b0.jpg",
        title: _ctx.$t("contactTitle"),
        caption: _ctx.$t("contactSubTitle")
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { class: "max-width content-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "end",
              style: { "margin-top": "50px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "margin": "2rem 0 2rem" })}" data-v-1fcb6913${_scopeId3}><span style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-1fcb6913${_scopeId3}>HOME</span><span style="${ssrRenderStyle({ "margin": "0 10px 0 10px", "color": "#a9a9a9" })}" data-v-1fcb6913${_scopeId3}>/</span><span style="${ssrRenderStyle({ "color": "#a9a9a9" })}" data-v-1fcb6913${_scopeId3}>CONTACT</span></div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                            createVNode("span", {
                              style: { "cursor": "pointer" },
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                            }, "HOME", 8, ["onClick"]),
                            createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#a9a9a9" } }, "/"),
                            createVNode("span", { style: { "color": "#a9a9a9" } }, "CONTACT")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a href="https://www.facebook.com/casino.dansavanh" target="_blank" data-v-1fcb6913${_scopeId3}><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-1fcb6913${_scopeId3}></a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: "https://www.facebook.com/casino.dansavanh",
                            target: "_blank"
                          }, [
                            createVNode("img", {
                              src: _imports_0$1,
                              alt: ""
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                          createVNode("span", {
                            style: { "cursor": "pointer" },
                            onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                          }, "HOME", 8, ["onClick"]),
                          createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#a9a9a9" } }, "/"),
                          createVNode("span", { style: { "color": "#a9a9a9" } }, "CONTACT")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://www.facebook.com/casino.dansavanh",
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ minHeight: "280px" })}" data-v-1fcb6913${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    class: "map-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("clickOnMarker"))}</h3>`);
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      span: 24,
                      class: "map-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    lg: 24,
                    class: "contact-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-1fcb6913${_scopeId3}><h3 style="${ssrRenderStyle({ "margin-bottom": "15px" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("dLocation"))}</h3><h4 style="${ssrRenderStyle({ "margin-bottom": "15px" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("gettingHere"))}</h4><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}> Wattay Airport \u2013 Look out for Dansavanh Meet &amp; Greet counter at the arrival hall. <br data-v-1fcb6913${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}> Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm<br data-v-1fcb6913${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}> Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval<br data-v-1fcb6913${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}> A private limousine can be arranged via VIP hotline<br data-v-1fcb6913${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}> Please <a href="https://wa.me/8562052241111" target="_blank" data-v-1fcb6913${_scopeId3}><b data-v-1fcb6913${_scopeId3}>click here</b></a> to contact us on WhatsApp:\xA0<span style="${ssrRenderStyle({ "font-family": "Calibri, sans-serif", "font-size": "11pt" })}" data-v-1fcb6913${_scopeId3}><a href="https://wa.me/8562052241111" target="_blank" data-v-1fcb6913${_scopeId3}><b data-v-1fcb6913${_scopeId3}>+8562052241111</b></a></span><br data-v-1fcb6913${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}><span lang="EN" data-v-1fcb6913${_scopeId3}>\xA0You may also contact us on\xA0<b data-v-1fcb6913${_scopeId3}><a href="weixin://dl/chat?+85602058276666" target="_blank" data-v-1fcb6913${_scopeId3}>+8560205827</a>5555</b></span></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}><b data-v-1fcb6913${_scopeId3}>Email: Marketing@dansavanh.com</b></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-1fcb6913${_scopeId3}><a href="https://www.instagram.com/dansavanhnamngumresort/" target="_blank" data-v-1fcb6913${_scopeId3}><b data-v-1fcb6913${_scopeId3}>Follow us here on Instagram!</b></a></p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                            createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" A private limousine can be arranged via VIP hotline"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Please "),
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "click here")
                              ]),
                              createTextVNode(" to contact us on WhatsApp:\xA0"),
                              createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                                createVNode("a", {
                                  href: "https://wa.me/8562052241111",
                                  target: "_blank"
                                }, [
                                  createVNode("b", null, "+8562052241111")
                                ])
                              ]),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("span", { lang: "EN" }, [
                                createTextVNode("\xA0You may also contact us on\xA0"),
                                createVNode("b", null, [
                                  createVNode("a", {
                                    href: "weixin://dl/chat?+85602058276666",
                                    target: "_blank"
                                  }, "+8560205827"),
                                  createTextVNode("5555")
                                ])
                              ])
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("b", null, "Email: Marketing@dansavanh.com")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("a", {
                                href: "https://www.instagram.com/dansavanhnamngumresort/",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "Follow us here on Instagram!")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      lg: 24,
                      class: "contact-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                          createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" A private limousine can be arranged via VIP hotline"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Please "),
                            createVNode("a", {
                              href: "https://wa.me/8562052241111",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "click here")
                            ]),
                            createTextVNode(" to contact us on WhatsApp:\xA0"),
                            createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "+8562052241111")
                              ])
                            ]),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("span", { lang: "EN" }, [
                              createTextVNode("\xA0You may also contact us on\xA0"),
                              createVNode("b", null, [
                                createVNode("a", {
                                  href: "weixin://dl/chat?+85602058276666",
                                  target: "_blank"
                                }, "+8560205827"),
                                createTextVNode("5555")
                              ])
                            ])
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("b", null, "Email: Marketing@dansavanh.com")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("a", {
                              href: "https://www.instagram.com/dansavanhnamngumresort/",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "Follow us here on Instagram!")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              gutter: 20
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-1fcb6913${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CarOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("shuttleBus"))}</h4><img class="img"${ssrRenderAttr("src", _imports_1)} data-v-1fcb6913${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_CarOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                            createVNode("img", {
                              class: "img",
                              src: _imports_1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-1fcb6913${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PhoneOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("tel"))}</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important", "font-size": "16px" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("telInfo"))}<br data-v-1fcb6913${_scopeId3}><br data-v-1fcb6913${_scopeId3}><span class="nmr" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("tel1"))}:</span><span class="nmr2" data-v-1fcb6913${_scopeId3}>+856 21 217 595</span><br data-v-1fcb6913${_scopeId3}><span class="nmr" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("tel2"))}:</span><span class="nmr2" data-v-1fcb6913${_scopeId3}>+856 20 5827 5555</span><br data-v-1fcb6913${_scopeId3}><span class="nmr" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("tel3"))}:</span><span class="nmr2" data-v-1fcb6913${_scopeId3}>+6684-604-0827</span></p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_PhoneOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                            createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                              createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                              createVNode("br"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-1fcb6913${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RedEnvelopeOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("email"))}</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("emailInfo"))}<br data-v-1fcb6913${_scopeId3}><br data-v-1fcb6913${_scopeId3}> info@dansavanh.net </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                            createVNode("p", { style: { "font-weight": "600 !important" } }, [
                              createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                              createVNode("br"),
                              createVNode("br"),
                              createTextVNode(" info@dansavanh.net ")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_CarOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                          createVNode("img", {
                            class: "img",
                            src: _imports_1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_PhoneOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode(" info@dansavanh.net ")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_a_row, {
                justify: "end",
                style: { "margin-top": "50px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                        createVNode("span", {
                          style: { "cursor": "pointer" },
                          onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                        }, "HOME", 8, ["onClick"]),
                        createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#a9a9a9" } }, "/"),
                        createVNode("span", { style: { "color": "#a9a9a9" } }, "CONTACT")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "https://www.facebook.com/casino.dansavanh",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { minHeight: "280px" } }, [
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      span: 24,
                      class: "map-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      lg: 24,
                      class: "contact-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                          createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" A private limousine can be arranged via VIP hotline"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Please "),
                            createVNode("a", {
                              href: "https://wa.me/8562052241111",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "click here")
                            ]),
                            createTextVNode(" to contact us on WhatsApp:\xA0"),
                            createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "+8562052241111")
                              ])
                            ]),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("span", { lang: "EN" }, [
                              createTextVNode("\xA0You may also contact us on\xA0"),
                              createVNode("b", null, [
                                createVNode("a", {
                                  href: "weixin://dl/chat?+85602058276666",
                                  target: "_blank"
                                }, "+8560205827"),
                                createTextVNode("5555")
                              ])
                            ])
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("b", null, "Email: Marketing@dansavanh.com")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("a", {
                              href: "https://www.instagram.com/dansavanhnamngumresort/",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "Follow us here on Instagram!")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, {
                  justify: "center",
                  gutter: 20
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_CarOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                          createVNode("img", {
                            class: "img",
                            src: _imports_1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_PhoneOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode(" info@dansavanh.net ")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        style: { "background": "white", "padding": "100px 20px 100px 20px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center" style="${ssrRenderStyle({ "max-width": "750px", "margin": "auto" })}" data-v-1fcb6913${_scopeId2}><h1 class="text-bold" style="${ssrRenderStyle({ "font-size": "40px" })}" data-v-1fcb6913${_scopeId2}>${ssrInterpolate(_ctx.$t("contactForm"))}</h1><p style="${ssrRenderStyle({ "font-size": "20px" })}" class="text-thin" data-v-1fcb6913${_scopeId2}>${ssrInterpolate(_ctx.$t("contactFormCaption"))}</p><img style="${ssrRenderStyle({ "width": "200px", "margin": "30px 0 30px" })}"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-1fcb6913${_scopeId2}></div><form data-v-1fcb6913${_scopeId2}><input required${ssrRenderAttr("value", formState.user.name)} type="text" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formName"))} data-v-1fcb6913${_scopeId2}><input required${ssrRenderAttr("value", formState.user.phone)} type="text" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formPhone"))} data-v-1fcb6913${_scopeId2}><input required${ssrRenderAttr("value", formState.user.email)} type="email" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formEmail"))} data-v-1fcb6913${_scopeId2}><textarea required type="text" class="input" rows="6"${ssrRenderAttr("placeholder", _ctx.$t("formMessage"))} data-v-1fcb6913${_scopeId2}>${ssrInterpolate(formState.user.message)}</textarea><div class="text-center" data-v-1fcb6913${_scopeId2}><button class="btn btn-2 hover-slide-up" type="submit" data-v-1fcb6913${_scopeId2}><span data-v-1fcb6913${_scopeId2}>${ssrInterpolate(_ctx.$t("formSubmit"))}</span></button></div></form>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-center",
                      style: { "max-width": "750px", "margin": "auto" }
                    }, [
                      createVNode("h1", {
                        class: "text-bold",
                        style: { "font-size": "40px" }
                      }, toDisplayString(_ctx.$t("contactForm")), 1),
                      createVNode("p", {
                        style: { "font-size": "20px" },
                        class: "text-thin"
                      }, toDisplayString(_ctx.$t("contactFormCaption")), 1),
                      createVNode("img", {
                        style: { "width": "200px", "margin": "30px 0 30px" },
                        src: _imports_0$2,
                        alt: ""
                      })
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.name = $event,
                        type: "text",
                        class: "input",
                        placeholder: _ctx.$t("formName")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.name]
                      ]),
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.phone = $event,
                        type: "text",
                        class: "input",
                        placeholder: _ctx.$t("formPhone")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.phone]
                      ]),
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.email = $event,
                        type: "email",
                        class: "input",
                        placeholder: _ctx.$t("formEmail")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.email]
                      ]),
                      withDirectives(createVNode("textarea", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.message = $event,
                        type: "text",
                        class: "input",
                        rows: "6",
                        placeholder: _ctx.$t("formMessage")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.message]
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("button", {
                          class: "btn btn-2 hover-slide-up",
                          type: "submit"
                        }, [
                          createVNode("span", null, toDisplayString(_ctx.$t("formSubmit")), 1)
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "text-center",
                    style: { "max-width": "750px", "margin": "auto" }
                  }, [
                    createVNode("h1", {
                      class: "text-bold",
                      style: { "font-size": "40px" }
                    }, toDisplayString(_ctx.$t("contactForm")), 1),
                    createVNode("p", {
                      style: { "font-size": "20px" },
                      class: "text-thin"
                    }, toDisplayString(_ctx.$t("contactFormCaption")), 1),
                    createVNode("img", {
                      style: { "width": "200px", "margin": "30px 0 30px" },
                      src: _imports_0$2,
                      alt: ""
                    })
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.name = $event,
                      type: "text",
                      class: "input",
                      placeholder: _ctx.$t("formName")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.name]
                    ]),
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.phone = $event,
                      type: "text",
                      class: "input",
                      placeholder: _ctx.$t("formPhone")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.phone]
                    ]),
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.email = $event,
                      type: "email",
                      class: "input",
                      placeholder: _ctx.$t("formEmail")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.email]
                    ]),
                    withDirectives(createVNode("textarea", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.message = $event,
                      type: "text",
                      class: "input",
                      rows: "6",
                      placeholder: _ctx.$t("formMessage")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.message]
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        class: "btn btn-2 hover-slide-up",
                        type: "submit"
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("formSubmit")), 1)
                      ])
                    ])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, {
              class: "content-container subscription",
              justify: "center",
              style: { "height": "450px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center" data-v-1fcb6913${_scopeId3}><h1 class="text-white" style="${ssrRenderStyle({ "font-size": "40px" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetter"))}</h1><p class="text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetterCaption"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center" }, [
                            createVNode("h1", {
                              class: "text-white",
                              style: { "font-size": "40px" }
                            }, toDisplayString(_ctx.$t("newsLetter")), 1),
                            createVNode("p", {
                              class: "text-white",
                              style: { "font-size": "20px" }
                            }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form class="subscrip-form" style="${ssrRenderStyle({ "width": "100%" })}" data-v-1fcb6913${_scopeId3}><div class="input-container" style="${ssrRenderStyle({ "max-width": "600px", "margin": "auto" })}" data-v-1fcb6913${_scopeId3}><input required${ssrRenderAttr("value", formState.subscriber.email)} type="email" class="input"${ssrRenderAttr("placeholder", _ctx.$t("newsLetterEmail"))} data-v-1fcb6913${_scopeId3}><button class="btn btn-2 hover-slide-up mail-btn" style="${ssrRenderStyle({ "background": "#6fb586", "height": "55px" })}" type="submit" data-v-1fcb6913${_scopeId3}><span data-v-1fcb6913${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetterSubmit"))}</span></button></div></form>`);
                      } else {
                        return [
                          createVNode("form", {
                            class: "subscrip-form",
                            style: { "width": "100%" },
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, [
                            createVNode("div", {
                              class: "input-container",
                              style: { "max-width": "600px", "margin": "auto" }
                            }, [
                              withDirectives(createVNode("input", {
                                required: "",
                                "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                                type: "email",
                                class: "input",
                                placeholder: _ctx.$t("newsLetterEmail")
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, formState.subscriber.email]
                              ]),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up mail-btn",
                                style: { "background": "#6fb586", "height": "55px" },
                                type: "submit"
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                              ])
                            ])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h1", {
                            class: "text-white",
                            style: { "font-size": "40px" }
                          }, toDisplayString(_ctx.$t("newsLetter")), 1),
                          createVNode("p", {
                            class: "text-white",
                            style: { "font-size": "20px" }
                          }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("form", {
                          class: "subscrip-form",
                          style: { "width": "100%" },
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", {
                            class: "input-container",
                            style: { "max-width": "600px", "margin": "auto" }
                          }, [
                            withDirectives(createVNode("input", {
                              required: "",
                              "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                              type: "email",
                              class: "input",
                              placeholder: _ctx.$t("newsLetterEmail")
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vModelText, formState.subscriber.email]
                            ]),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up mail-btn",
                              style: { "background": "#6fb586", "height": "55px" },
                              type: "submit"
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                            ])
                          ])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_row, {
                class: "content-container subscription",
                justify: "center",
                style: { "height": "450px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h1", {
                          class: "text-white",
                          style: { "font-size": "40px" }
                        }, toDisplayString(_ctx.$t("newsLetter")), 1),
                        createVNode("p", {
                          class: "text-white",
                          style: { "font-size": "20px" }
                        }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("form", {
                        class: "subscrip-form",
                        style: { "width": "100%" },
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", {
                          class: "input-container",
                          style: { "max-width": "600px", "margin": "auto" }
                        }, [
                          withDirectives(createVNode("input", {
                            required: "",
                            "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                            type: "email",
                            class: "input",
                            placeholder: _ctx.$t("newsLetterEmail")
                          }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                            [vModelText, formState.subscriber.email]
                          ]),
                          createVNode("button", {
                            class: "btn btn-2 hover-slide-up mail-btn",
                            style: { "background": "#6fb586", "height": "55px" },
                            type: "submit"
                          }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                          ])
                        ])
                      ], 32)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1fcb6913"]]);

export { index as default };
//# sourceMappingURL=index-Xv0qjNH_.mjs.map
