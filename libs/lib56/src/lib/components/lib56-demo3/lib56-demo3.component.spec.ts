import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo3Component } from './lib56-demo3.component';

describe('Lib56Demo3Component', () => {
  let component: Lib56Demo3Component;
  let fixture: ComponentFixture<Lib56Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
