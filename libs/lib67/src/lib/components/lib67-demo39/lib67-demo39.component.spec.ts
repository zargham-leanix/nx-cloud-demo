import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo39Component } from './lib67-demo39.component';

describe('Lib67Demo39Component', () => {
  let component: Lib67Demo39Component;
  let fixture: ComponentFixture<Lib67Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
