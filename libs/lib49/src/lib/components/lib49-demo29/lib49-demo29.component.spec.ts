import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo29Component } from './lib49-demo29.component';

describe('Lib49Demo29Component', () => {
  let component: Lib49Demo29Component;
  let fixture: ComponentFixture<Lib49Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
