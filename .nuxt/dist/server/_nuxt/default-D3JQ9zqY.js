import { O as objectType, a1 as arrayType, a2 as functionType, c as classNames, g as genComponentStyleHook, m as merge, u as useConfigInject, w as withInstall, N as getPropsSlot, aa as defaultPresetColors, ab as derivative$2, ac as genColorMapToken, ad as genFontMapToken, ae as genControlHeight, j as defaultConfig, a as useToken$1 } from "./useConfigInject-BAI3R2rN.js";
import _extends from "@babel/runtime/helpers/esm/extends";
import { generate } from "@ant-design/colors";
import { TinyColor } from "@ctrl/tinycolor";
import { defineComponent, shallowRef, watch, nextTick, createVNode, Transition, withDirectives, vShow, ref, computed, inject, provide, mergeProps, unref, isRef, withCtx, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, withAsyncContext, resolveComponent, createTextVNode, createCommentVNode, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BMzrlL8w.js";
import { l as lib } from "./index-D9Y5kwcV.js";
import { i as useMainStore, s as storeToRefs, l as useI18n, m as useSwitchLocalePath, f as useLocalePath, k as useFetch, g as useRoute, c as useRuntimeConfig } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { S as Select, a as SelectOption } from "./index-BQzSJT0B.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./index-DxkjXEE1.js";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { o as omit, K as KeyCode, C as Portal } from "./Title-CgfrIVWU.js";
import { P as PropTypes, i as initDefaultProps, a as isNumeric, b as LayoutFooter } from "./index-DTnbOyTJ.js";
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined.js";
import { d as devWarning } from "./slide-Ihodq-aK.js";
import { N as NoCompactStyle } from "./Compact-win22T6h.js";
import { b as getTransitionProps, c as getTransitionName } from "./Portal-BjKSqELH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { P as Paragraph } from "./index-C-AAQvTb.js";
import { C as ConfigProvider } from "./index-BExbrbsb.js";
import "@emotion/hash";
import "@emotion/unitless";
import "stylis";
import "@ant-design/icons-svg/lib/asn/AccountBookFilled.js";
import "@ant-design/icons-svg/lib/asn/AccountBookOutlined.js";
import "@ant-design/icons-svg/lib/asn/AccountBookTwoTone.js";
import "@ant-design/icons-svg/lib/asn/AimOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlertFilled.js";
import "@ant-design/icons-svg/lib/asn/AlertOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlertTwoTone.js";
import "@ant-design/icons-svg/lib/asn/AlibabaOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlignCenterOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlignLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlignRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlipayCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/AlipayCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlipayOutlined.js";
import "@ant-design/icons-svg/lib/asn/AlipaySquareFilled.js";
import "@ant-design/icons-svg/lib/asn/AliwangwangFilled.js";
import "@ant-design/icons-svg/lib/asn/AliwangwangOutlined.js";
import "@ant-design/icons-svg/lib/asn/AliyunOutlined.js";
import "@ant-design/icons-svg/lib/asn/AmazonCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/AmazonOutlined.js";
import "@ant-design/icons-svg/lib/asn/AmazonSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/AndroidFilled.js";
import "@ant-design/icons-svg/lib/asn/AndroidOutlined.js";
import "@ant-design/icons-svg/lib/asn/AntCloudOutlined.js";
import "@ant-design/icons-svg/lib/asn/AntDesignOutlined.js";
import "@ant-design/icons-svg/lib/asn/ApartmentOutlined.js";
import "@ant-design/icons-svg/lib/asn/ApiFilled.js";
import "@ant-design/icons-svg/lib/asn/ApiOutlined.js";
import "@ant-design/icons-svg/lib/asn/ApiTwoTone.js";
import "@ant-design/icons-svg/lib/asn/AppleFilled.js";
import "@ant-design/icons-svg/lib/asn/AppleOutlined.js";
import "@ant-design/icons-svg/lib/asn/AppstoreAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/AppstoreFilled.js";
import "@ant-design/icons-svg/lib/asn/AppstoreOutlined.js";
import "@ant-design/icons-svg/lib/asn/AppstoreTwoTone.js";
import "@ant-design/icons-svg/lib/asn/AreaChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/ArrowDownOutlined.js";
import "@ant-design/icons-svg/lib/asn/ArrowLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/ArrowRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/ArrowUpOutlined.js";
import "@ant-design/icons-svg/lib/asn/ArrowsAltOutlined.js";
import "@ant-design/icons-svg/lib/asn/AudioFilled.js";
import "@ant-design/icons-svg/lib/asn/AudioMutedOutlined.js";
import "@ant-design/icons-svg/lib/asn/AudioOutlined.js";
import "@ant-design/icons-svg/lib/asn/AudioTwoTone.js";
import "@ant-design/icons-svg/lib/asn/AuditOutlined.js";
import "@ant-design/icons-svg/lib/asn/BackwardFilled.js";
import "@ant-design/icons-svg/lib/asn/BackwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/BankFilled.js";
import "@ant-design/icons-svg/lib/asn/BankOutlined.js";
import "@ant-design/icons-svg/lib/asn/BankTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BarChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/BarcodeOutlined.js";
import "@ant-design/icons-svg/lib/asn/BarsOutlined.js";
import "@ant-design/icons-svg/lib/asn/BehanceCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/BehanceOutlined.js";
import "@ant-design/icons-svg/lib/asn/BehanceSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/BehanceSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/BellFilled.js";
import "@ant-design/icons-svg/lib/asn/BellOutlined.js";
import "@ant-design/icons-svg/lib/asn/BellTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BgColorsOutlined.js";
import "@ant-design/icons-svg/lib/asn/BlockOutlined.js";
import "@ant-design/icons-svg/lib/asn/BoldOutlined.js";
import "@ant-design/icons-svg/lib/asn/BookFilled.js";
import "@ant-design/icons-svg/lib/asn/BookOutlined.js";
import "@ant-design/icons-svg/lib/asn/BookTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BorderBottomOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderInnerOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderOuterOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderTopOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderVerticleOutlined.js";
import "@ant-design/icons-svg/lib/asn/BorderlessTableOutlined.js";
import "@ant-design/icons-svg/lib/asn/BoxPlotFilled.js";
import "@ant-design/icons-svg/lib/asn/BoxPlotOutlined.js";
import "@ant-design/icons-svg/lib/asn/BoxPlotTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BranchesOutlined.js";
import "@ant-design/icons-svg/lib/asn/BugFilled.js";
import "@ant-design/icons-svg/lib/asn/BugOutlined.js";
import "@ant-design/icons-svg/lib/asn/BugTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BuildFilled.js";
import "@ant-design/icons-svg/lib/asn/BuildOutlined.js";
import "@ant-design/icons-svg/lib/asn/BuildTwoTone.js";
import "@ant-design/icons-svg/lib/asn/BulbFilled.js";
import "@ant-design/icons-svg/lib/asn/BulbOutlined.js";
import "@ant-design/icons-svg/lib/asn/BulbTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CalculatorFilled.js";
import "@ant-design/icons-svg/lib/asn/CalculatorOutlined.js";
import "@ant-design/icons-svg/lib/asn/CalculatorTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CalendarFilled.js";
import "@ant-design/icons-svg/lib/asn/CalendarOutlined.js";
import "@ant-design/icons-svg/lib/asn/CalendarTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CameraFilled.js";
import "@ant-design/icons-svg/lib/asn/CameraOutlined.js";
import "@ant-design/icons-svg/lib/asn/CameraTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CarFilled.js";
import "@ant-design/icons-svg/lib/asn/CarOutlined.js";
import "@ant-design/icons-svg/lib/asn/CarTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CaretDownFilled.js";
import "@ant-design/icons-svg/lib/asn/CaretDownOutlined.js";
import "@ant-design/icons-svg/lib/asn/CaretLeftFilled.js";
import "@ant-design/icons-svg/lib/asn/CaretLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/CaretRightFilled.js";
import "@ant-design/icons-svg/lib/asn/CaretRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/CaretUpFilled.js";
import "@ant-design/icons-svg/lib/asn/CaretUpOutlined.js";
import "@ant-design/icons-svg/lib/asn/CarryOutFilled.js";
import "@ant-design/icons-svg/lib/asn/CarryOutOutlined.js";
import "@ant-design/icons-svg/lib/asn/CarryOutTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CheckCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/CheckCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CheckOutlined.js";
import "@ant-design/icons-svg/lib/asn/CheckSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/CheckSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/CheckSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ChromeFilled.js";
import "@ant-design/icons-svg/lib/asn/ChromeOutlined.js";
import "@ant-design/icons-svg/lib/asn/CiCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CiCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/CiCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CiOutlined.js";
import "@ant-design/icons-svg/lib/asn/CiTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ClearOutlined.js";
import "@ant-design/icons-svg/lib/asn/ClockCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/ClockCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/ClockCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CloseCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloseCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CloseOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloseSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/CloseSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloseSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CloudDownloadOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloudFilled.js";
import "@ant-design/icons-svg/lib/asn/CloudOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloudServerOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloudSyncOutlined.js";
import "@ant-design/icons-svg/lib/asn/CloudTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CloudUploadOutlined.js";
import "@ant-design/icons-svg/lib/asn/ClusterOutlined.js";
import "@ant-design/icons-svg/lib/asn/CodeFilled.js";
import "@ant-design/icons-svg/lib/asn/CodeOutlined.js";
import "@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CodeSandboxOutlined.js";
import "@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/CodeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CodepenCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CodepenCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/CodepenOutlined.js";
import "@ant-design/icons-svg/lib/asn/CodepenSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/CoffeeOutlined.js";
import "@ant-design/icons-svg/lib/asn/ColumnHeightOutlined.js";
import "@ant-design/icons-svg/lib/asn/ColumnWidthOutlined.js";
import "@ant-design/icons-svg/lib/asn/CommentOutlined.js";
import "@ant-design/icons-svg/lib/asn/CompassFilled.js";
import "@ant-design/icons-svg/lib/asn/CompassOutlined.js";
import "@ant-design/icons-svg/lib/asn/CompassTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CompressOutlined.js";
import "@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined.js";
import "@ant-design/icons-svg/lib/asn/ContactsFilled.js";
import "@ant-design/icons-svg/lib/asn/ContactsOutlined.js";
import "@ant-design/icons-svg/lib/asn/ContactsTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ContainerFilled.js";
import "@ant-design/icons-svg/lib/asn/ContainerOutlined.js";
import "@ant-design/icons-svg/lib/asn/ContainerTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ControlFilled.js";
import "@ant-design/icons-svg/lib/asn/ControlOutlined.js";
import "@ant-design/icons-svg/lib/asn/ControlTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CopyFilled.js";
import "@ant-design/icons-svg/lib/asn/CopyOutlined.js";
import "@ant-design/icons-svg/lib/asn/CopyTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CopyrightCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CopyrightOutlined.js";
import "@ant-design/icons-svg/lib/asn/CopyrightTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CreditCardFilled.js";
import "@ant-design/icons-svg/lib/asn/CreditCardOutlined.js";
import "@ant-design/icons-svg/lib/asn/CreditCardTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CrownFilled.js";
import "@ant-design/icons-svg/lib/asn/CrownOutlined.js";
import "@ant-design/icons-svg/lib/asn/CrownTwoTone.js";
import "@ant-design/icons-svg/lib/asn/CustomerServiceFilled.js";
import "@ant-design/icons-svg/lib/asn/CustomerServiceOutlined.js";
import "@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DashOutlined.js";
import "@ant-design/icons-svg/lib/asn/DashboardFilled.js";
import "@ant-design/icons-svg/lib/asn/DashboardOutlined.js";
import "@ant-design/icons-svg/lib/asn/DashboardTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DatabaseFilled.js";
import "@ant-design/icons-svg/lib/asn/DatabaseOutlined.js";
import "@ant-design/icons-svg/lib/asn/DatabaseTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DeleteColumnOutlined.js";
import "@ant-design/icons-svg/lib/asn/DeleteFilled.js";
import "@ant-design/icons-svg/lib/asn/DeleteOutlined.js";
import "@ant-design/icons-svg/lib/asn/DeleteRowOutlined.js";
import "@ant-design/icons-svg/lib/asn/DeleteTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined.js";
import "@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined.js";
import "@ant-design/icons-svg/lib/asn/DesktopOutlined.js";
import "@ant-design/icons-svg/lib/asn/DiffFilled.js";
import "@ant-design/icons-svg/lib/asn/DiffOutlined.js";
import "@ant-design/icons-svg/lib/asn/DiffTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DingdingOutlined.js";
import "@ant-design/icons-svg/lib/asn/DingtalkCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/DingtalkOutlined.js";
import "@ant-design/icons-svg/lib/asn/DingtalkSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/DisconnectOutlined.js";
import "@ant-design/icons-svg/lib/asn/DislikeFilled.js";
import "@ant-design/icons-svg/lib/asn/DislikeOutlined.js";
import "@ant-design/icons-svg/lib/asn/DislikeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DollarCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/DollarCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/DollarCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DollarOutlined.js";
import "@ant-design/icons-svg/lib/asn/DollarTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DotChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/DoubleLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/DoubleRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/DownCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/DownCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/DownCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DownOutlined.js";
import "@ant-design/icons-svg/lib/asn/DownSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/DownSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/DownSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/DownloadOutlined.js";
import "@ant-design/icons-svg/lib/asn/DragOutlined.js";
import "@ant-design/icons-svg/lib/asn/DribbbleCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/DribbbleOutlined.js";
import "@ant-design/icons-svg/lib/asn/DribbbleSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/DropboxCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/DropboxOutlined.js";
import "@ant-design/icons-svg/lib/asn/DropboxSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/EditFilled.js";
import "@ant-design/icons-svg/lib/asn/EditOutlined.js";
import "@ant-design/icons-svg/lib/asn/EditTwoTone.js";
import "@ant-design/icons-svg/lib/asn/EllipsisOutlined.js";
import "@ant-design/icons-svg/lib/asn/EnterOutlined.js";
import "@ant-design/icons-svg/lib/asn/EnvironmentFilled.js";
import "@ant-design/icons-svg/lib/asn/EnvironmentOutlined.js";
import "@ant-design/icons-svg/lib/asn/EnvironmentTwoTone.js";
import "@ant-design/icons-svg/lib/asn/EuroCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/EuroCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/EuroCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/EuroOutlined.js";
import "@ant-design/icons-svg/lib/asn/EuroTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ExceptionOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ExclamationOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExpandAltOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExpandOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExperimentFilled.js";
import "@ant-design/icons-svg/lib/asn/ExperimentOutlined.js";
import "@ant-design/icons-svg/lib/asn/ExperimentTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ExportOutlined.js";
import "@ant-design/icons-svg/lib/asn/EyeFilled.js";
import "@ant-design/icons-svg/lib/asn/EyeInvisibleFilled.js";
import "@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js";
import "@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/EyeOutlined.js";
import "@ant-design/icons-svg/lib/asn/EyeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FacebookFilled.js";
import "@ant-design/icons-svg/lib/asn/FacebookOutlined.js";
import "@ant-design/icons-svg/lib/asn/FallOutlined.js";
import "@ant-design/icons-svg/lib/asn/FastBackwardFilled.js";
import "@ant-design/icons-svg/lib/asn/FastBackwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/FastForwardFilled.js";
import "@ant-design/icons-svg/lib/asn/FastForwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/FieldBinaryOutlined.js";
import "@ant-design/icons-svg/lib/asn/FieldNumberOutlined.js";
import "@ant-design/icons-svg/lib/asn/FieldStringOutlined.js";
import "@ant-design/icons-svg/lib/asn/FieldTimeOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileAddFilled.js";
import "@ant-design/icons-svg/lib/asn/FileAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileAddTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileDoneOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileExcelFilled.js";
import "@ant-design/icons-svg/lib/asn/FileExcelOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileExcelTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileExclamationFilled.js";
import "@ant-design/icons-svg/lib/asn/FileExclamationOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileExclamationTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileFilled.js";
import "@ant-design/icons-svg/lib/asn/FileGifOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileImageFilled.js";
import "@ant-design/icons-svg/lib/asn/FileImageOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileImageTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileJpgOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileMarkdownFilled.js";
import "@ant-design/icons-svg/lib/asn/FileMarkdownOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileOutlined.js";
import "@ant-design/icons-svg/lib/asn/FilePdfFilled.js";
import "@ant-design/icons-svg/lib/asn/FilePdfOutlined.js";
import "@ant-design/icons-svg/lib/asn/FilePdfTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FilePptFilled.js";
import "@ant-design/icons-svg/lib/asn/FilePptOutlined.js";
import "@ant-design/icons-svg/lib/asn/FilePptTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileProtectOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileSearchOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileSyncOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileTextFilled.js";
import "@ant-design/icons-svg/lib/asn/FileTextOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileTextTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileUnknownFilled.js";
import "@ant-design/icons-svg/lib/asn/FileUnknownOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileUnknownTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileWordFilled.js";
import "@ant-design/icons-svg/lib/asn/FileWordOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileWordTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FileZipFilled.js";
import "@ant-design/icons-svg/lib/asn/FileZipOutlined.js";
import "@ant-design/icons-svg/lib/asn/FileZipTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FilterFilled.js";
import "@ant-design/icons-svg/lib/asn/FilterOutlined.js";
import "@ant-design/icons-svg/lib/asn/FilterTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FireFilled.js";
import "@ant-design/icons-svg/lib/asn/FireOutlined.js";
import "@ant-design/icons-svg/lib/asn/FireTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FlagFilled.js";
import "@ant-design/icons-svg/lib/asn/FlagOutlined.js";
import "@ant-design/icons-svg/lib/asn/FlagTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FolderAddFilled.js";
import "@ant-design/icons-svg/lib/asn/FolderAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/FolderAddTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FolderFilled.js";
import "@ant-design/icons-svg/lib/asn/FolderOpenFilled.js";
import "@ant-design/icons-svg/lib/asn/FolderOpenOutlined.js";
import "@ant-design/icons-svg/lib/asn/FolderOpenTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FolderOutlined.js";
import "@ant-design/icons-svg/lib/asn/FolderTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FolderViewOutlined.js";
import "@ant-design/icons-svg/lib/asn/FontColorsOutlined.js";
import "@ant-design/icons-svg/lib/asn/FontSizeOutlined.js";
import "@ant-design/icons-svg/lib/asn/ForkOutlined.js";
import "@ant-design/icons-svg/lib/asn/FormOutlined.js";
import "@ant-design/icons-svg/lib/asn/FormatPainterFilled.js";
import "@ant-design/icons-svg/lib/asn/FormatPainterOutlined.js";
import "@ant-design/icons-svg/lib/asn/ForwardFilled.js";
import "@ant-design/icons-svg/lib/asn/ForwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/FrownFilled.js";
import "@ant-design/icons-svg/lib/asn/FrownOutlined.js";
import "@ant-design/icons-svg/lib/asn/FrownTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FullscreenExitOutlined.js";
import "@ant-design/icons-svg/lib/asn/FullscreenOutlined.js";
import "@ant-design/icons-svg/lib/asn/FunctionOutlined.js";
import "@ant-design/icons-svg/lib/asn/FundFilled.js";
import "@ant-design/icons-svg/lib/asn/FundOutlined.js";
import "@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined.js";
import "@ant-design/icons-svg/lib/asn/FundTwoTone.js";
import "@ant-design/icons-svg/lib/asn/FundViewOutlined.js";
import "@ant-design/icons-svg/lib/asn/FunnelPlotFilled.js";
import "@ant-design/icons-svg/lib/asn/FunnelPlotOutlined.js";
import "@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone.js";
import "@ant-design/icons-svg/lib/asn/GatewayOutlined.js";
import "@ant-design/icons-svg/lib/asn/GifOutlined.js";
import "@ant-design/icons-svg/lib/asn/GiftFilled.js";
import "@ant-design/icons-svg/lib/asn/GiftOutlined.js";
import "@ant-design/icons-svg/lib/asn/GiftTwoTone.js";
import "@ant-design/icons-svg/lib/asn/GithubFilled.js";
import "@ant-design/icons-svg/lib/asn/GithubOutlined.js";
import "@ant-design/icons-svg/lib/asn/GitlabFilled.js";
import "@ant-design/icons-svg/lib/asn/GitlabOutlined.js";
import "@ant-design/icons-svg/lib/asn/GlobalOutlined.js";
import "@ant-design/icons-svg/lib/asn/GoldFilled.js";
import "@ant-design/icons-svg/lib/asn/GoldOutlined.js";
import "@ant-design/icons-svg/lib/asn/GoldTwoTone.js";
import "@ant-design/icons-svg/lib/asn/GoldenFilled.js";
import "@ant-design/icons-svg/lib/asn/GoogleCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/GoogleOutlined.js";
import "@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/GooglePlusOutlined.js";
import "@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/GoogleSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/GroupOutlined.js";
import "@ant-design/icons-svg/lib/asn/HddFilled.js";
import "@ant-design/icons-svg/lib/asn/HddOutlined.js";
import "@ant-design/icons-svg/lib/asn/HddTwoTone.js";
import "@ant-design/icons-svg/lib/asn/HeartFilled.js";
import "@ant-design/icons-svg/lib/asn/HeartOutlined.js";
import "@ant-design/icons-svg/lib/asn/HeartTwoTone.js";
import "@ant-design/icons-svg/lib/asn/HeatMapOutlined.js";
import "@ant-design/icons-svg/lib/asn/HighlightFilled.js";
import "@ant-design/icons-svg/lib/asn/HighlightOutlined.js";
import "@ant-design/icons-svg/lib/asn/HighlightTwoTone.js";
import "@ant-design/icons-svg/lib/asn/HistoryOutlined.js";
import "@ant-design/icons-svg/lib/asn/HolderOutlined.js";
import "@ant-design/icons-svg/lib/asn/HomeFilled.js";
import "@ant-design/icons-svg/lib/asn/HomeOutlined.js";
import "@ant-design/icons-svg/lib/asn/HomeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/HourglassFilled.js";
import "@ant-design/icons-svg/lib/asn/HourglassOutlined.js";
import "@ant-design/icons-svg/lib/asn/HourglassTwoTone.js";
import "@ant-design/icons-svg/lib/asn/Html5Filled.js";
import "@ant-design/icons-svg/lib/asn/Html5Outlined.js";
import "@ant-design/icons-svg/lib/asn/Html5TwoTone.js";
import "@ant-design/icons-svg/lib/asn/IdcardFilled.js";
import "@ant-design/icons-svg/lib/asn/IdcardOutlined.js";
import "@ant-design/icons-svg/lib/asn/IdcardTwoTone.js";
import "@ant-design/icons-svg/lib/asn/IeCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/IeOutlined.js";
import "@ant-design/icons-svg/lib/asn/IeSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/ImportOutlined.js";
import "@ant-design/icons-svg/lib/asn/InboxOutlined.js";
import "@ant-design/icons-svg/lib/asn/InfoCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/InfoCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/InfoOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsertRowRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/InstagramFilled.js";
import "@ant-design/icons-svg/lib/asn/InstagramOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsuranceFilled.js";
import "@ant-design/icons-svg/lib/asn/InsuranceOutlined.js";
import "@ant-design/icons-svg/lib/asn/InsuranceTwoTone.js";
import "@ant-design/icons-svg/lib/asn/InteractionFilled.js";
import "@ant-design/icons-svg/lib/asn/InteractionOutlined.js";
import "@ant-design/icons-svg/lib/asn/InteractionTwoTone.js";
import "@ant-design/icons-svg/lib/asn/IssuesCloseOutlined.js";
import "@ant-design/icons-svg/lib/asn/ItalicOutlined.js";
import "@ant-design/icons-svg/lib/asn/KeyOutlined.js";
import "@ant-design/icons-svg/lib/asn/LaptopOutlined.js";
import "@ant-design/icons-svg/lib/asn/LayoutFilled.js";
import "@ant-design/icons-svg/lib/asn/LayoutOutlined.js";
import "@ant-design/icons-svg/lib/asn/LayoutTwoTone.js";
import "@ant-design/icons-svg/lib/asn/LeftCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/LeftCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/LeftCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/LeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/LeftSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/LeftSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/LeftSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/LikeFilled.js";
import "@ant-design/icons-svg/lib/asn/LikeOutlined.js";
import "@ant-design/icons-svg/lib/asn/LikeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/LineChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/LineHeightOutlined.js";
import "@ant-design/icons-svg/lib/asn/LineOutlined.js";
import "@ant-design/icons-svg/lib/asn/LinkOutlined.js";
import "@ant-design/icons-svg/lib/asn/LinkedinFilled.js";
import "@ant-design/icons-svg/lib/asn/LinkedinOutlined.js";
import "@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined.js";
import "@ant-design/icons-svg/lib/asn/LoadingOutlined.js";
import "@ant-design/icons-svg/lib/asn/LockFilled.js";
import "@ant-design/icons-svg/lib/asn/LockOutlined.js";
import "@ant-design/icons-svg/lib/asn/LockTwoTone.js";
import "@ant-design/icons-svg/lib/asn/LoginOutlined.js";
import "@ant-design/icons-svg/lib/asn/LogoutOutlined.js";
import "@ant-design/icons-svg/lib/asn/MacCommandFilled.js";
import "@ant-design/icons-svg/lib/asn/MacCommandOutlined.js";
import "@ant-design/icons-svg/lib/asn/MailFilled.js";
import "@ant-design/icons-svg/lib/asn/MailOutlined.js";
import "@ant-design/icons-svg/lib/asn/MailTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ManOutlined.js";
import "@ant-design/icons-svg/lib/asn/MedicineBoxFilled.js";
import "@ant-design/icons-svg/lib/asn/MedicineBoxOutlined.js";
import "@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MediumCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/MediumOutlined.js";
import "@ant-design/icons-svg/lib/asn/MediumSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined.js";
import "@ant-design/icons-svg/lib/asn/MehFilled.js";
import "@ant-design/icons-svg/lib/asn/MehOutlined.js";
import "@ant-design/icons-svg/lib/asn/MehTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MenuFoldOutlined.js";
import "@ant-design/icons-svg/lib/asn/MenuOutlined.js";
import "@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined.js";
import "@ant-design/icons-svg/lib/asn/MergeCellsOutlined.js";
import "@ant-design/icons-svg/lib/asn/MessageFilled.js";
import "@ant-design/icons-svg/lib/asn/MessageOutlined.js";
import "@ant-design/icons-svg/lib/asn/MessageTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MinusCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/MinusCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/MinusCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MinusOutlined.js";
import "@ant-design/icons-svg/lib/asn/MinusSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/MinusSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/MinusSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MobileFilled.js";
import "@ant-design/icons-svg/lib/asn/MobileOutlined.js";
import "@ant-design/icons-svg/lib/asn/MobileTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MoneyCollectFilled.js";
import "@ant-design/icons-svg/lib/asn/MoneyCollectOutlined.js";
import "@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone.js";
import "@ant-design/icons-svg/lib/asn/MonitorOutlined.js";
import "@ant-design/icons-svg/lib/asn/MoreOutlined.js";
import "@ant-design/icons-svg/lib/asn/NodeCollapseOutlined.js";
import "@ant-design/icons-svg/lib/asn/NodeExpandOutlined.js";
import "@ant-design/icons-svg/lib/asn/NodeIndexOutlined.js";
import "@ant-design/icons-svg/lib/asn/NotificationFilled.js";
import "@ant-design/icons-svg/lib/asn/NotificationOutlined.js";
import "@ant-design/icons-svg/lib/asn/NotificationTwoTone.js";
import "@ant-design/icons-svg/lib/asn/NumberOutlined.js";
import "@ant-design/icons-svg/lib/asn/OneToOneOutlined.js";
import "@ant-design/icons-svg/lib/asn/OrderedListOutlined.js";
import "@ant-design/icons-svg/lib/asn/PaperClipOutlined.js";
import "@ant-design/icons-svg/lib/asn/PartitionOutlined.js";
import "@ant-design/icons-svg/lib/asn/PauseCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/PauseCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/PauseCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PauseOutlined.js";
import "@ant-design/icons-svg/lib/asn/PayCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/PayCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/PercentageOutlined.js";
import "@ant-design/icons-svg/lib/asn/PhoneFilled.js";
import "@ant-design/icons-svg/lib/asn/PhoneOutlined.js";
import "@ant-design/icons-svg/lib/asn/PhoneTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PicCenterOutlined.js";
import "@ant-design/icons-svg/lib/asn/PicLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/PicRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/PictureFilled.js";
import "@ant-design/icons-svg/lib/asn/PictureOutlined.js";
import "@ant-design/icons-svg/lib/asn/PictureTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PieChartFilled.js";
import "@ant-design/icons-svg/lib/asn/PieChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/PieChartTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PlayCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/PlayCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/PlayCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PlaySquareFilled.js";
import "@ant-design/icons-svg/lib/asn/PlaySquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/PlaySquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PlusCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/PlusCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/PlusCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PlusOutlined.js";
import "@ant-design/icons-svg/lib/asn/PlusSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/PlusSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/PlusSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PoundCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/PoundCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/PoundCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PoundOutlined.js";
import "@ant-design/icons-svg/lib/asn/PoweroffOutlined.js";
import "@ant-design/icons-svg/lib/asn/PrinterFilled.js";
import "@ant-design/icons-svg/lib/asn/PrinterOutlined.js";
import "@ant-design/icons-svg/lib/asn/PrinterTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ProfileFilled.js";
import "@ant-design/icons-svg/lib/asn/ProfileOutlined.js";
import "@ant-design/icons-svg/lib/asn/ProfileTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ProjectFilled.js";
import "@ant-design/icons-svg/lib/asn/ProjectOutlined.js";
import "@ant-design/icons-svg/lib/asn/ProjectTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PropertySafetyFilled.js";
import "@ant-design/icons-svg/lib/asn/PropertySafetyOutlined.js";
import "@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone.js";
import "@ant-design/icons-svg/lib/asn/PullRequestOutlined.js";
import "@ant-design/icons-svg/lib/asn/PushpinFilled.js";
import "@ant-design/icons-svg/lib/asn/PushpinOutlined.js";
import "@ant-design/icons-svg/lib/asn/PushpinTwoTone.js";
import "@ant-design/icons-svg/lib/asn/QqCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/QqOutlined.js";
import "@ant-design/icons-svg/lib/asn/QqSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/QrcodeOutlined.js";
import "@ant-design/icons-svg/lib/asn/QuestionCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/QuestionCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/QuestionOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadarChartOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadiusSettingOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined.js";
import "@ant-design/icons-svg/lib/asn/RadiusUprightOutlined.js";
import "@ant-design/icons-svg/lib/asn/ReadFilled.js";
import "@ant-design/icons-svg/lib/asn/ReadOutlined.js";
import "@ant-design/icons-svg/lib/asn/ReconciliationFilled.js";
import "@ant-design/icons-svg/lib/asn/ReconciliationOutlined.js";
import "@ant-design/icons-svg/lib/asn/ReconciliationTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RedEnvelopeFilled.js";
import "@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined.js";
import "@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RedditCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/RedditOutlined.js";
import "@ant-design/icons-svg/lib/asn/RedditSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/RedoOutlined.js";
import "@ant-design/icons-svg/lib/asn/ReloadOutlined.js";
import "@ant-design/icons-svg/lib/asn/RestFilled.js";
import "@ant-design/icons-svg/lib/asn/RestOutlined.js";
import "@ant-design/icons-svg/lib/asn/RestTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RetweetOutlined.js";
import "@ant-design/icons-svg/lib/asn/RightCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/RightCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/RightCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RightOutlined.js";
import "@ant-design/icons-svg/lib/asn/RightSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/RightSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/RightSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RiseOutlined.js";
import "@ant-design/icons-svg/lib/asn/RobotFilled.js";
import "@ant-design/icons-svg/lib/asn/RobotOutlined.js";
import "@ant-design/icons-svg/lib/asn/RocketFilled.js";
import "@ant-design/icons-svg/lib/asn/RocketOutlined.js";
import "@ant-design/icons-svg/lib/asn/RocketTwoTone.js";
import "@ant-design/icons-svg/lib/asn/RollbackOutlined.js";
import "@ant-design/icons-svg/lib/asn/RotateLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/RotateRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/SafetyCertificateFilled.js";
import "@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined.js";
import "@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SafetyOutlined.js";
import "@ant-design/icons-svg/lib/asn/SaveFilled.js";
import "@ant-design/icons-svg/lib/asn/SaveOutlined.js";
import "@ant-design/icons-svg/lib/asn/SaveTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ScanOutlined.js";
import "@ant-design/icons-svg/lib/asn/ScheduleFilled.js";
import "@ant-design/icons-svg/lib/asn/ScheduleOutlined.js";
import "@ant-design/icons-svg/lib/asn/ScheduleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ScissorOutlined.js";
import "@ant-design/icons-svg/lib/asn/SearchOutlined.js";
import "@ant-design/icons-svg/lib/asn/SecurityScanFilled.js";
import "@ant-design/icons-svg/lib/asn/SecurityScanOutlined.js";
import "@ant-design/icons-svg/lib/asn/SecurityScanTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SelectOutlined.js";
import "@ant-design/icons-svg/lib/asn/SendOutlined.js";
import "@ant-design/icons-svg/lib/asn/SettingFilled.js";
import "@ant-design/icons-svg/lib/asn/SettingOutlined.js";
import "@ant-design/icons-svg/lib/asn/SettingTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ShakeOutlined.js";
import "@ant-design/icons-svg/lib/asn/ShareAltOutlined.js";
import "@ant-design/icons-svg/lib/asn/ShopFilled.js";
import "@ant-design/icons-svg/lib/asn/ShopOutlined.js";
import "@ant-design/icons-svg/lib/asn/ShopTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ShoppingCartOutlined.js";
import "@ant-design/icons-svg/lib/asn/ShoppingFilled.js";
import "@ant-design/icons-svg/lib/asn/ShoppingOutlined.js";
import "@ant-design/icons-svg/lib/asn/ShoppingTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ShrinkOutlined.js";
import "@ant-design/icons-svg/lib/asn/SignalFilled.js";
import "@ant-design/icons-svg/lib/asn/SisternodeOutlined.js";
import "@ant-design/icons-svg/lib/asn/SketchCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/SketchOutlined.js";
import "@ant-design/icons-svg/lib/asn/SketchSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/SkinFilled.js";
import "@ant-design/icons-svg/lib/asn/SkinOutlined.js";
import "@ant-design/icons-svg/lib/asn/SkinTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SkypeFilled.js";
import "@ant-design/icons-svg/lib/asn/SkypeOutlined.js";
import "@ant-design/icons-svg/lib/asn/SlackCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/SlackOutlined.js";
import "@ant-design/icons-svg/lib/asn/SlackSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/SlackSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/SlidersFilled.js";
import "@ant-design/icons-svg/lib/asn/SlidersOutlined.js";
import "@ant-design/icons-svg/lib/asn/SlidersTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SmallDashOutlined.js";
import "@ant-design/icons-svg/lib/asn/SmileFilled.js";
import "@ant-design/icons-svg/lib/asn/SmileOutlined.js";
import "@ant-design/icons-svg/lib/asn/SmileTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SnippetsFilled.js";
import "@ant-design/icons-svg/lib/asn/SnippetsOutlined.js";
import "@ant-design/icons-svg/lib/asn/SnippetsTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SolutionOutlined.js";
import "@ant-design/icons-svg/lib/asn/SortAscendingOutlined.js";
import "@ant-design/icons-svg/lib/asn/SortDescendingOutlined.js";
import "@ant-design/icons-svg/lib/asn/SoundFilled.js";
import "@ant-design/icons-svg/lib/asn/SoundOutlined.js";
import "@ant-design/icons-svg/lib/asn/SoundTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SplitCellsOutlined.js";
import "@ant-design/icons-svg/lib/asn/StarFilled.js";
import "@ant-design/icons-svg/lib/asn/StarOutlined.js";
import "@ant-design/icons-svg/lib/asn/StarTwoTone.js";
import "@ant-design/icons-svg/lib/asn/StepBackwardFilled.js";
import "@ant-design/icons-svg/lib/asn/StepBackwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/StepForwardFilled.js";
import "@ant-design/icons-svg/lib/asn/StepForwardOutlined.js";
import "@ant-design/icons-svg/lib/asn/StockOutlined.js";
import "@ant-design/icons-svg/lib/asn/StopFilled.js";
import "@ant-design/icons-svg/lib/asn/StopOutlined.js";
import "@ant-design/icons-svg/lib/asn/StopTwoTone.js";
import "@ant-design/icons-svg/lib/asn/StrikethroughOutlined.js";
import "@ant-design/icons-svg/lib/asn/SubnodeOutlined.js";
import "@ant-design/icons-svg/lib/asn/SwapLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/SwapOutlined.js";
import "@ant-design/icons-svg/lib/asn/SwapRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/SwitcherFilled.js";
import "@ant-design/icons-svg/lib/asn/SwitcherOutlined.js";
import "@ant-design/icons-svg/lib/asn/SwitcherTwoTone.js";
import "@ant-design/icons-svg/lib/asn/SyncOutlined.js";
import "@ant-design/icons-svg/lib/asn/TableOutlined.js";
import "@ant-design/icons-svg/lib/asn/TabletFilled.js";
import "@ant-design/icons-svg/lib/asn/TabletOutlined.js";
import "@ant-design/icons-svg/lib/asn/TabletTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TagFilled.js";
import "@ant-design/icons-svg/lib/asn/TagOutlined.js";
import "@ant-design/icons-svg/lib/asn/TagTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TagsFilled.js";
import "@ant-design/icons-svg/lib/asn/TagsOutlined.js";
import "@ant-design/icons-svg/lib/asn/TagsTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TaobaoCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/TaobaoOutlined.js";
import "@ant-design/icons-svg/lib/asn/TaobaoSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/TeamOutlined.js";
import "@ant-design/icons-svg/lib/asn/ThunderboltFilled.js";
import "@ant-design/icons-svg/lib/asn/ThunderboltOutlined.js";
import "@ant-design/icons-svg/lib/asn/ThunderboltTwoTone.js";
import "@ant-design/icons-svg/lib/asn/ToTopOutlined.js";
import "@ant-design/icons-svg/lib/asn/ToolFilled.js";
import "@ant-design/icons-svg/lib/asn/ToolOutlined.js";
import "@ant-design/icons-svg/lib/asn/ToolTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TrademarkCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TrademarkOutlined.js";
import "@ant-design/icons-svg/lib/asn/TransactionOutlined.js";
import "@ant-design/icons-svg/lib/asn/TranslationOutlined.js";
import "@ant-design/icons-svg/lib/asn/TrophyFilled.js";
import "@ant-design/icons-svg/lib/asn/TrophyOutlined.js";
import "@ant-design/icons-svg/lib/asn/TrophyTwoTone.js";
import "@ant-design/icons-svg/lib/asn/TwitterCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/TwitterOutlined.js";
import "@ant-design/icons-svg/lib/asn/TwitterSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/UnderlineOutlined.js";
import "@ant-design/icons-svg/lib/asn/UndoOutlined.js";
import "@ant-design/icons-svg/lib/asn/UngroupOutlined.js";
import "@ant-design/icons-svg/lib/asn/UnlockFilled.js";
import "@ant-design/icons-svg/lib/asn/UnlockOutlined.js";
import "@ant-design/icons-svg/lib/asn/UnlockTwoTone.js";
import "@ant-design/icons-svg/lib/asn/UnorderedListOutlined.js";
import "@ant-design/icons-svg/lib/asn/UpCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/UpCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/UpCircleTwoTone.js";
import "@ant-design/icons-svg/lib/asn/UpOutlined.js";
import "@ant-design/icons-svg/lib/asn/UpSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/UpSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/UpSquareTwoTone.js";
import "@ant-design/icons-svg/lib/asn/UploadOutlined.js";
import "@ant-design/icons-svg/lib/asn/UsbFilled.js";
import "@ant-design/icons-svg/lib/asn/UsbOutlined.js";
import "@ant-design/icons-svg/lib/asn/UsbTwoTone.js";
import "@ant-design/icons-svg/lib/asn/UserAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/UserDeleteOutlined.js";
import "@ant-design/icons-svg/lib/asn/UserOutlined.js";
import "@ant-design/icons-svg/lib/asn/UserSwitchOutlined.js";
import "@ant-design/icons-svg/lib/asn/UsergroupAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerifiedOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerticalLeftOutlined.js";
import "@ant-design/icons-svg/lib/asn/VerticalRightOutlined.js";
import "@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined.js";
import "@ant-design/icons-svg/lib/asn/VideoCameraFilled.js";
import "@ant-design/icons-svg/lib/asn/VideoCameraOutlined.js";
import "@ant-design/icons-svg/lib/asn/VideoCameraTwoTone.js";
import "@ant-design/icons-svg/lib/asn/WalletFilled.js";
import "@ant-design/icons-svg/lib/asn/WalletOutlined.js";
import "@ant-design/icons-svg/lib/asn/WalletTwoTone.js";
import "@ant-design/icons-svg/lib/asn/WarningFilled.js";
import "@ant-design/icons-svg/lib/asn/WarningOutlined.js";
import "@ant-design/icons-svg/lib/asn/WarningTwoTone.js";
import "@ant-design/icons-svg/lib/asn/WechatFilled.js";
import "@ant-design/icons-svg/lib/asn/WechatOutlined.js";
import "@ant-design/icons-svg/lib/asn/WeiboCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/WeiboCircleOutlined.js";
import "@ant-design/icons-svg/lib/asn/WeiboOutlined.js";
import "@ant-design/icons-svg/lib/asn/WeiboSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/WeiboSquareOutlined.js";
import "@ant-design/icons-svg/lib/asn/WhatsAppOutlined.js";
import "@ant-design/icons-svg/lib/asn/WifiOutlined.js";
import "@ant-design/icons-svg/lib/asn/WindowsFilled.js";
import "@ant-design/icons-svg/lib/asn/WindowsOutlined.js";
import "@ant-design/icons-svg/lib/asn/WomanOutlined.js";
import "@ant-design/icons-svg/lib/asn/YahooFilled.js";
import "@ant-design/icons-svg/lib/asn/YahooOutlined.js";
import "@ant-design/icons-svg/lib/asn/YoutubeFilled.js";
import "@ant-design/icons-svg/lib/asn/YoutubeOutlined.js";
import "@ant-design/icons-svg/lib/asn/YuqueFilled.js";
import "@ant-design/icons-svg/lib/asn/YuqueOutlined.js";
import "@ant-design/icons-svg/lib/asn/ZhihuCircleFilled.js";
import "@ant-design/icons-svg/lib/asn/ZhihuOutlined.js";
import "@ant-design/icons-svg/lib/asn/ZhihuSquareFilled.js";
import "@ant-design/icons-svg/lib/asn/ZoomInOutlined.js";
import "@ant-design/icons-svg/lib/asn/ZoomOutOutlined.js";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "vue3-google-map";
import "@ant-design/icons-vue/es/icons/DownOutlined.js";
import "@ant-design/icons-vue/es/icons/LoadingOutlined.js";
import "@ant-design/icons-vue/es/icons/CheckOutlined.js";
import "@ant-design/icons-vue/es/icons/CloseCircleFilled.js";
import "@ant-design/icons-vue/es/icons/SearchOutlined.js";
import "./createContext-DErE1G0Y.js";
import "resize-observer-polyfill";
import "@ant-design/icons-vue/es/icons/EnterOutlined.js";
import "dom-align";
import "@ant-design/icons-vue/es/icons/CopyOutlined.js";
import "@ant-design/icons-vue/es/icons/EditOutlined.js";
import "vue-types";
import "@ant-design/icons-vue/es/icons/BarsOutlined.js";
import "@ant-design/icons-vue/es/icons/RightOutlined.js";
import "@ant-design/icons-vue/es/icons/LeftOutlined.js";
import "lodash-es";
import "@ant-design/icons-vue/es/icons/CheckCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/InfoCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/CloseCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/ExclamationCircleFilled.js";
import "@ant-design/icons-vue/es/icons/CheckCircleFilled.js";
import "@ant-design/icons-vue/es/icons/InfoCircleFilled.js";
const props = () => ({
  prefixCls: String,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: {
    type: Object,
    default: void 0
  },
  class: String,
  rootClassName: String,
  rootStyle: objectType(),
  placement: {
    type: String
  },
  wrapperClassName: String,
  level: {
    type: [String, Array]
  },
  levelMove: {
    type: [Number, Function, Array]
  },
  duration: String,
  ease: String,
  showMask: {
    type: Boolean,
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  maskStyle: {
    type: Object,
    default: void 0
  },
  afterVisibleChange: Function,
  keyboard: {
    type: Boolean,
    default: void 0
  },
  contentWrapperStyle: arrayType(),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  // Motion
  motion: functionType(),
  maskMotion: objectType()
});
const drawerProps$1 = () => _extends(_extends({}, props()), {
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
});
const drawerChildProps = () => _extends(_extends({}, props()), {
  getContainer: Function,
  getOpenCount: Function,
  scrollLocker: PropTypes.any,
  inline: Boolean
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DrawerChild = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: drawerChildProps(),
  emits: ["close", "handleClick", "change"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const contentWrapper = shallowRef();
    const dom = shallowRef();
    const maskDom = shallowRef();
    const handlerDom = shallowRef();
    const contentDom = shallowRef();
    `drawer_id_${Number((Date.now() + Math.random()).toString().replace(".", Math.round(Math.random() * 9).toString())).toString(16)}`;
    watch(() => props2.level, () => {
      getLevelDom();
    }, {
      flush: "post"
    });
    watch(() => props2.open, () => {
      const {
        open,
        getContainer,
        scrollLocker,
        showMask,
        autofocus
      } = props2;
      const container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      if (container && container.parentNode === (void 0).body) ;
      if (open) {
        if (autofocus) {
          domFocus();
        }
        if (showMask) {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
        }
      } else {
        scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
      }
    }, {
      flush: "post"
    });
    watch(() => props2.placement, (val) => {
      if (val) {
        contentDom.value = null;
      }
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = dom.value) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    const onKeyDown = (e) => {
      if (e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onClose(e);
      }
    };
    const onAfterVisibleChange = () => {
      const {
        open,
        afterVisibleChange
      } = props2;
      if (afterVisibleChange) {
        afterVisibleChange(!!open);
      }
    };
    const getLevelDom = (_ref2) => {
      {
        return;
      }
    };
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const canOpen = shallowRef(false);
    watch(dom, () => {
      nextTick(() => {
        canOpen.value = true;
      });
    });
    return () => {
      var _a, _b;
      const {
        width,
        height,
        open: $open,
        prefixCls,
        placement,
        level,
        levelMove,
        ease,
        duration,
        getContainer,
        onChange,
        afterVisibleChange,
        showMask,
        maskClosable,
        maskStyle,
        keyboard,
        getOpenCount,
        scrollLocker,
        contentWrapperStyle,
        style,
        class: className,
        rootClassName,
        rootStyle,
        maskMotion,
        motion,
        inline
      } = props2, otherProps = __rest$2(props2, ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class", "rootClassName", "rootStyle", "maskMotion", "motion", "inline"]);
      const open = $open && canOpen.value;
      const wrapperClassName = classNames(prefixCls, {
        [`${prefixCls}-${placement}`]: true,
        [`${prefixCls}-open`]: open,
        [`${prefixCls}-inline`]: inline,
        "no-mask": !showMask,
        [rootClassName]: true
      });
      const motionProps = typeof motion === "function" ? motion(placement) : motion;
      return createVNode("div", _objectSpread(_objectSpread({}, omit(otherProps, ["autofocus"])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": rootStyle,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : void 0
      }), [createVNode(Transition, maskMotion, {
        default: () => [showMask && withDirectives(createVNode("div", {
          "class": `${prefixCls}-mask`,
          "onClick": maskClosable ? onClose : void 0,
          "style": maskStyle,
          "ref": maskDom
        }, null), [[vShow, open]])]
      }), createVNode(Transition, _objectSpread(_objectSpread({}, motionProps), {}, {
        "onAfterEnter": onAfterVisibleChange,
        "onAfterLeave": onAfterVisibleChange
      }), {
        default: () => [withDirectives(createVNode("div", {
          "class": `${prefixCls}-content-wrapper`,
          "style": [contentWrapperStyle],
          "ref": contentWrapper
        }, [createVNode("div", {
          "class": [`${prefixCls}-content`, className],
          "style": style,
          "ref": contentDom
        }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), slots.handler ? createVNode("div", {
          "onClick": onHandleClick,
          "ref": handlerDom
        }, [(_b = slots.handler) === null || _b === void 0 ? void 0 : _b.call(slots)]) : null]), [[vShow, open]])]
      })]);
    };
  }
});
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DrawerWrapper = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: initDefaultProps(drawerProps$1(), {
    prefixCls: "drawer",
    placement: "left",
    getContainer: "body",
    level: "all",
    duration: ".3s",
    ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    afterVisibleChange: () => {
    },
    showMask: true,
    maskClosable: true,
    maskStyle: {},
    wrapperClassName: "",
    keyboard: true,
    forceRender: false,
    autofocus: true
  }),
  emits: ["handleClick", "close"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const dom = ref(null);
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    return () => {
      const {
        getContainer,
        wrapperClassName,
        rootClassName,
        rootStyle,
        forceRender
      } = props2, otherProps = __rest$1(props2, ["getContainer", "wrapperClassName", "rootClassName", "rootStyle", "forceRender"]);
      let portal = null;
      if (!getContainer) {
        return createVNode(DrawerChild, _objectSpread(_objectSpread({}, otherProps), {}, {
          "rootClassName": rootClassName,
          "rootStyle": rootStyle,
          "open": props2.open,
          "onClose": onClose,
          "onHandleClick": onHandleClick,
          "inline": true
        }), slots);
      }
      const $forceRender = !!slots.handler || forceRender;
      if ($forceRender || props2.open || dom.value) {
        portal = createVNode(Portal, {
          "autoLock": true,
          "visible": props2.open,
          "forceRender": $forceRender,
          "getContainer": getContainer,
          "wrapperClassName": wrapperClassName
        }, {
          default: (_a) => {
            var {
              visible,
              afterClose
            } = _a, rest = __rest$1(_a, ["visible", "afterClose"]);
            return createVNode(DrawerChild, _objectSpread(_objectSpread(_objectSpread({
              "ref": dom
            }, otherProps), rest), {}, {
              "rootClassName": rootClassName,
              "rootStyle": rootStyle,
              "open": visible !== void 0 ? visible : props2.open,
              "afterVisibleChange": afterClose !== void 0 ? afterClose : props2.afterVisibleChange,
              "onClose": onClose,
              "onHandleClick": onHandleClick
            }), slots);
          }
        });
      }
      return portal;
    };
  }
});
const genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  const sharedPanelMotion = {
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${motionDurationSlow}`
      }
    }
  };
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: {
        "&-enter, &-appear, &-leave": {
          "&-active": {
            transition: `all ${motionDurationSlow}`
          }
        },
        "&-enter, &-appear": {
          opacity: 0,
          "&-active": {
            opacity: 1
          }
        },
        "&-leave": {
          opacity: 1,
          "&-active": {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: {
        // Left
        "&-left": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(-100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(-100%)"
            }
          }
        }],
        // Right
        "&-right": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(100%)"
            }
          }
        }],
        // Top
        "&-top": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(-100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(-100%)"
            }
          }
        }],
        // Bottom
        "&-bottom": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(100%)"
            }
          }
        }]
      }
    }
  };
};
const genDrawerStyle = (token) => {
  const {
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginSM,
    colorIcon,
    colorIconHover,
    colorText,
    fontWeightStrong,
    drawerFooterPaddingVertical,
    drawerFooterPaddingHorizontal
  } = token;
  const wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: "fixed",
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: "none",
      "&-pure": {
        position: "relative",
        background: colorBgElevated,
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: "absolute",
        zIndex: zIndexPopup,
        transition: `all ${motionDurationSlow}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: colorBgElevated,
        pointerEvents: "auto"
      },
      // ===================== Panel ======================
      [`${componentCls}-wrapper-body`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      // Header
      [`${componentCls}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${padding}px ${paddingLG}px`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: "none"
      },
      [`${componentCls}-close`]: {
        display: "inline-block",
        marginInlineEnd: marginSM,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
        transition: `color ${motionDurationMid}`,
        textRendering: "auto",
        "&:focus, &:hover": {
          color: colorIconHover,
          textDecoration: "none"
        }
      },
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        color: colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: "auto"
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${drawerFooterPaddingVertical}px ${drawerFooterPaddingHorizontal}px`,
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
const useStyle = genComponentStyleHook("Drawer", (token) => {
  const drawerToken = merge(token, {
    drawerFooterPaddingVertical: token.paddingXS,
    drawerFooterPaddingHorizontal: token.padding
  });
  return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase
}));
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const PlacementTypes = ["top", "right", "bottom", "left"];
const defaultPushState = {
  distance: 180
};
const drawerProps = () => ({
  autofocus: {
    type: Boolean,
    default: void 0
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  mask: {
    type: Boolean,
    default: void 0
  },
  maskStyle: objectType(),
  rootClassName: String,
  rootStyle: objectType(),
  size: {
    type: String
  },
  drawerStyle: objectType(),
  headerStyle: objectType(),
  bodyStyle: objectType(),
  contentWrapperStyle: {
    type: Object,
    default: void 0
  },
  title: PropTypes.any,
  /** @deprecated Please use `open` instead */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: Number,
  prefixCls: String,
  push: PropTypes.oneOfType([PropTypes.looseBool, {
    type: Object
  }]),
  placement: PropTypes.oneOf(PlacementTypes),
  keyboard: {
    type: Boolean,
    default: void 0
  },
  extra: PropTypes.any,
  footer: PropTypes.any,
  footerStyle: objectType(),
  level: PropTypes.any,
  levelMove: {
    type: [Number, Array, Function]
  },
  handle: PropTypes.any,
  /** @deprecated Use `@afterVisibleChange` instead */
  afterVisibleChange: Function,
  /** @deprecated Please use `@afterOpenChange` instead */
  onAfterVisibleChange: Function,
  onAfterOpenChange: Function,
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onClose: Function
});
const Drawer$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADrawer",
  inheritAttrs: false,
  props: initDefaultProps(drawerProps(), {
    closable: true,
    placement: "right",
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
    push: defaultPushState
  }),
  slots: Object,
  // emits: ['update:visible', 'close', 'afterVisibleChange'],
  setup(props2, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const sPush = shallowRef(false);
    const destroyClose = shallowRef(false);
    const vcDrawer = shallowRef(null);
    const load = shallowRef(false);
    const visible = shallowRef(false);
    const mergedOpen = computed(() => {
      var _a;
      return (_a = props2.open) !== null && _a !== void 0 ? _a : props2.visible;
    });
    watch(mergedOpen, () => {
      if (mergedOpen.value) {
        load.value = true;
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    watch([mergedOpen, load], () => {
      if (mergedOpen.value && load.value) {
        visible.value = true;
      }
    }, {
      immediate: true
    });
    const parentDrawerOpts = inject("parentDrawerOpts", null);
    const {
      prefixCls,
      getPopupContainer,
      direction
    } = useConfigInject("drawer", props2);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const getContainer = computed(() => (
      // 有可能为 false，所以不能直接判断
      props2.getContainer === void 0 && (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value) ? () => getPopupContainer.value((void 0).body) : props2.getContainer
    ));
    devWarning(!props2.afterVisibleChange, "Drawer", "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead");
    if (process.env.NODE_ENV !== "production") {
      [["visible", "open"], ["onUpdate:visible", "onUpdate:open"], ["onAfterVisibleChange", "onAfterOpenChange"]].forEach((_ref2) => {
        let [deprecatedName, newName] = _ref2;
        devWarning(!props2[deprecatedName], "Drawer", `\`${deprecatedName}\` is deprecated, please use \`${newName}\` instead.`);
      });
    }
    const setPush = () => {
      sPush.value = true;
    };
    const setPull = () => {
      sPush.value = false;
      nextTick(() => {
        domFocus();
      });
    };
    provide("parentDrawerOpts", {
      setPush,
      setPull
    });
    watch(visible, () => {
      if (parentDrawerOpts) {
        if (visible.value) {
          parentDrawerOpts.setPush();
        } else {
          parentDrawerOpts.setPull();
        }
      }
    }, {
      flush: "post"
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = vcDrawer.value) === null || _a === void 0 ? void 0 : _a.domFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const close = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("close", e);
    };
    const afterVisibleChange = (open) => {
      var _a;
      if (!open) {
        if (destroyClose.value === false) {
          destroyClose.value = true;
        }
        if (props2.destroyOnClose) {
          load.value = false;
        }
      }
      (_a = props2.afterVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props2, open);
      emit("afterVisibleChange", open);
      emit("afterOpenChange", open);
    };
    const pushTransform = computed(() => {
      const {
        push,
        placement
      } = props2;
      let distance;
      if (typeof push === "boolean") {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }
      distance = parseFloat(String(distance || 0));
      if (placement === "left" || placement === "right") {
        return `translateX(${placement === "left" ? distance : -distance}px)`;
      }
      if (placement === "top" || placement === "bottom") {
        return `translateY(${placement === "top" ? distance : -distance}px)`;
      }
      return null;
    });
    const mergedWidth = computed(() => {
      var _a;
      return (_a = props2.width) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const mergedHeight = computed(() => {
      var _a;
      return (_a = props2.height) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const offsetStyle = computed(() => {
      const {
        mask,
        placement
      } = props2;
      if (!visible.value && !mask) {
        return {};
      }
      const val = {};
      if (placement === "left" || placement === "right") {
        val.width = isNumeric(mergedWidth.value) ? `${mergedWidth.value}px` : mergedWidth.value;
      } else {
        val.height = isNumeric(mergedHeight.value) ? `${mergedHeight.value}px` : mergedHeight.value;
      }
      return val;
    });
    const wrapperStyle = computed(() => {
      const {
        zIndex,
        contentWrapperStyle
      } = props2;
      const val = offsetStyle.value;
      return [{
        zIndex,
        transform: sPush.value ? pushTransform.value : void 0
      }, _extends({}, contentWrapperStyle), val];
    });
    const renderHeader = (prefixCls2) => {
      const {
        closable,
        headerStyle
      } = props2;
      const extra = getPropsSlot(slots, props2, "extra");
      const title = getPropsSlot(slots, props2, "title");
      if (!title && !closable) {
        return null;
      }
      return createVNode("div", {
        "class": classNames(`${prefixCls2}-header`, {
          [`${prefixCls2}-header-close-only`]: closable && !title && !extra
        }),
        "style": headerStyle
      }, [createVNode("div", {
        "class": `${prefixCls2}-header-title`
      }, [renderCloseIcon(prefixCls2), title && createVNode("div", {
        "class": `${prefixCls2}-title`
      }, [title])]), extra && createVNode("div", {
        "class": `${prefixCls2}-extra`
      }, [extra])]);
    };
    const renderCloseIcon = (prefixCls2) => {
      var _a;
      const {
        closable
      } = props2;
      const $closeIcon = slots.closeIcon ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : props2.closeIcon;
      return closable && createVNode("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": `${prefixCls2}-close`
      }, [$closeIcon === void 0 ? createVNode(CloseOutlined, null, null) : $closeIcon]);
    };
    const renderBody = (prefixCls2) => {
      var _a;
      if (destroyClose.value && !props2.forceRender && !load.value) {
        return null;
      }
      const {
        bodyStyle,
        drawerStyle
      } = props2;
      return createVNode("div", {
        "class": `${prefixCls2}-wrapper-body`,
        "style": drawerStyle
      }, [renderHeader(prefixCls2), createVNode("div", {
        "key": "body",
        "class": `${prefixCls2}-body`,
        "style": bodyStyle
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), renderFooter(prefixCls2)]);
    };
    const renderFooter = (prefixCls2) => {
      const footer = getPropsSlot(slots, props2, "footer");
      if (!footer) {
        return null;
      }
      const footerClassName = `${prefixCls2}-footer`;
      return createVNode("div", {
        "class": footerClassName,
        "style": props2.footerStyle
      }, [footer]);
    };
    const drawerClassName = computed(() => classNames({
      "no-mask": !props2.mask,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, props2.rootClassName, hashId.value));
    const maskMotion = computed(() => {
      return getTransitionProps(getTransitionName(prefixCls.value, "mask-motion"));
    });
    const panelMotion = (motionPlacement) => {
      return getTransitionProps(getTransitionName(prefixCls.value, `panel-motion-${motionPlacement}`));
    };
    return () => {
      const {
        width,
        height,
        placement,
        mask,
        forceRender
      } = props2, rest = __rest(props2, ["width", "height", "placement", "mask", "forceRender"]);
      const vcDrawerProps = _extends(_extends(_extends({}, attrs), omit(rest, ["size", "closeIcon", "closable", "destroyOnClose", "drawerStyle", "headerStyle", "bodyStyle", "title", "push", "onAfterVisibleChange", "onClose", "onUpdate:visible", "onUpdate:open", "visible"])), {
        forceRender,
        onClose: close,
        afterVisibleChange,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible.value,
        showMask: mask,
        placement,
        ref: vcDrawer
      });
      return wrapSSR(createVNode(NoCompactStyle, null, {
        default: () => [createVNode(DrawerWrapper, _objectSpread(_objectSpread({}, vcDrawerProps), {}, {
          "maskMotion": maskMotion.value,
          "motion": panelMotion,
          "width": mergedWidth.value,
          "height": mergedHeight.value,
          "getContainer": getContainer.value,
          "rootClassName": drawerClassName.value,
          "rootStyle": props2.rootStyle,
          "contentWrapperStyle": wrapperStyle.value
        }), {
          handler: props2.handle ? () => props2.handle : slots.handle,
          default: () => renderBody(prefixCls.value)
        })]
      }));
    };
  }
});
const __nuxt_component_0 = withInstall(Drawer$1);
const getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor, {
    theme: "dark"
  });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#000";
  const colorTextBase = textBaseColor || "#fff";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
    colorBgElevated: getSolidColor(colorBgBase, 12),
    colorBgContainer: getSolidColor(colorBgBase, 8),
    colorBgLayout: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getSolidColor(colorBgBase, 26),
    colorBorder: getSolidColor(colorBgBase, 26),
    colorBorderSecondary: getSolidColor(colorBgBase, 19)
  };
};
const derivative$1 = (token, mapToken) => {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate(token[colorKey], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token);
  return _extends(_extends(_extends({}, mergedMapToken), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  }));
};
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  const compactSizeStep = sizeStep - 2;
  return {
    sizeXXL: sizeUnit * (compactSizeStep + 10),
    sizeXL: sizeUnit * (compactSizeStep + 6),
    sizeLG: sizeUnit * (compactSizeStep + 2),
    sizeMD: sizeUnit * (compactSizeStep + 2),
    sizeMS: sizeUnit * (compactSizeStep + 1),
    size: sizeUnit * compactSizeStep,
    sizeSM: sizeUnit * compactSizeStep,
    sizeXS: sizeUnit * (compactSizeStep - 1),
    sizeXXS: sizeUnit * (compactSizeStep - 1)
  };
}
const derivative = (token, mapToken) => {
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token);
  const fontSize = mergedMapToken.fontSizeSM;
  const controlHeight = mergedMapToken.controlHeight - 4;
  return _extends(_extends(_extends(_extends(_extends({}, mergedMapToken), genSizeMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token)), genFontMapToken(fontSize)), {
    // controlHeight
    controlHeight
  }), genControlHeight(_extends(_extends({}, mergedMapToken), {
    controlHeight
  })));
};
function useToken() {
  const [theme2, token, hashId] = useToken$1();
  return {
    theme: theme2,
    token,
    hashId
  };
}
const theme = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig,
  /** Default seedToken */
  defaultSeed: defaultConfig.token,
  useToken,
  defaultAlgorithm: derivative$2,
  darkAlgorithm: derivative$1,
  compactAlgorithm: derivative
};
const _imports_0$1 = "" + __buildAssetsURL("logo-dansavanh4.DJUvXTKr.png");
const enImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQfSURBVHja1JZdbJNlFMd/b1va9X03ugGDsVRYoqgJII6NCCjimJuwkUAYbmEZKIqEmMxoQBwGTIwSRV2EgA4YcAGRIB8BBDaBMAGHBj9QHGQITAZky7qVtuv6tmvfj8eLFrYr8GJceJLn5jnnOf/zP/mfnEcSQvAwzcJDtocOIAE2IAkYNMC5NaDXBiT7v9nvTy0v4cLFNr5YV4fPFwDs/eIMDhxajre8FIBhu/dSMrcasParS2Pw8HSWFj/K+J/rkUaOZERVZZoNUGKXmuk5eJSJxQVs3b6YuiN/0trakSBnAAKbVUKZPh0Am1VixoyxiQZYAUHm6BHkZ0LK1ctYF5bizJkAVZWKBbDVuiYRc8gENtaS1H6bl0tzGf9UFh5PNx6PH48niBCgd3Whd3YiBHg8QTo6/Hh8YR4fk0GRuIXz919wznwRe84EamsbAWwWgJP1F9h1YxCdTzyNumc/4eMNzJo5jsVLXkDTrKhqFCFAqCoiHEYIUNUoMYtM2XNu8lsasUYipFYuIZCcxrYtZ9iz52yfijTN4HpzC59818oPo6bQc/4PvNVfM26UzMqqIkKhXkBgqiqmqgKCUKiXN8dZGXPueyw52bgWL+D0Tzd5b/lumppuYBhSvJ0Aum7S06Ph93ezY98d5Ldn87wcRP2tCff0qayrXogpwAgGATAFbF+Vh+71YS98A5/DxbmGv9m0/hgAaWkymha9J9PRdwKhVkeSgwcNtbdkTlxFBw7fX/sSRHtjDE1VsmwAnlkFOIcMweju/k8C9xTk3ddvdbmIJHLZAAxdR2trwwgEBmTCzFAI0+HoA0ivO4FTlh/4sP3JxwDIvHL9gbGRcBjS0+IAz+SuRtclgsEIABs3L+OV8lz0Ti/qmXPYMzPQsrMRptnXpi6VMaPT6N53GHtmBntvWqlcthmAwYOd2O30l6mEYZggBrFqTRmLynMJHTtJ55wFXDv7F+kvbU1wN+MHyB67gstXPLiKZ3Bny06m1XxI9Vt5JI9wo+sGmmbpAzCMKFlZbhoaV7Pq3QK8q9eirv2MptkLKTlFAhyEacZZiPjds5M/5uiZW7h3fsXQV8sorqulvnwYU/MnoWlaH0Bh4UTqG1aSmy7RXlSGdu0fduQtpXTTJTparmKaAtGPgQBMUxCJdDN/7gZWVh0k6fUKhu+qYeipOjYmX+K1iil9AOs3lGFraKBt3iJC2ZNYIefxeU0j1mgURUlBURxIElhkGYssI0mgKA4URUFWFLZtPU5R/pe0pmTg/vEI1hSZil+/vacirevTDYRPnKZlbgUfHG3nVvOphEsCYoCB3+cj0BufTqfPRywWTtRnAHD+/EWmTV7DR2vnM+/9d5AP1cPZY5oEuIBHgNQBXjgB4Pbdjea4OxMDaDoQlf73v4p/BwAgir62/ncsQQAAAABJRU5ErkJggg==";
const thImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFSSURBVHja1JaxTgJBEIa/3TsVOCOS2FgYjJWllYWJ8RVsbHw7OyufQt/CwkBBpbAHRI7bmbU4LweUZDHxb3Z3ivkn88+fWRNCYJew7Bg7JzBACrSAvci5S2CRAoej+4cxNole/enLcy8FMoylfXcbNfn36xtAlgKpihKKAnU5hADGVCdUd1iPb8bqey1st0sQBUgN0BeRD2vj6q2qJElybivy+F6oc6YAN49PXF6cMM4XUZL3jlq8Dz4bAu89+awgnxUV++/8bovEGnzpVwmEyXSBmxZxzGVg6bUhKEthMJoyidSifN6ivU9DsPSCFxDVKATeK0sj6y2SYFCNM02iivdNsX3nXIgN51wA+n/jg+HVNc4k6HweZwdkGTkrU6ReILXYTidW+QRpRC7VC19ettsmYeO97tTSAF3gDDiOLMMEGNYb7aBuV0R4oDD//lfxMwBSb/PbrcWoTQAAAABJRU5ErkJggg==";
const cnImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHiSURBVHja1Ja/jtNAEMZ/Y2/icBdxXAMSEu/A1dBR0NJQ8CS8AQ0tb4CQgEegPgQFOh7ixJUX4vgSx96ZoUgOO3+KRDgFX7Or0Wg+f7PzeVfcnUMi4cA4OIEAARgAvY5r10AZgOGvl69Gkm4Xk9w3fJTg9f4MDz9+OA3AsSTC4OmThaQE3Bp9w+eRmy+hie2I8us3gOMABFNFkjlW5PTPIvOLAO7YVMjfC/Sd4YuK4nOGuyMiABv7v6pP7mKmACEAeK1YPuPoWU52FgkPUiaf+ngFDjCD+Q/Fproo1vrSbUPuvR4eF7kBwDRi4ynlzxkyUMrvKTZabbrPFb9Jd2qPh7BK4DGiRYFeTJmdC8nAsVKaUes72eOK6Xm2G0GaYhpXCTzPsXEBgOZN8unrktHbAddvAKrdCESwqmoItI74eILlkw0bjt4Zltdg+5hL8NhSYLGmurrCxuPN7Mv951+LAh1kLQWxBlUw68bDGtEqaStQiB0SRMWlbh1yXWPu+MIc/wzTiC0dslBQR0TArfWPwJdr21KyttLKaeJijvmaD0gTMF/z57pPt8W37E1xaylwU0iE5OhON2fgjreMVmuMXC/ntus7QYAT4BFwr+Piv4HL2xstu21Xh4jAXP77V8WfAQAixA0rudAk0AAAAABJRU5ErkJggg==";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const { locale, setLocale } = useI18n();
    useSwitchLocalePath();
    const languages = ref([
      {
        key: "EN",
        image: enImage
      },
      {
        key: "TH",
        image: thImage
      },
      {
        key: "CN",
        image: cnImage
      }
    ]);
    const selectedLanguage = ref("EN");
    const onChanged = () => {
      const key = selectedLanguage.value.toLowerCase();
      setLocale(key);
      switch (key) {
        case "en": {
          selectedIdx.value = 0;
          return;
        }
        case "th": {
          selectedIdx.value = 1;
          return;
        }
        case "cn": {
          selectedIdx.value = 2;
          return;
        }
      }
    };
    const fetchLang = () => {
      switch (selectedIdx.value) {
        case 0: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
        case 1: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
        case 2: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
      }
    };
    fetchLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_select = Select;
      const _component_a_select_option = SelectOption;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(ssrRenderComponent(_component_a_select, mergeProps({
        ref: "select",
        value: unref(selectedLanguage),
        "onUpdate:value": ($event) => isRef(selectedLanguage) ? selectedLanguage.value = $event : null,
        onChange: onChanged
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(languages), (i) => {
              _push2(ssrRenderComponent(_component_a_select_option, {
                key: i.key,
                value: i.key
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, {
                      justify: "center",
                      gutter: 20
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", i.image)} style="${ssrRenderStyle({ "padding-right": "10px" })}" alt=""${_scopeId4}><span${_scopeId4}>${ssrInterpolate(i.key)}</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: i.image,
                                    style: { "padding-right": "10px" },
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, toDisplayString(i.key), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_col, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: i.image,
                                  style: { "padding-right": "10px" },
                                  alt: ""
                                }, null, 8, ["src"]),
                                createVNode("span", null, toDisplayString(i.key), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_row, {
                        justify: "center",
                        gutter: 20
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: i.image,
                                style: { "padding-right": "10px" },
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("span", null, toDisplayString(i.key), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (i) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: i.key,
                  value: i.key
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_row, {
                      justify: "center",
                      gutter: 20
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: i.image,
                              style: { "padding-right": "10px" },
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("span", null, toDisplayString(i.key), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/LanguageSwitcher.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: ["visible"],
  emits: ["onClose"],
  setup(__props, { emit: __emit }) {
    ref("");
    const emit = __emit;
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_drawer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9f47f0bd>`);
      _push(ssrRenderComponent(_component_a_drawer, {
        width: 320,
        title: "",
        placement: "right",
        visible: __props.visible,
        onClose: ($event) => _ctx.$emit("onClose")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, { style: { "position": "absolute", "top": "8px", "right": "10px" } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("home"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/casino"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("casino"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("casino")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/hotels"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("hotels"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("hotels")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/hotels/numngum"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab1"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab1")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/hotels/golf"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab2"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab2")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/hotels/vientaine-hotel"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab3"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab3")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/experience"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("experience"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("experience")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/events"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("events"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("events")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/offer"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("offer"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("offer")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}><p class="line-hover" data-v-9f47f0bd${_scopeId}>${ssrInterpolate(_ctx.$t("more"))}</p><div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/near-by"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("near By"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("near By")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/tour-package"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("tour Package"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("tour Package")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/gallery"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("gallery"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("gallery")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/more/career"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("careerTitle"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("careerTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-9f47f0bd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/news"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("newsTitle"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("newsTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/contact"),
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-9f47f0bd${_scopeId2}>${ssrInterpolate(_ctx.$t("contact"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("contact")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 class="text-white" style="${ssrRenderStyle({ "margin-top": "40px" })}" data-v-9f47f0bd${_scopeId}>ABOUT DANSAVANH</h3><p class="text-white" data-v-9f47f0bd${_scopeId}> Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services. </p><p class="text-white" data-v-9f47f0bd${_scopeId}>VIP hotline : +856-20-58276666</p><p class="text-white" data-v-9f47f0bd${_scopeId}>Tour hotline: +856-20-52241111</p><p class="text-white" data-v-9f47f0bd${_scopeId}>Thai hotline: +66-92193-7777</p><p class="text-white" data-v-9f47f0bd${_scopeId}>info@dansavanh.com</p>`);
          } else {
            return [
              createVNode(_sfc_main$4, { style: { "position": "absolute", "top": "8px", "right": "10px" } }),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("home")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/casino"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("casino")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/hotels"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("hotels")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/hotels/numngum"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab1")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/hotels/golf"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab2")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/hotels/vientaine-hotel"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab3")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/experience"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("experience")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/events"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("events")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/offer"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("offer")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("br"),
              createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("more")), 1),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/near-by"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("near By")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/tour-package"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("tour Package")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/gallery"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("gallery")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/more/career"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("careerTitle")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/news"),
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("newsTitle")), 1)
                  ]),
                  _: 1
                }, 8, ["to", "onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/contact"),
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("contact")), 1)
                ]),
                _: 1
              }, 8, ["to", "onClose"]),
              createVNode("h3", {
                class: "text-white",
                style: { "margin-top": "40px" }
              }, "ABOUT DANSAVANH"),
              createVNode("p", { class: "text-white" }, " Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services. "),
              createVNode("p", { class: "text-white" }, "VIP hotline : +856-20-58276666"),
              createVNode("p", { class: "text-white" }, "Tour hotline: +856-20-52241111"),
              createVNode("p", { class: "text-white" }, "Thai hotline: +66-92193-7777"),
              createVNode("p", { class: "text-white" }, "info@dansavanh.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Drawer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9f47f0bd"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx, main } = storeToRefs(store);
    ref(false);
    const showMoreDropDown = ref(false);
    const drowdownToggle = ref(false);
    const drowdownToggle2 = ref(false);
    const blogs = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      config.public.apiBase + "/getDBlogs?type=Experience",
      "$3Ko0yUi9P8"
    )), __temp = await __temp, __restore(), __temp);
    blogs.value = data.value.dBlogs;
    const visible = ref(false);
    const route = useRoute();
    const localePath = useLocalePath();
    watch(
      () => route.name,
      () => {
        showMoreDropDown.value = false;
        drowdownToggle.value = false;
        drowdownToggle2.value = false;
        visible.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_DownOutlined = lib.DownOutlined;
      const _component_dividerProps = resolveComponent("dividerProps");
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-52630745><div class="navbar" data-v-52630745><div class="navbar-start" data-v-52630745><div class="navbar-brand" data-v-52630745><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-52630745></div></div><div class="navbar-item is-desktop" data-v-52630745>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/"),
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "line-hover",
        to: unref(localePath)("/casino")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("casino"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("casino")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="has-dropdrown" data-v-52630745>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/hotels"),
        class: "line-hover cursor"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hotels"))} `);
            if (unref(drowdownToggle)) {
              _push2(ssrRenderComponent(_component_DownOutlined, { style: { "position": "absolute", "top": "3px", "right": "-18px" } }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hotels")) + " ", 1),
              unref(drowdownToggle) ? (openBlock(), createBlock(_component_DownOutlined, {
                key: 0,
                style: { "position": "absolute", "top": "3px", "right": "-18px" }
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(drowdownToggle)) {
        _push(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "310px !important" })}" data-v-52630745><!--[-->`);
        ssrRenderList(unref(main).hotels, (i, idx) => {
          _push(`<li data-v-52630745>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: unref(localePath)("/hotels/" + i.titles[unref(selectedIdx)]),
            onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle),
            class: "line-hover"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(i.titles[unref(selectedIdx)])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(i.titles[unref(selectedIdx)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="has-dropdrown" data-v-52630745>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/experience"),
        class: "line-hover cursor"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("experience"))} `);
            if (unref(drowdownToggle2)) {
              _push2(ssrRenderComponent(_component_DownOutlined, { style: { "position": "absolute", "top": "3px", "right": "-18px" } }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("experience")) + " ", 1),
              unref(drowdownToggle2) ? (openBlock(), createBlock(_component_DownOutlined, {
                key: 0,
                style: { "position": "absolute", "top": "3px", "right": "-18px" }
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(drowdownToggle2)) {
        _push(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "310px !important" })}" data-v-52630745><!--[-->`);
        ssrRenderList(unref(blogs), (i, idx) => {
          _push(`<li data-v-52630745>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: unref(localePath)(
              "/experience/" + i._id + "?title=" + i.titles[unref(selectedIdx)]
            ),
            onClick: ($event) => drowdownToggle2.value = !unref(drowdownToggle2),
            class: "line-hover"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(i.titles[unref(selectedIdx)])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(i.titles[unref(selectedIdx)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/events"),
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("events"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("events")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/offer"),
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("offer"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("offer")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "line-hover",
        to: unref(localePath)("/new")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` New page `);
          } else {
            return [
              createTextVNode(" New page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dividerProps, { class: "has-dropdrown" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_link, {
              onMouseover: ($event) => {
                showMoreDropDown.value = true;
                drowdownToggle.value = false;
                drowdownToggle2.value = false;
              },
              class: "line-hover"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("more"))} `);
                  if (unref(showMoreDropDown)) {
                    _push3(ssrRenderComponent(_component_DownOutlined, { style: { "position": "absolute", "top": "3px", "right": "-18px" } }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("more")) + " ", 1),
                    unref(showMoreDropDown) ? (openBlock(), createBlock(_component_DownOutlined, {
                      key: 0,
                      style: { "position": "absolute", "top": "3px", "right": "-18px" }
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(showMoreDropDown)) {
              _push2(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "180px !important" })}" data-v-52630745${_scopeId}><li data-v-52630745${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                class: "line-hover",
                to: unref(localePath)("/near-by")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("near By"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("near By")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-52630745${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                class: "line-hover",
                to: unref(localePath)("/tour-package")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("tour Package"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("tour Package")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-52630745${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                class: "line-hover",
                to: unref(localePath)("/gallery")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("gallery"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("gallery")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-52630745${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: unref(localePath)("/more/career"),
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("careerTitle"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("careerTitle")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-52630745${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: unref(localePath)("/news"),
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("newsTitle"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("newsTitle")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_nuxt_link, {
                onMouseover: ($event) => {
                  showMoreDropDown.value = true;
                  drowdownToggle.value = false;
                  drowdownToggle2.value = false;
                },
                class: "line-hover"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("more")) + " ", 1),
                  unref(showMoreDropDown) ? (openBlock(), createBlock(_component_DownOutlined, {
                    key: 0,
                    style: { "position": "absolute", "top": "3px", "right": "-18px" }
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onMouseover"]),
              unref(showMoreDropDown) ? (openBlock(), createBlock("ul", {
                key: 0,
                class: "dropdrown",
                style: { "width": "180px !important" },
                onMouseleave: ($event) => showMoreDropDown.value = false
              }, [
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    class: "line-hover",
                    to: unref(localePath)("/near-by")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("near By")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    class: "line-hover",
                    to: unref(localePath)("/tour-package")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("tour Package")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    class: "line-hover",
                    to: unref(localePath)("/gallery")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("gallery")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    to: unref(localePath)("/more/career"),
                    class: "line-hover"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("careerTitle")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    to: unref(localePath)("/news"),
                    class: "line-hover"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("newsTitle")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ], 40, ["onMouseleave"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/contact"),
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="is-desktop" data-v-52630745>`);
      _push(ssrRenderComponent(_sfc_main$4, { style: { "position": "absolute", "right": "0", "top": "15px" } }, null, _parent));
      _push(`</div><div class="is-mobile" data-v-52630745><i style="${ssrRenderStyle({ "padding": "10px", "cursor": "pointer", "color": "white" })}" class="fa-solid fa-bars fa-xl" data-v-52630745></i>`);
      _push(ssrRenderComponent(Drawer, {
        visible: unref(visible),
        onOnClose: ($event) => visible.value = false
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const NavBarVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-52630745"]]);
const _imports_0 = "" + __buildAssetsURL("logo-dansavanh2.2csl0PJe.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_footer = LayoutFooter;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_typography_paragraph = Paragraph;
      const _component_MobileOutlined = lib.MobileOutlined;
      const _component_MailOutlined = lib.MailOutlined;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_a_layout_footer, mergeProps({ style: { "background-color": "#13131b", "color": "#fdfdfd" } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding": "100px 80px 100px 80px" },
              sm: 10,
              md: 8,
              lg: 6,
              xl: 2,
              offset: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 14,
                    lg: 14
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_typography_paragraph, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MobileOutlined, null, null, _parent5, _scopeId4));
                              _push5(` VIP hotline: +856-20-58276666 <br data-v-8eee8af4${_scopeId4}> Tour hotline: +856-20-52241111 <br data-v-8eee8af4${_scopeId4}> Thai hotline: +66-92193-7777 `);
                            } else {
                              return [
                                createVNode(_component_MobileOutlined),
                                createTextVNode(" VIP hotline: +856-20-58276666 "),
                                createVNode("br"),
                                createTextVNode(" Tour hotline: +856-20-52241111 "),
                                createVNode("br"),
                                createTextVNode(" Thai hotline: +66-92193-7777 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_typography_paragraph, null, {
                            default: withCtx(() => [
                              createVNode(_component_MobileOutlined),
                              createTextVNode(" VIP hotline: +856-20-58276666 "),
                              createVNode("br"),
                              createTextVNode(" Tour hotline: +856-20-52241111 "),
                              createVNode("br"),
                              createTextVNode(" Thai hotline: +66-92193-7777 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    xl: 6
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_typography_paragraph, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MailOutlined, null, null, _parent5, _scopeId4));
                              _push5(` info@dansavanh.com `);
                            } else {
                              return [
                                createVNode(_component_MailOutlined),
                                createTextVNode(" info@dansavanh.com ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_typography_paragraph, null, {
                            default: withCtx(() => [
                              createVNode(_component_MailOutlined),
                              createTextVNode(" info@dansavanh.com ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 14,
                      lg: 14
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_typography_paragraph, null, {
                          default: withCtx(() => [
                            createVNode(_component_MobileOutlined),
                            createTextVNode(" VIP hotline: +856-20-58276666 "),
                            createVNode("br"),
                            createTextVNode(" Tour hotline: +856-20-52241111 "),
                            createVNode("br"),
                            createTextVNode(" Thai hotline: +66-92193-7777 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 6,
                      xl: 6
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_typography_paragraph, null, {
                          default: withCtx(() => [
                            createVNode(_component_MailOutlined),
                            createTextVNode(" info@dansavanh.com ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "space-between",
              style: { "padding": "0 20px 0 20px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_typography_paragraph, {
                          type: "secondary",
                          style: { "font-size": "12px", "padding": "0 10px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` COPYRIGHT © 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS `);
                            } else {
                              return [
                                createTextVNode(" COPYRIGHT © 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_typography_paragraph, {
                            type: "secondary",
                            style: { "font-size": "12px", "padding": "0 10px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" COPYRIGHT © 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    lg: 8,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Image" style="${ssrRenderStyle({ "max-width": "120px" })}" data-v-8eee8af4${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "Image",
                            style: { "max-width": "120px" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 3,
                    sm: 3,
                    md: 3,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="footer-nav" data-v-8eee8af4${_scopeId3}><li data-v-8eee8af4${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: unref(localePath)("/")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("home"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: unref(localePath)("/contact")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("contact"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</li></ul>`);
                      } else {
                        return [
                          createVNode("ul", { class: "footer-nav" }, [
                            createVNode("li", null, [
                              createVNode(_component_nuxt_link, {
                                to: unref(localePath)("/")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              createVNode(_component_nuxt_link, {
                                to: unref(localePath)("/contact")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
                                ]),
                                _: 1
                              }, 8, ["to"])
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
                      xs: 24,
                      sm: 24,
                      md: 6,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_typography_paragraph, {
                          type: "secondary",
                          style: { "font-size": "12px", "padding": "0 10px" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" COPYRIGHT © 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 6,
                      lg: 8,
                      style: { "text-align": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "Image",
                          style: { "max-width": "120px" }
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      xs: 3,
                      sm: 3,
                      md: 3,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "footer-nav" }, [
                          createVNode("li", null, [
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)("/")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                              ]),
                              _: 1
                            }, 8, ["to"]),
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)("/contact")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])
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
          } else {
            return [
              createVNode(_component_a_row, {
                justify: "center",
                style: { "padding": "100px 80px 100px 80px" },
                sm: 10,
                md: 8,
                lg: 6,
                xl: 2,
                offset: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 14,
                    lg: 14
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_typography_paragraph, null, {
                        default: withCtx(() => [
                          createVNode(_component_MobileOutlined),
                          createTextVNode(" VIP hotline: +856-20-58276666 "),
                          createVNode("br"),
                          createTextVNode(" Tour hotline: +856-20-52241111 "),
                          createVNode("br"),
                          createTextVNode(" Thai hotline: +66-92193-7777 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    xl: 6
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_typography_paragraph, null, {
                        default: withCtx(() => [
                          createVNode(_component_MailOutlined),
                          createTextVNode(" info@dansavanh.com ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_row, {
                justify: "space-between",
                style: { "padding": "0 20px 0 20px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    lg: 8
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_typography_paragraph, {
                        type: "secondary",
                        style: { "font-size": "12px", "padding": "0 10px" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" COPYRIGHT © 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 6,
                    lg: 8,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Image",
                        style: { "max-width": "120px" }
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    xs: 3,
                    sm: 3,
                    md: 3,
                    lg: 8
                  }, {
                    default: withCtx(() => [
                      createVNode("ul", { class: "footer-nav" }, [
                        createVNode("li", null, [
                          createVNode(_component_nuxt_link, {
                            to: unref(localePath)("/")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                            ]),
                            _: 1
                          }, 8, ["to"]),
                          createVNode(_component_nuxt_link, {
                            to: unref(localePath)("/contact")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const FooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8eee8af4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const themeConfig = {
      algorithm: theme.darkAlgorithm,
      token: {
        // colorPrimary: '#ffff',
        colorPrimary: "#722ed1"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_config_provider = ConfigProvider;
      _push(ssrRenderComponent(_component_a_config_provider, mergeProps({ theme: themeConfig }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavBarVue, null, null, _parent2, _scopeId));
            _push2(`<div p-20px${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(FooterVue, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavBarVue),
              createVNode("div", { "p-20px": "" }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode(FooterVue)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-D3JQ9zqY.js.map
