import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo16Component } from './lib56-demo16.component';

describe('Lib56Demo16Component', () => {
  let component: Lib56Demo16Component;
  let fixture: ComponentFixture<Lib56Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
