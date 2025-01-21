import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo4Component } from './lib73-demo4.component';

describe('Lib73Demo4Component', () => {
  let component: Lib73Demo4Component;
  let fixture: ComponentFixture<Lib73Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
