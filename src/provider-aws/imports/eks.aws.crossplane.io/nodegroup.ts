// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A NodeGroup is a managed resource that represents an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroup
 */
export class NodeGroup extends ApiObject {
  /**
   * Defines a "NodeGroup" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: NodeGroupOptions) {
    super(scope, name, {
      ...options,
      kind: 'NodeGroup',
      apiVersion: 'eks.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A NodeGroup is a managed resource that represents an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroup
 */
export interface NodeGroupOptions {
  /**
   * @schema NodeGroup#metadata
   */
  readonly metadata?: any;

  /**
   * A NodeGroupSpec defines the desired state of an EKS NodeGroup.
   *
   * @schema NodeGroup#spec
   */
  readonly spec: NodeGroupSpec;

}

/**
 * A NodeGroupSpec defines the desired state of an EKS NodeGroup.
 *
 * @schema NodeGroupSpec
 */
export interface NodeGroupSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema NodeGroupSpec#deletionPolicy
   */
  readonly deletionPolicy?: NodeGroupSpecDeletionPolicy;

  /**
   * NodeGroupParameters define the desired state of an AWS Elastic Kubernetes Service NodeGroup.
   *
   * @schema NodeGroupSpec#forProvider
   */
  readonly forProvider: NodeGroupSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema NodeGroupSpec#providerConfigRef
   */
  readonly providerConfigRef?: NodeGroupSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema NodeGroupSpec#providerRef
   */
  readonly providerRef?: NodeGroupSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema NodeGroupSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: NodeGroupSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema NodeGroupSpecDeletionPolicy
 */
export enum NodeGroupSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * NodeGroupParameters define the desired state of an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroupSpecForProvider
 */
export interface NodeGroupSpecForProvider {
  /**
   * The AMI type for your node group. GPU instance types should use the AL2_x86_64_GPU AMI type, which uses the Amazon EKS-optimized Linux AMI with GPU support. Non-GPU instances should use the AL2_x86_64 AMI type, which uses the Amazon EKS-optimized Linux AMI.
   *
   * @schema NodeGroupSpecForProvider#amiType
   */
  readonly amiType?: string;

  /**
   * The name of the cluster to create the node group in.
 ClusterName is a required field
   *
   * @schema NodeGroupSpecForProvider#clusterName
   */
  readonly clusterName?: string;

  /**
   * ClusterNameRef is a reference to a Cluster used to set the ClusterName.
   *
   * @schema NodeGroupSpecForProvider#clusterNameRef
   */
  readonly clusterNameRef?: NodeGroupSpecForProviderClusterNameRef;

  /**
   * ClusterNameSelector selects references to a Cluster used to set the ClusterName.
   *
   * @schema NodeGroupSpecForProvider#clusterNameSelector
   */
  readonly clusterNameSelector?: NodeGroupSpecForProviderClusterNameSelector;

  /**
   * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB.
   *
   * @schema NodeGroupSpecForProvider#diskSize
   */
  readonly diskSize?: number;

  /**
   * The instance type to use for your node group. Currently, you can specify a single instance type for a node group. The default value for this parameter is t3.medium. If you choose a GPU instance type, be sure to specify the AL2_x86_64_GPU with the amiType parameter.
   *
   * @schema NodeGroupSpecForProvider#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * The Kubernetes labels to be applied to the nodes in the node group when they are created.
   *
   * @schema NodeGroupSpecForProvider#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see Amazon EKS Worker Node IAM Role (https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html) in the Amazon EKS User Guide .
 NodeRole is a required field
   *
   * @schema NodeGroupSpecForProvider#nodeRole
   */
  readonly nodeRole?: string;

  /**
   * NodeRoleRef is a reference to a Cluster used to set the NodeRole.
   *
   * @schema NodeGroupSpecForProvider#nodeRoleRef
   */
  readonly nodeRoleRef?: NodeGroupSpecForProviderNodeRoleRef;

  /**
   * NodeRoleSelector selects references to a Cluster used to set the NodeRole.
   *
   * @schema NodeGroupSpecForProvider#nodeRoleSelector
   */
  readonly nodeRoleSelector?: NodeGroupSpecForProviderNodeRoleSelector;

  /**
   * Region is the region you'd like  the NodeGroup to be created in.
   *
   * @schema NodeGroupSpecForProvider#region
   */
  readonly region: string;

  /**
   * The AMI version of the Amazon EKS-optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see Amazon EKS-Optimized Linux AMI Versions (https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the Amazon EKS User Guide.
   *
   * @schema NodeGroupSpecForProvider#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * The remote access (SSH) configuration to use with your node group.
   *
   * @schema NodeGroupSpecForProvider#remoteAccess
   */
  readonly remoteAccess?: NodeGroupSpecForProviderRemoteAccess;

  /**
   * The scaling configuration details for the Auto Scaling group that is created for your node group.
   *
   * @schema NodeGroupSpecForProvider#scalingConfig
   */
  readonly scalingConfig?: NodeGroupSpecForProviderScalingConfig;

  /**
   * SubnetRefs are references to Subnets used to set the Subnets.
   *
   * @schema NodeGroupSpecForProvider#subnetRefs
   */
  readonly subnetRefs?: NodeGroupSpecForProviderSubnetRefs[];

  /**
   * SubnetSelector selects references to Subnets used to set the Subnets.
   *
   * @schema NodeGroupSpecForProvider#subnetSelector
   */
  readonly subnetSelector?: NodeGroupSpecForProviderSubnetSelector;

  /**
   * The subnets to use for the Auto Scaling group that is created for your node group. These subnets must have the tag key kubernetes.io/cluster/CLUSTER_NAME with a value of shared, where CLUSTER_NAME is replaced with the name of your cluster.
 Subnets is a required field
   *
   * @schema NodeGroupSpecForProvider#subnets
   */
  readonly subnets?: string[];

  /**
   * The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
   *
   * @schema NodeGroupSpecForProvider#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value.
   *
   * @schema NodeGroupSpecForProvider#version
   */
  readonly version?: string;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema NodeGroupSpecProviderConfigRef
 */
export interface NodeGroupSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema NodeGroupSpecProviderRef
 */
export interface NodeGroupSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema NodeGroupSpecWriteConnectionSecretToRef
 */
export interface NodeGroupSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema NodeGroupSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema NodeGroupSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * ClusterNameRef is a reference to a Cluster used to set the ClusterName.
 *
 * @schema NodeGroupSpecForProviderClusterNameRef
 */
export interface NodeGroupSpecForProviderClusterNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderClusterNameRef#name
   */
  readonly name: string;

}

/**
 * ClusterNameSelector selects references to a Cluster used to set the ClusterName.
 *
 * @schema NodeGroupSpecForProviderClusterNameSelector
 */
export interface NodeGroupSpecForProviderClusterNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderClusterNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderClusterNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * NodeRoleRef is a reference to a Cluster used to set the NodeRole.
 *
 * @schema NodeGroupSpecForProviderNodeRoleRef
 */
export interface NodeGroupSpecForProviderNodeRoleRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderNodeRoleRef#name
   */
  readonly name: string;

}

/**
 * NodeRoleSelector selects references to a Cluster used to set the NodeRole.
 *
 * @schema NodeGroupSpecForProviderNodeRoleSelector
 */
export interface NodeGroupSpecForProviderNodeRoleSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderNodeRoleSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderNodeRoleSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * The remote access (SSH) configuration to use with your node group.
 *
 * @schema NodeGroupSpecForProviderRemoteAccess
 */
export interface NodeGroupSpecForProviderRemoteAccess {
  /**
   * The Amazon EC2 SSH key that provides access for SSH communication with the worker nodes in the managed node group. For more information, see Amazon EC2 Key Pairs (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#ec2SSHKey
   */
  readonly ec2SSHKey?: string;

  /**
   * SourceSecurityGroupRefs are references to SecurityGroups used to set the SourceSecurityGroups.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroupRefs
   */
  readonly sourceSecurityGroupRefs?: NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs[];

  /**
   * SourceSecurityGroupSelector selects references to SecurityGroups used to set the SourceSecurityGroups.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroupSelector
   */
  readonly sourceSecurityGroupSelector?: NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector;

  /**
   * The security groups that are allowed SSH access (port 22) to the worker nodes. If you specify an Amazon EC2 SSH key but do not specify a source security group when you create a managed node group, then port 22 on the worker nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the Amazon Virtual Private Cloud User Guide.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroups
   */
  readonly sourceSecurityGroups?: string[];

}

/**
 * The scaling configuration details for the Auto Scaling group that is created for your node group.
 *
 * @schema NodeGroupSpecForProviderScalingConfig
 */
export interface NodeGroupSpecForProviderScalingConfig {
  /**
   * The current number of worker nodes that the managed node group should maintain.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#desiredSize
   */
  readonly desiredSize?: number;

  /**
   * The maximum number of worker nodes that the managed node group can scale out to. Managed node groups can support up to 100 nodes by default.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#maxSize
   */
  readonly maxSize?: number;

  /**
   * The minimum number of worker nodes that the managed node group can scale in to. This number must be greater than zero.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#minSize
   */
  readonly minSize?: number;

}

/**
 * A Reference to a named object.
 *
 * @schema NodeGroupSpecForProviderSubnetRefs
 */
export interface NodeGroupSpecForProviderSubnetRefs {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderSubnetRefs#name
   */
  readonly name: string;

}

/**
 * SubnetSelector selects references to Subnets used to set the Subnets.
 *
 * @schema NodeGroupSpecForProviderSubnetSelector
 */
export interface NodeGroupSpecForProviderSubnetSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderSubnetSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderSubnetSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Reference to a named object.
 *
 * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs
 */
export interface NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs#name
   */
  readonly name: string;

}

/**
 * SourceSecurityGroupSelector selects references to SecurityGroups used to set the SourceSecurityGroups.
 *
 * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector
 */
export interface NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

