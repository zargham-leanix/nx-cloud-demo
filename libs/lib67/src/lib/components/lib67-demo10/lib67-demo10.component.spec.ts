import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo10Component } from './lib67-demo10.component';

describe('Lib67Demo10Component', () => {
  let component: Lib67Demo10Component;
  let fixture: ComponentFixture<Lib67Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
