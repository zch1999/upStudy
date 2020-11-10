type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class AclRuleCreateVO {
    /** dstApp */
    dstApp?: number;

    /** enabled */
    enabled?: boolean;

    /** rule */
    rule?: string;

    /** srcApp */
    srcApp?: number;
  }

  export class AclRuleDetailVO {
    /** createdAt */
    createdAt?: string;

    /** createdBy */
    createdBy?: string;

    /** dstAppId */
    dstAppId?: number;

    /** dstAppName */
    dstAppName?: string;

    /** enabled */
    enabled?: boolean;

    /** rule */
    rule?: string;

    /** ruleId */
    ruleId?: number;

    /** srcAppId */
    srcAppId?: number;

    /** srcAppName */
    srcAppName?: string;
  }

  export class AclRuleUpdateVO {
    /** enabled */
    enabled?: boolean;

    /** rule */
    rule?: string;

    /** ruleId */
    ruleId?: number;
  }

  export class AppCallRelationVO {
    /** 调用方应用名称 */
    clientApp?: string;

    /** 是否允许访问 */
    isAccepted?: boolean;

    /** 本应用名称 */
    myApp?: string;

    /** 本服务角色：调用方/提供方 */
    myRole?: string;

    /** 提供方应用名称 */
    serverApp?: string;

    /** 调用时间戳 */
    timestamp?: string;
  }

  export class AppCallVO {
    /** callAccepted */
    callAccepted?: boolean;

    /** callTimestamp */
    callTimestamp?: string;

    /** clientApp */
    clientApp?: string;

    /** clientId */
    clientId?: number;

    /** id */
    id?: number;

    /** serverApp */
    serverApp?: string;

    /** serverId */
    serverId?: number;
  }

  export class AppDetailVO {
    /** acAppName */
    acAppName?: string;

    /** acId */
    acId?: number;

    /** aclEnabled */
    aclEnabled?: boolean;

    /** appGroup */
    appGroup?: string;

    /** appName */
    appName?: string;

    /** createdAt */
    createdAt?: string;

    /** id */
    id?: number;

    /** isCurrUserParticipantIn */
    isCurrUserParticipantIn?: boolean;

    /** owners */
    owners?: Array<string>;
  }

  export class AppFullVO {
    /** acAppName */
    acAppName?: string;

    /** acId */
    acId?: number;

    /** aclEnabled */
    aclEnabled?: boolean;

    /** aclRuleList */
    aclRuleList?: Array<defs.AclRuleDetailVO>;

    /** appGroup */
    appGroup?: string;

    /** appName */
    appName?: string;

    /** callRelationList */
    callRelationList?: Array<defs.AppCallVO>;

    /** createdAt */
    createdAt?: string;

    /** id */
    id?: number;

    /** instanceList */
    instanceList?: Array<defs.AppInstanceVO>;

    /** isCurrUserParticipantIn */
    isCurrUserParticipantIn?: boolean;

    /** owners */
    owners?: Array<string>;

    /** versionRuleList */
    versionRuleList?: Array<defs.VersionRuleDetailVO>;
  }

  export class AppInstanceVO {
    /** appId */
    appId?: number;

    /** appName */
    appName?: string;

    /** debugCmd */
    debugCmd?: string;

    /** debugPort */
    debugPort?: number;

    /** id */
    id?: number;

    /** ip */
    ip?: string;

    /** port */
    port?: number;

    /** registerId */
    registerId?: string;

    /** state */
    state?: string;

    /** updatedAt */
    updatedAt?: string;

    /** version */
    version?: string;
  }

  export class AppVO {
    /** 应用名称 */
    appName?: string;

    /** 应用ID */
    id?: number;
  }

  export class IdsVO {
    /** ids */
    ids?: Array<number>;
  }

  export class OrderItem {
    /** asc */
    asc?: boolean;

    /** column */
    column?: string;
  }

  export class Page<T0 = any> {
    /** current */
    current?: number;

    /** hitCount */
    hitCount?: boolean;

    /** optimizeCountSql */
    optimizeCountSql?: boolean;

    /** orders */
    orders?: Array<defs.OrderItem>;

    /** pages */
    pages?: number;

    /** records */
    records?: Array<T0>;

    /** searchCount */
    searchCount?: boolean;

    /** size */
    size?: number;

    /** total */
    total?: number;
  }

  export class Person {
    /** 部门 */
    department?: defs.PersonCommonRes;

    /** 邮箱 */
    email?: string;

    /** 入职日期 */
    entryDate?: string;

    /** 一级部门 */
    first_dept?: defs.PersonCommonRes;

    /** manager */
    manager?: defs.PersonManagerRes;

    /** 姓名 */
    name?: string;

    /** 工号 */
    number?: string;

    /** 电话 */
    phone?: string;

    /** 头像 */
    photo?: string;

    /** 职位名称 */
    positionName?: string;

    /** 状态 */
    status?: defs.PersonCommonRes;

    /** 用户名 */
    username?: string;
  }

  export class PersonCommonRes {
    /** 状态code */
    code?: string;

    /** 状态name */
    name?: string;
  }

  export class PersonManagerRes {
    /** 邮箱 */
    email?: string;

    /** 姓名 */
    name?: string;

    /** 工号 */
    number?: string;

    /** 用户名 */
    username?: string;
  }

  export class Result<T0 = any> {
    /** code */
    code?: number;

    /** message */
    message?: string;

    /** result */
    result?: T0;
  }

  export class RuleTermVO {
    /** desc */
    desc?: string;

    /** id */
    id?: number;

    /** rule */
    rule?: string;
  }

  export class UserInfoItemVo {
    /** account */
    account?: string;

    /** avatar */
    avatar?: string;

    /** isAdmin */
    isAdmin?: boolean;

    /** name */
    name?: string;
  }

  export class VersionRuleCreateVO {
    /** dstApp */
    dstApp?: number;

    /** dstVersion */
    dstVersion?: string;

    /** enabled */
    enabled?: boolean;

    /** srcApp */
    srcApp?: number;

    /** srcVersion */
    srcVersion?: string;
  }

  export class VersionRuleDetailVO {
    /** createdAt */
    createdAt?: string;

    /** createdBy */
    createdBy?: string;

    /** dstAppId */
    dstAppId?: number;

    /** dstAppName */
    dstAppName?: string;

    /** dstVersion */
    dstVersion?: string;

    /** enabled */
    enabled?: boolean;

    /** id */
    id?: number;

    /** srcAppId */
    srcAppId?: number;

    /** srcAppName */
    srcAppName?: string;

    /** srcVersion */
    srcVersion?: string;
  }

  export class VersionRuleUpdateVO {
    /** enabled */
    enabled?: boolean;

    /** ruleId */
    ruleId?: number;
  }
}

declare namespace API {
  /**
   * 应用
   */
  export namespace app {
    /**
     * 应用详情
     * /api/v1/apps/detail/{appId}
     */
    export namespace getAppDetail {
      export class Params {
        /** appId */
        appId: number;
      }

      export type Response = defs.Result<defs.AppFullVO>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.AppFullVO>>;
    }

    /**
     * 应用列表
     * /api/v1/apps/list
     */
    export namespace getAppList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
      }

      export type Response = defs.Result<Array<defs.AppDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppDetailVO>>>;
    }

    /**
     * 分页应用列表
     * /api/v1/apps/list/page
     */
    export namespace getPagedAppList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
        /** 页号 */
        pageNum?: number;
        /** 页面大小 */
        pageSize?: number;
      }

      export type Response = defs.Result<defs.Page<defs.AppDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Page<defs.AppDetailVO>>>;
    }

    /**
     * 应用映射：注册的应用名称与应用中心的应用名称映射
     * /api/v1/apps/map/{registerAppId}/to/{acAppId}
     */
    export namespace mapApp {
      export class Params {
        /** 应用中心应用ID */
        acAppId?: number;
        /** 注册应用ID */
        registerAppId?: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }

    /**
     * 应用搜索：按应用名称模糊查找注册应用
     * /api/v1/apps/search/{appName}
     */
    export namespace getAppInAll {
      export class Params {
        /** appName */
        appName: string;
      }

      export type Response = defs.Result<Array<defs.AppDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppDetailVO>>>;
    }

    /**
     * 修改访问控制开关
     * /api/v1/apps/{appId}/switch/{enabled}
     */
    export namespace updateAppAclSwitch {
      export class Params {
        /** 应用ID */
        appId?: number;
        /** 是否开启 */
        enabled?: boolean;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }
  }

  /**
   * 应用中心应用
   */
  export namespace appCenter {
    /**
     * 应用列表
     * /api/v1/ac/apps/list
     */
    export namespace getAppList {
      export class Params {}

      export type Response = defs.Result<Array<defs.AppVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppVO>>>;
    }

    /**
     * 模糊查找应用中心应用
     * /api/v1/ac/apps/{appName}
     */
    export namespace getAcAppInAll {
      export class Params {
        /** appName */
        appName: string;
      }

      export type Response = defs.Result<Array<defs.AppVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppVO>>>;
    }
  }

  /**
   * 应用访问规则
   */
  export namespace appRule {
    /**
     * 可用规则项
     * /api/v1/rules/apps/available/terms
     */
    export namespace availableRuleTerms {
      export class Params {}

      export type Response = defs.Result<Array<defs.RuleTermVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.RuleTermVO>>>;
    }

    /**
     * 授权规则列表：查看规则列表
     * /api/v1/rules/apps/list/authorized
     */
    export namespace getAuthorizedAclRuleList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
      }

      export type Response = defs.Result<Array<defs.AclRuleDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AclRuleDetailVO>>>;
    }

    /**
     * 分页授权规则列表：分页查看规则列表
     * /api/v1/rules/apps/list/page/authorized
     */
    export namespace getPagedAuthorizedAclRuleList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
        /** 页号 */
        pageNum?: number;
        /** 页面大小 */
        pageSize?: number;
      }

      export type Response = defs.Result<defs.Page<defs.AclRuleDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Page<defs.AclRuleDetailVO>>>;
    }

    /**
     * 添加规则
     * /api/v1/rules/apps/rule
     */
    export namespace createAclRule {
      export class Params {}

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.AclRuleCreateVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 添加规则：应用详情页添加与当前应用相关的规则
     * /api/v1/rules/apps/rule/relate/{appId}
     */
    export namespace postRuleRelateByAppId {
      export class Params {
        /** 当前应用ID */
        appId?: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.AclRuleCreateVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 查看规则
     * /api/v1/rules/apps/{ruleId}
     */
    export namespace getAclRule {
      export class Params {
        /** ruleId */
        ruleId: number;
      }

      export type Response = defs.Result<defs.AclRuleDetailVO>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.AclRuleDetailVO>>;
    }

    /**
     * 修改规则
     * /api/v1/rules/apps/{ruleId}
     */
    export namespace updateAclRule {
      export class Params {
        /** ruleId */
        ruleId: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.AclRuleUpdateVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 删除规则
     * /api/v1/rules/apps/{ruleId}
     */
    export namespace deleteAclRule {
      export class Params {
        /** ruleId */
        ruleId: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }
  }

  /**
   * 健康检查
   */
  export namespace check {
    /**
     * checkHealth
     * /api/v1/health
     */
    export namespace checkHealth {
      export class Params {}

      export type Response = defs.Result<void>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<void>>;
    }
  }

  /**
   * 应用实例
   */
  export namespace instance {
    /**
     * 应用实例列表
     * /api/v1/instances/list
     */
    export namespace getAllAppInstanceList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
      }

      export type Response = defs.Result<Array<defs.AppInstanceVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppInstanceVO>>>;
    }

    /**
     * 分页应用实例列表
     * /api/v1/instances/list/page
     */
    export namespace getPagedAppInstanceList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
        /** 页号 */
        pageNum?: number;
        /** 页面大小 */
        pageSize?: number;
      }

      export type Response = defs.Result<defs.Page<defs.AppInstanceVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Page<defs.AppInstanceVO>>>;
    }

    /**
     * 单一应用实例列表
     * /api/v1/instances/{appId}
     */
    export namespace getAppInstanceList {
      export class Params {
        /** appId */
        appId: number;
      }

      export type Response = defs.Result<Array<defs.AppInstanceVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AppInstanceVO>>>;
    }

    /**
     * 应用版本列表
     * /api/v1/instances/{appId}/versions
     */
    export namespace getAppVersionList {
      export class Params {
        /** appId */
        appId: number;
      }

      export type Response = defs.Result<Array<string>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<string>>>;
    }
  }

  /**
   * 对外暴露接口
   */
  export namespace interface {
    /**
     * 应用间调用关系
     * /api/v1/external/apps/call/relation
     */
    export namespace postAppCallRelation {
      export class Params {}

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.AppCallRelationVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 应用间调用关系
     * /api/v1/external/apps/call/relation/batch
     */
    export namespace postBatchAppCallRelation {
      export class Params {}

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.AppCallRelationVO>,
      ): Promise<defs.Result<boolean>>;
    }
  }

  /**
   * 后台管理：访问控制
   */
  export namespace manage {
    /**
     * 应用批量删除
     * /api/v1/manage/apps/batch
     */
    export namespace deleteApp {
      export class Params {}

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.IdsVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 应用实例删除
     * /api/v1/manage/apps/instances/{instanceId}
     */
    export namespace deleteAppInstance {
      export class Params {
        /** instanceId */
        instanceId: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }

    /**
     * 应用删除
     * /api/v1/manage/apps/{appId}
     */
    export namespace deleteAppsByAppId {
      export class Params {
        /** appId */
        appId: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }

    /**
     * 访问规则批量删除
     * /api/v1/manage/rules/apps/batch
     */
    export namespace deleteRulesAppsBatch {
      export class Params {}

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.IdsVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 查看规则列表
     * /api/v1/manage/rules/apps/list
     */
    export namespace getAllAclRuleList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
      }

      export type Response = defs.Result<Array<defs.AclRuleDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.AclRuleDetailVO>>>;
    }

    /**
     * 分页查看规则列表
     * /api/v1/manage/rules/apps/list/page
     */
    export namespace getPagedAclRuleList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
        /** 页号 */
        pageNum?: number;
        /** 页面大小 */
        pageSize?: number;
      }

      export type Response = defs.Result<defs.Page<defs.AclRuleDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Page<defs.AclRuleDetailVO>>>;
    }
  }

  /**
   * 用户信息
   */
  export namespace user {
    /**
     * 登陆用户信息
     * /api/v1/user/current
     */
    export namespace currentUser {
      export class Params {}

      export type Response = defs.Result<defs.UserInfoItemVo>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.UserInfoItemVo>>;
    }

    /**
     * 添加人员信息
     * /api/v1/user/search
     */
    export namespace getUserInfo {
      export class Params {
        /** keyword */
        keyword?: string;
      }

      export type Response = defs.Result<Array<defs.UserInfoItemVo>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<Array<defs.UserInfoItemVo>>>;
    }

    /**
     * 添加人员信息
     * /api/v1/user/search/remote
     */
    export namespace getUserInfoFromRemote {
      export class Params {
        /** keyword */
        keyword: string;
      }

      export type Response = defs.Result<defs.Person>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Person>>;
    }
  }

  /**
   * 版本控制规则
   */
  export namespace versionRule {
    /**
     * 分页授权规则列表：分页查看规则列表
     * /api/v1/rules/versions/list/page/authorized
     */
    export namespace getPagedAuthorizedVersionRuleList {
      export class Params {
        /** 搜索应用名 */
        keyword?: string;
        /** 页号 */
        pageNum?: number;
        /** 页面大小 */
        pageSize?: number;
      }

      export type Response = defs.Result<defs.Page<defs.VersionRuleDetailVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Result<defs.Page<defs.VersionRuleDetailVO>>>;
    }

    /**
     * 添加规则
     * /api/v1/rules/versions/rule
     */
    export namespace createVersionRule {
      export class Params {
        /** 应用详情页添加规则时的应用ID */
        appId?: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.VersionRuleCreateVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 修改规则
     * /api/v1/rules/versions/{ruleId}
     */
    export namespace updateVersionRule {
      export class Params {
        /** 规则ID */
        ruleId?: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.VersionRuleUpdateVO,
      ): Promise<defs.Result<boolean>>;
    }

    /**
     * 删除规则
     * /api/v1/rules/versions/{ruleId}
     */
    export namespace deleteVersionRule {
      export class Params {
        /** 规则ID */
        ruleId?: number;
      }

      export type Response = defs.Result<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Result<boolean>>;
    }
  }
}
