import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo27Component } from './lib40-demo27.component';

describe('Lib40Demo27Component', () => {
  let component: Lib40Demo27Component;
  let fixture: ComponentFixture<Lib40Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
