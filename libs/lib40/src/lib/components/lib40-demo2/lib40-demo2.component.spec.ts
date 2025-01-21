import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo2Component } from './lib40-demo2.component';

describe('Lib40Demo2Component', () => {
  let component: Lib40Demo2Component;
  let fixture: ComponentFixture<Lib40Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
