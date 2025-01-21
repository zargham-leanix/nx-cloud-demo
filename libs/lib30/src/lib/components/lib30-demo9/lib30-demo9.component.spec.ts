import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo9Component } from './lib30-demo9.component';

describe('Lib30Demo9Component', () => {
  let component: Lib30Demo9Component;
  let fixture: ComponentFixture<Lib30Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
