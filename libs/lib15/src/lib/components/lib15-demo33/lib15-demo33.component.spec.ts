import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo33Component } from './lib15-demo33.component';

describe('Lib15Demo33Component', () => {
  let component: Lib15Demo33Component;
  let fixture: ComponentFixture<Lib15Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
