import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo8Component } from './lib67-demo8.component';

describe('Lib67Demo8Component', () => {
  let component: Lib67Demo8Component;
  let fixture: ComponentFixture<Lib67Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
