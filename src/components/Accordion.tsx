import * as RadixAccordion from "@radix-ui/react-accordion"
import { IconChevronDown } from "@tabler/icons-react"

const Accordion = ({
  props,
}: {
  props:
    | RadixAccordion.AccordionImplSingleProps
    | RadixAccordion.AccordionImplMultipleProps
    | RadixAccordion.AccordionImplProps
}) => {
  const { className, children, itemType } = props
  return (
    <RadixAccordion.Root
      className={`flex flex-col gap-y-[1.2rem] ${className}`}
      type={itemType == "single" ? "single" : "multiple"}
    >
      {children}
    </RadixAccordion.Root>
  )
}

const AccordionItem = (props: RadixAccordion.AccordionItemProps) => {
  const { className, children } = props

  return (
    <RadixAccordion.Item className={`overflow-hidden ${className}`} {...props}>
      {children}
    </RadixAccordion.Item>
  )
}

const AccordionTrigger = (props: RadixAccordion.AccordionTriggerProps) => {
  const { className, children } = props

  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger className="group flex flex-1 cursor-default items-center justify-between" {...props}>
        {children}

        <IconChevronDown
          className={`z-[-1] text-gray-600 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 ${className}`}
          aria-hidden
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
}

const AccordionContent = (props: RadixAccordion.AccordionContentProps) => {
  const { className, children } = props

  return (
    <RadixAccordion.Content
      className={`overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown ${className}`}
      {...props}
    >
      {children}
    </RadixAccordion.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
