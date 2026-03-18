import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors, User, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '../AuthContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signIn, signOut, role } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ed]/80 backdrop-blur-md border-b border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Scissors className="w-6 h-6 text-[#5A5A40] group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-serif tracking-tight text-[#1a1a1a]">
              Threading <span className="italic">by Rini</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors hover:text-[#5A5A40]",
                  location.pathname === item.path ? "text-[#5A5A40] border-b border-[#5A5A40]" : "text-[#1a1a1a]/60"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Auth Section */}
            <div className="relative">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-sm font-medium text-[#1a1a1a] hover:text-[#5A5A40] transition-colors"
                  >
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border border-[#1a1a1a]/10" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#5A5A40] flex items-center justify-center text-white">
                        <User size={16} />
                      </div>
                    )}
                    <ChevronDown size={14} className={cn("transition-transform", isUserMenuOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#1a1a1a]/5 py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-[#1a1a1a]/5">
                          <p className="text-sm font-medium text-[#1a1a1a] truncate">{user.displayName}</p>
                          <p className="text-xs text-[#1a1a1a]/40 truncate capitalize">{role}</p>
                        </div>
                        <button
                          onClick={() => {
                            signOut();
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={16} />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={signIn}
                  className="px-4 py-2 bg-[#5A5A40] text-white text-sm uppercase tracking-widest font-medium rounded-full hover:bg-[#4a4a34] transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {user && (
              <img src={user.photoURL || ''} alt="" className="w-8 h-8 rounded-full border border-[#1a1a1a]/10" />
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1a1a1a]"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#f5f2ed] border-b border-[#1a1a1a]/10 px-4 pt-2 pb-6 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-serif tracking-wide",
                location.pathname === item.path ? "text-[#5A5A40]" : "text-[#1a1a1a]/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#1a1a1a]/10">
            {user ? (
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-600 font-medium"
              >
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  signIn();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-[#5A5A40] text-white rounded-xl font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
