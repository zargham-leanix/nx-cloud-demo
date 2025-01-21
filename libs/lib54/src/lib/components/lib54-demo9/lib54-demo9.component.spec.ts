import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo9Component } from './lib54-demo9.component';

describe('Lib54Demo9Component', () => {
  let component: Lib54Demo9Component;
  let fixture: ComponentFixture<Lib54Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
