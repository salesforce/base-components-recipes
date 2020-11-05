/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { default as action_add_contact } from './action/add_contact.html';
import { default as action_add_file } from './action/add_file.html';
import { default as action_add_photo_video } from './action/add_photo_video.html';
import { default as action_add_relationship } from './action/add_relationship.html';
import { default as action_announcement } from './action/announcement.html';
import { default as action_apex } from './action/apex.html';
import { default as action_approval } from './action/approval.html';
import { default as action_back } from './action/back.html';
import { default as action_bug } from './action/bug.html';
import { default as action_call } from './action/call.html';
import { default as action_canvas } from './action/canvas.html';
import { default as action_change_owner } from './action/change_owner.html';
import { default as action_change_record_type } from './action/change_record_type.html';
import { default as action_check } from './action/check.html';
import { default as action_clone } from './action/clone.html';
import { default as action_close } from './action/close.html';
import { default as action_defer } from './action/defer.html';
import { default as action_delete } from './action/delete.html';
import { default as action_description } from './action/description.html';
import { default as action_dial_in } from './action/dial_in.html';
import { default as action_download } from './action/download.html';
import { default as action_edit } from './action/edit.html';
import { default as action_edit_groups } from './action/edit_groups.html';
import { default as action_edit_relationship } from './action/edit_relationship.html';
import { default as action_email } from './action/email.html';
import { default as action_fallback } from './action/fallback.html';
import { default as action_filter } from './action/filter.html';
import { default as action_flow } from './action/flow.html';
import { default as action_follow } from './action/follow.html';
import { default as action_following } from './action/following.html';
import { default as action_freeze_user } from './action/freeze_user.html';
import { default as action_goal } from './action/goal.html';
import { default as action_google_news } from './action/google_news.html';
import { default as action_info } from './action/info.html';
import { default as action_join_group } from './action/join_group.html';
import { default as action_lead_convert } from './action/lead_convert.html';
import { default as action_leave_group } from './action/leave_group.html';
import { default as action_log_a_call } from './action/log_a_call.html';
import { default as action_log_event } from './action/log_event.html';
import { default as action_manage_perm_sets } from './action/manage_perm_sets.html';
import { default as action_map } from './action/map.html';
import { default as action_more } from './action/more.html';
import { default as action_new } from './action/new.html';
import { default as action_new_account } from './action/new_account.html';
import { default as action_new_campaign } from './action/new_campaign.html';
import { default as action_new_case } from './action/new_case.html';
import { default as action_new_child_case } from './action/new_child_case.html';
import { default as action_new_contact } from './action/new_contact.html';
import { default as action_new_custom1 } from './action/new_custom1.html';
import { default as action_new_custom10 } from './action/new_custom10.html';
import { default as action_new_custom100 } from './action/new_custom100.html';
import { default as action_new_custom11 } from './action/new_custom11.html';
import { default as action_new_custom12 } from './action/new_custom12.html';
import { default as action_new_custom13 } from './action/new_custom13.html';
import { default as action_new_custom14 } from './action/new_custom14.html';
import { default as action_new_custom15 } from './action/new_custom15.html';
import { default as action_new_custom16 } from './action/new_custom16.html';
import { default as action_new_custom17 } from './action/new_custom17.html';
import { default as action_new_custom18 } from './action/new_custom18.html';
import { default as action_new_custom19 } from './action/new_custom19.html';
import { default as action_new_custom2 } from './action/new_custom2.html';
import { default as action_new_custom20 } from './action/new_custom20.html';
import { default as action_new_custom21 } from './action/new_custom21.html';
import { default as action_new_custom22 } from './action/new_custom22.html';
import { default as action_new_custom23 } from './action/new_custom23.html';
import { default as action_new_custom24 } from './action/new_custom24.html';
import { default as action_new_custom25 } from './action/new_custom25.html';
import { default as action_new_custom26 } from './action/new_custom26.html';
import { default as action_new_custom27 } from './action/new_custom27.html';
import { default as action_new_custom28 } from './action/new_custom28.html';
import { default as action_new_custom29 } from './action/new_custom29.html';
import { default as action_new_custom3 } from './action/new_custom3.html';
import { default as action_new_custom30 } from './action/new_custom30.html';
import { default as action_new_custom31 } from './action/new_custom31.html';
import { default as action_new_custom32 } from './action/new_custom32.html';
import { default as action_new_custom33 } from './action/new_custom33.html';
import { default as action_new_custom34 } from './action/new_custom34.html';
import { default as action_new_custom35 } from './action/new_custom35.html';
import { default as action_new_custom36 } from './action/new_custom36.html';
import { default as action_new_custom37 } from './action/new_custom37.html';
import { default as action_new_custom38 } from './action/new_custom38.html';
import { default as action_new_custom39 } from './action/new_custom39.html';
import { default as action_new_custom4 } from './action/new_custom4.html';
import { default as action_new_custom40 } from './action/new_custom40.html';
import { default as action_new_custom41 } from './action/new_custom41.html';
import { default as action_new_custom42 } from './action/new_custom42.html';
import { default as action_new_custom43 } from './action/new_custom43.html';
import { default as action_new_custom44 } from './action/new_custom44.html';
import { default as action_new_custom45 } from './action/new_custom45.html';
import { default as action_new_custom46 } from './action/new_custom46.html';
import { default as action_new_custom47 } from './action/new_custom47.html';
import { default as action_new_custom48 } from './action/new_custom48.html';
import { default as action_new_custom49 } from './action/new_custom49.html';
import { default as action_new_custom5 } from './action/new_custom5.html';
import { default as action_new_custom50 } from './action/new_custom50.html';
import { default as action_new_custom51 } from './action/new_custom51.html';
import { default as action_new_custom52 } from './action/new_custom52.html';
import { default as action_new_custom53 } from './action/new_custom53.html';
import { default as action_new_custom54 } from './action/new_custom54.html';
import { default as action_new_custom55 } from './action/new_custom55.html';
import { default as action_new_custom56 } from './action/new_custom56.html';
import { default as action_new_custom57 } from './action/new_custom57.html';
import { default as action_new_custom58 } from './action/new_custom58.html';
import { default as action_new_custom59 } from './action/new_custom59.html';
import { default as action_new_custom6 } from './action/new_custom6.html';
import { default as action_new_custom60 } from './action/new_custom60.html';
import { default as action_new_custom61 } from './action/new_custom61.html';
import { default as action_new_custom62 } from './action/new_custom62.html';
import { default as action_new_custom63 } from './action/new_custom63.html';
import { default as action_new_custom64 } from './action/new_custom64.html';
import { default as action_new_custom65 } from './action/new_custom65.html';
import { default as action_new_custom66 } from './action/new_custom66.html';
import { default as action_new_custom67 } from './action/new_custom67.html';
import { default as action_new_custom68 } from './action/new_custom68.html';
import { default as action_new_custom69 } from './action/new_custom69.html';
import { default as action_new_custom7 } from './action/new_custom7.html';
import { default as action_new_custom70 } from './action/new_custom70.html';
import { default as action_new_custom71 } from './action/new_custom71.html';
import { default as action_new_custom72 } from './action/new_custom72.html';
import { default as action_new_custom73 } from './action/new_custom73.html';
import { default as action_new_custom74 } from './action/new_custom74.html';
import { default as action_new_custom75 } from './action/new_custom75.html';
import { default as action_new_custom76 } from './action/new_custom76.html';
import { default as action_new_custom77 } from './action/new_custom77.html';
import { default as action_new_custom78 } from './action/new_custom78.html';
import { default as action_new_custom79 } from './action/new_custom79.html';
import { default as action_new_custom8 } from './action/new_custom8.html';
import { default as action_new_custom80 } from './action/new_custom80.html';
import { default as action_new_custom81 } from './action/new_custom81.html';
import { default as action_new_custom82 } from './action/new_custom82.html';
import { default as action_new_custom83 } from './action/new_custom83.html';
import { default as action_new_custom84 } from './action/new_custom84.html';
import { default as action_new_custom85 } from './action/new_custom85.html';
import { default as action_new_custom86 } from './action/new_custom86.html';
import { default as action_new_custom87 } from './action/new_custom87.html';
import { default as action_new_custom88 } from './action/new_custom88.html';
import { default as action_new_custom89 } from './action/new_custom89.html';
import { default as action_new_custom9 } from './action/new_custom9.html';
import { default as action_new_custom90 } from './action/new_custom90.html';
import { default as action_new_custom91 } from './action/new_custom91.html';
import { default as action_new_custom92 } from './action/new_custom92.html';
import { default as action_new_custom93 } from './action/new_custom93.html';
import { default as action_new_custom94 } from './action/new_custom94.html';
import { default as action_new_custom95 } from './action/new_custom95.html';
import { default as action_new_custom96 } from './action/new_custom96.html';
import { default as action_new_custom97 } from './action/new_custom97.html';
import { default as action_new_custom98 } from './action/new_custom98.html';
import { default as action_new_custom99 } from './action/new_custom99.html';
import { default as action_new_event } from './action/new_event.html';
import { default as action_new_group } from './action/new_group.html';
import { default as action_new_lead } from './action/new_lead.html';
import { default as action_new_note } from './action/new_note.html';
import { default as action_new_notebook } from './action/new_notebook.html';
import { default as action_new_opportunity } from './action/new_opportunity.html';
import { default as action_new_person_account } from './action/new_person_account.html';
import { default as action_new_task } from './action/new_task.html';
import { default as action_password_unlock } from './action/password_unlock.html';
import { default as action_preview } from './action/preview.html';
import { default as action_priority } from './action/priority.html';
import { default as action_question_post_action } from './action/question_post_action.html';
import { default as action_quote } from './action/quote.html';
import { default as action_recall } from './action/recall.html';
import { default as action_record } from './action/record.html';
import { default as action_refresh } from './action/refresh.html';
import { default as action_reject } from './action/reject.html';
import { default as action_remove } from './action/remove.html';
import { default as action_remove_relationship } from './action/remove_relationship.html';
import { default as action_reset_password } from './action/reset_password.html';
import { default as action_script } from './action/script.html';
import { default as action_share } from './action/share.html';
import { default as action_share_file } from './action/share_file.html';
import { default as action_share_link } from './action/share_link.html';
import { default as action_share_poll } from './action/share_poll.html';
import { default as action_share_post } from './action/share_post.html';
import { default as action_share_thanks } from './action/share_thanks.html';
import { default as action_sort } from './action/sort.html';
import { default as action_submit_for_approval } from './action/submit_for_approval.html';
import { default as action_update } from './action/update.html';
import { default as action_update_status } from './action/update_status.html';
import { default as action_upload } from './action/upload.html';
import { default as action_user } from './action/user.html';
import { default as action_user_activation } from './action/user_activation.html';
import { default as action_view_relationship } from './action/view_relationship.html';
import { default as action_web_link } from './action/web_link.html';
import { default as standard_account } from './standard/account.html';
import { default as standard_action_list_component } from './standard/action_list_component.html';
import { default as standard_actions_and_buttons } from './standard/actions_and_buttons.html';
import { default as standard_activations } from './standard/activations.html';
import { default as standard_address } from './standard/address.html';
import { default as standard_agent_session } from './standard/agent_session.html';
import { default as standard_all } from './standard/all.html';
import { default as standard_announcement } from './standard/announcement.html';
import { default as standard_answer_best } from './standard/answer_best.html';
import { default as standard_answer_private } from './standard/answer_private.html';
import { default as standard_answer_public } from './standard/answer_public.html';
import { default as standard_apex } from './standard/apex.html';
import { default as standard_apex_plugin } from './standard/apex_plugin.html';
import { default as standard_app } from './standard/app.html';
import { default as standard_approval } from './standard/approval.html';
import { default as standard_apps } from './standard/apps.html';
import { default as standard_apps_admin } from './standard/apps_admin.html';
import { default as standard_article } from './standard/article.html';
import { default as standard_asset_action } from './standard/asset_action.html';
import { default as standard_asset_action_source } from './standard/asset_action_source.html';
import { default as standard_asset_downtime_period } from './standard/asset_downtime_period.html';
import { default as standard_asset_object } from './standard/asset_object.html';
import { default as standard_asset_relationship } from './standard/asset_relationship.html';
import { default as standard_asset_state_period } from './standard/asset_state_period.html';
import { default as standard_asset_warranty } from './standard/asset_warranty.html';
import { default as standard_assigned_resource } from './standard/assigned_resource.html';
import { default as standard_assignment } from './standard/assignment.html';
import { default as standard_avatar } from './standard/avatar.html';
import { default as standard_avatar_loading } from './standard/avatar_loading.html';
import { default as standard_bot } from './standard/bot.html';
import { default as standard_bot_training } from './standard/bot_training.html';
import { default as standard_branch_merge } from './standard/branch_merge.html';
import { default as standard_brand } from './standard/brand.html';
import { default as standard_business_hours } from './standard/business_hours.html';
import { default as standard_buyer_account } from './standard/buyer_account.html';
import { default as standard_buyer_group } from './standard/buyer_group.html';
import { default as standard_calibration } from './standard/calibration.html';
import { default as standard_call } from './standard/call.html';
import { default as standard_call_coaching } from './standard/call_coaching.html';
import { default as standard_call_history } from './standard/call_history.html';
import { default as standard_campaign } from './standard/campaign.html';
import { default as standard_campaign_members } from './standard/campaign_members.html';
import { default as standard_cancel_checkout } from './standard/cancel_checkout.html';
import { default as standard_canvas } from './standard/canvas.html';
import { default as standard_carousel } from './standard/carousel.html';
import { default as standard_case } from './standard/case.html';
import { default as standard_case_change_status } from './standard/case_change_status.html';
import { default as standard_case_comment } from './standard/case_comment.html';
import { default as standard_case_email } from './standard/case_email.html';
import { default as standard_case_log_a_call } from './standard/case_log_a_call.html';
import { default as standard_case_milestone } from './standard/case_milestone.html';
import { default as standard_case_transcript } from './standard/case_transcript.html';
import { default as standard_case_wrap_up } from './standard/case_wrap_up.html';
import { default as standard_catalog } from './standard/catalog.html';
import { default as standard_category } from './standard/category.html';
import { default as standard_channel_program_history } from './standard/channel_program_history.html';
import { default as standard_channel_program_levels } from './standard/channel_program_levels.html';
import { default as standard_channel_program_members } from './standard/channel_program_members.html';
import { default as standard_channel_programs } from './standard/channel_programs.html';
import { default as standard_chart } from './standard/chart.html';
import { default as standard_checkout } from './standard/checkout.html';
import { default as standard_choice } from './standard/choice.html';
import { default as standard_client } from './standard/client.html';
import { default as standard_cms } from './standard/cms.html';
import { default as standard_coaching } from './standard/coaching.html';
import { default as standard_code_playground } from './standard/code_playground.html';
import { default as standard_collection_variable } from './standard/collection_variable.html';
import { default as standard_connected_apps } from './standard/connected_apps.html';
import { default as standard_constant } from './standard/constant.html';
import { default as standard_contact } from './standard/contact.html';
import { default as standard_contact_list } from './standard/contact_list.html';
import { default as standard_contact_request } from './standard/contact_request.html';
import { default as standard_contract } from './standard/contract.html';
import { default as standard_contract_line_item } from './standard/contract_line_item.html';
import { default as standard_currency } from './standard/currency.html';
import { default as standard_currency_input } from './standard/currency_input.html';
import { default as standard_custom } from './standard/custom.html';
import { default as standard_custom_notification } from './standard/custom_notification.html';
import { default as standard_customer_360 } from './standard/customer_360.html';
import { default as standard_customer_lifecycle_analytics } from './standard/customer_lifecycle_analytics.html';
import { default as standard_customer_portal_users } from './standard/customer_portal_users.html';
import { default as standard_customers } from './standard/customers.html';
import { default as standard_dashboard } from './standard/dashboard.html';
import { default as standard_dashboard_ea } from './standard/dashboard_ea.html';
import { default as standard_data_integration_hub } from './standard/data_integration_hub.html';
import { default as standard_data_mapping } from './standard/data_mapping.html';
import { default as standard_data_model } from './standard/data_model.html';
import { default as standard_data_streams } from './standard/data_streams.html';
import { default as standard_datadotcom } from './standard/datadotcom.html';
import { default as standard_dataset } from './standard/dataset.html';
import { default as standard_date_input } from './standard/date_input.html';
import { default as standard_date_time } from './standard/date_time.html';
import { default as standard_decision } from './standard/decision.html';
import { default as standard_default } from './standard/default.html';
import { default as standard_delegated_account } from './standard/delegated_account.html';
import { default as standard_display_rich_text } from './standard/display_rich_text.html';
import { default as standard_display_text } from './standard/display_text.html';
import { default as standard_document } from './standard/document.html';
import { default as standard_drafts } from './standard/drafts.html';
import { default as standard_dynamic_record_choice } from './standard/dynamic_record_choice.html';
import { default as standard_education } from './standard/education.html';
import { default as standard_einstein_replies } from './standard/einstein_replies.html';
import { default as standard_email } from './standard/email.html';
import { default as standard_email_chatter } from './standard/email_chatter.html';
import { default as standard_employee } from './standard/employee.html';
import { default as standard_employee_asset } from './standard/employee_asset.html';
import { default as standard_employee_contact } from './standard/employee_contact.html';
import { default as standard_employee_job } from './standard/employee_job.html';
import { default as standard_employee_job_position } from './standard/employee_job_position.html';
import { default as standard_employee_organization } from './standard/employee_organization.html';
import { default as standard_empty } from './standard/empty.html';
import { default as standard_endorsement } from './standard/endorsement.html';
import { default as standard_entitlement } from './standard/entitlement.html';
import { default as standard_entitlement_policy } from './standard/entitlement_policy.html';
import { default as standard_entitlement_process } from './standard/entitlement_process.html';
import { default as standard_entitlement_template } from './standard/entitlement_template.html';
import { default as standard_entity } from './standard/entity.html';
import { default as standard_entity_milestone } from './standard/entity_milestone.html';
import { default as standard_environment_hub } from './standard/environment_hub.html';
import { default as standard_event } from './standard/event.html';
import { default as standard_events } from './standard/events.html';
import { default as standard_expense } from './standard/expense.html';
import { default as standard_expense_report } from './standard/expense_report.html';
import { default as standard_expense_report_entry } from './standard/expense_report_entry.html';
import { default as standard_feed } from './standard/feed.html';
import { default as standard_feedback } from './standard/feedback.html';
import { default as standard_file } from './standard/file.html';
import { default as standard_filiter_criteria_rule } from './standard/filiter_criteria_rule.html';
import { default as standard_filter } from './standard/filter.html';
import { default as standard_filter_criteria } from './standard/filter_criteria.html';
import { default as standard_first_non_empty } from './standard/first_non_empty.html';
import { default as standard_flow } from './standard/flow.html';
import { default as standard_folder } from './standard/folder.html';
import { default as standard_forecasts } from './standard/forecasts.html';
import { default as standard_formula } from './standard/formula.html';
import { default as standard_fulfillment_order } from './standard/fulfillment_order.html';
import { default as standard_generic_loading } from './standard/generic_loading.html';
import { default as standard_global_constant } from './standard/global_constant.html';
import { default as standard_goals } from './standard/goals.html';
import { default as standard_group_loading } from './standard/group_loading.html';
import { default as standard_groups } from './standard/groups.html';
import { default as standard_hierarchy } from './standard/hierarchy.html';
import { default as standard_high_velocity_sales } from './standard/high_velocity_sales.html';
import { default as standard_home } from './standard/home.html';
import { default as standard_household } from './standard/household.html';
import { default as standard_individual } from './standard/individual.html';
import { default as standard_insights } from './standard/insights.html';
import { default as standard_instore_locations } from './standard/instore_locations.html';
import { default as standard_investment_account } from './standard/investment_account.html';
import { default as standard_invocable_action } from './standard/invocable_action.html';
import { default as standard_iot_context } from './standard/iot_context.html';
import { default as standard_iot_orchestrations } from './standard/iot_orchestrations.html';
import { default as standard_javascript_button } from './standard/javascript_button.html';
import { default as standard_job_family } from './standard/job_family.html';
import { default as standard_job_position } from './standard/job_position.html';
import { default as standard_job_profile } from './standard/job_profile.html';
import { default as standard_kanban } from './standard/kanban.html';
import { default as standard_knowledge } from './standard/knowledge.html';
import { default as standard_lead } from './standard/lead.html';
import { default as standard_lead_insights } from './standard/lead_insights.html';
import { default as standard_lead_list } from './standard/lead_list.html';
import { default as standard_letterhead } from './standard/letterhead.html';
import { default as standard_lightning_component } from './standard/lightning_component.html';
import { default as standard_lightning_usage } from './standard/lightning_usage.html';
import { default as standard_link } from './standard/link.html';
import { default as standard_list_email } from './standard/list_email.html';
import { default as standard_live_chat } from './standard/live_chat.html';
import { default as standard_live_chat_visitor } from './standard/live_chat_visitor.html';
import { default as standard_location } from './standard/location.html';
import { default as standard_location_permit } from './standard/location_permit.html';
import { default as standard_log_a_call } from './standard/log_a_call.html';
import { default as standard_logging } from './standard/logging.html';
import { default as standard_loop } from './standard/loop.html';
import { default as standard_macros } from './standard/macros.html';
import { default as standard_maintenance_asset } from './standard/maintenance_asset.html';
import { default as standard_maintenance_plan } from './standard/maintenance_plan.html';
import { default as standard_maintenance_work_rule } from './standard/maintenance_work_rule.html';
import { default as standard_marketing_actions } from './standard/marketing_actions.html';
import { default as standard_merge } from './standard/merge.html';
import { default as standard_messaging_conversation } from './standard/messaging_conversation.html';
import { default as standard_messaging_session } from './standard/messaging_session.html';
import { default as standard_messaging_user } from './standard/messaging_user.html';
import { default as standard_metrics } from './standard/metrics.html';
import { default as standard_multi_picklist } from './standard/multi_picklist.html';
import { default as standard_multi_select_checkbox } from './standard/multi_select_checkbox.html';
import { default as standard_news } from './standard/news.html';
import { default as standard_note } from './standard/note.html';
import { default as standard_number_input } from './standard/number_input.html';
import { default as standard_omni_supervisor } from './standard/omni_supervisor.html';
import { default as standard_operating_hours } from './standard/operating_hours.html';
import { default as standard_opportunity } from './standard/opportunity.html';
import { default as standard_opportunity_contact_role } from './standard/opportunity_contact_role.html';
import { default as standard_opportunity_splits } from './standard/opportunity_splits.html';
import { default as standard_order_item } from './standard/order_item.html';
import { default as standard_orders } from './standard/orders.html';
import { default as standard_outcome } from './standard/outcome.html';
import { default as standard_output } from './standard/output.html';
import { default as standard_partner_fund_allocation } from './standard/partner_fund_allocation.html';
import { default as standard_partner_fund_claim } from './standard/partner_fund_claim.html';
import { default as standard_partner_fund_request } from './standard/partner_fund_request.html';
import { default as standard_partner_marketing_budget } from './standard/partner_marketing_budget.html';
import { default as standard_partners } from './standard/partners.html';
import { default as standard_password } from './standard/password.html';
import { default as standard_past_chat } from './standard/past_chat.html';
import { default as standard_people } from './standard/people.html';
import { default as standard_performance } from './standard/performance.html';
import { default as standard_person_account } from './standard/person_account.html';
import { default as standard_photo } from './standard/photo.html';
import { default as standard_picklist_choice } from './standard/picklist_choice.html';
import { default as standard_picklist_type } from './standard/picklist_type.html';
import { default as standard_planogram } from './standard/planogram.html';
import { default as standard_poll } from './standard/poll.html';
import { default as standard_portal } from './standard/portal.html';
import { default as standard_portal_roles } from './standard/portal_roles.html';
import { default as standard_portal_roles_and_subordinates } from './standard/portal_roles_and_subordinates.html';
import { default as standard_post } from './standard/post.html';
import { default as standard_price_book_entries } from './standard/price_book_entries.html';
import { default as standard_price_books } from './standard/price_books.html';
import { default as standard_pricebook } from './standard/pricebook.html';
import { default as standard_pricing_workspace } from './standard/pricing_workspace.html';
import { default as standard_process } from './standard/process.html';
import { default as standard_process_exception } from './standard/process_exception.html';
import { default as standard_product } from './standard/product.html';
import { default as standard_product_consumed } from './standard/product_consumed.html';
import { default as standard_product_item } from './standard/product_item.html';
import { default as standard_product_item_transaction } from './standard/product_item_transaction.html';
import { default as standard_product_request } from './standard/product_request.html';
import { default as standard_product_request_line_item } from './standard/product_request_line_item.html';
import { default as standard_product_required } from './standard/product_required.html';
import { default as standard_product_transfer } from './standard/product_transfer.html';
import { default as standard_product_warranty_term } from './standard/product_warranty_term.html';
import { default as standard_product_workspace } from './standard/product_workspace.html';
import { default as standard_products } from './standard/products.html';
import { default as standard_proposition } from './standard/proposition.html';
import { default as standard_question_best } from './standard/question_best.html';
import { default as standard_question_feed } from './standard/question_feed.html';
import { default as standard_queue } from './standard/queue.html';
import { default as standard_quick_text } from './standard/quick_text.html';
import { default as standard_quip } from './standard/quip.html';
import { default as standard_quip_sheet } from './standard/quip_sheet.html';
import { default as standard_quotes } from './standard/quotes.html';
import { default as standard_radio_button } from './standard/radio_button.html';
import { default as standard_read_receipts } from './standard/read_receipts.html';
import { default as standard_recent } from './standard/recent.html';
import { default as standard_record } from './standard/record.html';
import { default as standard_record_create } from './standard/record_create.html';
import { default as standard_record_delete } from './standard/record_delete.html';
import { default as standard_record_lookup } from './standard/record_lookup.html';
import { default as standard_record_update } from './standard/record_update.html';
import { default as standard_recycle_bin } from './standard/recycle_bin.html';
import { default as standard_related_list } from './standard/related_list.html';
import { default as standard_relationship } from './standard/relationship.html';
import { default as standard_reply_text } from './standard/reply_text.html';
import { default as standard_report } from './standard/report.html';
import { default as standard_resource_absence } from './standard/resource_absence.html';
import { default as standard_resource_capacity } from './standard/resource_capacity.html';
import { default as standard_resource_preference } from './standard/resource_preference.html';
import { default as standard_resource_skill } from './standard/resource_skill.html';
import { default as standard_return_order } from './standard/return_order.html';
import { default as standard_return_order_line_item } from './standard/return_order_line_item.html';
import { default as standard_reward } from './standard/reward.html';
import { default as standard_rtc_presence } from './standard/rtc_presence.html';
import { default as standard_sales_cadence } from './standard/sales_cadence.html';
import { default as standard_sales_cadence_target } from './standard/sales_cadence_target.html';
import { default as standard_sales_channel } from './standard/sales_channel.html';
import { default as standard_sales_path } from './standard/sales_path.html';
import { default as standard_sales_value } from './standard/sales_value.html';
import { default as standard_salesforce_cms } from './standard/salesforce_cms.html';
import { default as standard_scan_card } from './standard/scan_card.html';
import { default as standard_schedule_objective } from './standard/schedule_objective.html';
import { default as standard_scheduling_constraints } from './standard/scheduling_constraints.html';
import { default as standard_scheduling_policy } from './standard/scheduling_policy.html';
import { default as standard_screen } from './standard/screen.html';
import { default as standard_search } from './standard/search.html';
import { default as standard_section } from './standard/section.html';
import { default as standard_segments } from './standard/segments.html';
import { default as standard_service_appointment } from './standard/service_appointment.html';
import { default as standard_service_appointment_capacity_usage } from './standard/service_appointment_capacity_usage.html';
import { default as standard_service_contract } from './standard/service_contract.html';
import { default as standard_service_crew } from './standard/service_crew.html';
import { default as standard_service_crew_member } from './standard/service_crew_member.html';
import { default as standard_service_report } from './standard/service_report.html';
import { default as standard_service_resource } from './standard/service_resource.html';
import { default as standard_service_territory } from './standard/service_territory.html';
import { default as standard_service_territory_location } from './standard/service_territory_location.html';
import { default as standard_service_territory_member } from './standard/service_territory_member.html';
import { default as standard_settings } from './standard/settings.html';
import { default as standard_shift } from './standard/shift.html';
import { default as standard_shift_pattern } from './standard/shift_pattern.html';
import { default as standard_shift_pattern_entry } from './standard/shift_pattern_entry.html';
import { default as standard_shift_preferences } from './standard/shift_preferences.html';
import { default as standard_shift_template } from './standard/shift_template.html';
import { default as standard_shift_type } from './standard/shift_type.html';
import { default as standard_shipment } from './standard/shipment.html';
import { default as standard_skill } from './standard/skill.html';
import { default as standard_skill_entity } from './standard/skill_entity.html';
import { default as standard_skill_requirement } from './standard/skill_requirement.html';
import { default as standard_slider } from './standard/slider.html';
import { default as standard_sms } from './standard/sms.html';
import { default as standard_snippet } from './standard/snippet.html';
import { default as standard_snippets } from './standard/snippets.html';
import { default as standard_sobject } from './standard/sobject.html';
import { default as standard_sobject_collection } from './standard/sobject_collection.html';
import { default as standard_social } from './standard/social.html';
import { default as standard_solution } from './standard/solution.html';
import { default as standard_sort } from './standard/sort.html';
import { default as standard_sossession } from './standard/sossession.html';
import { default as standard_stage } from './standard/stage.html';
import { default as standard_stage_collection } from './standard/stage_collection.html';
import { default as standard_steps } from './standard/steps.html';
import { default as standard_store } from './standard/store.html';
import { default as standard_store_group } from './standard/store_group.html';
import { default as standard_story } from './standard/story.html';
import { default as standard_strategy } from './standard/strategy.html';
import { default as standard_survey } from './standard/survey.html';
import { default as standard_system_and_global_variable } from './standard/system_and_global_variable.html';
import { default as standard_task } from './standard/task.html';
import { default as standard_task2 } from './standard/task2.html';
import { default as standard_team_member } from './standard/team_member.html';
import { default as standard_template } from './standard/template.html';
import { default as standard_text } from './standard/text.html';
import { default as standard_text_template } from './standard/text_template.html';
import { default as standard_textarea } from './standard/textarea.html';
import { default as standard_textbox } from './standard/textbox.html';
import { default as standard_thanks } from './standard/thanks.html';
import { default as standard_thanks_loading } from './standard/thanks_loading.html';
import { default as standard_timesheet } from './standard/timesheet.html';
import { default as standard_timesheet_entry } from './standard/timesheet_entry.html';
import { default as standard_timeslot } from './standard/timeslot.html';
import { default as standard_today } from './standard/today.html';
import { default as standard_toggle } from './standard/toggle.html';
import { default as standard_topic } from './standard/topic.html';
import { default as standard_topic2 } from './standard/topic2.html';
import { default as standard_trailhead } from './standard/trailhead.html';
import { default as standard_trailhead_alt } from './standard/trailhead_alt.html';
import { default as standard_unmatched } from './standard/unmatched.html';
import { default as standard_user } from './standard/user.html';
import { default as standard_user_role } from './standard/user_role.html';
import { default as standard_variable } from './standard/variable.html';
import { default as standard_variation_attribute_setup } from './standard/variation_attribute_setup.html';
import { default as standard_variation_products } from './standard/variation_products.html';
import { default as standard_visit_templates } from './standard/visit_templates.html';
import { default as standard_visits } from './standard/visits.html';
import { default as standard_visualforce_page } from './standard/visualforce_page.html';
import { default as standard_voice_call } from './standard/voice_call.html';
import { default as standard_waits } from './standard/waits.html';
import { default as standard_warranty_term } from './standard/warranty_term.html';
import { default as standard_webcart } from './standard/webcart.html';
import { default as standard_work_capacity_limit } from './standard/work_capacity_limit.html';
import { default as standard_work_capacity_usage } from './standard/work_capacity_usage.html';
import { default as standard_work_contract } from './standard/work_contract.html';
import { default as standard_work_order } from './standard/work_order.html';
import { default as standard_work_order_item } from './standard/work_order_item.html';
import { default as standard_work_plan } from './standard/work_plan.html';
import { default as standard_work_plan_rule } from './standard/work_plan_rule.html';
import { default as standard_work_plan_template } from './standard/work_plan_template.html';
import { default as standard_work_plan_template_entry } from './standard/work_plan_template_entry.html';
import { default as standard_work_queue } from './standard/work_queue.html';
import { default as standard_work_step } from './standard/work_step.html';
import { default as standard_work_step_template } from './standard/work_step_template.html';
import { default as standard_work_type } from './standard/work_type.html';
import { default as standard_work_type_group } from './standard/work_type_group.html';
import { default as utility_activity } from './utility/activity.html';
import { default as utility_ad_set } from './utility/ad_set.html';
import { default as utility_add } from './utility/add.html';
import { default as utility_adduser } from './utility/adduser.html';
import { default as utility_advanced_function } from './utility/advanced_function.html';
import { default as utility_advertising } from './utility/advertising.html';
import { default as utility_agent_session } from './utility/agent_session.html';
import { default as utility_alert } from './utility/alert.html';
import { default as utility_all } from './utility/all.html';
import { default as utility_anchor } from './utility/anchor.html';
import { default as utility_animal_and_nature } from './utility/animal_and_nature.html';
import { default as utility_announcement } from './utility/announcement.html';
import { default as utility_answer } from './utility/answer.html';
import { default as utility_answered_twice } from './utility/answered_twice.html';
import { default as utility_apex } from './utility/apex.html';
import { default as utility_apex_plugin } from './utility/apex_plugin.html';
import { default as utility_approval } from './utility/approval.html';
import { default as utility_apps } from './utility/apps.html';
import { default as utility_archive } from './utility/archive.html';
import { default as utility_arrow_bottom } from './utility/arrow_bottom.html';
import { default as utility_arrow_top } from './utility/arrow_top.html';
import { default as utility_arrowdown } from './utility/arrowdown.html';
import { default as utility_arrowup } from './utility/arrowup.html';
import { default as utility_asset_warranty } from './utility/asset_warranty.html';
import { default as utility_assignment } from './utility/assignment.html';
import { default as utility_attach } from './utility/attach.html';
import { default as utility_automate } from './utility/automate.html';
import { default as utility_away } from './utility/away.html';
import { default as utility_back } from './utility/back.html';
import { default as utility_ban } from './utility/ban.html';
import { default as utility_block_visitor } from './utility/block_visitor.html';
import { default as utility_bold } from './utility/bold.html';
import { default as utility_bookmark } from './utility/bookmark.html';
import { default as utility_breadcrumbs } from './utility/breadcrumbs.html';
import { default as utility_broadcast } from './utility/broadcast.html';
import { default as utility_brush } from './utility/brush.html';
import { default as utility_bucket } from './utility/bucket.html';
import { default as utility_builder } from './utility/builder.html';
import { default as utility_button_choice } from './utility/button_choice.html';
import { default as utility_call } from './utility/call.html';
import { default as utility_campaign } from './utility/campaign.html';
import { default as utility_cancel_file_request } from './utility/cancel_file_request.html';
import { default as utility_cancel_transfer } from './utility/cancel_transfer.html';
import { default as utility_capslock } from './utility/capslock.html';
import { default as utility_cart } from './utility/cart.html';
import { default as utility_case } from './utility/case.html';
import { default as utility_cases } from './utility/cases.html';
import { default as utility_center_align_text } from './utility/center_align_text.html';
import { default as utility_change_owner } from './utility/change_owner.html';
import { default as utility_change_record_type } from './utility/change_record_type.html';
import { default as utility_chart } from './utility/chart.html';
import { default as utility_chat } from './utility/chat.html';
import { default as utility_check } from './utility/check.html';
import { default as utility_checkin } from './utility/checkin.html';
import { default as utility_checkout } from './utility/checkout.html';
import { default as utility_chevrondown } from './utility/chevrondown.html';
import { default as utility_chevronleft } from './utility/chevronleft.html';
import { default as utility_chevronright } from './utility/chevronright.html';
import { default as utility_chevronup } from './utility/chevronup.html';
import { default as utility_choice } from './utility/choice.html';
import { default as utility_classic_interface } from './utility/classic_interface.html';
import { default as utility_clear } from './utility/clear.html';
import { default as utility_clock } from './utility/clock.html';
import { default as utility_close } from './utility/close.html';
import { default as utility_collapse_all } from './utility/collapse_all.html';
import { default as utility_collection_variable } from './utility/collection_variable.html';
import { default as utility_color_swatch } from './utility/color_swatch.html';
import { default as utility_comments } from './utility/comments.html';
import { default as utility_company } from './utility/company.html';
import { default as utility_component_customization } from './utility/component_customization.html';
import { default as utility_connected_apps } from './utility/connected_apps.html';
import { default as utility_constant } from './utility/constant.html';
import { default as utility_contact_request } from './utility/contact_request.html';
import { default as utility_contract } from './utility/contract.html';
import { default as utility_contract_alt } from './utility/contract_alt.html';
import { default as utility_copy } from './utility/copy.html';
import { default as utility_copy_to_clipboard } from './utility/copy_to_clipboard.html';
import { default as utility_crossfilter } from './utility/crossfilter.html';
import { default as utility_currency } from './utility/currency.html';
import { default as utility_currency_input } from './utility/currency_input.html';
import { default as utility_custom_apps } from './utility/custom_apps.html';
import { default as utility_cut } from './utility/cut.html';
import { default as utility_dash } from './utility/dash.html';
import { default as utility_data_mapping } from './utility/data_mapping.html';
import { default as utility_database } from './utility/database.html';
import { default as utility_datadotcom } from './utility/datadotcom.html';
import { default as utility_date_input } from './utility/date_input.html';
import { default as utility_date_time } from './utility/date_time.html';
import { default as utility_dayview } from './utility/dayview.html';
import { default as utility_delete } from './utility/delete.html';
import { default as utility_deprecate } from './utility/deprecate.html';
import { default as utility_description } from './utility/description.html';
import { default as utility_desktop } from './utility/desktop.html';
import { default as utility_desktop_and_phone } from './utility/desktop_and_phone.html';
import { default as utility_desktop_console } from './utility/desktop_console.html';
import { default as utility_dialing } from './utility/dialing.html';
import { default as utility_diamond } from './utility/diamond.html';
import { default as utility_dislike } from './utility/dislike.html';
import { default as utility_display_rich_text } from './utility/display_rich_text.html';
import { default as utility_display_text } from './utility/display_text.html';
import { default as utility_dock_panel } from './utility/dock_panel.html';
import { default as utility_down } from './utility/down.html';
import { default as utility_download } from './utility/download.html';
import { default as utility_drag } from './utility/drag.html';
import { default as utility_drag_and_drop } from './utility/drag_and_drop.html';
import { default as utility_dynamic_record_choice } from './utility/dynamic_record_choice.html';
import { default as utility_edit } from './utility/edit.html';
import { default as utility_edit_form } from './utility/edit_form.html';
import { default as utility_education } from './utility/education.html';
import { default as utility_einstein } from './utility/einstein.html';
import { default as utility_email } from './utility/email.html';
import { default as utility_email_open } from './utility/email_open.html';
import { default as utility_emoji } from './utility/emoji.html';
import { default as utility_end_call } from './utility/end_call.html';
import { default as utility_end_chat } from './utility/end_chat.html';
import { default as utility_end_messaging_session } from './utility/end_messaging_session.html';
import { default as utility_engage } from './utility/engage.html';
import { default as utility_enter } from './utility/enter.html';
import { default as utility_erect_window } from './utility/erect_window.html';
import { default as utility_error } from './utility/error.html';
import { default as utility_event } from './utility/event.html';
import { default as utility_events } from './utility/events.html';
import { default as utility_expand } from './utility/expand.html';
import { default as utility_expand_all } from './utility/expand_all.html';
import { default as utility_expand_alt } from './utility/expand_alt.html';
import { default as utility_fallback } from './utility/fallback.html';
import { default as utility_favorite } from './utility/favorite.html';
import { default as utility_feed } from './utility/feed.html';
import { default as utility_file } from './utility/file.html';
import { default as utility_filter } from './utility/filter.html';
import { default as utility_filterList } from './utility/filterList.html';
import { default as utility_filter_criteria } from './utility/filter_criteria.html';
import { default as utility_filter_criteria_rule } from './utility/filter_criteria_rule.html';
import { default as utility_flow } from './utility/flow.html';
import { default as utility_flow_alt } from './utility/flow_alt.html';
import { default as utility_food_and_drink } from './utility/food_and_drink.html';
import { default as utility_formula } from './utility/formula.html';
import { default as utility_forward } from './utility/forward.html';
import { default as utility_forward_up } from './utility/forward_up.html';
import { default as utility_freeze_column } from './utility/freeze_column.html';
import { default as utility_frozen } from './utility/frozen.html';
import { default as utility_fulfillment_order } from './utility/fulfillment_order.html';
import { default as utility_full_width_view } from './utility/full_width_view.html';
import { default as utility_global_constant } from './utility/global_constant.html';
import { default as utility_graph } from './utility/graph.html';
import { default as utility_groups } from './utility/groups.html';
import { default as utility_help } from './utility/help.html';
import { default as utility_help_center } from './utility/help_center.html';
import { default as utility_hide } from './utility/hide.html';
import { default as utility_hide_mobile } from './utility/hide_mobile.html';
import { default as utility_hierarchy } from './utility/hierarchy.html';
import { default as utility_high_velocity_sales } from './utility/high_velocity_sales.html';
import { default as utility_home } from './utility/home.html';
import { default as utility_identity } from './utility/identity.html';
import { default as utility_image } from './utility/image.html';
import { default as utility_in_app_assistant } from './utility/in_app_assistant.html';
import { default as utility_inbox } from './utility/inbox.html';
import { default as utility_incoming_call } from './utility/incoming_call.html';
import { default as utility_info } from './utility/info.html';
import { default as utility_info_alt } from './utility/info_alt.html';
import { default as utility_insert_tag_field } from './utility/insert_tag_field.html';
import { default as utility_insert_template } from './utility/insert_template.html';
import { default as utility_inspector_panel } from './utility/inspector_panel.html';
import { default as utility_internal_share } from './utility/internal_share.html';
import { default as utility_italic } from './utility/italic.html';
import { default as utility_jump_to_bottom } from './utility/jump_to_bottom.html';
import { default as utility_jump_to_left } from './utility/jump_to_left.html';
import { default as utility_jump_to_right } from './utility/jump_to_right.html';
import { default as utility_jump_to_top } from './utility/jump_to_top.html';
import { default as utility_justify_text } from './utility/justify_text.html';
import { default as utility_kanban } from './utility/kanban.html';
import { default as utility_key } from './utility/key.html';
import { default as utility_keyboard_dismiss } from './utility/keyboard_dismiss.html';
import { default as utility_keypad } from './utility/keypad.html';
import { default as utility_knowledge_base } from './utility/knowledge_base.html';
import { default as utility_layers } from './utility/layers.html';
import { default as utility_layout } from './utility/layout.html';
import { default as utility_leave_conference } from './utility/leave_conference.html';
import { default as utility_left } from './utility/left.html';
import { default as utility_left_align_text } from './utility/left_align_text.html';
import { default as utility_level_down } from './utility/level_down.html';
import { default as utility_level_up } from './utility/level_up.html';
import { default as utility_light_bulb } from './utility/light_bulb.html';
import { default as utility_lightning_extension } from './utility/lightning_extension.html';
import { default as utility_lightning_inspector } from './utility/lightning_inspector.html';
import { default as utility_like } from './utility/like.html';
import { default as utility_link } from './utility/link.html';
import { default as utility_linked } from './utility/linked.html';
import { default as utility_list } from './utility/list.html';
import { default as utility_listen } from './utility/listen.html';
import { default as utility_live_message } from './utility/live_message.html';
import { default as utility_location } from './utility/location.html';
import { default as utility_location_permit } from './utility/location_permit.html';
import { default as utility_lock } from './utility/lock.html';
import { default as utility_locker_service_api_viewer } from './utility/locker_service_api_viewer.html';
import { default as utility_locker_service_console } from './utility/locker_service_console.html';
import { default as utility_log_a_call } from './utility/log_a_call.html';
import { default as utility_logout } from './utility/logout.html';
import { default as utility_loop } from './utility/loop.html';
import { default as utility_lower_flag } from './utility/lower_flag.html';
import { default as utility_macros } from './utility/macros.html';
import { default as utility_magicwand } from './utility/magicwand.html';
import { default as utility_mark_all_as_read } from './utility/mark_all_as_read.html';
import { default as utility_matrix } from './utility/matrix.html';
import { default as utility_merge } from './utility/merge.html';
import { default as utility_merge_field } from './utility/merge_field.html';
import { default as utility_metrics } from './utility/metrics.html';
import { default as utility_minimize_window } from './utility/minimize_window.html';
import { default as utility_missed_call } from './utility/missed_call.html';
import { default as utility_money } from './utility/money.html';
import { default as utility_moneybag } from './utility/moneybag.html';
import { default as utility_monthlyview } from './utility/monthlyview.html';
import { default as utility_move } from './utility/move.html';
import { default as utility_multi_picklist } from './utility/multi_picklist.html';
import { default as utility_multi_select_checkbox } from './utility/multi_select_checkbox.html';
import { default as utility_muted } from './utility/muted.html';
import { default as utility_new } from './utility/new.html';
import { default as utility_new_direct_message } from './utility/new_direct_message.html';
import { default as utility_new_window } from './utility/new_window.html';
import { default as utility_news } from './utility/news.html';
import { default as utility_note } from './utility/note.html';
import { default as utility_notebook } from './utility/notebook.html';
import { default as utility_notification } from './utility/notification.html';
import { default as utility_number_input } from './utility/number_input.html';
import { default as utility_office365 } from './utility/office365.html';
import { default as utility_offline } from './utility/offline.html';
import { default as utility_offline_briefcase } from './utility/offline_briefcase.html';
import { default as utility_offline_cached } from './utility/offline_cached.html';
import { default as utility_omni_channel } from './utility/omni_channel.html';
import { default as utility_open } from './utility/open.html';
import { default as utility_open_folder } from './utility/open_folder.html';
import { default as utility_opened_folder } from './utility/opened_folder.html';
import { default as utility_outbound_call } from './utility/outbound_call.html';
import { default as utility_outcome } from './utility/outcome.html';
import { default as utility_overflow } from './utility/overflow.html';
import { default as utility_package } from './utility/packageIcon.html';
import { default as utility_package_org } from './utility/package_org.html';
import { default as utility_package_org_beta } from './utility/package_org_beta.html';
import { default as utility_page } from './utility/page.html';
import { default as utility_palette } from './utility/palette.html';
import { default as utility_password } from './utility/password.html';
import { default as utility_paste } from './utility/paste.html';
import { default as utility_pause } from './utility/pause.html';
import { default as utility_people } from './utility/people.html';
import { default as utility_percent } from './utility/percent.html';
import { default as utility_phone_landscape } from './utility/phone_landscape.html';
import { default as utility_phone_portrait } from './utility/phone_portrait.html';
import { default as utility_photo } from './utility/photo.html';
import { default as utility_picklist } from './utility/picklist.html';
import { default as utility_picklist_choice } from './utility/picklist_choice.html';
import { default as utility_picklist_type } from './utility/picklist_type.html';
import { default as utility_pin } from './utility/pin.html';
import { default as utility_pinned } from './utility/pinned.html';
import { default as utility_play } from './utility/play.html';
import { default as utility_podcast_webinar } from './utility/podcast_webinar.html';
import { default as utility_pop_in } from './utility/pop_in.html';
import { default as utility_power } from './utility/power.html';
import { default as utility_preview } from './utility/preview.html';
import { default as utility_price_book_entries } from './utility/price_book_entries.html';
import { default as utility_price_books } from './utility/price_books.html';
import { default as utility_pricing_workspace } from './utility/pricing_workspace.html';
import { default as utility_print } from './utility/print.html';
import { default as utility_priority } from './utility/priority.html';
import { default as utility_privately_shared } from './utility/privately_shared.html';
import { default as utility_process } from './utility/process.html';
import { default as utility_product_warranty_term } from './utility/product_warranty_term.html';
import { default as utility_product_workspace } from './utility/product_workspace.html';
import { default as utility_products } from './utility/products.html';
import { default as utility_prompt } from './utility/prompt.html';
import { default as utility_prompt_edit } from './utility/prompt_edit.html';
import { default as utility_push } from './utility/push.html';
import { default as utility_puzzle } from './utility/puzzle.html';
import { default as utility_question } from './utility/question.html';
import { default as utility_question_mark } from './utility/question_mark.html';
import { default as utility_questions_and_answers } from './utility/questions_and_answers.html';
import { default as utility_quick_text } from './utility/quick_text.html';
import { default as utility_quip } from './utility/quip.html';
import { default as utility_quotation_marks } from './utility/quotation_marks.html';
import { default as utility_quote } from './utility/quote.html';
import { default as utility_radio_button } from './utility/radio_button.html';
import { default as utility_rating } from './utility/rating.html';
import { default as utility_reassign } from './utility/reassign.html';
import { default as utility_record } from './utility/record.html';
import { default as utility_record_create } from './utility/record_create.html';
import { default as utility_record_delete } from './utility/record_delete.html';
import { default as utility_record_lookup } from './utility/record_lookup.html';
import { default as utility_record_update } from './utility/record_update.html';
import { default as utility_recurring_exception } from './utility/recurring_exception.html';
import { default as utility_recycle_bin_empty } from './utility/recycle_bin_empty.html';
import { default as utility_recycle_bin_full } from './utility/recycle_bin_full.html';
import { default as utility_redo } from './utility/redo.html';
import { default as utility_refresh } from './utility/refresh.html';
import { default as utility_relate } from './utility/relate.html';
import { default as utility_reminder } from './utility/reminder.html';
import { default as utility_remove_formatting } from './utility/remove_formatting.html';
import { default as utility_remove_link } from './utility/remove_link.html';
import { default as utility_replace } from './utility/replace.html';
import { default as utility_reply } from './utility/reply.html';
import { default as utility_reply_all } from './utility/reply_all.html';
import { default as utility_report_issue } from './utility/report_issue.html';
import { default as utility_reset_password } from './utility/reset_password.html';
import { default as utility_resource_absence } from './utility/resource_absence.html';
import { default as utility_resource_capacity } from './utility/resource_capacity.html';
import { default as utility_resource_territory } from './utility/resource_territory.html';
import { default as utility_retail_execution } from './utility/retail_execution.html';
import { default as utility_retweet } from './utility/retweet.html';
import { default as utility_ribbon } from './utility/ribbon.html';
import { default as utility_richtextbulletedlist } from './utility/richtextbulletedlist.html';
import { default as utility_richtextindent } from './utility/richtextindent.html';
import { default as utility_richtextnumberedlist } from './utility/richtextnumberedlist.html';
import { default as utility_richtextoutdent } from './utility/richtextoutdent.html';
import { default as utility_right } from './utility/right.html';
import { default as utility_right_align_text } from './utility/right_align_text.html';
import { default as utility_rotate } from './utility/rotate.html';
import { default as utility_routing_offline } from './utility/routing_offline.html';
import { default as utility_rows } from './utility/rows.html';
import { default as utility_rules } from './utility/rules.html';
import { default as utility_salesforce1 } from './utility/salesforce1.html';
import { default as utility_save } from './utility/save.html';
import { default as utility_screen } from './utility/screen.html';
import { default as utility_search } from './utility/search.html';
import { default as utility_section } from './utility/section.html';
import { default as utility_send } from './utility/send.html';
import { default as utility_sentiment_negative } from './utility/sentiment_negative.html';
import { default as utility_sentiment_neutral } from './utility/sentiment_neutral.html';
import { default as utility_settings } from './utility/settings.html';
import { default as utility_setup } from './utility/setup.html';
import { default as utility_setup_assistant_guide } from './utility/setup_assistant_guide.html';
import { default as utility_setup_modal } from './utility/setup_modal.html';
import { default as utility_share } from './utility/share.html';
import { default as utility_share_file } from './utility/share_file.html';
import { default as utility_share_mobile } from './utility/share_mobile.html';
import { default as utility_share_post } from './utility/share_post.html';
import { default as utility_shield } from './utility/shield.html';
import { default as utility_shift_pattern } from './utility/shift_pattern.html';
import { default as utility_shift_pattern_entry } from './utility/shift_pattern_entry.html';
import { default as utility_shift_ui } from './utility/shift_ui.html';
import { default as utility_shopping_bag } from './utility/shopping_bag.html';
import { default as utility_shortcuts } from './utility/shortcuts.html';
import { default as utility_side_list } from './utility/side_list.html';
import { default as utility_signpost } from './utility/signpost.html';
import { default as utility_skip } from './utility/skip.html';
import { default as utility_skip_back } from './utility/skip_back.html';
import { default as utility_skip_forward } from './utility/skip_forward.html';
import { default as utility_slider } from './utility/slider.html';
import { default as utility_smiley_and_people } from './utility/smiley_and_people.html';
import { default as utility_sms } from './utility/sms.html';
import { default as utility_snippet } from './utility/snippet.html';
import { default as utility_sobject } from './utility/sobject.html';
import { default as utility_sobject_collection } from './utility/sobject_collection.html';
import { default as utility_socialshare } from './utility/socialshare.html';
import { default as utility_sort } from './utility/sort.html';
import { default as utility_spinner } from './utility/spinner.html';
import { default as utility_stage } from './utility/stage.html';
import { default as utility_stage_collection } from './utility/stage_collection.html';
import { default as utility_standard_objects } from './utility/standard_objects.html';
import { default as utility_steps } from './utility/steps.html';
import { default as utility_stop } from './utility/stop.html';
import { default as utility_store } from './utility/store.html';
import { default as utility_strategy } from './utility/strategy.html';
import { default as utility_strikethrough } from './utility/strikethrough.html';
import { default as utility_success } from './utility/success.html';
import { default as utility_summary } from './utility/summary.html';
import { default as utility_summarydetail } from './utility/summarydetail.html';
import { default as utility_survey } from './utility/survey.html';
import { default as utility_switch } from './utility/switch.html';
import { default as utility_symbols } from './utility/symbols.html';
import { default as utility_sync } from './utility/sync.html';
import { default as utility_system_and_global_variable } from './utility/system_and_global_variable.html';
import { default as utility_table } from './utility/table.html';
import { default as utility_table_settings } from './utility/table_settings.html';
import { default as utility_tablet_landscape } from './utility/tablet_landscape.html';
import { default as utility_tablet_portrait } from './utility/tablet_portrait.html';
import { default as utility_tabset } from './utility/tabset.html';
import { default as utility_target } from './utility/target.html';
import { default as utility_task } from './utility/task.html';
import { default as utility_text } from './utility/text.html';
import { default as utility_text_background_color } from './utility/text_background_color.html';
import { default as utility_text_color } from './utility/text_color.html';
import { default as utility_text_template } from './utility/text_template.html';
import { default as utility_textarea } from './utility/textarea.html';
import { default as utility_textbox } from './utility/textbox.html';
import { default as utility_threedots } from './utility/threedots.html';
import { default as utility_threedots_vertical } from './utility/threedots_vertical.html';
import { default as utility_thunder } from './utility/thunder.html';
import { default as utility_tile_card_list } from './utility/tile_card_list.html';
import { default as utility_toggle } from './utility/toggle.html';
import { default as utility_toggle_panel_bottom } from './utility/toggle_panel_bottom.html';
import { default as utility_toggle_panel_left } from './utility/toggle_panel_left.html';
import { default as utility_toggle_panel_right } from './utility/toggle_panel_right.html';
import { default as utility_toggle_panel_top } from './utility/toggle_panel_top.html';
import { default as utility_topic } from './utility/topic.html';
import { default as utility_topic2 } from './utility/topic2.html';
import { default as utility_touch_action } from './utility/touch_action.html';
import { default as utility_tracker } from './utility/tracker.html';
import { default as utility_trail } from './utility/trail.html';
import { default as utility_trailhead } from './utility/trailhead.html';
import { default as utility_trailhead_alt } from './utility/trailhead_alt.html';
import { default as utility_travel_and_places } from './utility/travel_and_places.html';
import { default as utility_trending } from './utility/trending.html';
import { default as utility_turn_off_notifications } from './utility/turn_off_notifications.html';
import { default as utility_type } from './utility/type.html';
import { default as utility_type_tool } from './utility/type_tool.html';
import { default as utility_undelete } from './utility/undelete.html';
import { default as utility_undeprecate } from './utility/undeprecate.html';
import { default as utility_underline } from './utility/underline.html';
import { default as utility_undo } from './utility/undo.html';
import { default as utility_unlinked } from './utility/unlinked.html';
import { default as utility_unlock } from './utility/unlock.html';
import { default as utility_unmuted } from './utility/unmuted.html';
import { default as utility_up } from './utility/up.html';
import { default as utility_upload } from './utility/upload.html';
import { default as utility_user } from './utility/user.html';
import { default as utility_user_role } from './utility/user_role.html';
import { default as utility_variable } from './utility/variable.html';
import { default as utility_variation_attribute_setup } from './utility/variation_attribute_setup.html';
import { default as utility_variation_products } from './utility/variation_products.html';
import { default as utility_video } from './utility/video.html';
import { default as utility_voicemail_drop } from './utility/voicemail_drop.html';
import { default as utility_volume_high } from './utility/volume_high.html';
import { default as utility_volume_low } from './utility/volume_low.html';
import { default as utility_volume_off } from './utility/volume_off.html';
import { default as utility_waits } from './utility/waits.html';
import { default as utility_warning } from './utility/warning.html';
import { default as utility_warranty_term } from './utility/warranty_term.html';
import { default as utility_watchlist } from './utility/watchlist.html';
import { default as utility_weeklyview } from './utility/weeklyview.html';
import { default as utility_wifi } from './utility/wifi.html';
import { default as utility_work_order_type } from './utility/work_order_type.html';
import { default as utility_world } from './utility/world.html';
import { default as utility_yubi_key } from './utility/yubi_key.html';
import { default as utility_zoomin } from './utility/zoomin.html';
import { default as utility_zoomout } from './utility/zoomout.html';
import { default as doctype_ai } from './doctype/ai.html';
import { default as doctype_attachment } from './doctype/attachment.html';
import { default as doctype_audio } from './doctype/audio.html';
import { default as doctype_box_notes } from './doctype/box_notes.html';
import { default as doctype_csv } from './doctype/csv.html';
import { default as doctype_eps } from './doctype/eps.html';
import { default as doctype_excel } from './doctype/excel.html';
import { default as doctype_exe } from './doctype/exe.html';
import { default as doctype_flash } from './doctype/flash.html';
import { default as doctype_folder } from './doctype/folder.html';
import { default as doctype_gdoc } from './doctype/gdoc.html';
import { default as doctype_gdocs } from './doctype/gdocs.html';
import { default as doctype_gform } from './doctype/gform.html';
import { default as doctype_gpres } from './doctype/gpres.html';
import { default as doctype_gsheet } from './doctype/gsheet.html';
import { default as doctype_html } from './doctype/html.html';
import { default as doctype_image } from './doctype/image.html';
import { default as doctype_keynote } from './doctype/keynote.html';
import { default as doctype_library_folder } from './doctype/library_folder.html';
import { default as doctype_link } from './doctype/link.html';
import { default as doctype_mp4 } from './doctype/mp4.html';
import { default as doctype_overlay } from './doctype/overlay.html';
import { default as doctype_pack } from './doctype/pack.html';
import { default as doctype_pages } from './doctype/pages.html';
import { default as doctype_pdf } from './doctype/pdf.html';
import { default as doctype_ppt } from './doctype/ppt.html';
import { default as doctype_psd } from './doctype/psd.html';
import { default as doctype_quip_doc } from './doctype/quip_doc.html';
import { default as doctype_quip_sheet } from './doctype/quip_sheet.html';
import { default as doctype_quip_slide } from './doctype/quip_slide.html';
import { default as doctype_rtf } from './doctype/rtf.html';
import { default as doctype_slide } from './doctype/slide.html';
import { default as doctype_stypi } from './doctype/stypi.html';
import { default as doctype_txt } from './doctype/txt.html';
import { default as doctype_unknown } from './doctype/unknown.html';
import { default as doctype_video } from './doctype/video.html';
import { default as doctype_visio } from './doctype/visio.html';
import { default as doctype_webex } from './doctype/webex.html';
import { default as doctype_word } from './doctype/word.html';
import { default as doctype_xml } from './doctype/xml.html';
import { default as doctype_zip } from './doctype/zip.html';
import { default as custom_custom1 } from './custom/custom1.html';
import { default as custom_custom10 } from './custom/custom10.html';
import { default as custom_custom100 } from './custom/custom100.html';
import { default as custom_custom101 } from './custom/custom101.html';
import { default as custom_custom102 } from './custom/custom102.html';
import { default as custom_custom103 } from './custom/custom103.html';
import { default as custom_custom104 } from './custom/custom104.html';
import { default as custom_custom105 } from './custom/custom105.html';
import { default as custom_custom106 } from './custom/custom106.html';
import { default as custom_custom107 } from './custom/custom107.html';
import { default as custom_custom108 } from './custom/custom108.html';
import { default as custom_custom109 } from './custom/custom109.html';
import { default as custom_custom11 } from './custom/custom11.html';
import { default as custom_custom110 } from './custom/custom110.html';
import { default as custom_custom111 } from './custom/custom111.html';
import { default as custom_custom112 } from './custom/custom112.html';
import { default as custom_custom113 } from './custom/custom113.html';
import { default as custom_custom12 } from './custom/custom12.html';
import { default as custom_custom13 } from './custom/custom13.html';
import { default as custom_custom14 } from './custom/custom14.html';
import { default as custom_custom15 } from './custom/custom15.html';
import { default as custom_custom16 } from './custom/custom16.html';
import { default as custom_custom17 } from './custom/custom17.html';
import { default as custom_custom18 } from './custom/custom18.html';
import { default as custom_custom19 } from './custom/custom19.html';
import { default as custom_custom2 } from './custom/custom2.html';
import { default as custom_custom20 } from './custom/custom20.html';
import { default as custom_custom21 } from './custom/custom21.html';
import { default as custom_custom22 } from './custom/custom22.html';
import { default as custom_custom23 } from './custom/custom23.html';
import { default as custom_custom24 } from './custom/custom24.html';
import { default as custom_custom25 } from './custom/custom25.html';
import { default as custom_custom26 } from './custom/custom26.html';
import { default as custom_custom27 } from './custom/custom27.html';
import { default as custom_custom28 } from './custom/custom28.html';
import { default as custom_custom29 } from './custom/custom29.html';
import { default as custom_custom3 } from './custom/custom3.html';
import { default as custom_custom30 } from './custom/custom30.html';
import { default as custom_custom31 } from './custom/custom31.html';
import { default as custom_custom32 } from './custom/custom32.html';
import { default as custom_custom33 } from './custom/custom33.html';
import { default as custom_custom34 } from './custom/custom34.html';
import { default as custom_custom35 } from './custom/custom35.html';
import { default as custom_custom36 } from './custom/custom36.html';
import { default as custom_custom37 } from './custom/custom37.html';
import { default as custom_custom38 } from './custom/custom38.html';
import { default as custom_custom39 } from './custom/custom39.html';
import { default as custom_custom4 } from './custom/custom4.html';
import { default as custom_custom40 } from './custom/custom40.html';
import { default as custom_custom41 } from './custom/custom41.html';
import { default as custom_custom42 } from './custom/custom42.html';
import { default as custom_custom43 } from './custom/custom43.html';
import { default as custom_custom44 } from './custom/custom44.html';
import { default as custom_custom45 } from './custom/custom45.html';
import { default as custom_custom46 } from './custom/custom46.html';
import { default as custom_custom47 } from './custom/custom47.html';
import { default as custom_custom48 } from './custom/custom48.html';
import { default as custom_custom49 } from './custom/custom49.html';
import { default as custom_custom5 } from './custom/custom5.html';
import { default as custom_custom50 } from './custom/custom50.html';
import { default as custom_custom51 } from './custom/custom51.html';
import { default as custom_custom52 } from './custom/custom52.html';
import { default as custom_custom53 } from './custom/custom53.html';
import { default as custom_custom54 } from './custom/custom54.html';
import { default as custom_custom55 } from './custom/custom55.html';
import { default as custom_custom56 } from './custom/custom56.html';
import { default as custom_custom57 } from './custom/custom57.html';
import { default as custom_custom58 } from './custom/custom58.html';
import { default as custom_custom59 } from './custom/custom59.html';
import { default as custom_custom6 } from './custom/custom6.html';
import { default as custom_custom60 } from './custom/custom60.html';
import { default as custom_custom61 } from './custom/custom61.html';
import { default as custom_custom62 } from './custom/custom62.html';
import { default as custom_custom63 } from './custom/custom63.html';
import { default as custom_custom64 } from './custom/custom64.html';
import { default as custom_custom65 } from './custom/custom65.html';
import { default as custom_custom66 } from './custom/custom66.html';
import { default as custom_custom67 } from './custom/custom67.html';
import { default as custom_custom68 } from './custom/custom68.html';
import { default as custom_custom69 } from './custom/custom69.html';
import { default as custom_custom7 } from './custom/custom7.html';
import { default as custom_custom70 } from './custom/custom70.html';
import { default as custom_custom71 } from './custom/custom71.html';
import { default as custom_custom72 } from './custom/custom72.html';
import { default as custom_custom73 } from './custom/custom73.html';
import { default as custom_custom74 } from './custom/custom74.html';
import { default as custom_custom75 } from './custom/custom75.html';
import { default as custom_custom76 } from './custom/custom76.html';
import { default as custom_custom77 } from './custom/custom77.html';
import { default as custom_custom78 } from './custom/custom78.html';
import { default as custom_custom79 } from './custom/custom79.html';
import { default as custom_custom8 } from './custom/custom8.html';
import { default as custom_custom80 } from './custom/custom80.html';
import { default as custom_custom81 } from './custom/custom81.html';
import { default as custom_custom82 } from './custom/custom82.html';
import { default as custom_custom83 } from './custom/custom83.html';
import { default as custom_custom84 } from './custom/custom84.html';
import { default as custom_custom85 } from './custom/custom85.html';
import { default as custom_custom86 } from './custom/custom86.html';
import { default as custom_custom87 } from './custom/custom87.html';
import { default as custom_custom88 } from './custom/custom88.html';
import { default as custom_custom89 } from './custom/custom89.html';
import { default as custom_custom9 } from './custom/custom9.html';
import { default as custom_custom90 } from './custom/custom90.html';
import { default as custom_custom91 } from './custom/custom91.html';
import { default as custom_custom92 } from './custom/custom92.html';
import { default as custom_custom93 } from './custom/custom93.html';
import { default as custom_custom94 } from './custom/custom94.html';
import { default as custom_custom95 } from './custom/custom95.html';
import { default as custom_custom96 } from './custom/custom96.html';
import { default as custom_custom97 } from './custom/custom97.html';
import { default as custom_custom98 } from './custom/custom98.html';
import { default as custom_custom99 } from './custom/custom99.html';

export default {
    action_add_contact,
    action_add_file,
    action_add_photo_video,
    action_add_relationship,
    action_announcement,
    action_apex,
    action_approval,
    action_back,
    action_bug,
    action_call,
    action_canvas,
    action_change_owner,
    action_change_record_type,
    action_check,
    action_clone,
    action_close,
    action_defer,
    action_delete,
    action_description,
    action_dial_in,
    action_download,
    action_edit,
    action_edit_groups,
    action_edit_relationship,
    action_email,
    action_fallback,
    action_filter,
    action_flow,
    action_follow,
    action_following,
    action_freeze_user,
    action_goal,
    action_google_news,
    action_info,
    action_join_group,
    action_lead_convert,
    action_leave_group,
    action_log_a_call,
    action_log_event,
    action_manage_perm_sets,
    action_map,
    action_more,
    action_new,
    action_new_account,
    action_new_campaign,
    action_new_case,
    action_new_child_case,
    action_new_contact,
    action_new_custom1,
    action_new_custom10,
    action_new_custom100,
    action_new_custom11,
    action_new_custom12,
    action_new_custom13,
    action_new_custom14,
    action_new_custom15,
    action_new_custom16,
    action_new_custom17,
    action_new_custom18,
    action_new_custom19,
    action_new_custom2,
    action_new_custom20,
    action_new_custom21,
    action_new_custom22,
    action_new_custom23,
    action_new_custom24,
    action_new_custom25,
    action_new_custom26,
    action_new_custom27,
    action_new_custom28,
    action_new_custom29,
    action_new_custom3,
    action_new_custom30,
    action_new_custom31,
    action_new_custom32,
    action_new_custom33,
    action_new_custom34,
    action_new_custom35,
    action_new_custom36,
    action_new_custom37,
    action_new_custom38,
    action_new_custom39,
    action_new_custom4,
    action_new_custom40,
    action_new_custom41,
    action_new_custom42,
    action_new_custom43,
    action_new_custom44,
    action_new_custom45,
    action_new_custom46,
    action_new_custom47,
    action_new_custom48,
    action_new_custom49,
    action_new_custom5,
    action_new_custom50,
    action_new_custom51,
    action_new_custom52,
    action_new_custom53,
    action_new_custom54,
    action_new_custom55,
    action_new_custom56,
    action_new_custom57,
    action_new_custom58,
    action_new_custom59,
    action_new_custom6,
    action_new_custom60,
    action_new_custom61,
    action_new_custom62,
    action_new_custom63,
    action_new_custom64,
    action_new_custom65,
    action_new_custom66,
    action_new_custom67,
    action_new_custom68,
    action_new_custom69,
    action_new_custom7,
    action_new_custom70,
    action_new_custom71,
    action_new_custom72,
    action_new_custom73,
    action_new_custom74,
    action_new_custom75,
    action_new_custom76,
    action_new_custom77,
    action_new_custom78,
    action_new_custom79,
    action_new_custom8,
    action_new_custom80,
    action_new_custom81,
    action_new_custom82,
    action_new_custom83,
    action_new_custom84,
    action_new_custom85,
    action_new_custom86,
    action_new_custom87,
    action_new_custom88,
    action_new_custom89,
    action_new_custom9,
    action_new_custom90,
    action_new_custom91,
    action_new_custom92,
    action_new_custom93,
    action_new_custom94,
    action_new_custom95,
    action_new_custom96,
    action_new_custom97,
    action_new_custom98,
    action_new_custom99,
    action_new_event,
    action_new_group,
    action_new_lead,
    action_new_note,
    action_new_notebook,
    action_new_opportunity,
    action_new_person_account,
    action_new_task,
    action_password_unlock,
    action_preview,
    action_priority,
    action_question_post_action,
    action_quote,
    action_recall,
    action_record,
    action_refresh,
    action_reject,
    action_remove,
    action_remove_relationship,
    action_reset_password,
    action_script,
    action_share,
    action_share_file,
    action_share_link,
    action_share_poll,
    action_share_post,
    action_share_thanks,
    action_sort,
    action_submit_for_approval,
    action_update,
    action_update_status,
    action_upload,
    action_user,
    action_user_activation,
    action_view_relationship,
    action_web_link,
    standard_account,
    standard_action_list_component,
    standard_actions_and_buttons,
    standard_activations,
    standard_address,
    standard_agent_session,
    standard_all,
    standard_announcement,
    standard_answer_best,
    standard_answer_private,
    standard_answer_public,
    standard_apex,
    standard_apex_plugin,
    standard_app,
    standard_approval,
    standard_apps,
    standard_apps_admin,
    standard_article,
    standard_asset_action,
    standard_asset_action_source,
    standard_asset_downtime_period,
    standard_asset_object,
    standard_asset_relationship,
    standard_asset_state_period,
    standard_asset_warranty,
    standard_assigned_resource,
    standard_assignment,
    standard_avatar,
    standard_avatar_loading,
    standard_bot,
    standard_bot_training,
    standard_branch_merge,
    standard_brand,
    standard_business_hours,
    standard_buyer_account,
    standard_buyer_group,
    standard_calibration,
    standard_call,
    standard_call_coaching,
    standard_call_history,
    standard_campaign,
    standard_campaign_members,
    standard_cancel_checkout,
    standard_canvas,
    standard_carousel,
    standard_case,
    standard_case_change_status,
    standard_case_comment,
    standard_case_email,
    standard_case_log_a_call,
    standard_case_milestone,
    standard_case_transcript,
    standard_case_wrap_up,
    standard_catalog,
    standard_category,
    standard_channel_program_history,
    standard_channel_program_levels,
    standard_channel_program_members,
    standard_channel_programs,
    standard_chart,
    standard_checkout,
    standard_choice,
    standard_client,
    standard_cms,
    standard_coaching,
    standard_code_playground,
    standard_collection_variable,
    standard_connected_apps,
    standard_constant,
    standard_contact,
    standard_contact_list,
    standard_contact_request,
    standard_contract,
    standard_contract_line_item,
    standard_currency,
    standard_currency_input,
    standard_custom,
    standard_custom_notification,
    standard_customer_360,
    standard_customer_lifecycle_analytics,
    standard_customer_portal_users,
    standard_customers,
    standard_dashboard,
    standard_dashboard_ea,
    standard_data_integration_hub,
    standard_data_mapping,
    standard_data_model,
    standard_data_streams,
    standard_datadotcom,
    standard_dataset,
    standard_date_input,
    standard_date_time,
    standard_decision,
    standard_default,
    standard_delegated_account,
    standard_display_rich_text,
    standard_display_text,
    standard_document,
    standard_drafts,
    standard_dynamic_record_choice,
    standard_education,
    standard_einstein_replies,
    standard_email,
    standard_email_chatter,
    standard_employee,
    standard_employee_asset,
    standard_employee_contact,
    standard_employee_job,
    standard_employee_job_position,
    standard_employee_organization,
    standard_empty,
    standard_endorsement,
    standard_entitlement,
    standard_entitlement_policy,
    standard_entitlement_process,
    standard_entitlement_template,
    standard_entity,
    standard_entity_milestone,
    standard_environment_hub,
    standard_event,
    standard_events,
    standard_expense,
    standard_expense_report,
    standard_expense_report_entry,
    standard_feed,
    standard_feedback,
    standard_file,
    standard_filiter_criteria_rule,
    standard_filter,
    standard_filter_criteria,
    standard_first_non_empty,
    standard_flow,
    standard_folder,
    standard_forecasts,
    standard_formula,
    standard_fulfillment_order,
    standard_generic_loading,
    standard_global_constant,
    standard_goals,
    standard_group_loading,
    standard_groups,
    standard_hierarchy,
    standard_high_velocity_sales,
    standard_home,
    standard_household,
    standard_individual,
    standard_insights,
    standard_instore_locations,
    standard_investment_account,
    standard_invocable_action,
    standard_iot_context,
    standard_iot_orchestrations,
    standard_javascript_button,
    standard_job_family,
    standard_job_position,
    standard_job_profile,
    standard_kanban,
    standard_knowledge,
    standard_lead,
    standard_lead_insights,
    standard_lead_list,
    standard_letterhead,
    standard_lightning_component,
    standard_lightning_usage,
    standard_link,
    standard_list_email,
    standard_live_chat,
    standard_live_chat_visitor,
    standard_location,
    standard_location_permit,
    standard_log_a_call,
    standard_logging,
    standard_loop,
    standard_macros,
    standard_maintenance_asset,
    standard_maintenance_plan,
    standard_maintenance_work_rule,
    standard_marketing_actions,
    standard_merge,
    standard_messaging_conversation,
    standard_messaging_session,
    standard_messaging_user,
    standard_metrics,
    standard_multi_picklist,
    standard_multi_select_checkbox,
    standard_news,
    standard_note,
    standard_number_input,
    standard_omni_supervisor,
    standard_operating_hours,
    standard_opportunity,
    standard_opportunity_contact_role,
    standard_opportunity_splits,
    standard_order_item,
    standard_orders,
    standard_outcome,
    standard_output,
    standard_partner_fund_allocation,
    standard_partner_fund_claim,
    standard_partner_fund_request,
    standard_partner_marketing_budget,
    standard_partners,
    standard_password,
    standard_past_chat,
    standard_people,
    standard_performance,
    standard_person_account,
    standard_photo,
    standard_picklist_choice,
    standard_picklist_type,
    standard_planogram,
    standard_poll,
    standard_portal,
    standard_portal_roles,
    standard_portal_roles_and_subordinates,
    standard_post,
    standard_price_book_entries,
    standard_price_books,
    standard_pricebook,
    standard_pricing_workspace,
    standard_process,
    standard_process_exception,
    standard_product,
    standard_product_consumed,
    standard_product_item,
    standard_product_item_transaction,
    standard_product_request,
    standard_product_request_line_item,
    standard_product_required,
    standard_product_transfer,
    standard_product_warranty_term,
    standard_product_workspace,
    standard_products,
    standard_proposition,
    standard_question_best,
    standard_question_feed,
    standard_queue,
    standard_quick_text,
    standard_quip,
    standard_quip_sheet,
    standard_quotes,
    standard_radio_button,
    standard_read_receipts,
    standard_recent,
    standard_record,
    standard_record_create,
    standard_record_delete,
    standard_record_lookup,
    standard_record_update,
    standard_recycle_bin,
    standard_related_list,
    standard_relationship,
    standard_reply_text,
    standard_report,
    standard_resource_absence,
    standard_resource_capacity,
    standard_resource_preference,
    standard_resource_skill,
    standard_return_order,
    standard_return_order_line_item,
    standard_reward,
    standard_rtc_presence,
    standard_sales_cadence,
    standard_sales_cadence_target,
    standard_sales_channel,
    standard_sales_path,
    standard_sales_value,
    standard_salesforce_cms,
    standard_scan_card,
    standard_schedule_objective,
    standard_scheduling_constraints,
    standard_scheduling_policy,
    standard_screen,
    standard_search,
    standard_section,
    standard_segments,
    standard_service_appointment,
    standard_service_appointment_capacity_usage,
    standard_service_contract,
    standard_service_crew,
    standard_service_crew_member,
    standard_service_report,
    standard_service_resource,
    standard_service_territory,
    standard_service_territory_location,
    standard_service_territory_member,
    standard_settings,
    standard_shift,
    standard_shift_pattern,
    standard_shift_pattern_entry,
    standard_shift_preferences,
    standard_shift_template,
    standard_shift_type,
    standard_shipment,
    standard_skill,
    standard_skill_entity,
    standard_skill_requirement,
    standard_slider,
    standard_sms,
    standard_snippet,
    standard_snippets,
    standard_sobject,
    standard_sobject_collection,
    standard_social,
    standard_solution,
    standard_sort,
    standard_sossession,
    standard_stage,
    standard_stage_collection,
    standard_steps,
    standard_store,
    standard_store_group,
    standard_story,
    standard_strategy,
    standard_survey,
    standard_system_and_global_variable,
    standard_task,
    standard_task2,
    standard_team_member,
    standard_template,
    standard_text,
    standard_text_template,
    standard_textarea,
    standard_textbox,
    standard_thanks,
    standard_thanks_loading,
    standard_timesheet,
    standard_timesheet_entry,
    standard_timeslot,
    standard_today,
    standard_toggle,
    standard_topic,
    standard_topic2,
    standard_trailhead,
    standard_trailhead_alt,
    standard_unmatched,
    standard_user,
    standard_user_role,
    standard_variable,
    standard_variation_attribute_setup,
    standard_variation_products,
    standard_visit_templates,
    standard_visits,
    standard_visualforce_page,
    standard_voice_call,
    standard_waits,
    standard_warranty_term,
    standard_webcart,
    standard_work_capacity_limit,
    standard_work_capacity_usage,
    standard_work_contract,
    standard_work_order,
    standard_work_order_item,
    standard_work_plan,
    standard_work_plan_rule,
    standard_work_plan_template,
    standard_work_plan_template_entry,
    standard_work_queue,
    standard_work_step,
    standard_work_step_template,
    standard_work_type,
    standard_work_type_group,
    utility_activity,
    utility_ad_set,
    utility_add,
    utility_adduser,
    utility_advanced_function,
    utility_advertising,
    utility_agent_session,
    utility_alert,
    utility_all,
    utility_anchor,
    utility_animal_and_nature,
    utility_announcement,
    utility_answer,
    utility_answered_twice,
    utility_apex,
    utility_apex_plugin,
    utility_approval,
    utility_apps,
    utility_archive,
    utility_arrow_bottom,
    utility_arrow_top,
    utility_arrowdown,
    utility_arrowup,
    utility_asset_warranty,
    utility_assignment,
    utility_attach,
    utility_automate,
    utility_away,
    utility_back,
    utility_ban,
    utility_block_visitor,
    utility_bold,
    utility_bookmark,
    utility_breadcrumbs,
    utility_broadcast,
    utility_brush,
    utility_bucket,
    utility_builder,
    utility_button_choice,
    utility_call,
    utility_campaign,
    utility_cancel_file_request,
    utility_cancel_transfer,
    utility_capslock,
    utility_cart,
    utility_case,
    utility_cases,
    utility_center_align_text,
    utility_change_owner,
    utility_change_record_type,
    utility_chart,
    utility_chat,
    utility_check,
    utility_checkin,
    utility_checkout,
    utility_chevrondown,
    utility_chevronleft,
    utility_chevronright,
    utility_chevronup,
    utility_choice,
    utility_classic_interface,
    utility_clear,
    utility_clock,
    utility_close,
    utility_collapse_all,
    utility_collection_variable,
    utility_color_swatch,
    utility_comments,
    utility_company,
    utility_component_customization,
    utility_connected_apps,
    utility_constant,
    utility_contact_request,
    utility_contract,
    utility_contract_alt,
    utility_copy,
    utility_copy_to_clipboard,
    utility_crossfilter,
    utility_currency,
    utility_currency_input,
    utility_custom_apps,
    utility_cut,
    utility_dash,
    utility_data_mapping,
    utility_database,
    utility_datadotcom,
    utility_date_input,
    utility_date_time,
    utility_dayview,
    utility_delete,
    utility_deprecate,
    utility_description,
    utility_desktop,
    utility_desktop_and_phone,
    utility_desktop_console,
    utility_dialing,
    utility_diamond,
    utility_dislike,
    utility_display_rich_text,
    utility_display_text,
    utility_dock_panel,
    utility_down,
    utility_download,
    utility_drag,
    utility_drag_and_drop,
    utility_dynamic_record_choice,
    utility_edit,
    utility_edit_form,
    utility_education,
    utility_einstein,
    utility_email,
    utility_email_open,
    utility_emoji,
    utility_end_call,
    utility_end_chat,
    utility_end_messaging_session,
    utility_engage,
    utility_enter,
    utility_erect_window,
    utility_error,
    utility_event,
    utility_events,
    utility_expand,
    utility_expand_all,
    utility_expand_alt,
    utility_fallback,
    utility_favorite,
    utility_feed,
    utility_file,
    utility_filter,
    utility_filterList,
    utility_filter_criteria,
    utility_filter_criteria_rule,
    utility_flow,
    utility_flow_alt,
    utility_food_and_drink,
    utility_formula,
    utility_forward,
    utility_forward_up,
    utility_freeze_column,
    utility_frozen,
    utility_fulfillment_order,
    utility_full_width_view,
    utility_global_constant,
    utility_graph,
    utility_groups,
    utility_help,
    utility_help_center,
    utility_hide,
    utility_hide_mobile,
    utility_hierarchy,
    utility_high_velocity_sales,
    utility_home,
    utility_identity,
    utility_image,
    utility_in_app_assistant,
    utility_inbox,
    utility_incoming_call,
    utility_info,
    utility_info_alt,
    utility_insert_tag_field,
    utility_insert_template,
    utility_inspector_panel,
    utility_internal_share,
    utility_italic,
    utility_jump_to_bottom,
    utility_jump_to_left,
    utility_jump_to_right,
    utility_jump_to_top,
    utility_justify_text,
    utility_kanban,
    utility_key,
    utility_keyboard_dismiss,
    utility_keypad,
    utility_knowledge_base,
    utility_layers,
    utility_layout,
    utility_leave_conference,
    utility_left,
    utility_left_align_text,
    utility_level_down,
    utility_level_up,
    utility_light_bulb,
    utility_lightning_extension,
    utility_lightning_inspector,
    utility_like,
    utility_link,
    utility_linked,
    utility_list,
    utility_listen,
    utility_live_message,
    utility_location,
    utility_location_permit,
    utility_lock,
    utility_locker_service_api_viewer,
    utility_locker_service_console,
    utility_log_a_call,
    utility_logout,
    utility_loop,
    utility_lower_flag,
    utility_macros,
    utility_magicwand,
    utility_mark_all_as_read,
    utility_matrix,
    utility_merge,
    utility_merge_field,
    utility_metrics,
    utility_minimize_window,
    utility_missed_call,
    utility_money,
    utility_moneybag,
    utility_monthlyview,
    utility_move,
    utility_multi_picklist,
    utility_multi_select_checkbox,
    utility_muted,
    utility_new,
    utility_new_direct_message,
    utility_new_window,
    utility_news,
    utility_note,
    utility_notebook,
    utility_notification,
    utility_number_input,
    utility_office365,
    utility_offline,
    utility_offline_briefcase,
    utility_offline_cached,
    utility_omni_channel,
    utility_open,
    utility_open_folder,
    utility_opened_folder,
    utility_outbound_call,
    utility_outcome,
    utility_overflow,
    utility_package,
    utility_package_org,
    utility_package_org_beta,
    utility_page,
    utility_palette,
    utility_password,
    utility_paste,
    utility_pause,
    utility_people,
    utility_percent,
    utility_phone_landscape,
    utility_phone_portrait,
    utility_photo,
    utility_picklist,
    utility_picklist_choice,
    utility_picklist_type,
    utility_pin,
    utility_pinned,
    utility_play,
    utility_podcast_webinar,
    utility_pop_in,
    utility_power,
    utility_preview,
    utility_price_book_entries,
    utility_price_books,
    utility_pricing_workspace,
    utility_print,
    utility_priority,
    utility_privately_shared,
    utility_process,
    utility_product_warranty_term,
    utility_product_workspace,
    utility_products,
    utility_prompt,
    utility_prompt_edit,
    utility_push,
    utility_puzzle,
    utility_question,
    utility_question_mark,
    utility_questions_and_answers,
    utility_quick_text,
    utility_quip,
    utility_quotation_marks,
    utility_quote,
    utility_radio_button,
    utility_rating,
    utility_reassign,
    utility_record,
    utility_record_create,
    utility_record_delete,
    utility_record_lookup,
    utility_record_update,
    utility_recurring_exception,
    utility_recycle_bin_empty,
    utility_recycle_bin_full,
    utility_redo,
    utility_refresh,
    utility_relate,
    utility_reminder,
    utility_remove_formatting,
    utility_remove_link,
    utility_replace,
    utility_reply,
    utility_reply_all,
    utility_report_issue,
    utility_reset_password,
    utility_resource_absence,
    utility_resource_capacity,
    utility_resource_territory,
    utility_retail_execution,
    utility_retweet,
    utility_ribbon,
    utility_richtextbulletedlist,
    utility_richtextindent,
    utility_richtextnumberedlist,
    utility_richtextoutdent,
    utility_right,
    utility_right_align_text,
    utility_rotate,
    utility_routing_offline,
    utility_rows,
    utility_rules,
    utility_salesforce1,
    utility_save,
    utility_screen,
    utility_search,
    utility_section,
    utility_send,
    utility_sentiment_negative,
    utility_sentiment_neutral,
    utility_settings,
    utility_setup,
    utility_setup_assistant_guide,
    utility_setup_modal,
    utility_share,
    utility_share_file,
    utility_share_mobile,
    utility_share_post,
    utility_shield,
    utility_shift_pattern,
    utility_shift_pattern_entry,
    utility_shift_ui,
    utility_shopping_bag,
    utility_shortcuts,
    utility_side_list,
    utility_signpost,
    utility_skip,
    utility_skip_back,
    utility_skip_forward,
    utility_slider,
    utility_smiley_and_people,
    utility_sms,
    utility_snippet,
    utility_sobject,
    utility_sobject_collection,
    utility_socialshare,
    utility_sort,
    utility_spinner,
    utility_stage,
    utility_stage_collection,
    utility_standard_objects,
    utility_steps,
    utility_stop,
    utility_store,
    utility_strategy,
    utility_strikethrough,
    utility_success,
    utility_summary,
    utility_summarydetail,
    utility_survey,
    utility_switch,
    utility_symbols,
    utility_sync,
    utility_system_and_global_variable,
    utility_table,
    utility_table_settings,
    utility_tablet_landscape,
    utility_tablet_portrait,
    utility_tabset,
    utility_target,
    utility_task,
    utility_text,
    utility_text_background_color,
    utility_text_color,
    utility_text_template,
    utility_textarea,
    utility_textbox,
    utility_threedots,
    utility_threedots_vertical,
    utility_thunder,
    utility_tile_card_list,
    utility_toggle,
    utility_toggle_panel_bottom,
    utility_toggle_panel_left,
    utility_toggle_panel_right,
    utility_toggle_panel_top,
    utility_topic,
    utility_topic2,
    utility_touch_action,
    utility_tracker,
    utility_trail,
    utility_trailhead,
    utility_trailhead_alt,
    utility_travel_and_places,
    utility_trending,
    utility_turn_off_notifications,
    utility_type,
    utility_type_tool,
    utility_undelete,
    utility_undeprecate,
    utility_underline,
    utility_undo,
    utility_unlinked,
    utility_unlock,
    utility_unmuted,
    utility_up,
    utility_upload,
    utility_user,
    utility_user_role,
    utility_variable,
    utility_variation_attribute_setup,
    utility_variation_products,
    utility_video,
    utility_voicemail_drop,
    utility_volume_high,
    utility_volume_low,
    utility_volume_off,
    utility_waits,
    utility_warning,
    utility_warranty_term,
    utility_watchlist,
    utility_weeklyview,
    utility_wifi,
    utility_work_order_type,
    utility_world,
    utility_yubi_key,
    utility_zoomin,
    utility_zoomout,
    doctype_ai,
    doctype_attachment,
    doctype_audio,
    doctype_box_notes,
    doctype_csv,
    doctype_eps,
    doctype_excel,
    doctype_exe,
    doctype_flash,
    doctype_folder,
    doctype_gdoc,
    doctype_gdocs,
    doctype_gform,
    doctype_gpres,
    doctype_gsheet,
    doctype_html,
    doctype_image,
    doctype_keynote,
    doctype_library_folder,
    doctype_link,
    doctype_mp4,
    doctype_overlay,
    doctype_pack,
    doctype_pages,
    doctype_pdf,
    doctype_ppt,
    doctype_psd,
    doctype_quip_doc,
    doctype_quip_sheet,
    doctype_quip_slide,
    doctype_rtf,
    doctype_slide,
    doctype_stypi,
    doctype_txt,
    doctype_unknown,
    doctype_video,
    doctype_visio,
    doctype_webex,
    doctype_word,
    doctype_xml,
    doctype_zip,
    custom_custom1,
    custom_custom10,
    custom_custom100,
    custom_custom101,
    custom_custom102,
    custom_custom103,
    custom_custom104,
    custom_custom105,
    custom_custom106,
    custom_custom107,
    custom_custom108,
    custom_custom109,
    custom_custom11,
    custom_custom110,
    custom_custom111,
    custom_custom112,
    custom_custom113,
    custom_custom12,
    custom_custom13,
    custom_custom14,
    custom_custom15,
    custom_custom16,
    custom_custom17,
    custom_custom18,
    custom_custom19,
    custom_custom2,
    custom_custom20,
    custom_custom21,
    custom_custom22,
    custom_custom23,
    custom_custom24,
    custom_custom25,
    custom_custom26,
    custom_custom27,
    custom_custom28,
    custom_custom29,
    custom_custom3,
    custom_custom30,
    custom_custom31,
    custom_custom32,
    custom_custom33,
    custom_custom34,
    custom_custom35,
    custom_custom36,
    custom_custom37,
    custom_custom38,
    custom_custom39,
    custom_custom4,
    custom_custom40,
    custom_custom41,
    custom_custom42,
    custom_custom43,
    custom_custom44,
    custom_custom45,
    custom_custom46,
    custom_custom47,
    custom_custom48,
    custom_custom49,
    custom_custom5,
    custom_custom50,
    custom_custom51,
    custom_custom52,
    custom_custom53,
    custom_custom54,
    custom_custom55,
    custom_custom56,
    custom_custom57,
    custom_custom58,
    custom_custom59,
    custom_custom6,
    custom_custom60,
    custom_custom61,
    custom_custom62,
    custom_custom63,
    custom_custom64,
    custom_custom65,
    custom_custom66,
    custom_custom67,
    custom_custom68,
    custom_custom69,
    custom_custom7,
    custom_custom70,
    custom_custom71,
    custom_custom72,
    custom_custom73,
    custom_custom74,
    custom_custom75,
    custom_custom76,
    custom_custom77,
    custom_custom78,
    custom_custom79,
    custom_custom8,
    custom_custom80,
    custom_custom81,
    custom_custom82,
    custom_custom83,
    custom_custom84,
    custom_custom85,
    custom_custom86,
    custom_custom87,
    custom_custom88,
    custom_custom89,
    custom_custom9,
    custom_custom90,
    custom_custom91,
    custom_custom92,
    custom_custom93,
    custom_custom94,
    custom_custom95,
    custom_custom96,
    custom_custom97,
    custom_custom98,
    custom_custom99
};