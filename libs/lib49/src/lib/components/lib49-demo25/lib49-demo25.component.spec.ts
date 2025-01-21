import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo25Component } from './lib49-demo25.component';

describe('Lib49Demo25Component', () => {
  let component: Lib49Demo25Component;
  let fixture: ComponentFixture<Lib49Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
