import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo41Component } from './lib15-demo41.component';

describe('Lib15Demo41Component', () => {
  let component: Lib15Demo41Component;
  let fixture: ComponentFixture<Lib15Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
