import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo41Component } from './lib49-demo41.component';

describe('Lib49Demo41Component', () => {
  let component: Lib49Demo41Component;
  let fixture: ComponentFixture<Lib49Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
