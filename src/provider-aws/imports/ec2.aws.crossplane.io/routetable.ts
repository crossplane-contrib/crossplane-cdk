// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A RouteTable is a managed resource that represents an AWS VPC Route Table.
 *
 * @schema RouteTable
 */
export class RouteTable extends ApiObject {
  /**
   * Defines a "RouteTable" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: RouteTableOptions) {
    super(scope, name, {
      ...options,
      kind: 'RouteTable',
      apiVersion: 'ec2.aws.crossplane.io/v1alpha4',
    });
  }
}

/**
 * A RouteTable is a managed resource that represents an AWS VPC Route Table.
 *
 * @schema RouteTable
 */
export interface RouteTableOptions {
  /**
   * @schema RouteTable#metadata
   */
  readonly metadata?: any;

  /**
   * A RouteTableSpec defines the desired state of a RouteTable.
   *
   * @schema RouteTable#spec
   */
  readonly spec: RouteTableSpec;

}

/**
 * A RouteTableSpec defines the desired state of a RouteTable.
 *
 * @schema RouteTableSpec
 */
export interface RouteTableSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema RouteTableSpec#deletionPolicy
   */
  readonly deletionPolicy?: RouteTableSpecDeletionPolicy;

  /**
   * RouteTableParameters define the desired state of an AWS VPC Route Table.
   *
   * @schema RouteTableSpec#forProvider
   */
  readonly forProvider: RouteTableSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema RouteTableSpec#providerConfigRef
   */
  readonly providerConfigRef?: RouteTableSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema RouteTableSpec#providerRef
   */
  readonly providerRef?: RouteTableSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema RouteTableSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: RouteTableSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema RouteTableSpecDeletionPolicy
 */
export enum RouteTableSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * RouteTableParameters define the desired state of an AWS VPC Route Table.
 *
 * @schema RouteTableSpecForProvider
 */
export interface RouteTableSpecForProvider {
  /**
   * The associations between the route table and one or more subnets.
   *
   * @schema RouteTableSpecForProvider#associations
   */
  readonly associations: RouteTableSpecForProviderAssociations[];

  /**
   * Region is the region you'd like your VPC to be created in.
   *
   * @schema RouteTableSpecForProvider#region
   */
  readonly region: string;

  /**
   * the routes in the route table
   *
   * @schema RouteTableSpecForProvider#routes
   */
  readonly routes: RouteTableSpecForProviderRoutes[];

  /**
   * Tags represents to current ec2 tags.
   *
   * @schema RouteTableSpecForProvider#tags
   */
  readonly tags?: RouteTableSpecForProviderTags[];

  /**
   * VPCID is the ID of the VPC.
   *
   * @schema RouteTableSpecForProvider#vpcId
   */
  readonly vpcId?: string;

  /**
   * VPCIDRef references a VPC to retrieve its vpcId
   *
   * @schema RouteTableSpecForProvider#vpcIdRef
   */
  readonly vpcIdRef?: RouteTableSpecForProviderVpcIdRef;

  /**
   * VPCIDSelector selects a reference to a VPC to retrieve its vpcId
   *
   * @schema RouteTableSpecForProvider#vpcIdSelector
   */
  readonly vpcIdSelector?: RouteTableSpecForProviderVpcIdSelector;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema RouteTableSpecProviderConfigRef
 */
export interface RouteTableSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema RouteTableSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema RouteTableSpecProviderRef
 */
export interface RouteTableSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema RouteTableSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema RouteTableSpecWriteConnectionSecretToRef
 */
export interface RouteTableSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema RouteTableSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema RouteTableSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Association describes an association between a route table and a subnet.
 *
 * @schema RouteTableSpecForProviderAssociations
 */
export interface RouteTableSpecForProviderAssociations {
  /**
   * The ID of the subnet. A subnet ID is not returned for an implicit association.
   *
   * @schema RouteTableSpecForProviderAssociations#subnetId
   */
  readonly subnetId?: string;

  /**
   * A referencer to retrieve the ID of a subnet
   *
   * @schema RouteTableSpecForProviderAssociations#subnetIdRef
   */
  readonly subnetIdRef?: RouteTableSpecForProviderAssociationsSubnetIdRef;

  /**
   * A selector to select a referencer to retrieve the ID of a subnet
   *
   * @schema RouteTableSpecForProviderAssociations#subnetIdSelector
   */
  readonly subnetIdSelector?: RouteTableSpecForProviderAssociationsSubnetIdSelector;

}

/**
 * Route describes a route in a route table.
 *
 * @schema RouteTableSpecForProviderRoutes
 */
export interface RouteTableSpecForProviderRoutes {
  /**
   * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match.
   *
   * @schema RouteTableSpecForProviderRoutes#destinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * The ID of an internet gateway or virtual private gateway attached to your VPC.
   *
   * @schema RouteTableSpecForProviderRoutes#gatewayId
   */
  readonly gatewayId?: string;

  /**
   * A referencer to retrieve the ID of a gateway
   *
   * @schema RouteTableSpecForProviderRoutes#gatewayIdRef
   */
  readonly gatewayIdRef?: RouteTableSpecForProviderRoutesGatewayIdRef;

  /**
   * A selector to select a referencer to retrieve the ID of a gateway
   *
   * @schema RouteTableSpecForProviderRoutes#gatewayIdSelector
   */
  readonly gatewayIdSelector?: RouteTableSpecForProviderRoutesGatewayIdSelector;

}

/**
 * Tag defines a tag
 *
 * @schema RouteTableSpecForProviderTags
 */
export interface RouteTableSpecForProviderTags {
  /**
   * Key is the name of the tag.
   *
   * @schema RouteTableSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * Value is the value of the tag.
   *
   * @schema RouteTableSpecForProviderTags#value
   */
  readonly value: string;

}

/**
 * VPCIDRef references a VPC to retrieve its vpcId
 *
 * @schema RouteTableSpecForProviderVpcIdRef
 */
export interface RouteTableSpecForProviderVpcIdRef {
  /**
   * Name of the referenced object.
   *
   * @schema RouteTableSpecForProviderVpcIdRef#name
   */
  readonly name: string;

}

/**
 * VPCIDSelector selects a reference to a VPC to retrieve its vpcId
 *
 * @schema RouteTableSpecForProviderVpcIdSelector
 */
export interface RouteTableSpecForProviderVpcIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema RouteTableSpecForProviderVpcIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema RouteTableSpecForProviderVpcIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A referencer to retrieve the ID of a subnet
 *
 * @schema RouteTableSpecForProviderAssociationsSubnetIdRef
 */
export interface RouteTableSpecForProviderAssociationsSubnetIdRef {
  /**
   * Name of the referenced object.
   *
   * @schema RouteTableSpecForProviderAssociationsSubnetIdRef#name
   */
  readonly name: string;

}

/**
 * A selector to select a referencer to retrieve the ID of a subnet
 *
 * @schema RouteTableSpecForProviderAssociationsSubnetIdSelector
 */
export interface RouteTableSpecForProviderAssociationsSubnetIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema RouteTableSpecForProviderAssociationsSubnetIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema RouteTableSpecForProviderAssociationsSubnetIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A referencer to retrieve the ID of a gateway
 *
 * @schema RouteTableSpecForProviderRoutesGatewayIdRef
 */
export interface RouteTableSpecForProviderRoutesGatewayIdRef {
  /**
   * Name of the referenced object.
   *
   * @schema RouteTableSpecForProviderRoutesGatewayIdRef#name
   */
  readonly name: string;

}

/**
 * A selector to select a referencer to retrieve the ID of a gateway
 *
 * @schema RouteTableSpecForProviderRoutesGatewayIdSelector
 */
export interface RouteTableSpecForProviderRoutesGatewayIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema RouteTableSpecForProviderRoutesGatewayIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema RouteTableSpecForProviderRoutesGatewayIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

