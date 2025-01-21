import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo35Component } from './lib49-demo35.component';

describe('Lib49Demo35Component', () => {
  let component: Lib49Demo35Component;
  let fixture: ComponentFixture<Lib49Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
