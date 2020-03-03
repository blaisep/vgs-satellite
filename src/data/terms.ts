/* eslint-env node */
export default {
  'regexp': `A regular expression, regex or regexp is a sequence of characters that define a search pattern.`,
  'formdata': `
In many applications, it is possible for a user to be presented with a form. The user will fill out the form, including information that is typed, generated by user input, or included from files that the user has selected. When the form is filled out, the data from the form is sent from the user to the receiving application.
`,
  'xpath': `
XPath stands for XML Path Language.
It uses a non-XML syntax to provide a flexible way
of addressing (pointing to) different parts of an XML document.
`,
  'json path': `JSON Path is a path according to the JSON Pointer specification. It defines a string syntax for identifying a specific value within a JSON.`,
  'transformer': `Transformers are different ways to navigate structured data to ‘transform’ a piece of it by either redacting or replacing the value with a surrogate value.`,
  'inbound connection': `By adding an inbound route, you establish a connection via a reverse proxy. The traffic will then be routed from your client-side to your backend systems/service via VGS.`,
  'outbound connection': `By adding an outbound route, you authorize an outbound connection to a specific host. The traffic will then be allowed between you, and authorized host via VGS.`,
  'storage': 'The storage value controls how aliases are stored. A persistent mode allows storing data on a permanent basis. Volatile storage has an expiration of 1 hr.',
  'target': 'The part of the payload passing through the proxy that will be operated on when a policy is matched. Can be either "body" or "headers.$HEADER_NAME" (e.g. "headers.location").',
  'format': 'There are different alias formats. UUID is the default format that can be used for any data. With UUID, aliases will look like tok_live_fgiC3Jx2abPUOPETFMvXuT. This format helps to quickly distinguish aliases from regular data and also produces one from those used in sandboxes.',
  'redact': 'Removes sensitive pieces of a payload and replaces them with aliases.',
  'reveal': 'Redeems sensitive data on a previously redacted payload.',
  'upstream host': 'The host that is an ultimate destination of the request. It can be your backend API, payment processor or other service.',
  'operation': 'An action performed on a stream of information. By choosing to redact, you remove sensitive pieces of a payload and replace them with aliases. Reveal replaces the surrogate value with the original sensitive data.',
  'echo server': 'Will accept any TCP connection and echo back a HTTP response with the entire content of the incoming TCP connection.',
  'route': 'is an endpoint exposed to a customer that allows sending data from one point to another. A Route has a source and a destination that determines the flow of traffic through the vault. Filters are then attached to the Route to determine what data is transformed and segmented as it passes through the Route.',
  'filter': 'describes a set of conditions that define when data should be operated on as it passes through a Route. When the conditions are evaluated to true, then a set of operations (pipeline) are executed according to the phase.',
  'environments': 'Vaults can be created in two different environments - Sandbox and Live. Sandbox Vaults are meant for experimentation and development while Live Vaults are intended for use with production data. You should not use the Sandbox Vault environment for any type of sensitive or production data.',
};
