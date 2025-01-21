import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo25Component } from './lib67-demo25.component';

describe('Lib67Demo25Component', () => {
  let component: Lib67Demo25Component;
  let fixture: ComponentFixture<Lib67Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
