import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo4Component } from './lib67-demo4.component';

describe('Lib67Demo4Component', () => {
  let component: Lib67Demo4Component;
  let fixture: ComponentFixture<Lib67Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
