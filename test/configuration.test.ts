import { Testing } from 'cdk8s';
import * as l2 from '../src';
import * as configCrs from './crs/configuration.meta.pkg.crossplane.io';

test('platformRefAwsConfiguration', () => {
  const chart = Testing.chart();

  const pkg = new l2.Configuration(chart, 'platform-ref-aws', {
    name: 'platform-ref-aws',
    company: 'Upbound',
    maintainer: 'Jared Watts <jared@upbound.io>',
    keywords: ['aws', 'cloud-native', 'kubernetes', 'example', 'platform', 'reference'],
    source: 'github.com/upbound/platform-ref-aws',
    license: 'Apache-2.0',
    descriptionShort: 'The AWS reference platform for Kubernetes and Data Services.\n',
    description: 'This reference platform Configuration for Kubernetes and Data Services\nis a starting point to build, run, and operate your own internal cloud\nplatform and offer a self-service console and API to your internal teams.\n',
    readme: 'This reference platform `Configuration` for Kubernetes and Data Services\nis a starting point to build, run, and operate your own internal cloud\nplatform and offer a self-service console and API to your internal teams.\nIt provides platform APIs to provision fully configured EKS clusters,\nwith secure networking, and stateful cloud services (RDS) designed to\nsecurely connect to the nodes in each EKS cluster -- all composed using\ncloud service primitives from the [Crossplane AWS\nProvider](https://doc.crds.dev/github.com/crossplane/provider-aws). App\ndeployments can securely connect to the infrastructure they need using\nsecrets distributed directly to the app namespace.\n\n[Quickstart\nGuide](https://github.com/upbound/platform-ref-aws/#quick-start)\n\n[APIs in this\nConfiguration](https://github.com/upbound/platform-ref-aws/#apis-in-this-configuration)\n\nTo learn more checkout the [GitHub\nrepo](https://github.com/upbound/platform-ref-aws/) that you can copy and\ncustomize to meet the exact needs of your organization!\n',
    crossplaneVersion: '>=v0.14.0-0',
  });

  pkg.addProvider('crossplane/provider-aws', '>=v0.14.0-0');
  //pkg.addProvider('crossplane/provider-helm', '>=v0.3.7-0');

  const s1 = Testing.synth(chart);
  expect(s1).toMatchSnapshot();

  const chart2 = Testing.chart();
  configCrs.platformRefAws(chart2);
  const s2 = Testing.synth(chart2);
  expect(s2).toMatchSnapshot();

  expect(s1).toStrictEqual(s2);

});