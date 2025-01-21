import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo10Component } from './lib49-demo10.component';

describe('Lib49Demo10Component', () => {
  let component: Lib49Demo10Component;
  let fixture: ComponentFixture<Lib49Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
