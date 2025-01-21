import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo29Component } from './lib73-demo29.component';

describe('Lib73Demo29Component', () => {
  let component: Lib73Demo29Component;
  let fixture: ComponentFixture<Lib73Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
