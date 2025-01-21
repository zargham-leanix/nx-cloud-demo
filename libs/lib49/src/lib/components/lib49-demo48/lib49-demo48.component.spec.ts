import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo48Component } from './lib49-demo48.component';

describe('Lib49Demo48Component', () => {
  let component: Lib49Demo48Component;
  let fixture: ComponentFixture<Lib49Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
