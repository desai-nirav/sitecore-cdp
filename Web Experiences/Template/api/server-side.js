<#-- Construct the API response using Freemarker -->
<#-- For your Experience to run your API tab must have, at a minimum, open and closing brackets -->
<#-- Construct the API response using Freemarker -->
{
    <#assign products = getDecisionModelResultNode("Products")>
    <#if (products) ??>
        "products": ${toJSON(products.outputs[0].products)}
    </#if>
}