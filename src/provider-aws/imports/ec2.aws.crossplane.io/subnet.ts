// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A Subnet is a managed resource that represents an AWS VPC Subnet.
 *
 * @schema Subnet
 */
export class Subnet extends ApiObject {
  /**
   * Defines a "Subnet" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SubnetOptions) {
    super(scope, name, {
      ...options,
      kind: 'Subnet',
      apiVersion: 'ec2.aws.crossplane.io/v1beta1',
    });
  }
}

/**
 * A Subnet is a managed resource that represents an AWS VPC Subnet.
 *
 * @schema Subnet
 */
export interface SubnetOptions {
  /**
   * @schema Subnet#metadata
   */
  readonly metadata?: any;

  /**
   * A SubnetSpec defines the desired state of a Subnet.
   *
   * @schema Subnet#spec
   */
  readonly spec: SubnetSpec;

}

/**
 * A SubnetSpec defines the desired state of a Subnet.
 *
 * @schema SubnetSpec
 */
export interface SubnetSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema SubnetSpec#deletionPolicy
   */
  readonly deletionPolicy?: SubnetSpecDeletionPolicy;

  /**
   * SubnetParameters define the desired state of an AWS VPC Subnet.
   *
   * @schema SubnetSpec#forProvider
   */
  readonly forProvider: SubnetSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema SubnetSpec#providerConfigRef
   */
  readonly providerConfigRef?: SubnetSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema SubnetSpec#providerRef
   */
  readonly providerRef?: SubnetSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema SubnetSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: SubnetSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema SubnetSpecDeletionPolicy
 */
export enum SubnetSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * SubnetParameters define the desired state of an AWS VPC Subnet.
 *
 * @schema SubnetSpecForProvider
 */
export interface SubnetSpecForProvider {
  /**
   * Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives an IPv6 address.
   *
   * @schema SubnetSpecForProvider#assignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: boolean;

  /**
   * The Availability Zone for the subnet. Default: AWS selects one for you. If you create more than one subnet in your VPC, we may not necessarily select a different zone for each subnet.
   *
   * @schema SubnetSpecForProvider#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * The AZ ID or the Local Zone ID of the subnet.
   *
   * @schema SubnetSpecForProvider#availabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * CIDRBlock is the IPv4 network range for the Subnet, in CIDR notation. For example, 10.0.0.0/18.
   *
   * @schema SubnetSpecForProvider#cidrBlock
   */
  readonly cidrBlock: string;

  /**
   * The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
   *
   * @schema SubnetSpecForProvider#ipv6CIDRBlock
   */
  readonly ipv6CIDRBlock?: string;

  /**
   * Indicates whether instances launched in this subnet receive a public IPv4 address.
   *
   * @schema SubnetSpecForProvider#mapPublicIPOnLaunch
   */
  readonly mapPublicIPOnLaunch?: boolean;

  /**
   * Region is the region you'd like your Subnet to be created in.
   *
   * @schema SubnetSpecForProvider#region
   */
  readonly region?: string;

  /**
   * Tags represents to current ec2 tags.
   *
   * @schema SubnetSpecForProvider#tags
   */
  readonly tags?: SubnetSpecForProviderTags[];

  /**
   * VPCID is the ID of the VPC.
   *
   * @schema SubnetSpecForProvider#vpcId
   */
  readonly vpcId?: string;

  /**
   * VPCIDRef reference a VPC to retrieve its vpcId
   *
   * @schema SubnetSpecForProvider#vpcIdRef
   */
  readonly vpcIdRef?: SubnetSpecForProviderVpcIdRef;

  /**
   * VPCIDSelector selects reference to a VPC to retrieve its vpcId
   *
   * @schema SubnetSpecForProvider#vpcIdSelector
   */
  readonly vpcIdSelector?: SubnetSpecForProviderVpcIdSelector;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema SubnetSpecProviderConfigRef
 */
export interface SubnetSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema SubnetSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema SubnetSpecProviderRef
 */
export interface SubnetSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema SubnetSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema SubnetSpecWriteConnectionSecretToRef
 */
export interface SubnetSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema SubnetSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema SubnetSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Tag defines a tag
 *
 * @schema SubnetSpecForProviderTags
 */
export interface SubnetSpecForProviderTags {
  /**
   * Key is the name of the tag.
   *
   * @schema SubnetSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * Value is the value of the tag.
   *
   * @schema SubnetSpecForProviderTags#value
   */
  readonly value: string;

}

/**
 * VPCIDRef reference a VPC to retrieve its vpcId
 *
 * @schema SubnetSpecForProviderVpcIdRef
 */
export interface SubnetSpecForProviderVpcIdRef {
  /**
   * Name of the referenced object.
   *
   * @schema SubnetSpecForProviderVpcIdRef#name
   */
  readonly name: string;

}

/**
 * VPCIDSelector selects reference to a VPC to retrieve its vpcId
 *
 * @schema SubnetSpecForProviderVpcIdSelector
 */
export interface SubnetSpecForProviderVpcIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema SubnetSpecForProviderVpcIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema SubnetSpecForProviderVpcIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

