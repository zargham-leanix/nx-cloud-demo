import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo43Component } from './lib40-demo43.component';

describe('Lib40Demo43Component', () => {
  let component: Lib40Demo43Component;
  let fixture: ComponentFixture<Lib40Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
