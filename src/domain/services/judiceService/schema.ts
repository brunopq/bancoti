import {
  pgTable,
  index,
  foreignKey,
  bigserial,
  varchar,
  bigint,
  timestamp,
  smallint,
  date,
  integer,
  doublePrecision,
  numeric,
  serial,
  text,
  check,
  uniqueIndex,
  unique,
  jsonb,
  uuid,
  boolean,
  char,
  time,
  primaryKey,
  pgView,
  pgSequence,
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const appcommentnotifysFIdSeq = pgSequence(
  "appcommentnotifys_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "0",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
  },
)
export const appointmentcommentsFIdSeq = pgSequence(
  "appointmentcomments_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "0",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
  },
)
export const seqCaldavEventInvite = pgSequence("seq_caldav_event_invite", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqCaldavEventParticipant = pgSequence(
  "seq_caldav_event_participant",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const seqCaldavParentEventInvite = pgSequence(
  "seq_caldav_parent_event_invite",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const seqCaldavParticipantInviteNotification = pgSequence(
  "seq_caldav_participant_invite_notification",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const seqCaldavRecurrence = pgSequence("seq_caldav_recurrence", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqCaldavUser = pgSequence("seq_caldav_user", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const clientdocumentFilesFIdSeq = pgSequence(
  "clientdocument_files_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const clientdocumentsFIdSeq = pgSequence("clientdocuments_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const consultationandadviceProcessSeq = pgSequence(
  "consultationandadvice_process_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const controlspecialadviceSeq = pgSequence("controlspecialadvice_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const controlspecialbillingSeq = pgSequence(
  "controlspecialbilling_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const controlspecialfinancialSeq = pgSequence(
  "controlspecialfinancial_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const despesaTypesSeq = pgSequence("despesa_types_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqDocumentQueue = pgSequence("seq_document_queue", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const garnishmentsFIdSeq = pgSequence("garnishments_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const objecttypesSeq = pgSequence("objecttypes_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const observationshistoryFIdSeq = pgSequence(
  "observationshistory_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const panelFIdSeq = pgSequence("panel_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "0",
  maxValue: "2147483647",
  cache: "1",
  cycle: false,
})
export const partnerFIdSeq = pgSequence("partner_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqPerfilDados = pgSequence("seq_perfil_dados", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqPerfilInfo = pgSequence("seq_perfil_info", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqPerfilAdv = pgSequence("seq_perfil_adv", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const pgmfavoritesSeqId = pgSequence("pgmfavorites_seq_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const processStopwatchFIdSeq = pgSequence("process_stopwatch_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const processactionobjectsSeq = pgSequence("processactionobjects_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqProcessedDocument = pgSequence("seq_processed_document", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const processeventcontrolFIdSeq = pgSequence(
  "processeventcontrol_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
  },
)
export const seqPropostas = pgSequence("seq_propostas", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqPropostasMotivosNegados = pgSequence(
  "seq_propostas_motivos_negados",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const publicationActionSeq = pgSequence("publication_action_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationInfologSeq = pgSequence("publication_infolog_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsId = pgSequence("publications_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsDiscardId = pgSequence("publications_discard_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsIntsId = pgSequence("publications_ints_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsOldId = pgSequence("publications_old_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsTempCod = pgSequence("publications_temp_cod", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsWarSeq = pgSequence("publications_war_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const publicationsWarUserId = pgSequence("publications_war_user_id", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqSystemLogin = pgSequence("seq_system_login", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqUserSettings = pgSequence("seq_user_settings", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const seqUserclientAppointmenttypes = pgSequence(
  "seq_userclient_appointmenttypes",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const serviceactivitiesFIdSeq = pgSequence(
  "serviceactivities_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const servicedocumentFilesFIdSeq = pgSequence(
  "servicedocument_files_f_id_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
  },
)
export const servicedocumentsFIdSeq = pgSequence("servicedocuments_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const servicesLogFIdSeq = pgSequence("services_log_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const servicesubjectsFIdSeq = pgSequence("servicesubjects_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const themesFIdSeq = pgSequence("themes_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "9223372036854775807",
  cache: "1",
  cycle: false,
})
export const usersFIdSeq = pgSequence("users_f_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "2147483647",
  cache: "1",
  cycle: false,
})

export const process = pgTable(
  "process",
  {
    fId: bigserial("f_id", { mode: "number" }).primaryKey().notNull(),
    fNumber: varchar("f_number", { length: 50 }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fExternalLawyer: bigint("f_external_lawyer", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fExternalOffice: bigint("f_external_office", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fBusinessDepartment: bigint("f_business_department", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fBusinessUnit: bigint("f_business_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOrigin: bigint("f_origin", { mode: "number" }),
    fStatus: smallint("f_status"),
    fLinkedprocess: varchar("f_linkedprocess", { length: 30 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActiontype: bigint("f_actiontype", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fRegistry: bigint("f_registry", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fDistrict: bigint("f_district", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fState: bigint("f_state", { mode: "number" }).notNull(),
    fObject: text("f_object"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClientposition: bigint("f_clientposition", { mode: "number" }),
    fDistributiondate: date("f_distributiondate"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fPhase: bigint("f_phase", { mode: "number" }),
    fFile: varchar("f_file", { length: 50 }),
    fFolder: varchar("f_folder", { length: 50 }),
    fValue: numeric("f_value", { mode: "number" }),
    fContingencyvalue: numeric("f_contingencyvalue", { mode: "number" }),
    fInterestvalue: numeric("f_interestvalue", { mode: "number" }),
    fLoss: smallint("f_loss"),
    fComments: text("f_comments"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    fSituation: smallint("f_situation").notNull(),
    fInactiveComments: text("f_inactive_comments"),
    fActiveComments: text("f_active_comments"),
    fInactiveDate: timestamp("f_inactive_date", { mode: "string" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClosereason: bigint("f_closereason", { mode: "number" }),
    fEndvalue: numeric("f_endvalue", { mode: "number" }),
    fActiveDate: timestamp("f_active_date", { mode: "string" }),
    fCloseComments: text("f_close_comments"),
    fCloseDate: timestamp("f_close_date", { mode: "string" }),
    fExternallink: text("f_externallink"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActiveUser: bigint("f_active_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fInactiveUser: bigint("f_inactive_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCloseUser: bigint("f_close_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAgreementuser: bigint("f_agreementuser", { mode: "number" }),
    fReferenceMonth: smallint("f_reference_month"),
    fReferenceYear: smallint("f_reference_year"),
    fOriginComment: text("f_origin_comment"),
    fRemoteValue: numeric("f_remote_value", { mode: "number" }),
    fPossibleValue: numeric("f_possible_value", { mode: "number" }),
    fProbablyValue: numeric("f_probably_value", { mode: "number" }),
    fLawyerFeeValue: numeric("f_lawyer_fee_value", { mode: "number" }),
    fLawyerFeeValueProvision: numeric("f_lawyer_fee_value_provision", {
      mode: "number",
    }),
    fValueComments: text("f_value_comments"),
    fDepositValues: boolean("f_deposit_values"),
    fDepositValuesEnd: boolean("f_deposit_values_end"),
    fDepositValuesComments: text("f_deposit_values_comments"),
    fAjg: smallint("f_ajg"),
    fSucumbencia: numeric("f_sucumbencia", { mode: "number" }),
    fProblem: smallint("f_problem").default(0).notNull(),
    fDigitalized: smallint("f_digitalized").default(0).notNull(),
    fCnjNumber: varchar("f_cnj_number", { length: 50 }),
    fJusticetype: smallint("f_justicetype").default(1).notNull(),
    fCloseDatePartial: date("f_close_date_partial"),
    fMigrated: varchar("f_migrated", { length: 3 }).default("NÃO").notNull(),
    fJustification: integer("f_justification"),
    fDatelastloss: date("f_datelastloss"),
    fChequeValue: smallint("f_cheque_value"),
    fContrato: varchar("f_contrato"),
    fValorContrato: numeric("f_valor_contrato", { mode: "number" }),
    fVencimento: date("f_vencimento"),
    fAlvaraValue: integer("f_alvara_value"),
    fRelevant: smallint("f_relevant").default(0),
    fExternallinksuperior: text("f_externallinksuperior"),
    fInternallink: text("f_internallink"),
    fUserClosed: integer("f_user_closed"),
    fNumberonly: varchar("f_numberonly"),
    fCreateDateonly: date("f_create_dateonly").default(sql`('now'`).notNull(),
    fProcesseletronictype: integer("f_processeletronictype"),
    fIndiceMonetary: integer("f_indice_monetary").default(sql`NULL`),
    fValueupdated: numeric("f_valueupdated", { mode: "number" }),
    fContingencyvalueUpdated: numeric("f_contingencyvalue_updated", {
      mode: "number",
    }),
    fDateupdatedmonetary: date("f_dateupdatedmonetary"),
    fSegment: integer("f_segment"),
    fLegalExpense: integer("f_legal_expense"),
    fFisicoeletronico: varchar("f_fisicoeletronico", { length: 60 }),
    fForum: integer("f_forum"),
    fGroup: integer("f_group"),
    fCreateUser: integer("f_create_user").notNull(),
    fRelevantgabriel: smallint("f_relevantgabriel"),
    fReasonSuspended: integer("f_reason_suspended"),
    fUserstartregister: integer("f_userstartregister"),
    fSubarea: integer("f_subarea"),
    fTax: integer("f_tax").default(0),
    fSegredojustica: smallint("f_segredojustica"),
    fPolo: smallint("f_polo"),
    fConfidencial: smallint("f_confidencial"),
    f2Advid: varchar("f_2advid"),
    fSuspended: smallint("f_suspended").default(0).notNull(),
    fQuotedate: date("f_quotedate"),
    fDatetype: smallint("f_datetype"),
    fSummary: text("f_summary"),
    fContractingdate: date("f_contractingdate"),
    fTransitdate: date("f_transitdate"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fObjecttypes: bigint("f_objecttypes", { mode: "number" }),
    fTaxValue: doublePrecision("f_tax_value").default(0),
    fOldId: varchar("f_old_id", { length: 30 }),
    fDatePhaseupdated: date("f_date_phaseupdated"),
    fPanel: smallint("f_panel").default(1).notNull(),
    fSentencaValue: numeric("f_sentenca_value", { precision: 15, scale: 2 }),
    fCondenacaoValue: numeric("f_condenacao_value", {
      precision: 15,
      scale: 2,
    }),
    fAcordaoValue: numeric("f_acordao_value", { precision: 15, scale: 2 }),
    fMonitored: smallint("f_monitored").default(0).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClassecnj: bigint("f_classecnj", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAssuntocnj: bigint("f_assuntocnj", { mode: "number" }),
  },
  (table) => [
    index("IX_r_1").using(
      "btree",
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_106").using(
      "btree",
      table.fClosereason.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_130").using(
      "btree",
      table.fInactiveUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_131").using(
      "btree",
      table.fActiveUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_132").using(
      "btree",
      table.fCloseUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_140").using(
      "btree",
      table.fAgreementuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_16").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_165").using(
      "btree",
      table.fOrigin.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_167").using(
      "btree",
      table.fBusinessUnit.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_168").using(
      "btree",
      table.fBusinessDepartment.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_17").using(
      "btree",
      table.fClientposition.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_174").using(
      "btree",
      table.fExternalOffice.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_175").using(
      "btree",
      table.fExternalLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_2").using(
      "btree",
      table.fDistrict.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_3").using(
      "btree",
      table.fRegistry.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_33").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_4").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_5").using(
      "btree",
      table.fActiontype.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_82").using(
      "btree",
      table.fPhase.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_f_assuntocnj").using(
      "btree",
      table.fAssuntocnj.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_f_classecnj").using(
      "btree",
      table.fClassecnj.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_process_f_justicetype").using(
      "btree",
      table.fJusticetype.asc().nullsLast().op("int2_ops"),
    ),
    index("idx_process_f_objecttypes").using(
      "btree",
      table.fObjecttypes.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_process_f_subarea").using(
      "btree",
      table.fSubarea.asc().nullsLast().op("int4_ops"),
    ),
    index("process_f_cnj_number_idx").using(
      "btree",
      table.fCnjNumber.asc().nullsLast().op("text_ops"),
    ),
    index("process_f_group_idx").using(
      "btree",
      table.fGroup.asc().nullsLast().op("int4_ops"),
    ),
    index("process_idx").using(
      "btree",
      table.fNumber.asc().nullsLast().op("text_ops"),
    ),
    index("process_idx1").using(
      "btree",
      sql`btrim(replace(replace(replace((f_number)::text, '-'::text, ''::`,
    ),
    index("process_idx10").using(
      "btree",
      table.fUserClosed.asc().nullsLast().op("int4_ops"),
    ),
    index("process_idx11").using(
      "btree",
      table.fClient.asc().nullsLast().op("text_ops"),
      table.fArea.asc().nullsLast().op("text_ops"),
      table.fStatus.asc().nullsLast().op("text_ops"),
      table.fSituation.asc().nullsLast().op("int8_ops"),
      table.fNumber.asc().nullsLast().op("text_ops"),
      table.fCnjNumber.asc().nullsLast().op("int2_ops"),
      table.fFile.asc().nullsLast().op("text_ops"),
      table.fFolder.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx12").using(
      "btree",
      table.fNumberonly.asc().nullsLast().op("text_ops"),
    ),
    index("process_idx13").using(
      "btree",
      table.fCreateDateonly.asc().nullsLast().op("date_ops"),
    ),
    index("process_idx14").using(
      "btree",
      table.fCloseDate.asc().nullsLast().op("timestamp_ops"),
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx15").using(
      "btree",
      table.fCreateDateonly.asc().nullsLast().op("date_ops"),
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx16").using(
      "btree",
      table.fProcesseletronictype.asc().nullsLast().op("int4_ops"),
    ),
    index("process_idx17").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fLawyer.asc().nullsLast().op("int8_ops"),
      table.fId.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx18").using(
      "btree",
      table.fClosereason.asc().nullsLast().op("text_ops"),
      table.fNumber.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx19").using(
      "btree",
      table.fSegment.asc().nullsLast().op("int4_ops"),
    ),
    index("process_idx2").using(
      "btree",
      table.fCreateDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("process_idx20").using(
      "btree",
      table.fRelevantgabriel.asc().nullsLast().op("int2_ops"),
    ),
    index("process_idx21").using(
      "btree",
      table.fUserstartregister.asc().nullsLast().op("int4_ops"),
    ),
    index("process_idx3").using(
      "btree",
      table.fSituation.asc().nullsLast().op("int2_ops"),
    ),
    index("process_idx4").using(
      "btree",
      sql`regexp_replace((f_number)::text, '[^0-9]'::text, ''::text, 'g':`,
    ),
    index("process_idx5").using(
      "btree",
      table.fSituation.asc().nullsLast().op("int2_ops"),
      table.fClosereason.asc().nullsLast().op("int2_ops"),
    ),
    index("process_idx6").using(
      "btree",
      table.fClient.asc().nullsLast().op("int2_ops"),
      table.fState.asc().nullsLast().op("int2_ops"),
      table.fArea.asc().nullsLast().op("int2_ops"),
      table.fSituation.asc().nullsLast().op("int2_ops"),
      table.fClosereason.asc().nullsLast().op("int2_ops"),
    ),
    index("process_idx7").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fState.asc().nullsLast().op("int8_ops"),
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("process_idx8").using(
      "btree",
      table.fCloseDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("process_idx9").using(
      "btree",
      table.fInactiveComments.asc().nullsLast().op("text_ops"),
    ),
    index("process_regexp_replace_idx").using(
      "btree",
      sql`regexp_replace((f_cnj_number)::text, '[^0-9]'::text, ''::text, `,
    ),
    foreignKey({
      columns: [table.fAssuntocnj],
      foreignColumns: [tpuAssuntos.codAssunto],
      name: "fk_process_f_assuntocnj",
    }),
    foreignKey({
      columns: [table.fClassecnj],
      foreignColumns: [tpuClasses.codClasse],
      name: "fk_process_f_classecnj",
    }),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_process_f_create_user_users",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fSegment],
      foreignColumns: [segments.fId],
      name: "fk_process_f_segment_segments_f_id",
    }),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "process_fk1",
    }),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "r_1",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fClosereason],
      foreignColumns: [closereasons.fId],
      name: "r_106",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fInactiveUser],
      foreignColumns: [users.fId],
      name: "r_130",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fActiveUser],
      foreignColumns: [users.fId],
      name: "r_131",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fCloseUser],
      foreignColumns: [users.fId],
      name: "r_132",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fAgreementuser],
      foreignColumns: [users.fId],
      name: "r_140",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_16",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fOrigin],
      foreignColumns: [origin.fId],
      name: "r_165",
    })
      .onUpdate("restrict")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fBusinessUnit],
      foreignColumns: [businessunities.fId],
      name: "r_167",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fBusinessDepartment],
      foreignColumns: [businessdepartments.fId],
      name: "r_168",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fClientposition],
      foreignColumns: [positions.fId],
      name: "r_17",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fExternalOffice],
      foreignColumns: [offices.fId],
      name: "r_174",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fExternalLawyer],
      foreignColumns: [lawyersexternal.fId],
      name: "r_175",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fDistrict],
      foreignColumns: [districts.fId],
      name: "r_2",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fRegistry],
      foreignColumns: [registries.fId],
      name: "r_3",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_33",
    }),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_4",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fActiontype],
      foreignColumns: [actiontypes.fId],
      name: "r_5",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fPhase],
      foreignColumns: [phases.fId],
      name: "r_82",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const accompanimentcontrolhistory = pgTable(
  "accompanimentcontrolhistory",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fUser: integer("f_user").notNull(),
    fHistory: integer("f_history").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fObservation: text("f_observation").notNull(),
  },
  (table) => [
    index("accompanimentcontrolhistory_idx").using(
      "btree",
      table.fHistory.asc().nullsLast().op("int4_ops"),
    ),
    index("accompanimentcontrolhistory_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fHistory],
      foreignColumns: [histories.fId],
      name: "accompanimentcontrolhistory_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "accompanimentcontrolhistory_fk1",
    }).onDelete("restrict"),
  ],
)

export const activityTypesopinionscombo = pgTable(
  "activity_typesopinionscombo",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 150 }).notNull(),
    fArea: integer("f_area").notNull(),
    fClient: integer("f_client"),
    fGroup: integer("f_group"),
    fStatus: integer("f_status").default(1).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    index("idx_activity_typesopinionscombo_area").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_activity_typesopinionscombo_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_activity_typesopinionscombo_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_activity_typesopinionscombo_group").using(
      "btree",
      table.fGroup.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_activity_typesopinionscombo_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_activity_typesopinionscombo_service_area").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [perfilConsultation.fId],
      name: "activity_typesopinionscombo_f_area_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "activity_typesopinionscombo_f_client_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "activity_typesopinionscombo_f_create_user_fkey",
    }),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "activity_typesopinionscombo_f_group_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "activity_typesopinionscombo_f_lastuser_fkey",
    }),
    check(
      "activity_typesopinionscombo_f_status_check",
      sql`f_status = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const activityTypesopinionscombodata = pgTable(
  "activity_typesopinionscombodata",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fTypesopinions: integer("f_typesopinions").notNull(),
    fActivityTypesopinionscombo: integer(
      "f_activity_typesopinionscombo",
    ).notNull(),
  },
  (table) => [
    index(
      "idx_activity_typesopinionscombodata_activity_typesopinionscombo",
    ).using(
      "btree",
      table.fActivityTypesopinionscombo.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_activity_typesopinionscombodata_typesopinions").using(
      "btree",
      table.fTypesopinions.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fActivityTypesopinionscombo],
      foreignColumns: [activityTypesopinionscombo.fId],
      name: "activity_typesopinionscomboda_f_activity_typesopinionscomb_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fActivityTypesopinionscombo],
      foreignColumns: [activityTypesopinionscombo.fId],
      name: "activity_typesopinionscombodata_f_activity_typesopinionscombo_f",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fTypesopinions],
      foreignColumns: [typesopinions.fId],
      name: "activity_typesopinionscombodata_f_typesopinions_fkey",
    }).onDelete("cascade"),
  ],
)

export const actuationmeta = pgTable(
  "actuationmeta",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fDatetime: timestamp("f_datetime", { mode: "string" }),
    fActuationtypemeta: integer("f_actuationtypemeta"),
    fPhasemeta: integer("f_phasemeta"),
    fDescription: varchar("f_description"),
    fUser: integer("f_user"),
    fAgreementuseragenda: integer("f_agreementuseragenda"),
    fTitle: varchar("f_title"),
    fDatecreate: timestamp("f_datecreate", { mode: "string" })
      .defaultNow()
      .notNull(),
    fAlcadaValue: numeric("f_alcada_value", { mode: "number" }),
    fIsclient: smallint("f_isclient").default(0).notNull(),
  },
  (table) => [
    index("actuationmeta_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("actuationmeta_idx1").using(
      "btree",
      table.fAgreementuseragenda.asc().nullsLast().op("int4_ops"),
    ),
    index("actuationmeta_idx2").using(
      "btree",
      table.fPhasemeta.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const actuationmetatypecomplement = pgTable(
  "actuationmetatypecomplement",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fResulttype: integer("f_resulttype").notNull(),
    fName: varchar("f_name").notNull(),
    fCodehsbc: varchar("f_codehsbc", { length: 2 }),
  },
  (table) => [
    index("actuationmetatypecomplement_idx").using(
      "btree",
      table.fResulttype.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("actuationmetatypecomplement_idx1").using(
      "btree",
      table.fName.asc().nullsLast().op("int4_ops"),
      table.fCodehsbc.asc().nullsLast().op("text_ops"),
      table.fResulttype.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const actuationmetatyperesults = pgTable("actuationmetatyperesults", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fCodehsbc: varchar("f_codehsbc", { length: 2 }),
})

export const actuationtypemeta = pgTable(
  "actuationtypemeta",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name").notNull(),
    fDays: integer("f_days").default(0).notNull(),
    fClient: integer("f_client").default(0).notNull(),
    fCodehsbc: varchar("f_codehsbc", { length: 2 }),
    fArea: integer("f_area"),
  },
  (table) => [
    index("actuationtypemeta_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const actionobjects = pgTable(
  "actionobjects",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActiontype: bigint("f_actiontype", { mode: "number" }),
    fName: varchar("f_name", { length: 100 }).notNull(),
    fClient: integer("f_client"),
    fStatus: smallint("f_status").default(1),
    fArea: integer("f_area").notNull(),
  },
  (table) => [
    index("IX_r_11").using(
      "btree",
      table.fActiontype.asc().nullsLast().op("int8_ops"),
    ),
    index("actionobjects_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("actionobjects_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "fk_area",
    }),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_client",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fActiontype],
      foreignColumns: [actiontypes.fId],
      name: "r_11",
    }),
    unique("actionobjects_f_name_f_area_f_actiontype_unique").on(
      table.fActiontype,
      table.fName,
      table.fArea,
    ),
  ],
)

export const accompanimentcontrolappointment = pgTable(
  "accompanimentcontrolappointment",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fUser: integer("f_user").notNull(),
    fAppointment: integer("f_appointment").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fObservation: text("f_observation").notNull(),
  },
  (table) => [
    index("accompanimentcontrolappointment_idx").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int4_ops"),
    ),
    index("accompanimentcontrolappointment_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAppointment],
      foreignColumns: [appointments.fId],
      name: "accompanimentcontrolappointment_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "accompanimentcontrolappointment_fk1",
    }).onDelete("restrict"),
  ],
)

export const addressforumdistrict = pgTable(
  "addressforumdistrict",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDistrict: integer("f_district").notNull(),
    fStreet: varchar("f_street").notNull(),
    fNumber: varchar("f_number").notNull(),
    fBurgh: varchar("f_burgh").notNull(),
    fCity: varchar("f_city").notNull(),
    fState: varchar("f_state").notNull(),
    fCep: varchar("f_cep").notNull(),
    fComplement: varchar("f_complement"),
  },
  (table) => [
    index("addressforumdistrict_idx").using(
      "btree",
      table.fDistrict.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fDistrict],
      foreignColumns: [districts.fId],
      name: "addressforumdistrict_fk",
    }).onDelete("cascade"),
  ],
)

export const actiontypes = pgTable(
  "actiontypes",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    fName: text("f_name").notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("IX_r_10").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_10",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    unique("actiontypes_f_name_f_area_unique").on(table.fArea, table.fName),
  ],
)

export const aiCalculation = pgTable(
  "ai_calculation",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fCodInt: varchar("f_cod_int", { length: 50 }).notNull(),
    fDocumentOrigem: integer("f_document_origem").notNull(),
    fDocumentResult: integer("f_document_result"),
    fIdTransacao: varchar("f_id_transacao", { length: 50 }).notNull(),
    fStatus: smallint("f_status").default(0).notNull(),
    fLogExecution: text("f_log_execution"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fLastuser: integer("f_lastuser"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
  },
  (table) => [
    index("idx_ai_calculation_document_origem").using(
      "btree",
      table.fDocumentOrigem.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_calculation_document_result").using(
      "btree",
      table.fDocumentResult.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "ai_calculation_f_create_user_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fDocumentOrigem],
      foreignColumns: [documents.fId],
      name: "ai_calculation_f_document_origem_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fDocumentResult],
      foreignColumns: [documents.fId],
      name: "ai_calculation_f_document_result_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "ai_calculation_f_lastuser_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "ai_calculation_f_process_fkey",
    }).onDelete("restrict"),
    unique("ai_calculation_f_id_transacao_key").on(table.fIdTransacao),
    check(
      "ai_calculation_f_status_check",
      sql`f_status = ANY (ARRAY[0, 1, 2])`,
    ),
  ],
)

export const aiPredictive = pgTable(
  "ai_predictive",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fCodInt: varchar("f_cod_int", { length: 50 }).notNull(),
    fStatus: smallint("f_status").default(0).notNull(),
    fAnalysis: jsonb("f_analysis").notNull(),
    fLogExecution: text("f_log_execution"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fLastuser: integer("f_lastuser").notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    index("idx_ai_predictive_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_predictive_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_predictive_process").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "ai_predictive_f_create_user_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "ai_predictive_f_lastuser_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "ai_predictive_f_process_fkey",
    }).onDelete("restrict"),
    unique("uq_ai_predictive_f_process").on(table.fProcess),
    check("ai_predictive_f_status_check", sql`f_status = ANY (ARRAY[0, 1, 2])`),
  ],
)

export const agreementuserstats = pgTable(
  "agreementuserstats",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).primaryKey().notNull(),
    fTotalprocess: smallint("f_totalprocess"),
    fTotalagreements: smallint("f_totalagreements"),
  },
  (table) => [
    index("IX_r_151").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_151",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const aiDocumentGenerator = pgTable(
  "ai_document_generator",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fCodInt: varchar("f_cod_int", { length: 50 }).notNull(),
    fUser: integer("f_user").notNull(),
    fCreate: timestamp("f_create", { mode: "string" }),
    fStatus: integer("f_status").default(0).notNull(),
    fStatusdesc: text("f_statusdesc"),
    fProcess: integer("f_process"),
    fService: integer("f_service"),
    fClient: integer("f_client"),
    fPiece: integer("f_piece"),
    fType: integer("f_type").default(1).notNull(),
    fNameFile: text("f_name_file"),
  },
  (table) => [
    index("idx_ai_document_generator_f_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_document_generator_f_piece").using(
      "btree",
      table.fPiece.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_document_generator_f_process").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_document_generator_f_service").using(
      "btree",
      table.fService.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_ai_document_generator_f_user").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_ai_document_generator_f_client",
    }),
    foreignKey({
      columns: [table.fPiece],
      foreignColumns: [dbpartsNames.fId],
      name: "fk_ai_document_generator_f_piece",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "fk_ai_document_generator_f_process",
    }),
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_ai_document_generator_f_service",
    }),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_ai_document_generator_f_user",
    }),
    check(
      "ai_document_generator_f_status_check",
      sql`f_status = ANY (ARRAY[0, 1, 2])`,
    ),
    check(
      "ai_document_generator_f_type_check",
      sql`f_type = ANY (ARRAY[1, 2, 3, 4])`,
    ),
  ],
)

export const annotations = pgTable(
  "annotations",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow().notNull(),
    fText: varchar("f_text", { length: 500 }).notNull(),
    fCompleted: smallint("f_completed").default(0).notNull(),
    fCompleteddate: timestamp("f_completeddate", { mode: "string" }),
  },
  (table) => [
    index("annotations_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fCompleted.asc().nullsLast().op("int4_ops"),
    ),
    index("annotations_idx1").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const appcommentnotifys = pgTable(
  "appcommentnotifys",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('appcommentnotifys_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAppointmentcomments: bigint("f_appointmentcomments", {
      mode: "number",
    }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUserto: bigint("f_userto", { mode: "number" }),
    fUsertoRead: timestamp("f_userto_read", { mode: "string" }),
    fNotify: integer("f_notify").default(0),
  },
  (table) => [
    index("idx_appcommentnotifys_f_appointmentcomments").using(
      "btree",
      table.fAppointmentcomments.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fAppointmentcomments],
      foreignColumns: [appointmentcomments.fId],
      name: "fk_appcommentnotifys_appointmentcomments",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const agreementclient = pgTable(
  "agreementclient",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client").notNull(),
    fMotivo: varchar("f_motivo", { length: 100 }).notNull(),
    fSubmotivo: varchar("f_submotivo", { length: 100 }),
    fMediaCondenacao: numeric("f_media_condenacao").notNull(),
    fAlcada: numeric("f_alcada"),
  },
  (table) => [
    index("agreementclient_f_client_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "agreementclient_fk",
    }),
  ],
)

export const appealtypesPhases = pgTable(
  "appealtypes_phases",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppealtypes: integer("f_appealtypes").notNull(),
    fPhase: integer("f_phase").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
  },
  (table) => [
    index("appealtypes_phases_idx").using(
      "btree",
      table.fAppealtypes.asc().nullsLast().op("int4_ops"),
    ),
    index("appealtypes_phases_idx1").using(
      "btree",
      table.fPhase.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const agreements = pgTable(
  "agreements",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    fDate: date("f_date"),
    fValue: numeric("f_value", { mode: "number" }),
    fPay: smallint("f_pay"),
    fComments: text("f_comments"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    fUponAgreement: varchar("f_upon_agreement", { length: 255 }),
    fHeaveValue: numeric("f_heave_value", { mode: "number" }),
    fAmountCondemnation: numeric("f_amount_condemnation", { mode: "number" }),
    fProceedingtype: integer("f_proceedingtype"),
  },
  (table) => [
    index("IX_r_144").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_145").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fProceedingtype],
      foreignColumns: [proceedingtypes.fId],
      name: "proceedingtypes_relationship_fk",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_144",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_145",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ],
)

export const agreementuseragenda = pgTable(
  "agreementuseragenda",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    fTitle: text("f_title"),
    fDescription: text("f_description"),
    fDatetime: timestamp("f_datetime", { mode: "string" }),
    fComments: text("f_comments"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    fClientReport: boolean("f_client_report").default(false).notNull(),
    fComplementtype: integer("f_complementtype"),
  },
  (table) => [
    index("IX_r_142").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_143").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("agreementuseragenda_idx").using(
      "btree",
      table.fComments.asc().nullsLast().op("text_ops"),
    ),
    index("agreementuseragenda_idx1").using(
      "btree",
      table.fLastupdate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("agreementuseragenda_idx2").using(
      "btree",
      table.fDatetime.asc().nullsLast().op("timestamp_ops"),
    ),
    index("agreementuseragenda_idx3").using(
      "btree",
      table.fComplementtype.asc().nullsLast().op("int4_ops"),
    ),
    index("agreementuseragenda_idx4").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
      table.fLastupdate.asc().nullsLast().op("timestamp_ops"),
    ),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "r_142",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_143",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const appealtypes = pgTable("appealtypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
  fStatus: integer("f_status").default(1),
})

export const appointmentsagreement = pgTable(
  "appointmentsagreement",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDate: date("f_date").notNull(),
    fType: integer("f_type").notNull(),
    fProceedingtypeagreement: integer("f_proceedingtypeagreement"),
    fDescription: text("f_description").default("Comentário:"),
    fUser: integer("f_user").notNull(),
    fFinishdate: date("f_finishdate"),
    fComments: text("f_comments"),
    fProcess: integer("f_process"),
    fFinishuser: integer("f_finishuser"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAgreement: bigint("f_agreement", { mode: "number" }),
  },
  (table) => [
    index("appointmentsagreement_idx").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("appointmentsagreement_idx1").using(
      "btree",
      table.fType.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentsagreement_idx2").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentsagreement_idx3").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentsagreement_idx4").using(
      "btree",
      table.fFinishdate.asc().nullsLast().op("date_ops"),
      table.fUser.asc().nullsLast().op("date_ops"),
    ),
    foreignKey({
      columns: [table.fAgreement],
      foreignColumns: [agreements.fId],
      name: "appointmentsagreement_fk",
    }).onDelete("cascade"),
  ],
)

export const appointmentresponsible = pgTable(
  "appointmentresponsible",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttype: integer("f_appointmenttype"),
    fResponsible: integer("f_responsible"),
  },
  (table) => [
    index("appointmentresponsible_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentresponsible_idx1").using(
      "btree",
      table.fResponsible.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const appointmentcomments = pgTable(
  "appointmentcomments",
  {
    fId: integer("f_id")
      .default(sql`nextval('appointmentcomments_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    fAppointment: integer("f_appointment").notNull(),
    fUser: integer("f_user").notNull(),
    fDatetime: timestamp("f_datetime", { mode: "string" })
      .defaultNow()
      .notNull(),
    fText: text("f_text").notNull(),
  },
  (table) => [
    index("idx_appointmentcomments_f_appointment").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_appointmentcomments_f_user").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAppointment],
      foreignColumns: [appointments.fId],
      name: "appointmentcomments_appointments_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "appointmentcomments_f_users_fk",
    }),
  ],
)

export const appointmenttypes = pgTable(
  "appointmenttypes",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    fName: text("f_name"),
    fText: text("f_text").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fDays: bigint("f_days", { mode: "number" }),
    fDefault: smallint("f_default"),
    fActive: smallint("f_active").default(1).notNull(),
    fIndex: smallint("f_index").default(0).notNull(),
    fDaysfatal: integer("f_daysfatal"),
    fPreclusive: smallint("f_preclusive").default(0).notNull(),
    fTypedays: integer("f_typedays").default(0).notNull(),
    fNegative: integer("f_negative"),
    fManagervalidate: integer("f_managervalidate").default(1).notNull(),
    fScheduleallow: integer("f_scheduleallow").default(0).notNull(),
  },
  (table) => [
    index("IX_r_72").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("appointmenttypes_idx").using(
      "btree",
      table.fActive.asc().nullsLast().op("int2_ops"),
    ),
    index("appointmenttypes_idx1").using(
      "btree",
      table.fPreclusive.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_72",
    }),
    unique("appointmenttypes_f_name_f_area_unique").on(
      table.fArea,
      table.fName,
    ),
    check(
      "appointmenttypes_f_scheduleallow_check",
      sql`f_scheduleallow = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const appointmentsagreementtype = pgTable("appointmentsagreementtype", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fStatus: smallint("f_status").default(1).notNull(),
  fDays: integer("f_days").default(0).notNull(),
  fMaximum: integer("f_maximum").default(0).notNull(),
})

export const appointmentsagreementtypeAppointmentsagreementtype = pgTable(
  "appointmentsagreementtype_appointmentsagreementtype",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAgreementtype: integer("f_agreementtype").notNull(),
    fProceedingtype: integer("f_proceedingtype").notNull(),
  },
  (table) => [
    uniqueIndex(
      "appointmentsagreementtype_appointmentsagreementtype_idx",
    ).using(
      "btree",
      table.fAgreementtype.asc().nullsLast().op("int4_ops"),
      table.fProceedingtype.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const appointmenttypeProceedingtype = pgTable(
  "appointmenttype_proceedingtype",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttypeId: integer("f_appointmenttype_id"),
    fProceedingtypeId: integer("f_proceedingtype_id"),
    fUser: integer("f_user"),
    fDate: date("f_date").defaultNow().notNull(),
  },
  (table) => [
    index("appointmenttype_proceedingtype_idx").using(
      "btree",
      table.fAppointmenttypeId.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttype_proceedingtype_idx1").using(
      "btree",
      table.fProceedingtypeId.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const appointmenttypescombos = pgTable(
  "appointmenttypescombos",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name").notNull(),
    fArea: integer("f_area"),
    fJusticetype: integer("f_justicetype"),
    fIntimationtype: integer("f_intimationtype"),
    fState: integer("f_state"),
    fClient: integer("f_client"),
    fClientType: smallint("f_client_type").default(0),
    fClientGroup: integer("f_client_group"),
    fWarning: integer("f_warning"),
  },
  (table) => [
    index("appointmenttypescombos_f_area_idx").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttypescombos_f_client_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttypescombos_f_intimationtype_idx").using(
      "btree",
      table.fIntimationtype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttypescombos_f_justicetype_idx").using(
      "btree",
      table.fJusticetype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttypescombos_f_state_idx").using(
      "btree",
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClientGroup],
      foreignColumns: [groupclients.fId],
      name: "appointmenttypescombos_f_client_group_fkey",
    }),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "appointmenttypescombos_fk",
    }),
    foreignKey({
      columns: [table.fJusticetype],
      foreignColumns: [justicetype.fId],
      name: "appointmenttypescombos_fk1",
    }),
    foreignKey({
      columns: [table.fIntimationtype],
      foreignColumns: [intimationtypes.fId],
      name: "appointmenttypescombos_fk2",
    }),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "appointmenttypescombos_fk3",
    }),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "appointmenttypescombos_fk4",
    }),
    foreignKey({
      columns: [table.fWarning],
      foreignColumns: [publicationsWarning.fId],
      name: "fk_appointmenttypescombos_publications_warning_id",
    }),
  ],
)

export const appointmenttypeshearingcombos = pgTable(
  "appointmenttypeshearingcombos",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fHearingtype: integer("f_hearingtype"),
    fArea: integer("f_area"),
    fState: integer("f_state"),
    fClient: integer("f_client"),
    fClientType: smallint("f_client_type").default(2).notNull(),
    fClientGroup: integer("f_client_group"),
  },
  (table) => [
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "appointmenttypeshearingcombos_clients_fk",
    }),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "appointmenttypeshearingcombos_f_area_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fHearingtype],
      foreignColumns: [hearingtypes.fId],
      name: "appointmenttypeshearingcombos_f_hearingtype_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fClientGroup],
      foreignColumns: [groupclients.fId],
      name: "appointmenttypeshearingcombos_groupclients_fk",
    }),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "appointmenttypeshearingcombos_states_fk",
    }),
  ],
)

export const appointmentstypeRelClients = pgTable(
  "appointmentstype_rel_clients",
  {
    fAppointmenttype: integer("f_appointmenttype"),
    fClient: integer("f_client"),
    fId: serial("f_id").primaryKey().notNull(),
  },
  (table) => [
    index("appointmentstype_rel_clients_f_client_f_appointmenttype_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentstype_rel_clients_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmentstype_rel_clients_idx1").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAppointmenttype],
      foreignColumns: [appointmenttypes.fId],
      name: "appointmentstype_rel_clients_fk",
    }),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "appointmentstype_rel_clients_fk1",
    }),
    unique("appointmentstype_rel_clients_idx2").on(
      table.fAppointmenttype,
      table.fClient,
    ),
  ],
)

export const appointmenttypeshearingcombosdata = pgTable(
  "appointmenttypeshearingcombosdata",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttype: integer("f_appointmenttype"),
    fHearingcombo: integer("f_hearingcombo"),
  },
  (table) => [
    foreignKey({
      columns: [table.fHearingcombo],
      foreignColumns: [appointmenttypeshearingcombos.fId],
      name: "appointmentstypeCombosData_fk2",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fAppointmenttype],
      foreignColumns: [appointmenttypes.fId],
      name: "appointmentstypeCombosHearingData_fk1",
    }),
  ],
)

export const appointmenttypeRelJusticetype = pgTable(
  "appointmenttype_rel_justicetype",
  {
    fAppointmenttype: integer("f_appointmenttype"),
    fJusticetype: integer("f_justicetype"),
    fId: serial("f_id").primaryKey().notNull(),
  },
  (table) => [
    index("appointmenttype_rel_justicetype_f_appointmenttype_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttype_rel_justicetype_f_justicetype_idx").using(
      "btree",
      table.fJusticetype.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("appointmenttype_rel_justicetype_idx").using(
      "btree",
      table.fJusticetype.asc().nullsLast().op("int4_ops"),
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAppointmenttype],
      foreignColumns: [appointmenttypes.fId],
      name: "appointmenttype_rel_justicetype_fk",
    }),
    foreignKey({
      columns: [table.fJusticetype],
      foreignColumns: [justicetype.fId],
      name: "appointmenttype_rel_justicetype_fk1",
    }),
  ],
)

export const appointmenttimesheets = pgTable(
  "appointmenttimesheets",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAppointment: bigint("f_appointment", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }).notNull(),
    fValue: smallint("f_value"),
  },
  (table) => [
    index("IX_r_155").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_156").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [timesheettypes.fId],
      name: "r_155",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fAppointment],
      foreignColumns: [appointments.fId],
      name: "r_156",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const archiveaccessusers = pgTable(
  "archiveaccessusers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).primaryKey().notNull(),
  },
  (table) => [
    index("IX_r_133").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_133",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const businessunities = pgTable(
  "businessunities",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
  },
  (table) => [
    index("IX_r_166").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_166",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const caldavEvent = pgTable(
  "caldav_event",
  {
    fUuid: uuid("f_uuid")
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    fSummary: varchar("f_summary", { length: 255 }).notNull(),
    fDtstamp: timestamp("f_dtstamp", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fDtstart: timestamp("f_dtstart", { mode: "string" }).notNull(),
    fDtend: timestamp("f_dtend", { mode: "string" }).notNull(),
    fLocation: varchar("f_location", { length: 255 }),
    fDescription: text("f_description"),
    fStatus: integer("f_status").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOrganizer: bigint("f_organizer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOwner: bigint("f_owner", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fRecurrenceId: bigint("f_recurrence_id", { mode: "number" }),
    fEditEnabled: boolean("f_edit_enabled").default(true),
  },
  (table) => [
    foreignKey({
      columns: [table.fRecurrenceId],
      foreignColumns: [caldavRecurrence.fId],
      name: "caldav_event_recurrence_fk",
    }),
    foreignKey({
      columns: [table.fOrganizer],
      foreignColumns: [users.fId],
      name: "fk_event_organizer",
    }),
    foreignKey({
      columns: [table.fOwner],
      foreignColumns: [users.fId],
      name: "fk_event_owner",
    }),
  ],
)

export const banks = pgTable("banks", {
  fId: serial("f_id").primaryKey().notNull(),
  fCode: integer("f_code"),
  fName: varchar("f_name", { length: 200 }),
})

export const billingRemoveProcess = pgTable(
  "billing_remove_process",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fReportId: integer("f_report_id"),
    fProcessId: integer("f_process_id"),
    fData: date("f_data").defaultNow().notNull(),
    fUser: integer("f_user"),
  },
  (table) => [
    index("billing_remove_process_idx").using(
      "btree",
      table.fReportId.asc().nullsLast().op("int4_ops"),
      table.fProcessId.asc().nullsLast().op("int4_ops"),
    ),
    index("billing_remove_process_idx1").using(
      "btree",
      table.fReportId.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const billingdpvat = pgTable(
  "billingdpvat",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fAppointmenttypes: integer("f_appointmenttypes").default(0).notNull(),
    fDateproceeding: date("f_dateproceeding").notNull(),
    fUserproceeding: integer("f_userproceeding").notNull(),
    fTypeparcela: varchar("f_typeparcela", { length: 2 }).notNull(),
    fValuehonorary: numeric("f_valuehonorary", { mode: "number" }).notNull(),
    fStatus: integer("f_status").notNull(),
    fMissing: varchar("f_missing"),
    fDatetimeanalyzeuserok: timestamp("f_datetimeanalyzeuserok", {
      mode: "string",
    })
      .defaultNow()
      .notNull(),
    fAnalyzeuserok: integer("f_analyzeuserok"),
    fAppointment: integer("f_appointment"),
    fDatetimemanualremoved: timestamp("f_datetimemanualremoved", {
      mode: "string",
    }),
  },
  (table) => [
    index("billingdpvat_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fTypeparcela.asc().nullsLast().op("int4_ops"),
    ),
    index("billingdpvat_idx1").using(
      "btree",
      table.fProcess.asc().nullsLast().op("text_ops"),
      table.fTypeparcela.asc().nullsLast().op("int4_ops"),
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("billingdpvat_idx2").using(
      "btree",
      table.fTypeparcela.asc().nullsLast().op("int4_ops"),
      table.fStatus.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const billingdpvatrules = pgTable(
  "billingdpvatrules",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttypes: integer("f_appointmenttypes").notNull(),
    fProceedingtypes: integer("f_proceedingtypes").notNull(),
    fType: varchar("f_type", { length: 2 }).notNull(),
  },
  (table) => [
    uniqueIndex("billingdpvatrules_idx").using(
      "btree",
      table.fAppointmenttypes.asc().nullsLast().op("text_ops"),
      table.fProceedingtypes.asc().nullsLast().op("int4_ops"),
      table.fType.asc().nullsLast().op("text_ops"),
    ),
    index("billingdpvatrules_idx1").using(
      "btree",
      table.fAppointmenttypes.asc().nullsLast().op("int4_ops"),
      table.fProceedingtypes.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const billingdpvatstatus = pgTable("billingdpvatstatus", {
  fId: integer("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }),
})

export const billingnegotiate = pgTable(
  "billingnegotiate",
  {
    fProcess: integer("f_process").notNull(),
    fAgreementuser: integer("f_agreementuser").notNull(),
    fDatecreate: timestamp("f_datecreate", { mode: "string" })
      .defaultNow()
      .notNull(),
    fStatus: integer("f_status"),
  },
  (table) => [
    index("billingnegotiate_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("billingnegotiate_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("billingnegotiate_idx2").using(
      "btree",
      table.fAgreementuser.asc().nullsLast().op("int4_ops"),
    ),
    index("billingnegotiate_idx3").using(
      "btree",
      table.fDatecreate.asc().nullsLast().op("timestamp_ops"),
    ),
  ],
)

export const billingphasemeta = pgTable(
  "billingphasemeta",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 100 }).notNull(),
    fActuationtypemeta: integer("f_actuationtypemeta").notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("billingphasemeta_idx").using(
      "btree",
      table.fActuationtypemeta.asc().nullsLast().op("int4_ops"),
    ),
    index("billingphasemeta_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
  ],
)

export const businessdepartments = pgTable("businessdepartments", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
})

export const caldavEventInvite = pgTable(
  "caldav_event_invite",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_caldav_event_invite'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fParticipant: bigint("f_participant", { mode: "number" }).notNull(),
    fCreatedAt: timestamp("f_created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    fStatus: integer("f_status").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fParticipant],
      foreignColumns: [caldavEventParticipant.fId],
      name: "fk_invite_participant",
    }).onDelete("cascade"),
    unique("unique_participant").on(table.fParticipant),
  ],
)

export const archiveregistries = pgTable(
  "archiveregistries",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAuthor: bigint("f_author", { mode: "number" }),
    fDatetime: timestamp("f_datetime", { mode: "string" }),
    fComments: text("f_comments"),
    fDate: date("f_date"),
    fAction: smallint("f_action"),
  },
  (table) => [
    index("IX_r_127").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_128").using(
      "btree",
      table.fAuthor.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_129").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_127",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fAuthor],
      foreignColumns: [users.fId],
      name: "r_128",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_129",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const areaagreementspecifics = pgTable(
  "areaagreementspecifics",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    fName: text("f_name").notNull(),
    fType: smallint("f_type").notNull(),
    fRequired: boolean("f_required"),
  },
  (table) => [
    index("IX_r_146").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_146",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const checklistProceedingtype = pgTable(
  "checklist_proceedingtype",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProceedingtype: integer("f_proceedingtype").notNull(),
    fSegmento: integer("f_segmento").notNull(),
    fState: integer("f_state").notNull(),
    fClient: integer("f_client"),
  },
  (table) => [
    uniqueIndex("checklist_proceedingtype_checklist_appointments_idx").using(
      "btree",
      table.fProceedingtype.asc().nullsLast().op("int4_ops"),
      table.fSegmento.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_proceedingtype_checklist_appointments_idx1").using(
      "btree",
      table.fSegmento.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_proceedingtype_f_state_idx").using(
      "btree",
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "checklist_appointments_fk",
    }),
  ],
)

export const checklistAnalise = pgTable(
  "checklist_analise",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fUser: integer("f_user"),
    fDate: date("f_date").defaultNow(),
    fObjeto: varchar("f_objeto", { length: 100 }),
    fParecerbanco: varchar("f_parecerbanco", { length: 60 }),
    fRiscoatual: varchar("f_riscoatual", { length: 60 }),
    fObrigacaofazer: varchar("f_obrigacaofazer", { length: 60 }),
    fSituacaoof: varchar("f_situacaoof", { length: 60 }),
    fParecerbancoalteracao: varchar("f_parecerbancoalteracao", { length: 100 }),
    fBancoprovas: varchar("f_bancoprovas", { length: 60 }),
    fPericiajudicial: varchar("f_periciajudicial", { length: 60 }),
    fNecessidadeliquidacao: varchar("f_necessidadeliquidacao", { length: 60 }),
    fDecisaograu: varchar("f_decisaograu", { length: 60 }),
    fAptoacordomotivo: varchar("f_aptoacordomotivo", { length: 200 }),
    fDocumentosautor: varchar("f_documentosautor", { length: 60 }),
    fDatasolicitacao: date("f_datasolicitacao"),
    fDataalteracao: date("f_dataalteracao"),
    fValorpedido: numeric("f_valorpedido", { mode: "number" }),
    fCondenacao: numeric("f_condenacao", { mode: "number" }),
    fHonorarios: numeric("f_honorarios", { mode: "number" }),
    fDatapublicacaosentenca: date("f_datapublicacaosentenca"),
    fCondenacaograu2: numeric("f_condenacaograu2", { mode: "number" }),
    fHonorarios2: numeric("f_honorarios2", { mode: "number" }),
    fDatapublicacaoacordo: date("f_datapublicacaoacordo"),
    fValorpagamentojudicial: numeric("f_valorpagamentojudicial", {
      mode: "number",
    }),
    fDatapagamentojudicial: date("f_datapagamentojudicial"),
    fDadoscoisajulgada: varchar("f_dadoscoisajulgada", { length: 200 }),
    fDadoslitispendencia: varchar("f_dadoslitispendencia", { length: 200 }),
    fObservacoes: text("f_observacoes"),
    fDecisao: varchar("f_decisao", { length: 60 }),
    fPagamentojudicial: varchar("f_pagamentojudicial", { length: 60 }),
    fAptoacordo: varchar("f_aptoacordo", { length: 60 }),
    fPrescricao: varchar("f_prescricao", { length: 60 }),
    fIlegitimidade: varchar("f_ilegitimidade", { length: 60 }),
    fCoisajulgada: varchar("f_coisajulgada", { length: 60 }),
    fLitispendencia: varchar("f_litispendencia", { length: 60 }),
    fDepositojudicial: varchar("f_depositojudicial", { length: 60 }),
    fProcessosuspenso: varchar("f_processosuspenso", { length: 60 }),
    fPlanosdiscutidos: varchar("f_planosdiscutidos", { length: 60 }),
    fExtratosdisponiveis: varchar("f_extratosdisponiveis", { length: 60 }),
    fCalculoatualizado: varchar("f_calculoatualizado", { length: 60 }),
    fValorcalculobanco: numeric("f_valorcalculobanco", { mode: "number" }),
    fDatacalculobanco: date("f_datacalculobanco"),
    fPontohonra: varchar("f_pontohonra", { length: 60 }),
    fPontohonradiscutidos: varchar("f_pontohonradiscutidos", { length: 100 }),
    fTesesacessorias: varchar("f_tesesacessorias", { length: 100 }),
  },
  (table) => [
    index("checklist_analise_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistAppointmenttype = pgTable(
  "checklist_appointmenttype",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttype: integer("f_appointmenttype"),
    fSegmento: integer("f_segmento"),
    fState: integer("f_state"),
    fChecklistFormal: integer("f_checklist_formal"),
    fController: integer("f_controller"),
    fClient: integer("f_client"),
  },
  (table) => [
    uniqueIndex("checklist_appointmenttype_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
      table.fSegmento.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fController.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistBancario = pgTable("checklist_bancario", {
  fProcess: integer("f_process"),
  fDate: date("f_date").defaultNow(),
  fUser: integer("f_user"),
  fObjeto: varchar("f_objeto", { length: 200 }),
  fParecerSolicitado: varchar("f_parecer_solicitado", { length: 60 }),
  fDataSolicitacaoParecer: date("f_data_solicitacao_parecer"),
  fStatusParecer: varchar("f_status_parecer", { length: 200 }),
  fParecerConcluido: varchar("f_parecer_concluido", { length: 200 }),
  fParecerBanco: varchar("f_parecer_banco", { length: 200 }),
  fChecklist: varchar("f_checklist", { length: 200 }),
  fDataSolicitacaoChecklist: date("f_data_solicitacao_checklist"),
  fRetornoBanco: varchar("f_retorno_banco", { length: 200 }),
  fRiscoAtual: varchar("f_risco_atual", { length: 200 }),
  fAlteracaoRisco: varchar("f_alteracao_risco", { length: 200 }),
  fDataSolicitacaoRiscoAtual: date("f_data_solicitacao_risco_atual"),
  fStatusRisco: varchar("f_status_risco", { length: 200 }),
  fDataAlteracaoRisco: date("f_data_alteracao_risco"),
  fParecerAlteracao: varchar("f_parecer_alteracao", { length: 200 }),
  fValorProvisionado: numeric("f_valor_provisionado", { mode: "number" }),
  fJustificativaRiscoAtual: varchar("f_justificativa_risco_atual", {
    length: 200,
  }),
  fDataCitacao: date("f_data_citacao"),
  fValorPedido: numeric("f_valor_pedido", { mode: "number" }),
  fDecisao: varchar("f_decisao", { length: 200 }),
  fValorCondenacao1: numeric("f_valor_condenacao1", { mode: "number" }),
  fHonorarios: numeric("f_honorarios", { mode: "number" }),
  fDataPublicacaoSentenca: date("f_data_publicacao_sentenca"),
  fPagamentoJudicial: varchar("f_pagamento_judicial", { length: 200 }),
  fValorPagamentoJudicial: numeric("f_valor_pagamento_judicial", {
    mode: "number",
  }),
  fDataPagamentoJudicial: date("f_data_pagamento_judicial"),
  fObrigacaoFazer: varchar("f_obrigacao_fazer", { length: 200 }),
  fStatusObrigacao: varchar("f_status_obrigacao", { length: 200 }),
  fAptoAcordo: varchar("f_apto_acordo", { length: 200 }),
  fAptoAcordoMotivo: varchar("f_apto_acordo_motivo", { length: 200 }),
  fObservacoes: text("f_observacoes"),
  fDecisaoGrau2: varchar("f_decisao_grau2", { length: 200 }),
  fHonorario2: numeric("f_honorario2", { mode: "number" }),
  fDataPublicacaoAcordao: date("f_data_publicacao_acordao"),
  fCondenacaoGrau2: numeric("f_condenacao_grau2", { mode: "number" }),
  fId: serial("f_id").primaryKey().notNull(),
  fGoAct: varchar("f_go_act", { length: 200 }),
  fGoActParecer: varchar("f_go_act_parecer", { length: 200 }),
  fDataDecisao1: date("f_data_decisao_1"),
  fJuizSentenciante1: varchar("f_juiz_sentenciante_1"),
  fJuizLeigo: varchar("f_juiz_leigo"),
  fFundamentacaoDecisao: text("f_fundamentacao_decisao"),
  fTeseDefesa: text("f_tese_defesa"),
  fPagamento1: numeric("f_pagamento_1", { mode: "number" }),
  fOrgaoJulgador: text("f_orgao_julgador"),
  fDataDecisao2: date("f_data_decisao_2"),
  fRelator2: varchar("f_relator_2"),
  fRevisor2: varchar("f_revisor_2"),
  fVogal2: varchar("f_vogal_2"),
  fFundamentacaoRelator2: text("f_fundamentacao_relator_2"),
  fFundamentacaoRevisor2: text("f_fundamentacao_revisor_2"),
  fFundamentacaoVogal2: text("f_fundamentacao_vogal_2"),
  fTeseRecurso2: text("f_tese_recurso_2"),
  fPagamento2: numeric("f_pagamento_2", { mode: "number" }),
})

export const checklistBv = pgTable(
  "checklist_bv",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAgravoInstrumento: varchar("f_agravo_instrumento", { length: 40 }),
    fMulta: varchar("f_multa", { length: 10 }),
    fValorMulta: varchar("f_valor_multa", { length: 200 }),
    fDecisaoLiminar: varchar("f_decisao_liminar", { length: 10 }),
    fEfeitosTutela: text("f_efeitos_tutela"),
    fObrigacaoFazer: varchar("f_obrigacao_fazer", { length: 10 }),
    fCumprida: varchar("f_cumprida", { length: 10 }),
    fReiterado: varchar("f_reiterado", { length: 10 }),
    fIncontroverso: varchar("f_incontroverso", { length: 10 }),
    fAbaValores: varchar("f_aba_valores", { length: 10 }),
    fRevelia: varchar("f_revelia", { length: 10 }),
    fBancoEscritorio: varchar("f_banco_escritorio", { length: 30 }),
    fPreclusao: varchar("f_preclusao", { length: 20 }),
    fPreclusao2: varchar("f_preclusao2", { length: 20 }),
    fPreclusao3: varchar("f_preclusao3", { length: 20 }),
    fComentario: text("f_comentario"),
    fRevelia2: varchar("f_revelia2", { length: 20 }),
    fBancoEscritorio2: varchar("f_banco_escritorio2", { length: 30 }),
    fRevelia3: varchar("f_revelia3", { length: 20 }),
    fBancoEscritorio3: varchar("f_banco_escritorio3", { length: 20 }),
    fContratoJuntado: varchar("f_contrato_juntado", { length: 20 }),
    fContratoJuntado2: varchar("f_contrato_juntado2", { length: 20 }),
    fComentario2: text("f_comentario2"),
    fComentario3: text("f_comentario3"),
    fComentario4: text("f_comentario4"),
    fTransitoJulgado: varchar("f_transito_julgado", { length: 20 }),
    fCondenacao: varchar("f_condenacao", { length: 20 }),
    fEfetuadoPagamento: varchar("f_efetuado_pagamento", { length: 20 }),
    fEscritorioAjg: varchar("f_escritorio_ajg", { length: 20 }),
    fAlvaraPendente: varchar("f_alvara_pendente", { length: 20 }),
    fCasoEncerramento: varchar("f_caso_encerramento", { length: 20 }),
    fUserCreate: integer("f_user_create"),
    fProcess: integer("f_process"),
    fDateCreate: date("f_date_create").defaultNow(),
    fMateriaPreclusao: text("f_materia_preclusao"),
    fContratoSuspenso: varchar("f_contrato_suspenso", { length: 10 }),
  },
  (table) => [
    index("checklist_bv_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistCity = pgTable(
  "checklist_city",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fObjetoAcao: varchar("f_objeto_acao", { length: 60 }),
    fDecisaoLiminar: varchar("f_decisao_liminar", { length: 50 }),
    fAgravoInstrumento: varchar("f_agravo_instrumento", { length: 50 }),
    fTutelaAntecipada: varchar("f_tutela_antecipada", { length: 50 }),
    fEfeitosTutela: varchar("f_efeitos_tutela", { length: 300 }),
    fMulta: varchar("f_multa", { length: 50 }),
    fIncidenciaMulta: varchar("f_incidencia_multa", { length: 50 }),
    fValorMulta: numeric("f_valor_multa", { mode: "number" }),
    fLitisconsorte: varchar("f_litisconsorte", { length: 50 }),
    fValorPedido: numeric("f_valor_pedido", { mode: "number" }),
    fValorDanoMoral: numeric("f_valor_dano_moral", { mode: "number" }),
    fValorDanoMaterial: numeric("f_valor_dano_material", { mode: "number" }),
    fDecisaoGrau1: varchar("f_decisao_grau1", { length: 50 }),
    fDecisao1: varchar("f_decisao1", { length: 60 }),
    fValorDecisao1: numeric("f_valor_decisao1", { mode: "number" }),
    fValorHonorario1: numeric("f_valor_honorario1", { mode: "number" }),
    fDecisaoGrau2: varchar("f_decisao_grau2", { length: 50 }),
    fDecisao2: varchar("f_decisao2", { length: 60 }),
    fValorDecisao2: numeric("f_valor_decisao2", { mode: "number" }),
    fValorHonorario2: numeric("f_valor_honorario2", { mode: "number" }),
    fSuperiores: varchar("f_superiores", { length: 50 }),
    fDecisaoSuperiores: varchar("f_decisao_superiores", { length: 60 }),
    fValorSuperiores: numeric("f_valor_superiores", { mode: "number" }),
    fHonorariosSuperiores: numeric("f_honorarios_superiores", {
      mode: "number",
    }),
    fResumoAcao: text("f_resumo_acao"),
    fFaseAtual: varchar("f_fase_atual", { length: 60 }),
    fCumprimentoSentenca: varchar("f_cumprimento_sentenca", { length: 60 }),
    fValorPenhora: numeric("f_valor_penhora", { mode: "number" }),
    fDatePenhora: date("f_date_penhora"),
    fRevelia: varchar("f_revelia", { length: 60 }),
    fUserCreate: integer("f_user_create"),
    fDateCreate: date("f_date_create").defaultNow().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    fRelevante: varchar("f_relevante", { length: 20 }),
    fSignificativo: varchar("f_significativo", { length: 20 }),
    fBenner: varchar("f_benner", { length: 50 }),
    fBancoescritorio: varchar("f_bancoescritorio", { length: 20 }),
    fMultaDecisao1: varchar("f_multa_decisao1", { length: 20 }),
    fObrigacaofazer: varchar("f_obrigacaofazer", { length: 20 }),
    fCumprido: varchar("f_cumprido", { length: 20 }),
    fDepositoJudicial: varchar("f_deposito_judicial", { length: 20 }),
    fValor: varchar("f_valor", { length: 20 }),
    fTipo: text("f_tipo"),
    fMultaDecisao2: varchar("f_multa_decisao2", { length: 20 }),
    fMultaDecisaoSuperiores: varchar("f_multa_decisao_superiores", {
      length: 20,
    }),
    fValorValue: numeric("f_valor_value", { mode: "number" }),
    fValorMultaDecisao1: numeric("f_valor_multa_decisao1", { mode: "number" }),
    fValorMultaDecisao2: numeric("f_valor_multa_decisao2", { mode: "number" }),
    fValorMultaSuperiores: numeric("f_valor_multa_superiores", {
      mode: "number",
    }),
    fMigrado: varchar("f_migrado", { length: 10 }),
    fDataCadastroCliente: date("f_data_cadastro_cliente"),
    fAlertaProcessual: varchar("f_alerta_processual", { length: 10 }),
    fMateriaInstitucional: varchar("f_materia_institucional", { length: 255 }),
    fObjMateriaInstitucional: varchar("f_obj_materia_institucional", {
      length: 255,
    }),
    fTipoObrigacao: varchar("f_tipo_obrigacao", { length: 255 }),
  },
  (table) => [
    index("checklist_city_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
  ],
)

export const checklistComments = pgTable(
  "checklist_comments",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fComments: text("f_comments"),
    fUser: integer("f_user"),
    fIdchecklist: integer("f_idchecklist"),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow(),
  },
  (table) => [
    index("checklist_comments_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_comments_idx1").using(
      "btree",
      table.fIdchecklist.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistLider = pgTable(
  "checklist_lider",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fObjeto: varchar("f_objeto", { length: 50 }),
    fValorPagamentoAdministrativo: numeric("f_valor_pagamento_administrativo", {
      mode: "number",
    }).notNull(),
    fValorPedido: numeric("f_valor_pedido", { mode: "number" }).notNull(),
    fDecisao: varchar("f_decisao", { length: 50 }),
    fValorCondenacao: numeric("f_valor_condenacao", {
      mode: "number",
    }).notNull(),
    fHonorarios: varchar("f_honorarios", { length: 20 }).default("0").notNull(),
    fPericiaJudicial: varchar("f_pericia_judicial", { length: 20 }),
    fHonorarioPagoSeguradora: varchar("f_honorario_pago_seguradora", {
      length: 20,
    }),
    fValidezPermanenteParcial: varchar("f_validez_permanente_parcial", {
      length: 50,
    }),
    fTipoLesao: varchar("f_tipo_lesao", { length: 100 }),
    fGrauInvalidez: integer("f_grau_invalidez").default(0).notNull(),
    fGrauMaximo: integer("f_grau_maximo").default(0).notNull(),
    fPrescricao: varchar("f_prescricao", { length: 3 }),
    fIlegitimidadeAtiva: varchar("f_ilegitimidade_ativa", { length: 3 }),
    fCoisaJulgada: varchar("f_coisa_julgada", { length: 3 }),
    fLitispendencia: varchar("f_litispendencia", { length: 3 }),
    fRelugacao8: varchar("f_relugacao8", { length: 3 }),
    fCategoria3Ou4: varchar("f_categoria3ou4", { length: 3 }),
    fSeguradoraNaoConsorciada: varchar("f_seguradora_nao_consorciada", {
      length: 3,
    }),
    fDepositoJudicial: varchar("f_deposito_judicial", { length: 3 }),
    fObservacao: varchar("f_observacao"),
    fDatesinistro: date("f_datesinistro"),
    fDatepagadm: date("f_datepagadm"),
  },
  (table) => [
    index("checklist_lider_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_lider_idx1").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
  ],
)

export const checklistLiderPericia = pgTable(
  "checklist_lider_pericia",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fObjeto: varchar("f_objeto", { length: 50 }),
    fValorPagamentoAdministrativo: numeric("f_valor_pagamento_administrativo", {
      mode: "number",
    }).notNull(),
    fValorPedido: numeric("f_valor_pedido", { mode: "number" }).notNull(),
    fDecisao: varchar("f_decisao", { length: 50 }),
    fValorCondenacao: numeric("f_valor_condenacao", {
      mode: "number",
    }).notNull(),
    fHonorarios: varchar("f_honorarios", { length: 20 }).default("0").notNull(),
    fFundamentacao: varchar("f_fundamentacao", { length: 100 }),
    fPericiaJudicial: varchar("f_pericia_judicial", { length: 20 }),
    fGrauInvalidez: varchar("f_grau_invalidez", { length: 6 })
      .default("0")
      .notNull(),
    fGrauMaximo: varchar("f_grau_maximo", { length: 6 }).default("0").notNull(),
    fPrescricao: varchar("f_prescricao", { length: 60 }),
    fIlegitimidadeAtiva: varchar("f_ilegitimidade_ativa", { length: 60 }),
    fCoisaJulgada: varchar("f_coisa_julgada", { length: 60 }),
    fLitispendencia: varchar("f_litispendencia", { length: 60 }),
    fRelugacao8: varchar("f_relugacao8", { length: 60 }),
    fCategoria3Ou4: varchar("f_categoria3ou4", { length: 60 }),
    fSeguradoraNaoConsorciada: varchar("f_seguradora_nao_consorciada", {
      length: 60,
    }),
    fDepositoJudicial: varchar("f_deposito_judicial", { length: 60 }),
    fObservacao: text("f_observacao"),
    fDatesinistro: date("f_datesinistro"),
    fDatepagadm: date("f_datepagadm"),
    fPericiaDisponivel: varchar("f_pericia_disponivel", { length: 60 }),
    fIncapacidadeDefinitiva: varchar("f_incapacidade_definitiva", {
      length: 60,
    }),
    fDanosCorporais: varchar("f_danos_corporais"),
    fDecisaoGrau: varchar("f_decisao_grau", { length: 60 }),
    fPagamentoJudicial: varchar("f_pagamento_judicial", { length: 60 }),
    fValorPagamentoJudicial: numeric("f_valor_pagamento_judicial", {
      mode: "number",
    }),
    fDataPagamentoJudicial: date("f_data_pagamento_judicial"),
    fAptoAcordo: varchar("f_apto_acordo", { length: 60 }),
    fMotivoApto: text("f_motivo_apto"),
    fDadosCoisaJulgada: varchar("f_dados_coisa_julgada", { length: 100 }),
    fDadosLitispendencia: varchar("f_dados_litispendencia", { length: 100 }),
    fRegulacao2: varchar("f_regulacao2", { length: 60 }),
    fParecer: varchar("f_parecer", { length: 60 }),
    fDatecitacao: date("f_datecitacao"),
    fRespinterposto: varchar("f_respinterposto", { length: 60 }),
    fRecjulgado: varchar("f_recjulgado", { length: 60 }),
    fMotvreg2: varchar("f_motvreg2"),
    fValorautorizado: numeric("f_valorautorizado", { mode: "number" }),
    fParticipacaoMultirao: varchar("f_participacao_multirao", { length: 60 }),
    fHonorariosDepositados: varchar("f_honorarios_depositados", { length: 60 }),
    fTipoDecisaoGrau: varchar("f_tipo_decisao_grau", { length: 50 }),
    fTipoMotivoApto: varchar("f_tipo_motivo_apto", { length: 300 }),
    fDomicilioAutor: varchar("f_domicilio_autor"),
    fLesaoIndenizada: varchar("f_lesao_indenizada"),
    fLaudoDisponivel: varchar("f_laudo_disponivel", { length: 60 }),
    fGrauInvalidezLaudo: varchar("f_grau_invalidez_laudo", { length: 60 }),
    fMaxIndenizavelLaudo: varchar("f_max_indenizavel_laudo", { length: 60 }),
    fAvaliacaoAcordo: varchar("f_avaliacao_acordo", { length: 60 }),
    fLaudoAcordoDisponivel: varchar("f_laudo_acordo_disponivel", {
      length: 60,
    }),
    fGrauInvalidezAcordo: varchar("f_grau_invalidez_acordo", { length: 60 }),
    fMaxInvalidezAcordo: varchar("f_max_invalidez_acordo", { length: 60 }),
    fCumulacaoLesoes: varchar("f_cumulacao_lesoes", { length: 60 }),
    fLesoes: text("f_lesoes"),
    fCumulacaoIndenizacoes: varchar("f_cumulacao_indenizacoes", { length: 60 }),
    fValorIndenizacao: numeric("f_valor_indenizacao", { mode: "number" }),
    fRegulacao3: varchar("f_regulacao3", { length: 60 }),
    fMotvreg3: varchar("f_motvreg3"),
  },
  (table) => [
    index("checklist_lider_pericia_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_lider_pericia_idx1").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
  ],
)

export const checklistLogs = pgTable("checklist_logs", {
  fId: serial("f_id").primaryKey().notNull(),
  fAppointment: integer("f_appointment"),
  fUser: integer("f_user").notNull(),
  fOperation: varchar("f_operation", { length: 200 }),
  fDate: timestamp("f_date", { mode: "string" }).defaultNow().notNull(),
})

export const caldavUser = pgTable(
  "caldav_user",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_caldav_user'::regclass)`)
      .primaryKey()
      .notNull(),
    fUsername: varchar("f_username").notNull(),
    fPassword: varchar("f_password", { length: 255 }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fName: text("f_name").notNull(),
    fEmail: text("f_email"),
    fCreatedAt: timestamp("f_created_at", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fUpdatedAt: timestamp("f_updated_at", { mode: "string" }),
    fIcalFeedHash: text("f_ical_feed_hash").default("").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "caldav_user_id_fk",
    }),
    unique("caldav_user_username_unique").on(table.fUsername),
    unique("caldav_user_unique").on(table.fUser),
    unique("caldav_user_f_ical_feed_hash_key").on(table.fIcalFeedHash),
  ],
)

export const caldavParentEventInvite = pgTable(
  "caldav_parent_event_invite",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_caldav_parent_event_invite'::regclass)`)
      .primaryKey()
      .notNull(),
    fParentEvent: uuid("f_parent_event").notNull(),
    fEvent: uuid("f_event").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fInvite: bigint("f_invite", { mode: "number" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fEvent],
      foreignColumns: [caldavEvent.fUuid],
      name: "fk_event",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fInvite],
      foreignColumns: [caldavEventInvite.fId],
      name: "fk_invite",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fParentEvent],
      foreignColumns: [caldavEvent.fUuid],
      name: "fk_parent_event",
    }).onDelete("cascade"),
    unique("unique_events").on(table.fParentEvent, table.fEvent, table.fInvite),
  ],
)

export const caldavEventParticipant = pgTable(
  "caldav_event_participant",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_caldav_event_participant'::regclass)`)
      .primaryKey()
      .notNull(),
    fEmail: varchar("f_email", { length: 255 }).notNull(),
    fEvent: uuid("f_event").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
  },
  (table) => [
    foreignKey({
      columns: [table.fEvent],
      foreignColumns: [caldavEvent.fUuid],
      name: "fk_participant_event",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_participant_user",
    }),
  ],
)

export const caldavParticipantInviteNotification = pgTable(
  "caldav_participant_invite_notification",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(
        sql`nextval('seq_caldav_participant_invite_notification'::regclass)`,
      )
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fParticipant: bigint("f_participant", { mode: "number" }).notNull(),
    fType: integer("f_type").notNull(),
    fCreatedAt: timestamp("f_created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fParticipant],
      foreignColumns: [caldavEventParticipant.fId],
      name: "fk_participant_invite_notification",
    }).onDelete("cascade"),
    unique("notification_invite_unique_participant").on(table.fParticipant),
  ],
)

export const checklistSafra = pgTable("checklist_safra", {
  fId: serial("f_id").primaryKey().notNull(),
  fProcess: integer("f_process"),
  fDtCitacao: varchar("f_dt_citacao", { length: 10 }),
  fLiminarDef: smallint("f_liminar_def"),
  fPenaMulta: smallint("f_pena_multa"),
  fObrigacaoBanco: smallint("f_obrigacao_banco"),
  fSituacaoOf: varchar("f_situacao_of", { length: 30 }),
  fInterAgravoLiminar: smallint("f_inter_agravo_liminar"),
  fDecisaoAgravo: varchar("f_decisao_agravo"),
  fDecisaoPrimGrau: varchar("f_decisao_prim_grau", { length: 30 }),
  fDtPubliDecisaoPrimGrau: varchar("f_dt_publi_decisao_prim_grau", {
    length: 10,
  }),
  fInterposiRecursoPrim: smallint("f_interposi_recurso_prim"),
  fDecisaoSecGrau: varchar("f_decisao_sec_grau", { length: 30 }),
  fDtPubliDecisaoSecGrau: varchar("f_dt_publi_decisao_sec_grau", {
    length: 10,
  }),
  fInterposiRecursoSec: smallint("f_interposi_recurso_sec"),
  fDecisaoTerGrau: varchar("f_decisao_ter_grau", { length: 30 }),
  fDtPubliDecisaoTerGrau: varchar("f_dt_publi_decisao_ter_grau", {
    length: 10,
  }),
  fCondenaPecunia: smallint("f_condena_pecunia"),
  fPagCondenacao: varchar("f_pag_condenacao", { length: 30 }),
  fDtPagBloqueAcordo: varchar("f_dt_pag_bloque_acordo", { length: 10 }),
  fImpugnacao: smallint("f_impugnacao"),
  fSucumbFavorEscr: smallint("f_sucumb_favor_escr"),
  fSituacaoSucumb: varchar("f_situacao_sucumb", { length: 30 }),
  fValorSucumb: numeric("f_valor_sucumb", { mode: "number" }),
  fAptoEncerra: smallint("f_apto_encerra"),
  fObservacao: varchar("f_observacao"),
})

export const checklistformalCampos = pgTable(
  "checklistformal_campos",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 255 }).notNull(),
    fIdchecklist: integer("f_idchecklist").notNull(),
    fClient: integer("f_client"),
  },
  (table) => [
    index("checklistformal_campos_idx").using(
      "btree",
      table.fIdchecklist.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistformal_campos_idx1").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "checklistformal_campos_fk",
    }),
    foreignKey({
      columns: [table.fIdchecklist],
      foreignColumns: [checklistformal.fId],
      name: "checklistformal_campos_fk1",
    }),
  ],
)

export const checklistSeguros = pgTable("checklist_seguros", {
  fId: serial("f_id").primaryKey().notNull(),
  fProcess: integer("f_process"),
  fObjeto: varchar("f_objeto", { length: 100 }),
  fSeguroVida: varchar("f_seguro_vida", { length: 100 }),
  fSeguroAuto: varchar("f_seguro_auto", { length: 100 }),
  fParecerTecnico: varchar("f_parecer_tecnico", { length: 3 }),
  fAlcada: numeric("f_alcada", { mode: "number" }),
  fRiscoAtual: varchar("f_risco_atual", { length: 50 }),
  fAlteracaoRisco: varchar("f_alteracao_risco", { length: 3 }),
  fMotivoRisco: varchar("f_motivo_risco"),
  fValorRisco: numeric("f_valor_risco", { mode: "number" }),
  fDataCitacao: date("f_data_citacao"),
  fDataAlegadoSinistro: date("f_data_alegado_sinistro"),
  fValorPedido: numeric("f_valor_pedido", { mode: "number" }),
  fLaudoPericial: varchar("f_laudo_pericial"),
  fDecisao: varchar("f_decisao"),
  fValorCondenacao: numeric("f_valor_condenacao", { mode: "number" }),
  fHonorarios: numeric("f_honorarios", { mode: "number" }),
  fDataPublicacaoSentenca: date("f_data_publicacao_sentenca"),
  fDecisao2: varchar("f_decisao_2", { length: 100 }),
  fValorCondenacao2: numeric("f_valor_condenacao_2", { mode: "number" }),
  fHonorarios2: numeric("f_honorarios_2", { mode: "number" }),
  fDataPublicacaoAcordao: date("f_data_publicacao_acordao"),
  fPagamentoPenhora: varchar("f_pagamento_penhora", { length: 3 }),
  fValorPagamentoJudicial: numeric("f_valor_pagamento_judicial", {
    mode: "number",
  }),
  fDataPagamentoJudicial: date("f_data_pagamento_judicial"),
  fObrigacaoFazer: varchar("f_obrigacao_fazer", { length: 3 }),
  fObrigacaoComentario: varchar("f_obrigacao_comentario"),
  fAptoAcordo: varchar("f_apto_acordo", { length: 3 }),
  fMotivoNaoApto: varchar("f_motivo_nao_apto", { length: 100 }),
  fObservacoes: varchar("f_observacoes"),
  fUser: integer("f_user"),
  fDate: date("f_date"),
  fPedidoDanoMoral: varchar("f_pedido_dano_moral", { length: 3 }),
  fValorPedidoDanoMoral: numeric("f_valor_pedido_dano_moral", {
    mode: "number",
  }),
  fDenunciacao: varchar("f_denunciacao", { length: 3 }),
  fHonorariosLideSecundaria: numeric("f_honorarios_lide_secundaria", {
    mode: "number",
  }),
  fAceitacao: varchar("f_aceitacao", { length: 20 }),
})

export const checklistembratel = pgTable("checklistembratel", {
  fId: serial("f_id").primaryKey().notNull(),
  fResumeProcess: varchar("f_resume_process"),
  fProduct: varchar("f_product", { length: 50 }),
  fCampaign: varchar("f_campaign", { length: 200 }),
  fPaPendingAnalyze: varchar("f_pa_pending_analyze", { length: 100 }),
  fPaProcedente: varchar("f_pa_procedente", { length: 100 }),
  fPaImprocedente: varchar("f_pa_improcedente", { length: 100 }),
  fPaPossibilAutoriCliente: smallint("f_pa_possibil_autori_cliente"),
  fPaImproceAvalEscritorio: smallint("f_pa_improce_aval_escritorio"),
  fPaDataEnvioEmail: smallint("f_pa_data_envio_email"),
  fRequestMoralDamages: varchar("f_request_moral_damages", { length: 3 }),
  fRequestValueMoral: numeric("f_request_value_moral", { mode: "number" }),
  fRequestMaterialDamages: varchar("f_request_material_damages", { length: 3 }),
  fRequestValueMaterial: numeric("f_request_value_material", {
    mode: "number",
  }),
  fDecisionPublished: varchar("f_decision_published", { length: 50 }),
  fDecisionPublishedDate: date("f_decision_published_date"),
  fFile: varchar("f_file", { length: 50 }),
  fNonimalValueCondemnation: numeric("f_nonimal_value_condemnation", {
    mode: "number",
  }),
  fValueRenumerations: numeric("f_value_renumerations", { mode: "number" }),
  fTotalValueCondemnation: numeric("f_total_value_condemnation", {
    mode: "number",
  }),
  fLastDateTotalValue: date("f_last_date_total_value"),
  fValueClientAgreement: smallint("f_value_client_agreement"),
  fAgreementProposalSuggestedMin: numeric(
    "f_agreement_proposal_suggested_min",
    { mode: "number" },
  ),
  fAgreementProposalSuggestedMax: numeric(
    "f_agreement_proposal_suggested_max",
    { mode: "number" },
  ),
  fJustificationOfficeAcoording: varchar("f_justification_office_acoording"),
  fObligationsToDo: varchar("f_obligations_to_do"),
  fAbleToDeal: varchar("f_able_to_deal", { length: 100 }),
  fStatusNegotiation: varchar("f_status_negotiation"),
  fResumeNegotiation: varchar("f_resume_negotiation"),
  fDateNegotiation: date("f_date_negotiation"),
  fProcess: integer("f_process"),
  fSendEmail: smallint("f_send_email"),
  fTotalValueDamages: numeric("f_total_value_damages", { mode: "number" }),
  fDate: date("f_date").defaultNow().notNull(),
  fUser: integer("f_user"),
  fObject: varchar("f_object", { length: 255 }),
  fValueAlcada: numeric("f_value_alcada", { mode: "number" }),
  fResume2: text("f_resume2"),
  fAnaliseClient: text("f_analise_client"),
  fSubsidio: varchar("f_subsidio", { length: 200 }),
  fJustification: text("f_justification"),
  fNegativation: varchar("f_negativation", { length: 100 }),
  fCobilling: varchar("f_cobilling", { length: 200 }),
  fProposta: text("f_proposta"),
  fNegociacao: text("f_negociacao"),
  fDateCitacao: date("f_date_citacao"),
  fDecisao: varchar("f_decisao", { length: 200 }),
  fValor1Grau: numeric("f_valor_1_grau", { mode: "number" }),
  fHonorarios: numeric("f_honorarios", { mode: "number" }),
  fPagamento: varchar("f_pagamento", { length: 200 }),
  fDatePagamento: date("f_date_pagamento"),
  fValorPagamento: numeric("f_valor_pagamento", { mode: "number" }),
  fDecisao2: varchar("f_decisao2", { length: 255 }),
  fValor2Grau: numeric("f_valor_2_grau", { mode: "number" }),
  fHonorarios2: numeric("f_honorarios_2", { mode: "number" }),
  fApto: varchar("f_apto", { length: 200 }),
  fMotivoNaoApto: varchar("f_motivo_nao_apto", { length: 255 }),
  fObs: text("f_obs"),
  fDateDecisao1Grau: date("f_date_decisao_1grau"),
  fDateDecisao2Grau: date("f_date_decisao_2grau"),
  fJuizSentenciante: text("f_juiz_sentenciante"),
  fJuizLeigo: text("f_juiz_leigo"),
  fTeseDefesa: text("f_tese_defesa"),
  fFundamentacaoDecisao: text("f_fundamentacao_decisao"),
  fValorProposta: numeric("f_valor_proposta", { mode: "number" }),
})

export const checklistformalValues = pgTable(
  "checklistformal_values",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fCampo: integer("f_campo"),
    fValue: varchar("f_value"),
    fChecklistSave: integer("f_checklist_save").notNull(),
  },
  (table) => [
    index("checklistformal_values_idx").using(
      "btree",
      table.fChecklistSave.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistmeritoValues = pgTable(
  "checklistmerito_values",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fOptions: varchar("f_options"),
    fText: varchar("f_text"),
    fCampochecklist: integer("f_campochecklist"),
    fChecklistSave: integer("f_checklist_save").notNull(),
  },
  (table) => [
    index("checklistmerito_values_idx").using(
      "btree",
      table.fCampochecklist.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistmerito_values_idx1").using(
      "btree",
      table.fChecklistSave.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCampochecklist],
      foreignColumns: [checklistmeritoCampos.fId],
      name: "checklistmerito_values_fk",
    }),
    foreignKey({
      columns: [table.fChecklistSave],
      foreignColumns: [checklistSave.fId],
      name: "checklistmerito_values_fk1",
    }).onDelete("cascade"),
  ],
)

export const checklistmerito = pgTable(
  "checklistmerito",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fStatus: integer("f_status").default(1).notNull(),
  },
  (table) => [
    index("checklistmerito_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const checklistrescheduling = pgTable(
  "checklistrescheduling",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fLawyer: integer("f_lawyer").notNull(),
    fChecklist: integer("f_checklist").default(1).notNull(),
    fScheduling: integer("f_scheduling").default(0),
    fRescheduling: integer("f_rescheduling").default(0),
    fResponsible: integer("f_responsible").default(1),
  },
  (table) => [
    uniqueIndex("controlchecklist_idx").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const chequesreceived = pgTable(
  "chequesreceived",
  {
    fId: serial("f_id").primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    fValue: numeric("f_value", { mode: "number" }),
    fDate: date("f_date"),
    fNroCheque: varchar("f_nro_cheque", { length: 150 }),
    fNatureza: varchar("f_natureza", { length: 100 }),
    fNominal: varchar("f_nominal", { length: 100 }),
    fStatus: varchar("f_status", { length: 100 }),
    fUser: integer("f_user"),
  },
  (table) => [
    index("chequesreceived_idx")
      .using("btree", table.fProcess.asc().nullsLast().op("int8_ops"))
      .with({ fillfactor: "90" }),
    index("chequesreceived_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const checklistformal = pgTable(
  "checklistformal",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 255 }).notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fState: integer("f_state"),
  },
  (table) => [
    index("checklistformal_idx").using(
      "btree",
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistformal_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "checklistformal_fk",
    }),
  ],
)

export const checklistmeritoCampos = pgTable(
  "checklistmerito_campos",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fNameText: varchar("f_name_text"),
    fType: integer("f_type").notNull(),
    fOptions: varchar("f_options"),
    fSegmento: integer("f_segmento").notNull(),
    fClient: integer("f_client"),
    fArea: integer("f_area"),
    fIdchecklist: integer("f_idchecklist"),
  },
  (table) => [
    index("checklistmerito_campos_idx").using(
      "btree",
      table.fSegmento.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistmerito_campos_idx1").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistmerito_campos_idx2").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("checklistmerito_campos_idx3").using(
      "btree",
      table.fIdchecklist.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "checklistmerito_campos_fk",
    }),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "checklistmerito_campos_fk1",
    }),
    foreignKey({
      columns: [table.fIdchecklist],
      foreignColumns: [checklistmerito.fId],
      name: "checklistmerito_campos_fk2",
    }),
  ],
)

export const clientSegments = pgTable(
  "client_segments",
  {
    id: serial().primaryKey().notNull(),
    name: varchar().notNull(),
    active: integer().default(1).notNull(),
  },
  (table) => [unique("segments_name_unique_client").on(table.name)],
)

export const clientdocuments = pgTable(
  "clientdocuments",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('clientdocuments_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
    fDate: date("f_date").notNull(),
    fText: text("f_text").notNull(),
    fDatehour: timestamp("f_datehour", { mode: "string" })
      .defaultNow()
      .notNull(),
    fUserupload: integer("f_userupload"),
  },
  (table) => [
    index("idx_clientdocuments_f_client_clients_f_id").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_clientdocuments_f_client_clients_f_id",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const closereasons = pgTable(
  "closereasons",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fActive: smallint("f_active").default(1).notNull(),
  },
  (table) => [unique("closereasons_f_name_unique").on(table.fName)],
)

export const clientsCustomfieldsdatas = pgTable(
  "clients_customfieldsdatas",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClientscustomfields: bigint("f_clientscustomfields", {
      mode: "number",
    }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }).notNull(),
    fValue: numeric("f_value", { mode: "number" }),
    fText: text("f_text"),
    fName: varchar("f_name", { length: 100 }).default(sql`NULL`),
    fDate: date("f_date"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_clients_customfieldsdatas_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_clients_customfieldsdatas_clients_customfields").using(
      "btree",
      table.fClientscustomfields.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_clients_customfieldsdatas_date").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("idx_clients_customfieldsdatas_name").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    index("idx_clients_customfieldsdatas_text").using(
      "btree",
      table.fText.asc().nullsLast().op("text_ops"),
    ),
    index(
      "idx_clients_customfieldsdatas_unique_client_clientscustomfields",
    ).using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fClientscustomfields.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_clients_customfieldsdatas_value").using(
      "btree",
      table.fValue.asc().nullsLast().op("numeric_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_clients_customfieldsdatas_client_id",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fClientscustomfields],
      foreignColumns: [clientsCustomfields.fId],
      name: "fk_clients_customfieldsdatas_clients_customfields_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_clients_customfieldsdatas_users_f_id",
    }),
    unique("uq_clients_customfieldsdatas").on(
      table.fClientscustomfields,
      table.fClient,
    ),
  ],
)

export const clientannotations = pgTable(
  "clientannotations",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client").notNull(),
    fUsercreate: integer("f_usercreate").notNull(),
    fDatecreate: timestamp("f_datecreate", { mode: "string" })
      .defaultNow()
      .notNull(),
    fText: text("f_text").notNull(),
  },
  (table) => [
    index("idx_clientannotations_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_clientannotations_usercreate").using(
      "btree",
      table.fUsercreate.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "clientannotations_f_client_fkey",
    }),
    foreignKey({
      columns: [table.fUsercreate],
      foreignColumns: [users.fId],
      name: "clientannotations_f_usercreate_fkey",
    }),
  ],
)

export const clientspecifics = pgTable(
  "clientspecifics",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    fName: text("f_name").notNull(),
    fType: smallint("f_type").notNull(),
    fRequired: boolean("f_required"),
    fComment: varchar("f_comment", { length: 500 }),
    fPosition: smallint("f_position").default(0).notNull(),
    fReadonly: smallint("f_readonly").default(0).notNull(),
    fOptions: varchar("f_options"),
    fNamefunctionreport: varchar("f_namefunctionreport"),
    fDynamicvar: varchar("f_dynamicvar", { length: 20 }).default(sql`NULL`),
    fGroup: integer("f_group"),
    fTitle: varchar("f_title", { length: 100 }).default("").notNull(),
    fSubarea: integer("f_subarea"),
  },
  (table) => [
    index("IX_r_34").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_36").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("clientspecifics_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("clientspecifics_idx2").using(
      "btree",
      table.fNamefunctionreport.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fSubarea],
      foreignColumns: [subareas.fId],
      name: "clientspecifics_fk",
    }),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "fk_clientspecifics_groupclients_f_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_34",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_36",
    }),
    unique("clientspecifics_f_dynamicvar_unique").on(table.fDynamicvar),
  ],
)

export const clients = pgTable(
  "clients",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fType: smallint("f_type"),
    fStreet: text("f_street"),
    fBurgh: text("f_burgh"),
    fCity: text("f_city"),
    fState: integer("f_state"),
    fZipcode: varchar("f_zipcode", { length: 20 }),
    fPhone: text("f_phone"),
    fFax: text("f_fax"),
    fMobile: text("f_mobile"),
    fCpf: text("f_cpf"),
    fRg: text("f_rg"),
    fComments: text("f_comments"),
    fSoundexCode: text("f_soundex_code"),
    fActive: smallint("f_active").default(1).notNull(),
    fCalculatestatisticscover: smallint("f_calculatestatisticscover")
      .default(1)
      .notNull(),
    fLink1: text("f_link1"),
    fLink2: text("f_link2"),
    fSegment: integer("f_segment"),
    fEmail: varchar("f_email", { length: 150 }),
    fContato: varchar("f_contato", { length: 60 }),
    f2Advid: varchar("f_2advid"),
    fGroupEconomy: varchar("f_group_economy"),
    fGender: char("f_gender", { length: 1 }),
    fNickname: varchar("f_nickname"),
    fBirthday: date("f_birthday"),
    fCitizenship: varchar("f_citizenship"),
    fProfession: varchar("f_profession"),
    fRetired: smallint("f_retired"),
    fMaritalStatus: varchar("f_marital_status"),
    fNumber1: varchar("f_number1"),
    fNumber2: varchar("f_number2"),
    fBank: varchar("f_bank"),
    fAgency: varchar("f_agency"),
    fAccount: varchar("f_account"),
    fIe: varchar("f_ie"),
    fRepresentative: varchar("f_representative"),
    fRepresentativeRg: varchar("f_representative_rg"),
    fRepresentativeCpf: varchar("f_representative_cpf"),
    fRepresentativeEmail: varchar("f_representative_email"),
    fIdFuncional: varchar("f_id_funcional"),
    fSenha: varchar("f_senha"),
    fLog: varchar("f_log", { length: 255 }),
    fIm: varchar("f_im", { length: 100 }),
    fOldId: integer("f_old_id"),
    fWhatsapp: varchar("f_whatsapp", { length: 50 }).default(sql`NULL`),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user"),
    fPhoto: varchar("f_photo", { length: 255 }),
  },
  (table) => [
    uniqueIndex("clients_f_cpf_unique").using(
      "btree",
      sql`f_cpf`,
      sql`((f_cpf IS NOT NULL))`,
    ),
    index("clients_idx").using(
      "btree",
      table.fSoundexCode.asc().nullsLast().op("text_ops"),
    ),
    index("clients_idx1").using(
      "btree",
      table.fActive.asc().nullsLast().op("int2_ops"),
    ),
    index("clients_idx2").using(
      "btree",
      table.fCalculatestatisticscover.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "clients_fk",
    }),
  ],
)

export const closereasonsclient = pgTable("closereasonsclient", {
  fId: serial("f_id").primaryKey().notNull(),
  fClosereasons: integer("f_closereasons"),
  fClient: integer("f_client"),
  fStatus: integer("f_status").default(0),
})

export const closetypemeta = pgTable("closetypemeta", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }).notNull(),
})

export const closuresmeta = pgTable(
  "closuresmeta",
  {
    fProcess: integer("f_process"),
    fDateClosure: date("f_date_closure").defaultNow().notNull(),
    fTypeClosure: integer("f_type_closure"),
    fValue: numeric("f_value", { mode: "number" }),
    fDescription: text("f_description"),
  },
  (table) => [
    index("closuresmeta_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const configanalisereembolso = pgTable("configanalisereembolso", {
  fId: serial("f_id").notNull(),
  fUser: integer("f_user"),
  fClient: integer("f_client"),
  fArea: integer("f_area"),
  fState: integer("f_state"),
})

export const contingencyvaluetypes = pgTable("contingencyvaluetypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name"),
})

export const consultationandadviceStore = pgTable(
  "consultationandadvice_store",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fClient: integer("f_client"),
    fType: varchar("f_type", { length: 255 }),
  },
)

export const contracts = pgTable(
  "contracts",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fNroContrato: varchar("f_nro_contrato", { length: 50 }),
    fDataContrato: date("f_data_contrato"),
    fDataInadimplencia: date("f_data_inadimplencia"),
    fDiasAtraso: integer("f_dias_atraso"),
    fTotalVencido: numeric("f_total_vencido", { mode: "number" }),
    fTotalVencer: numeric("f_total_vencer", { mode: "number" }),
    fParcelasPagas: numeric("f_parcelas_pagas", { mode: "number" }),
    fQuantParcelas: integer("f_quant_parcelas"),
    fIdParte: integer("f_id_parte"),
    fQuantParcelasAtraso: integer("f_quant_parcelas_atraso"),
    fQuantParcelasPagas: integer("f_quant_parcelas_pagas"),
    fQuantParcelasVencer: integer("f_quant_parcelas_vencer"),
    fTipoContrato: integer("f_tipo_contrato"),
    fStatus: integer("f_status").default(0).notNull(),
    fDataEncerramento: date("f_data_encerramento"),
  },
  (table) => [
    index("contracts_idx").using(
      "btree",
      table.fIdParte.asc().nullsLast().op("int4_ops"),
    ),
    index("contracts_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("contracts_idx2").using(
      "btree",
      table.fNroContrato.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const contractsParcelas = pgTable("contracts_parcelas", {
  fId: serial("f_id").primaryKey().notNull(),
  fContract: integer("f_contract"),
  fNumeroParcela: smallint("f_numero_parcela"),
  fDataVencimento: date("f_data_vencimento"),
  fValorOriginal: numeric("f_valor_original", { mode: "number" }),
  fStatus: varchar("f_status", { length: 20 }).default("Em Aberto"),
  fJuros: numeric("f_juros", { precision: 20, scale: 2 }).default("0.00"),
})

export const controlbillingmeta = pgTable(
  "controlbillingmeta",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
  },
  (table) => [
    index("controlbillingmeta_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
  ],
)

export const controlcorrespondentelawyers = pgTable(
  "controlcorrespondentelawyers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fType: integer("f_type").default(1).notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("controlcorrespondentelawyers_IX_r_179").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("controlcorrespondentelawyers_IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("controlcorrespondentelawyers_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
  ],
)

export const controlreportareafilter = pgTable("controlreportareafilter", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }).notNull(),
  fActive: integer("f_active").default(1).notNull(),
})

export const controlreportareafilterPerfil = pgTable(
  "controlreportareafilter_perfil",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPerfil: integer("f_perfil").notNull(),
    fClient: integer("f_client").notNull(),
    fState: integer("f_state").notNull(),
    fArea: integer("f_area").notNull(),
  },
)

export const controlspecialadvice = pgTable("controlspecialadvice", {
  fId: integer("f_id")
    .default(sql`nextval('controlspecialadvice_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fUserId: bigint("f_user_id", { mode: "number" }).notNull(),
  fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const controlspecialbilling = pgTable("controlspecialbilling", {
  fId: integer("f_id")
    .default(sql`nextval('controlspecialbilling_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fUserId: bigint("f_user_id", { mode: "number" }).notNull(),
  fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const controlspecialfinancial = pgTable("controlspecialfinancial", {
  fId: integer("f_id")
    .default(sql`nextval('controlspecialfinancial_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fUserId: bigint("f_user_id", { mode: "number" }).notNull(),
  fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const controldiligencelawyers = pgTable(
  "controldiligencelawyers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index("controlrequestcopieslawyers_IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const controlfinancial = pgTable(
  "controlfinancial",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index("controlfinancial_controlrequestcopieslawyers_IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const controlfinancialRegras = pgTable(
  "controlfinancial_regras",
  {
    fId: serial("f_id").primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fClient: integer("f_client"),
    fState: integer("f_state"),
    fType: varchar("f_type", { length: 255 }),
  },
  (table) => [
    index("controlfinancial_regras_controlrequestcopieslawyers_IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("controlfinancial_regras_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("controlfinancial_regras_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("text_ops"),
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fState.asc().nullsLast().op("int8_ops"),
      table.fType.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const controlspecialmonitoringlawyers = pgTable(
  "controlspecialmonitoringlawyers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index(
      "controloralargumentlawyers_controlrequestcopieslawyers_IX_r_181",
    ).using("btree", table.fUser.asc().nullsLast().op("int8_ops")),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const dbpartsNames = pgTable("dbparts_names", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fValue: varchar("f_value").notNull(),
  fActive: integer("f_active").default(1).notNull(),
  fType: integer("f_type").default(0).notNull(),
})

export const correspondenteDistrict = pgTable(
  "correspondente_district",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fUser: integer("f_user").notNull(),
    fDistrict: integer("f_district").notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fPriority: smallint("f_priority").default(0).notNull(),
  },
  (table) => [
    uniqueIndex("correspondente_district_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
      table.fDistrict.asc().nullsLast().op("int4_ops"),
    ),
    index("correspondente_district_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const currencyrates = pgTable("currencyrates", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
  fValue: numeric("f_value", { mode: "number" }),
  fDate: date("f_date"),
  fSymbol: text("f_symbol"),
  fDefault: boolean("f_default"),
})

export const coordinators = pgTable(
  "coordinators",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_user").using(
      "hash",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const departmentsoverallstats = pgTable(
  "departmentsoverallstats",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }).primaryKey().notNull(),
    fTotalOpenProcess: smallint("f_total_open_process"),
    fTotalProcessAsPlaintiff: smallint("f_total_process_as_plaintiff"),
    fTotalProcessAsDefendant: smallint("f_total_process_as_defendant"),
    fValueTotalProcessContentio: numeric("f_value_total_process_contentio", {
      mode: "number",
    }),
    fValueTotalProcessAsPlaint: numeric("f_value_total_process_as_plaint", {
      mode: "number",
    }),
    fValueTotalProcessAsDefend: numeric("f_value_total_process_as_defend", {
      mode: "number",
    }),
    fValueProfitEstimative: numeric("f_value_profit_estimative", {
      mode: "number",
    }),
    fValueLossEstimative: numeric("f_value_loss_estimative", {
      mode: "number",
    }),
  },
  (table) => [
    index("IX_r_172").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_172",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const depositvaluesStatus = pgTable("depositvalues_status", {
  fId: integer("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 45 }).notNull(),
  fStatus: integer("f_status").default(1),
})

export const copiestype = pgTable("copiestype", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fDaysNormal: smallint("f_days_normal").default(3).notNull(),
  fDaysUrgent: smallint("f_days_urgent").default(1).notNull(),
  fStatus: smallint("f_status").default(1).notNull(),
})

export const depositvalues = pgTable(
  "depositvalues",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    fValue: numeric("f_value", { mode: "number" }),
    fDate: date("f_date"),
    fText: text("f_text"),
    fNumber: varchar("f_number", { length: 25 }),
    fType: integer("f_type").default(1).notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    fLastuser: integer("f_lastuser").notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("IX_r_188").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_depositvalues_users_f_lastuser",
    }),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_f_create_user",
    }),
    foreignKey({
      columns: [table.fStatus],
      foreignColumns: [depositvaluesStatus.fId],
      name: "fk_f_status",
    }),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [depositvaluesType.fId],
      name: "fk_f_type",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_188",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const correspondents = pgTable(
  "correspondents",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fType: integer("f_type").default(1).notNull(),
  },
  (table) => [
    index("correspondents_f_user_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "correspondents_fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const diligencesCopies = pgTable(
  "diligences_copies",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDateRequest: date("f_date_request").defaultNow().notNull(),
    fDateCumprir: date("f_date_cumprir").notNull(),
    fUserRequest: integer("f_user_request").notNull(),
    fCorrespondente: integer("f_correspondente").notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fProcess: integer("f_process").notNull(),
    fDiligenciatype: integer("f_diligenciatype").notNull(),
    fCopiestype: integer("f_copiestype").notNull(),
    fPriority: varchar("f_priority", { length: 50 }).notNull(),
    fObservation: varchar("f_observation"),
    fFile: varchar("f_file"),
    fDateCompleted: timestamp("f_date_completed", { mode: "string" }),
    fReasonnoncompliment: integer("f_reasonnoncompliment"),
    fReasonnoncomplimentObs: varchar("f_reasonnoncompliment_obs"),
    fEnviadocorreio: varchar("f_enviadocorreio", { length: 3 })
      .default("NÃO")
      .notNull(),
    fExecuted: smallint("f_executed").default(0).notNull(),
    fFileMd5: varchar("f_file_md5"),
    fTotalpagespdf: integer("f_totalpagespdf").default(0).notNull(),
    fType: varchar("f_type", { length: 5 }).default("CÓPIA").notNull(),
    fEnviadoemail: varchar("f_enviadoemail", { length: 3 })
      .default("NÃO")
      .notNull(),
    fObservationFinal: varchar("f_observation_final"),
    fPreanalysis: smallint("f_preanalysis").default(0).notNull(),
    fDatetimeRequest: timestamp("f_datetime_request", { mode: "string" })
      .defaultNow()
      .notNull(),
    fMotivepriority: varchar("f_motivepriority", { length: 100 }),
    fFileesc: varchar("f_fileesc"),
    fFilemd5Esc: varchar("f_filemd5esc"),
    fJudiceonlineid: varchar("f_judiceonlineid"),
    fRead: smallint("f_read").default(0).notNull(),
    fNumberpages: integer("f_numberpages"),
  },
  (table) => [
    index("diligences_copies_f_copiestype_idx").using(
      "btree",
      table.fCopiestype.asc().nullsLast().op("int4_ops"),
    ),
    index("diligences_copies_f_diligenciatype_idx").using(
      "btree",
      table.fDiligenciatype.asc().nullsLast().op("int4_ops"),
    ),
    index("diligences_copies_idx").using(
      "btree",
      table.fPriority.asc().nullsLast().op("text_ops"),
    ),
    index("diligences_copies_idx1").using(
      "btree",
      table.fCorrespondente.asc().nullsLast().op("int4_ops"),
    ),
    index("diligences_copies_idx2").using(
      "btree",
      table.fJudiceonlineid.asc().nullsLast().op("text_ops"),
    ),
    index("diligences_copies_idx3").using(
      "btree",
      table.fDateCompleted.asc().nullsLast().op("timestamp_ops"),
    ),
    index("diligences_copies_idx4").using(
      "btree",
      table.fFile.asc().nullsLast().op("text_ops"),
    ),
    index("requestcopies_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("requestcopies_idx1").using(
      "btree",
      table.fDateRequest.asc().nullsLast().op("date_ops"),
    ),
    index("requestcopies_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fDiligenciatype],
      foreignColumns: [diligencetypes.fId],
      name: "diligences_copies_fk",
    }),
    foreignKey({
      columns: [table.fCopiestype],
      foreignColumns: [copiestype.fId],
      name: "diligences_copies_fk1",
    }),
  ],
)

export const diligencesGuide = pgTable(
  "diligences_guide",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fDocument: integer("f_document"),
    fGuidetype: varchar("f_guidetype", { length: 255 }),
    fIssueDate: date("f_issue_date"),
    fDueDate: date("f_due_date"),
    fValue: numeric("f_value", { precision: 10, scale: 2 }),
    fCodInt: varchar("f_cod_int", { length: 255 }),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fStatus: integer("f_status"),
    fMessage: text("f_message"),
    fRead: integer("f_read").default(0).notNull(),
  },
  (table) => [
    index("idx_diligences_guide_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_diligences_guide_document").using(
      "btree",
      table.fDocument.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_diligences_guide_process").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_create_user",
    }),
    foreignKey({
      columns: [table.fDocument],
      foreignColumns: [documents.fId],
      name: "fk_document",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "fk_process",
    }),
    check(
      "diligences_guide_f_status_check",
      sql`f_status = ANY (ARRAY[1, 2, 3])`,
    ),
  ],
)

export const depositvaluesType = pgTable("depositvalues_type", {
  fId: integer("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 45 }).default("").notNull(),
})

export const despesaTypes = pgTable("despesa_types", {
  fId: integer("f_id")
    .default(sql`nextval('despesa_types_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name", { length: 50 }),
})

export const diligencesHearing = pgTable(
  "diligences_hearing",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fUserRequest: integer("f_user_request").notNull(),
    fCorrespondente: integer("f_correspondente").notNull(),
    fDatetimeHearing: timestamp("f_datetime_hearing", {
      mode: "string",
    }).notNull(),
    fHearingtype: integer("f_hearingtype").notNull(),
    fProcess: integer("f_process").notNull(),
    fNeedPreposto: varchar("f_need_preposto", { length: 3 }),
    fNeedLawyer: varchar("f_need_lawyer", { length: 3 }),
    fObservation: varchar("f_observation"),
    fStatus: integer("f_status").default(1).notNull(),
    fDateConfirmed: timestamp("f_date_confirmed", { mode: "string" }),
    fDateCompleted: timestamp("f_date_completed", { mode: "string" }),
    fObservationFinish: varchar("f_observation_finish"),
    fReasonnoncompliment: integer("f_reasonnoncompliment"),
    fReasonnoncomplimentObs: varchar("f_reasonnoncompliment_obs"),
    fLawyerName: varchar("f_lawyer_name", { length: 100 }),
    fPrepostoName: varchar("f_preposto_name", { length: 100 }),
    fType: varchar("f_type", { length: 9 }).default("AUDIÊNCIA").notNull(),
    fFile: varchar("f_file", { length: 100 }),
    fFilemd5: varchar("f_filemd5", { length: 100 }),
    fLawyerOab: varchar("f_lawyer_oab", { length: 20 }),
    fLawyerFone: varchar("f_lawyer_fone", { length: 20 }),
    fPrepostoCpf: varchar("f_preposto_cpf", { length: 20 }),
    fPrepostoFone: varchar("f_preposto_fone", { length: 20 }),
    fAcordoAudiencia: varchar("f_acordo_audiencia", { length: 3 }),
    fValorContraproposta: numeric("f_valor_contraproposta", { mode: "number" }),
    fTelefoneParte: varchar("f_telefone_parte", { length: 15 }),
    fJudiceonlineid: varchar("f_judiceonlineid", { length: 15 }),
  },
  (table) => [
    index("diligences_hearing_idx").using(
      "btree",
      table.fCorrespondente.asc().nullsLast().op("int4_ops"),
    ),
    index("diligences_hearing_requestcopies_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("diligences_hearing_requestcopies_idx1").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("diligences_hearing_requestcopies_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const documentFiles = pgTable(
  "document_files",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDocumentId: integer("f_document_id").notNull(),
    fFile: varchar("f_file", { length: 300 }).notNull(),
    fFilename: varchar("f_filename", { length: 300 }).notNull(),
    fSize: integer("f_size").notNull(),
    fPath: varchar("f_path", { length: 600 }),
    fInCloud: integer("f_in_cloud").default(0).notNull(),
    fAttempts: integer("f_attempts").default(0).notNull(),
    fSenderror: text("f_senderror"),
  },
  (table) => [
    index("index_btree_document_files_f_document_id").using(
      "btree",
      table.fDocumentId.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fDocumentId],
      foreignColumns: [documents.fId],
      name: "document_files_f_document_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const diligencesStatus = pgTable("diligences_status", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }).notNull(),
})

export const diligencesHearingIntegracao = pgTable(
  "diligences_hearing_integracao",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fRequestUser: integer("f_request_user").notNull(),
    fRequestDatetime: timestamp("f_request_datetime", { mode: "string" })
      .defaultNow()
      .notNull(),
    fProcess: varchar("f_process", { length: 50 }).notNull(),
    fClient: varchar("f_client", { length: 160 }).notNull(),
    fDesignado: char("f_designado", { length: 1 }),
    fOrgao: integer("f_orgao"),
    fVaraProcesso: varchar("f_vara_processo", { length: 80 }).notNull(),
    fElec: smallint("f_elec"),
    fParte: varchar("f_parte", { length: 160 }).notNull(),
    fDatetime: timestamp("f_datetime", { mode: "string" }).notNull(),
    fTipoato: smallint("f_tipoato"),
    fRep: smallint("f_rep"),
    fContatoUrgente: varchar("f_contato_urgente", { length: 50 }),
    fClientNome: varchar("f_client_nome", { length: 50 }).notNull(),
    fClientFone: varchar("f_client_fone", { length: 20 }).notNull(),
    fClientCel: varchar("f_client_cel", { length: 20 }),
    fClientEmail: varchar("f_client_email", { length: 500 }),
    fFatos: text("f_fatos"),
    fContent: text("f_content"),
    fAcordo: smallint("f_acordo"),
    fMin: doublePrecision("f_min"),
    fMax: doublePrecision("f_max"),
    fParcelamento: smallint("f_parcelamento"),
    fDesc: text("f_desc"),
    fNumOrdem: varchar("f_num_ordem", { length: 30 }),
    fJudiceId: varchar("f_judice_id"),
    fJec: smallint("f_jec").default(0).notNull(),
    fStatus: smallint("f_status"),
    fObservation: varchar("f_observation"),
    fUserRequest: integer("f_user_request"),
    fFileMd5: varchar("f_file_md5"),
    fDateCompleted: timestamp("f_date_completed", { mode: "string" }),
    fExecuted: smallint("f_executed").default(0).notNull(),
    fRead: smallint("f_read").default(0).notNull(),
    fRepAdvogados: varchar("f_rep_advogados", { length: 3 }),
    fRepPrepostos: varchar("f_rep_prepostos", { length: 3 }),
  },
)

export const diligencetypes = pgTable("diligencetypes", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
})

export const documentQueue = pgTable(
  "document_queue",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" })
      .default(sql`nextval('seq_document_queue'::regclass)`)
      .primaryKey()
      .notNull(),
    processNumber: varchar("process_number", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    processedAt: timestamp("processed_at", { mode: "string" }),
    processIdInt: text("process_id_int"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    processFId: bigint("process_f_id", { mode: "number" }).notNull(),
    tries: integer().default(0),
    errorMessage: text("error_message"),
    errorDate: timestamp("error_date", { mode: "string" }),
  },
  (table) => [
    foreignKey({
      columns: [table.processFId],
      foreignColumns: [process.fId],
      name: "fk_document_queue_process",
    }).onDelete("cascade"),
  ],
)

export const districts = pgTable(
  "districts",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fState: bigint("f_state", { mode: "number" }),
    fName: text("f_name").notNull(),
  },
  (table) => [
    index("IX_r_9").using(
      "btree",
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "r_9",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const documentstype = pgTable("documentstype", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 250 }),
  fArea: integer("f_area"),
  fStatus: integer("f_status").default(1),
})

export const documentstypeclient = pgTable("documentstypeclient", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
})

export const resourcesfinancialTypecost = pgTable(
  "resourcesfinancial_typecost",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdTypecost: integer("f_id_typecost"),
    fName: varchar("f_name", { length: 200 }),
    fFolder: varchar("f_folder", { length: 4 }),
  },
  (table) => [
    index("resourcesfinancial_typecost_idx").using(
      "btree",
      table.fFolder.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const dynamicpartsPreliminary = pgTable("dynamicparts_preliminary", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name"),
  fText: text("f_text"),
})

export const dynamicpartsOrders = pgTable("dynamicparts_orders", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name"),
  fText: text("f_text"),
})

export const dynamicpartsPieces = pgTable("dynamicparts_pieces", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 255 }).notNull(),
  fFile: varchar("f_file", { length: 255 }).notNull(),
})

export const financialreceipts = pgTable(
  "financialreceipts",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fValuetype: bigint("f_valuetype", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
    fValue: numeric("f_value", { mode: "number" }),
    fComments: text("f_comments"),
    fDate: date("f_date"),
    fDateCreate: date("f_date_create").defaultNow().notNull(),
    fStatus: integer("f_status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fService: bigint("f_service", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
  },
  (table) => [
    index("IX_r_119").using(
      "btree",
      table.fValuetype.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_120").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_126").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("financialreceipts_f_service_idx").using(
      "btree",
      table.fService.asc().nullsLast().op("int8_ops"),
    ),
    index("financialreceipts_idx").using(
      "btree",
      table.fDateCreate.asc().nullsLast().op("date_ops"),
    ),
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "financialreceipts_consultationandadvice_fk",
    }),
    foreignKey({
      columns: [table.fValuetype],
      foreignColumns: [valuetypes.fId],
      name: "r_119",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_120",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "r_126",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ],
)

export const dynamicpartsRelOrders = pgTable("dynamicparts_rel_orders", {
  fId: serial("f_id").primaryKey().notNull(),
  fClient: integer("f_client"),
  fArea: integer("f_area"),
  fActiontype: integer("f_actiontype"),
  fJusticetype: integer("f_justicetype"),
  fPiece: integer("f_piece"),
  fActionobject: integer("f_actionobject"),
  fOrder: integer("f_order"),
})

export const dynamicpartsRelThesis = pgTable("dynamicparts_rel_thesis", {
  fId: serial("f_id").primaryKey().notNull(),
  fClient: integer("f_client"),
  fArea: integer("f_area"),
  fActiontype: integer("f_actiontype"),
  fJusticetype: integer("f_justicetype"),
  fPiece: integer("f_piece"),
  fActionobject: integer("f_actionobject"),
  fThesis: integer("f_thesis"),
})

export const dynamicpartsThesis = pgTable("dynamicparts_thesis", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name"),
  fText: text("f_text"),
})

export const failuresdepositvalues = pgTable(
  "failuresdepositvalues",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fDate: date("f_date").notNull(),
    fValue: numeric("f_value", { mode: "number" }).notNull(),
    fFailurestype: integer("f_failurestype").notNull(),
    fDescription: varchar("f_description"),
    fDatePag: date("f_date_pag"),
    fValuePag: numeric("f_value_pag", { mode: "number" }),
  },
  (table) => [
    index("failuresdepositvalues_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const failurestypes = pgTable("failurestypes", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }).notNull(),
})

export const processparticipants = pgTable(
  "processparticipants",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fParticipant: bigint("f_participant", { mode: "number" }).notNull(),
    fType: smallint("f_type").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fPosition: bigint("f_position", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fParticipantlawyer: bigint("f_participantlawyer", { mode: "number" }),
    fIndex: smallint("f_index"),
    fId: serial("f_id").primaryKey().notNull(),
  },
  (table) => [
    index("IX_r_12").using(
      "btree",
      table.fPosition.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_13").using(
      "btree",
      table.fParticipant.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_14").using(
      "btree",
      table.fParticipantlawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_15").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("processparticipants_f_participant_f_process_f_type_idx").using(
      "btree",
      table.fParticipant.asc().nullsLast().op("int8_ops"),
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fType.asc().nullsLast().op("int2_ops"),
    ),
    index("processparticipants_f_type_f_process_f_participant_idx").using(
      "btree",
      table.fType.asc().nullsLast().op("int2_ops"),
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fParticipant.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fPosition],
      foreignColumns: [positions.fId],
      name: "r_12",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fParticipant],
      foreignColumns: [participants.fId],
      name: "r_13",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_15",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const participants = pgTable(
  "participants",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fType: smallint("f_type").notNull(),
    fStreet: text("f_street"),
    fBurgh: text("f_burgh"),
    fCity: text("f_city"),
    fState: text("f_state"),
    fZipcode: varchar("f_zipcode", { length: 20 }),
    fPhone: text("f_phone"),
    fFax: text("f_fax"),
    fMobile: text("f_mobile"),
    fCpf: varchar("f_cpf", { length: 40 }),
    fRg: text("f_rg"),
    fComments: text("f_comments"),
    fSoundexCode: varchar("f_soundex_code"),
    fEmail: text("f_email"),
    fPhone2: text("f_phone2"),
    fPhone3: text("f_phone3"),
    fDtBorn: date("f_dt_born"),
    fSex: varchar("f_sex", { length: 1 }),
    fMaritalStatus: varchar("f_marital_status", { length: 20 }),
    fMother: varchar("f_mother", { length: 200 }),
    fFather: varchar("f_father", { length: 200 }),
    fSpouseName: varchar("f_spouse_name", { length: 200 }),
    fProfession: varchar("f_profession", { length: 200 }),
    fCompany: varchar("f_company", { length: 200 }),
    fOldId: varchar("f_old_id", { length: 50 }),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fLastuser: integer("f_lastuser").notNull(),
    fNumber1: varchar("f_number1", { length: 40 }),
    fNumber2: varchar("f_number2", { length: 100 }),
  },
  (table) => [
    index("fk_serviceparticipants_f_participant_participants_f_id").using(
      "btree",
      table.fId.asc().nullsLast().op("int8_ops"),
    ),
    index("participants_f_create_user_idx").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("participants_f_lastuser_idx").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int4_ops"),
    ),
    index("participants_idx").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    index("participants_idx1").using(
      "btree",
      table.fSoundexCode.asc().nullsLast().op("text_ops"),
    ),
    index("participants_idx2").using(
      "btree",
      table.fCpf.asc().nullsLast().op("text_ops"),
    ),
    uniqueIndex("participants_idx3").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
      table.fCpf.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "participants_users_fk",
    }),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "participants_users_fk_1",
    }),
  ],
)

export const forumDistricts = pgTable(
  "forum_districts",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDistrict: integer("f_district").notNull(),
    fForum: integer("f_forum").notNull(),
  },
  (table) => [
    index("forum_districts_f_district_idx").using(
      "btree",
      table.fDistrict.asc().nullsLast().op("int4_ops"),
    ),
    index("forum_districts_f_forum_idx").using(
      "btree",
      table.fForum.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("forum_districts_idx").using(
      "btree",
      table.fDistrict.asc().nullsLast().op("int4_ops"),
      table.fForum.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fDistrict],
      foreignColumns: [districts.fId],
      name: "forum_districts_fk",
    }),
    foreignKey({
      columns: [table.fForum],
      foreignColumns: [forum.fId],
      name: "forum_districts_fk1",
    }),
  ],
)

export const intimationtypes = pgTable(
  "intimationtypes",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("intimationtypes_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
  ],
)

export const histories = pgTable(
  "histories",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProtocolDocument: bigint("f_protocol_document", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    fDate: date("f_date").notNull(),
    fClientview: smallint("f_clientview").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fPhase: bigint("f_phase", { mode: "number" }).notNull(),
    fComments: text("f_comments").notNull(),
    fProcessnumber: varchar("f_processnumber"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fGenerateDocument: boolean("f_generate_document").default(sql`NULL`),
    fDocDeliveredDate: timestamp("f_doc_delivered_date", { mode: "string" }),
    fDocDeliveredAuthor: text("f_doc_delivered_author"),
    fDocReturnedDate: timestamp("f_doc_returned_date", { mode: "string" }),
    fDocReturnedAuthor: text("f_doc_returned_author"),
    fDocReturnedScanned: boolean("f_doc_returned_scanned"),
    fDocReturnedScannedAuthor: text("f_doc_returned_scanned_author"),
    fNotgeneratedocumentok: boolean("f_notgeneratedocumentok"),
    fLogistictypesend: integer("f_logistictypesend").default(1).notNull(),
    fIsfatal: smallint("f_isfatal").default(0).notNull(),
    fPostofficetracknumber: varchar("f_postofficetracknumber"),
    fSendintegrationpost: timestamp("f_sendintegrationpost", {
      mode: "string",
    }),
    fPostcostcenter: integer("f_postcostcenter"),
    fDatefatalprotocol: date("f_datefatalprotocol"),
    fRfeAppointments: integer("f_rfe_appointments"),
    fRfeAppointmentagreement: integer("f_rfe_appointmentagreement"),
    fRfeHearing: integer("f_rfe_hearing"),
    fReadonly: integer("f_readonly").default(1).notNull(),
    fRfeIntimation: integer("f_rfe_intimation"),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("IX_r_124").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_176").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_202").using(
      "btree",
      table.fProtocolDocument.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_79").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_80").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_81").using(
      "btree",
      table.fPhase.asc().nullsLast().op("int8_ops"),
    ),
    index("histories_idx").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("int2_ops"),
    ),
    index("histories_idx1").using(
      "btree",
      table.fDocReturnedDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("histories_idx10").using(
      "btree",
      table.fDatefatalprotocol.asc().nullsLast().op("date_ops"),
    ),
    index("histories_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
      table.fGenerateDocument.asc().nullsLast().op("int8_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("int8_ops"),
    ),
    index("histories_idx3").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("timestamp_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("int2_ops"),
      table.fDocReturnedDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("histories_idx4").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
    ),
    index("histories_idx5").using(
      "btree",
      table.fDocDeliveredDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("histories_idx6").using(
      "btree",
      table.fIsfatal.asc().nullsLast().op("int2_ops"),
    ),
    index("histories_idx7").using(
      "btree",
      table.fDocReturnedScanned.asc().nullsLast().op("int2_ops"),
      table.fDocReturnedScannedAuthor.asc().nullsLast().op("text_ops"),
    ),
    index("histories_idx8").using(
      "btree",
      table.fPostofficetracknumber.asc().nullsLast().op("text_ops"),
    ),
    index("histories_idx9").using(
      "btree",
      table.fSendintegrationpost.asc().nullsLast().op("timestamp_ops"),
    ),
    index("idx_histories_f_date").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("idx_histories_f_generate_document_f_notgeneratedocumentok").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
      table.fNotgeneratedocumentok.asc().nullsLast().op("int2_ops"),
    ),
    index("idx_histories_f_notgeneratedocumentok").using(
      "btree",
      table.fNotgeneratedocumentok.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "histories_fk",
    }),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "r_124",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [proceedingtypes.fId],
      name: "r_176",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fProtocolDocument],
      foreignColumns: [documents.fId],
      name: "r_202",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_79",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_80",
    }),
    foreignKey({
      columns: [table.fPhase],
      foreignColumns: [phases.fId],
      name: "r_81",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    check(
      "chk_histories_f_generate_document",
      sql`(f_generate_document)::smallint = ANY (ARRAY[0, 1, NULL::integer])`,
    ),
  ],
)

export const garnishments = pgTable(
  "garnishments",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('garnishments_f_id_seq'::regclass)`)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    fDate: date("f_date"),
    fValue: numeric("f_value", { mode: "number" }),
    fGoods: text("f_goods"),
    fObservations: text("f_observations"),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_f_create_user",
    }),
  ],
)

export const groupclients = pgTable(
  "groupclients",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fStatus: integer("f_status").default(1).notNull(),
  },
  (table) => [unique("groupclients_f_name_unique").on(table.fName)],
)

export const historyResetadorRobo = pgTable("history_resetador_robo", {
  fId: serial("f_id").primaryKey().notNull(),
  fResourcefinancial: integer("f_resourcefinancial"),
  fType: varchar("f_type", { length: 255 }),
  fDatetime: timestamp("f_datetime", { mode: "string" }).defaultNow().notNull(),
})

export const historytimesheets = pgTable(
  "historytimesheets",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fHistory: bigint("f_history", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }).notNull(),
    fValue: smallint("f_value"),
  },
  (table) => [
    index("IX_r_162").using(
      "btree",
      table.fHistory.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_163").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fHistory],
      foreignColumns: [histories.fId],
      name: "r_162",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [timesheettypes.fId],
      name: "r_163",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const hearingtypes = pgTable("hearingtypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name"),
  fText: text("f_text"),
  fStatus: smallint("f_status").default(1).notNull(),
})

export const forum = pgTable("forum", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name"),
})

export const groupClientRel = pgTable(
  "group_client_rel",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client"),
    fGroup: integer("f_group"),
  },
  (table) => [
    index("group_client_rel_f_group_f_client_idx").using(
      "btree",
      table.fGroup.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("group_client_rel_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("group_client_rel_idx1").using(
      "btree",
      table.fGroup.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "group_client_rel_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "group_client_rel_fk1",
    }).onDelete("cascade"),
    unique("group_client_rel_idx2").on(table.fClient, table.fGroup),
  ],
)

export const holidays = pgTable(
  "holidays",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 255 }),
    fType: char("f_type", { length: 1 }),
    fUnidade: char("f_unidade", { length: 1 }),
    fDate: date("f_date"),
    fState: integer("f_state"),
    fComarca: integer("f_comarca"),
  },
  (table) => [
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "holidays_fk",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fComarca],
      foreignColumns: [districts.fId],
      name: "holidays_fk1",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ],
)

export const intimations = pgTable(
  "intimations",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }).notNull(),
    fDate: date("f_date"),
    fText: text("f_text"),
    fProcessnumber: varchar("f_processnumber"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fPublication: integer("f_publication"),
    fInserted: timestamp("f_inserted", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("IX_r_121").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_50").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_51").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("intimations_idx").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
    ),
    index("intimations_idx2").using(
      "btree",
      table.fInserted.asc().nullsLast().op("timestamp_ops"),
    ),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "r_121",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [intimationtypes.fId],
      name: "r_50",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_51",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const hearingstimesheets = pgTable(
  "hearingstimesheets",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fHearing: bigint("f_hearing", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }).notNull(),
    fValue: smallint("f_value"),
  },
  (table) => [
    index("IX_r_200").using(
      "btree",
      table.fHearing.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_201").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fHearing],
      foreignColumns: [hearings.fId],
      name: "r_200",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [timesheettypes.fId],
      name: "r_201",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const justifications = pgTable("justifications", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name"),
  fDescription: varchar("f_description"),
})

export const justificationsnonconforming = pgTable(
  "justificationsnonconforming",
  {
    fId: integer("f_id").primaryKey().notNull(),
    fDescription: varchar("f_description", { length: 150 }).notNull(),
  },
)

export const lawyerfields = pgTable(
  "lawyerfields",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActiontype: bigint("f_actiontype", { mode: "number" }),
  },
  (table) => [
    index("IX_r_30").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_31").using(
      "btree",
      table.fActiontype.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_30",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fActiontype],
      foreignColumns: [actiontypes.fId],
      name: "r_31",
    }).onDelete("cascade"),
  ],
)

export const lawyers = pgTable(
  "lawyers",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    fOab: text("f_oab"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTrainee: bigint("f_trainee", { mode: "number" }),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    uniqueIndex("IX_r_43").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_49").using(
      "btree",
      table.fTrainee.asc().nullsLast().op("int8_ops"),
    ),
    index("lawyers_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_43",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fTrainee],
      foreignColumns: [users.fId],
      name: "r_49",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ],
)

export const listphone = pgTable(
  "listphone",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name"),
    fRamal: varchar("f_ramal"),
    fSede: varchar("f_sede"),
    fArea: integer("f_area"),
    fEmail: varchar("f_email"),
  },
  (table) => [
    index("listPhone_idx").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    index("listphone_idx1").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("listphone_idx2").using(
      "btree",
      table.fSede.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const listphoneArea = pgTable(
  "listphone_area",
  {
    fId: serial("f_id").notNull(),
    fName: varchar("f_name"),
  },
  (table) => [unique("listphone_area_f_id_key").on(table.fId)],
)

export const lawyerstats = pgTable(
  "lawyerstats",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).primaryKey().notNull(),
    fTotalprocess: smallint("f_totalprocess"),
    fTotalhearings: smallint("f_totalhearings"),
    fTotalappointments: smallint("f_totalappointments"),
    fTotallostappointments: smallint("f_totallostappointments"),
    fRanking: smallint("f_ranking"),
    fM1Appointments: smallint("f_m1appointments"),
    fM1Lostappointments: smallint("f_m1lostappointments"),
    fM2Appointments: smallint("f_m2appointments"),
    fM2Lostappointments: smallint("f_m2lostappointments"),
    fM3Appointments: smallint("f_m3appointments"),
    fM3Lostappointments: smallint("f_m3lostappointments"),
    fM4Appointments: smallint("f_m4appointments"),
    fM4Lostappointments: smallint("f_m4lostappointments"),
  },
  (table) => [
    index("IX_r_109").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_109",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const logistictypesend = pgTable("logistictypesend", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 50 }).notNull(),
})

export const legalExpenses = pgTable(
  "legal_expenses",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fDate: date("f_date").notNull(),
    fValue: numeric("f_value", { mode: "number" }).notNull(),
    fStatus: varchar("f_status", { length: 255 }),
    fUser: integer("f_user"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    fText: text("f_text"),
    fCreateUser: integer("f_create_user").notNull(),
    fTypeDespesa: integer("f_type_despesa"),
  },
  (table) => [
    index("legal_expenses_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_f_create_user",
    }),
    foreignKey({
      columns: [table.fTypeDespesa],
      foreignColumns: [despesaTypes.fId],
      name: "legal_expenses_fk",
    }),
  ],
)

export const levels = pgTable("levels", {
  fId: integer("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 45 }),
})

export const processparticipantslawyers = pgTable(
  "processparticipantslawyers",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcessparticipant: integer("f_processparticipant").notNull(),
    fParticipantlawyer: integer("f_participantlawyer").notNull(),
    fPrincipal: smallint("f_principal").default(0).notNull(),
  },
  (table) => [
    index("processparticipantslawyers_f_participantlawyer_idx").using(
      "btree",
      table.fParticipantlawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("processparticipantslawyers_f_processparticipant_idx").using(
      "btree",
      table.fProcessparticipant.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("processparticipantslawyers_idx").using(
      "btree",
      table.fProcessparticipant.asc().nullsLast().op("int4_ops"),
      table.fParticipantlawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("processparticipantslawyers_idx1").using(
      "btree",
      table.fPrincipal.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fProcessparticipant],
      foreignColumns: [processparticipants.fId],
      name: "lawyersprocessparticipants_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fParticipantlawyer],
      foreignColumns: [participantslawyers.fId],
      name: "lawyersprocessparticipants_fk1",
    }),
  ],
)

export const logger = pgTable(
  "logger",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fName: varchar("f_name").notNull(),
    fAction: text("f_action").notNull(),
    fDatetime: timestamp("f_datetime", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("logger_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("logger_idx1").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fDatetime.asc().nullsLast().op("text_ops"),
      table.fAction.asc().nullsLast().op("text_ops"),
      table.fName.asc().nullsLast().op("timestamp_ops"),
    ),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "logger_fk",
    }).onDelete("cascade"),
  ],
)

export const lawyersexternal = pgTable(
  "lawyersexternal",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOffice: bigint("f_office", { mode: "number" }),
    fName: text("f_name"),
    fEmail: text("f_email"),
    fPhone: text("f_phone"),
    fOab: text("f_oab"),
  },
  (table) => [
    index("IX_r_173").using(
      "btree",
      table.fOffice.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fOffice],
      foreignColumns: [offices.fId],
      name: "r_173",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ],
)

export const liberations = pgTable(
  "liberations",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    fDate: date("f_date").notNull(),
    fText: text("f_text").notNull(),
  },
  (table) => [
    index("IX_r_95").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_96").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_95",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_96",
    }),
  ],
)

export const managementinformationAtiveDll = pgTable(
  "managementinformation_ative_dll",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fNumber: varchar("f_number"),
    fCnj: varchar("f_cnj"),
    fAutor: varchar("f_autor"),
    fEscritorioadverso: varchar("f_escritorioadverso"),
    fComarca: varchar("f_comarca"),
    fUf: varchar("f_uf"),
    fVara: varchar("f_vara"),
    fAcaoapassiva: varchar("f_acaoapassiva"),
    fNatureza: varchar("f_natureza"),
    fAcao: varchar("f_acao"),
    fValorcausa: numeric("f_valorcausa", { mode: "number" }),
    fPossibilidadeperda: varchar("f_possibilidadeperda"),
    fValordespesaprocesso: numeric("f_valordespesaprocesso", {
      mode: "number",
    }),
    fDatadistribuicao: date("f_datadistribuicao"),
    fDataliminardeferida: date("f_dataliminardeferida"),
    fStatusliminar: varchar("f_statusliminar"),
    fDatadepositojudicial: date("f_datadepositojudicial"),
    fValordepositojudicial: numeric("f_valordepositojudicial", {
      mode: "number",
    }),
    fDescricaocaucao: varchar("f_descricaocaucao"),
    fDatacitacao: date("f_datacitacao"),
    fDatacontestacao: date("f_datacontestacao"),
    fAcionamento: varchar("f_acionamento"),
    fResultadosentenca: varchar("f_resultadosentenca"),
    fDatasentenca: date("f_datasentenca"),
    fNumeroapelacao: varchar("f_numeroapelacao"),
    fDataapelacao: date("f_dataapelacao"),
    fApelacaodequem: varchar("f_apelacaodequem"),
    fResultadoapelacao: varchar("f_resultadoapelacao"),
    fDataconversaoexecucao: date("f_dataconversaoexecucao"),
    fDataaverbacaoexecucao: date("f_dataaverbacaoexecucao"),
    fDataregistropenhora: date("f_dataregistropenhora"),
    fDescricaopenhorado: varchar("f_descricaopenhorado"),
    fDataembargosexecucao: date("f_dataembargosexecucao"),
    fValorcreditorecuperado: numeric("f_valorcreditorecuperado", {
      mode: "number",
    }),
    fDataresp: date("f_dataresp"),
    fResultadoresp: varchar("f_resultadoresp"),
    fResultadofinaltransito: varchar("f_resultadofinaltransito"),
    fDatatransitojulgado: date("f_datatransitojulgado"),
    fFaseprocessualpassiva: varchar("f_faseprocessualpassiva"),
    fGrauatual: varchar("f_grauatual"),
    fObservacoes: varchar("f_observacoes"),
    fPartere: varchar("f_partere"),
    fNumeroagravo: varchar("f_numeroagravo"),
    fDatesgravo: varchar("f_datesgravo"),
    fDataexpedicaomandado: date("f_dataexpedicaomandado"),
    fDataleilaoaprazado: date("f_dataleilaoaprazado"),
    fDatarecuperacao: date("f_datarecuperacao"),
    fRegiao: varchar("f_regiao"),
    fValoracordo: numeric("f_valoracordo", { mode: "number" }),
    fValoravista: numeric("f_valoravista", { mode: "number" }),
    fValorareceber: numeric("f_valorareceber", { mode: "number" }),
    fNumeroparcelas: integer("f_numeroparcelas"),
    fDatareintegracao: date("f_datareintegracao"),
    fProcessatvext: varchar("f_processatvext"),
    fDataacordo: date("f_dataacordo"),
    fPrint: smallint("f_print").default(1).notNull(),
    fParterecpf: varchar("f_parterecpf"),
    fPesquisabens: varchar("f_pesquisabens"),
    fClassificacaoimovel: varchar("f_classificacaoimovel"),
    fDatainclusaotemplate: date("f_datainclusaotemplate"),
    fStatusacordo: varchar("f_statusacordo"),
    fDataextincao: date("f_dataextincao"),
    fLiminar: varchar("f_liminar"),
    fCumprimentomandado: varchar("f_cumprimentomandado"),
    fDesccumprimentomandado: varchar("f_desccumprimentomandado"),
    fDatacumprimentomandado: date("f_datacumprimentomandado"),
    fDataultimoandamento: date("f_dataultimoandamento"),
    fStatusminuta: varchar("f_statusminuta"),
    fResponsavelacordo: varchar("f_responsavelacordo"),
    fProcessoexcluido: varchar("f_processoexcluido"),
    fDataexclusao: date("f_dataexclusao"),
    fAndamentojaneiro: varchar("f_andamentojaneiro"),
    fAndamentofevereiro: varchar("f_andamentofevereiro"),
    fAndamentomarco: varchar("f_andamentomarco"),
    fAndamentoabril: varchar("f_andamentoabril"),
    fAndamentomaio: varchar("f_andamentomaio"),
    fAndamentojunho: varchar("f_andamentojunho"),
    fAndamentojulho: varchar("f_andamentojulho"),
    fAndamentoagosto: varchar("f_andamentoagosto"),
    fAndamentosetembro: varchar("f_andamentosetembro"),
    fAndamentooutubro: varchar("f_andamentooutubro"),
    fAndamentonovembro: varchar("f_andamentonovembro"),
    fAndamentodezembro: varchar("f_andamentodezembro"),
    fAnocontrato: varchar("f_anocontrato"),
    fAndamentojaneiro2013: varchar("f_andamentojaneiro2013"),
    fAndamentofevereiro2013: varchar("f_andamentofevereiro2013"),
    fAndamentomarco2013: varchar("f_andamentomarco2013"),
    fAndamentoabril2013: varchar("f_andamentoabril2013"),
    fAndamentomaio2013: varchar("f_andamentomaio2013"),
    fAndamentojunho2013: varchar("f_andamentojunho2013"),
    fAndamentojulho2013: varchar("f_andamentojulho2013"),
    fAndamentoagosto2013: varchar("f_andamentoagosto2013"),
    fAndamentosetembro2013: varchar("f_andamentosetembro2013"),
    fAndamentooutubro2013: varchar("f_andamentooutubro2013"),
    fAndamentonovembro2013: varchar("f_andamentonovembro2013"),
    fAndamentodezembro2013: varchar("f_andamentodezembro2013"),
    fAndamentojaneiro2014: varchar("f_andamentojaneiro2014"),
    fAndamentofevereiro2014: varchar("f_andamentofevereiro2014"),
    fAndamentomarco2014: varchar("f_andamentomarco2014"),
    fAndamentoabril2014: varchar("f_andamentoabril2014"),
    fAndamentomaio2014: varchar("f_andamentomaio2014"),
    fAndamentojunho2014: varchar("f_andamentojunho2014"),
    fAndamentojulho2014: varchar("f_andamentojulho2014"),
    fAndamentoagosto2014: varchar("f_andamentoagosto2014"),
    fAndamentosetembro2014: varchar("f_andamentosetembro2014"),
    fAndamentooutubro2014: varchar("f_andamentooutubro2014"),
    fAndamentonovembro2014: varchar("f_andamentonovembro2014"),
    fAndamentodezembro2014: varchar("f_andamentodezembro2014"),
  },
  (table) => [
    index("managementinformation_ative_dll_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const managementinformationAtiveDupDll = pgTable(
  "managementinformation_ative_dup_dll",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fEquipamento: varchar("f_equipamento"),
    fOperacao: varchar("f_operacao"),
    fNumeroserie: varchar("f_numeroserie"),
    fIdentificacao: varchar("f_identificacao"),
    fGarantiaadicional: varchar("f_garantiaadicional"),
    fValoreconomico: numeric("f_valoreconomico", { mode: "number" }),
    fDataapreensao: date("f_dataapreensao"),
    fDatanaolocalizado: date("f_datanaolocalizado"),
    fDatadevolucaodeposito: date("f_datadevolucaodeposito"),
    fDataliberadovenda: date("f_dataliberadovenda"),
    fSituacaoequipamento: varchar("f_situacaoequipamento"),
    fComprovacaomora: varchar("f_comprovacaomora"),
    fConcessionaria: varchar("f_concessionaria"),
    fStlt: varchar("f_stlt", { length: 2 }),
    fPrint: smallint("f_print").default(1).notNull(),
    fUnidadenegocio: varchar("f_unidadenegocio"),
  },
  (table) => [
    index("managementinformation_ative_dup_dll_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const managementinformationAtiveGarantiamovelDll = pgTable(
  "managementinformation_ative_garantiamovel_dll",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDupid: integer("f_dupid").notNull(),
    fEquipamentogarantia: varchar("f_equipamentogarantia"),
    fNumeroseriegarantia: varchar("f_numeroseriegarantia"),
    fIdentificacaogarantia: varchar("f_identificacaogarantia"),
  },
  (table) => [
    index("managementinformation_ative_garantiamovel_dll_idx").using(
      "btree",
      table.fDupid.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const managementinformationLogs = pgTable(
  "managementinformation_logs",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fUser: integer("f_user"),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow().notNull(),
    fLog: varchar("f_log"),
  },
  (table) => [
    index("managementinformation_logs_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const managementinformationPassiveDll = pgTable(
  "managementinformation_passive_dll",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fNumber: varchar("f_number"),
    fCnj: varchar("f_cnj"),
    fAutor: varchar("f_autor"),
    fEscritorioadverso: varchar("f_escritorioadverso"),
    fComarca: varchar("f_comarca"),
    fUf: varchar("f_uf"),
    fVara: varchar("f_vara"),
    fAcaoativa: varchar("f_acaoativa"),
    fNatureza: varchar("f_natureza"),
    fAcao: varchar("f_acao"),
    fValorcausa: numeric("f_valorcausa", { mode: "number" }).notNull(),
    fValoreconomico: numeric("f_valoreconomico", { mode: "number" }).notNull(),
    fPossibilidadeperda: varchar("f_possibilidadeperda"),
    fValordespesaprocesso: numeric("f_valordespesaprocesso", {
      mode: "number",
    }).notNull(),
    fDatarecebimento: date("f_datarecebimento"),
    fDataliminardeferida: date("f_dataliminardeferida"),
    fEspecierestricao: varchar("f_especierestricao"),
    fDescricaoliminaracao: varchar("f_descricaoliminaracao"),
    fStatusliminar: varchar("f_statusliminar"),
    fDatadepositojudicial: date("f_datadepositojudicial"),
    fValordepositojudicial: numeric("f_valordepositojudicial", {
      mode: "number",
    }).notNull(),
    fDescricaocaucao: varchar("f_descricaocaucao"),
    fDatacitacao: date("f_datacitacao"),
    fDatacontestacao: date("f_datacontestacao"),
    fAcionamento: varchar("f_acionamento"),
    fResultadosentenca: varchar("f_resultadosentenca"),
    fDatasentenca: date("f_datasentenca"),
    fNumeroapelacao: varchar("f_numeroapelacao"),
    fDataapelacao: date("f_dataapelacao"),
    fApelacaodequem: varchar("f_apelacaodequem"),
    fResultadoapelacao: varchar("f_resultadoapelacao"),
    fDataresp: date("f_dataresp"),
    fResultadoresp: varchar("f_resultadoresp"),
    fResultadofinaltransito: varchar("f_resultadofinaltransito"),
    fDatatransitojulgado: date("f_datatransitojulgado"),
    fFaseprocessualpassiva: varchar("f_faseprocessualpassiva"),
    fGrauatual: varchar("f_grauatual"),
    fObservacoes: varchar("f_observacoes"),
    fPartere: varchar("f_partere"),
    fNumeroagravo: varchar("f_numeroagravo"),
    fDatesgravo: varchar("f_datesgravo"),
    fRegiao: varchar("f_regiao"),
    fValorriscoacao: numeric("f_valorriscoacao", { mode: "number" }),
    fValoracordo: numeric("f_valoracordo", { mode: "number" }),
    fValoravista: numeric("f_valoravista", { mode: "number" }),
    fValorareceber: numeric("f_valorareceber", { mode: "number" }),
    fNumeroparcelas: integer("f_numeroparcelas"),
    fDataacordo: date("f_dataacordo"),
    fPrint: smallint("f_print").default(1).notNull(),
    fStlt: varchar("f_stlt"),
    fDatainclusaotemplate: date("f_datainclusaotemplate"),
    fStatusacordo: varchar("f_statusacordo"),
    fProcessatvext: varchar("f_processatvext"),
    fDataextincao: date("f_dataextincao"),
    fStatusminuta: varchar("f_statusminuta"),
    fResponsavelacordo: varchar("f_responsavelacordo"),
    fDataultimoandamento: date("f_dataultimoandamento"),
    fProcessoexcluido: varchar("f_processoexcluido"),
    fDataexclusao: date("f_dataexclusao"),
    fAndamentojaneiro: varchar("f_andamentojaneiro"),
    fAndamentofevereiro: varchar("f_andamentofevereiro"),
    fAndamentomarco: varchar("f_andamentomarco"),
    fAndamentoabril: varchar("f_andamentoabril"),
    fAndamentomaio: varchar("f_andamentomaio"),
    fAndamentojunho: varchar("f_andamentojunho"),
    fAndamentojulho: varchar("f_andamentojulho"),
    fAndamentoagosto: varchar("f_andamentoagosto"),
    fAndamentosetembro: varchar("f_andamentosetembro"),
    fAndamentooutubro: varchar("f_andamentooutubro"),
    fAndamentonovembro: varchar("f_andamentonovembro"),
    fAndamentodezembro: varchar("f_andamentodezembro"),
    fAndamentojaneiro2013: varchar("f_andamentojaneiro2013"),
    fAndamentofevereiro2013: varchar("f_andamentofevereiro2013"),
    fAndamentomarco2013: varchar("f_andamentomarco2013"),
    fAndamentoabril2013: varchar("f_andamentoabril2013"),
    fAndamentomaio2013: varchar("f_andamentomaio2013"),
    fAndamentojunho2013: varchar("f_andamentojunho2013"),
    fAndamentojulho2013: varchar("f_andamentojulho2013"),
    fJustificativaprovisao: varchar("f_justificativaprovisao"),
    fDatarecuperacaojudicial: date("f_datarecuperacaojudicial"),
    fRespdequem: varchar("f_respdequem"),
    fAnocontrato: varchar("f_anocontrato"),
    fAndamentoagosto2013: varchar("f_andamentoagosto2013"),
    fAndamentosetembro2013: varchar("f_andamentosetembro2013"),
    fAndamentooutubro2013: varchar("f_andamentooutubro2013"),
    fAndamentonovembro2013: varchar("f_andamentonovembro2013"),
    fAndamentodezembro2013: varchar("f_andamentodezembro2013"),
    fDatadistribuicao: date("f_datadistribuicao"),
  },
  (table) => [
    index("managementinformation_passive_dll__idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const managementinformationPassiveDupDll = pgTable(
  "managementinformation_passive_dup_dll",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fOperacao: varchar("f_operacao"),
    fPrint: smallint("f_print").default(1).notNull(),
  },
  (table) => [
    index("managementinformation_passive_dup_dll_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const monetaryIndices = pgTable(
  "monetary_indices",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name").notNull(),
    fActive: smallint("f_active").default(1).notNull(),
    fDataminima: date("f_dataminima").notNull(),
  },
  (table) => [
    index("monetary_indices_idx").using(
      "btree",
      table.fDataminima.asc().nullsLast().op("date_ops"),
    ),
  ],
)

export const logisticusers = pgTable(
  "logisticusers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).primaryKey().notNull(),
  },
  (table) => [
    index("IX_r_180").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_180",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const monetaryMoeda = pgTable(
  "monetary_moeda",
  {
    fUdmonetaria: varchar("f_udmonetaria", { length: 20 }),
    fAnoMesold: varchar("f_ano_mesold", { length: 20 }),
    fFatorConversao: doublePrecision("f_fator_conversao"),
    fAnoMes: numeric("f_ano_mes", { precision: 10, scale: 0 }),
  },
  (table) => [
    index("monetary_moeda_idx").using(
      "btree",
      table.fAnoMesold.asc().nullsLast().op("text_ops"),
    ),
    index("monetary_moeda_idx1").using(
      "btree",
      table.fAnoMes.asc().nullsLast().op("numeric_ops"),
    ),
  ],
)

export const monetaryTaxaindice = pgTable(
  "monetary_taxaindice",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIndice: integer("f_indice").notNull(),
    fTaxaValor: doublePrecision("f_taxa_valor").default(0).notNull(),
    fAnoMes: numeric("f_ano_mes", { precision: 10, scale: 0 }),
  },
  (table) => [
    index("monetary_taxaindice_idx").using(
      "btree",
      table.fIndice.asc().nullsLast().op("int4_ops"),
    ),
    index("monetary_taxaindice_idx2").using(
      "btree",
      table.fAnoMes.asc().nullsLast().op("numeric_ops"),
    ),
    foreignKey({
      columns: [table.fIndice],
      foreignColumns: [monetaryIndices.fId],
      name: "monetary_taxaindice_fk",
    }).onDelete("cascade"),
    unique("uc_monetary_taxaindice").on(table.fIndice, table.fAnoMes),
  ],
)

export const monetaryCalc = pgTable(
  "monetary_calc",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client").notNull(),
    fProcess: integer("f_process").notNull(),
    fIndice: integer("f_indice").notNull(),
    fDescricao: varchar("f_descricao"),
    fMulta: numeric("f_multa", { mode: "number" }),
    fHonorarios: numeric("f_honorarios", { mode: "number" }),
    fJurosAnual: numeric("f_juros_anual", { mode: "number" }),
    fJuroslegais: numeric("f_juroslegais", { mode: "number" }),
    fJuroscompostos: integer("f_juroscompostos"),
    fDeduziramortizacao: integer("f_deduziramortizacao"),
    fCreateDate: date("f_create_date"),
    fUser: integer("f_user"),
  },
  (table) => [
    index("monetary_calc_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("monetary_calc_idx1").using(
      "btree",
      table.fIndice.asc().nullsLast().op("int4_ops"),
    ),
    index("monetary_calc_idx2").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const objecttypes = pgTable("objecttypes", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fId: bigint("f_id", { mode: "number" })
    .default(sql`nextval('objecttypes_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: text("f_name").notNull(),
  fStatus: smallint("f_status").default(1).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fArea: bigint("f_area", { mode: "number" }),
})

export const partner = pgTable("partner", {
  fId: integer("f_id")
    .default(sql`nextval('partner_f_id_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name", { length: 20 }).notNull(),
})

export const origin = pgTable("origin", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name"),
})

export const nonconformingtypes = pgTable("nonconformingtypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
  fDescription: text("f_description"),
  fReopen: boolean("f_reopen"),
})

export const overallstats = pgTable("overallstats", {
  fId: integer("f_id").notNull(),
  fTotalprocess: integer("f_totalprocess"),
  fTotalhearings: integer("f_totalhearings"),
  fTotalappointments: integer("f_totalappointments"),
  fTotallostappointments: integer("f_totallostappointments"),
  fThismonthhearings: integer("f_thismonthhearings"),
  fThismonthappointments: integer("f_thismonthappointments"),
  fThismonthlostappointments: integer("f_thismonthlostappointments"),
  fLastmonthhearings: integer("f_lastmonthhearings"),
  fLastmonthappointments: integer("f_lastmonthappointments"),
  fLastmonthlostappointments: integer("f_lastmonthlostappointments"),
  fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
})

export const panel = pgTable("panel", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fId: bigint("f_id", { mode: "number" })
    .default(sql`nextval('panel_f_id_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fLevel: bigint("f_level", { mode: "number" }),
  fName: varchar("f_name"),
  fUrl: varchar("f_url"),
  fCons: varchar("f_cons"),
  fStatus: varchar("f_status"),
})

export const parecerOrientativo = pgTable("parecer_orientativo", {
  fId: serial("f_id").primaryKey().notNull(),
  fProcess: integer("f_process"),
  fUser: integer("f_user"),
  fDate: date("f_date").defaultNow(),
  fSeguradora: varchar("f_seguradora"),
  fSinistroAdm: varchar("f_sinistro_adm"),
  fSinistroJud: varchar("f_sinistro_jud"),
  fVitima: varchar("f_vitima"),
  fDomicilioAutor: varchar("f_domicilio_autor"),
  fTipoVeiculo: varchar("f_tipo_veiculo"),
  fAnoVeiculo: varchar("f_ano_veiculo"),
  fPlacaVeiculo: varchar("f_placa_veiculo"),
  fDataCitacao: date("f_data_citacao"),
  fDataSinistro: date("f_data_sinistro"),
  fObjeto: varchar("f_objeto"),
  fDataPagAdm: date("f_data_pag_adm"),
  fValorPagAdm: numeric("f_valor_pag_adm", { mode: "number" }),
  fLesaoViaAdm: text("f_lesao_via_adm"),
  fParecerConciliacao: varchar("f_parecer_conciliacao"),
  fPericiaJud: varchar("f_pericia_jud"),
  fParticipaMutiraoJud: varchar("f_participa_mutirao_jud"),
  fParticipaMutiraoJudObs: text("f_participa_mutirao_jud_obs"),
  fLaudoDisponivel: varchar("f_laudo_disponivel"),
  fGrauLaudo: varchar("f_grau_laudo"),
  fGrauMaximo: varchar("f_grau_maximo"),
  fAvaliacaoCampanha: varchar("f_avaliacao_campanha"),
  fAvaliacaoCampanhaObs: text("f_avaliacao_campanha_obs"),
  fLaudoDisponivel2: varchar("f_laudo_disponivel2"),
  fGrauLaudo2: varchar("f_grau_laudo2"),
  fGrauMaximo2: varchar("f_grau_maximo2"),
  fHonorarioDepositado: varchar("f_honorario_depositado"),
  fValorPedido: numeric("f_valor_pedido", { mode: "number" }),
  fBoletimPessoal: varchar("f_boletim_pessoal"),
  fSinistroAnterior: varchar("f_sinistro_anterior"),
  fSinitroAnteriorObs: text("f_sinitro_anterior_obs"),
  fSentenca: varchar("f_sentenca"),
  fSentencaObs: text("f_sentenca_obs"),
  fTeseSentenca: varchar("f_tese_sentenca"),
  fValorCondenacao: varchar("f_valor_condenacao"),
  fDecisao2Grau: varchar("f_decisao_2grau"),
  fDecisao2GrauObs: varchar("f_decisao_2grau_obs"),
  fRecursoAutor: varchar("f_recurso_autor"),
  fRecursoReu: varchar("f_recurso_reu"),
  fRespSeguradora: text("f_resp_seguradora"),
  fPagJudicial: text("f_pag_judicial"),
  fAptoAcordo: varchar("f_apto_acordo"),
  fAptoAcordoObs: varchar("f_apto_acordo_obs"),
  fMotivoNaoApto: varchar("f_motivo_nao_apto"),
  fAdvImpedido: varchar("f_adv_impedido"),
  fRegulacao0: varchar("f_regulacao0"),
  fObservacoes: text("f_observacoes"),
  fParecerInformativo: varchar("f_parecer_informativo"),
  fProcessAdm: varchar("f_process_adm"),
  fAutorIncapaz: varchar("f_autor_incapaz"),
  fInstancia: varchar("f_instancia"),
  fEmpresaMedica: varchar("f_empresa_medica"),
  fPrognostico: varchar("f_prognostico"),
})

export const perfilConsultation = pgTable("perfil_consultation", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 255 }).notNull(),
  fStatus: integer("f_status").default(1).notNull(),
})

export const perfilDados = pgTable(
  "perfil_dados",
  {
    fId: integer("f_id")
      .default(sql`nextval('seq_perfil_dados'::regclass)`)
      .primaryKey()
      .notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fCod: integer("f_cod"),
    fType: char("f_type", { length: 3 }),
    fDate: date("f_date").defaultNow().notNull(),
    fClient: integer("f_client"),
    fState: integer("f_state"),
    fArea: integer("f_area"),
  },
  (table) => [
    index("perfil_dados_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
      table.fType.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_dados_idx1").using(
      "btree",
      table.fType.asc().nullsLast().op("bpchar_ops"),
    ),
    index("perfil_dados_idx2").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_dados_idx3").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
      table.fCod.asc().nullsLast().op("int4_ops"),
      table.fType.asc().nullsLast().op("bpchar_ops"),
    ),
  ],
)

export const perfilDadosBilling = pgTable(
  "perfil_dados_billing",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fCod: integer("f_cod"),
    fType: char("f_type", { length: 3 }),
    fDate: date("f_date").defaultNow().notNull(),
    fClient: integer("f_client"),
    fState: integer("f_state"),
    fArea: integer("f_area"),
  },
  (table) => [
    index("perfil_dados_billing_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_dados_billing_idx1").using(
      "btree",
      table.fType.asc().nullsLast().op("bpchar_ops"),
    ),
  ],
)

export const observationshistory = pgTable(
  "observationshistory",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('observationshistory_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    fDatetime: timestamp("f_datetime", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUserId: bigint("f_user_id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fThemeId: bigint("f_theme_id", { mode: "number" }).notNull(),
    fTitle: varchar("f_title", { length: 100 }),
    fDescription: varchar("f_description", { length: 1000 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClientId: bigint("f_client_id", { mode: "number" }).notNull(),
    fSendemail: smallint("f_sendemail"),
    fSentemail: smallint("f_sentemail"),
  },
  (table) => [
    index("idx_observationshistory_f_client_id_clients_f_id").using(
      "btree",
      table.fClientId.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fClientId],
      foreignColumns: [clients.fId],
      name: "fk_observationshistory_f_client_id_clients_f_id",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fThemeId],
      foreignColumns: [themes.fId],
      name: "observationshistory_f_theme_id_fkey",
    }),
    foreignKey({
      columns: [table.fUserId],
      foreignColumns: [users.fId],
      name: "observationshistory_f_user_id_fkey",
    }),
  ],
)

export const perfilConsultationDados = pgTable(
  "perfil_consultation_dados",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPerfil: integer("f_perfil").notNull(),
    fUser: integer("f_user").notNull(),
  },
  (table) => [
    index("perfil_consultation_dados_f_perfil_idx").using(
      "btree",
      table.fPerfil.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("perfil_consultation_dados_idx").using(
      "btree",
      table.fPerfil.asc().nullsLast().op("int4_ops"),
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fPerfil],
      foreignColumns: [perfilConsultation.fId],
      name: "perfil_consultation_dados_fk",
    }).onDelete("cascade"),
  ],
)

export const offices = pgTable(
  "offices",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fState: bigint("f_state", { mode: "number" }),
    fName: text("f_name").notNull(),
    fStreet: text("f_street"),
    fBurgh: text("f_burgh"),
    fCity: text("f_city"),
    fZipcode: varchar("f_zipcode", { length: 20 }),
    fPhone: text("f_phone"),
    fFax: text("f_fax"),
    fExternal: boolean("f_external"),
    fStatus: integer("f_status").default(1),
  },
  (table) => [
    index("IX_r_18").using(
      "btree",
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "r_18",
    }),
  ],
)

export const perfilInfo = pgTable(
  "perfil_info",
  {
    fId: integer("f_id")
      .default(sql`nextval('seq_perfil_info'::regclass)`)
      .primaryKey()
      .notNull(),
    fNome: varchar("f_nome", { length: 200 }),
    fDate: date("f_date").defaultNow().notNull(),
    fActive: integer("f_active").default(1).notNull(),
  },
  (table) => [
    index("perfil_info_idx").using(
      "btree",
      table.fActive.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilInfoBilling = pgTable(
  "perfil_info_billing",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fNome: varchar("f_nome", { length: 200 }),
    fDate: date("f_date").defaultNow().notNull(),
    fActive: integer("f_active"),
  },
  (table) => [
    index("perfil_info_billing_idx").using(
      "btree",
      table.fActive.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilPrincipalAdv = pgTable(
  "perfil_principal_adv",
  {
    fId: integer("f_id")
      .default(sql`nextval('seq_perfil_adv'::regclass)`)
      .primaryKey()
      .notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fLawyer: integer("f_lawyer").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
  },
  (table) => [
    index("perfil_principal_adv_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_principal_adv_idx1").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_principal_adv_idx2").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilPrincipalBilling = pgTable(
  "perfil_principal_billing",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
  },
  (table) => [
    index("perfil_principal_billing_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilProcessInfo = pgTable(
  "perfil_process_info",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fNome: varchar("f_nome", { length: 200 }),
    fDate: date("f_date").defaultNow().notNull(),
    fActive: integer("f_active").default(1).notNull(),
  },
  (table) => [
    index("perfil_process_info_idx").using(
      "btree",
      table.fActive.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilProcessPrincipalAdv = pgTable(
  "perfil_process_principal_adv",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fUserAdv: integer("f_user_adv"),
  },
  (table) => [
    index("perfil_process_principal_adv_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_process_principal_adv_idx1").using(
      "btree",
      table.fUserAdv.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_process_principal_adv_idx2").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
      table.fUserAdv.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const perfilUserNote = pgTable(
  "perfil_user_note",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fUser: integer("f_user").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fAdmin: smallint("f_admin").default(0).notNull(),
    fAba: integer("f_aba").default(0).notNull(),
    fClient: integer("f_client").default(0).notNull(),
    fState: integer("f_state").default(0).notNull(),
    fArea: integer("f_area").default(0).notNull(),
    fLawyer: integer("f_lawyer").default(0).notNull(),
    fClientName: varchar("f_client_name", { length: 100 }),
  },
  (table) => [
    index("perfil_user_note_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const proceedingtypes = pgTable(
  "proceedingtypes",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    fComments: text("f_comments").notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("IX_r_108").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("proceedingtypes_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_108",
    }),
    unique("proceedingtypes_f_name_f_area_unique").on(table.fName, table.fArea),
  ],
)

export const pgmfavorites = pgTable("pgmfavorites", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "number" })
    .default(sql`nextval('pgmfavorites_seq_id'::regclass)`)
    .primaryKey()
    .notNull(),
  favName: text("fav_name"),
  favSource: text("fav_source"),
  favPath: text("fav_path"),
})

export const permitsreceived = pgTable(
  "permitsreceived",
  {
    fId: serial("f_id").notNull(),
    fProcess: integer("f_process"),
    fValue: numeric("f_value", { mode: "number" }),
    fMotivo: varchar("f_motivo", { length: 100 }),
    fRepasseClient: varchar("f_repasse_client", { length: 100 }),
    fDateRepasse: date("f_date_repasse"),
    fRepasseValue: numeric("f_repasse_value", { mode: "number" }),
    fCreateUser: integer("f_create_user").notNull(),
    fStatus: varchar("f_status", { length: 60 }),
    fFavorecido: varchar("f_favorecido", { length: 255 }),
    fNome: varchar("f_nome", { length: 255 }),
    fAgencia: varchar("f_agencia", { length: 255 }),
    fConta: varchar("f_conta", { length: 50 }),
    fCnpjFavorecido: varchar("f_cnpj_favorecido", { length: 50 }),
    fReterValor: varchar("f_reter_valor", { length: 50 }),
    fData: date("f_data"),
    fSacadoAlvara: varchar("f_sacado_alvara", { length: 100 }),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("permitsreceived_idx").using(
      "btree",
      table.fId.asc().nullsLast().op("int4_ops"),
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_f_create_user",
    }),
  ],
)

export const postclientcentercost = pgTable(
  "postclientcentercost",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPostcostcenter: integer("f_postcostcenter").notNull(),
    fClient: integer("f_client").notNull(),
  },
  (table) => [
    uniqueIndex("postclientcentercost_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const postcostcenter = pgTable("postcostcenter", {
  fId: integer("f_id").notNull(),
  fName: varchar("f_name").notNull(),
})

export const perfilProcessDados = pgTable(
  "perfil_process_dados",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdPerfil: integer("f_id_perfil").notNull(),
    fType: char("f_type", { length: 3 }),
    fDate: date("f_date").defaultNow().notNull(),
    fClient: integer("f_client"),
    fState: integer("f_state"),
    fArea: integer("f_area"),
    fSubarea: integer("f_subarea"),
    fRuletype: integer("f_ruletype").default(1).notNull(),
    fRelevant: integer("f_relevant"),
    fLawyer: integer("f_lawyer"),
  },
  (table) => [
    index("perfil_process_dados_idx").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("bpchar_ops"),
      table.fType.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_process_dados_idx1").using(
      "btree",
      table.fIdPerfil.asc().nullsLast().op("int4_ops"),
    ),
    index("perfil_process_dados_idx2").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fArea.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "perfil_process_dados_fk",
    }),
  ],
)

export const phases = pgTable("phases", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
  fStatus: smallint("f_status").default(1),
})

export const proceedingtypesagreements = pgTable("proceedingtypesagreements", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fStatus: smallint("f_status").default(1).notNull(),
})

export const processProblem = pgTable(
  "process_problem",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fUser: integer("f_user").notNull(),
    fProblem: integer("f_problem").notNull(),
    fProvidence: integer("f_providence").notNull(),
    fSolution: integer("f_solution"),
    fDateCreated: date("f_date_created").defaultNow().notNull(),
    fDateFinish: date("f_date_finish"),
    fStatus: smallint("f_status").default(0).notNull(),
    fDescProblem: varchar("f_desc_problem", { length: 100 }),
    fDescProvidence: varchar("f_desc_providence", { length: 100 }),
    fDescSolution: varchar("f_desc_solution", { length: 100 }),
  },
  (table) => [
    index("process_problem_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processProblemProvidence = pgTable(
  "process_problem_providence",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 50 }).notNull(),
    fType: smallint("f_type").notNull(),
    fActive: integer("f_active").default(1).notNull(),
  },
  (table) => [
    index("process_problem_providence_idx").using(
      "btree",
      table.fType.asc().nullsLast().op("int2_ops"),
    ),
  ],
)

export const processReactivationLog = pgTable(
  "process_reactivation_log",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClosereason: bigint("f_closereason", { mode: "number" }),
    fCloseComments: text("f_close_comments"),
    fEndvalue: numeric("f_endvalue", { mode: "number" }),
    fCloseDate: timestamp("f_close_date", { mode: "string" }),
    fSucumbencia: numeric("f_sucumbencia", { mode: "number" }),
    fAjg: smallint("f_ajg"),
    fCloseDatePartial: date("f_close_date_partial"),
    fDateReactivation: timestamp("f_date_reactivation", { mode: "string" }),
    fUserClosed: integer("f_user_closed"),
    fUserReactive: integer("f_user_reactive"),
  },
  (table) => [
    index("process_reactivation_log_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("process_reactivation_log_idx1").using(
      "btree",
      table.fUserClosed.asc().nullsLast().op("int4_ops"),
    ),
    index("process_reactivation_log_idx2").using(
      "btree",
      table.fUserReactive.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processmonitoredlogs = pgTable(
  "processmonitoredlogs",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fType: smallint("f_type").notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fDescription: text("f_description").notNull(),
  },
  (table) => [
    index("idx_processmonitoredlogs_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_processmonitoredlogs_process").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_create_user",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "fk_process",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "processmonitoredlogs_f_create_user_fkey",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "processmonitoredlogs_f_process_fkey",
    }).onDelete("restrict"),
    check(
      "processmonitoredlogs_f_type_check",
      sql`f_type = ANY (ARRAY[1, 2, 3])`,
    ),
  ],
)

export const processactionobjectsHistories = pgTable(
  "processactionobjects_histories",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fObject: integer("f_object").notNull(),
    fValue: numeric("f_value", { mode: "number" }).notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fIntimationType: integer("f_intimation_type"),
    fType: varchar("f_type", { length: 80 }),
    fLastvalue: numeric("f_lastvalue", { precision: 20, scale: 2 }),
    fObservation: varchar("f_observation", { length: 350 }),
    fStatus: varchar("f_status", { length: 80 }),
    fProbability: varchar("f_probability", { length: 80 }),
  },
  (table) => [
    index("idx_processactionobjects_histories_f_object").using(
      "btree",
      table.fObject.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_processactionobjects_histories_f_process").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processactionobjects = pgTable(
  "processactionobjects",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActionobject: bigint("f_actionobject", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    fId: integer("f_id")
      .default(sql`nextval('processactionobjects_seq'::regclass)`)
      .primaryKey()
      .notNull(),
  },
  (table) => [
    index("IX_r_93").using(
      "btree",
      table.fActionobject.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_94").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("processactionobjects_f_process_f_actionobject_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
      table.fActionobject.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fActionobject],
      foreignColumns: [actionobjects.fId],
      name: "r_93",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_94",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const processeletronictype = pgTable("processeletronictype", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 255 }),
})

export const processeventcontrol = pgTable(
  "processeventcontrol",
  {
    fId: integer("f_id")
      .default(
        sql`nextval(('"public"."processeventcontrol_f_id_seq"'::text)::regclass)`,
      )
      .primaryKey()
      .notNull(),
    fProcess: integer("f_process").notNull(),
    fDateUpdate: timestamp("f_date_update", { mode: "string" }).notNull(),
    fEventid: integer("f_eventid").notNull(),
    fActive: smallint("f_active"),
    fComent: varchar("f_coment"),
    fFilename: varchar("f_filename", { length: 300 }),
    fFile: varchar("f_file"),
    fFiletype: integer("f_filetype"),
  },
  (table) => [
    index("processeventcontrol_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("processeventcontrol_idx1").using(
      "btree",
      table.fDateUpdate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("processeventcontrol_idx2").using(
      "btree",
      table.fActive.asc().nullsLast().op("int2_ops"),
    ),
    index("processeventcontrol_idx3").using(
      "btree",
      table.fEventid.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processlinked = pgTable(
  "processlinked",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fProcesslinked: integer("f_processlinked"),
  },
  (table) => [
    uniqueIndex("processlinked_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fProcesslinked.asc().nullsLast().op("int4_ops"),
    ),
    index("processlinked_idx1").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("processlinked_idx2").using(
      "btree",
      table.fProcesslinked.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processstoped = pgTable("processstoped", {
  fProcess: integer("f_process"),
})

export const processedDocument = pgTable(
  "processed_document",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" })
      .default(sql`nextval('seq_processed_document'::regclass)`)
      .primaryKey()
      .notNull(),
    idDocumentInt: text("id_document_int").notNull(),
    processedAt: timestamp("processed_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDocumentQueue: bigint("id_document_queue", { mode: "number" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.idDocumentQueue],
      foreignColumns: [documentQueue.id],
      name: "fk_processed_document_document_queue",
    }).onDelete("cascade"),
  ],
)

export const processualanalysis = pgTable(
  "processualanalysis",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fInserted: timestamp("f_inserted", { mode: "string" })
      .defaultNow()
      .notNull(),
    fProcess: integer("f_process").notNull(),
    fUser: integer("f_user").notNull(),
    fResume: text("f_resume"),
    fObject: text("f_object"),
    fLiminar: varchar("f_liminar", { length: 200 }),
    fObrigacoes: text("f_obrigacoes"),
    fPrazo: date("f_prazo"),
    fLitisconsorcio: varchar("f_litisconsorcio", { length: 200 }),
    fDateDanoso: date("f_date_danoso"),
    fDateCitacao: date("f_date_citacao"),
    fPedidoDanoMoral: varchar("f_pedido_dano_moral"),
    fDanoMoral: varchar("f_dano_moral", { length: 200 }),
    fTipoDecisao: varchar("f_tipo_decisao", { length: 200 }),
    fResultadoDecisao: varchar("f_resultado_decisao", { length: 200 }),
    fDetalheCondenacao: text("f_detalhe_condenacao"),
    fDatePublicacao: date("f_date_publicacao"),
    fValueCondenacao: numeric("f_value_condenacao", { mode: "number" }),
    fDateCalculo: date("f_date_calculo"),
    fCondenacaoSolidaria: varchar("f_condenacao_solidaria", { length: 200 }),
    fDispensaRecurso: varchar("f_dispensa_recurso", { length: 200 }),
    fNegociavel: varchar("f_negociavel", { length: 200 }),
    fPremissa: text("f_premissa"),
    fJustificativaAcordo: varchar("f_justificativa_acordo", { length: 200 }),
    fValueAlcada: numeric("f_value_alcada", { mode: "number" }),
    fObservacao: text("f_observacao"),
    fStatusNegociacao: varchar("f_status_negociacao", { length: 200 }),
    fMotivoRecusa: varchar("f_motivo_recusa"),
    fDetalhes: text("f_detalhes"),
    fDateNegociacao: date("f_date_negociacao"),
    fContraproposta: varchar("f_contraproposta", { length: 200 }),
    fValueContraproposta: numeric("f_value_contraproposta", { mode: "number" }),
    fContrapropostaEncaminhada: varchar("f_contraproposta_encaminhada", {
      length: 200,
    }),
    fStatusEncerramento: varchar("f_status_encerramento"),
    fPendenciaEncerramento: varchar("f_pendencia_encerramento"),
    fDetalhesEncerramento: text("f_detalhes_encerramento"),
    fDateEncerramento: date("f_date_encerramento"),
    fPhase: varchar("f_phase", { length: 255 }),
    fNaonegociavel: varchar("f_naonegociavel"),
    fContrapropostaAutorizada: varchar("f_contraproposta_autorizada"),
    fCumprimento: varchar("f_cumprimento", { length: 255 }),
  },
  (table) => [
    index("processualanalysis_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("processualanalysis_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const processualanalysisobjectaction = pgTable(
  "processualanalysisobjectaction",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 100 }).notNull(),
  },
)

export const propostas = pgTable(
  "propostas",
  {
    fId: integer("f_id")
      .default(sql`nextval('seq_propostas'::regclass)`)
      .primaryKey()
      .notNull(),
    fProcess: integer("f_process").notNull(),
    fDateSend: date("f_date_send").defaultNow().notNull(),
    fTitle: varchar("f_title", { length: 200 }),
    fValue: numeric("f_value", { mode: "number" }),
    fType: integer("f_type"),
    fDescription: varchar("f_description"),
    fUser: integer("f_user"),
    fDateUpdated: date("f_date_updated"),
    fStatus: integer("f_status").default(1).notNull(),
    fApprovedValue: numeric("f_approved_value", { mode: "number" }),
    fNotSubjectedClient: integer("f_not_subjected_client"),
    fClientNegative: integer("f_client_negative"),
    fApprovedBy: integer("f_approved_by"),
  },
  (table) => [
    index("propostas_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const propostasMotivosNegado = pgTable("propostas_motivos_negado", {
  fId: integer("f_id")
    .default(sql`nextval('seq_propostas_motivos_negados'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name"),
  fActive: integer("f_active").default(1).notNull(),
  fType: integer("f_type"),
})

export const profilesclients = pgTable(
  "profilesclients",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fUser: bigserial("f_user", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }).notNull(),
    fState: bigserial("f_state", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }).notNull(),
    fActive: integer("f_active").default(1).notNull(),
  },
  (table) => [
    index("profilesclients_f_client_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("profilesclients_f_state_idx").using(
      "btree",
      table.fState.asc().nullsLast().op("int8_ops"),
    ),
    index("profilesclients_idx_user").using(
      "hash",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "profilesclients_fk",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fState],
      foreignColumns: [states.fId],
      name: "profilesclients_fk_state",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "profilesclients_fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const publicationsActions = pgTable(
  "publications_actions",
  {
    fId: integer("f_id")
      .default(sql`nextval('publication_action_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    fCodlog: integer("f_codlog").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow().notNull(),
    fPublicationrelationship: integer("f_publicationrelationship"),
    fComments: text("f_comments"),
  },
  (table) => [
    index("publications_actions_idx").using(
      "btree",
      table.fPublicationrelationship.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const publicationsTemp = pgTable(
  "publications_temp",
  {
    codigo: integer()
      .default(sql`nextval('publications_temp_cod'::regclass)`)
      .primaryKey()
      .notNull(),
    codempresa: integer().default(0).notNull(),
    codadv: integer().default(0).notNull(),
    codprocesso: integer().default(0).notNull(),
    publicacao: date().notNull(),
    boletim: varchar().default("").notNull(),
    orgao: varchar(),
    vara: varchar(),
    cidade: varchar(),
    jornal: varchar().default("").notNull(),
    pagina: varchar().default("").notNull(),
    edicao: varchar().notNull(),
    ne: text().notNull(),
    datainclusao: date().default(sql`('now'`).notNull(),
    nroprocesso: varchar().notNull(),
    codInt: varchar("cod_int").notNull(),
    importado: integer().default(0).notNull(),
    status: integer().default(0).notNull(),
    fClient: integer("f_client").default(0).notNull(),
    fLawyer: integer("f_lawyer").default(0).notNull(),
    nomeAdvogado: varchar("nome_advogado"),
    fTargetType: integer("f_target_type").default(9).notNull(),
    fWarning: integer("f_warning").default(0).notNull(),
    fWarningName: varchar("f_warning_name"),
    processoPrincipal: varchar("processo_principal").default("").notNull(),
  },
  (table) => [
    index("publications_temp_idx").using(
      "btree",
      table.importado.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const publicationsDiscard = pgTable(
  "publications_discard",
  {
    fId: integer("f_id")
      .default(sql`nextval('publications_discard_id'::regclass)`)
      .primaryKey()
      .notNull(),
    fNbProcess: varchar("f_nb_process", { length: 100 }).notNull(),
    fDateInsert: date("f_date_insert").default(sql`('now'`).notNull(),
    fLawyer: integer("f_lawyer").notNull(),
    fFbProcessOld: varchar("f_fb_process_old", { length: 100 }),
    fActive: smallint("f_active").default(0).notNull(),
  },
  (table) => [
    index("publications_discard_idx_nbprocess").using(
      "btree",
      table.fNbProcess.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const publicationsInfolog = pgTable("publications_infolog", {
  fId: integer("f_id")
    .default(sql`nextval('publication_infolog_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name", { length: 150 }).notNull(),
})

export const protocolaccessusers = pgTable(
  "protocolaccessusers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).primaryKey().notNull(),
  },
  (table) => [
    index("IX_r_42").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_42",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const publications = pgTable(
  "publications",
  {
    fId: integer("f_id")
      .default(sql`nextval('publications_id'::regclass)`)
      .primaryKey()
      .notNull(),
    fDate: date("f_date"),
    fPublisher: varchar("f_publisher"),
    fPublisherDate: date("f_publisher_date").notNull(),
    fOrgao: varchar("f_orgao"),
    fVara: varchar("f_vara"),
    fCodInt: varchar("f_cod_int"),
    fClientRead: varchar("f_client_read"),
    fWarning: integer("f_warning").default(0).notNull(),
    fProcessAll: varchar("f_process_all"),
    fInserted: timestamp("f_inserted", { mode: "string" })
      .defaultNow()
      .notNull(),
    fFile: varchar("f_file"),
    fSource: varchar("f_source", { length: 30 }),
    fType: varchar("f_type", { length: 30 }),
    fPublisherDateReleased: date("f_publisher_date_released"),
    fPublisherDatePublication: date("f_publisher_date_publication"),
    fOrigem: integer("f_origem").default(1).notNull(),
    fFilter: varchar("f_filter", { length: 100 }),
    fPartner: integer("f_partner"),
  },
  (table) => [
    index("publications_idx").using(
      "btree",
      table.fPublisher.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx1").using(
      "btree",
      table.fPublisherDate.asc().nullsLast().op("date_ops"),
    ),
    index("publications_idx11").using(
      "btree",
      table.fClientRead.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx15").using(
      "btree",
      table.fInserted.asc().nullsLast().op("timestamp_ops"),
    ),
    index("publications_idx16").using(
      "btree",
      table.fInserted.asc().nullsLast().op("timestamp_ops"),
      table.fPublisherDate.asc().nullsLast().op("text_ops"),
      table.fCodInt.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx3").using(
      "btree",
      table.fInserted.asc().nullsLast().op("text_ops"),
      table.fCodInt.asc().nullsLast().op("timestamp_ops"),
    ),
    index("publications_idx4").using(
      "btree",
      table.fOrgao.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx5").using(
      "btree",
      table.fVara.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx7").using(
      "btree",
      table.fWarning.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_idx8").using(
      "btree",
      table.fFile.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx9").using(
      "btree",
      table.fCodInt.asc().nullsLast().op("text_ops"),
    ),
    index("publications_idx_date_codint").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
      table.fCodInt.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fPartner],
      foreignColumns: [partner.fId],
      name: "partner_fk",
    }),
  ],
)

export const publicationsDescriptions = pgTable(
  "publications_descriptions",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPublication: integer("f_publication").notNull(),
    fDescription: text("f_description"),
  },
  (table) => [
    uniqueIndex("publications_descriptions_idx").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fPublication],
      foreignColumns: [publications.fId],
      name: "publications_descriptions_fk",
    }).onDelete("cascade"),
  ],
)

export const publicationsWarningsUsers = pgTable(
  "publications_warnings_users",
  {
    fId: integer("f_id")
      .default(sql`nextval('publications_war_user_id'::regclass)`)
      .primaryKey()
      .notNull(),
    fUserId: integer("f_user_id").notNull(),
    fClientId: integer("f_client_id").notNull(),
    fWarning: integer("f_warning"),
  },
  (table) => [
    index("publications_warnings_users_idx").using(
      "btree",
      table.fClientId.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("publications_warnings_users_idx1").using(
      "btree",
      table.fUserId.asc().nullsLast().op("int4_ops"),
      table.fClientId.asc().nullsLast().op("int4_ops"),
      table.fWarning.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_warnings_users_idx_user").using(
      "btree",
      table.fUserId.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const qrcodes = pgTable("qrcodes", {
  fId: serial("f_id").primaryKey().notNull(),
  fProcess: integer("f_process").notNull(),
  fUrl: varchar("f_url").notNull(),
  fUser: integer("f_user").notNull(),
  fDate: date("f_date").defaultNow().notNull(),
})

export const qualityservice = pgTable(
  "qualityservice",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIdUnico: integer("f_id_unico").notNull(),
    fName: varchar("f_name", { length: 100 }).notNull(),
    fTotal: integer("f_total").notNull(),
    fClient: integer("f_client").notNull(),
    fState: integer("f_state").notNull(),
    fArea: integer("f_area").notNull(),
    fUser: integer("f_user").notNull(),
    fDate: date("f_date").defaultNow().notNull(),
  },
  (table) => [
    index("qualityservice_idx").using(
      "btree",
      table.fIdUnico.asc().nullsLast().op("int4_ops"),
    ),
    index("qualityservice_idx1").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("qualityservice_idx2").using(
      "btree",
      table.fUser.asc().nullsLast().op("date_ops"),
      table.fIdUnico.asc().nullsLast().op("int4_ops"),
      table.fDate.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
      table.fArea.asc().nullsLast().op("date_ops"),
    ),
  ],
)

export const queryreportsclients = pgTable(
  "queryreportsclients",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClientId: integer("f_client_id"),
    fQueryreportsId: integer("f_queryreports_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.fClientId],
      foreignColumns: [clients.fId],
      name: "queryreportsclients_f_client_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fQueryreportsId],
      foreignColumns: [queryreports.fId],
      name: "queryreportsclients_f_queryreports_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ],
)

export const queryreports = pgTable(
  "queryreports",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fType: smallint("f_type").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fPosition: bigint("f_position", { mode: "number" }),
    fSituation: smallint("f_situation"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
    fName: text("f_name"),
    fSql: text("f_sql"),
    fHistorynumber: smallint("f_historynumber"),
    fLostAppointment: boolean("f_lost_appointment"),
    fDaysNoHistory: bigint("f_days_no_history", { mode: "bigint" }),
    fFields: text("f_fields"),
    fPublic: boolean("f_public"),
    fMultiple: smallint("f_multiple").default(0),
    fHeaders: integer("f_headers").default(0),
    fSpecificfields: text("f_specificfields"),
  },
  (table) => [
    index("IX_r_107").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_152").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_98").using(
      "btree",
      table.fPosition.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_99").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("queryreports_idx").using(
      "btree",
      table.fType.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_107",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_152",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fPosition],
      foreignColumns: [positions.fId],
      name: "r_98",
    }),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_99",
    }).onDelete("cascade"),
  ],
)

export const queryreportsmenufilter = pgTable(
  "queryreportsmenufilter",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fReporttype: integer("f_reporttype"),
    fValue: varchar("f_value").notNull(),
    fTitle: varchar("f_title").notNull(),
  },
  (table) => [
    index("queryreportsmenufilter_idx").using(
      "btree",
      table.fReporttype.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("queryreportsmenufilter_idx1").using(
      "btree",
      table.fReporttype.asc().nullsLast().op("int4_ops"),
      table.fValue.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const queryreportstypes = pgTable("queryreportstypes", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fOrder: integer("f_order").notNull(),
  fActive: smallint("f_active").default(1).notNull(),
})

export const reasonnoncompliment = pgTable("reasonnoncompliment", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
})

export const reasonratingcorresponding = pgTable(
  "reasonratingcorresponding",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fReason: integer("f_reason").notNull(),
    fName: varchar("f_name").notNull(),
  },
  (table) => [
    index("reasonratingcorresponding_idx").using(
      "btree",
      table.fReason.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const referenceCitiOld = pgTable("reference_citi_old", {
  fId: serial("f_id").primaryKey().notNull(),
  fAppointmenttypes: integer("f_appointmenttypes"),
  fProceedingtypes: integer("f_proceedingtypes"),
  fEventonomeciti: varchar("f_eventonomeciti"),
  fEventoidciti: integer("f_eventoidciti"),
  fAreaciti: varchar("f_areaciti"),
})

export const referenceCitiHistories = pgTable("reference_citi_histories", {
  fId: serial("f_id").primaryKey().notNull(),
  fDate: date("f_date").defaultNow(),
  fProcess: integer("f_process"),
  fEventciti: varchar("f_eventciti", { length: 200 }),
})

export const referenceGproc = pgTable(
  "reference_gproc",
  {
    fProceedingtypes: integer("f_proceedingtypes").default(0).notNull(),
    fIntimationtypes: integer("f_intimationtypes").default(0).notNull(),
    fAndamentogproc: integer("f_andamentogproc").notNull(),
  },
  (table) => [
    index("reference_gproc_idx").using(
      "btree",
      table.fProceedingtypes.asc().nullsLast().op("int4_ops"),
    ),
    index("reference_gproc_idx1").using(
      "btree",
      table.fIntimationtypes.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const queryreportsSchedule = pgTable(
  "queryreports_schedule",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fReportId: integer("f_report_id").notNull(),
    fUserId: integer("f_user_id").notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fSchedule: date("f_schedule").notNull(),
    fExpiredDate: date("f_expired_date"),
    fStatus: smallint("f_status").default(0).notNull(),
    fStatusMessage: text("f_status_message"),
    fFilename: varchar("f_filename", { length: 255 }),
    fDbpartId: integer("f_dbpart_id"),
  },
  (table) => [
    index("idx_f_dbpart_id").using(
      "btree",
      table.fDbpartId.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_user_id").using(
      "btree",
      table.fUserId.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fDbpartId],
      foreignColumns: [dbpartsNames.fId],
      name: "fk_queryreports_schedule_dbpart_name_id",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fReportId],
      foreignColumns: [queryreports.fId],
      name: "fk_report_id",
    })
      .onUpdate("restrict")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fUserId],
      foreignColumns: [users.fId],
      name: "fk_user_id",
    })
      .onUpdate("restrict")
      .onDelete("restrict"),
  ],
)

export const querydetails = pgTable(
  "querydetails",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fQueryreport: bigint("f_queryreport", { mode: "number" }),
    fFilter: text("f_filter").notNull(),
    fType: text("f_type").notNull(),
    fValue: text("f_value").notNull(),
    fOp: text("f_op"),
  },
  (table) => [
    index("IX_r_104").using(
      "btree",
      table.fQueryreport.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fQueryreport],
      foreignColumns: [queryreports.fId],
      name: "r_104",
    }).onDelete("cascade"),
  ],
)

export const referenceLshOld = pgTable(
  "reference_lsh_old",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttypes: integer("f_appointmenttypes"),
    fProceedingtypes: integer("f_proceedingtypes").notNull(),
    fEventonomelsh: varchar("f_eventonomelsh").notNull(),
    fEventoidlsh: integer("f_eventoidlsh").notNull(),
    fArealsh: varchar("f_arealsh").notNull(),
  },
  (table) => [
    index("reference_lsh_idx").using(
      "btree",
      table.fProceedingtypes.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("reference_lsh_idx1").using(
      "btree",
      table.fProceedingtypes.asc().nullsLast().op("int4_ops"),
      table.fEventonomelsh.asc().nullsLast().op("int4_ops"),
      table.fEventoidlsh.asc().nullsLast().op("text_ops"),
      table.fArealsh.asc().nullsLast().op("int4_ops"),
      table.fAppointmenttypes.asc().nullsLast().op("text_ops"),
    ),
    index("reference_lsh_idx2").using(
      "btree",
      table.fArealsh.asc().nullsLast().op("text_ops"),
    ),
    index("reference_lsh_idx3").using(
      "btree",
      table.fAppointmenttypes.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const referenceLshHistories = pgTable("reference_lsh_histories", {
  fId: serial("f_id").primaryKey().notNull(),
  fDate: date("f_date").default(sql`('now'`).notNull(),
  fProcess: integer("f_process").notNull(),
  fEventlsh: varchar("f_eventlsh").notNull(),
})

export const reschedulingHistories = pgTable(
  "rescheduling_histories",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fUser: integer("f_user").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOldappointment: bigint("f_oldappointment", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fNewappointment: bigint("f_newappointment", { mode: "number" }).notNull(),
    fType: integer("f_type").notNull(),
    fStatus: integer("f_status").default(0).notNull(),
    fReason: integer("f_reason"),
    fComment: varchar("f_comment"),
    fNewdate: date("f_newdate"),
    fNegativejustification: varchar("f_negativejustification"),
    fNegativedate: date("f_negativedate"),
    fPositivejustification: varchar("f_positivejustification"),
    fPositivedate: date("f_positivedate"),
    fDatefatal: date("f_datefatal"),
    fDescription: text("f_description"),
    fOperation: integer("f_operation").default(1).notNull(),
    fNewlawyer: integer("f_newlawyer"),
  },
  (table) => [
    index("rescheduling_histories_idx").using(
      "btree",
      table.fOldappointment.asc().nullsLast().op("int8_ops"),
    ),
    index("rescheduling_histories_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("rescheduling_histories_idx2").using(
      "btree",
      table.fNewappointment.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fNewlawyer],
      foreignColumns: [lawyers.fId],
      name: "rescheduling_histories_fk",
    }),
    foreignKey({
      columns: [table.fReason],
      foreignColumns: [reschedulingReason.fId],
      name: "rescheduling_histories_reason_fk",
    }),
    check(
      "check_rescheduling_histories_f_operation",
      sql`f_operation = ANY (ARRAY[1, 2])`,
    ),
    check(
      "check_rescheduling_histories_f_type",
      sql`f_type = ANY (ARRAY[1, 2])`,
    ),
  ],
)

export const relContractActuation = pgTable(
  "rel_contract_actuation",
  {
    fIdContrato: integer("f_id_contrato").notNull(),
    fIdActuation: integer("f_id_actuation").notNull(),
  },
  (table) => [
    index("rel_contract_actuation_idx").using(
      "btree",
      table.fIdActuation.asc().nullsLast().op("int4_ops"),
    ),
    index("rel_contract_actuation_idx1").using(
      "btree",
      table.fIdContrato.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const reportGraphicClosePartial = pgTable(
  "report_graphic_close_partial",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fCount: integer("f_count").notNull(),
    fClient: integer("f_client").notNull(),
    fDate: date("f_date").notNull(),
  },
)

export const reportGraphicHistory = pgTable("report_graphic_history", {
  fId: serial("f_id").primaryKey().notNull(),
  fDate: date("f_date").defaultNow().notNull(),
  fCount: integer("f_count"),
  fName: varchar("f_name").notNull(),
  fClient: integer("f_client").notNull(),
})

export const registries = pgTable(
  "registries",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
  },
  (table) => [unique("registries_f_name_unique").on(table.fName)],
)

export const reschedulingAppointmenttypes = pgTable(
  "rescheduling_appointmenttypes",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client"),
    fAppointmenttype: integer("f_appointmenttype").notNull(),
    fDays: smallint("f_days").notNull(),
    fManagervalidate: smallint("f_managervalidate").default(0).notNull(),
    fMaximum: integer("f_maximum").notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fState: integer("f_state"),
  },
  (table) => [
    uniqueIndex("rescheduling_appointmenttypes_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fState.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const reschedulingReason = pgTable(
  "rescheduling_reason",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name").notNull(),
    fStatus: smallint("f_status").default(1).notNull(),
    fDescription: varchar("f_description", { length: 1000 }).default(sql`NULL`),
  },
  (table) => [
    index("rescheduling_reason_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
  ],
)

export const resourcesfinancialMotivoadiantamento = pgTable(
  "resourcesfinancial_motivoadiantamento",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 100 }),
    fStatus: integer("f_status").default(1).notNull(),
  },
  (table) => [
    check(
      "resourcesfinancial_motivoadiantamento_f_status_check",
      sql`f_status = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const resourcesfinancialLog = pgTable("resourcesfinancial_log", {
  fId: serial("f_id").primaryKey().notNull(),
  fResourcesfinancial: integer("f_resourcesfinancial"),
  fData: timestamp("f_data", { mode: "string" }),
  fUser: integer("f_user"),
  fAction: text("f_action"),
})

export const resourcesfinancialRelMotivotipo = pgTable(
  "resourcesfinancial_rel_motivotipo",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fMotivopagamento: integer("f_motivopagamento").notNull(),
    fTiposolicitacao: varchar("f_tiposolicitacao", { length: 300 }).notNull(),
  },
)

export const resourcesfinancialStatus = pgTable("resourcesfinancial_status", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 50 }).notNull(),
})

export const resourcesfinancialVerbasItau = pgTable(
  "resourcesfinancial_verbas_itau",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fValue: integer("f_value"),
    fName: varchar("f_name", { length: 200 }),
    fText: varchar("f_text", { length: 200 }),
    fCarteira: varchar("f_carteira", { length: 50 }),
  },
)

export const robotelecom = pgTable("robotelecom", {
  fId: serial("f_id").primaryKey().notNull(),
  fProcess: integer("f_process").notNull(),
  fDateUpdate: date("f_date_update").notNull(),
  fState: integer("f_state"),
  fOrigem: varchar("f_origem", { length: 20 }),
})

export const scanning = pgTable(
  "scanning",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fDate: date("f_date").default(sql`('now'`),
    fUser: integer("f_user"),
    fFile: varchar("f_file"),
    fDescription: varchar("f_description"),
    fFileMd5: varchar("f_file_md5"),
    fExecuted: smallint("f_executed").default(0).notNull(),
    fDateExecuted: timestamp("f_date_executed", { mode: "string" }),
    fSendclient: smallint("f_sendclient").default(0).notNull(),
    fTypedocclient: integer("f_typedocclient"),
  },
  (table) => [
    index("scanning_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("scanning_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    index("scanning_idx2").using(
      "btree",
      table.fFile.asc().nullsLast().op("text_ops"),
    ),
    index("scanning_idx3").using(
      "btree",
      table.fExecuted.asc().nullsLast().op("int2_ops"),
    ),
    index("scanning_idx4").using(
      "btree",
      table.fDateExecuted.asc().nullsLast().op("timestamp_ops"),
    ),
  ],
)

export const serviceActivityChecklist = pgTable(
  "service_activity_checklist",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fServiceactivity: integer("f_serviceactivity").notNull(),
    fName: varchar("f_name", { length: 100 }).notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fLastuser: integer("f_lastuser").notNull(),
  },
  (table) => [
    index("idx_service_activity_checklist_f_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_activity_checklist_f_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_activity_checklist_f_serviceactivity").using(
      "btree",
      table.fServiceactivity.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_service_activity_checklist_f_create_user",
    }),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_service_activity_checklist_f_lastuser",
    }),
    foreignKey({
      columns: [table.fServiceactivity],
      foreignColumns: [serviceactivities.fId],
      name: "fk_service_activity_checklist_f_serviceactivity",
    }),
    check(
      "service_activity_checklist_f_status_check",
      sql`f_status = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const serviceHistories = pgTable(
  "service_histories",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fType: integer("f_type").notNull(),
    fService: integer("f_service").notNull(),
    fDate: date("f_date"),
    fClientview: integer("f_clientview").default(0).notNull(),
    fComments: text("f_comments"),
    fLastupdate: timestamp("f_lastupdate", {
      withTimezone: true,
      mode: "string",
    }).default(sql`CURRENT_TIMESTAMP`),
    fLastuser: integer("f_lastuser").notNull(),
    fRfeActivities: integer("f_rfe_activities"),
    fCreateUser: integer("f_create_user").notNull(),
    fCreateDate: timestamp("f_create_date", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fReadonly: integer("f_readonly").default(1).notNull(),
  },
  (table) => [
    index("idx_service_histories_f_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_histories_f_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_histories_f_service").using(
      "btree",
      table.fService.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_histories_f_type").using(
      "btree",
      table.fType.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_service_histories_f_create_user",
    }),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_service_histories_f_lastuser",
    }),
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_service_histories_f_service",
    }),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [typesopinions.fId],
      name: "fk_service_histories_f_type",
    }),
    check(
      "service_histories_f_clientview_check",
      sql`f_clientview = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const servicedocuments = pgTable(
  "servicedocuments",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('servicedocuments_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fService: bigint("f_service", { mode: "number" }),
    fDate: date("f_date").notNull(),
    fText: text("f_text").notNull(),
    fDatehour: timestamp("f_datehour", { mode: "string" })
      .defaultNow()
      .notNull(),
    fUserupload: integer("f_userupload"),
  },
  (table) => [
    index("idx_servicedocuments_f_service").using(
      "btree",
      table.fService.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_servicedocuments",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const servicelinked = pgTable(
  "servicelinked",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fService: integer("f_service"),
    fServicelinked: integer("f_servicelinked"),
  },
  (table) => [
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "f_service",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fServicelinked],
      foreignColumns: [consultationandadvice.fId],
      name: "f_servicelinked",
    }).onDelete("cascade"),
  ],
)

export const segments = pgTable("segments", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fStatus: integer("f_status").default(1).notNull(),
})

export const servicedocumentFiles = pgTable(
  "servicedocument_files",
  {
    fId: integer("f_id")
      .default(sql`nextval('servicedocument_files_f_id_seq'::regclass)`)
      .notNull(),
    fServicedocumentId: integer("f_servicedocument_id").notNull(),
    fFile: varchar("f_file", { length: 100 }).notNull(),
    fFilename: varchar("f_filename", { length: 300 }).notNull(),
    fSize: integer("f_size").notNull(),
    fInCloud: integer("f_in_cloud").default(0).notNull(),
    fAttempts: integer("f_attempts").default(0).notNull(),
    fSenderror: text("f_senderror"),
  },
  (table) => [
    foreignKey({
      columns: [table.fServicedocumentId],
      foreignColumns: [servicedocuments.fId],
      name: "servicedocument_files_f_id_seq",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const serviceparticipants = pgTable("serviceparticipants", {
  fId: serial("f_id").primaryKey().notNull(),
  fService: integer("f_service").notNull(),
  fParticipant: integer("f_participant").notNull(),
  fPosition: integer("f_position"),
  fLastupdate: timestamp("f_lastupdate", { withTimezone: true, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  fLastuser: integer("f_lastuser").notNull(),
  fCreateDate: timestamp("f_create_date", {
    withTimezone: true,
    mode: "string",
  })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const serviceSegments = pgTable(
  "service_segments",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 50 }).notNull(),
    fStatus: smallint("f_status").default(1).notNull(),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
    fLastuser: integer("f_lastuser"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
  },
  (table) => [
    index("idx_service_segments_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_segments_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_service_segments_name").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "service_segments_f_create_user_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "service_segments_f_lastuser_fkey",
    }).onDelete("restrict"),
    unique("service_segments_f_name_key").on(table.fName),
    check("service_segments_f_status_check", sql`f_status = ANY (ARRAY[0, 1])`),
  ],
)

export const serviceactivities = pgTable(
  "serviceactivities",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('serviceactivities_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fServiceId: bigint("f_service_id", { mode: "number" }),
    fDate: date("f_date").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTypeactivity: bigint("f_typeactivity", { mode: "number" }).notNull(),
    fDescription: varchar("f_description", { length: 1000 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fResponsible: bigint("f_responsible", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fUpdatedAt: timestamp("f_updated_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    fStatus: integer("f_status").default(1),
    fBeginDate: date("f_begin_date").notNull(),
    fProgress: integer("f_progress").default(0).notNull(),
    fTime: time("f_time"),
    fFinishdate: date("f_finishdate"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fCreateUser: integer("f_create_user").notNull(),
  },
  (table) => [
    index("idx_serviceactivities_f_service_id").using(
      "btree",
      table.fServiceId.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_serviceactivities_f_typeactivity").using(
      "btree",
      table.fTypeactivity.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fTypeactivity],
      foreignColumns: [typesopinions.fId],
      name: "fk_f_typeactivity_to_typesopinions_f_id",
    }),
    foreignKey({
      columns: [table.fServiceId],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_serviceactivities",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const systemLogin = pgTable(
  "system_login",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_system_login'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    fHash: text("f_hash"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProduct: bigint("f_product", { mode: "number" }),
  },
  (table) => [
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_system_login_f_user",
    }),
    unique("user_product_hash_unique").on(
      table.fUser,
      table.fHash,
      table.fProduct,
    ),
  ],
)

export const sinister = pgTable(
  "sinister",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fUser: integer("f_user"),
    fFolder: varchar("f_folder", { length: 30 }),
    fData: date("f_data").defaultNow().notNull(),
    fStatus: varchar("f_status", { length: 30 }),
    fObs01: text("f_obs01"),
    fObs02: text("f_obs02"),
    fObs03: text("f_obs03"),
    fDocs: text("f_docs"),
    fProcess: integer("f_process"),
  },
  (table) => [
    index("sinister_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("sinister_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("text_ops"),
    ),
    index("sinister_idx2").using(
      "btree",
      table.fData.asc().nullsLast().op("date_ops"),
    ),
  ],
)

export const sinisterLog = pgTable(
  "sinister_log",
  {
    fProcess: integer("f_process"),
    fStatus: text("f_status"),
    fUser: integer("f_user"),
    fText: text("f_text"),
    fData: date("f_data").defaultNow(),
  },
  (table) => [
    index("sinister_log_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("sinister_log_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const specialmonitoring = pgTable(
  "specialmonitoring",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process").notNull(),
    fUserrequest: integer("f_userrequest").notNull(),
    fDaterequest: date("f_daterequest").defaultNow().notNull(),
    fType: integer("f_type").notNull(),
    fMotive: varchar("f_motive"),
    fDatetimehearing: timestamp("f_datetimehearing", { mode: "string" }),
    fUserresponsible: integer("f_userresponsible"),
    fStatus: integer("f_status").default(1).notNull(),
    fFinalcomment: varchar("f_finalcomment"),
    fFinaldate: date("f_finaldate"),
  },
  (table) => [
    index("specialmonitoring_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const specialmonitoringtypes = pgTable("specialmonitoringtypes", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 100 }).notNull(),
  fStatus: smallint("f_status").default(1).notNull(),
})

export const subareas = pgTable(
  "subareas",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fColorLegend: text("f_color_legend"),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [unique("subareas_f_name_unique").on(table.fName)],
)

export const shippingTypes = pgTable("shipping_types", {
  fId: integer("f_id").primaryKey().notNull(),
  fName: varchar("f_name", { length: 45 }),
})

export const servicesubjects = pgTable("servicesubjects", {
  fId: integer("f_id")
    .default(sql`nextval('servicesubjects_f_id_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name", { length: 255 }),
  fStatus: integer("f_status").default(1),
})

export const succumbing = pgTable(
  "succumbing",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fProcess: integer("f_process"),
    fValue: numeric("f_value", { mode: "number" }),
    fPart: integer("f_part"),
    fDate: date("f_date"),
    fBank: varchar("f_bank", { length: 20 }),
    fPartvaluetotallawyer: numeric("f_partvaluetotallawyer", {
      mode: "number",
    }),
    fBeneficiary: varchar("f_beneficiary", { length: 50 }),
    fIdgroup: integer("f_idgroup"),
  },
  (table) => [
    index("succumbing_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const stopwatchHistories = pgTable(
  "stopwatch_histories",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTypetask: bigint("f_typetask", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fServiceId: bigint("f_service_id", { mode: "number" }).notNull(),
    fPause: time("f_pause", { precision: 1 }),
    fStop: varchar("f_stop", { length: 80 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fDate: date("f_date").defaultNow().notNull(),
    fStatus: integer("f_status").default(1).notNull(),
    fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fDescription: varchar("f_description", { length: 3000 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fActivityId: bigint("f_activity_id", { mode: "number" }).notNull(),
    fLastuser: integer("f_lastuser").notNull(),
  },
  (table) => [
    index("stopwatch_histories_f_typeopinion_idx").using(
      "btree",
      table.fTypetask.asc().nullsLast().op("int8_ops"),
    ),
    index("stopwatch_histories_f_user_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fActivityId],
      foreignColumns: [serviceactivities.fId],
      name: "fk_activity_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_f_lastuser_to_users_f_id",
    }),
    foreignKey({
      columns: [table.fTypetask],
      foreignColumns: [typesopinions.fId],
      name: "fk_f_typetask_to_typesopinions_f_id",
    }),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_f_user_to_users_f_id",
    }),
    foreignKey({
      columns: [table.fTypetask],
      foreignColumns: [typesopinions.fId],
      name: "stopwatch_histories_fk",
    }),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "stopwatch_histories_fk1",
    }).onDelete("cascade"),
  ],
)

export const servicesprocess = pgTable(
  "servicesprocess",
  {
    fId: integer("f_id")
      .default(sql`nextval('consultationandadvice_process_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    fProcessId: integer("f_process_id").notNull(),
    fConsultationandadviceId: integer("f_consultationandadvice_id").notNull(),
    fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fConsultationandadviceId],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_f_consultationandadvice_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fProcessId],
      foreignColumns: [process.fId],
      name: "fk_f_process_id",
    }),
  ],
)

export const servicesLog = pgTable(
  "services_log",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('services_log_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fServiceId: bigint("f_service_id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
    fAction: varchar("f_action", { length: 100 }),
    fReason: text("f_reason"),
    fUrl: varchar("f_url", { length: 100 }),
    fDatetime: timestamp("f_datetime", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_services_log_f_service_id").using(
      "btree",
      table.fServiceId.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fServiceId],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_services",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const systemaccessgroups = pgTable("systemaccessgroups", {
  fGroup: bigint("f_group", { mode: "number" }).primaryKey().notNull(),
})

export const tpuAssuntos = pgTable(
  "tpu_assuntos",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    codAssunto: bigint("cod_assunto", { mode: "number" })
      .primaryKey()
      .notNull(),
    tipoItem: varchar("tipo_item", { length: 1 }).default("A").notNull(),
  },
  (table) => [
    index("idx_cod_assunto").using(
      "btree",
      table.codAssunto.asc().nullsLast().op("int8_ops"),
      table.tipoItem.asc().nullsLast().op("int8_ops"),
    ),
  ],
)

export const systemaccessusers = pgTable(
  "systemaccessusers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).primaryKey().notNull(),
  },
  (table) => [
    index("IX_r_41").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_41",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const systemTabsUsersViewing = pgTable(
  "system_tabs_users_viewing",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fView: bigint("f_view", { mode: "number" }).notNull(),
  },
  (table) => [
    index("system_tabs_users_viewing_f_user_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("system_tabs_users_viewing_f_view_idx").using(
      "btree",
      table.fView.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fView],
      foreignColumns: [users.fId],
      name: "fk_view",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const tpuMovimentos = pgTable(
  "tpu_movimentos",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    codMovimento: bigint("cod_movimento", { mode: "number" })
      .primaryKey()
      .notNull(),
    tipoItem: varchar("tipo_item", { length: 1 }).default("M").notNull(),
  },
  (table) => [
    index("idx_cod_movimento").using(
      "btree",
      table.codMovimento.asc().nullsLast().op("int8_ops"),
      table.tipoItem.asc().nullsLast().op("int8_ops"),
    ),
  ],
)

export const userclientAppointmenttypes = pgTable(
  "userclient_appointmenttypes",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_userclient_appointmenttypes'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAppointmenttype: bigint("f_appointmenttype", { mode: "number" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fAppointmenttype],
      foreignColumns: [appointmenttypes.fId],
      name: "appointmenttype_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "user_fk",
    }).onDelete("cascade"),
    unique("unique_userclient_appointmenttype").on(
      table.fUser,
      table.fAppointmenttype,
    ),
  ],
)

export const termPublication = pgTable(
  "term_publication",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fName: varchar("f_name", { length: 150 }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOabuf: bigint("f_oabuf", { mode: "number" }),
    fOab: varchar("f_oab", { length: 30 }).default(sql`NULL`),
    fCpfCnpj: varchar("f_cpf_cnpj", { length: 50 }).default(sql`NULL`),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
    fCreateDate: timestamp("f_create_date", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fDeleteUser: bigint("f_delete_user", { mode: "number" }),
    fDeleteDate: timestamp("f_delete_date", {
      withTimezone: true,
      mode: "string",
    }),
    fStatus: integer("f_status").default(1).notNull(),
    fType: integer("f_type").notNull(),
    fScope: integer("f_scope").notNull(),
    fLastupdate: timestamp("f_lastupdate", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_term_publication_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_term_publication_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_term_publication_oabuf").using(
      "btree",
      table.fOabuf.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_create_user",
    }),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_last_user",
    }),
    foreignKey({
      columns: [table.fOabuf],
      foreignColumns: [states.fId],
      name: "fk_oabuf",
    }),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "term_publication_f_create_user_fkey",
    }),
    check("chk_term_publication_f_scope", sql`f_scope = ANY (ARRAY[1, 2])`),
    check("chk_term_publication_f_status", sql`f_status = ANY (ARRAY[0, 1])`),
    check("chk_term_publication_f_type", sql`f_type = ANY (ARRAY[1, 2, 3])`),
  ],
)

export const userAccessCourt = pgTable(
  "user_access_court",
  {
    fId: serial("f_id").primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fIdtribunal: bigint("f_idtribunal", { mode: "number" }).notNull(),
    fNametribunal: varchar("f_nametribunal", { length: 100 }).notNull(),
    fUserlogin: varchar("f_userlogin", { length: 100 }).notNull(),
    fPassword: varchar("f_password", { length: 120 }).notNull(),
    fPass2Fa: varchar("f_pass2fa", { length: 200 }).default(sql`NULL`),
    fIntimationactive: smallint("f_intimationactive").default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCodInt: bigint("f_cod_int", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
    fCreateDate: timestamp("f_create_date", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fDeleteUser: bigint("f_delete_user", { mode: "number" }),
    fDeleteDate: timestamp("f_delete_date", {
      withTimezone: true,
      mode: "string",
    }),
  },
  (table) => [
    index("idx_user_access_court_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_user_access_court_lawyer").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_create_user",
    }),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "fk_lawyer",
    }),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "user_access_court_f_create_user_fkey",
    }),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "user_access_court_f_lawyer_fkey",
    }),
    check(
      "user_access_court_f_intimationactive_check",
      sql`f_intimationactive = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const tpuClasses = pgTable(
  "tpu_classes",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    codClasse: bigint("cod_classe", { mode: "number" }).primaryKey().notNull(),
    tipoItem: varchar("tipo_item", { length: 1 }).default("C").notNull(),
    sigla: varchar({ length: 20 }).notNull(),
    siglaAntiga: varchar("sigla_antiga", { length: 20 }).default(sql`NULL`),
  },
  (table) => [
    index("idx_cod_classes").using(
      "btree",
      table.codClasse.asc().nullsLast().op("text_ops"),
      table.tipoItem.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_tpu_classes_sigla").using(
      "btree",
      table.sigla.asc().nullsLast().op("text_ops"),
    ),
    index("idx_tpu_classes_sigla_antiga").using(
      "btree",
      table.siglaAntiga.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const systemProfiles = pgTable("system_profiles", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fAction: varchar("f_action").notNull(),
  fValueHour: numeric("f_value_hour", { mode: "number" }),
})

export const termPublicationStates = pgTable(
  "term_publication_states",
  {
    fId: serial("f_id").primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTermId: bigint("f_term_id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fStateId: bigint("f_state_id", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_term_publication_states_state").using(
      "btree",
      table.fStateId.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_term_publication_states_term").using(
      "btree",
      table.fTermId.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fStateId],
      foreignColumns: [states.fId],
      name: "fk_state",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fTermId],
      foreignColumns: [termPublication.fId],
      name: "fk_term_publication",
    }).onDelete("cascade"),
    unique("unique_term_state").on(table.fTermId, table.fStateId),
  ],
)

export const systemTabs = pgTable("system_tabs", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
  fUrl: varchar("f_url"),
  fStatus: integer("f_status").default(1).notNull(),
  fIndex: integer("f_index"),
})

export const systemTabsUsers = pgTable(
  "system_tabs_users",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTab: bigint("f_tab", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fLevel: integer("f_level"),
  },
  (table) => [
    uniqueIndex("idx_tab_user").using(
      "btree",
      table.fTab.asc().nullsLast().op("int8_ops"),
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("system_tabs_users_f_tab_idx").using(
      "btree",
      table.fTab.asc().nullsLast().op("int8_ops"),
    ),
    index("system_tabs_users_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fTab],
      foreignColumns: [systemTabs.fId],
      name: "fk_tab",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const userclientService = pgTable(
  "userclient_service",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client").notNull(),
    fUser: integer("f_user").notNull(),
  },
  (table) => [
    index("idx_userclient_service_f_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_userclient_service_f_user").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_userclient_service_clients",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_userclient_service_users",
    }).onDelete("restrict"),
    unique("uk_userclient_service_f_client_f_user").on(
      table.fClient,
      table.fUser,
    ),
  ],
)

export const themes = pgTable("themes", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fId: bigint("f_id", { mode: "number" })
    .default(sql`nextval('themes_f_id_seq'::regclass)`)
    .primaryKey()
    .notNull(),
  fName: varchar("f_name", { length: 100 }),
  fStatus: smallint("f_status"),
})

export const timesheettypes = pgTable("timesheettypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
})

export const userSettings = pgTable(
  "user_settings",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('seq_user_settings'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    fAutomatedInviteConfirmation: boolean("f_automated_invite_confirmation")
      .default(false)
      .notNull(),
    fAutomatedInviteAcceptance: boolean("f_automated_invite_acceptance")
      .default(false)
      .notNull(),
    fViewCustomerBirthdays: boolean("f_view_customer_birthdays")
      .default(false)
      .notNull(),
    fViewEventAppointments: boolean("f_view_event_appointments")
      .default(false)
      .notNull(),
    fViewEventHearings: boolean("f_view_event_hearings")
      .default(false)
      .notNull(),
    fViewEventActivities: boolean("f_view_event_activities")
      .default(false)
      .notNull(),
    fViewSharingPersonal: boolean("f_view_sharing_personal")
      .default(false)
      .notNull(),
    fViewSharingBirthdays: boolean("f_view_sharing_birthdays")
      .default(false)
      .notNull(),
    fViewSharingAppointments: boolean("f_view_sharing_appointments")
      .default(false)
      .notNull(),
    fViewSharingHearings: boolean("f_view_sharing_hearings")
      .default(false)
      .notNull(),
    fViewSharingActivities: boolean("f_view_sharing_activities")
      .default(false)
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "user_fk",
    }).onDelete("cascade"),
    unique("unique_user").on(table.fUser),
  ],
)

export const appointments = pgTable(
  "appointments",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProtocolDocument: bigint("f_protocol_document", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fHearing: bigint("f_hearing", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fIntimation: bigint("f_intimation", { mode: "number" }),
    fStatus: smallint("f_status").notNull(),
    fDate: date("f_date"),
    fText: text("f_text"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProceedingtype: bigint("f_proceedingtype", { mode: "number" }),
    fFinishdate: date("f_finishdate"),
    fComments: text("f_comments"),
    fNoaction: smallint("f_noaction"),
    fProcessnumber: varchar("f_processnumber"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fGenerateDocument: boolean("f_generate_document").default(sql`NULL`),
    fDocDeliveredDate: timestamp("f_doc_delivered_date", { mode: "string" }),
    fDocDeliveredAuthor: text("f_doc_delivered_author"),
    fDocReturnedDate: timestamp("f_doc_returned_date", { mode: "string" }),
    fDocReturnedAuthor: text("f_doc_returned_author"),
    fDocReturnedScanned: boolean("f_doc_returned_scanned"),
    fDocReturnedScannedAuthor: text("f_doc_returned_scanned_author"),
    fNotgeneratedocumentok: boolean("f_notgeneratedocumentok").notNull(),
    fLogistictypesend: integer("f_logistictypesend").default(1).notNull(),
    fRescheduled: smallint("f_rescheduled"),
    fIsfatal: smallint("f_isfatal").default(0).notNull(),
    fPostofficetracknumber: varchar("f_postofficetracknumber"),
    fSendintegrationpost: timestamp("f_sendintegrationpost", {
      mode: "string",
    }),
    fPostcostcenter: integer("f_postcostcenter"),
    fDatefatal: date("f_datefatal"),
    fDatetimecreated: timestamp("f_datetimecreated", {
      mode: "string",
    }).defaultNow(),
    fDatefatalprotocol: date("f_datefatalprotocol"),
    fDelegate: smallint("f_delegate").default(1).notNull(),
    fIdIntermed2Adv: varchar("f_id_intermed_2adv"),
    fDate2AdvVinc: timestamp("f_date_2adv_vinc", { mode: "string" }),
    fMessage2Adv: text("f_message_2adv"),
    fClientview: integer("f_clientview").default(0),
    fRead: integer("f_read").default(0),
    fAlertdeny: text("f_alertdeny"),
    fShippingType: integer("f_shipping_type"),
  },
  (table) => [
    index("IX_r_123").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_182").using(
      "btree",
      table.fProtocolDocument.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_71").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_73").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_74").using(
      "btree",
      table.fProceedingtype.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_75").using(
      "btree",
      table.fIntimation.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_77").using(
      "btree",
      table.fHearing.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_84").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("appointments_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx1").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx10").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fStatus.asc().nullsLast().op("int2_ops"),
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("appointments_idx11").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("appointments_idx12").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("appointments_idx13").using(
      "btree",
      table.fIsfatal.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx14").using(
      "btree",
      table.fDocReturnedScanned.asc().nullsLast().op("int2_ops"),
      table.fDocReturnedScannedAuthor.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx15").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fStatus.asc().nullsLast().op("int2_ops"),
      table.fNoaction.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx16").using(
      "btree",
      table.fNotgeneratedocumentok.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx17").using(
      "btree",
      table.fFinishdate.asc().nullsLast().op("date_ops"),
    ),
    index("appointments_idx18").using(
      "btree",
      table.fProcessnumber.asc().nullsLast().op("text_ops"),
    ),
    index("appointments_idx19").using(
      "btree",
      table.fLogistictypesend.asc().nullsLast().op("int4_ops"),
    ),
    index("appointments_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fGenerateDocument.asc().nullsLast().op("int8_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("int8_ops"),
    ),
    index("appointments_idx20").using(
      "btree",
      table.fPostofficetracknumber.asc().nullsLast().op("text_ops"),
    ),
    index("appointments_idx21").using(
      "btree",
      table.fSendintegrationpost.asc().nullsLast().op("timestamp_ops"),
    ),
    index("appointments_idx22").using(
      "btree",
      table.fProceedingtype.asc().nullsLast().op("date_ops"),
      table.fFinishdate.asc().nullsLast().op("date_ops"),
    ),
    index("appointments_idx23").using(
      "btree",
      table.fDatefatal.asc().nullsLast().op("date_ops"),
    ),
    index("appointments_idx24").using(
      "btree",
      table.fDatefatalprotocol.asc().nullsLast().op("date_ops"),
    ),
    index("appointments_idx3").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
      table.fFinishdate.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx5").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("appointments_idx6").using(
      "btree",
      table.fDocReturnedDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("appointments_idx7").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
      table.fDocDeliveredDate.asc().nullsLast().op("int2_ops"),
      table.fDocReturnedDate.asc().nullsLast().op("timestamp_ops"),
    ),
    index("appointments_idx8").using(
      "btree",
      table.fGenerateDocument.asc().nullsLast().op("int2_ops"),
    ),
    index("appointments_idx9").using(
      "btree",
      table.fDocDeliveredDate.asc().nullsLast().op("timestamp_ops"),
    ),
    foreignKey({
      columns: [table.fShippingType],
      foreignColumns: [shippingTypes.fId],
      name: "fk_appointments_shipping_types",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "r_123",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fProtocolDocument],
      foreignColumns: [documents.fId],
      name: "r_182",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_71",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [appointmenttypes.fId],
      name: "r_73",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fProceedingtype],
      foreignColumns: [proceedingtypes.fId],
      name: "r_74",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fIntimation],
      foreignColumns: [intimations.fId],
      name: "r_75",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fHearing],
      foreignColumns: [hearings.fId],
      name: "r_77",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_84",
    }).onDelete("set null"),
  ],
)

export const documents = pgTable(
  "documents",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    fDate: date("f_date").notNull(),
    fText: text("f_text").notNull(),
    fFile: text("f_file"),
    fSize: text("f_size"),
    fFilename: varchar("f_filename", { length: 300 }),
    fSendclient: smallint("f_sendclient").default(0).notNull(),
    fRfeAppointment: integer("f_rfe_appointment"),
    fType: integer("f_type"),
    fDatehour: timestamp("f_datehour", { mode: "string" })
      .defaultNow()
      .notNull(),
    fDateSendclient: timestamp("f_date_sendclient", { mode: "string" }),
    fUserupload: integer("f_userupload"),
    fServer: text("f_server"),
    fResourcefinancial: integer("f_resourcefinancial"),
    fInamazon: smallint("f_inamazon").default(0).notNull(),
    fRfeHistory: integer("f_rfe_history"),
    fLastuser: integer("f_lastuser"),
    fRfeHearing: integer("f_rfe_hearing"),
    fClientview: integer("f_clientview").default(0).notNull(),
    fRfeIntimation: integer("f_rfe_intimation"),
  },
  (table) => [
    index("IX_r_59").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("documents_idx").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("documents_idx1").using(
      "btree",
      table.fRfeAppointment.asc().nullsLast().op("int4_ops"),
    ),
    index("documents_idx2").using(
      "btree",
      table.fSize.asc().nullsLast().op("text_ops"),
    ),
    index("documents_idx3").using(
      "btree",
      table.fFilename.asc().nullsLast().op("text_ops"),
    ),
    index("documents_idx4").using(
      "btree",
      table.fSendclient.asc().nullsLast().op("int2_ops"),
    ),
    index("documents_idx5").using(
      "btree",
      table.fServer.asc().nullsLast().op("text_ops"),
    ),
    index("documents_idx6").using(
      "btree",
      table.fType.asc().nullsLast().op("int4_ops"),
    ),
    index("documents_idx7").using(
      "btree",
      table.fResourcefinancial.asc().nullsLast().op("int4_ops"),
    ),
    index("documents_idx8").using(
      "btree",
      table.fInamazon.asc().nullsLast().op("int2_ops"),
    ),
    index("documents_idx9").using(
      "btree",
      table.fFile.asc().nullsLast().op("text_ops"),
    ),
    index("idx_documents_f_history").using(
      "btree",
      table.fRfeHistory.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "documents_f_lastuser_fk",
    }),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_59",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const hearings = pgTable(
  "hearings",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fIntimation: bigint("f_intimation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProceedingtype: bigint("f_proceedingtype", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fDistrict: bigint("f_district", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fRegistry: bigint("f_registry", { mode: "number" }),
    fStatus: smallint("f_status"),
    fDate: date("f_date"),
    fText: text("f_text"),
    fTime: varchar("f_time", { length: 20 }),
    fFinishdate: date("f_finishdate"),
    fComments: text("f_comments"),
    fAgentName: text("f_agent_name"),
    fAgentCpf: text("f_agent_cpf"),
    fAgentPhone: text("f_agent_phone"),
    fProcessnumber: varchar("f_processnumber"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }),
    fLawyerName: varchar("f_lawyer_name", { length: 160 }),
    fLawyerOab: varchar("f_lawyer_oab", { length: 20 }),
    fLawyerPhone: varchar("f_lawyer_phone", { length: 20 }),
    fLogisticstatus: smallint("f_logisticstatus").default(0).notNull(),
    fRating: integer("f_rating"),
    fRatingmotive: integer("f_ratingmotive"),
    fRatingfinal: integer("f_ratingfinal"),
    fClientview: integer("f_clientview"),
    fLink: varchar("f_link", { length: 1000 }).default(sql`NULL`),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("IX_r_122").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_60").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_61").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_62").using(
      "btree",
      table.fDistrict.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_63").using(
      "btree",
      table.fRegistry.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_68").using(
      "btree",
      table.fProceedingtype.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_76").using(
      "btree",
      table.fIntimation.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_83").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("hearings_idx").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("hearings_idx1").using(
      "btree",
      table.fTime.asc().nullsLast().op("text_ops"),
    ),
    index("hearings_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
      table.fDate.asc().nullsLast().op("int8_ops"),
      table.fTime.asc().nullsLast().op("text_ops"),
    ),
    index("hearings_idx3").using(
      "btree",
      table.fLogisticstatus.asc().nullsLast().op("int2_ops"),
    ),
    index("hearings_idx4").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int2_ops"),
      table.fStatus.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "r_122",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [hearingtypes.fId],
      name: "r_60",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_61",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fDistrict],
      foreignColumns: [districts.fId],
      name: "r_62",
    }),
    foreignKey({
      columns: [table.fRegistry],
      foreignColumns: [registries.fId],
      name: "r_63",
    }),
    foreignKey({
      columns: [table.fProceedingtype],
      foreignColumns: [proceedingtypes.fId],
      name: "r_68",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fIntimation],
      foreignColumns: [intimations.fId],
      name: "r_76",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_83",
    }).onDelete("set null"),
  ],
)

export const participantslawyers = pgTable(
  "participantslawyers",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fOab: text("f_oab"),
    fOffice: text("f_office"),
    fStreet: text("f_street"),
    fCity: text("f_city"),
    fBurgh: text("f_burgh"),
    fState: text("f_state"),
    fZipcode: varchar("f_zipcode", { length: 20 }),
    fPhone: text("f_phone"),
    fMobile: text("f_mobile"),
    fFax: text("f_fax"),
    fComments: text("f_comments"),
    fSoundexCode: text("f_soundex_code"),
    fEmail: text("f_email"),
    fOabuf: varchar("f_oabuf"),
    fDatetimeupdatedbot: timestamp("f_datetimeupdatedbot", { mode: "string" }),
  },
  (table) => [
    index("participantslawyers_idx1").using(
      "btree",
      table.fSoundexCode.asc().nullsLast().op("text_ops"),
    ),
    index("participantslawyers_idx2").using(
      "btree",
      table.fOab.asc().nullsLast().op("text_ops"),
    ),
    uniqueIndex("participantslawyers_idx3").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
      table.fOab.asc().nullsLast().op("text_ops"),
      table.fOabuf.asc().nullsLast().op("text_ops"),
    ),
    uniqueIndex("participantslawyers_idx4").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const checklistSave = pgTable(
  "checklist_save",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointment: integer("f_appointment"),
    fUser: integer("f_user"),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow(),
    fStatus: integer("f_status").default(1).notNull(),
    fAnalyzedBy: integer("f_analyzed_by").default(0).notNull(),
    fDateFatal: varchar("f_date_fatal", { length: 255 }),
    fDateJuntada: text("f_date_juntada"),
    fNroautoinfracao: varchar("f_nroautoinfracao", { length: 255 }),
    fDatenotificacao: date("f_datenotificacao"),
    fNroprocessoadm: varchar("f_nroprocessoadm", { length: 255 }),
    fDatedecisao: date("f_datedecisao"),
    fEm: integer("f_em"),
    fPp: integer("f_pp"),
    fAp: integer("f_ap"),
    fEf: integer("f_ef"),
    fEfType: varchar("f_ef_type"),
    fEmType: varchar("f_em_type"),
    fApType: varchar("f_ap_type"),
    fDenied: integer("f_denied").default(0).notNull(),
    fIsfatal: smallint("f_isfatal").default(0),
    fDateReviewd: timestamp("f_date_reviewd", { mode: "string" }),
  },
  (table) => [
    uniqueIndex("checklist_save_checklistmerito_save_idx").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_save_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_save_idx1").using(
      "btree",
      table.fAnalyzedBy.asc().nullsLast().op("int4_ops"),
    ),
    index("checklist_save_idx2").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
  ],
)

export const clientsCustomfields = pgTable(
  "clients_customfields",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fGroup: bigint("f_group", { mode: "number" }),
    fName: varchar("f_name", { length: 100 }).notNull(),
    fType: integer("f_type").notNull(),
    fRequired: integer("f_required").default(0).notNull(),
    fPosition: integer("f_position").default(0).notNull(),
    fReadonly: integer("f_readonly").default(0).notNull(),
    fComment: varchar("f_comment", { length: 500 }).default(sql`NULL`),
    fOptions: varchar("f_options", { length: 500 }).default(sql`NULL`),
    fNamefunctionreport: varchar("f_namefunctionreport", { length: 100 }),
    fTitle: varchar("f_title", { length: 100 }).default(sql`NULL`),
    fDynamicvar: varchar("f_dynamicvar", { length: 20 }).default(sql`NULL`),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_clients_customfields_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_clients_customfields_namefunctionreport").using(
      "btree",
      table.fNamefunctionreport.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_clients_customfields_clients_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "fk_clients_customfields_groupclients_f_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_clients_customfields_users_f_id",
    }),
    unique("uq_clients_customfields_f_dynamicvar").on(table.fDynamicvar),
  ],
)

export const servicesCustomfields = pgTable(
  "services_customfields",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fClient: integer("f_client"),
    fArea: integer("f_area"),
    fName: varchar("f_name").notNull(),
    fType: integer("f_type").notNull(),
    fRequired: boolean("f_required"),
    fComment: varchar("f_comment", { length: 500 }),
    fPosition: integer("f_position").default(0).notNull(),
    fReadonly: integer("f_readonly").default(0).notNull(),
    fOptions: varchar("f_options"),
    fNamefunctionreport: varchar("f_namefunctionreport"),
    fDynamicvar: varchar("f_dynamicvar", { length: 20 }).default(sql`NULL`),
    fGroup: integer("f_group"),
    fTitle: varchar("f_title", { length: 100 }).default("").notNull(),
    fSubarea: integer("f_subarea"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_services_customfields_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_services_customfields_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("services_customfields_area").using(
      "btree",
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    index("services_customfields_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("services_customfields_namefunctionreport").using(
      "btree",
      table.fNamefunctionreport.asc().nullsLast().op("text_ops"),
    ),
    index("services_customfields_unique_client_area").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
      table.fArea.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [perfilConsultation.fId],
      name: "fk_services_customfields_areas_id",
    }),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_services_customfields_clients_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fGroup],
      foreignColumns: [groupclients.fId],
      name: "fk_services_customfields_groupclients_f_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fSubarea],
      foreignColumns: [subareas.fId],
      name: "services_customfields_subarea_fk",
    }),
    unique("services_customfields_f_dynamicvar_unique").on(table.fDynamicvar),
  ],
)

export const users = pgTable(
  "users",
  {
    fId: integer("f_id")
      .default(sql`nextval(('public.users_f_id_seq'::text)::regclass)`)
      .primaryKey()
      .notNull(),
    fName: text("f_name"),
    fEmail: text("f_email"),
    fStatus: smallint("f_status").default(2).notNull(),
    fSede: integer("f_sede").default(8).notNull(),
    fBirthday: date("f_birthday"),
    fExtraaccess: integer("f_extraaccess").default(1),
    fExtension: varchar("f_extension", { length: 20 }),
    fRole: varchar("f_role").default("user").notNull(),
    fUsername: varchar("f_username"),
    fPassword: varchar("f_password", { length: 120 }),
    fHourBegin: varchar("f_hour_begin", { length: 10 })
      .default("00:00")
      .notNull(),
    fHourEnd: varchar("f_hour_end", { length: 10 }).default("23:59").notNull(),
    fDaysweek: varchar("f_daysweek", { length: 100 })
      .default("sunday,monday,tuesday,wednesday,thursday,friday,saturday")
      .notNull(),
    fLevels: integer("f_levels"),
    fPhotoPath: varchar("f_photo_path", { length: 500 }),
    fPhotoFileName: varchar("f_photo_file_name", { length: 500 }),
    fPhotoFileOriginalName: varchar("f_photo_file_original_name", {
      length: 500,
    }),
    fPhotoInCloud: boolean("f_photo_in_cloud").default(false).notNull(),
    fOffice: integer("f_office").notNull(),
    fPhotoAttempts: integer("f_photo_attempts").default(0).notNull(),
    fPhotoSenderror: text("f_photo_senderror"),
    fCreateDate: date("f_create_date").defaultNow().notNull(),
  },
  (table) => [
    index("fk_serviceparticipants_f_lastuser_users_f_id").using(
      "btree",
      table.fId.asc().nullsLast().op("int4_ops"),
    ),
    index("users_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    uniqueIndex("users_idx1").using(
      "btree",
      table.fUsername.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.fLevels],
      foreignColumns: [levels.fId],
      name: "fk_users_levels",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.fOffice],
      foreignColumns: [offices.fId],
      name: "users_fk",
    }),
    unique("photo_file_name_unique").on(table.fPhotoFileName),
  ],
)

export const states = pgTable("states", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name"),
  fCode: char("f_code", { length: 2 }).notNull(),
})

export const appeals = pgTable(
  "appeals",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fRegistry: bigint("f_registry", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    fNumber: varchar("f_number", { length: 35 }).notNull(),
    fDate: date("f_date").notNull(),
    fLink: text("f_link"),
    fForum: integer("f_forum"),
    fInstance: varchar("f_instance", { length: 5 }).default("2").notNull(),
  },
  (table) => [
    index("IX_r_90").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_91").using(
      "btree",
      table.fRegistry.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_92").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("appeals_idx").using(
      "btree",
      table.fNumber.asc().nullsLast().op("text_ops"),
    ),
    index("appeals_regexp_replace_idx").using(
      "btree",
      sql`regexp_replace((f_number)::text, '[^0-9]'::text, ''::text, 'g':`,
    ),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_90",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fRegistry],
      foreignColumns: [registries.fId],
      name: "r_91",
    }),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [appealtypes.fId],
      name: "r_92",
    }),
  ],
)

export const typesopinions = pgTable(
  "typesopinions",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: varchar("f_name", { length: 200 }).notNull(),
    fCreatedAt: timestamp("f_created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreatedBy: bigint("f_created_by", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fExcludedBy: bigint("f_excluded_by", { mode: "number" }),
    fStatus: smallint("f_status").default(1).notNull(),
    fUpdatedAt: timestamp("f_updated_at", { mode: "string" }),
    fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fResponsible: integer("f_responsible").default(0).notNull(),
    fComments: varchar("f_comments", { length: 1000 }),
  },
  (table) => [unique("typesopinions_f_name_unique").on(table.fName)],
)

export const agreementspart = pgTable(
  "agreementspart",
  {
    fId: serial("f_id").notNull(),
    fAgreement: integer("f_agreement").notNull(),
    fDate: date("f_date").notNull(),
    fValue: numeric("f_value", { mode: "number" }).notNull(),
    fDatetimeCreate: timestamp("f_datetime_create", { mode: "string" })
      .defaultNow()
      .notNull(),
    fStatus: integer("f_status").default(0).notNull(),
    fDatePayment: date("f_date_payment"),
    fType: varchar("f_type", { length: 60 }),
    fNumber: integer("f_number"),
  },
  (table) => [
    index("agreementspart_idx").using(
      "btree",
      table.fAgreement.asc().nullsLast().op("int4_ops"),
    ),
    index("agreementspart_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAgreement],
      foreignColumns: [agreements.fId],
      name: "agreementspart_fk",
    }).onDelete("cascade"),
    unique("agreementpart_f_id_key").on(table.fId),
  ],
)

export const appointmenttypescombosdata = pgTable(
  "appointmenttypescombosdata",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fAppointmenttype: integer("f_appointmenttype"),
    fAppointmentcombo: integer("f_appointmentcombo"),
  },
  (table) => [
    index("appointmenttypescombosdata_f_appointmentcombo_idx").using(
      "btree",
      table.fAppointmentcombo.asc().nullsLast().op("int4_ops"),
    ),
    index("appointmenttypescombosdata_f_appointmenttype_idx").using(
      "btree",
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("appointmenttypescombosdata_idx").using(
      "btree",
      table.fAppointmentcombo.asc().nullsLast().op("int4_ops"),
      table.fAppointmenttype.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fAppointmenttype],
      foreignColumns: [appointmenttypes.fId],
      name: "appointmentstypeCombosData_fk1",
    }),
    foreignKey({
      columns: [table.fAppointmentcombo],
      foreignColumns: [appointmenttypescombos.fId],
      name: "appointmentstypeCombosData_fk2",
    }).onDelete("cascade"),
  ],
)

export const justicetype = pgTable("justicetype", {
  fId: serial("f_id").primaryKey().notNull(),
  fName: varchar("f_name").notNull(),
})

export const areas = pgTable(
  "areas",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fColorLegend: text("f_color_legend"),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [unique("areas_f_name_unique").on(table.fName)],
)

export const caldavRecurrence = pgTable("caldav_recurrence", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fId: bigint("f_id", { mode: "number" })
    .default(sql`nextval('seq_caldav_recurrence'::regclass)`)
    .primaryKey()
    .notNull(),
  fFreq: varchar("f_freq", { length: 20 }),
  fInterval: integer("f_interval"),
  fDtstart: timestamp("f_dtstart", { mode: "string" }),
  fUntil: timestamp("f_until", { mode: "string" }),
})

export const clientdocumentFiles = pgTable(
  "clientdocument_files",
  {
    fId: integer("f_id")
      .default(sql`nextval('clientdocument_files_f_id_seq'::regclass)`)
      .notNull(),
    fClientdocumentId: integer("f_clientdocument_id").notNull(),
    fFile: varchar("f_file", { length: 100 }).notNull(),
    fFilename: varchar("f_filename", { length: 100 }).notNull(),
    fSize: integer("f_size").notNull(),
    fInCloud: integer("f_in_cloud").default(0),
    fAttempts: integer("f_attempts").default(0).notNull(),
    fSenderror: text("f_senderror"),
  },
  (table) => [
    foreignKey({
      columns: [table.fClientdocumentId],
      foreignColumns: [clientdocuments.fId],
      name: "clientdocument_files_f_id_seq",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const consultationandadvice = pgTable(
  "consultationandadvice",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fStore: varchar("f_store", { length: 255 }),
    fDateRequest: date("f_date_request"),
    fResponsible: integer("f_responsible"),
    fDescription: text("f_description"),
    fStatus: integer("f_status").default(1),
    fDateDowntown: date("f_date_downtown"),
    fObservation: text("f_observation"),
    fFile: varchar("f_file"),
    fClient: integer("f_client"),
    fSubareaId: integer("f_subarea_id"),
    fDtains: timestamp("f_dtains", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    fSubjectId: integer("f_subject_id"),
    fAreaId: integer("f_area_id"),
    fUserins: integer("f_userins"),
    fFolder: varchar("f_folder", { length: 50 }).default(sql`NULL`),
    fClientPosition: integer("f_client_position").notNull(),
    fNumber: varchar("f_number", { length: 50 }),
    fOldId: varchar("f_old_id", { length: 50 }),
    fStrategic: integer("f_strategic").default(0).notNull(),
    fCloseComments: varchar("f_close_comments", { length: 500 }),
    fCloseDate: timestamp("f_close_date", { mode: "string" }),
    fCloseUser: integer("f_close_user"),
    fClosereason: integer("f_closereason"),
    fSegment: integer("f_segment"),
  },
  (table) => [
    index("fk_serviceparticipants_f_service_consultationandadvice_f_id").using(
      "btree",
      table.fId.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_area_id").using(
      "btree",
      table.fAreaId.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_client").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_client_position").using(
      "btree",
      table.fClientPosition.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_close_user").using(
      "btree",
      table.fCloseUser.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_closereason").using(
      "btree",
      table.fClosereason.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_responsible").using(
      "btree",
      table.fResponsible.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_subarea_id").using(
      "btree",
      table.fSubareaId.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_subject_id").using(
      "btree",
      table.fSubjectId.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_f_userins").using(
      "btree",
      table.fUserins.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_consultationandadvice_segment").using(
      "btree",
      table.fSegment.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "consultationandadvice_clients_fk",
    })
      .onUpdate("restrict")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fClosereason],
      foreignColumns: [closereasons.fId],
      name: "consultationandadvice_closereasons_fk",
    }),
    foreignKey({
      columns: [table.fCloseUser],
      foreignColumns: [users.fId],
      name: "consultationandadvice_closeusers_fk",
    }),
    foreignKey({
      columns: [table.fSegment],
      foreignColumns: [serviceSegments.fId],
      name: "consultationandadvice_f_segment_fkey",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fSubjectId],
      foreignColumns: [servicesubjects.fId],
      name: "consultationandadvice_f_subject_id_fkey",
    }),
    foreignKey({
      columns: [table.fResponsible],
      foreignColumns: [users.fId],
      name: "consultationandadvice_users_fk",
    })
      .onUpdate("restrict")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fClientPosition],
      foreignColumns: [positions.fId],
      name: "fk_f_client_position_positions_f_id",
    }),
    foreignKey({
      columns: [table.fAreaId],
      foreignColumns: [perfilConsultation.fId],
      name: "fk_f_services_area_id",
    }),
    foreignKey({
      columns: [table.fSubareaId],
      foreignColumns: [subareas.fId],
      name: "fk_f_subarea_id",
    }),
    foreignKey({
      columns: [table.fUserins],
      foreignColumns: [users.fId],
      name: "fk_userins",
    }),
    check(
      "consultationandadvice_f_strategic_check",
      sql`f_strategic = ANY (ARRAY[0, 1])`,
    ),
  ],
)

export const coordinatorsUsers = pgTable(
  "coordinators_users",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCoordinator: bigint("f_coordinator", { mode: "number" }).notNull(),
  },
  (table) => [
    index("coordinators_users_idx").using(
      "hash",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("coordinators_users_idx1").using(
      "hash",
      table.fCoordinator.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_user_coordinator").using(
      "btree",
      table.fCoordinator.asc().nullsLast().op("int8_ops"),
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "coordinators_users_fk",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fCoordinator],
      foreignColumns: [coordinators.fId],
      name: "fk_coordinator",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const diligencesHearingIntegracaoFiles = pgTable(
  "diligences_hearing_integracao_files",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDiligence: integer("f_diligence").notNull(),
    fType: integer("f_type").notNull(),
    fJuntado: smallint("f_juntado").notNull(),
    fFilename: varchar("f_filename").notNull(),
    fObs: text("f_obs"),
  },
  (table) => [
    foreignKey({
      columns: [table.fDiligence],
      foreignColumns: [diligencesHearingIntegracao.fId],
      name: "diligences_hearing_integracao_files_f_diligence_fkey",
    }),
  ],
)

export const dynamicItems = pgTable(
  "dynamic_items",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fType: varchar("f_type").notNull(),
    fTitle: varchar("f_title").notNull(),
    fText: text("f_text"),
    fTextSource: text("f_text_source"),
    fClient: integer("f_client"),
    fActive: smallint("f_active").default(1).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "dynamic_items_f_client_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const dynamicpartsRelPreliminary = pgTable(
  "dynamicparts_rel_preliminary",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fClient: integer("f_client"),
    fArea: integer("f_area"),
    fActiontype: integer("f_actiontype"),
    fJusticetype: integer("f_justicetype"),
    fPiece: integer("f_piece"),
    fActionobject: integer("f_actionobject"),
    fPreliminary: integer("f_preliminary"),
  },
  (table) => [
    index("dynamicparts_rel_preliminary_f_preliminary_idx").using(
      "btree",
      table.fPreliminary.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("dynamicparts_rel_preliminary_idx").using(
      "btree",
      table.fPreliminary.asc().nullsLast().op("int4_ops"),
      table.fPiece.asc().nullsLast().op("int4_ops"),
      table.fArea.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fPreliminary],
      foreignColumns: [dynamicpartsPreliminary.fId],
      name: "dynamicparts_rel_preliminary_fk",
    }).onDelete("cascade"),
  ],
)

export const processStopwatch = pgTable(
  "process_stopwatch",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fId: bigint("f_id", { mode: "number" })
      .default(sql`nextval('process_stopwatch_f_id_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcessId: bigint("f_process_id", { mode: "number" }).notNull(),
    fDate: date("f_date").notNull(),
    fTimespent: varchar("f_timespent", { length: 80 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProceedingtype: bigint("f_proceedingtype", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }),
    fText: text("f_text"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAppointment: bigint("f_appointment", { mode: "number" }),
    fHearing: integer("f_hearing"),
  },
  (table) => [
    index("idx_process_stopwatch_f_appointment").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_process_stopwatch_f_hearing").using(
      "btree",
      table.fHearing.asc().nullsLast().op("int4_ops"),
    ),
    index("idx_process_stopwatch_f_proceedingtype").using(
      "btree",
      table.fProceedingtype.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_process_stopwatch_f_process_id").using(
      "btree",
      table.fProcessId.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_process_stopwatch_f_user").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fAppointment],
      foreignColumns: [appointments.fId],
      name: "fk_appointment",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fProceedingtype],
      foreignColumns: [proceedingtypes.fId],
      name: "fk_proceedingtypes",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fProcessId],
      foreignColumns: [process.fId],
      name: "fk_process_id",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fHearing],
      foreignColumns: [hearings.fId],
      name: "process_stopwatch_fk",
    }),
  ],
)

export const publicationsWarning = pgTable(
  "publications_warning",
  {
    fId: integer("f_id")
      .default(sql`nextval('publications_war_seq'::regclass)`)
      .primaryKey()
      .notNull(),
    fName: varchar("f_name").notNull(),
    fStatus: integer("f_status").notNull(),
  },
  (table) => [
    index("publications_warning_idx").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("publications_warning_idx1").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
  ],
)

export const positions = pgTable(
  "positions",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fName: text("f_name").notNull(),
    fType: smallint("f_type"),
  },
  (table) => [
    index("fk_serviceparticipants_f_position_positions_f_id").using(
      "btree",
      table.fId.asc().nullsLast().op("int8_ops"),
    ),
  ],
)

export const nonconformings = pgTable(
  "nonconformings",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fHistory: bigint("f_history", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAppointment: bigint("f_appointment", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAuthorId: bigint("f_author_id", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    fDate: timestamp("f_date", { mode: "string" }),
    fProblem: text("f_problem"),
    fAuthorName: text("f_author_name"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" }),
    fLastupdateAuthor: text("f_lastupdate_author"),
    fHearing: integer("f_hearing"),
    fComments: text("f_comments"),
    fAnalysis: smallint("f_analysis").default(0).notNull(),
    fDescriptionanalysis: varchar("f_descriptionanalysis"),
    fSolutiondate: timestamp("f_solutiondate", { mode: "string" }),
    fSolution: integer("f_solution"),
  },
  (table) => [
    index("IX_r_183").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_184").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_186").using(
      "btree",
      table.fAppointment.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_187").using(
      "btree",
      table.fAuthorId.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_205").using(
      "btree",
      table.fHistory.asc().nullsLast().op("int8_ops"),
    ),
    index("nonconformings_idx").using(
      "btree",
      table.fHearing.asc().nullsLast().op("int4_ops"),
    ),
    index("nonconformings_idx1").using(
      "btree",
      table.fType.asc().nullsLast().op("int4_ops"),
      table.fAppointment.asc().nullsLast().op("int4_ops"),
      table.fHearing.asc().nullsLast().op("int4_ops"),
      table.fHistory.asc().nullsLast().op("int4_ops"),
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("nonconformings_idx2").using(
      "btree",
      table.fAnalysis.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fSolution],
      foreignColumns: [justificationsnonconforming.fId],
      name: "fk_nonconformings_solution_justificationsnonconforming_id",
    }),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [nonconformingtypes.fId],
      name: "r_183",
    }),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_184",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fAppointment],
      foreignColumns: [appointments.fId],
      name: "r_186",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fAuthorId],
      foreignColumns: [users.fId],
      name: "r_187",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
    foreignKey({
      columns: [table.fHistory],
      foreignColumns: [histories.fId],
      name: "r_205",
    }).onDelete("set null"),
  ],
)

export const systemProfilesUsers = pgTable(
  "system_profiles_users",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    fUser: bigserial("f_user", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProfile: bigint("f_profile", { mode: "number" }).notNull(),
  },
  (table) => [
    index("system_profiles_users_f_profile_idx").using(
      "btree",
      table.fProfile.asc().nullsLast().op("int8_ops"),
    ),
    index("system_profiles_users_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    uniqueIndex("system_profiles_users_idx1").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fProfile.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fProfile],
      foreignColumns: [systemProfiles.fId],
      name: "fk_profile",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "fk_user",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const publicationsRelationship = pgTable(
  "publications_relationship",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPublication: integer("f_publication").notNull(),
    fStatus: integer("f_status").notNull(),
    fProcess: integer("f_process"),
    fLawyer: integer("f_lawyer"),
    fClient: integer("f_client"),
    fRead: smallint("f_read").default(0).notNull(),
    fPublicationSimilar: integer("f_publication_similar"),
  },
  (table) => [
    index("publications_relationship_idx").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_relationship_idx1").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("publications_relationship_idx10").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
      table.fStatus.asc().nullsLast().op("int4_ops"),
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fLawyer.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_relationship_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_relationship_idx3").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_relationship_idx4").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_relationship_idx5").using(
      "btree",
      table.fRead.asc().nullsLast().op("int2_ops"),
    ),
    index("publications_relationship_idx6").using(
      "btree",
      table.fRead.asc().nullsLast().op("int4_ops"),
      table.fStatus.asc().nullsLast().op("int2_ops"),
    ),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "fk_publications_relationship_f_client_clients_f_id",
    }).onDelete("restrict"),
    foreignKey({
      columns: [table.fPublicationSimilar],
      foreignColumns: [publications.fId],
      name: "publications_relationship_f_publication_similar_fkey",
    }).onDelete("set default"),
    foreignKey({
      columns: [table.fPublication],
      foreignColumns: [publications.fId],
      name: "publications_relationship_fk",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "publications_relationship_fk1",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "publications_relationship_fk2",
    }).onDelete("cascade"),
  ],
)

export const requestScheduling = pgTable(
  "request_scheduling",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fIntimationDate: date("f_intimation_date"),
    fIntimationType: integer("f_intimation_type"),
    fAppointmentDate: date("f_appointment_date"),
    fAppointmentType: integer("f_appointment_type"),
    fUserId: integer("f_user_id"),
    fStatus: integer("f_status").default(0),
    fProcess: integer("f_process"),
    fDateRequest: date("f_date_request").defaultNow(),
    fReason: text("f_reason"),
    fComments: text("f_comments"),
    fTextAppointment: text("f_text_appointment"),
    fRequestuserId: integer("f_requestuser_id"),
    fDatefatal: date("f_datefatal"),
    fProcessnumber: varchar("f_processnumber", { length: 255 }),
    fDelegate: integer("f_delegate"),
    fUserAnalyse: integer("f_user_analyse"),
    fDateAnalyse: date("f_date_analyse"),
  },
  (table) => [
    index("request_scheduling_idx").using(
      "btree",
      table.fIntimationType.asc().nullsLast().op("int4_ops"),
    ),
    index("request_scheduling_idx1").using(
      "btree",
      table.fAppointmentType.asc().nullsLast().op("int4_ops"),
    ),
    index("request_scheduling_idx2").using(
      "btree",
      table.fUserId.asc().nullsLast().op("int4_ops"),
    ),
    index("request_scheduling_idx3").using(
      "btree",
      table.fStatus.asc().nullsLast().op("int4_ops"),
    ),
    index("request_scheduling_idx4").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("request_scheduling_idx5").using(
      "btree",
      table.fRequestuserId.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fUserAnalyse],
      foreignColumns: [users.fId],
      name: "fk_user_analyse",
    }),
  ],
)

export const monetaryParcelas = pgTable(
  "monetary_parcelas",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fMonetaryCalc: integer("f_monetary_calc").notNull(),
    fUser: integer("f_user"),
    fValorNominal: numeric("f_valor_nominal", { mode: "number" }),
    fDataParcela: date("f_data_parcela"),
    fValorAtualizado: numeric("f_valor_atualizado", { mode: "number" }),
    fValorJuros: numeric("f_valor_juros", { mode: "number" }),
    fValorCorrigido: numeric("f_valor_corrigido", { mode: "number" }),
    fTipoEntrada: varchar("f_tipo_entrada"),
    fProRata: numeric("f_pro_rata", { mode: "number" }),
    fInicioCorrecao: date("f_inicio_correcao"),
    fFimCorrecao: date("f_fim_correcao"),
    fInicioJuros: date("f_inicio_juros"),
    fFimJuros: date("f_fim_juros"),
    fQuantidadeJuros: numeric("f_quantidade_juros", { mode: "number" }),
    fIndiceNegativo: numeric("f_indice_negativo", { mode: "number" }),
    fDescricao: varchar("f_descricao"),
    fIndice: integer("f_indice"),
  },
  (table) => [
    index("monetary_parcelas_idx").using(
      "btree",
      table.fMonetaryCalc.asc().nullsLast().op("int4_ops"),
    ),
    index("monetary_parcelas_idx1").using(
      "btree",
      table.fIndice.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fMonetaryCalc],
      foreignColumns: [monetaryCalc.fId],
      name: "monetary_parcelas_fk",
    }).onDelete("cascade"),
  ],
)

export const publicationsTempRelationship = pgTable(
  "publications_temp_relationship",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fPublication: integer("f_publication").notNull(),
    fProcess: integer("f_process").default(0),
    fLawyer: integer("f_lawyer").default(0),
    fClient: integer("f_client").default(0),
  },
  (table) => [
    index("publications_temp_relationship_idx").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
    ),
    uniqueIndex("publications_temp_relationship_idx1").using(
      "btree",
      table.fPublication.asc().nullsLast().op("int4_ops"),
      table.fProcess.asc().nullsLast().op("int4_ops"),
      table.fLawyer.asc().nullsLast().op("int4_ops"),
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_temp_relationship_idx2").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_temp_relationship_idx3").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int4_ops"),
    ),
    index("publications_temp_relationship_idx4").using(
      "btree",
      table.fClient.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fPublication],
      foreignColumns: [publicationsTemp.codigo],
      name: "publications_temp_relationship_fk",
    }).onDelete("cascade"),
  ],
)

export const valuetypes = pgTable("valuetypes", {
  fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
  fName: text("f_name").notNull(),
  fRefundable: smallint("f_refundable"),
})

export const contingencyvaluehistory = pgTable(
  "contingencyvaluehistory",
  {
    fId: bigserial("f_id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fType: bigint("f_type", { mode: "number" }),
    fValue: numeric("f_value", { mode: "number" }),
    fDate: date("f_date"),
    fComments: text("f_comments"),
  },
  (table) => [
    index("IX_r_149").using(
      "btree",
      table.fType.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_150").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fType],
      foreignColumns: [contingencyvaluetypes.fId],
      name: "r_149",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_150",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
)

export const resourcesfinancial = pgTable(
  "resourcesfinancial",
  {
    fId: serial("f_id").primaryKey().notNull(),
    fDate: timestamp("f_date", { mode: "string" }).defaultNow().notNull(),
    fUserSolicitante: integer("f_user_solicitante").notNull(),
    fProcess: integer("f_process").notNull(),
    fTiposolicitacao: varchar("f_tiposolicitacao").default("Não Selecionado"),
    fMotivoadiantamento: integer("f_motivoadiantamento"),
    fTipoadiantamento: varchar("f_tipoadiantamento").default("Não Selecionado"),
    fMotivodepositojudicial: varchar("f_motivodepositojudicial").default(
      "Não Selecionado",
    ),
    fTipodepositojudicial: varchar("f_tipodepositojudicial").default(
      "Não Selecionado",
    ),
    fDateFatal: date("f_date_fatal"),
    fChequenominal: varchar("f_chequenominal"),
    fValorprincipal: numeric("f_valorprincipal", { mode: "number" }).notNull(),
    fJustificativa: varchar("f_justificativa"),
    fFileobs: varchar("f_fileobs"),
    fFile: varchar("f_file"),
    fFilemd5: varchar("f_filemd5"),
    fAprovado: integer("f_aprovado").default(1).notNull(),
    fDateAprovado: timestamp("f_date_aprovado", { mode: "string" }),
    fObservationFinal: varchar("f_observation_final"),
    fDateFinal: date("f_date_final"),
    fLinhaDigitavel: varchar("f_linha_digitavel", { length: 100 }),
    fBancopagador: varchar("f_bancopagador", { length: 100 }),
    fUserVisualizedReturn: smallint("f_user_visualized_return")
      .default(0)
      .notNull(),
    fDatetimeCreated: timestamp("f_datetime_created", { mode: "string" })
      .defaultNow()
      .notNull(),
    fUserAprovou: integer("f_user_aprovou"),
    fAprovGeral: integer("f_aprov_geral"),
    fTipocusta: integer("f_tipocusta"),
    fDateuploadrobo: date("f_dateuploadrobo"),
    fLotelsh: integer("f_lotelsh"),
    fNumpis: varchar("f_numpis", { length: 20 }).default(sql`NULL`),
    fTitularconta: varchar("f_titularconta", { length: 255 }).default(
      sql`NULL`,
    ),
    fModopagamento: varchar("f_modopagamento", { length: 100 }).default(
      sql`NULL`,
    ),
    fAgencia: varchar("f_agencia", { length: 20 }).default(sql`NULL`),
    fNumconta: varchar("f_numconta", { length: 50 }).default(sql`NULL`),
    fTipoconta: varchar("f_tipoconta", { length: 100 }).default(sql`NULL`),
    fCpfcnpj: varchar("f_cpfcnpj", { length: 20 }).default(sql`NULL`),
    fValorLoteLsh: numeric("f_valor_lote_lsh", { mode: "number" }),
    fLupaAvailable: smallint("f_lupa_available").default(1),
    fVerba: integer("f_verba"),
    fProtocoloItau: varchar("f_protocolo_itau", { length: 100 }),
    fReciboFaturamento: integer("f_recibo_faturamento"),
    fInformation: text("f_information"),
    fUserCreated: integer("f_user_created").default(211).notNull(),
    fReadLogistic: smallint("f_read_logistic"),
    fRespLogistic: integer("f_resp_logistic"),
  },
  (table) => [
    index("resourcesfinancial_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int4_ops"),
    ),
    index("resourcesfinancial_idx1").using(
      "btree",
      table.fDateFatal.asc().nullsLast().op("date_ops"),
    ),
    index("resourcesfinancial_idx2").using(
      "btree",
      table.fAprovado.asc().nullsLast().op("int4_ops"),
    ),
    index("resourcesfinancial_idx4").using(
      "btree",
      table.fMotivoadiantamento.asc().nullsLast().op("int4_ops"),
    ),
    index("resourcesfinancial_idx5").using(
      "btree",
      table.fTipocusta.asc().nullsLast().op("int4_ops"),
    ),
    index("resourcesfinancial_idx6").using(
      "btree",
      table.fTiposolicitacao.asc().nullsLast().op("text_ops"),
    ),
    index("resourcesfinancial_idx8").using(
      "btree",
      table.fUserSolicitante.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.fMotivoadiantamento],
      foreignColumns: [resourcesfinancialMotivoadiantamento.fId],
      name: "resourcesfinancial_fk",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "resourcesfinancial_fk1",
    }).onDelete("cascade"),
  ],
)

export const areasmanagers = pgTable(
  "areasmanagers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }).notNull(),
  },
  (table) => [
    index("IX_r_47").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_48").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("areasmanagers_f_area_f_user_idx").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_47",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_48",
    }).onDelete("cascade"),
    primaryKey({
      columns: [table.fUser, table.fArea],
      name: "pk_areasmanagers",
    }),
  ],
)

export const controlnotelawyers = pgTable(
  "controlnotelawyers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index("controlnotelawyers_IX_r_179").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("controlnotelawyers_IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("controlnotelawyers_f_user_f_lawyer_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_179",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fLawyer, table.fUser],
      name: "controlnotelawyers_pk_controluserslawyers",
    }),
  ],
)

export const officesmanagers = pgTable(
  "officesmanagers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOffice: bigint("f_office", { mode: "number" }).notNull(),
  },
  (table) => [
    index("IX_r_45").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_46").using(
      "btree",
      table.fOffice.asc().nullsLast().op("int8_ops"),
    ),
    index("officesmanagers_f_office_f_user_idx").using(
      "btree",
      table.fOffice.asc().nullsLast().op("int8_ops"),
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_45",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fOffice],
      foreignColumns: [offices.fId],
      name: "r_46",
    }).onDelete("cascade"),
    primaryKey({
      columns: [table.fUser, table.fOffice],
      name: "pk_officesmanagers",
    }),
  ],
)

export const agreementusersareas = pgTable(
  "agreementusersareas",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fStatus: smallint("f_status").default(1),
  },
  (table) => [
    index("IX_r_137").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_139").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("agreementusersareas_f_user_f_area_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_137",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_139",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fArea, table.fUser],
      name: "pk_agreementusersareas",
    }),
  ],
)

export const controluserslawyers = pgTable(
  "controluserslawyers",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLawyer: bigint("f_lawyer", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fId: bigserial("f_id", { mode: "bigint" }).notNull(),
  },
  (table) => [
    index("IX_r_179").using(
      "btree",
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_181").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("controluserslawyers_f_user_f_lawyer_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fLawyer.asc().nullsLast().op("int8_ops"),
    ),
    index("controluserslawyers_idx").using(
      "btree",
      table.fId.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fLawyer],
      foreignColumns: [lawyers.fId],
      name: "r_179",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_181",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fLawyer, table.fUser],
      name: "pk_controluserslawyers",
    }),
  ],
)

export const officesstats = pgTable(
  "officesstats",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fOffice: bigint("f_office", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fTotal: bigint("f_total", { mode: "number" }),
  },
  (table) => [
    index("IX_r_110").using(
      "btree",
      table.fOffice.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_111").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("officesstats_f_area_f_office_idx").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
      table.fOffice.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fOffice],
      foreignColumns: [offices.fId],
      name: "r_110",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_111",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fOffice, table.fArea],
      name: "pk_officesstats",
    }),
  ],
)

export const areaagreementspecificdatas = pgTable(
  "areaagreementspecificdatas",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAreaagreementspecific: bigint("f_areaagreementspecific", {
      mode: "number",
    }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fAgreement: bigint("f_agreement", { mode: "number" }).notNull(),
    fText: text("f_text"),
    fName: text("f_name"),
    fValue: numeric("f_value", { mode: "number" }),
    fDate: date("f_date"),
  },
  (table) => [
    index("IX_r_147").using(
      "btree",
      table.fAreaagreementspecific.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_148").using(
      "btree",
      table.fAgreement.asc().nullsLast().op("int8_ops"),
    ),
    index(
      "areaagreementspecificdatas_f_agreement_f_areaagreementspecific_",
    ).using(
      "btree",
      table.fAgreement.asc().nullsLast().op("int8_ops"),
      table.fAreaagreementspecific.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fAreaagreementspecific],
      foreignColumns: [areaagreementspecifics.fId],
      name: "r_147",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fAgreement],
      foreignColumns: [agreements.fId],
      name: "r_148",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fAreaagreementspecific, table.fAgreement],
      name: "pk_areaagreementspecificdatas",
    }),
  ],
)

export const departmentsstats = pgTable(
  "departmentsstats",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fArea: bigint("f_area", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClient: bigint("f_client", { mode: "number" }).notNull(),
    fRemoteValue: numeric("f_remote_value", { mode: "number" }),
    fTotalValue: numeric("f_total_value", { mode: "number" }),
    fPossibleValue: numeric("f_possible_value", { mode: "number" }),
    fTotalContingency: numeric("f_total_contingency", { mode: "number" }),
    fProbablyValue: numeric("f_probably_value", { mode: "number" }),
  },
  (table) => [
    index("IX_r_169").using(
      "btree",
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_170").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
    ),
    index("departmentsstats_f_client_f_area_idx").using(
      "btree",
      table.fClient.asc().nullsLast().op("int8_ops"),
      table.fArea.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fArea],
      foreignColumns: [areas.fId],
      name: "r_169",
    })
      .onUpdate("restrict")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fClient],
      foreignColumns: [clients.fId],
      name: "r_170",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fArea, table.fClient],
      name: "pk_departmentsstats",
    }),
  ],
)

export const clientspecificdatas = pgTable(
  "clientspecificdatas",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fClientspecific: bigint("f_clientspecific", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fProcess: bigint("f_process", { mode: "number" }).notNull(),
    fValue: numeric("f_value", { mode: "number" }),
    fText: text("f_text"),
    fName: varchar("f_name", { length: 200 }),
    fDate: date("f_date"),
    fInserted: timestamp("f_inserted", { mode: "string" })
      .defaultNow()
      .notNull(),
    fDateImported: date("f_date_imported"),
  },
  (table) => [
    index("IX_r_38").using(
      "btree",
      table.fClientspecific.asc().nullsLast().op("int8_ops"),
    ),
    index("IX_r_39").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
    ),
    index("clientspecificdatas_f_process_f_clientspecific_idx").using(
      "btree",
      table.fProcess.asc().nullsLast().op("int8_ops"),
      table.fClientspecific.asc().nullsLast().op("int8_ops"),
    ),
    index("clientspecificdatas_idx").using(
      "btree",
      table.fValue.asc().nullsLast().op("numeric_ops"),
    ),
    index("clientspecificdatas_idx1").using(
      "btree",
      table.fText.asc().nullsLast().op("text_ops"),
    ),
    index("clientspecificdatas_idx2").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    index("clientspecificdatas_idx3").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    foreignKey({
      columns: [table.fClientspecific],
      foreignColumns: [clientspecifics.fId],
      name: "r_38",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fProcess],
      foreignColumns: [process.fId],
      name: "r_39",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fClientspecific, table.fProcess],
      name: "pk_clientspecificdatas",
    }),
  ],
)

export const financialprovides = pgTable(
  "financialprovides",
  {
    fWeek: bigint("f_week", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fUser: bigint("f_user", { mode: "number" }).notNull(),
    fYear: bigint("f_year", { mode: "number" }).notNull(),
    fMonday: numeric("f_monday", { mode: "number" }),
    fTuesday: numeric("f_tuesday", { mode: "number" }),
    fWednesday: numeric("f_wednesday", { mode: "number" }),
    fThursday: numeric("f_thursday", { mode: "number" }),
    fFriday: numeric("f_friday", { mode: "number" }),
    fTotal: numeric("f_total", { mode: "number" }),
    fBalance: numeric("f_balance", { mode: "number" }),
  },
  (table) => [
    index("IX_r_125").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    index("financialprovides_f_user_f_week_f_year_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fWeek.asc().nullsLast().op("int8_ops"),
      table.fYear.asc().nullsLast().op("int8_ops"),
    ),
    index("financialprovides_f_user_f_year_f_week_idx").using(
      "btree",
      table.fUser.asc().nullsLast().op("int8_ops"),
      table.fYear.asc().nullsLast().op("int8_ops"),
      table.fWeek.asc().nullsLast().op("int8_ops"),
    ),
    index("financialprovides_f_year_f_week_f_user_idx").using(
      "btree",
      table.fYear.asc().nullsLast().op("int8_ops"),
      table.fWeek.asc().nullsLast().op("int8_ops"),
      table.fUser.asc().nullsLast().op("int8_ops"),
    ),
    foreignKey({
      columns: [table.fUser],
      foreignColumns: [users.fId],
      name: "r_125",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({
      columns: [table.fWeek, table.fUser, table.fYear],
      name: "pk_financialprovides",
    }),
  ],
)

export const servicesCustomfieldsdatas = pgTable(
  "services_customfieldsdatas",
  {
    fServicescustomfields: integer("f_servicescustomfields").notNull(),
    fService: integer("f_service").notNull(),
    fValue: numeric("f_value", { mode: "number" }),
    fText: text("f_text"),
    fName: varchar("f_name", { length: 200 }),
    fDate: date("f_date"),
    fCreateDate: timestamp("f_create_date", { mode: "string" })
      .defaultNow()
      .notNull(),
    fDateImported: date("f_date_imported"),
    fLastupdate: timestamp("f_lastupdate", { mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fLastuser: bigint("f_lastuser", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fCreateUser: bigint("f_create_user", { mode: "number" }).notNull(),
  },
  (table) => [
    index("idx_services_customfieldsdatas_create_user").using(
      "btree",
      table.fCreateUser.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_services_customfieldsdatas_lastuser").using(
      "btree",
      table.fLastuser.asc().nullsLast().op("int8_ops"),
    ),
    index("services_customfieldsdatas_date").using(
      "btree",
      table.fDate.asc().nullsLast().op("date_ops"),
    ),
    index("services_customfieldsdatas_name").using(
      "btree",
      table.fName.asc().nullsLast().op("text_ops"),
    ),
    index("services_customfieldsdatas_service").using(
      "btree",
      table.fService.asc().nullsLast().op("int4_ops"),
    ),
    index("services_customfieldsdatas_services_customfields").using(
      "btree",
      table.fServicescustomfields.asc().nullsLast().op("int4_ops"),
    ),
    index("services_customfieldsdatas_text").using(
      "btree",
      table.fText.asc().nullsLast().op("text_ops"),
    ),
    index(
      "services_customfieldsdatas_unique_service_servicescustomfields",
    ).using(
      "btree",
      table.fService.asc().nullsLast().op("int4_ops"),
      table.fServicescustomfields.asc().nullsLast().op("int4_ops"),
    ),
    index("services_customfieldsdatas_value").using(
      "btree",
      table.fValue.asc().nullsLast().op("numeric_ops"),
    ),
    foreignKey({
      columns: [table.fCreateUser],
      foreignColumns: [users.fId],
      name: "fk_services_customfieldsdatas_createusers_f_id",
    }),
    foreignKey({
      columns: [table.fService],
      foreignColumns: [consultationandadvice.fId],
      name: "fk_services_customfieldsdatas_service_id",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.fServicescustomfields],
      foreignColumns: [servicesCustomfields.fId],
      name: "fk_services_customfieldsdatas_services_customfields_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.fLastuser],
      foreignColumns: [users.fId],
      name: "fk_services_customfieldsdatas_users_f_id",
    }),
    primaryKey({
      columns: [table.fServicescustomfields, table.fService],
      name: "pk_services_customfieldsdatas",
    }),
  ],
)

export const tpuItens = pgTable(
  "tpu_itens",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    codItem: bigint("cod_item", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    codItemPai: bigint("cod_item_pai", { mode: "number" }),
    tipoItem: varchar("tipo_item", { length: 1 }).notNull(),
    nome: varchar({ length: 255 }).notNull(),
    situacao: varchar({ length: 1 }).default("A").notNull(),
    datInclusao: date("dat_inclusao"),
    usuInclusao: varchar("usu_inclusao", { length: 30 }),
    datAlteracao: date("dat_alteracao"),
    usuAlteracao: varchar("usu_alteracao", { length: 30 }),
    datVersao: date("dat_versao"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numVersaoLancado: bigint("num_versao_lancado", { mode: "number" }),
    datInativacao: date("dat_inativacao"),
    datReativacao: date("dat_reativacao"),
    datInicioVigencia: date("dat_inicio_vigencia"),
    datFimVigencia: date("dat_fim_vigencia"),
    tipHierarquiaItem: varchar("tip_hierarquia_item", { length: 1 }),
    dscCaminhoCompleto: varchar("dsc_caminho_completo", { length: 1000 }),
  },
  (table) => [
    index("idx_tpu_itens_cod_item").using(
      "btree",
      table.codItem.asc().nullsLast().op("int8_ops"),
    ),
    index("idx_tpu_itens_cod_item_pai").using(
      "btree",
      table.codItemPai.asc().nullsLast().op("text_ops"),
      table.tipoItem.asc().nullsLast().op("text_ops"),
    ),
    index("idx_tpu_itens_lower_immutable_unaccent_trim_nome").using(
      "btree",
      sql`immutable_unaccent(lower(TRIM(BOTH FROM nome)))`,
    ),
    index("idx_tpu_itens_nome").using(
      "btree",
      table.nome.asc().nullsLast().op("text_ops"),
    ),
    foreignKey({
      columns: [table.codItemPai, table.tipoItem],
      foreignColumns: [table.codItem, table.tipoItem],
      name: "fk_tpu_itens_cod_item_pai",
    }),
    primaryKey({
      columns: [table.codItem, table.tipoItem],
      name: "tpu_itens_pkey",
    }),
  ],
)
export const firstadverseparticipant = pgView("firstadverseparticipant", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  fProcess: bigint("f_process", { mode: "number" }),
  fParticipantname: text("f_participantname"),
}).as(
  sql`SELECT f_id AS f_process, ( SELECT participants.f_name FROM participants JOIN processparticipants ON participants.f_id = processparticipants.f_participant WHERE processparticipants.f_type::smallint = 0 AND processparticipants.f_process = process.f_id ORDER BY processparticipants.f_index LIMIT 1) AS f_participantname FROM process`,
)
