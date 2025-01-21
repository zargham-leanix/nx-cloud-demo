import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo3Component } from './lib73-demo3.component';

describe('Lib73Demo3Component', () => {
  let component: Lib73Demo3Component;
  let fixture: ComponentFixture<Lib73Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
