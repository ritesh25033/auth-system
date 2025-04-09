import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Dashboard</h2>
          </div>
          <div className="card-body">
            <h4>Welcome, {currentUser?.firstName}!</h4>
            <div className="mt-4">
              <h5>Your Profile Information:</h5>
              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <strong>Name:</strong> {currentUser?.firstName} {currentUser?.lastName}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {currentUser?.email}
                </li>
                {currentUser?.address && (
                  <li className="list-group-item">
                    <strong>Address:</strong> {currentUser?.address}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
