import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo12Component } from './lib73-demo12.component';

describe('Lib73Demo12Component', () => {
  let component: Lib73Demo12Component;
  let fixture: ComponentFixture<Lib73Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
