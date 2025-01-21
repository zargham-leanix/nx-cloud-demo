import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo4Component } from './lib49-demo4.component';

describe('Lib49Demo4Component', () => {
  let component: Lib49Demo4Component;
  let fixture: ComponentFixture<Lib49Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
