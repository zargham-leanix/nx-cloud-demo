import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo6Component } from './lib15-demo6.component';

describe('Lib15Demo6Component', () => {
  let component: Lib15Demo6Component;
  let fixture: ComponentFixture<Lib15Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
