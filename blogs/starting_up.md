# Starting Up

On 27th October of 2020, RoMeAh created a repository in github named blazescript which would be just another scripting language, which would be dynamically typed and interpreted. So the first mistake which he did was that he chose a interpreted language to make a interpreted language, which is a super slow way to make a language, as it's double interpretation. It started up with a simple lexer which used to go through statements charecter by charecter, identifying them and if not identified throw a Unexpected charecter error. After everything is tokenized, it goes onto the parser which parsed a group of tokens. For example

```
"9 + 9" -> Token(Int, 9) Token(Plus) Token(Int, 9) -> BinaryNode(9, Plus, 9)
```
