OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "您的使用者帳號已被停用，請聯絡系統管理員。",
    "Saved" : "已儲存",
    "Could not save" : "無法儲存",
    "Provider" : "提供者",
    "Unknown error, please check the log file for more details." : "未知的錯誤，請檢查伺服器記錄檔案以取得更多資訊。",
    "Direct log in" : "直接登入",
    "SSO & SAML log in" : "SSO & SAML 登入",
    "This page should not be visited directly." : "不應直接存取此頁面。",
    "Provider " : "提供者",
    "X.509 certificate of the Service Provider" : "服務提供者的 X.509 憑證",
    "Private key of the Service Provider" : "服務提供者的私鑰",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "指出此 SP 傳送的 <samlp:logoutRequest> nameID 將會被加密。",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "指出此 SP 傳送的 <samlp:AuthnRequest> 訊息是否會被簽署。[SP 的詮釋資料將會提供此資訊]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "指出此 SP 傳送的 <samlp:logoutRequest> 訊息是否會被簽署。",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "指出此 SP 傳送的 <samlp:logoutResponse> 訊息是否會被簽署。",
    "Whether the metadata should be signed." : "詮釋資料是否應被簽署。",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "指出對此 SP 接收的 <samlp:Response>、<samlp:LogoutRequest> 與 <samlp:LogoutResponse> 元素進行簽署的要求。",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "指出此 SP 接收的 <saml:Assertion> 元素需要簽署的要求。[SP 的詮釋資料將會提供此資訊]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "指出此 SP 接收的 <saml:Assertion> 元素需要加密的要求。",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "指出此 SP 接收的 SAMLResponse 上的 NameID 元素的要求。",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "表示對此 SP 接收的 NameID 進行加密的要求。",
    "Indicates if the SP will validate all received XML." : "指出 SP 是否驗證所有接收的 XML。",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL - 將 SAML 資料編碼為小寫，預設情況下，該工具箱使用大寫。在簽章驗證時啟用 ADFS 相容性。",
    "Algorithm that the toolkit will use on signing process." : "工具箱將在簽章流程中使用的演算法。",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "從 $_SERVER 擷取查詢參數。某些 SAML 伺服器在 SLO 請求上要求這麼做。",
    "Attribute to map the UID to." : "對映至 UID 的屬性。",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "僅在帳號存在於其他後端時才允許身份驗證（例如 LDAP）。",
    "Attribute to map the displayname to." : "對映至顯示名稱的屬性。",
    "Attribute to map the email address to." : "對映至電子郵件的屬性。",
    "Attribute to map the quota to." : "對映至配額的屬性。",
    "Attribute to map the users home to." : "對映至使用者家目錄的屬性。",
    "Attribute to map the users groups to." : "對映至使用者群組的屬性。",
    "Attribute to map the users MFA login status" : "對映至使用者 MFA 登入狀態的屬性。",
    "Group Mapping Prefix, default: %s" : "群組對應前綴，預設值：%s",
    "Reject members of these groups. This setting has precedence over required memberships." : "拒絕這些群組的成員。此設定優先於所需的成員資格。",
    "Group A, Group B, …" : "群組 A, 群組 B……",
    "Require membership in these groups, if any." : "必須為這些群組的成員（若有）。",
    "Email address" : "電子郵件地址",
    "Encrypted" : "已加密",
    "Entity" : "實體",
    "Kerberos" : "Kerberos",
    "Persistent" : "持久",
    "Transient" : "臨時",
    "Unspecified" : "未指定",
    "Windows domain qualified name" : "Windows 網域限定名稱",
    "X509 subject name" : "X509 主體名稱",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "為 %s 桌面客戶端使用 SAML 認證（需要使用者重新驗證）",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "身份提供者的選擇性顯示名稱（預設：「SSO & SAML 登入」）",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "允許使用多個使用者後端（例如 LDAP）",
    "SSO & SAML authentication" : "SSO & SAML 驗證",
    "Authenticate using single sign-on" : "使用單一登入驗證",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "使用 Nextcloud 的 SSO & SAML 應用程式，您可以輕鬆地將現有的單一登入解決方案與 Nextcloud 整合。此外，您可以使用 Nextcloud LDAP 使用者提供程式為使用者（例如分享時）提供便利。\n目前支援並測試過以下提供者：\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory 聯合服務 (ADFS)\n\n* **透過環境變數驗證**\n\t* Kerberos (mod_auth_kerb)\n\t* 任何使用環境變數驗證的其他提供者\n\n理論上，實作了上述標準的任何其他身份驗證提供者都是相容的，但我們必須指出，它們並不屬於任何內部測試矩陣。",
    "Open documentation" : "開啟說明文件",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "請確保設定一個可以透過 SSO 存取站台的管理員使用者。您將無法使用您的普通 %s 帳號登入，除非您啟用了「%s」，或是直接存取 URL %s。",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "請確保設定一個可以透過 SSO 存取站台的管理員使用者。您將無法使用您的普通 %s 帳號登入，除非您直接存取 URL %s。",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "請選擇是否要使用 Nextcloud 內建的 SAML 提供者進行身份驗證，還是要根據環境變數進行身份驗證。",
    "Use built-in SAML authentication" : "使用內建的 SAML 驗證",
    "Use environment variable" : "使用環境變數",
    "Global settings" : "全域設定",
    "Remove identity provider" : "移除身份提供者",
    "Add identity provider" : "新增身份提供者",
    "General" : "一般",
    "Service Provider Data" : "服務提供者資料",
    "If your Service Provider should use certificates you can optionally specify them here." : "若您的服務提供者需要使用憑證，您可以在此處指定。",
    "Show Service Provider settings…" : "顯示服務提供者設定……",
    "Name ID format" : "名稱 ID 格式",
    "Identity Provider Data" : "身份提供者資料",
    "Identifier of the IdP entity (must be a URI)" : "IdP 實體的識別字串（必須為 URI）",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "IdP 的 URL 目標，其中 SP 將會傳送驗證請求訊息",
    "Show optional Identity Provider settings…" : "顯示選擇性的身份提供者設定……",
    "URL Location of the IdP where the SP will send the SLO Request" : "SP 要傳送 SLO 請求的 IdP URL 位置",
    "URL Location of the IDP's SLO Response" : "IdP 的 SLO 回應的 URL 位置",
    "Public X.509 certificate of the IdP" : "IdP 的公開 X.509 憑證",
    "Attribute mapping" : "屬性對映",
    "If you want to optionally map attributes to the user you can configure these here." : "若您想要選擇性地將屬性對映至使用者，您可以在此處設定。",
    "Show attribute mapping settings…" : "顯示屬性對映設定……",
    "Security settings" : "安全性設定",
    "For increased security we recommend enabling the following settings if supported by your environment." : "為了提升安全性，若您的環境支援，建議啟用以下設定。",
    "Show security settings…" : "顯示安全性設定……",
    "Signatures and encryption offered" : "提供簽章與加密",
    "Signatures and encryption required" : "需要簽章與加密",
    "User filtering" : "使用者過濾",
    "If you want to optionally restrict user login depending on user data, configure it here." : "若您想要根據使用者資料選擇性地限制使用者登入，請在此處設定。",
    "Show user filtering settings …" : "顯示使用者過濾設定……",
    "Download metadata XML" : "下載詮釋資料 XML",
    "Reset settings" : "重設設定",
    "Metadata invalid" : "詮釋資料無效",
    "Metadata valid" : "詮釋資料有效",
    "Error" : "錯誤",
    "Access denied." : "拒絕存取。",
    "Your account is denied, access to this service is thus not possible." : "您的帳號已被拒絕存取，因此無法存取此服務。",
    "Account not provisioned." : "尚未設定帳號。",
    "Your account is not provisioned, access to this service is thus not possible." : "尚未設定您的帳號，因此無法存取此服務。",
    "Login options:" : "登入選項：",
    "Choose an authentication provider" : "選擇驗證提供者",
    "Group Mapping Prefix, default: SAML_" : "群組對應前綴，預設值：SAML_"
},
"nplurals=1; plural=0;");
