### Jason on WPGraphQL contact forms (01/20/20)

> So, if you know the fields you want to accept, I'd just register a GraphQL Mutation for that specific form with the input fields you want to accept. If you want to use something like a form-builder (Gravity Forms, Ninja Forms) then it gets more tricky because the shape of the form is unpredictable. It could be any number of inputs with any number of input Types, so their solutions are (necessarily) more complex. For your case, if you know you have one specific form that accepts 4 fields, you could register a mutation like so:

```php
function register_graphql_mutation( 'SubmitContactForm', [
  'description' => __( 'Accepts contact form submissions', 'your-textdomain' ),
  'inputFields' => [
    'from' => [
      'type' => 'String',
    ],
    'to' => [
      'type' => 'String',
    ],
    'subject' => [
      'type' => 'String',
    ],
    'text' => [
      'type' => 'String',
    ],
  ],
  'outputFields' => [
      'success' => [
        'type' => 'Bool'
      ]
   ],
   'mutateAndGetPayload' => function( $input, $context, $info ) {
      # Instantiate the client.
      $mgClient = new Mailgun('YOUR_API_KEY');
      $domain = "YOUR_DOMAIN_NAME";
      # Make the call to the client.
      $result = $mgClient->sendMessage($domain, array(
	      'from'	=> $input['from'],
	      'to'	=> $input['to'],
	      'subject' => $input['subject'],
	      'text'	=> $input['text']
      ));

    }
] );
```
