import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo0Component } from './lib65-demo0.component';

describe('Lib65Demo0Component', () => {
  let component: Lib65Demo0Component;
  let fixture: ComponentFixture<Lib65Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
