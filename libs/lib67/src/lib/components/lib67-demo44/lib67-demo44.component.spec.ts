import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo44Component } from './lib67-demo44.component';

describe('Lib67Demo44Component', () => {
  let component: Lib67Demo44Component;
  let fixture: ComponentFixture<Lib67Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
