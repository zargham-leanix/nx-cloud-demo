import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo2Component } from './lib56-demo2.component';

describe('Lib56Demo2Component', () => {
  let component: Lib56Demo2Component;
  let fixture: ComponentFixture<Lib56Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
