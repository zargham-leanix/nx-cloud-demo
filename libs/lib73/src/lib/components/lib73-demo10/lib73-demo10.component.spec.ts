import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo10Component } from './lib73-demo10.component';

describe('Lib73Demo10Component', () => {
  let component: Lib73Demo10Component;
  let fixture: ComponentFixture<Lib73Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
