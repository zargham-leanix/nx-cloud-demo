import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo2Component } from './lib49-demo2.component';

describe('Lib49Demo2Component', () => {
  let component: Lib49Demo2Component;
  let fixture: ComponentFixture<Lib49Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
