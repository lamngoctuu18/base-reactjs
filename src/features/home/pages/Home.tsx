import { BaseAntTable } from '@components/tables/BaseAntTable';

const Home = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Lương',
      dataIndex: 'salary',
      key: 'salary',
      render: (value: number) => `${value.toLocaleString()} VND`,
    },
  ];

  const data = [
    {
      key: '1',
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      age: 28,
      position: 'Frontend Developer',
      salary: 15000000,
    },
    {
      key: '2',
      id: 2,
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      age: 32,
      position: 'Backend Developer',
      salary: 18000000,
    },
    {
      key: '3',
      id: 3,
      name: 'Lê Văn C',
      email: 'levanc@example.com',
      age: 26,
      position: 'UI/UX Designer',
      salary: 12000000,
    },
    {
      key: '4',
      id: 4,
      name: 'Phạm Thị D',
      email: 'phamthid@example.com',
      age: 35,
      position: 'Project Manager',
      salary: 25000000,
    },
    {
      key: '5',
      id: 5,
      name: 'Hoàng Văn E',
      email: 'hoangvane@example.com',
      age: 29,
      position: 'DevOps Engineer',
      salary: 20000000,
    },
  ];

  return (
    <div>
      <section className="p-4">
        <h1 className="font-bold">Home Page</h1>
      </section>
      <BaseAntTable columns={columns} data={data} />
    </div>
  );
};

export default Home;
