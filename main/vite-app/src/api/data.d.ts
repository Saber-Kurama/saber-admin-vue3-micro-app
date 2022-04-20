declare namespace defs {
  export interface ContentDataRecord {
    /** x 值 */
    x?: string;

    /** y 值 */
    y?: number;
  }

  export interface ResultListContentDataRecord {
    code?: string;
    data?: ContentDataRecord[];
    desc?: string;
    success?: bollean;
  }

  export interface PopularRecord {
    /** ID */
    key?: number;

    /** clickNumber */
    clickNumber?: string;

    /** 标题 */
    title?: string;

    /** increases */
    increases?: string;
  }

  export interface ResultListPopularRecord {
    code?: string;
    data?: PopularRecord[];
    desc?: string;
    success?: bollean;
  }

  export interface ResultListMessageRecord {
    code?: string;
    data?: MessageRecord[];
    desc?: string;
    success?: bollean;
  }

  export interface MessageRecord {
    /** ID */
    id?: number;

    /** 类型 */
    type?: string;

    /** 消息标题 */
    title?: string;

    /** 消息副标题 */
    subTitle?: string;

    /** 头像 */
    avatar?: string;

    /** 消息内容 */
    content?: string;

    /** 消息内容 */
    time?: string;

    /** 消息内容 */
    status?: string;

    /** 消息内容 */
    messageType?: string;
  }

  export interface ResultMessageRecord {
    code?: string;
    data?: MessageRecord;
    desc?: string;
    success?: bollean;
  }
}
