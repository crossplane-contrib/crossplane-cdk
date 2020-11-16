// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A CacheSubnetGroup is a managed resource that represents an AWS Subnet Group for ElasticCache.
 *
 * @schema CacheSubnetGroup
 */
export class CacheSubnetGroup extends ApiObject {
  /**
   * Defines a "CacheSubnetGroup" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: CacheSubnetGroupOptions) {
    super(scope, name, {
      ...options,
      kind: 'CacheSubnetGroup',
      apiVersion: 'cache.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A CacheSubnetGroup is a managed resource that represents an AWS Subnet Group for ElasticCache.
 *
 * @schema CacheSubnetGroup
 */
export interface CacheSubnetGroupOptions {
  /**
   * @schema CacheSubnetGroup#metadata
   */
  readonly metadata?: any;

  /**
   * A CacheSubnetGroupSpec defines the desired state of a CacheSubnetGroup.
   *
   * @schema CacheSubnetGroup#spec
   */
  readonly spec: CacheSubnetGroupSpec;

}

/**
 * A CacheSubnetGroupSpec defines the desired state of a CacheSubnetGroup.
 *
 * @schema CacheSubnetGroupSpec
 */
export interface CacheSubnetGroupSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema CacheSubnetGroupSpec#deletionPolicy
   */
  readonly deletionPolicy?: CacheSubnetGroupSpecDeletionPolicy;

  /**
   * CacheSubnetGroupParameters define the desired state of an AWS ElasticCache Subnet Group.
   *
   * @schema CacheSubnetGroupSpec#forProvider
   */
  readonly forProvider: CacheSubnetGroupSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema CacheSubnetGroupSpec#providerConfigRef
   */
  readonly providerConfigRef?: CacheSubnetGroupSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema CacheSubnetGroupSpec#providerRef
   */
  readonly providerRef?: CacheSubnetGroupSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema CacheSubnetGroupSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: CacheSubnetGroupSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema CacheSubnetGroupSpecDeletionPolicy
 */
export enum CacheSubnetGroupSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * CacheSubnetGroupParameters define the desired state of an AWS ElasticCache Subnet Group.
 *
 * @schema CacheSubnetGroupSpecForProvider
 */
export interface CacheSubnetGroupSpecForProvider {
  /**
   * A description for the cache subnet group.
   *
   * @schema CacheSubnetGroupSpecForProvider#description
   */
  readonly description: string;

  /**
   * Region is the region you'd like your CacheSubnetGroup to be created in.
   *
   * @schema CacheSubnetGroupSpecForProvider#region
   */
  readonly region: string;

  /**
   * SubnetIDRefs references to a Subnet to and retrieves its SubnetID
   *
   * @schema CacheSubnetGroupSpecForProvider#subnetIdRefs
   */
  readonly subnetIdRefs?: CacheSubnetGroupSpecForProviderSubnetIdRefs[];

  /**
   * SubnetIDSelector selects a set of references that each retrieve the subnetID from the referenced Subnet
   *
   * @schema CacheSubnetGroupSpecForProvider#subnetIdSelector
   */
  readonly subnetIdSelector?: CacheSubnetGroupSpecForProviderSubnetIdSelector;

  /**
   * A list of  Subnet IDs for the cache subnet group.
   *
   * @schema CacheSubnetGroupSpecForProvider#subnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema CacheSubnetGroupSpecProviderConfigRef
 */
export interface CacheSubnetGroupSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheSubnetGroupSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema CacheSubnetGroupSpecProviderRef
 */
export interface CacheSubnetGroupSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheSubnetGroupSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema CacheSubnetGroupSpecWriteConnectionSecretToRef
 */
export interface CacheSubnetGroupSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema CacheSubnetGroupSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema CacheSubnetGroupSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * A Reference to a named object.
 *
 * @schema CacheSubnetGroupSpecForProviderSubnetIdRefs
 */
export interface CacheSubnetGroupSpecForProviderSubnetIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema CacheSubnetGroupSpecForProviderSubnetIdRefs#name
   */
  readonly name: string;

}

/**
 * SubnetIDSelector selects a set of references that each retrieve the subnetID from the referenced Subnet
 *
 * @schema CacheSubnetGroupSpecForProviderSubnetIdSelector
 */
export interface CacheSubnetGroupSpecForProviderSubnetIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema CacheSubnetGroupSpecForProviderSubnetIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema CacheSubnetGroupSpecForProviderSubnetIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

