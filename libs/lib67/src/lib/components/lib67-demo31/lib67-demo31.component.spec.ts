import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo31Component } from './lib67-demo31.component';

describe('Lib67Demo31Component', () => {
  let component: Lib67Demo31Component;
  let fixture: ComponentFixture<Lib67Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
