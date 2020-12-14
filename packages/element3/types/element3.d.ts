import { PluginObject, App } from 'vue'
import {
  ElementUIComponent,
  ElementUIComponentSize,
  ElementUIHorizontalAlignment
} from './component'

export { ElAlert } from './alert'
export { ElAside } from './aside'
export { ElAutocomplete } from './autocomplete'
export { ElBadge } from './badge'
export { ElBreadcrumb } from './breadcrumb'
export { ElBreadcrumbItem } from './breadcrumb-item'
export { ElButton } from './button'
export { ElButtonGroup } from './button-group'
export { ElCard } from './card'
export { ElCarousel } from './carousel'
export { ElCarouselItem } from './carousel-item'
export { ElCascader } from './cascader'
export { ElCheckbox } from './checkbox'
export { ElCheckboxButton } from './checkbox-button'
export { ElCheckboxGroup } from './checkbox-group'
export { ElRow } from './row'
export { ElCol } from './col'
export { ElSelect } from './select'
export { ElRadioButton } from './radio-button'
export { ElInput } from './input'
export { ElInputNumber } from './input-number'
export { ElRadio } from './radio'
export { ElRadioGroup } from './radio-group'
export { ElSlider } from './slider'
export { ElSwitch } from './switch'
export { ElLink } from './link'
export { ElAvatar } from './avatar'
export { ElTag } from './tag'
export { ElRate } from './rate'
export { Message } from './message'
export { useNotify } from './notification'
export { useLoading,ElLoading } from './loading'
export { useMsgbox } from './message-box'
export { ElSteps } from './steps'
export { ElUpload } from './upload'
export { ElTabs } from './tabs'
export { ElPageHeader } from './page-header'
export { ElDropdown } from './dropdown'
export { ElCollapse } from './collapse'
export { ElCollapseItem } from './collapse-item'
export { ElColorPicker } from './color-picker'
export { ElDatePicker } from './date-picker'
export { ElDialog } from './dialog'
export { ElDropdownItem } from './dropdown-item'
export { ElDropdownMenu } from './dropdown-menu'
export { ElForm } from './form'
export { ElFormItem } from './form-item'
export { ElMenu } from './menu'
export { ElMenuItem } from './menu-item'
export { ElMenuItemGroup } from './menu-item-group'
export { ElOption } from './option'
export { ElOptionGroup } from './option-group'
export { ElPopover } from './popover'
export { ElStep } from './step'
export { ElSubmenu } from './submenu'
export { ElTable } from './table'
export { ElTableColumn } from './table-column'
export { ElTabPane } from './tab-pane'
export { ElTimeline } from './timeline'
export { ElTimelineItem } from './timeline-item'
export { ElTimePicker } from './time-picker'
export { ElTimeSelect } from './time-select'
export { ElTooltip } from './tooltip'
export { ElTransfer } from './transfer'
export { ElDivider } from './divider'
export { ElIcon } from './icon'
export { ElCalendar } from './calendar'
export { ElImage } from './image'
export { ElBacktop } from './backtop'
export { ElInfiniteScroll } from './infinite-scroll'
export { ElDrawer } from './drawer'
export { ElTree } from './tree'
export { ElPopconfirm } from './popconfirm'
export { ElCascaderPanel } from './cascader-panel'
export { ElScrollbar } from './scrollbar'

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `app.use(ElementUI)` to install.
 */
export function install(app: App, ...options: any[]): any

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: ElLoading

/** Displays a global notification message at the upper right corner of the page */
export const Notification: ElNotification

/** Collapse Component */
export class Collapse extends ElCollapse {}

/** Collapse Item Component */
export class CollapseItem extends ElCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends ElColorPicker {}

/** Date Picker Component */
export class DatePicker extends ElDatePicker {}

/** Dialog Component */
export class Dialog extends ElDialog {}

/** Dropdown Component */
export class Dropdown extends ElDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends ElDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends ElDropdownMenu {}

/** Form Component */
export class Form extends ElForm {}

/** Form Item Component */
export class FormItem extends ElFormItem {}

/** Input Component */
export class Input extends ElInput {}

/** Input Number Component */
export class InputNumber extends ElInputNumber {}

/** Menu that provides navigation for your website */
export class Menu extends ElMenu {}

/** Menu Item Component */
export class MenuItem extends ElMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends ElMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends ElOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends ElOptionGroup {}

/** Popover Component */
export class Popover extends ElPopover {}

/** Rate Component */
export class Rate extends ElRate {}

/** Slider Component */
export class Slider extends ElSlider {}

/** Step Component */
export class Step extends ElStep {}

/** Submenu Component */
export class Submenu extends ElSubmenu {}

/** Table Component */
export class Table extends ElTable {}

/** Table Column Component */
export class TableColumn extends ElTableColumn {}

/** Tabs Component */
export class Tabs extends ElTabs {}

/** Tab Pane Component */
export class TabPane extends ElTabPane {}

/** Timeline Component */
export class Timeline extends ElTimeline {}

/** Timeline Item Component */
export class TimelineItem extends ElTimelineItem {}

/** TimePicker Component */
export class TimePicker extends ElTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends ElTimeSelect {}

/** Tooltip Component */
export class Tooltip extends ElTooltip {}

/** Transfer Component */
export class Transfer extends ElTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends ElTree<K, D> {}

/** Divider Component */
export class Divider extends ElDivider {}

/** Image Component */
export class Image extends ElImage {}

/** Icon Component */
export class Icon extends ElIcon {}

/** Calendar Component */
export class Calendar extends ElCalendar {}

/** Backtop Component */
export class Backtop extends ElBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<ElInfiniteScroll>

/** PageHeader Component */
export class PageHeader extends ElPageHeader {}

/** Drawer Component */
export class Drawer extends ElDrawer {}

/** Popconfirm Component */
export class Popconfirm extends ElPopconfirm {}
