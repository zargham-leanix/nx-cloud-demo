import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo34Component } from './lib49-demo34.component';

describe('Lib49Demo34Component', () => {
  let component: Lib49Demo34Component;
  let fixture: ComponentFixture<Lib49Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
