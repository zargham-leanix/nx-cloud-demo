import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo25Component } from './lib73-demo25.component';

describe('Lib73Demo25Component', () => {
  let component: Lib73Demo25Component;
  let fixture: ComponentFixture<Lib73Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
