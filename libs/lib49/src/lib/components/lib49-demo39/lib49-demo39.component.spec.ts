import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo39Component } from './lib49-demo39.component';

describe('Lib49Demo39Component', () => {
  let component: Lib49Demo39Component;
  let fixture: ComponentFixture<Lib49Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
