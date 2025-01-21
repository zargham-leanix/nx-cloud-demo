import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo3Component } from './lib49-demo3.component';

describe('Lib49Demo3Component', () => {
  let component: Lib49Demo3Component;
  let fixture: ComponentFixture<Lib49Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
