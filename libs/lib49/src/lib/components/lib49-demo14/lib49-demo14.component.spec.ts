import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo14Component } from './lib49-demo14.component';

describe('Lib49Demo14Component', () => {
  let component: Lib49Demo14Component;
  let fixture: ComponentFixture<Lib49Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
