import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo12Component } from './lib15-demo12.component';

describe('Lib15Demo12Component', () => {
  let component: Lib15Demo12Component;
  let fixture: ComponentFixture<Lib15Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
