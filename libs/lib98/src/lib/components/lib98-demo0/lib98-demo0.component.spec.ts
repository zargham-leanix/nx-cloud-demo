import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo0Component } from './lib98-demo0.component';

describe('Lib98Demo0Component', () => {
  let component: Lib98Demo0Component;
  let fixture: ComponentFixture<Lib98Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
