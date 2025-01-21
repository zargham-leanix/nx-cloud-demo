import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo45Component } from './lib15-demo45.component';

describe('Lib15Demo45Component', () => {
  let component: Lib15Demo45Component;
  let fixture: ComponentFixture<Lib15Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
