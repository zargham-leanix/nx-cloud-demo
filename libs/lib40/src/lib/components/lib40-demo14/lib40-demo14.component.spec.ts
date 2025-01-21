import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo14Component } from './lib40-demo14.component';

describe('Lib40Demo14Component', () => {
  let component: Lib40Demo14Component;
  let fixture: ComponentFixture<Lib40Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
