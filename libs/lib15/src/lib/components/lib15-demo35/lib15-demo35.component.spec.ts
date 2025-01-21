import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo35Component } from './lib15-demo35.component';

describe('Lib15Demo35Component', () => {
  let component: Lib15Demo35Component;
  let fixture: ComponentFixture<Lib15Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
