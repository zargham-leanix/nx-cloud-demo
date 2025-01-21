import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo41Component } from './lib67-demo41.component';

describe('Lib67Demo41Component', () => {
  let component: Lib67Demo41Component;
  let fixture: ComponentFixture<Lib67Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
