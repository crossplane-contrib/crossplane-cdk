// generated by cdk8s
import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A Repository is a managed resource that represents an Elastic Container Repository
 *
 * @schema Repository
 */
export class Repository extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Repository"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'ecr.aws.crossplane.io/v1alpha1',
    kind: 'Repository',
  }

  /**
   * Renders a Kubernetes manifest for "Repository".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: RepositoryProps): any {
    return {
      ...Repository.GVK,
      ...props,
    };
  }

  /**
   * Defines a "Repository" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: RepositoryProps) {
    super(scope, id, Repository.manifest(props));
  }
}

/**
 * A Repository is a managed resource that represents an Elastic Container Repository
 *
 * @schema Repository
 */
export interface RepositoryProps {
  /**
   * @schema Repository#metadata
   */
  readonly metadata?: any;

  /**
   * A RepositorySpec defines the desired state of a Elastic Container Repository.
   *
   * @schema Repository#spec
   */
  readonly spec: RepositorySpec;

}

/**
 * A RepositorySpec defines the desired state of a Elastic Container Repository.
 *
 * @schema RepositorySpec
 */
export interface RepositorySpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema RepositorySpec#deletionPolicy
   */
  readonly deletionPolicy?: RepositorySpecDeletionPolicy;

  /**
   * RepositoryParameters define the desired state of an AWS Elastic Container Repository
   *
   * @schema RepositorySpec#forProvider
   */
  readonly forProvider: RepositorySpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema RepositorySpec#providerConfigRef
   */
  readonly providerConfigRef?: RepositorySpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema RepositorySpec#providerRef
   */
  readonly providerRef?: RepositorySpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema RepositorySpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: RepositorySpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema RepositorySpecDeletionPolicy
 */
export enum RepositorySpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * RepositoryParameters define the desired state of an AWS Elastic Container Repository
 *
 * @schema RepositorySpecForProvider
 */
export interface RepositorySpecForProvider {
  /**
   * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
   *
   * @schema RepositorySpecForProvider#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: RepositorySpecForProviderImageScanningConfiguration;

  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @schema RepositorySpecForProvider#imageTagMutability
   */
  readonly imageTagMutability?: RepositorySpecForProviderImageTagMutability;

  /**
   * Region is the region you'd like your Repository to be created in.
   *
   * @schema RepositorySpecForProvider#region
   */
  readonly region: string;

  /**
   * Metadata tagging key value pairs
   *
   * @schema RepositorySpecForProvider#tags
   */
  readonly tags?: RepositorySpecForProviderTags[];

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema RepositorySpecProviderConfigRef
 */
export interface RepositorySpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema RepositorySpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema RepositorySpecProviderRef
 */
export interface RepositorySpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema RepositorySpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema RepositorySpecWriteConnectionSecretToRef
 */
export interface RepositorySpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema RepositorySpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema RepositorySpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
 *
 * @schema RepositorySpecForProviderImageScanningConfiguration
 */
export interface RepositorySpecForProviderImageScanningConfiguration {
  /**
   * The setting that determines whether images are scanned after being pushed to a repository. If set to true, images will be scanned after being pushed. If this parameter is not specified, it will default to false and images will not be scanned unless a scan is manually started with the StartImageScan API.
   *
   * @schema RepositorySpecForProviderImageScanningConfiguration#scanOnPush
   */
  readonly scanOnPush: boolean;

}

/**
 * The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
 *
 * @schema RepositorySpecForProviderImageTagMutability
 */
export enum RepositorySpecForProviderImageTagMutability {
  /** MUTABLE */
  MUTABLE = "MUTABLE",
  /** IMMUTABLE */
  IMMUTABLE = "IMMUTABLE",
}

/**
 * Tag defines a tag
 *
 * @schema RepositorySpecForProviderTags
 */
export interface RepositorySpecForProviderTags {
  /**
   * Key is the name of the tag.
   *
   * @schema RepositorySpecForProviderTags#key
   */
  readonly key: string;

  /**
   * Value is the value of the tag.
   *
   * @schema RepositorySpecForProviderTags#value
   */
  readonly value: string;

}

