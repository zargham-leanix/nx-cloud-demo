import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo26Component } from './lib67-demo26.component';

describe('Lib67Demo26Component', () => {
  let component: Lib67Demo26Component;
  let fixture: ComponentFixture<Lib67Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
