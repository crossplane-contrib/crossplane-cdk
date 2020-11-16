// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A CacheCluster is a managed resource that represents an AWS ElastiCache Cache Cluster.
 *
 * @schema CacheCluster
 */
export class CacheCluster extends ApiObject {
  /**
   * Defines a "CacheCluster" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: CacheClusterOptions) {
    super(scope, name, {
      ...options,
      kind: 'CacheCluster',
      apiVersion: 'cache.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A CacheCluster is a managed resource that represents an AWS ElastiCache Cache Cluster.
 *
 * @schema CacheCluster
 */
export interface CacheClusterOptions {
  /**
   * @schema CacheCluster#metadata
   */
  readonly metadata?: any;

  /**
   * A CacheClusterSpec defines the desired state of a CacheCluster.
   *
   * @schema CacheCluster#spec
   */
  readonly spec: CacheClusterSpec;

}

/**
 * A CacheClusterSpec defines the desired state of a CacheCluster.
 *
 * @schema CacheClusterSpec
 */
export interface CacheClusterSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema CacheClusterSpec#deletionPolicy
   */
  readonly deletionPolicy?: CacheClusterSpecDeletionPolicy;

  /**
   * CacheClusterParameters define the desired state of an AWS ElastiCache Cache Cluster. Most fields map directly to an AWS ReplicationGroup: https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html#API_CreateReplicationGroup_RequestParameters
   *
   * @schema CacheClusterSpec#forProvider
   */
  readonly forProvider: CacheClusterSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema CacheClusterSpec#providerConfigRef
   */
  readonly providerConfigRef?: CacheClusterSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema CacheClusterSpec#providerRef
   */
  readonly providerRef?: CacheClusterSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema CacheClusterSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: CacheClusterSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema CacheClusterSpecDeletionPolicy
 */
export enum CacheClusterSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * CacheClusterParameters define the desired state of an AWS ElastiCache Cache Cluster. Most fields map directly to an AWS ReplicationGroup: https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html#API_CreateReplicationGroup_RequestParameters
 *
 * @schema CacheClusterSpecForProvider
 */
export interface CacheClusterSpecForProvider {
  /**
   * If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the cluster. If false, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.
   *
   * @schema CacheClusterSpecForProvider#applyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * The password used to access a password protected server.
   *
   * @schema CacheClusterSpecForProvider#authToken
   */
  readonly authToken?: string;

  /**
   * Specifies the strategy to use to update the AUTH token. This parameter must be specified with the auth-token parameter. Possible values:
   *
   * @schema CacheClusterSpecForProvider#authTokenUpdateStrategy
   */
  readonly authTokenUpdateStrategy?: string;

  /**
   * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. This parameter is only supported for Memcached clusters.
   *
   * @schema CacheClusterSpecForProvider#azMode
   */
  readonly azMode?: string;

  /**
   * A list of cache node IDs to be removed.
   *
   * @schema CacheClusterSpecForProvider#cacheNodeIdsToRemove
   */
  readonly cacheNodeIdsToRemove?: string[];

  /**
   * The compute and memory capacity of the nodes in the node group (shard).
   *
   * @schema CacheClusterSpecForProvider#cacheNodeType
   */
  readonly cacheNodeType: string;

  /**
   * The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used.
   *
   * @schema CacheClusterSpecForProvider#cacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * A list of security group names to associate with this cluster.
   *
   * @schema CacheClusterSpecForProvider#cacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * The name of the subnet group to be used for the cluster.
   *
   * @schema CacheClusterSpecForProvider#cacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * A referencer to retrieve the name of a CacheSubnetGroup
   *
   * @schema CacheClusterSpecForProvider#cacheSubnetGroupNameRef
   */
  readonly cacheSubnetGroupNameRef?: CacheClusterSpecForProviderCacheSubnetGroupNameRef;

  /**
   * A selector to select a referencer to retrieve the name of a CacheSubnetGroup
   *
   * @schema CacheClusterSpecForProvider#cacheSubnetGroupNameSelector
   */
  readonly cacheSubnetGroupNameSelector?: CacheClusterSpecForProviderCacheSubnetGroupNameSelector;

  /**
   * The name of the cache engine to be used for this cluster.
   *
   * @schema CacheClusterSpecForProvider#engine
   */
  readonly engine?: string;

  /**
   * The version number of the cache engine to be used for this cluster.
   *
   * @schema CacheClusterSpecForProvider#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   *
   * @schema CacheClusterSpecForProvider#notificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * The initial number of cache nodes that the cluster has.
   *
   * @schema CacheClusterSpecForProvider#numCacheNodes
   */
  readonly numCacheNodes: number;

  /**
   * The port number on which each of the cache nodes accepts connections.
   *
   * @schema CacheClusterSpecForProvider#port
   */
  readonly port?: number;

  /**
   * The EC2 Availability Zone in which the cluster is created. Default: System chosen Availability Zone.
   *
   * @schema CacheClusterSpecForProvider#preferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * A list of the Availability Zones in which cache nodes are created.
   *
   * @schema CacheClusterSpecForProvider#preferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed.
   *
   * @schema CacheClusterSpecForProvider#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * Region is the region you'd like your CacheSubnetGroup to be created in.
   *
   * @schema CacheClusterSpecForProvider#region
   */
  readonly region: string;

  /**
   * The ID of the replication group to which this cluster should belong.
   *
   * @schema CacheClusterSpecForProvider#replicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * A referencer to retrieve the ID of a Security group
   *
   * @schema CacheClusterSpecForProvider#securityGroupIDRefs
   */
  readonly securityGroupIDRefs?: CacheClusterSpecForProviderSecurityGroupIdRefs[];

  /**
   * A selector to select a referencer to retrieve the ID of a Security Group
   *
   * @schema CacheClusterSpecForProvider#securityGroupIDSelector
   */
  readonly securityGroupIDSelector?: CacheClusterSpecForProviderSecurityGroupIdSelector;

  /**
   * One or more VPC security groups associated with the cluster.
   *
   * @schema CacheClusterSpecForProvider#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3.
   *
   * @schema CacheClusterSpecForProvider#snapshotArns
   */
  readonly snapshotArns?: string[];

  /**
   * The name of a Redis snapshot from which to restore data into the new node group (shard).
   *
   * @schema CacheClusterSpecForProvider#snapshotName
   */
  readonly snapshotName?: string;

  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them.
   *
   * @schema CacheClusterSpecForProvider#snapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   *
   * @schema CacheClusterSpecForProvider#snapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * A list of cost allocation tags to be added to this resource.
   *
   * @schema CacheClusterSpecForProvider#tags
   */
  readonly tags?: CacheClusterSpecForProviderTags[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema CacheClusterSpecProviderConfigRef
 */
export interface CacheClusterSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheClusterSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema CacheClusterSpecProviderRef
 */
export interface CacheClusterSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheClusterSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema CacheClusterSpecWriteConnectionSecretToRef
 */
export interface CacheClusterSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema CacheClusterSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema CacheClusterSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * A referencer to retrieve the name of a CacheSubnetGroup
 *
 * @schema CacheClusterSpecForProviderCacheSubnetGroupNameRef
 */
export interface CacheClusterSpecForProviderCacheSubnetGroupNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheClusterSpecForProviderCacheSubnetGroupNameRef#name
   */
  readonly name: string;

}

/**
 * A selector to select a referencer to retrieve the name of a CacheSubnetGroup
 *
 * @schema CacheClusterSpecForProviderCacheSubnetGroupNameSelector
 */
export interface CacheClusterSpecForProviderCacheSubnetGroupNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema CacheClusterSpecForProviderCacheSubnetGroupNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema CacheClusterSpecForProviderCacheSubnetGroupNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Reference to a named object.
 *
 * @schema CacheClusterSpecForProviderSecurityGroupIdRefs
 */
export interface CacheClusterSpecForProviderSecurityGroupIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema CacheClusterSpecForProviderSecurityGroupIdRefs#name
   */
  readonly name: string;

}

/**
 * A selector to select a referencer to retrieve the ID of a Security Group
 *
 * @schema CacheClusterSpecForProviderSecurityGroupIdSelector
 */
export interface CacheClusterSpecForProviderSecurityGroupIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema CacheClusterSpecForProviderSecurityGroupIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema CacheClusterSpecForProviderSecurityGroupIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Tag is used to tag the ElastiCache resources in AWS.
 *
 * @schema CacheClusterSpecForProviderTags
 */
export interface CacheClusterSpecForProviderTags {
  /**
   * Key for the tag.
   *
   * @schema CacheClusterSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * Value of the tag.
   *
   * @schema CacheClusterSpecForProviderTags#value
   */
  readonly value?: string;

}

