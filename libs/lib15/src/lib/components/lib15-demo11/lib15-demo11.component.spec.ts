import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo11Component } from './lib15-demo11.component';

describe('Lib15Demo11Component', () => {
  let component: Lib15Demo11Component;
  let fixture: ComponentFixture<Lib15Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
