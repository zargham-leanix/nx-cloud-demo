import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo15Component } from './lib73-demo15.component';

describe('Lib73Demo15Component', () => {
  let component: Lib73Demo15Component;
  let fixture: ComponentFixture<Lib73Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
