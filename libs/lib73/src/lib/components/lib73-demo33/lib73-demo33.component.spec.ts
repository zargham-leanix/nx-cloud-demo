import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo33Component } from './lib73-demo33.component';

describe('Lib73Demo33Component', () => {
  let component: Lib73Demo33Component;
  let fixture: ComponentFixture<Lib73Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
