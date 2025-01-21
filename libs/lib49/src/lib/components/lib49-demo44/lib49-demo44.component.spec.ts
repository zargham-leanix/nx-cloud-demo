import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo44Component } from './lib49-demo44.component';

describe('Lib49Demo44Component', () => {
  let component: Lib49Demo44Component;
  let fixture: ComponentFixture<Lib49Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
