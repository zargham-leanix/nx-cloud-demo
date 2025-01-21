import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo15Component } from './lib15-demo15.component';

describe('Lib15Demo15Component', () => {
  let component: Lib15Demo15Component;
  let fixture: ComponentFixture<Lib15Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
