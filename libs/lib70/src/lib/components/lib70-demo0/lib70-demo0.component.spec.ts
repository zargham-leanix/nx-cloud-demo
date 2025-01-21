import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo0Component } from './lib70-demo0.component';

describe('Lib70Demo0Component', () => {
  let component: Lib70Demo0Component;
  let fixture: ComponentFixture<Lib70Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
