import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo17Component } from './lib40-demo17.component';

describe('Lib40Demo17Component', () => {
  let component: Lib40Demo17Component;
  let fixture: ComponentFixture<Lib40Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
