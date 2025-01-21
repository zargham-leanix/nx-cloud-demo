import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo27Component } from './lib54-demo27.component';

describe('Lib54Demo27Component', () => {
  let component: Lib54Demo27Component;
  let fixture: ComponentFixture<Lib54Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
