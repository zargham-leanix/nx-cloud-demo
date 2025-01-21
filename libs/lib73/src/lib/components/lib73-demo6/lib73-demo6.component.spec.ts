import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo6Component } from './lib73-demo6.component';

describe('Lib73Demo6Component', () => {
  let component: Lib73Demo6Component;
  let fixture: ComponentFixture<Lib73Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
