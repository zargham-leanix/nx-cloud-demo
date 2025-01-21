import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo23Component } from './lib67-demo23.component';

describe('Lib67Demo23Component', () => {
  let component: Lib67Demo23Component;
  let fixture: ComponentFixture<Lib67Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
