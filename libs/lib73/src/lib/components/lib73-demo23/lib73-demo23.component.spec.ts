import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo23Component } from './lib73-demo23.component';

describe('Lib73Demo23Component', () => {
  let component: Lib73Demo23Component;
  let fixture: ComponentFixture<Lib73Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
