import { z } from "zod"

export const JudiceLawsuitDTO = z.object({
  fId: z.number().int(),
  fNumber: z.string().max(50),
  fExternalLawyer: z.number().int().optional(),
  fExternalOffice: z.number().int().optional(),
  fBusinessDepartment: z.number().int().optional(),
  fBusinessUnit: z.number().int().optional(),
  fOrigin: z.number().int().optional(),
  fStatus: z.number().int(),
  fLinkedprocess: z.string().max(30).optional(),
  fActiontype: z.number().int(),
  fArea: z.number().int().optional(),
  fRegistry: z.number().int(),
  fDistrict: z.number().int(),
  fState: z.number().int(),
  fObject: z.string().optional(),
  fCreateDate: z.coerce.date(), // ISO date
  fClient: z.number().int().optional(),
  fClientposition: z.number().int().optional(),
  fDistributiondate: z.coerce.date().optional(), // ISO date
  fPhase: z.number().int().optional(),
  fFile: z.string().max(50).optional(),
  fFolder: z.string().max(50).optional(),
  fValue: z.number().optional(),
  fContingencyvalue: z.number().optional(),
  fInterestvalue: z.number().optional(),
  fLoss: z.number().int().optional(),
  fComments: z.string().optional(),
  fLawyer: z.number().int().optional(),
  fSituation: z.number().int(),
  fInactiveComments: z.string().optional(),
  fActiveComments: z.string().optional(),
  fInactiveDate: z.coerce.date(), // ISO date
  fClosereason: z.number().int().optional(),
  fEndvalue: z.number().optional(),
  fActiveDate: z.coerce.date(), // ISO date
  fCloseComments: z.string().optional(),
  fCloseDate: z.coerce.date(), // ISO date
  fExternallink: z.string().optional(),
  fActiveUser: z.number().int().optional(),
  fInactiveUser: z.number().int().optional(),
  fCloseUser: z.number().int().optional(),
  fAgreementuser: z.number().int().optional(),
  fReferenceMonth: z.number().int(), // Assuming this is a month number
  fReferenceYear: z.number().int(), // Assuming this is a year number
  fOriginComment: z.string().optional(),
  fRemoteValue: z.number().optional(),
  fPossibleValue: z.number().optional(),
  fProbablyValue: z.number().optional(),
  fLawyerFeeValue: z.number().optional(),
  fLawyerFeeValueProvision: z.number().optional(),
  fValueComments: z.string().optional(),
  fDepositValues: z.boolean().optional(),
  fDepositValuesEnd: z.boolean().optional(),
  fDepositValuesComments: z.string().optional(),
  fAjg: z.number().int().optional(),
  fSucumbencia: z.number().optional(),
  fProblem: z.number().int().default(0),
  fDigitalized: z.number().int().default(0),
  fCnjNumber: z.string().max(50).optional(),
  fJusticetype: z.number().int().default(1),
  fCloseDatePartial: z.coerce.date().optional(), // ISO date
  fMigrated: z.string().max(3).default("NÃO"),
  fJustification: z.number().int().optional(),
  fDatelastloss: z.coerce.date().optional(), // ISO date
  fChequeValue: z.number().int().optional(),
  fContrato: z.string().optional(),
  fValorContrato: z.number().optional(),
  fVencimento: z.coerce.date().optional(), // ISO date
  fAlvaraValue: z.number().int().optional(),
  fRelevant: z.number().int().default(0),
  fExternallinksuperior: z.string().optional(),
  fInternallink: z.string().optional(),
  fUserClosed: z.number().int().optional(),
  fNumberonly: z.string().optional(),
  fCreateDateonly: z.coerce.date().optional(), // ISO date
  fProcesseletronictype: z.number().int().optional(),
  fIndiceMonetary: z.number().int().optional(),
  fValueupdated: z.number().optional(),
  fContingencyvalueUpdated: z.number().optional(),
  fDateupdatedmonetary: z.coerce.date().optional(), // ISO date
  fSegment: z.number().int().optional(),
  fLegalExpense: z.number().int().optional(),
  fFisicoeletronico: z.string().max(60).optional(),
  fForum: z.number().int().optional(),
  fGroup: z.number().int().optional(),
  fCreateUser: z.number().int(),
  fRelevantgabriel: z.number().int().optional(),
  fReasonSuspended: z.number().int().optional(),
  fUserstartregister: z.number().int().optional(),
  fSubarea: z.number().int().optional(),
  fTax: z.number().int().default(0),
  fSegredojustica: z.number().int().optional(),
  fPolo: z.number().int().optional(),
  fConfidencial: z.number().int().optional(),
  f2Advid: z.string().optional(),
  fSuspended: z.number().int().default(0),
  fQuotedate: z.coerce.date().optional(), // ISO date
  fDatetype: z.number().int().optional(),
  fSummary: z.string().optional(),
  fContractingdate: z.coerce.date().optional(), // ISO date
  fTransitdate: z.coerce.date().optional(), // ISO date
  fObjecttypes: z.number().int().optional(),
  fTaxValue: z.number().default(0),
  fOldId: z.string().max(30).optional(),
  fDatePhaseupdated: z.coerce.date().optional(), // ISO date
  fPanel: z.number().int().default(1),
  fSentencaValue: z.number().optional(),
  fCondenacaoValue: z.number().optional(),
  fAcordaoValue: z.number().optional(),
  fMonitored: z.number().int().default(0),
  fClassecnj: z.number().int().optional(),
  fAssuntocnj: z.number().int().optional(),
})
export type JudiceLawsuitDTOType = z.infer<typeof JudiceLawsuitDTO>
export const JudiceLawsuitDTOArray = z.array(JudiceLawsuitDTO)
export type JudiceLawsuitDTOArrayType = z.infer<typeof JudiceLawsuitDTOArray>
