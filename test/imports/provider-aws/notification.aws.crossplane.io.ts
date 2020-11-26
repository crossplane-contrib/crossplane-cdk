// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * SNSTopic defines a managed resource that represents state of a AWS SNSTopic
 *
 * @schema SNSTopic
 */
export class SnsTopic extends ApiObject {
  /**
   * Defines a "SNSTopic" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: SnsTopicProps) {
    super(scope, id, {
      ...props,
      kind: 'SNSTopic',
      apiVersion: 'notification.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * SNSSubscription defines a managed resource that represents state of a AWS SNS Subscription
 *
 * @schema SNSSubscription
 */
export class SnsSubscription extends ApiObject {
  /**
   * Defines a "SNSSubscription" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: SnsSubscriptionProps) {
    super(scope, id, {
      ...props,
      kind: 'SNSSubscription',
      apiVersion: 'notification.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * SNSTopic defines a managed resource that represents state of a AWS SNSTopic
 *
 * @schema SNSTopic
 */
export interface SnsTopicProps {
  /**
   * @schema SNSTopic#metadata
   */
  readonly metadata?: any;

  /**
   * SNSTopicSpec defined the desired state of a AWS SNS Topic
   *
   * @schema SNSTopic#spec
   */
  readonly spec: SnsTopicSpec;

}

/**
 * SNSSubscription defines a managed resource that represents state of a AWS SNS Subscription
 *
 * @schema SNSSubscription
 */
export interface SnsSubscriptionProps {
  /**
   * @schema SNSSubscription#metadata
   */
  readonly metadata?: any;

  /**
   * SNSSubscriptionSpec defined the desired state of a AWS SNS Topic
   *
   * @schema SNSSubscription#spec
   */
  readonly spec: SnsSubscriptionSpec;

}

/**
 * SNSTopicSpec defined the desired state of a AWS SNS Topic
 *
 * @schema SnsTopicSpec
 */
export interface SnsTopicSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema SnsTopicSpec#deletionPolicy
   */
  readonly deletionPolicy?: SnsTopicSpecDeletionPolicy;

  /**
   * SNSTopicParameters define the desired state of a AWS SNS Topic
   *
   * @schema SnsTopicSpec#forProvider
   */
  readonly forProvider: SnsTopicSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema SnsTopicSpec#providerConfigRef
   */
  readonly providerConfigRef?: SnsTopicSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema SnsTopicSpec#providerRef
   */
  readonly providerRef?: SnsTopicSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema SnsTopicSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: SnsTopicSpecWriteConnectionSecretToRef;

}

/**
 * SNSSubscriptionSpec defined the desired state of a AWS SNS Topic
 *
 * @schema SnsSubscriptionSpec
 */
export interface SnsSubscriptionSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema SnsSubscriptionSpec#deletionPolicy
   */
  readonly deletionPolicy?: SnsSubscriptionSpecDeletionPolicy;

  /**
   * SNSSubscriptionParameters define the desired state of a AWS SNS Topic
   *
   * @schema SnsSubscriptionSpec#forProvider
   */
  readonly forProvider: SnsSubscriptionSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema SnsSubscriptionSpec#providerConfigRef
   */
  readonly providerConfigRef?: SnsSubscriptionSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema SnsSubscriptionSpec#providerRef
   */
  readonly providerRef?: SnsSubscriptionSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema SnsSubscriptionSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: SnsSubscriptionSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema SnsTopicSpecDeletionPolicy
 */
export enum SnsTopicSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * SNSTopicParameters define the desired state of a AWS SNS Topic
 *
 * @schema SnsTopicSpecForProvider
 */
export interface SnsTopicSpecForProvider {
  /**
   * DeliveryRetryPolicy - the JSON serialization of the effective delivery policy, taking system defaults into account
   *
   * @schema SnsTopicSpecForProvider#deliveryPolicy
   */
  readonly deliveryPolicy?: string;

  /**
   * The display name to use for a topic with SNS subscriptions.
   *
   * @schema SnsTopicSpecForProvider#displayName
   */
  readonly displayName?: string;

  /**
   * Setting this enables server side encryption at-rest to your topic. The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK
 For more examples, see KeyId (https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the AWS Key Management Service API Reference.
   *
   * @schema SnsTopicSpecForProvider#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * Name refers to the name of the AWS SNS Topic
   *
   * @schema SnsTopicSpecForProvider#name
   */
  readonly name: string;

  /**
   * The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.
   *
   * @schema SnsTopicSpecForProvider#policy
   */
  readonly policy?: string;

  /**
   * Region is the region you'd like your SNSTopic to be created in.
   *
   * @schema SnsTopicSpecForProvider#region
   */
  readonly region: string;

  /**
   * Tags represetnt a list of user-provided metadata that can be associated with a SNS Topic. For more information about tagging, see Tagging SNS Topics (https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html) in the SNS User Guide.
   *
   * @schema SnsTopicSpecForProvider#tags
   */
  readonly tags?: SnsTopicSpecForProviderTags[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema SnsTopicSpecProviderConfigRef
 */
export interface SnsTopicSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema SnsTopicSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema SnsTopicSpecProviderRef
 */
export interface SnsTopicSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema SnsTopicSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema SnsTopicSpecWriteConnectionSecretToRef
 */
export interface SnsTopicSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema SnsTopicSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema SnsTopicSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema SnsSubscriptionSpecDeletionPolicy
 */
export enum SnsSubscriptionSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * SNSSubscriptionParameters define the desired state of a AWS SNS Topic
 *
 * @schema SnsSubscriptionSpecForProvider
 */
export interface SnsSubscriptionSpecForProvider {
  /**
   *  DeliveryPolicy defines how Amazon SNS retries failed  deliveries to HTTP/S endpoints.
   *
   * @schema SnsSubscriptionSpecForProvider#deliveryPolicy
   */
  readonly deliveryPolicy?: string;

  /**
   * The subscription's endpoint
   *
   * @schema SnsSubscriptionSpecForProvider#endpoint
   */
  readonly endpoint: string;

  /**
   *  The simple JSON object that lets your subscriber receive  only a subset of messages, rather than receiving every message published  to the topic.
   *
   * @schema SnsSubscriptionSpecForProvider#filterPolicy
   */
  readonly filterPolicy?: string;

  /**
   * The subscription's protocol.
   *
   * @schema SnsSubscriptionSpecForProvider#protocol
   */
  readonly protocol: string;

  /**
   *  When set to true, enables raw message delivery  to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints  to process JSON formatting, which is otherwise created for Amazon SNS  metadata.
   *
   * @schema SnsSubscriptionSpecForProvider#rawMessageDelivery
   */
  readonly rawMessageDelivery?: string;

  /**
   *  When specified, sends undeliverable messages to the  specified Amazon SQS dead-letter queue. Messages that can't be delivered  due to client errors (for example, when the subscribed endpoint is unreachable)  or server errors (for example, when the service that powers the subscribed  endpoint becomes unavailable) are held in the dead-letter queue for further  analysis or reprocessing.
   *
   * @schema SnsSubscriptionSpecForProvider#redrivePolicy
   */
  readonly redrivePolicy?: string;

  /**
   * Region is the region you'd like your SNSSubscription to be in.
   *
   * @schema SnsSubscriptionSpecForProvider#region
   */
  readonly region: string;

  /**
   * TopicArn is the Arn of the SNS Topic
   *
   * @schema SnsSubscriptionSpecForProvider#topicArn
   */
  readonly topicArn?: string;

  /**
   * TopicArnRef references a SNS Topic and retrieves its TopicArn
   *
   * @schema SnsSubscriptionSpecForProvider#topicArnRef
   */
  readonly topicArnRef?: SnsSubscriptionSpecForProviderTopicArnRef;

  /**
   * TopicArnSelector selects a reference to a SNS Topic and retrieves its TopicArn
   *
   * @schema SnsSubscriptionSpecForProvider#topicArnSelector
   */
  readonly topicArnSelector?: SnsSubscriptionSpecForProviderTopicArnSelector;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema SnsSubscriptionSpecProviderConfigRef
 */
export interface SnsSubscriptionSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema SnsSubscriptionSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema SnsSubscriptionSpecProviderRef
 */
export interface SnsSubscriptionSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema SnsSubscriptionSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema SnsSubscriptionSpecWriteConnectionSecretToRef
 */
export interface SnsSubscriptionSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema SnsSubscriptionSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema SnsSubscriptionSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Tag represent a user-provided metadata that can be associated with a SNS Topic. For more information about tagging, see Tagging SNS Topics (https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html) in the SNS User Guide.
 *
 * @schema SnsTopicSpecForProviderTags
 */
export interface SnsTopicSpecForProviderTags {
  /**
   * The key name that can be used to look up or retrieve the associated value. For example, Department or Cost Center are common choices.
   *
   * @schema SnsTopicSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * The value associated with this tag. For example, tags with a key name of Department could have values such as Human Resources, Accounting, and Support. Tags with a key name of Cost Center might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
 AWS always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.
   *
   * @schema SnsTopicSpecForProviderTags#value
   */
  readonly value?: string;

}

/**
 * TopicArnRef references a SNS Topic and retrieves its TopicArn
 *
 * @schema SnsSubscriptionSpecForProviderTopicArnRef
 */
export interface SnsSubscriptionSpecForProviderTopicArnRef {
  /**
   * Name of the referenced object.
   *
   * @schema SnsSubscriptionSpecForProviderTopicArnRef#name
   */
  readonly name: string;

}

/**
 * TopicArnSelector selects a reference to a SNS Topic and retrieves its TopicArn
 *
 * @schema SnsSubscriptionSpecForProviderTopicArnSelector
 */
export interface SnsSubscriptionSpecForProviderTopicArnSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema SnsSubscriptionSpecForProviderTopicArnSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema SnsSubscriptionSpecForProviderTopicArnSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}
