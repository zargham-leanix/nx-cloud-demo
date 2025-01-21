import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo12Component } from './lib49-demo12.component';

describe('Lib49Demo12Component', () => {
  let component: Lib49Demo12Component;
  let fixture: ComponentFixture<Lib49Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
