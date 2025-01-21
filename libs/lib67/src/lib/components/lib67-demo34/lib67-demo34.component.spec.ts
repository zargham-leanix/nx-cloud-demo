import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo34Component } from './lib67-demo34.component';

describe('Lib67Demo34Component', () => {
  let component: Lib67Demo34Component;
  let fixture: ComponentFixture<Lib67Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
