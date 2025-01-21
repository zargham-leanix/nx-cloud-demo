import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo11Component } from './lib40-demo11.component';

describe('Lib40Demo11Component', () => {
  let component: Lib40Demo11Component;
  let fixture: ComponentFixture<Lib40Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
