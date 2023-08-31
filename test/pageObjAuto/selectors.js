import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('#userId');
  }
  get inputPassword() {
    return $('#password');
  }
  get btnSubmit() {
    return $("//button[@type='submit']");
  }
  get flash() {
    return $("//h2[normalize-space()='Projects']");
  } // After login get the All Project - name
  get wrong_login_alert() {
    return $("//div[@role='alert']");
  } // Wrong login alert
  get signout() {
    return $("//span[contains(text(),'Logout')]");
  }
  get signout_changed() {
    return $("button[aria-label='Logout']");
  }

  get systemsettings() {
    return $("//button[normalize-space()='Settings']");
  }
  get systemsupport() {
    return $("//button[normalize-space()='Support']");
  }
  get config_temp_manager() {
    return $("//li[normalize-space()='Configuration Template Manager']");
  }
  get srt_thai_choose() {
    return $("//span[@aria-label='SRT Thailand']");
  }
  get srt_thai_view_text() {
    return $("//h2[normalize-space()='SRT Thailand']");
  }

  get language_settings() {
    return $("//li[normalize-space()='Language Settings']");
  }
  get french_lang_select() {
    return $("//div[@aria-label='system-language']//label[2]");
  }
  get save_changes_btn() {
    return $("//button[normalize-space()='Save changes']");
  }
  get lang_change_view_text() {
    return $("//span[normalize-space()='Informations du clients']");
  }

  /* a method to encapsule automation code to interact with the page to login using username and password */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  //=========================================Project Search======================================================
  get project_search() {
    return $("input[placeholder='Search by Project Name']");
  }
  get project_search_rslt() {
    return $("//span[@aria-label='Project for Automation']");
  }
  get analysis_project_search_result() {
    return $("//span[@aria-label='Industrial-OverlappingMeas']");
  }
  get analysis_linesec() {
    return $("//div[contains(text(),'Line section')]");
  }
  get analysis_track() {
    return $("//div[contains(text(),'Track')]");
  }
  get analysis_button() {
    return $("//span[normalize-space()='Create Analysis']");
  }

  get analysis_name() {
    return $("//input[@name='Name']");
  }
  get analysis_operator() {
    return $("//input[@name='Operator']");
  }
  get analysis_comment() {
    return $("//textarea[@name='Comment']");
  }
  get analysis_dropdown() {
    return $("//div[@aria-label='Analysis Design Dropdown Component']");
  }
  get analysis_dropdown_option_Select() {
    return $("//li[@aria-label='Job1']");
  }

  get analysis_interval_length() {
    return $("//input[@aria-label='Interval Length']");
  }
  get analysis_measurement_select() {
    return $("//span[@aria-label='Job1']");
  }

  get create_analysis_button() {
    return $("//button[contains(text(),'Create Analysis')]");
  }

  get project_automation_test() {
    return $("//span[@aria-label='Project for Automation']");
  }
  get project_srch_rslt_globalEn_test() {
    return $("//span[@aria-label='AutomationGlobalConfigEN']");
  }
  get project_srch_rslt_for_config_test() {
    return $("//span[aria-label='Config Project Test']");
  }
  get project_srch_rslt_for_configtbl_test() {
    return $("//span[aria-label='Config Table']");
  }
  get project_srch_rslt_for_TQI_config_test() {
    return $("//span[aria-label='TQI Project']");
  }
  get project_srch_rslt_for_horizontal_config_test() {
    return $("//span[aria-label='Horizon Table']");
  }
  get project_srch_rslt_for_cant_configtbl_test() {
    return $("//span[aria-label='Cant Table']");
  }
  get project_srch_rslt_for_cant_twist_tbl_test() {
    return $("//span[aria-label='Twist Table']");
  }
  get project_srch_rslt_for_vertical_versine_tbl_test() {
    return $("span[aria-label='Vertical Versine Table']");
  }
  get project_srch_rslt_for_global_config1_test() {
    return $("//span[@aria-label='GlobalConfig1']");
  }
  get project_export_button() {
    return $("//button[contains(text(),'Export Project')]");
  }
  get project_export_message() {
    return $(
      "//span[contains(text(),'Exporting of project data in progress. We will not')]"
    );
  }
  get project_import_button() {
    return $("//button[contains(text(),'Import')]");
  }
  get import_project_button() {
    return $("//button[normalize-space()='Import Project']");
  }

  get ex_project_structure_radio_btn() {
    return $("//input[@value='exportProjectWithSelection']");
  }
  get ex_project_select_measure_chkbox() {
    return $("//span[@aria-aria-label='SelectAllMeasurementCheckbox']");
  }

  //=========================== Adding New Line Section===========================================================

  get add_line_section_btn() {
    return $("//button[@aria-label='Add Line Section']");
  }

  get project_name() {
    return $("//input[@name='Name']");
  }
  get line_sec_name() {
    return $("input[name='Name']");
  }
  get line_section_number() {
    return $("input[name='Number']");
  }
  get line_sec_start() {
    return $("input[name='Start.Name']");
  }
  get line_sec_end() {
    return $("input[name='End.Name']");
  }
  get line_sec_cmnt() {
    return $("textarea[name='Comment']");
  }
  get line_sec_start_local() {
    return $("input[name='Start.Stationing']");
  }
  get line_sec_end_local() {
    return $("input[name='End.Stationing']");
  }
  get add_linesec_btn() {
    return $("//button[@aria-label='Custom Submit Button']");
  }
  get linesec_created_alert() {
    return $("//div[@role='alert']");
  } // Alert after project successfully created

  //================================ Line Section Details Check ======================================================

  get line_sec_click_expand() {
    return $("(//div[@class='MuiGrid-root MuiGrid-container css-8r59ew'])[2]");
  }
  get linesecselect() {
    return $("//span[contains(text(),'Line Section 1')]");
  }
  get linesecnamecheck() {
    return $("//span[contains(text(),'Line Section 1')]");
  }
  get lineseceditbutton() {
    return $("//button[@aria-label='Property Window Edit Button']");
  }
  get linesectioneditsavechanges() {
    return $("//button[normalize-space()='Save changes']");
  }
  get linesecedit_alert() {
    return $('.MuiTypography-root.MuiTypography-body1Medium.css-t9cmbk');
  }

  //================================ Add New Track ======================================================

  get line_sec_expand_for_track() {
    return $("(//div[@class='MuiGrid-root MuiGrid-container css-8r59ew'])[2]");
  }
  get addtrackbtn() {
    return $("//button[@aria-label='AddTrackButton']");
  }
  get addtrackname() {
    return $("input[name='Name']");
  } // Add Track Name
  get addtracknum() {
    return $("input[name='Number']");
  } // Add Track Number
  get addtrackcmnt() {
    return $("textarea[name='Comment']");
  } // Add Track Comment
  get addtrackbtnsubmit() {
    return $("button[type='submit']");
  }
  get addtrack_alert() {
    return $("//div[@role='alert']");
  }

  //===============================Track Details Check==============================================================
  get line_sec_dropdown_menu() {
    return $("(//div[@class='MuiGrid-root MuiGrid-container css-8r59ew'])[2]");
  }
  get line_section_to_show_the_track() {
    return $("//div[contains(text(),'Line Section 1')]");
  }
  get track_select_to_check_details() {
    return $("//span[contains(text(),'Demo Track 001')]");
  }
  get track_select_to_add_a_new_job() {
    return $("//div[contains(text(),'Demo Track 001 ')]");
  }
  get track_for_addingdesign() {
    return $('.MuiCollapse-wrapperInner.MuiCollapse-vertical.css-8atqhb');
  }
  get track_select_to_update_info() {
    return $("//button[@aria-label='Property Window Edit Button']");
  }
  get track_updated_alert_check() {
    return $("div[role='alert']");
  }
  get track_details_overview() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/ul[1]/div[1]/div[1]/li[1]/div[1]'
    );
  }

  get project_expand() {
    return $(
      "//body/div[@id='root']/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]"
    );
  }

  get project_menu() {
    return $(
      "//body/div[@id='root']/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/div[1]/div[2]/div[1]/button[1]/span[1]/*[1]"
    );
  }
  get track_name_field() {
    return $("//input[@name='Name']");
  } // Track Name input
  get track_create_done() {
    return $("//span[normalize-space()='Add Track']");
  } // Track Create Complete
  get add_track_menu_select() {
    return $("//body/div[@id='simple-menu']/div[3]/ul[1]/li[1]");
  }
  get add_track_number() {
    return $("//input[@name='Number']");
  }
  get add_trac_cmnt() {
    return $("//textarea[@name='Comment']");
  }

  //==================homepage properties===============================================================
  get add_newprojectbtn() {
    return $("//button[normalize-space()='New Project']");
  } //add new project btn

  get create_project() {
    return $("//button[normalize-space()='Create Project']");
  } // create project - section after clicking NEW PROJECT btn
  get cancel_createproject() {
    return $(
      "div[aria-label='Create project page'] div div button[type='button']"
    );
  } // Cancel btn of creating new project
  get confirmcancel() {
    return $("button[aria-label='confirm']");
  } //pressing of Confirm btn of after pressing CANCEL button to cancel project creation

  get importprojectbtn() {
    return $("button[aria-label='Import']");
  } // IMPORT PROJECT btn
  get cancel_importproject() {
    return $(
      "div[aria-label='Create project page'] div div button[type='button']"
    );
  } // Cancel btn of creating new project

  //=============================Settings ==========================================================
  get settings_btn() {
    return $("//span[contains(text(),'Settings')]");
  } // Settings Button
  get LanSet_btn() {
    return $("//body/div[@id='settings-menu']/div[3]/ul[1]/li[2]");
  } // Language Settings
  get syslan_sel() {
    return $(
      "//div[@aria-label='system-language']//span[contains(text(),'french')]"
    );
  } // System Language select
  get savechangeslan() {
    return $("//span[normalize-space()='Save changes']");
  } // save changes language
  get savechangesReportlan() {
    return $(
      "//div[@aria-label='report-language']//span[contains(text(),'italian')]"
    );
  } // save changes language

  //==============================Notification Download=================================================

  get notification_btn() {
    return $("//button[@aria-label='Open notification menu']");
  } // Notification button
  get notification_download() {
    return $('//li[1]//div[1]//div[1]//div[2]//button[1]//span[1]');
  } //Notification Download Button

  //==========================Create New Project=========================================================
  get new_project_btn() {
    return $("//button[normalize-space()='New Project']");
  } // New Project Button
  get new_project_name() {
    return $("input[name='ProjectInfo.Name']");
  } // New Project Name field
  get new_project_num() {
    return $("input[name='ProjectInfo.Number']");
  } // New Project Number Button
  get new_project_strt() {
    return $("input[name='MetaData.Start.Name']");
  } // New Project Start Place
  get new_project_end() {
    return $("input[name='MetaData.End.Name']");
  } // New Project End Place
  get new_project_start_place() {
    return $("input[name='MetaData.Start.Name']");
  } // New Project Start Place
  get new_project_end_place() {
    return $("input[name='MetaData.End.Name']");
  } // New Project End Place
  get new_project_strt_local() {
    return $("input[name='MetaData.Start.Stationing']");
  } // New Project Start Localization
  get new_project_end_local() {
    return $("input[name='MetaData.End.Stationing']");
  } // New Project End Localization
  get new_project_comment() {
    return $("textarea[name='MetaData.Comment']");
  } // New Project Comment
  get new_project_line_section() {
    return $("input[name='ProjectInfo.LineSectionName']");
  } // New Project Line Section
  get new_project_track_name() {
    return $("input[name='ProjectInfo.TrackName']");
  } // New Project Track Name
  get new_project_create_complete() {
    return $("button[type='submit']");
  } // New Project Create Complete Button
  get project_created_alert() {
    return $("//div[@role='alert']");
  } // Alert after project successfully
  created;

  get new_project_information() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  } // New Project Info
  get details__menu() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  } // New Project Info
  get new_project_del() {
    return $("//[name()='path' and contains(@d,'M6 19c0 1.')]");
  } // New Project Delete button
  get new_pro_confirm_del() {
    return $("//span[normalize-space()='Confirm']");
  } // Confirm deletion ofr New Project

  //=====================================Poject Details Check=================================================

  get line_section_click() {
    return $('//li[9]//div[1]//div[2]//div[1]');
  } // Click on Line Section
  //==========================================================================================================

  //==============================================Details===================================================

  get line_section_menu() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[9]/div[1]/div[1]//*[name()='svg']"
    );
  }
  get track_selection() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[@role='treeitem']/ul[@role='group']/div/div/li[@role='treeitem']/div[1]"
    );
  }
  get design_sel() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div[2]/div[1]/div[1]/ul[1]/li[1]/div[1]"
    );
  }
  get job_sel() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]"
    );
  }

  //============================Add New Design====================================================================
  get line_sec_dropdown() {
    return $("(//*[name()='path'])[5]");
  }
  get line_sec_dropdown2() {
    return $("//span[contains(text(),'Line Section 1')]");
  }

  get track_select() {
    return $("//div[contains(text(),'Demo Track 001')]");
  }
  get design_click_for_check() {
    return $("//div[text()='Demo Design']");
  }

  get add_design_btn() {
    return $("//span[normalize-space()='Add Design']");
  }

  get design_name() {
    return $("input[name='Name']");
  }
  get datepicker() {
    return $(
      '//div[@class="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1nvf7g0"]'
    );
  }
  get datemenuchange() {
    return $("div[class='css-1jq6llm']");
  }
  get yearselect() {
    return $('div:nth-child(106) button:nth-child(1)');
  }
  get yearselect_change() {
    return $('div:nth-child(105) button:nth-child(1)');
  }
  get dateselectionclick() {
    return $("//button[normalize-space()='5']");
  }
  get dateselect() {
    return $(
      "body div[role='presentation'] div div:nth-child(3) div:nth-child(3) button:nth-child(1) span:nth-child(1) p:nth-child(1)"
    );
  }
  get designcomment() {
    return $("textarea[name='Comment']");
  }
  get designcreatebtn() {
    return $("button[type='submit']");
  }
  get design_created_alert() {
    return $("//div[@role='alert']");
  }

  //==========================Add Job==============================================================================
  get selectdesign() {
    return $("//span[contains(text(),'abc')]");
  }

  get addjobbtn() {
    return $("//span[normalize-space()='Add Job']");
  }

  get jobnm() {
    return $("input[name='Name']");
  }
  get jobcmt() {
    return $("textarea[name='Comment']");
  }
  get designdropdown() {
    return $("//div[@aria-label='design id']");
  }

  get designselection() {
    return $("//li[@role='option']");
  }
  get job_created_alert() {
    return $("//div[@role='alert']");
  }
  get job_updated_alert() {
    return $("//div[@role='alert']");
  }

  get addjobdone() {
    return $("button[type='submit']");
  }

  //=========================Add Speed==============================================================================
  get addspeedbtn() {
    return $("//div[text()='Speed']");
  }
  get speed_start_point() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get speed_end_point() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get speed_speed_km() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get speed_end_point_2ndline() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get addspeedsubmit() {
    return $("//button[normalize-space()='Save changes']");
  }
  get speedselectionaction() {
    return $("//div[contains(text(),'Speed')]");
  }
  get speededitingbutton() {
    return $("//button[@aria-label='Property Window Edit Button']");
  }
  //=================================Project Details Check==========================================================
  get projectinfo() {
    return $("button[aria-label='Project Info']");
  }
  get sideactionbtn() {
    return $("//button[normalize-space()='Project Configuration']");
  }
  get projectname_matchin_projectconfig() {
    return $("//h3[normalize-space()='Project Tree New RMS Project']");
  }

  //===============================Design Details Check=============================================================

  get design_name_check() {
    return $("//div[contains(text(),'Demo Design')]");
  }
  get design_select_tocheck_details() {
    return $("//div[contains(text(),'abc')]");
  }
  get design_edit_button() {
    return $("//button[@aria-label='Property Window Edit Button']");
  }
  get design_update_saving() {
    return $("//button[normalize-space()='Save changes']");
  }
  get design_updated_alrt() {
    return $("div[role='alert']");
  }
  get design_select_check_details_2() {
    return $(
      "div[class='MuiGrid-root MuiGrid-container css-1iavi7g'] div:nth-child(1) div:nth-child(2) div:nth-child(2) span:nth-child(1)"
    );
  }

  //===============================Job Details Check=============================================================
  get job_select_check_details() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/div[1]/span[1]/div[1]'
    );
  }
  get job_select_to_edit_the_job() {
    return $("//div[contains(text(),'111')]");
  }
  get job_name_check() {
    return $("//span[contains(text(),'111')]");
  }
  get job_name_click() {
    return $("//div[contains(text(),'111')]");
  }

  //===============================Speed Details Check=============================================================
  get design_menu_expand() {
    return $("(//*[name()='svg'][@focusable='false'])[8]");
  }
  get speed_select_check_details() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > li:nth-child(1) > div:nth-child(1)'
    );
  }
  get speed_date_check() {
    return $(
      "body div[id='root'] div div div div div div div div div div div div div:nth-child(2) span:nth-child(1)"
    );
  }

  //==============================Update Line Section of a Project====================================================================

  get line_sec_to_edit() {
    return $("(//span[contains(text(),'Line Section 1')])[1]");
  }
  get update_btn_for_linesec() {
    return $(
      "//body//div[@id='root']//div//div//div//div//button[2]//span[1]//*[name()='svg']"
    );
  }

  get demo_line_for_open() {
    return $("//div[contains(text(),'Line Section 1')]");
  }
  get demo_line_for_select() {
    return $("//div[contains(text(),'Demo Track 007')]");
  }
  get demo_line_for_delete() {
    return $(
      "//button[@aria-label='Property Window Delete Button']//*[name()='svg']"
    );
  }
  get demo_line_for_delete_confirm() {
    return $("//button[normalize-space()='Confirm']");
  }

  get demo_line_for_delete_confirmLine() {
    return $("//button[normalize-space()='Confirm']");
  }

  //Demo Line Delete

  get demo_line_for_open() {
    return $("//div[contains(text(),'Line Section 1')]");
  }

  //==============================Update Track of a Project===========================================================================
  get line_sec_to_select_desired_track() {
    return $("(//span[contains(text(),'Line Section 1')])[1]");
  }
  get line_dropdown_to_select_track() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[2]/div[1]/div[1]//*[name()='svg']//*[name()='path' and contains(@d,'M10 6L8.59')]"
    );
  }
  get track_select_to_update() {
    return $("//span[contains(text(),'Demo Track 001')]");
  }
  get track_edt_btn() {
    return $(
      "//body//div[@id='root']//div//div//div//div//button[2]//span[1]//*[name()='svg']"
    );
  }

  //=============================Design Update========================================================================================
  get design_select_to_edit() {
    return $("(//span[contains(text(),'abc')])[1]");
  }
  get design_name_update() {
    return $("input[name='Name']");
  }
  get design_cmnt_update() {
    return $("textarea[name='Comment']");
  }

  //==============================Update Speed of a Project===========================================================================
  get line_dropdown_to_get_speed_for_edit() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[2]/div[1]/div[1]//*[name()='svg']//*[name()='path' and contains(@d,'M10 6L8.59')]"
    );
  }
  get track_to_get_speed_for_edit() {
    return $(
      "ul[role='group'] div div li[role='treeitem'] div div div p span span span"
    );
  }
  get design_dropdown_to_get_speed_for_edit() {
    return $("(//*[name()='svg'][@focusable='false'])[8]");
  }
  get speed_to_edit() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)'
    );
  }
  get speed_update_btn() {
    return $("(//*[name()='path'])[11]");
  }
  get speed_comment_up() {
    return $("textarea[placeholder='Write your comment']");
  }
  get speed_update_submit() {
    return $("button[type='submit']");
  }
  get speed_updated_alrt() {
    return $("div[role='alert']");
  }

  //==============================Update Job of a Project===========================================================================
  get line_dropdown_to_get_job_for_edit() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[2]/div[1]/div[1]//*[name()='svg']//*[name()='path' and contains(@d,'M10 6L8.59')]"
    );
  }
  get track_to_get_job_for_edit() {
    return $(
      "ul[role='group'] div div li[role='treeitem'] div div div p span span span"
    );
  }
  get job_select_for_edit() {
    return $(
      "body div[id='root'] div div div:nth-child(3) div:nth-child(1) div:nth-child(1) ul:nth-child(1) li:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) p:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)"
    );
  }
  get jobforediting() {
    return $(
      "li[id=':r4:-c15deb28-cf47-4ecd-8a96-8b052c6618cf'] div[class='css-1b7wotb MuiTreeItem-content']"
    );
  }
  get job_edit_btn() {
    return $(
      "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq'])[13]"
    );
  }

  get line_sec_edit() {
    return $("button[aria-label='Property Window Edit Button']");
  }

  get job_edit_btn_dev() {
    return $("button[aria-label='Property Window Edit Button']");
  }
  get job_delete_btn() {
    return $("button[aria-label='Property Window Delete Button']");
  }
  get job_del_confirmation() {
    return $("button[aria-label='confirm']");
  }
  get line_sec_select_to_jobdel() {
    return $("(//div[@class='MuiGrid-root MuiGrid-container css-8r59ew'])[2]");
  }
  get track_select_to_jobdel() {
    return $("(//div[@class='css-1b7wotb MuiTreeItem-content'])[2]");
  }
  get edited_job_sel_todel() {
    return $("//span[contains(text(),'444')]");
  }
  get edited_job_selection_fordel() {
    return $("//div[contains(text(),'444')]");
  }
  get line_sec_sel_to_edit_job() {
    return $("(//div[@class='MuiGrid-root MuiGrid-container css-8r59ew'])[2]");
  }
  get track_sel_to_edit_job() {
    return $("(//div[@class='css-1b7wotb MuiTreeItem-content'])[2]");
  }
  get job_selection_to_edit() {
    return $("//span[contains(text(),'111')]");
  }
  get job_select_to_edit_new() {
    return $("//div[contains(text(),'111')]");
  }
  get job_up_submit() {
    return $("button[type='submit']");
  }

  get line_sec_submit() {
    return $("button[type='submit']");
  }

  //==============================Delete Project====================================================================

  get select_project_to_delete() {
    return $("//p[normalize-space()='Delete Project 1']");
  }
  get project_del_button() {
    return $("(//*[name()='path'])[4]");
  }
  get project_del_button_dev() {
    return $("//*[name()='path' and contains(@d,'M6 19c0 1.')]");
  }

  get Project_del_confirmed() {
    return $("button[aria-label='confirm']");
  }

  get project_del_btn() {
    return $(
      "//button[@aria-label='Property Window Delete Button']//*[name()='svg']"
    );
  }
  get project_del_confirm() {
    return $("//button[normalize-space()='Confirm']");
  }

  //==============================Delete Line Section====================================================================

  get project_del_operation() {
    return $("//p[normalize-space()='Project for Delete Operation']");
  }
  get select_linesec_to_delete() {
    return $("//span[contains(text(),'Line Section 5')]");
  }
  get select_linesec_to_delete_dev() {
    return $(
      'li:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(1) p:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)'
    );
  }
  get line_sec_del_red_btn() {
    return $("//*[name()='path' and contains(@d,'M6 19c0 1.')]");
  }
  get confirm_linesec_del() {
    return $("button[aria-label='confirm'] span:nth-child(1)");
  }
  //get confirm_linesec_del () {return $("button[aria-label='confirm'] span:nth-child(1)")}

  //*[name()='path' and contains(@d,'M3 18h18v-')]

  get demo_linesec_open() {
    return $("//div[contains(text(),'Line Section 1')]");
  }
  get demo_linesec_select() {
    return $("//div[contains(text(),'Line Section 1')]");
  }

  //==============================Delete Speed===========================================================================
  get speed_del_btn() {
    return $("(//*[name()='path'])[15]");
  }

  //==============================Delete Track====================================================================

  get line_sec_menu_to_select_track() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[1]/div[1]/div[1]//*[name()='svg']"
    );
  }
  get select_track_for_delete() {
    return $("(//span[contains(text(),'Track 1')])");
  }
  get track_delete_red_btn() {
    return $(
      "//button[@aria-label='Property Window Delete Button']//*[name()='svg']"
    );
  }
  get confirm_track_del() {
    return $("//button[normalize-space()='Confirm']");
  }

  //Select track for delete
  get demo_track_open_delete() {
    return $("//div[contains(text(),'Demo Line')]");
  }
  get demo_track_select_delete() {
    return $("//div[contains(text(),'Demo Track')]");
  }

  //==============================Design Track====================================================================

  get track_of_design() {
    return $("//span[contains(text(),'Track 2')]");
  }
  get design_select_del() {
    return $("(//span[contains(text(),'Design 007')])[3]");
  }
  get design_delete_btn() {
    return $("button[aria-label='Property Window Delete Button']");
  }
  get design_del_confirmation() {
    return $("button[aria-label='confirm']");
  }

  //==============================Design Job====================================================================

  get track_of_design() {
    return $("//span[contains(text(),'Track 2')]");
  }
  get design_select_job_to_del() {
    return $("(//span[contains(text(),'Design 008')])[1]");
  }
  get job_select_to_del() {
    return $("(//span[contains(text(),'Job 007')])");
  }

  //==============================Create Event====================================================================

  get line_dropdown_for_measurment_track() {
    return $("(//*[name()='svg'][@focusable='false'])[3]");
  }
  get track_of_measurement() {
    return $("//span[contains(text(),'Demo Track')]");
  }
  get job_of_measurment() {
    return $("//span[contains(text(),'Demo Job 1')]");
  }
  get Job_of_measurement_dropdown() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/*[name()='svg'][1]"
    );
  }
  get measurment_to_create_event() {
    return $("//*[name()='path' and contains(@d,'M19 19H5V5')]");
  } //
  get measurment_to_create_event_dev() {
    return $("(//*[name()='path'])[9]");
  }
  get event_span_select() {
    return $("//span[contains(text(),'Events')]");
  }
  get plus_btn_to_create_evnt() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    );
  }

  // Defect Table Report
  get start_station() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get end_station() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get defect_report_startlocal_alrt() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)'
    );
  }
  get defect_report_endlocal_alrt() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)'
    );
  }
  get serverity_selectAll_button() {
    return $("(//input[@type='checkbox'])[1]");
  }
  get validity_selectAll_button() {
    return $(
      "div[aria-label='Select All'] span[class='MuiCheckbox-root MuiCheckbox-colorPrimary MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root Mui-checked css-5uo6z5'] input[type='checkbox']"
    );
  }
  get severity_alert() {
    return $("div[role='alert']");
  }
  get defect_report_create_button() {
    return $("//button[normalize-space()='Create']");
  }

  // Defect Chart Report
  get defect_scale_custom_input_box() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get defect_salce_alert() {
    return $(
      "div[aria-label='set scale of defects'] span[class='MuiTypography-root MuiTypography-subtitle2Regular css-p56xqm']"
    );
  }
  get defect_scale_signal_measurement_custom_checkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)'
    );
  }
  get defect_scale_signal_measurement_custom_box() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get defect_scale_signal_measurement_alert() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)'
    );
  }

  // Events Report
  get placement_select_all_button() {
    return $("div[aria-label='Select All'] input[type='checkbox']");
  }
  get placement_alert() {
    return $("div[role='alert']");
  }

  // Measurement Report
  get set_scale_local_direction() {
    return $(
      "div[class='MuiGrid-root MuiGrid-container css-v3z1wi'] div[class='MuiGrid-root MuiGrid-container css-v3z1wi'] span[class='MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-asylyt']"
    );
  }
  get set_scale_local_direction_box() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
    );
  }
  get set_scale_local_direction_alert() {
    return $('.MuiTypography-root.MuiTypography-subtitle2Regular.css-p56xqm');
  }
  get local_direction_alert() {
    return $("(//p[@aria-label='error-text'])[1]");
  }

  // ASCII/CSV  and KML Export
  get str_local_export() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get end_local_export() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get export_str_local_alert() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)'
    );
  }
  get export_end_local_alert() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)'
    );
  }

  //==================================Measurement Details Check===================================================
  get measurment_select_for_Details() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)'
    );
  }
  get measurment_action_menu() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  }
  get measurment_started_match() {
    return $(
      "body div[id='root'] div div div div div div div div div:nth-child(2) div:nth-child(2) div:nth-child(2) span:nth-child(1)"
    );
  }

  //==================================Measurement Delete===================================================
  get measurment_to_del_dev() {
    return $(
      'li:nth-child(5) div:nth-child(1) div:nth-child(2) div:nth-child(1) p:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)'
    );
  }
  get measurment_to_del__action_menu_dev() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  }

  get event_name() {
    return $('#mui-component-select-Abbr');
  }
  get event_name_dev() {
    return $('#mui-component-select-TypeId');
  }
  get event_name_sel() {
    return $("//li[normalize-space()='Rail joint']");
  }
  get event_name_sel_dev() {
    return $("//li[normalize-space()='Cable']");
  }
  get strt_local_pont() {
    return $("input[name='StationingStart']");
  }
  get event_code() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get event_plcment() {
    return $('#mui-component-select-Placement');
  }
  get levent_plcment_sel() {
    return $("//li[normalize-space()='Axis']");
  }
  get event_plcment_sel_dev() {
    return $("//li[normalize-space()='Center']");
  }
  get event_comment() {
    return $("textarea[name='Comment']");
  }

  get addevent_complete_bttn() {
    return $(
      "body div[id='root'] div div div div div div div div div button[type='submit'] span:nth-child(1)"
    );
  }

  //==============================Event Details Check===============================================================

  get event_to_check_details() {
    return $("p[title='maruf test event 1']");
  }
  get event_to_check_details_dev() {
    return $("//p[normalize-space()='EDITEVENT']");
  }
  get event_name_to_match() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)'
    );
  }
  get event_name_match_dev() {
    return $(
      "body div[id='root'] div div div div div div div div div div div div div div div div:nth-child(2) div:nth-child(2) p:nth-child(1)"
    );
  }
  get event_creator_match() {
    return $('div:nth-child(5) div:nth-child(2) p:nth-child(1)');
  }
  get event_cmnt_match() {
    return $('div:nth-child(5) div:nth-child(2) p:nth-child(1)');
  }
  get event_creator_dev_match() {
    $('div:nth-child(6) div:nth-child(2) p:nth-child(1)');
  }

  //==============================Event Update===============================================================
  get event_to_update() {
    return $("p[title='to be updated']");
  }
  get event_to_update_dev() {
    return $("//p[normalize-space()='EDITEVENT']");
  }
  get editevent_btn() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2) > span:nth-child(1)'
    );
  }
  get save_event_edit() {
    return $(
      "body div[id='root'] div div div div div div div div div button[type='submit'] span:nth-child(1)"
    );
  }

  //==============================Project Update===============================================================
  get project_update_btn() {
    return $("//*[name()='path' and contains(@d,'M3 17.25V2')]");
  }
  get project_comment_btn_for_update() {
    return $("textarea[name='Comment']");
  }
  get project_email_btn_for_update() {
    return $("input[name='CustomerInfo.Email']");
  }
  get project_website_btn_for_update() {
    return $("input[name='CustomerInfo.HomePage']");
  }
  get project_update_alert() {
    return $("div[role='alert'] div div p");
  }

  //==============================Event Delete===============================================================
  get event_to_del() {
    return $("(//p[@title='Signal'][normalize-space()='Signal'])");
  }
  get event_to_del_dev() {
    return $("(//p[@title='Curve'][normalize-space()='Curve'])");
  }
  get evnt_del_brn() {
    return $("button[name='DELETE EVENT'] span:nth-child(1)");
  }
  get event_del_confirm() {
    return $("button[aria-label='confirm'] span:nth-child(1)");
  }
  get project_update_savechanges() {
    return $("button[type='submit'] span:nth-child(1)");
  }

  //==============================Measurement Delete======================================================
  get track_to_get_measurement_del() {
    return $(
      "ul[role='group'] div div li[role='treeitem'] div div div p span span span"
    );
  }
  get line_dropdown_to_select_measurement_del() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[1]/div[1]/div[1]//*[name()='svg']"
    );
  }
  get job_dropdown_to_get_measurement_del() {
    return $("(//*[name()='svg'][@focusable='false'])[10]");
  }
  get measurement_to_del() {
    return $(
      'li:nth-child(4) div:nth-child(1) div:nth-child(2) div:nth-child(1) p:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)'
    );
  }
  get measurement_action_menu() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  }
  get measurement_del_red_btn() {
    return $("//*[name()='path' and contains(@d,'M6 19c0 1.')]");
  }
  get measurement_del_confirm() {
    return $("button[aria-label='confirm'] span:nth-child(1)");
  }

  //==============================Project Configuration Checking===========================================
  get project_more_bn() {
    return $("button[aria-label='More']");
  }
  get project_config_btn() {
    return $("//button[contains(text(),'Project Configuration')]");
  }
  get edit_config_btn() {
    return $("//button[contains(text(),'Edit Configuration')]");
  }
  get track_cal_parameter_section() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/ul[1]/a[2]/li[1]'
    );
  }
  get track_cal_parameter_sampling_step() {
    return $("input[name='SamplingStep']");
  }
  get track_cal_parameter_sampling_step_warning() {
    return $("//p[@id=':r5s:-helper-text']");
  }
  get track_cal_parameter_nominal_gauge_warning() {
    return $("//p[@id=':rda:-helper-text']");
  }
  get horizon_versine_mean_to_pick_warning() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(3)'
    );
  }

  get clickonblankspace() {
    return $("(//li[@role='menuitem'])[2]");
  }
  get track_cal_menu() {
    return $("//span[@aria-label='TrackCalculationParameters']");
  }
  get track_cal_parameter_nominal_gauge() {
    return $("input[name='Gauge.NominalGauge']");
  }

  get track_cal_par_gauge_change_1() {
    return $("input[name='Gauge.ChangeBaseLengths.0']");
  }
  get track_cal_par_gauge_change_2() {
    return $("//input[@name='Gauge.ChangeBaseLengths.1']");
  }
  get track_cal_par_gauge_change_3() {
    return $("//input[contains(@name,'Gauge.ChangeBaseLengths.2')]");
  }
  get track_cal_parameter_gauge_chng_1_alert() {
    return $("//p[@id=':rdb:-helper-text']");
  }
  get track_cal_parameter_gauge_chng_2_toast() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)'
    );
  }
  get track_cal_parameter_gauge_chng_3_toast() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > p:nth-child(3)'
    );
  }

  get track_cal_param_view_gauge_change_1() {
    return $("//span[normalize-space()='5 m']");
  }
  get track_cal_param_view_gauge_change_2() {
    return $("//span[normalize-space()='10 m']");
  }
  get track_cal_param_view_gauge_change_3() {
    return $("//span[normalize-space()='15 m']");
  }

  get track_cal_param_view_twist_1() {
    return $("//span[normalize-space()='25 m']");
  }
  get track_cal_param_view_twist_2() {
    return $("//span[normalize-space()='30 m']");
  }
  get track_cal_param_view_twist_3() {
    return $("//span[normalize-space()='35 m']");
  }

  get sampling_step_view() {
    return $("//span[normalize-space()='0.05 m']");
  }

  get nominal_gauge_view() {
    return $("//span[normalize-space()='2 m']");
  }

  get horizontal_versine_value_view() {
    return $("//div[@id='track_calculation']//div[1]//div[1]//span[1]");
  }
  get vertical_versine_value_view() {
    return $(
      '//div[2]//div[1]//div[2]//div[2]//div[2]//div[3]//div[2]//div[2]//div[1]//span[1]'
    );
  }

  get method_horizon_versine_cal() {
    return $(
      '//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[3]/div[2]/div[3]/div[1]/span[1]'
    );
  }

  get method_vertical_versine_cal() {
    return $(
      '//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[3]/div[2]/div[4]/div[1]/span[1]'
    );
  }

  get track_twist_1() {
    return $("input[name='Cant.TwistBaseLengths.0']");
  }
  get track_twist_1_alert() {
    return $('');
  }
  get track_twist_2() {
    return $("//input[@name='Cant.TwistBaseLengths.1']");
  }
  get track_twist_2_alert() {
    return $('');
  }
  get track_twist_3() {
    return $("//input[@name='Cant.TwistBaseLengths.2']");
  }
  get track_twist_3_alert() {
    return $('');
  }
  get cantbase() {
    return $("//input[@name='Cant.CantBase']");
  }
  get cantbase_alert() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > p:nth-child(3)'
    );
  }
  get cantbase_view_assert() {
    return $("//span[normalize-space()='2 m']");
  }
  get track_cal_parameter_hor_versine() {
    return $(
      "input[name='Versines.HorizontalVersinesConfiguration.ChordLengths.0']"
    );
  }
  get track_cal_parameter_horizontal_versine_text() {
    return $("//span[normalize-space()='Horizontal Versine']");
  }

  get track_cal_parameter_hor_versine_toast() {
    return $("form[aria-label='form'] div div div div div div p");
  }
  get track_cal_parameter_ver_versine() {
    return $(
      "input[name='Versines.VerticalVersinesConfiguration.ChordLengths.0']"
    );
  }
  get track_cal_parameter_ver_versine_toast() {
    return $("//p[normalize-space()='Min value is 0']");
  }

  get defect_cal_curvature_threshold() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get moving_ver1stline_cal_50_50() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)'
    );
  }
  //get moving_ver1stline_cal_40_60 () {return $("(//span[@class='MuiTypography-root MuiTypography-body1Regular css-1jpt2kv'][normalize-space()='Moving Chord 40:60'])[1]")}

  get moving_ver2ndline_cal_50_50() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)'
    );
  }

  get versine_calc_horizontal_4060_method() {
    return $(
      "//div[@aria-label='Horizontal versine group']//span[contains(text(),'Moving Chord 40:60')]"
    );
  }
  get versine_calc_vertical_4060_method() {
    return $(
      "//div[@aria-label='Vertical versine group']//span[contains(text(),'Moving Chord 40:60')]"
    );
  }
  get versine_calc_horizontal_free_ratio() {
    return $(
      "//div[@aria-label='Horizontal versine group']//span[contains(text(),'Moving Chord Free Ratio')]"
    );
  }
  get versine_calc_vertical__free_ratio() {
    return $(
      "//div[@aria-label='Vertical versine group']//span[contains(text(),'Moving Chord Free Ratio')]"
    );
  }

  get backBtn_from_project_view() {
    return $(
      "//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeLarge css-1uwa8sg']"
    );
  }
  get projectDeleteBtn() {
    return $("//button[@aria-label='Property Window Delete Button']");
  }
  get project_delete_confirm_modal() {
    return $("//button[@aria-label='confirm']");
  }
  get project_delete_success_alert() {
    return $("//div[@role='alert']");
  }

  // Defect Calculation - Gauge Defect Limits

  get defect_cal_menu() {
    return $("//span[@aria-label='DefectCalculation']");
  }
  get nameOfLimitTable() {
    return $("//input[@name='Defects.LimitTableName']");
  }
  get curvature_threshold_radius() {
    return $("input[name='Defects.CurvatureThreshold']");
  }
  get helper_text_curvature_threshold_radius() {
    return $(
      "//p[normalize-space()='Curvature Threshold (Radius) is required']"
    );
  }
  get consider_curvature() {
    return $("//input[@name='Defects.Gauge.ConsiderCurvature']");
  }
  get consider_sleeper_type() {
    return $("//input[@name='Defects.Gauge.ConsiderSleeperType']");
  }
  get mean_to_peak_chkbox() {
    return $("//span[normalize-space()='Mean to Peak (gm)']");
  }
  get mean_to_peak_base_length_input() {
    return $("//input[@name='Gauge.MeanToPeakBaseLengths.0']");
  }
  get mtp_base_length_helper_text() {
    return $("//p[@id=':rkj:-helper-text']");
  }
  get mtp_base_length_value_view() {
    return $("//span[normalize-space()='Base Length: 100m']");
  }
  get limitParameters_symmetric_limits_chkbox() {
    return $('');
  }
  get GDL_limit_parameter_view_value() {
    return $('');
  }

  //alert limit severity 1

  get als_min_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.0.Lower']"
    );
  }
  get als_min_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.0.Lower']"
    );
  }
  get als_min_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.0.Lower']"
    );
  }
  get als_min_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.0.Lower']"
    );
  }

  get als_max_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.0.Upper']"
    );
  }
  get als_max_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.0.Upper']"
    );
  }
  get als_max_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.0.Upper']"
    );
  }
  get als_max_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.0.Upper']"
    );
  }

  // Intervention limit (IL) Severity 2

  get ils_min_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.1.Lower']"
    );
  }
  get ils_min_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.1.Lower']"
    );
  }
  get ils_min_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.1.Lower']"
    );
  }
  get ils_min_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.1.Lower']"
    );
  }

  get ils_max_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.1.Upper']"
    );
  }
  get ils_max_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.1.Upper']"
    );
  }
  get ils_max_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.1.Upper']"
    );
  }
  get ils_max_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.1.Upper']"
    );
  }

  // Immediate Action Limit (IAL) Severity 3

  get ials_min_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.2.Lower']"
    );
  }
  get ials_min_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.2.Lower']"
    );
  }
  get ials_min_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.2.Lower']"
    );
  }
  get ials_min_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.2.Lower']"
    );
  }

  get ials_max_input1() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.0.LimitsBySeverity.2.Upper']"
    );
  }
  get ials_max_input2() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.1.LimitsBySeverity.2.Upper']"
    );
  }
  get ials_max_input3() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.2.LimitsBySeverity.2.Upper']"
    );
  }
  get ials_max_input4() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.4.LimitsBySpeed.3.LimitsBySeverity.2.Upper']"
    );
  }

  //Defect table limits - Gauge Straight - Alert Limit (AL) Severity 1

  get gauge_straight_als_min_1st() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.5.LimitsBySpeed.0.LimitsBySeverity.0.Lower']"
    );
  }
  get gauge_straight_als_max_1st() {
    return $(
      "//input[@name='Defects.Gauge.GaugeLimits.5.LimitsBySpeed.0.LimitsBySeverity.0.Upper']"
    );
  }
  get gauge_straight_als_min_() {
    return $('');
  }
  get gauge_straight_als_max_1st() {
    return $('');
  }

  get Go_curvature_threshold() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  // Horizontal Alignment -> Project Configuration Page=======================================================
  get D2Alignment() {
    return $("//span[normalize-space()='Alignment D2']");
  }
  get D1Alignment() {
    return $("//span[normalize-space()='Alignment D1']");
  }
  get symmLim_Horizontal_limit() {
    return $(
      '//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[7]/div[1]/div[2]/div[1]/label[1]/span[2]'
    );
  }
  get concurv_Horizontal_limit() {
    return $(
      '//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[7]/div[1]/div[2]/div[1]/label[2]/span[2]'
    );
  }
  get savechanges() {
    return $("//button[normalize-space()='Save changes']");
  }
  get reprocessingmodal() {
    return $("//button[normalize-space()='Yes']");
  }
  get maxminerrortoast() {
    return $("//p[@aria-label='error-text']");
  }

  get alrt_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get alrt_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get alrt_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get invn_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get invn_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get invn_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get immd_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get immd_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get immd_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get alrt_view_min_1() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[14]/div[1]/span[2]'
    );
  }
  get alrt_view_min_2() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[18]/div[1]/span[2]'
    );
  }
  get alrt_view_min_3() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[22]/div[1]/span[2]'
    );
  }
  get alrt_view_min_4() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[15]/div[1]/span[2]'
    );
  }
  get alrt_view_min_5() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[19]/div[1]/span[2]'
    );
  }
  get alrt_view_min_6() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[23]/div[1]/span[2]'
    );
  }
  get alrt_view_min_7() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[16]/div[1]/span[2]'
    );
  }
  get alrt_view_min_8() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[20]/div[1]/span[2]'
    );
  }
  get alrt_view_min_9() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[24]/div[1]/span[2]'
    );
  }

  get alrt_view_max_1() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[14]/div[2]/span[2]'
    );
  }
  get alrt_view_max_2() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[18]/div[2]/span[2]'
    );
  }
  get alrt_view_max_3() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[22]/div[2]/span[2]'
    );
  }
  get alrt_view_max_4() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[15]/div[2]/span[2]'
    );
  }
  get alrt_view_max_5() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[19]/div[2]/span[2]'
    );
  }
  get alrt_view_max_6() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[23]/div[2]/span[2]'
    );
  }
  get alrt_view_max_7() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[16]/div[2]/span[2]'
    );
  }
  get alrt_view_max_8() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[20]/div[2]/span[2]'
    );
  }
  get alrt_view_max_9() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[2]/div[17]/div[2]/div[24]/div[2]/span[2]'
    );
  }

  get invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_alrt_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_alrt_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_alrt_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_str_symm_cur_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_str_symm_cur_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(3) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_curve_alrt_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_alrt_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_alrt_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_invn_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_invn_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_invn_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_immd_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_immd_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizon_curve_immd_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get horizon_curve_alrt_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_curve_alrt_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_alrt_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_curve_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_curve_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_curve_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get horizon_curve_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get horizon_curve_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(17) > div:nth-child(5) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get horizon_versine_mean_to_peak_chkbox() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[7]/div[1]/div[1]/div[1]/label[3]/span[2]'
    );
  }
  get horizon_versine_mean_to_peak_box() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get horizone_versine_symm_lim_chkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)'
    );
  }
  get horizone_versine_consider_curve_chkbox() {
    return $('//div[7]//div[1]//div[2]//div[1]//label[2]//span[2]');
  }

  // Twist Limit Table Boxes-----------

  get twist_tbl_symm_checkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_tbl_concurve_checkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(2) > span:nth-child(2)'
    );
  }
  get auto_cal_according_en13848() {
    return $(
      "//span[contains(text(),'Automatically Calculated According to EN13848 (Dyn')]"
    );
  }
  get auto_cal_according_en13848_view_assetion() {
    return $(
      "//span[contains(text(),'Automatically calculated according to EN13848 (dyn')]"
    );
  }

  get twist_alrt_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_alrt_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_alrt_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_invn_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_invn_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_invn_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_immd_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_immd_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_immd_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_alert_limit_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_alert_limit_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_alert_limit_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_invn_limit_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_invn_limit_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_invn_limit_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_immd_limit_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get twist_curve_immd_limit_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get twist_curve_immd_limit_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  //-------------------------------

  // Twist Limit View Data Boxes---------------------
  get twist_alrt_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_alrt_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_alrt_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(2) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_altr_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_altr_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(3) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_altr_2ndtable_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_altr_2ndtable_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_altr_2ndtable_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_invn_2ndtable_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_invn_2ndtable_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_invn_2ndtable_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_immd_2ndtable_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get twist_consider_curvature_immd_2ndtable_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get twist_consider_curvature_immd_2ndtable_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(5) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  //-------------------------------------

  // Vertical Versine- boxes------------------------
  get ver_versine_symm_chkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_consider_chkbox() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(2) > span:nth-child(2)'
    );
  }
  get d2level() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[8]/div[1]/div[1]/div[1]/label[2]/span[2]'
    );
  }
  get ver_versine_mean_to_peak() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[8]/div[1]/div[1]/div[1]/label[3]/span[2]'
    );
  }
  get ver_versine_mean_2_peak_box() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_mean_2_peak_alert() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(3)'
    );
  }

  get ver_versine_alrt_min_1() {
    return $("//input[@id=':rib:']");
  }
  get ver_versine_alrt_min_2() {
    return $("//input[@id=':rii:']");
  }
  get ver_versine_alrt_min_3() {
    return $("//input[@id=':rki:']");
  }
  get ver_versine_alrt_min_4() {
    return $("//input[@id=':rkp:']");
  }
  // get ver_versine_alrt_min_5 () {return $("")}
  // get ver_versine_alrt_min_6 () {return $("")}

  get ver_versine_alrt_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_invn_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_invn_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_immd_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_immd_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_alrt_view__min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_versine_alrt_view__max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_alrt_view__max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_versine_invn_view__min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_versine_invn_view__max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_invn_view__max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_versine_immd_view__min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_versine_immd_view__max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_versine_immd_view__max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(21) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_versine_alrt_2ndtbl_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_alrt_2ndtbl_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(18) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_alrt_2ndtbl_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(26) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_invn_2ndtbl_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_invn_2ndtbl_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_invn_2ndtbl_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(27) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_immd_2ndtbl_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_versine_immd_2ndtbl_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get ver_versine_immd_2ndtbl_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(9) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(28) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }

  get ver_vers_cons_str_alrt_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_str_alrt_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_alrt_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_str_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_str_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_str_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_str_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_str_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(22) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_alrt_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(10) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(14) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(18) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(22) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(26) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_alrt_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(6) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(10) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(14) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(18) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(22) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_alrt_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(26) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_invn_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(11) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(15) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(19) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(23) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(27) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_invn_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(7) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(11) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(15) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(19) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(23) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_invn_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(27) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_immd_view_min_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(8) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_min_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(12) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_min_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(16) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_min_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(20) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_min_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(24) > div:nth-child(1) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_min_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(28) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  get ver_vers_cons_cur_immd_view_max_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(8) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_max_2() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(12) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_max_3() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(16) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_max_4() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(20) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_max_5() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(24) > div:nth-child(2) > span:nth-child(2)'
    );
  }
  get ver_vers_cons_cur_immd_view_max_6() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(24) > div:nth-child(28) > div:nth-child(2) > span:nth-child(2)'
    );
  }

  //TQI

  get tqi_menu() {
    return $("//span[@aria-label='TrackQualityIndexTqi)']");
  }
  get tqi_length_segment() {
    return $("//input[@name='Tqi.SegmentSize']");
  }
  get discrete_view_text() {
    return $("//span[@aria-label='EvaluationMethodValue']");
  }
  get select_moving_option() {
    return $("//span[normalize-space()='Moving']");
  }
  get select_discrete_option() {
    return $("//span[contains(text(),'Discrete')]");
  }
  get tqi_error_msg() {
    return $("//p[contains(text(),'Value must be greater than 0.05')]");
  }
  get moving_view_text() {
    return $("//span[@aria-label='EvaluationMethodValue']");
  }
  get tqi_save() {
    return $("//button[@aria-label='Custom Submit Button']");
  }
  get tqi_length_segment_view() {
    return $("//span[@aria-label='LengthOfSegmentWindowValue']");
  }
  get no_tqi_calc_select() {
    return $("//span[normalize-space()='No TQI Calculation']");
  }
  get no_tqi_calc_text_view() {
    return $("//p[normalize-space()='No TQI Calculation']");
  }

  get tqi_defects_isolated_select() {
    return $("//span[normalize-space()='Isolated Defects (After EN13848-6)']");
  }
  get tqi_defects_isolated_text_view() {
    return $("//p[normalize-space()='Isolated Defects (After EN13848-6)']");
  }
  get tqi_defects_alert_text_view() {
    return $("//p[normalize-space()='Alert Limit (AL)']");
  }
  get tqi_defects_intervention() {
    return $(
      "//div[@role='radiogroup']//span[contains(text(),'Intervention limit (IL)')]"
    );
  }
  get tqi_defects_intervention_text_view() {
    return $("//p[normalize-space()='Intervention limit (IL)']");
  }
  get tqi_defects_immediate() {
    return $(
      "//div[@role='radiogroup']//span[contains(text(),'Immediate Action Limit (IAL)')]"
    );
  }
  get tqi_defects_immediate_text_view() {
    return $("//p[normalize-space()='Immediate Action Limit (IAL)']");
  }

  get tqi_defects_fiveParam_select() {
    return $("//span[@aria-label='W5ratio']");
  }
  get tqi_defects_fiveParam_text_view() {
    return $("//p[@aria-label='W5Ratio']");
  }
  get tqi_defects_fiveParam_alert_text_view() {
    return $("//p[@aria-label='Alert']");
  }

  get tqi_defects_fiveParam_intervention() {
    return $("//span[@aria-label='InterventionLimit']");
  }
  get tqi_defects_fiveParam_intervention_text_view() {
    return $("//p[@aria-label='Intervention']");
  }

  get tqi_defects_fiveParam_immediate() {
    return $("//span[@aria-label='ImmediateActionLimit']");
  }
  get tqi_defects_fiveParam_immediate_text_view() {
    return $("//p[@aria-label='ImmediateAction']");
  }

  get tqi_utilising_amtrak_select() {
    return $("//span[@aria-label='Amtrak']");
  }
  get tqi_utilising_amtrak_view_text() {
    return $("//p[@aria-label='Amtrak']");
  }
  get tqi_fra_select() {
    return $("//span[@aria-label='Fra']");
  }
  get tqi_fra_text_view() {
    return $("//p[@aria-label='FRA']");
  }

  get tqi_tug_select() {
    return $("//span[@aria-label='Tug']");
  }
  get tqi_tug_view_text() {
    return $("//p[@aria-label='TUG']");
  }

  get tqi_tug_alert_view_text() {
    return $("//p[@aria-label='Alert']");
  }

  get tqi_tug_intervention_select() {
    return $("//span[@aria-label='InterventionLimit']");
  }
  get tqi_tug_intervention_view_text() {
    return $("//p[@aria-label='Intervention']");
  }

  get tqi_tug_immediate_select() {
    return $("//span[@aria-label='ImmediateActionLimit']");
  }
  get tqi_tug_immediate_view_text() {
    return $("//p[@aria-label='ImmediateAction']");
  }

  get combined_deviation_select() {
    return $("//span[@aria-label='Combinedstddev']");
  }
  get combined_gauge_input() {
    return $("//input[@name='Tqi.CombinedStdDevWeights.Gauge']");
  }
  get combined_gauge_input_error_text() {
    return $("//span[contains(text(),'Sum of weight must be 1')]");
  }
  get combined_gauge_input_error_text_negativeValue() {
    return $("//p[contains(text(),'Weight cannot be Negative')]");
  }
  get combined_deviation_view_text() {
    return $("//p[@aria-label='CombinedStdDev']");
  }

  get chinese_tqi_select() {
    return $("//span[@aria-label='Chinese']");
  }
  get chinese_tqi_view_text() {
    return $("//p[@aria-label='Chinese']");
  }

  get jSynthetic_select() {
    return $("//span[@aria-label='Jcoefficient']");
  }
  get jSynthetic_view_text() {
    return $("//p[@aria-label='JCoefficient']");
  }

  get srtThailand_select() {
    return $("//span[@aria-label='Thailand']");
  }
  get srtThailand_view_text() {
    return $("//p[@aria-label='Thailand']");
  }

  get srtThailand_alert_view_text() {
    return $("//p[@aria-label='Alert']");
  }

  get srtThailand_intervention_select() {
    return $("//span[@aria-label='InterventionLimit']");
  }
  get srtThailand_intervention_view_text() {
    return $("//p[@aria-label='Intervention']");
  }

  get srtThailand_immediate_select() {
    return $("//span[@aria-label='ImmediateActionLimit']");
  }
  get srtThailand_immediate_view_text() {
    return $("//p[@aria-label='ImmediateAction']");
  }

  get tqiValue_blank_click() {
    return $("//input[@name='Tqi.Classes.0.ThresholdMin']");
  }

  get maxTQI_input1() {
    return $("//input[contains(@name,'Tqi.Classes.0.ThresholdMax')]");
  }
  get maxTQI_input2() {
    return $("//input[@name='Tqi.Classes.1.ThresholdMax']");
  }
  get maxTQI_input3() {
    return $("//input[@name='Tqi.Classes.2.ThresholdMax']");
  }
  get maxTQI_input4() {
    return $("//input[@name='Tqi.Classes.3.ThresholdMax']");
  }

  get tqc_error_text() {
    return $("//p[@aria-label='error-text']");
  }
  get tqc_error_text2() {
    return $(
      "//p[contains(text(),'Max TQI value should be greater than Min TQI value')]"
    );
  }

  get maxTQI_input1_view() {
    return $("//span[@aria-label='TQIMaxValue0']");
  }
  get maxTQI_input2_view() {
    return $("//span[@aria-label='TQIMaxValue1']");
  }
  get maxTQI_input3_view() {
    return $("//span[@aria-label='TQIMaxValue2']");
  }
  get maxTQI_input4_view() {
    return $("//span[@aria-label='TQIMaxValue3']");
  }

  get minTQI_input1_view() {
    return $("//span[@aria-label='TQIMinValue0']");
  }
  get minTQI_input2_view() {
    return $("//span[@aria-label='TQIMinValue1']");
  }
  get minTQI_input3_view() {
    return $("//span[@aria-label='TQIMinValue2']");
  }
  get minTQI_input4_view() {
    return $("//span[@aria-label='TQIMinValue3']");
  }
  get minTQI_input5_view() {
    return $("//span[@aria-label='TQIMinValue4']");
  }

  //============================LoginPage Testing==========================================================

  //Project Configuration Check======================================================================================
  get project_config_btn() {
    return $("//button[normalize-space()='Project Configuration']");
  }

  get site_footer() {
    return $("//body/div[@id='root']/main/div/div/span[1]");
  }

  //=========================== Measurement ========================================================

  get linesec_for_measurement() {
    return $(
      "div[class='MuiTreeItem-label'] div[class='MuiGrid-root MuiGrid-container css-8r59ew']"
    );
  }
  get track_for_measurement() {
    return $("div[class='css-1b7wotb MuiTreeItem-content']");
  }
  get job_for_measurement() {
    return $("//div[contains(text(),'Job1')]");
  }
  get measurement_button_to_gotopage() {
    return $("//div[contains(text(),'2022-10-26 6:40:51 PM')]");
  }
  get measurement_report_menu_btn() {
    return $(
      "button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge css-1n89sif']"
    );
  }
  get measurement_export_menu() {
    return $("button[aria-label='SystemUpdateIcon']");
  }
  get measurement_report_menu_defecttable_option() {
    return $("//li[normalize-space()='Defects Table']");
  }
  get measurement_report_menu_defectchart_option() {
    return $("//li[normalize-space()='Defects Chart']");
  }
  get measurement_report_menu_event_report_option() {
    return $("//li[normalize-space()='Events']");
  }
  get measurement_report_menu_tqi_report_option() {
    return $("//li[normalize-space()='TQI']");
  }
  get measurement_report_menu_measurement_chart_option() {
    return $("//li[normalize-space()='Measurement Chart']");
  }
  get ascii_menu_option() {
    return $("//li[normalize-space()='ASCII/ CSV']");
  }
  get kml_menu_option() {
    return $("//li[normalize-space()='KML']");
  }

  get line_dropdown_move_slider() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/ul[@role='tree']/li[1]/div[1]/div[1]//*[name()='svg']"
    );
  }
  get track_select_move_slider() {
    return $("//span[contains(text(),'Demo Track')]");
  }
  get job_dropdown_move_slider() {
    return $("(//*[name()='svg'][@focusable='false'])[10]");
  }
  get measurement_page_visit_move_slider() {
    return $(
      "//li[@role='treeitem']//li[1]//div[1]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']"
    );
  }

  get measurement_left_slider() {
    return $("//body//div[@id='root']//div//div//div[3]//div[4]");
  }
  get measurement_right_slider() {
    return $("//body//div[@id='root']//div//div//div[3]//div[5]");
  }
  get measurement_left_slider_dev() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)'
    );
  }
  get measurement_right_slider_dev() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5)'
    );
  }

  get statining_val_elem() {
    return $('.rc-slider-handle.rc-slider-handle-1');
  }

  //========================Manually triggering Measurement through user input==============================

  get measurement_jump() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get measurement_skipstation() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get measurement_jump_submit() {
    return $("button[aria-label='forward icon'][type='submit']");
  }
  get measurement_Stn_ford_btn() {
    return $("button[aria-label='forward icon'][type='button']");
  }
  get jump_to_local_alert() {
    return $("div[role='alert']");
  }

  //========================End to End Testing of a New Projects and its internal components==============================
  get addnewlinesecbtn() {
    return $("//p[normalize-space()='Add Line Section']");
  }
  get linesec_for_trackadd() {
    return $("//span[contains(text(),'Line Section 1')]");
  }
  get linesecmenu_for_trackadd() {
    return $(
      "//li[2]//div[1]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']"
    );
  }
  get addtrackbtn() {
    return $("//body/div[@id='simple-menu']/div[3]/ul[1]/li[1]");
  }
  get trackselect_to_adddesign() {
    return $("//span[contains(text(),'Demo Track 007')]");
  }
  get jobselect__edit() {
    return $("//span[contains(text(),'111')]");
  }
  get job_name_match_e2e() {
    return $(
      "//div[@id='root']//div//div//div//div//div//div//div//div//div//div//div//div//span[contains(text(),'111')]"
    );
  }
  get design_select_details_e2e() {
    return $("//span[contains(text(),'abc')]");
  }
  get linesec_for_details() {
    return $("//span[contains(text(),'Line Section 1')]");
  }
  get track_for_details_e2e() {
    return $("//span[contains(text(),'Demo Track 007')]");
  }
  get track_edit_btn_e2e() {
    return $(
      "//body//div[@id='root']//div//div//div//div//button[2]//span[1]//*[name()='svg']"
    );
  }
  get linesec_for_details_e2e() {
    return $("//span[contains(text(),'Line Section 1')]");
  }
  get lineedit_e2e() {
    return $("//*[name()='path' and contains(@d,'M3 17.25V2')]");
  }
  get project_actionmenu_e2e() {
    return $(
      "//button[@aria-label='view project details']//span[1]//*[name()='svg']"
    );
  }
  get project_span_e2e() {
    return $("div[id='root'] div div div div div h3");
  }
  get project_name_e2e() {
    return $(
      "body div[id='root'] div div div div div div div div div div:nth-child(1) div:nth-child(2) div:nth-child(2) span:nth-child(1)"
    );
  }
  get project_edit_e2e() {
    return $(
      "//body//div[@id='root']//div//div//div//div//button[2]//span[1]//*[name()='svg']"
    );
  }

  get speed_select_e2e() {
    return $("//span[contains(text(),'Speed')]");
  }
  get speed_cmnt_match_e2e() {
    return $(
      "body div[id='root'] div div div div div div div div div:nth-child(2) div:nth-child(2) div:nth-child(1) span:nth-child(1)"
    );
  }
  get speed_edt_e2e() {
    return $("//*[name()='path' and contains(@d,'M3 17.25V2')]");
  }
  get speed_commentbox_e2e() {
    return $("textarea[placeholder='Write your comment']");
  }
  get add_sped_e2e() {
    return $("//span[normalize-space()='Add Speed']");
  }
  get speed_start_point_e2e() {
    return $("input[placeholder='Start point (m)']");
  }
  get speed_end_point_e2e() {
    return $("input[placeholder='End point (m)']");
  }
  get speed_speed_km_e2e() {
    return $("input[placeholder='Speed (km)']");
  }
  get speed_edt_submit_e2e() {
    return $("button[type='submit'] span:nth-child(1)");
  }
  get speed_edt_for_del_e2e() {
    return $(
      "//body/div[@id='root']/div/div/div/div/div/div/div/div/div/button//*[name()='svg']"
    );
  }
  get speed_info_del_e2e() {
    return $("//*[name()='path' and contains(@d,'M6 19c0 1.')]");
  }
  get speed_del_submit_e2e() {
    return $("button[type='submit'] span:nth-child(1)");
  }

  get project_more_btn_e2e() {
    return $("button[aria-label='More'] span:nth-child(1)");
  }
  get project_export_btn_e2e() {
    return $(
      "body div[id='settings-menu'] div:nth-child(3) ul:nth-child(1) li:nth-child(1)"
    );
  }
  get export_project_btn_e2e() {
    return $("button[type='submit'] span:nth-child(1)");
  }
  get export_done_alert() {
    return $("div[role='alert'] div div p");
  }
  get export_option_choose_e2e() {
    return $(
      "//span[normalize-space()='Project structure, design and measurements']"
    );
  }
  get select_all_measurement_e2e() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)'
    );
  }
  get removeall_e2e() {
    return $(
      "body div[id='root'] div div div div div button[type='button'] span:nth-child(1)"
    );
  }
  get cancel_export_btn_e2e() {
    return $(
      'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1)'
    );
  }
  get confrim_cancel_export_btn_e2e() {
    return $("//span[normalize-space()='Confirm']");
  }
  get project_name_section_e2e() {
    return $("div[id='root'] div div div div div h3");
  }

  get project_config_btn_e2e() {
    return $("//li[normalize-space()='Project Configuration']");
  }
  get project_edt_condif_btn_e2e() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)'
    );
  }

  //=========== GLOBAL CONFIGURATION ========================================================================================
  get tcp_sampling_step() {
    return $("//span[@aria-label='SamplingStepValue']");
  }
  get tcp_nominal_gauge() {
    return $("//span[@aria-label='NominalGaugeValue']");
  }
  get tcp_gauge_change1() {
    return $("//span[@aria-label='GaugeChange01Value']");
  }
  get tcp_twist_value1() {
    return $("//span[@aria-label='Twist01Value']");
  }
  get tcp_cant_base_value1() {
    return $("//span[@aria-label='CantBaseValue']");
  }

  get track_cal_param_section() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > a:nth-child(2) > li:nth-child(1) > div:nth-child(1) > span:nth-child(2)'
    );
  }

  //==========Versine Calculation===================================
  get tcp_Horizontal_versine() {
    return $("//span[@aria-label='HorizontalVersineValue']");
  }
  get tcp_Vertical_Versine() {
    return $("//span[@aria-label='VerticalVersineValue']");
  }
  get tcp_method_of_horizontal_versine() {
    return $("//span[@aria-label='CalculationToHorizontalVersineValue']");
  }
  get tcp_method_of_vertical_versine() {
    return $("//span[@aria-label='CalculationToVerticalVersineValue']");
  }

  //==========SPEED ZONE CUSTOMIZATION==================
  get local_Speed_zone_A() {
    return $("//span[normalize-space()='A: 0.0 - 80.0']");
  }
  get local_Speed_zone_B() {
    return $("//span[normalize-space()='B: 80.0 - 120.0']");
  }
  get local_Speed_zone_C() {
    return $("//span[normalize-space()='C: 120.0 - 160.0']");
  }
  get local_Speed_zone_D() {
    return $("//span[normalize-space()='D: 160.0 - 230.0']");
  }
  get local_Speed_zone_E() {
    return $("//span[normalize-space()='E: 230.0 - 300.0']");
  }
  get local_Speed_zone_F() {
    return $("//span[normalize-space()='F: 300.0 - 360.0']");
  }

  //=================Speed dependent limits==============
  get local_Name_of_Limits_Table() {
    return $("//span[@aria-label='NameOfLimitsTableValue']");
  }
  get local_Curvature_Threshold() {
    return $("//span[@aria-label='CurvatureThresholdRadius)Value']");
  }

  //=================GAUGE DEFECT LIMITS==================

  get local_Defect_Calculation() {
    return $("//span[normalize-space()='Nominal Gauge to Peak Value (G)']");
  }
  get local_Limit_Parameter() {
    return $("//span[normalize-space()='No Parameter']");
  }

  //==========Limit table-- Speed zone==============

  get limitTable_Speed_zone_A() {
    return $("//span[@aria-label='SpeedZoneGaugeA']");
  }
  get limitTable_Speed_zone_B() {
    return $("//span[@aria-label='SpeedZoneGaugeB']");
  }
  get limitTable_Speed_zone_C() {
    return $("//span[@aria-label='SpeedZoneGaugeC']");
  }
  get limitTable_Speed_zone_D() {
    return $("//span[@aria-label='SpeedZoneGaugeD']");
  }
  get limitTable_Speed_zone_E() {
    return $("//span[@aria-label='SpeedZoneGaugeE']");
  }
  get limitTable_Speed_zone_F() {
    return $("//span[@aria-label='SpeedZoneGaugeF']");
  }

  //=================Limit table(s) Alert limit Min severity 1 =============
  get limitTable_min_1() {
    return $("//span[@aria-label='MinValueALGauge0']");
  }
  get limitTable_min_2() {
    return $("//span[@aria-label='MinValueALGauge1']");
  }
  get limitTable_min_3() {
    return $("//span[@aria-label='MinValueALGauge2']");
  }
  get limitTable_min_4() {
    return $("//span[@aria-label='MinValueALGauge3']");
  }
  get limitTable_min_5() {
    return $("//span[@aria-label='MinValueALGauge4']");
  }
  get limitTable_min_6() {
    return $("//span[@aria-label='MinValueALGauge5']");
  }

  //=================Limit table(s) Alert limit Max severity 1 =============
  get limitTable_max_1() {
    return $("//span[@aria-label='MaxValueALGauge0']");
  }
  get limitTable_max_2() {
    return $("//span[@aria-label='MaxValueALGauge1']");
  }
  get limitTable_max_3() {
    return $("//span[@aria-label='MaxValueALGauge2']");
  }
  get limitTable_max_4() {
    return $("//span[@aria-label='MaxValueALGauge3']");
  }
  get limitTable_max_5() {
    return $("//span[@aria-label='MaxValueALGauge4']");
  }
  get limitTable_max_6() {
    return $("//span[@aria-label='MaxValueALGauge5']");
  }

  //====================Intervention Limit Min severity 2 ============
  get IL_min_1() {
    return $("//span[@aria-label='MinValueILGauge0']");
  }
  get IL_min_2() {
    return $("//span[@aria-label='MinValueILGauge1']");
  }
  get IL_min_3() {
    return $("//span[@aria-label='MinValueILGauge2']");
  }
  get IL_min_4() {
    return $("//span[@aria-label='MinValueILGauge3']");
  }
  get IL_min_5() {
    return $("//span[@aria-label='MinValueILGauge4']");
  }
  get IL_min_6() {
    return $("//span[@aria-label='MinValueILGauge5']");
  }

  //====================Intervention Limit Max severity 2 ============
  get IL_max_1() {
    return $("//span[@aria-label='MaxValueILGauge0']");
  }
  get IL_max_2() {
    return $("//span[@aria-label='MaxValueILGauge1']");
  }
  get IL_max_3() {
    return $("//span[@aria-label='MaxValueILGauge2']");
  }
  get IL_max_4() {
    return $("//span[@aria-label='MaxValueILGauge3']");
  }
  get IL_max_5() {
    return $("//span[@aria-label='MaxValueILGauge4']");
  }
  get IL_max_6() {
    return $("//span[@aria-label='MaxValueILGauge5']");
  }

  //=================================Immediate Action Min severity 3 ==============
  get ial_min_1() {
    return $("//span[@aria-label='MinValueIALGauge0']");
  }
  get ial_min_2() {
    return $("//span[@aria-label='MinValueIALGauge1']");
  }
  get ial_min_3() {
    return $("//span[@aria-label='MinValueIALGauge2']");
  }
  get ial_min_4() {
    return $("//span[@aria-label='MinValueIALGauge3']");
  }
  get ial_min_5() {
    return $("//span[@aria-label='MinValueIALGauge4']");
  }
  get ial_min_6() {
    return $("//span[@aria-label='MinValueIALGauge5']");
  }

  //=================================Immediate Action Max severity 3 ==============
  get ial_max_1() {
    return $("//span[@aria-label='MaxValueIALGauge0']");
  }
  get ial_max_2() {
    return $("//span[@aria-label='MaxValueIALGauge1']");
  }
  get ial_max_3() {
    return $("//span[@aria-label='MaxValueIALGauge2']");
  }
  get ial_max_4() {
    return $("//span[@aria-label='MaxValueIALGauge3']");
  }
  get ial_max_5() {
    return $("//span[@aria-label='MaxValueIALGauge4']");
  }
  get ial_max_6() {
    return $("//span[@aria-label='MaxValueIALGauge5']");
  }

  //===================================CANT DEFECT LIMITS========================================
  get CDL_Defect_Calculation() {
    return $("//span[normalize-space()='Base Length [ft Int]: 65.62']");
  }
  get CDL_Limit_Param() {
    return $("//span[@aria-label='CantDefectLimitsSymmetricLimits']");
  }

  //==========Cant Limit Table SPEED ZONE CUSTOMIZATION==================
  get Cant_limitTable_Speed_zone_A() {
    return $("//span[@aria-label='SpeedZoneCantA']");
  }
  get Cant_limitTable_Speed_zone_B() {
    return $("//span[@aria-label='SpeedZoneCantB']");
  }
  get Cant_limitTable_Speed_zone_C() {
    return $("//span[@aria-label='SpeedZoneCantC']");
  }
  get Cant_limitTable_Speed_zone_D() {
    return $("//span[@aria-label='SpeedZoneCantD']");
  }
  get Cant_limitTable_Speed_zone_E() {
    return $("//span[@aria-label='SpeedZoneCantE']");
  }
  get Cant_limitTable_Speed_zone_F() {
    return $("//span[@aria-label='SpeedZoneCantF']");
  }

  //=================Cant Limit table(s) Alert limit Min severity 1 =============
  get Cant_limitTable_min_1() {
    return $("//span[@aria-label='MinValueALCant0']");
  }
  get Cant_limitTable_min_2() {
    return $("//span[@aria-label='MinValueALCant1']");
  }
  get Cant_limitTable_min_3() {
    return $("//span[@aria-label='MinValueALCant2']");
  }
  get Cant_limitTable_min_4() {
    return $("//span[@aria-label='MinValueALCant3']");
  }
  get Cant_limitTable_min_5() {
    return $("//span[@aria-label='MinValueALCant4']");
  }
  get Cant_limitTable_min_6() {
    return $("//span[@aria-label='MinValueALCant5']");
  }

  //=================Cant Limit table(s) Alert limit Max severity 1 =============
  get Cant_limitTable_max_1() {
    return $("//span[@aria-label='MaxValueALCant0']");
  }
  get Cant_limitTable_max_2() {
    return $("//span[@aria-label='MaxValueALCant1']");
  }
  get Cant_limitTable_max_3() {
    return $("//span[@aria-label='MaxValueALCant2']");
  }
  get Cant_limitTable_max_4() {
    return $("//span[@aria-label='MaxValueALCant3']");
  }
  get Cant_limitTable_max_5() {
    return $("//span[@aria-label='MaxValueALCant4']");
  }
  get Cant_limitTable_max_6() {
    return $("//span[@aria-label='MaxValueALCant5']");
  }

  //====================Cant Intervention Limit Min severity 2 ============
  get Cant_ils_min_1() {
    return $("//span[@aria-label='MinValueILCant0']");
  }
  get Cant_ils_min_2() {
    return $("//span[@aria-label='MinValueILCant1']");
  }
  get Cant_ils_min_3() {
    return $("//span[@aria-label='MinValueILCant2']");
  }
  get Cant_ils_min_4() {
    return $("//span[@aria-label='MinValueILCant3']");
  }
  get Cant_ils_min_5() {
    return $("//span[@aria-label='MinValueILCant4']");
  }
  get Cant_ils_min_6() {
    return $("//span[@aria-label='MinValueILCant5']");
  }

  //====================Cant Intervention Limit Max severity 2 ============
  get Cant_ils_max_1() {
    return $("//span[@aria-label='MaxValueILCant0']");
  }
  get Cant_ils_max_2() {
    return $("//span[@aria-label='MaxValueILCant1']");
  }
  get Cant_ils_max_3() {
    return $("//span[@aria-label='MaxValueILCant2']");
  }
  get Cant_ils_max_4() {
    return $("//span[@aria-label='MaxValueILCant3']");
  }
  get Cant_ils_max_5() {
    return $("//span[@aria-label='MaxValueILCant4']");
  }
  get Cant_ils_max_6() {
    return $("//span[@aria-label='MaxValueILCant5']");
  }

  //=================================Cant Immediate Action Min severity 3 ==============
  get Cant_ial_min_1() {
    return $("//span[@aria-label='MinValueIALCant0']");
  }
  get Cant_ial_min_2() {
    return $("//span[@aria-label='MinValueIALCant1']");
  }
  get Cant_ial_min_3() {
    return $("//span[@aria-label='MinValueIALCant2']");
  }
  get Cant_ial_min_4() {
    return $("//span[@aria-label='MinValueIALCant3']");
  }
  get Cant_ial_min_5() {
    return $("//span[@aria-label='MinValueIALCant4']");
  }
  get Cant_ial_min_6() {
    return $("//span[@aria-label='MinValueIALCant5']");
  }

  //=================================Cant Immediate Action Max severity 3 ==============
  get Cant_ial_max_1() {
    return $("//span[@aria-label='MaxValueIALCant0']");
  }
  get Cant_ial_max_2() {
    return $("//span[@aria-label='MaxValueIALCant1']");
  }
  get Cant_ial_max_3() {
    return $("//span[@aria-label='MaxValueIALCant2']");
  }
  get Cant_ial_max_4() {
    return $("//span[@aria-label='MaxValueIALCant3']");
  }
  get Cant_ial_max_5() {
    return $("//span[@aria-label='MaxValueIALCant4']");
  }
  get Cant_ial_max_6() {
    return $("//span[@aria-label='MaxValueIALCant5']");
  }

  //========================TWIST LIMITS======================================

  get twist_defect_calculation_text() {
    return $("//span[normalize-space()='Static']");
  }
  get twist_limit_parameters_text() {
    return $("//span[@aria-label='TwistLimitsSymmetricLimits']");
  }

  //==========Twist SPEED ZONE CUSTOMIZATION==================
  get twist_limit_Speed_zone_A() {
    return $("//span[@aria-label='SpeedZoneTwistA']");
  }
  get twist_limit_Speed_zone_B() {
    return $("//span[@aria-label='SpeedZoneTwistB']");
  }
  get twist_limit_Speed_zone_C() {
    return $("//span[@aria-label='SpeedZoneTwistC']");
  }
  get twist_limit_Speed_zone_D() {
    return $("//span[@aria-label='SpeedZoneTwistD']");
  }
  get twist_limit_Speed_zone_E() {
    return $("//span[@aria-label='SpeedZoneTwistE']");
  }
  get twist_limit_Speed_zone_F() {
    return $("//span[@aria-label='SpeedZoneTwistF']");
  }

  //=================Twist Limit table(s) Alert limit Min severity 1 =============
  get twist_limit_min_1() {
    return $("//span[@aria-label='MinValueALTwist0']");
  }
  get twist_limit_min_2() {
    return $("//span[@aria-label='MinValueALTwist1']");
  }
  get twist_limit_min_3() {
    return $("//span[@aria-label='MinValueALTwist2']");
  }
  get twist_limit_min_4() {
    return $("//span[@aria-label='MinValueALTwist3']");
  }
  get twist_limit_min_5() {
    return $("//span[@aria-label='MinValueALTwist4']");
  }
  get twist_limit_min_6() {
    return $("//span[@aria-label='MinValueALTwist5']");
  }

  //=================Twist Limit table(s) Alert limit Max severity 1 =============
  get twist_limit_max_1() {
    return $("//span[@aria-label='MaxValueALTwist0']");
  }
  get twist_limit_max_2() {
    return $("//span[@aria-label='MaxValueALTwist1']");
  }
  get twist_limit_max_3() {
    return $("//span[@aria-label='MaxValueALTwist2']");
  }
  get twist_limit_max_4() {
    return $("//span[@aria-label='MaxValueALTwist3']");
  }
  get twist_limit_max_5() {
    return $("//span[@aria-label='MaxValueALTwist4']");
  }
  get twist_limit_max_6() {
    return $("//span[@aria-label='MaxValueALTwist5']");
  }

  //====================Twist Intervention Limit Min severity 2 ============
  get twistLimit_ils_min_1() {
    return $("//span[@aria-label='MinValueILTwist0']");
  }
  get twistLimit_ils_min_2() {
    return $("//span[@aria-label='MinValueILTwist1']");
  }
  get twistLimit_ils_min_3() {
    return $("//span[@aria-label='MinValueILTwist2']");
  }
  get twistLimit_ils_min_4() {
    return $("//span[@aria-label='MinValueILTwist3']");
  }
  get twistLimit_ils_min_5() {
    return $("//span[@aria-label='MinValueILTwist4']");
  }
  get twistLimit_ils_min_6() {
    return $("//span[@aria-label='MinValueILTwist5']");
  }

  //====================Twist Intervention Limit Max severity 2 ============
  get twistLimit_ils_max_1() {
    return $("//span[@aria-label='MaxValueILTwist0']");
  }
  get twistLimit_ils_max_2() {
    return $("//span[@aria-label='MaxValueILTwist1']");
  }
  get twistLimit_ils_max_3() {
    return $("//span[@aria-label='MaxValueILTwist2']");
  }
  get twistLimit_ils_max_4() {
    return $("//span[@aria-label='MaxValueILTwist3']");
  }
  get twistLimit_ils_max_5() {
    return $("//span[@aria-label='MaxValueILTwist4']");
  }
  get twistLimit_ils_max_6() {
    return $("//span[@aria-label='MaxValueILTwist5']");
  }

  //=================================Twist Immediate Action Min severity 3 ==============
  get twistLimit_ial_min_1() {
    return $("//span[@aria-label='MinValueIALTwist0']");
  }
  get twistLimit_ial_min_2() {
    return $("//span[@aria-label='MinValueIALTwist1']");
  }
  get twistLimit_ial_min_3() {
    return $("//span[@aria-label='MinValueIALTwist2']");
  }
  get twistLimit_ial_min_4() {
    return $("//span[@aria-label='MinValueIALTwist3']");
  }
  get twistLimit_ial_min_5() {
    return $("//span[@aria-label='MinValueIALTwist4']");
  }
  get twistLimit_ial_min_6() {
    return $("//span[@aria-label='MinValueIALTwist5']");
  }

  //=================================Twist Immediate Action Max severity 3 ==============
  get twistLimit_ial_max_1() {
    return $("//span[@aria-label='MaxValueIALTwist0']");
  }
  get twistLimit_ial_max_2() {
    return $("//span[@aria-label='MaxValueIALTwist1']");
  }
  get twistLimit_ial_max_3() {
    return $("//span[@aria-label='MaxValueIALTwist2']");
  }
  get twistLimit_ial_max_4() {
    return $("//span[@aria-label='MaxValueIALTwist3']");
  }
  get twistLimit_ial_max_5() {
    return $("//span[@aria-label='MaxValueIALTwist4']");
  }
  get twistLimit_ial_max_6() {
    return $("//span[@aria-label='MaxValueIALTwist5']");
  }

  //=====================================HORIZONTAL ALIGNMENT LIMITS=====================================

  get horizontal_defect_calculation_view_value() {
    return $("//span[normalize-space()='Alignment D1']");
  }
  get horizontal_limit_parameters_view_value() {
    return $("//span[@aria-label='HorizontalAlignmentLimitsSymmetricLimits']");
  }
  get horizontal_defect_calc_option2() {
    return $("//span[normalize-space()='Alignment D2']");
  }
  get vertical_defect_calc_option2() {
    return $("//span[normalize-space()='Longitudinal Level D2']");
  }

  get horizontal_defect_calc_alignmentD2_table1() {
    return $("//input[@id=':rcg:']");
  }
  get horizontal_defect_calc_alignmentD2_table2() {
    return $("//input[@id=':rcn:']");
  }
  get horizontal_defect_calc_alignmentD2_table3() {
    return $("//input[@id=':rcu:']");
  }

  get vertical_defect_calc_alignmentD2_table1() {
    return $("//input[@id=':rf4:']");
  }
  get vertical_defect_calc_alignmentD2_table2() {
    return $("//input[@id=':rfb:']");
  }
  get vertical_defect_calc_alignmentD2_table3() {
    return $("//input[@id=':rfi:']");
  }

  // get horizontal_defect_calc_alignmentD2_table1_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneHorizontalAlignmentD']")}
  // get horizontal_defect_calc_alignmentD2_table2_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneHorizontalAlignmentE']")}
  // get horizontal_defect_calc_alignmentD2_table3_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneHorizontalAlignmentF']")}

  // get vertical_defect_calc_alignmentD2_table1_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneVerticalAlignmentD']")}
  // get vertical_defect_calc_alignmentD2_table2_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneVerticalAlignmentE']")}
  // get vertical_defect_calc_alignmentD2_table3_speedZone_view_value(){return $("//span[@aria-label='SpeedZoneVerticalAlignmentF']")}

  //==========Horizontal SPEED ZONE CUSTOMIZATION==================
  get horizontalLimit_Speed_zone_A() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentA']");
  }
  get horizontalLimit_Speed_zone_B() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentB']");
  }
  get horizontalLimit_Speed_zone_C() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentC']");
  }
  get horizontalLimit_Speed_zone_D() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentD']");
  }
  get horizontalLimit_Speed_zone_E() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentE']");
  }
  get horizontalLimit_Speed_zone_F() {
    return $("//span[@aria-label='SpeedZoneHorizontalAlignmentF']");
  }

  //=================Horizontal Limit table(s) Alert limit Min severity 1 =============
  get horizontalLimit_min_1() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment0']");
  }
  get horizontalLimit_min_2() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment1']");
  }
  get horizontalLimit_min_3() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment2']");
  }
  get horizontalLimit_min_4() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment3']");
  }
  get horizontalLimit_min_5() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment4']");
  }
  get horizontalLimit_min_6() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment5']");
  }

  //for alignment D2

  get horizontalLimitD_min() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment0']");
  }
  get horizontalLimitE_min() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment1']");
  }
  get horizontalLimitF_min() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment2']");
  }

  get horizontalLimitD_max() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment0']");
  }
  get horizontalLimitE_max() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment1']");
  }
  get horizontalLimitF_max() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment2']");
  }

  get horizontalLimitD_ILS_min() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment0']");
  }
  get horizontalLimitE_ILS_min() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment1']");
  }
  get horizontalLimitF_ILS_min() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment2']");
  }

  get horizontalLimitD_ILS_max() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment0']");
  }
  get horizontalLimitE_ILS_max() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment1']");
  }
  get horizontalLimitF_ILS_max() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment2']");
  }

  get horizontalLimitD_IAL_min() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment0']");
  }
  get horizontalLimitE_IAL_min() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment1']");
  }
  get horizontalLimitF_IAL_min() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment2']");
  }

  get horizontalLimitD_IAL_max() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment0']");
  }
  get horizontalLimitE_IAL_max() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment1']");
  }
  get horizontalLimitF_IAL_max() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment2']");
  }

  //=================Horizontal Limit table(s) Alert limit Max severity 1 =============
  get horizontalLimit_max_1() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment0']");
  }
  get horizontalLimit_max_2() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment1']");
  }
  get horizontalLimit_max_3() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment2']");
  }
  get horizontalLimit_max_4() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment3']");
  }
  get horizontalLimit_max_5() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment4']");
  }
  get horizontalLimit_max_6() {
    return $("//span[@aria-label='MaxValueALHorizontalAlignment5']");
  }

  //====================Horizontal Intervention Limit Min severity 2 ============
  get horizontalLimit_ils_min_1() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment0']");
  }
  get horizontalLimit_ils_min_2() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment1']");
  }
  get horizontalLimit_ils_min_3() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment2']");
  }
  get horizontalLimit_ils_min_4() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment3']");
  }
  get horizontalLimit_ils_min_5() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment4']");
  }
  get horizontalLimit_ils_min_6() {
    return $("//span[@aria-label='MinValueILHorizontalAlignment5']");
  }

  //====================Horizontal Intervention Limit Max severity 2 ============
  get horizontalLimit_ils_max_1() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment0']");
  }
  get horizontalLimit_ils_max_2() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment1']");
  }
  get horizontalLimit_ils_max_3() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment2']");
  }
  get horizontalLimit_ils_max_4() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment3']");
  }
  get horizontalLimit_ils_max_5() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment4']");
  }
  get horizontalLimit_ils_max_6() {
    return $("//span[@aria-label='MaxValueILHorizontalAlignment5']");
  }

  //=================================Horizontal Immediate Action Min severity 3 ==============
  get horizontalLimit_ial_min_1() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment0']");
  }
  get horizontalLimit_ial_min_2() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment1']");
  }
  get horizontalLimit_ial_min_3() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment2']");
  }
  get horizontalLimit_ial_min_4() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment3']");
  }
  get horizontalLimit_ial_min_5() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment4']");
  }
  get horizontalLimit_ial_min_6() {
    return $("//span[@aria-label='MinValueIALHorizontalAlignment5']");
  }

  //=================================Horizontal Immediate Action Max severity 3 ==============
  get horizontalLimit_ial_max_1() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment0']");
  }
  get horizontalLimit_ial_max_2() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment1']");
  }
  get horizontalLimit_ial_max_3() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment2']");
  }
  get horizontalLimit_ial_max_4() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment3']");
  }
  get horizontalLimit_ial_max_5() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment4']");
  }
  get horizontalLimit_ial_max_6() {
    return $("//span[@aria-label='MaxValueIALHorizontalAlignment5']");
  }

  //===================================VERTICAL ALIGNMENT LIMITS==================================================

  get vertical_defect_calculation() {
    return $("//span[normalize-space()='Longitudinal Level D1']");
  }
  get vertical_limit_parameters() {
    return $("//span[@aria-label='VerticalAlignmentLimitsSymmetricLimits']");
  }
  get verticalD2_defect_calculation() {
    return $("//span[normalize-space()='Longitudinal Level D2']");
  }

  //==========VERTICAL SPEED ZONE CUSTOMIZATION==================
  get verticalLimit_Speed_zone_A() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentA']");
  }
  get verticalLimit_Speed_zone_B() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentB']");
  }
  get verticalLimit_Speed_zone_C() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentC']");
  }
  get verticalLimit_Speed_zone_D() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentD']");
  }
  get verticalLimit_Speed_zone_E() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentE']");
  }
  get verticalLimit_Speed_zone_F() {
    return $("//span[@aria-label='SpeedZoneVerticalAlignmentF']");
  }

  //=================Vertical Limit table(s) Alert limit Min severity 1 =============
  get al_vertical_min_1() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment0']");
  }
  get al_vertical_min_2() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment1']");
  }
  get al_vertical_min_3() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment2']");
  }
  get al_vertical_min_4() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment3']");
  }
  get al_vertical_min_5() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment4']");
  }
  get al_vertical_min_6() {
    return $("//span[@aria-label='MinValueALHorizontalAlignment5']");
  }

  //=================Vertical Limit table(s) Alert limit Max severity 1 =============
  get al_vertical_max_1() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment0']");
  }
  get al_vertical_max_2() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment1']");
  }
  get al_vertical_max_3() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment2']");
  }
  get al_vertical_max_4() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment3']");
  }
  get al_vertical_max_5() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment4']");
  }
  get al_vertical_max_6() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment5']");
  }

  //====================Vertical Intervention Limit Min severity 2 ============
  get sev_vertical_min_1() {
    return $("//span[@aria-label='MinValueILVerticalAlignment0']");
  }
  get sev_vertical_min_2() {
    return $("//span[@aria-label='MinValueILVerticalAlignment1']");
  }
  get sev_vertical_min_3() {
    return $("//span[@aria-label='MinValueILVerticalAlignment2']");
  }
  get sev_vertical_min_4() {
    return $("//span[@aria-label='MinValueILVerticalAlignment3']");
  }
  get sev_vertical_min_5() {
    return $("//span[@aria-label='MinValueILVerticalAlignment4']");
  }
  get sev_vertical_min_6() {
    return $("//span[@aria-label='MinValueILVerticalAlignment5']");
  }

  //====================vertical Intervention Limit Max severity 2 ============
  get sev_vertical_max_1() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment0']");
  }
  get sev_vertical_max_2() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment1']");
  }
  get sev_vertical_max_3() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment2']");
  }
  get sev_vertical_max_4() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment3']");
  }
  get sev_vertical_max_5() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment4']");
  }
  get sev_vertical_max_6() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment5']");
  }

  //=================================Vertical Immediate Action Limit Min severity 3 ==============
  get ial_vertical_min_1() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment0']");
  }
  get ial_vertical_min_2() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment1']");
  }
  get ial_vertical_min_3() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment2']");
  }
  get ial_vertical_min_4() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment3']");
  }
  get ial_vertical_min_5() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment4']");
  }
  get ial_vertical_min_6() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment5']");
  }

  //=================================Vertical Immediate Action Limit Max severity 3 ==============
  get ial_vertical_max_1() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment0']");
  }
  get ial_vertical_max_2() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment1']");
  }
  get ial_vertical_max_3() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment2']");
  }
  get ial_vertical_max_4() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment3']");
  }
  get ial_vertical_max_5() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment4']");
  }
  get ial_vertical_max_6() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment5']");
  }

  get save_changes() {
    return $("//button[normalize-space()='Save changes']");
  }

  //For second option
  get verticalLimitD_min() {
    return $("//span[@aria-label='MinValueALVerticalAlignment0']");
  }
  get verticalLimitE_min() {
    return $("//span[@aria-label='MinValueALVerticalAlignment1']");
  }
  get verticalLimitF_min() {
    return $("//span[@aria-label='MinValueALVerticalAlignment2']");
  }

  get verticalLimitD_max() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment0']");
  }
  get verticalLimitE_max() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment1']");
  }
  get verticalLimitF_max() {
    return $("//span[@aria-label='MaxValueALVerticalAlignment2']");
  }

  get verticalLimitD_ILS_min() {
    return $("//span[@aria-label='MinValueILVerticalAlignment0']");
  }
  get verticalLimitE_ILS_min() {
    return $("//span[@aria-label='MinValueILVerticalAlignment1']");
  }
  get verticalLimitF_ILS_min() {
    return $("//span[@aria-label='MinValueILVerticalAlignment2']");
  }

  get verticalLimitD_ILS_max() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment0']");
  }
  get verticalLimitE_ILS_max() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment1']");
  }
  get verticalLimitF_ILS_max() {
    return $("//span[@aria-label='MaxValueILVerticalAlignment2']");
  }

  get verticalLimitD_IAL_min() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment0']");
  }
  get verticalLimitE_IAL_min() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment1']");
  }
  get verticalLimitF_IAL_min() {
    return $("//span[@aria-label='MinValueIALVerticalAlignment2']");
  }

  get verticalLimitD_IAL_max() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment0']");
  }
  get verticalLimitE_IAL_max() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment1']");
  }
  get verticalLimitF_IAL_max() {
    return $("//span[@aria-label='MaxValueIALVerticalAlignment2']");
  }

  //================================Track Quality Index (TQI)===========================

  get tqi_evaluation_method() {
    return $("//span[@aria-label='EvaluationMethodValue']");
  }
  get tqi_length_of_segment() {
    return $("//span[@aria-label='LengthOfSegmentWindowValue']");
  }

  get TQIs_Utilising_Different_Approach() {
    return $("//p[@aria-label='TUG']");
  }
  get Severity_Level() {
    return $("//p[@aria-label='Intervention']");
  }

  //MIN TQI
  get tqi_min_a() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(3) > span:nth-child(2)'
    );
  }
  get tqi_min_b() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(7) > span:nth-child(2)'
    );
  }
  get tqi_min_c() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(11) > span:nth-child(2)'
    );
  }
  get tqi_min_d() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(15) > span:nth-child(2)'
    );
  }
  get tqi_min_e() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(19) > span:nth-child(2)'
    );
  }

  //MAX TQI
  get tqi_max_a() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(4) > span:nth-child(2)'
    );
  }
  get tqi_max_b() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(8) > span:nth-child(2)'
    );
  }
  get tqi_max_c() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(12) > span:nth-child(2)'
    );
  }
  get tqi_max_d() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(6) > div:nth-child(16) > span:nth-child(2)'
    );
  }

  //Reprod Save Change

  get repod_No_Button() {
    return $("//button[normalize-space()='No']");
  }
  get repod_YES_Button() {
    return $("//button[normalize-space()='Yes']");
  }

  //Add track Range
  get start_Range() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[6]/div[1]/div[1]/input[1]'
    );
  }
  get end_Range() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[6]/div[2]/div[1]/input[1]'
    );
  }

  //Events Add- Single range

  get event_Tab() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]'
    );
  }
  get event_Add_Button() {
    return $("//button[@aria-label='Add Button']//*[name()='svg']");
  }
  get event_Name_Click() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]'
    );
  }
  get event_Name_Select() {
    return $("div[id='menu-TypeId'] li:nth-child(7)");
  }
  get event_Single_Comment() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]'
    );
  }
  get event_Add() {
    return $("button[aria-label='Custom Submit Button']");
  }
  get event_create_message() {
    return $('.MuiTypography-root.MuiTypography-body1Medium.css-t9cmbk');
  }
  get event_singleLocalization_verify() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[6]'
    );
  }
  get event_nextLocalization() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/button[3]/*[name()='svg'][1]"
    );
  }
  get event_previousLocalization() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/button[2]/*[name()='svg'][1]"
    );
  }
  get event_select_singleRange() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]'
    );
  }
  //Events Add- Double range
  get event_DoubleName_Select() {
    return $('/html[1]/body[1]/div[7]/div[3]/ul[1]/li[6]');
  }
  get event_DoubleName_Selects() {
    return $('/html[1]/body[1]/div[7]/div[3]/ul[1]/li[7]');
  }
  get event_DoubleName_Click() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]'
    );
  }
  get event_Start_Localization() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/div[1]/input[1]'
    );
  }
  get event_End_Localization() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[3]/div[2]/div[1]/input[1]'
    );
  }
  get event_Placement_click() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]/div[1]'
    );
  }
  get event_Left_click() {
    return $('/html[1]/body[1]/div[7]/div[3]/ul[1]/li[1]');
  }
  get event_doubleLocalization_verify() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[6]'
    );
  }
  get event_select_doubleRange() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[8]'
    );
  }
  get event_editEvent() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)'
    );
  }
  get event_endValueVerify() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[9]/span[1]'
    );
  }
  get event_deleteEvent() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/button[1]'
    );
  }
  get event_deleteConfirm() {
    return $("button[aria-label='confirm']");
  }
  get event_CrossButton() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]/*[name()='svg'][1]/*[name()='path'][1]"
    );
  }

  //localization Edit
  get event_EditLocalization() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]'
    );
  }

  //Add Speed zone
  get Random_Click_Speed_Zone() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get Add_Speed_Zone() {
    return $(
      "//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9']//*[name()='svg']"
    );
  }
  get Speed_Zone_Name() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]'
    );
  }
  get Speed_Zone_Min_Value() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get Speed_Zone_Max_Value() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get Speed_Zone_Name1() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[2]/div[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]'
    );
  }
  get Max_Value_Check() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]'
    );
  }

  get Max_Value_1() {
    return $(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
    );
  }
  get Min_Value_1() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[2]/div[8]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]'
    );
  }

  //Defect Tab

  get defect() {
    return $(
      '//body[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]'
    );
  }
  get rightArrow() {
    return $("//button[@aria-label='Next Button']");
  }
  get leftArrow() {
    return $("//button[@aria-label='Previous Button']");
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  // open () {
  //     return super.open('login');
  //}

  open() {
    super.open(
      'http://ambergrms.seliselocal.com/login?go=/project/project-list'
    );
  }
}

export default new LoginPage();
