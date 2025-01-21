import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo3Component } from './lib15-demo3.component';

describe('Lib15Demo3Component', () => {
  let component: Lib15Demo3Component;
  let fixture: ComponentFixture<Lib15Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
