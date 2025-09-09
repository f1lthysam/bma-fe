// src/pages/Dashboard.js (Definitive, Corrected, and Complete Version)

import React, { useState } from "react";
import "./Dashboard.css";
import { Modal, Button, Form, Alert, Dropdown } from "react-bootstrap";
import useWindowSize from "../hooks/useWindowSize";

// --- SVG & PNG IMPORTS (All assets included) ---
import { ReactComponent as WebsiteIcon } from "../assets/icons/website-icon.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram-icon.svg";
import { ReactComponent as XIcon } from "../assets/icons/x-icon.svg";
import { ReactComponent as BehanceIcon } from "../assets/icons/behance-icon.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook-icon.svg";
// eslint-disable-next-line no-unused-vars
import { ReactComponent as GenericVaultIcon } from "../assets/icons/generic-vault.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github-icon.svg";
import { ReactComponent as GmailIcon } from "../assets/icons/gmail-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin-icon.svg";
import { ReactComponent as PinterestIcon } from "../assets/icons/pinterest-icon.svg";
import { ReactComponent as RedditIcon } from "../assets/icons/reddit-icon.svg";
import { ReactComponent as SpotifyIcon } from "../assets/icons/spotify-icon.svg";
import { ReactComponent as SteamIcon } from "../assets/icons/steam-icon.svg";
import { ReactComponent as ThreeDotsVerticalIcon } from "../assets/icons/three-dots-vertical.svg";
import { ReactComponent as WhatsAppIcon } from "../assets/icons/whatsapp-icon.svg";
import { ReactComponent as NotesIcon } from "../assets/icons/notes-icon.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-icon.svg";

import codepenIconPng from "../assets/icons/codepen-icon.png";
import dribbbleIconPng from "../assets/icons/dribble-icon.png";
import figmaIconPng from "../assets/icons/figma-icon.png";
import gitlabIconPng from "../assets/icons/gitlabs-icon.png";
import mediumIconPng from "../assets/icons/medium-icon.png";
import notionIconPng from "../assets/icons/notion-icon.png";
import slackIconPng from "../assets/icons/slack-icon.png";
import stackoverflowIconPng from "../assets/icons/stackoverflow-icon.png";
import trelloIconPng from "../assets/icons/trello-icon.png";

const ALL_PREDEFINED_VAULTS = [
  { name: "Websites", icon: <WebsiteIcon />, identifier: "" },
  { name: "YouTube", icon: <YoutubeIcon />, identifier: "youtube.com" },
  { name: "Instagram", icon: <InstagramIcon />, identifier: "instagram.com" },
  { name: "X", icon: <XIcon />, identifier: "x.com" },
  {
    name: "Notes",
    icon: <NotesIcon />,
    identifier: "NOTE",
    customClass: "notes-icon-wrapper",
  },
  { name: "Behance", identifier: "behance.net", icon: <BehanceIcon /> },
  {
    name: "CodePen",
    identifier: "codepen.io",
    icon: <img src={codepenIconPng} alt="CodePen" />,
  },
  { name: "Discord", identifier: "discord.com", icon: <DiscordIcon /> },
  {
    name: "Dribbble",
    identifier: "dribbble.com",
    icon: <img src={dribbbleIconPng} alt="Dribbble" />,
  },
  { name: "Facebook", identifier: "facebook.com", icon: <FacebookIcon /> },
  {
    name: "Figma",
    identifier: "figma.com",
    icon: <img src={figmaIconPng} alt="Figma" />,
  },
  { name: "GitHub", identifier: "github.com", icon: <GithubIcon /> },
  {
    name: "GitLab",
    identifier: "gitlab.com",
    icon: <img src={gitlabIconPng} alt="GitLab" />,
  },
  { name: "Gmail", identifier: "mail.google.com", icon: <GmailIcon /> },
  { name: "LinkedIn", identifier: "linkedin.com", icon: <LinkedinIcon /> },
  {
    name: "Medium",
    identifier: "medium.com",
    icon: <img src={mediumIconPng} alt="Medium" />,
  },
  {
    name: "Notion",
    identifier: "notion.so",
    icon: <img src={notionIconPng} alt="Notion" />,
  },
  { name: "Pinterest", identifier: "pinterest.com", icon: <PinterestIcon /> },
  { name: "Reddit", identifier: "reddit.com", icon: <RedditIcon /> },
  {
    name: "Slack",
    identifier: "slack.com",
    icon: <img src={slackIconPng} alt="Slack" />,
  },
  { name: "Spotify", identifier: "open.spotify.com", icon: <SpotifyIcon /> },
  {
    name: "Stack Overflow",
    identifier: "stackoverflow.com",
    icon: <img src={stackoverflowIconPng} alt="Stack Overflow" />,
  },
  { name: "Steam", identifier: "steamcommunity.com", icon: <SteamIcon /> },
  {
    name: "Trello",
    identifier: "trello.com",
    icon: <img src={trelloIconPng} alt="Trello" />,
  },
  { name: "WhatsApp", identifier: "wa.me", icon: <WhatsAppIcon /> },
].sort((a, b) => a.name.localeCompare(b.name));

const initialVaults = ALL_PREDEFINED_VAULTS.filter((vault) =>
  ["Websites", "YouTube", "Instagram", "X", "Notes"].includes(vault.name)
);

const Dashboard = ({ user }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [content, setContent] = useState("");
  const [selectedVault, setSelectedVault] = useState("Websites");
  const [autoDetectedVault, setAutoDetectedVault] = useState(null);
  const [showMismatchWarning, setShowMismatchWarning] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userVaults, setUserVaults] = useState(initialVaults);
  const [showAddVaultModal, setShowAddVaultModal] = useState(false);
  const [newVaultName, setNewVaultName] = useState("");
  const [selectedIdentifier, setSelectedIdentifier] = useState("custom");
  const [customIdentifier, setCustomIdentifier] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [identifierSearchTerm, setIdentifierSearchTerm] = useState("");
  const [editingVault, setEditingVault] = useState(null);
  const [openVaultMenu, setOpenVaultMenu] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleLinkModalClose = () => {
    setShowLinkModal(false);
    setContent("");
    setSelectedVault("Websites");
    setAutoDetectedVault(null);
    setShowMismatchWarning(false);
  };
  const handleLinkModalShow = () => setShowLinkModal(true);
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    const isUrl = /^(http|https|www\.)|\.\w{2,}/.test(newContent);
    let detectedVaultName = "Websites";
    if (!isUrl && newContent.length > 0) {
      detectedVaultName = "Notes";
    } else if (isUrl) {
      for (const vault of userVaults) {
        if (
          vault.identifier &&
          vault.identifier !== "NOTE" &&
          newContent.includes(vault.identifier)
        ) {
          detectedVaultName = vault.name;
          break;
        }
      }
    }
    setAutoDetectedVault(detectedVaultName);
    setSelectedVault(detectedVaultName);
    setShowMismatchWarning(false);
  };
  const handleVaultSelectionChange = (e) => {
    const userChoice = e.target.value;
    setSelectedVault(userChoice);
    if (autoDetectedVault && userChoice !== autoDetectedVault) {
      setShowMismatchWarning(true);
    } else {
      setShowMismatchWarning(false);
    }
  };
  const handleRevertToDetected = () => {
    setSelectedVault(autoDetectedVault);
    setShowMismatchWarning(false);
  };
  const handleSaveLink = () => {
    console.log("Saving bookmark:", { url: content, vault: selectedVault });
    handleLinkModalClose();
  };
  const handleAddVaultShow = () => {
    setEditingVault(null);
    setShowAddVaultModal(true);
  };
  const handleAddVaultClose = () => {
    setShowAddVaultModal(false);
    setNewVaultName("");
    setSelectedIdentifier("custom");
    setCustomIdentifier("");
    setUploadedFile(null);
    setFileError("");
    setEditingVault(null);
    setIdentifierSearchTerm(""); // <-- ADD THIS LINE
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setFileError("File is too large. Max size is 1MB.");
        return;
      }
      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        setFileError("Invalid file type. Please use PNG, JPG, or JPEG.");
        return;
      }
      setFileError("");
      setUploadedFile(file);
    }
  };
  const handleDeleteVault = (vaultNameToDelete) => {
    setUserVaults((currentVaults) =>
      currentVaults.filter((vault) => vault.name !== vaultNameToDelete)
    );
  };
  const handleEditVault = (vaultToEdit) => {
    setEditingVault(vaultToEdit);
    setNewVaultName(vaultToEdit.name);
    const isPredefined = ALL_PREDEFINED_VAULTS.some(
      (p) => p.identifier === vaultToEdit.identifier
    );
    if (isPredefined) {
      setSelectedIdentifier(vaultToEdit.identifier);
      setCustomIdentifier("");
    } else {
      setSelectedIdentifier("custom");
      setCustomIdentifier(vaultToEdit.identifier);
    }
    setUploadedFile(null);
    setFileError("");
    setShowAddVaultModal(true);
  };
  const handleSaveNewVault = () => {
    if (!newVaultName.trim()) return;
    const identifierToSave =
      selectedIdentifier === "custom" ? customIdentifier : selectedIdentifier;
    let newIcon;
    if (selectedIdentifier === "custom") {
      if (uploadedFile) {
        newIcon = (
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt={newVaultName}
            className="vault-custom-img"
          />
        );
      } else if (
        editingVault &&
        (!editingVault.identifier ||
          editingVault.identifier === customIdentifier)
      ) {
        newIcon = editingVault.icon;
      } else {
        newIcon = <GenericVaultIcon />;
      }
    } else {
      const predefined = ALL_PREDEFINED_VAULTS.find(
        (p) => p.identifier === selectedIdentifier
      );
      newIcon = predefined.icon;
    }
    if (editingVault) {
      setUserVaults((currentVaults) =>
        currentVaults.map((vault) =>
          vault.name === editingVault.name
            ? {
                ...vault,
                name: newVaultName,
                icon: newIcon,
                identifier: identifierToSave,
              }
            : vault
        )
      );
    } else {
      const newVault = {
        name: newVaultName,
        icon: newIcon,
        identifier: identifierToSave,
      };
      setUserVaults((currentVaults) => [...currentVaults, newVault]);
    }
    handleAddVaultClose();
  };
  const handleToggleVaultMenu = (vaultName) => {
    setOpenVaultMenu((prevOpen) => (prevOpen === vaultName ? null : vaultName));
  };
  const filteredIdentifiers = ALL_PREDEFINED_VAULTS.filter((p) =>
    p.name.toLowerCase().startsWith(identifierSearchTerm.toLowerCase())
  );

  // This "effect" runs whenever the filtered list or search term changes
  React.useEffect(() => {
    // Auto-select logic:
    if (
      filteredIdentifiers.length === 1 &&
      filteredIdentifiers[0].name.toLowerCase() ===
        identifierSearchTerm.toLowerCase()
    ) {
      setSelectedIdentifier(filteredIdentifiers[0].identifier);
    }
  }, [filteredIdentifiers, identifierSearchTerm]);

  const filteredVaults = userVaults.filter((vault) =>
    vault.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container container mt-4">
      <div className="d-flex align-items-center mb-4">
        <h2 className="dashboard-header-title mb-0 me-3">Vaults</h2>
        <hr className="flex-grow-1" />
      </div>
      <div className="search-bar-wrapper mb-4">
        <Form.Control
          type="search"
          placeholder="Search vaults..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row g-3">
        {filteredVaults.map((vault) => (
          <div key={vault.name} className="col-12 col-md-4 col-lg-2">
            <div className="vault-card">
              <div className="vault-card-content">
                <div className={`vault-icon ${vault.customClass || ""}`}>
                  {vault.icon}
                </div>
                <span className="vault-name">{vault.name}</span>
              </div>
              <div className="vault-options-container">
                {openVaultMenu === vault.name ? (
                  <div className="vault-actions-revealed">
                    <button
                      className="vault-action-btn"
                      onClick={() => handleEditVault(vault)}
                    >
                      Edit
                    </button>
                    <span className="action-divider">|</span>
                    <button
                      onClick={() => handleDeleteVault(vault.name)}
                      className="vault-action-btn delete"
                    >
                      Delete
                    </button>
                  </div>
                ) : null}
                <button
                  className="vault-options-btn"
                  onClick={() => handleToggleVaultMenu(vault.name)}
                >
                  <ThreeDotsVerticalIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 col-md-4 col-lg-2">
          <button
            className="vault-card vault-card-dashed"
            onClick={handleAddVaultShow}
          >
            <div className="vault-card-content">
              <div className="vault-icon add-icon-wrapper">
                <PlusIcon />
              </div>
              <span className="vault-name">Add Vault</span>
            </div>
          </button>
        </div>
      </div>

      <button className="floating-add-btn" onClick={handleLinkModalShow}>
        <PlusIcon />
      </button>

      <Modal show={showLinkModal} onHide={handleLinkModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {selectedVault === "Notes" ? (
              <Form.Group className="mb-3">
                <Form.Label>Enter your note</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your thoughts..."
                  value={content}
                  onChange={handleContentChange}
                  autoFocus
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3">
                <Form.Label>Paste your link</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://..."
                  value={content}
                  onChange={handleContentChange}
                  autoFocus
                />
              </Form.Group>
            )}
            <Form.Group>
              <Form.Label>Select Vault</Form.Label>
              <Form.Select
                value={selectedVault}
                onChange={handleVaultSelectionChange}
                disabled={!content}
              >
                {userVaults.map((vault) => (
                  <option key={vault.name} value={vault.name}>
                    {vault.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {showMismatchWarning && (
              <Alert variant="warning" className="mt-3 mismatch-alert">
                <Alert.Heading as="h6">Category Mismatch</Alert.Heading>
                <p>
                  This link seems to be for <strong>{autoDetectedVault}</strong>
                  , but you've selected the <strong>{selectedVault}</strong>{" "}
                  vault.
                </p>
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={handleRevertToDetected}
                  >
                    Switch back to {autoDetectedVault}
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => setShowMismatchWarning(false)}
                  >
                    Keep my selection
                  </Button>
                </div>
              </Alert>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLinkModalClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleSaveLink}>
            Save Bookmark
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddVaultModal} onHide={handleAddVaultClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingVault ? "Edit Vault" : "Add New Vault"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Vault Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Design Tools"
                value={newVaultName}
                onChange={(e) => setNewVaultName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vault Identifier</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  className="w-100 d-flex justify-content-between align-items-center"
                >
                  {selectedIdentifier === "custom"
                    ? "Custom"
                    : ALL_PREDEFINED_VAULTS.find(
                        (p) => p.identifier === selectedIdentifier
                      )?.name}
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100 identifier-dropdown-menu">
                  {/* The new search input field */}
                  <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setIdentifierSearchTerm(e.target.value)}
                    value={identifierSearchTerm}
                    onClick={(e) => e.stopPropagation()} // Prevents dropdown from closing on click
                  />

                  {/* The scrollable container for the results */}
                  <div className="identifier-dropdown-scroll-container">
                    <Dropdown.Item
                      onClick={() => {
                        setSelectedIdentifier("custom");
                        setIdentifierSearchTerm("");
                      }}
                    >
                      Custom
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    {/* Map over the NEW filtered list */}
                    {filteredIdentifiers.map((p) => (
                      <Dropdown.Item
                        key={p.identifier || p.name}
                        onClick={() => {
                          setSelectedIdentifier(p.identifier);
                          setIdentifierSearchTerm("");
                        }}
                        className="d-flex align-items-center gap-2"
                      >
                        <span className="identifier-icon-mini">{p.icon}</span>
                        <span>
                          {p.name} ({p.identifier})
                        </span>
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            {selectedIdentifier === "custom" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Custom Identifier (URL contains...)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., my-portfolio.com"
                    value={customIdentifier}
                    onChange={(e) => setCustomIdentifier(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Logo (Optional)</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileChange}
                  />
                  {fileError && (
                    <Form.Text className="text-danger">{fileError}</Form.Text>
                  )}
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddVaultClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveNewVault}
            disabled={!newVaultName.trim()}
          >
            Save Vault
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
