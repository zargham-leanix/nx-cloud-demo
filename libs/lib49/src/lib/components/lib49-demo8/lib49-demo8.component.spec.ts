import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo8Component } from './lib49-demo8.component';

describe('Lib49Demo8Component', () => {
  let component: Lib49Demo8Component;
  let fixture: ComponentFixture<Lib49Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
