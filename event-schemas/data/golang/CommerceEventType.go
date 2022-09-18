
package entities

// CommerceEventType represents an enum of string.
type CommerceEventType string

const (
  CommerceEventTypeCheckout CommerceEventType = "Checkout"
  CommerceEventTypePurchase = "Purchase"
  CommerceEventTypePayment = "Payment"
  CommerceEventTypeOrder = "Order"
  CommerceEventTypeExchange = "Exchange"
  CommerceEventTypeSubscription = "Subscription"
  CommerceEventTypeRevenueRecord = "RevenueRecord"
  CommerceEventTypeReward = "Reward"
  CommerceEventTypeDebit = "Debit"
  CommerceEventTypeCredit = "Credit"
  CommerceEventTypeSubscriptionCancel = "SubscriptionCancel"
)